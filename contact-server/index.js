import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { contactSchema } from "./validation/contactSchema.js";

// create an express application
const app = express();
const PORT = process.env.PORT || 3000;

// resend
const RESEND_API_KEY = process.env.API_KEY;
const resend = new Resend(RESEND_API_KEY);

// Cross-origin resource sharing (CORS)
app.use(
  cors({
    origin: ["http://localhost:5173", "https://yelfaram.com"], // ["http://localhost:5173", "https://yelfaram.com"]
  })
);
// using JSON file from any client to Express
app.use(express.json());

// TEST
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// ROUTES - Contact
app.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    console.error("Validation error:", parsed.error.format());
    return res.status(400).json({
      success: false,
      message: "Invalid input",
      issues: parsed.error.format(),
    });
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const from = `${name} <${email}>`;

    const { data, error } = await resend.emails.send({
      from: "form@yelfaram.com",
      to: ["contact@yelfaram.com"],
      replyTo: from,
      subject: `Contact Form Submission`,
      text: `Subject: ${subject}\nMessage:\n${message}`,
    });

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Email failed to send." });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// app listens to 3000 port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

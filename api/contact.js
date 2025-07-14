import { z } from "zod";
import { Resend } from "resend";
import { verifyCaptcha } from "../api/utils/verifyCaptcha";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(150),
  message: z.string().min(1).max(1000),
  token: z.string().min(1),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Not found",
    });
  }

  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    console.error("Validation error:", parsed.error.format());
    return res.status(400).json({
      success: false,
      message: "Invalid input",
      issues: parsed.error.format(),
    });
  }

  const { name, email, subject, message, token } = parsed.data;

  const captcha = await verifyCaptcha(token);

  if (!captcha.success || captcha.score < 0.5 || captcha.action !== "contact") {
    return res.status(403).json({
      success: false,
      message: "reCAPTCHA verification failed",
    });
  }

  try {
    const from = `${name} <${email}>`;

    const { error } = await resend.emails.send({
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

    const message =
      err instanceof Error ? err.message : "Internal server error";

    res.status(500).json({ success: false, message });
  }
}

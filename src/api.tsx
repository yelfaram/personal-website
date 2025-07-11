// import "dotenv/config";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: FormData) {
  const res = await fetch(`/api/contact`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message || "Something went wrong",
      issues: data.issues,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

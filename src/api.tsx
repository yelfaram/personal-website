interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  token: string;
}

export async function submitContactForm(formData: FormData) {
  const res = await fetch(`/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
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

export async function verifyCaptcha(token) {
  const verifyURL = "https://www.google.com/recaptcha/api/siteverify";

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const verifyResponse = await fetch(verifyURL, {
    method: "POST",
    body: params,
  });

  const data = await verifyResponse.json();
  return data;
}

import nodemailer from "nodemailer";

// POST /api/contact — sends the contact form to Musfirah's inbox.
// SMTP settings come from environment variables only — no credentials
// are stored in this file. See README.md ("Contact form email").
//
// Required env vars:
//   SMTP_HOST  e.g. smtp.gmail.com
//   SMTP_PORT  e.g. 587
//   SMTP_USER  e.g. musfi606@gmail.com
//   SMTP_PASS  a Gmail App Password (not the account password)

const CONTACT_EMAIL = "musfi606@gmail.com";

function isMissingConfig() {
  return !process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS;
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request — expected JSON." }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const description = typeof data.description === "string" ? data.description.trim() : "";

  if (!name || !email || !description) {
    return Response.json(
      { ok: false, error: "Please fill in your name, email and description." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (isMissingConfig()) {
    return Response.json(
      {
        ok: false,
        error:
          "Email is not configured on this site yet (SMTP settings are missing). Please email musfi606@gmail.com directly.",
      },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: `Portfolio inquiry from ${name}`,
      text: `Hi Musfirah,\n\n${description}\n\nName: ${name}\nEmail: ${email}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json(
      { ok: false, error: "Could not send your message right now — please try again or email musfi606@gmail.com directly." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/constants";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL ?? CONTACT_EMAIL;
const SENDER_NAME = process.env.BREVO_SENDER_NAME ?? "Ssebayigga Sharif";

const isConfigured = Boolean(BREVO_API_KEY && SENDER_EMAIL);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtmlContent(data: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}): string {
  const name = escapeHtml(data.from_name);
  const email = escapeHtml(data.from_email);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 20px 28px;">
        <h1 style="margin: 0; color: #ffffff; font-size: 20px;">New message from your portfolio</h1>
      </div>
      <div style="padding: 28px; color: #1e293b; font-size: 15px; line-height: 1.6;">
        <p style="margin: 0 0 16px;"><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${subject}</p>
        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
        <div style="margin: 0; padding: 14px 16px; background-color: #f8fafc; border-left: 4px solid #4f46e5; border-radius: 8px;">
          ${message}
        </div>
        <p style="margin: 24px 0 0; font-size: 13px; color: #64748b;">
          You can reply to this email and your response will go directly to ${email}.
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  if (!isConfigured) {
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { from_name, from_email, subject, message } = body ?? {};

  // Basic server-side validation (mirrors the client-side schema).
  if (typeof from_name !== "string" || from_name.trim().length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters." },
      { status: 400 },
    );
  }
  if (typeof from_email !== "string" || !EMAIL_REGEX.test(from_email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (typeof subject !== "string" || subject.trim().length < 3) {
    return NextResponse.json(
      { error: "Subject must be at least 3 characters." },
      { status: 400 },
    );
  }
  if (typeof message !== "string" || message.trim().length < 20) {
    return NextResponse.json(
      { error: "Message must be at least 20 characters." },
      { status: 400 },
    );
  }

  const from_name_value = from_name.trim();
  const from_email_value = from_email.trim().toLowerCase();
  const subject_value = subject.trim();
  const message_value = message.trim();

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: CONTACT_EMAIL, name: SENDER_NAME }],
        // The key part: replying in the inbox goes straight back to the client.
        replyTo: { name: from_name_value, email: from_email_value },
        subject: `${subject_value} (from ${from_name_value})`,
        htmlContent: buildHtmlContent({
          from_name: from_name_value,
          from_email: from_email_value,
          subject: subject_value,
          message: message_value,
        }),
        textContent: `From: ${from_name_value} <${from_email_value}>\nSubject: ${subject_value}\n\n${message_value}\n\n---\nReply to this email to respond to ${from_name_value}.`,
        tags: ["portfolio-contact"],
      }),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      console.error("Brevo error:", response.status, result);
      return NextResponse.json(
        { error: "Failed to send your message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo request failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message." },
      { status: 500 },
    );
  }
}

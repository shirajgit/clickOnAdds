import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(x) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const service = String(body?.service || "").trim();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const message = String(body?.message || "").trim();

    // basic validation
    if (!service || !name || !email || !phone) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    const toEmail = process.env.RESEND_TO;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, message: "RESEND_API_KEY not set" },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return NextResponse.json(
        { ok: false, message: "LEADS_TO_EMAIL not set" },
        { status: 500 }
      );
    }

    const subject = `New Lead: ${service} — ${name}`;

    const html = `
      <div style="font-family:Arial, sans-serif; line-height:1.6">
        <h2 style="margin:0 0 12px">New Lead Received</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
          <tr><td><b>Service</b></td><td>${service}</td></tr>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Message</b></td><td>${message || "-"}</td></tr>
        </table>
        <p style="color:#666; margin-top:14px">Sent from Chat Widget.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM ,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message || "Resend error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

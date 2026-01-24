import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, company, phone, service, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.RESEND_TO;
    const from = process.env.RESEND_FROM;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, message: "Server email config missing." },
        { status: 500 }
      );
    }

    // ✅ create here (NOT top-level)
    const resend = new Resend(apiKey);

    const subject = `New Contact Form: ${firstName} ${lastName}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>New enquiry received</h2>
        <p><b>Name:</b> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Company:</b> ${escapeHtml(company || "-")}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "-")}</p>
        <p><b>Service:</b> ${escapeHtml(service || "-")}</p>
        <p><b>Message:</b><br/>${escapeHtml(message || "-").replaceAll("\n", "<br/>")}</p>
        <hr/>
        <small>Sent from your website contact form</small>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

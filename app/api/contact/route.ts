import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // important: nodemailer needs Node.js, not Edge

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const to = process.env.MAIL_TO || process.env.EMAIL_USER!;
    const mail = await transporter.sendMail({
      // use your domain as sender to avoid DMARC issues
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: `${name} <${email}>`,
      to,
      subject: `New message from portfolio${subject ? `: ${subject}` : ""}`,
      text: [
        `From: ${name} <${email}>`,
        subject ? `Subject: ${subject}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>From:</b> ${name} &lt;${email}&gt;</p>
        ${subject ? `<p><b>Subject:</b> ${subject}</p>` : ""}
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, id: mail.messageId });
  } catch (error: any) {
    console.error("Mail send failed:", error);
    return NextResponse.json(
      { success: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

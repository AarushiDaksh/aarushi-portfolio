import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return Response.json({ success: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New message from portfolio",
      text: message.toString(),
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({ success: true, info });
  } catch (error: any) {
    console.error("Mail send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}

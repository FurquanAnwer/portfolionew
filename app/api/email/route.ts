import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // basic validation
    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // later it should be replaced with the verified domain email
      to: "furquan.anwer@gmail.com", // email where I want to receive emails
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div>
          <h2>New Message from Portfolio Contact Form</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

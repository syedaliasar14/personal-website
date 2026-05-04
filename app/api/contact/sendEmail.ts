import nodemailer from "nodemailer";

export async function sendEmail(to: string, subject: string, html: string, bcc?: string, attachments?: any, replyTo?: string) {
  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465, // or 587 for TLS
    secure: true, // True for port 465, false for 587
    auth: {
      user: process.env.SES_SMTP_USER, // From AWS SES
      pass: process.env.SES_SMTP_PASS, // From AWS SES
    },
  });

  try {
    await transporter.sendMail({
      from: `"Asar Dev Labs" <contact@syedaliasar.com>`,
      to,
      subject,
      html,
      bcc,
      attachments,
      replyTo,
    });

    return { message: "Email sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email failed to send");
  }
}
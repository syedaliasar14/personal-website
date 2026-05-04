import path from "path";
import fs from "fs";
import { sendEmail } from "./sendEmail";

export async function sendInquiryEmail(to: string, senderName: string, message: string, replyTo?: string) {
  const subject = `New Inquiry from ${senderName}`;
  const templatePath = path.join(process.cwd(), "app/api/contact/template.html");
  let html = fs.readFileSync(templatePath, "utf-8");

  html = html.replaceAll("{{senderName}}", senderName);
  html = html.replaceAll("{{message}}", message);

  await sendEmail(to, subject, html, undefined, undefined, replyTo);
}
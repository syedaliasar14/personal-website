import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { sendInquiryEmail } from './utils';
import { config } from '@/config';

async function validateTurnstile(token: string, remoteip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) { throw new Error("Missing TURNSTILE_SECRET_KEY"); }

  try {
    const response = await axios.post("https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret,
        response: token,
        remoteip,
      },
    );

    const result = response.data;
    return result;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return { success: false, "error-codes": ["internal-error"] };
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, token } = await req.json();

    if (!name || !email || !message || !token) {
      return NextResponse.json({ error: "Missing required fields or Turnstile token." }, { status: 400 });
    }
    console.log("token ", token);
    const forwardedFor = req.headers.get("x-forwarded-for");
    const remoteip = forwardedFor?.split(",")[0]?.trim();
    const verification = await validateTurnstile(token, remoteip);

    console.log("Turnstile verification result:", verification);
    if (!verification.success || verification.hostname !== "syedaliasar.com") {
      return NextResponse.json({ error: "Turnstile verification failed." }, { status: 400 });
    }

    await sendInquiryEmail(config.email, name, message, email);

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
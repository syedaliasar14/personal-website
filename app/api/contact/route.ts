import { SES } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail } from './utils';
import { config } from '@/config';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    await sendInquiryEmail(config.email, name, message, email);

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
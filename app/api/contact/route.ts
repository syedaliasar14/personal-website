import { SES } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';

const ses = new SES({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY || '',
  },
});
const emailAddress = 'syedali.asar14@gmail.com';

/**
 * Sends an email to my personal email
 */
export async function POST(req: NextRequest) {
  try {
    const { userEmail, message } = await req.json();

    const params = {
      Source: emailAddress,
      Destination: {
        ToAddresses: [emailAddress],
      },
      Message: {
        Subject: {
          Data: 'Contact from website',
        },
        Body: {
          Text: {
            Data: `Message from: ${userEmail}\n\n${message}`,
          },
          
        },
      },
      ReplyToAddresses: [userEmail],
    };

    await ses.sendEmail(params);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
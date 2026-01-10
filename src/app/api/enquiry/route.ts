import { NextRequest, NextResponse } from 'next/server';

type EnquiryType = 'contact' | 'partnership' | 'career';

const SUBJECTS: Record<EnquiryType, string> = {
  contact: 'New Business Enquiry — Spheratic Website',
  partnership: 'New Partnership Application — Spheratic Website',
  career: 'New Career Application — Spheratic Website',
};

const TITLES: Record<EnquiryType, string> = {
  contact: 'New Business Enquiry',
  partnership: 'New Partnership Application',
  career: 'New Career Application',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, type = 'contact' } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (!apiKey || !mailFrom || !mailTo) {
      console.error('Missing environment variables:', { apiKey: !!apiKey, mailFrom: !!mailFrom, mailTo: !!mailTo });
      return NextResponse.json(
        { error: 'Email delivery failed' },
        { status: 500 }
      );
    }

    const enquiryType = type as EnquiryType;
    const subject = SUBJECTS[enquiryType] || SUBJECTS.contact;
    const title = TITLES[enquiryType] || TITLES.contact;

    const emailBody = `${title}

Name: ${name}
Email: ${email}

Details:
${message}`;

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        sender: mailFrom,
        to: [mailTo],
        subject,
        text_body: emailBody,
      }),
    });

    const result = await response.json();

    if (!response.ok || result.data?.error || result.data?.failed > 0) {
      console.error('SMTP2GO error:', result);
      return NextResponse.json(
        { error: 'Email delivery failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Enquiry API error:', err);
    return NextResponse.json(
      { error: 'Email delivery failed' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactForm } from '@/types';
import { isValidEmail } from '@/lib/utils';

// Create transporter (you'll need to configure this with actual email service)
const createTransporter = () => {
  // For development, you can use a service like Gmail, SendGrid, or Mailgun
  // This is a placeholder configuration
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validation
    const { firstName, lastName, email, subject, message, type } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${body.phone || 'Not provided'}
      Company: ${body.company || 'Not provided'}
      Type: ${type || 'general'}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Submitted at: ${new Date().toISOString()}
    `;

    // For development, just log the email content
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:');
      console.log(emailContent);

      return NextResponse.json(
        { message: 'Contact form submitted successfully (development mode)' },
        { status: 200 }
      );
    }

    // In production, send actual email
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@spheratic.com',
      to: 'connect@spheratic.com',
      subject: `Contact Form: ${subject}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@spheratic.com',
      to: email,
      subject: 'Thank you for contacting Spheratic',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Spheratic Team</p>
      `,
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}

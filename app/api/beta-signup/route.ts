import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const business = formData.get('business') as string;

    // Honeypot check
    const honey = formData.get('_honey') as string;
    if (honey) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (!name || !email || !business) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Nudgli Beta" <${process.env.SMTP_USER}>`,
      to: 'support@nudgli.app',
      subject: `New Beta Signup: ${business}`,
      text: `New beta signup from nudgli.app\n\nName: ${name}\nEmail: ${email}\nBusiness: ${business}`,
      html: `
        <h2>New Beta Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
      `,
    });

    return NextResponse.redirect(new URL('/?signup=success#beta', req.url));
  } catch (error) {
    console.error('Beta signup error:', error);
    return NextResponse.redirect(new URL('/?signup=error#beta', req.url));
  }
}

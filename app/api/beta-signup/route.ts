import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Server config error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const business = formData.get('business') as string;

    // Honeypot check
    const honey = formData.get('_honey') as string;
    if (honey) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !business) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Nudgli Beta <onboarding@resend.dev>',
      to: 'shevinweinstein1@gmail.com',
      subject: `New Beta Signup: ${business}`,
      html: `
        <h2>New Beta Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Email sent:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Beta signup error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}

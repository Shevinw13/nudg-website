import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') || 'https://nudgli.app';

  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const business = formData.get('business') as string;

    // Honeypot check
    const honey = formData.get('_honey') as string;
    if (honey) {
      return NextResponse.redirect(`${origin}/`, { status: 303 });
    }

    if (!name || !email || !business) {
      return NextResponse.redirect(`${origin}/?signup=error#beta`, { status: 303 });
    }

    await resend.emails.send({
      from: 'Nudgli Beta <onboarding@resend.dev>',
      to: 'support@nudgli.app',
      subject: `New Beta Signup: ${business}`,
      html: `
        <h2>New Beta Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
      `,
    });

    return NextResponse.redirect(`${origin}/?signup=success#beta`, { status: 303 });
  } catch (error) {
    console.error('Beta signup error:', error);
    return NextResponse.redirect(`${origin}/?signup=error#beta`, { status: 303 });
  }
}

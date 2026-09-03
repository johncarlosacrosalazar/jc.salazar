import { NextResponse } from 'next/server';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RECIPIENT_EMAIL = 'johncarlosacrosalazar@gmail.com';
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const requestLog = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientId = forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const recentRequests = (requestLog.get(clientId) || []).filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX) return true;

  recentRequests.push(now);
  requestLog.set(clientId, recentRequests);
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json({ message: 'Too many messages. Please try again in a few minutes.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ message: 'Message sent.' });
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 160).toLowerCase();
  const projectType = clean(body.projectType, 80);
  const budget = clean(body.budget, 80) || 'Not specified';
  const message = clean(body.message, 3000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !projectType || message.length < 20) {
    return NextResponse.json({ message: 'Please complete all required fields with valid information.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailDomain = process.env.RESEND_EMAIL_DOMAIN;

  if (!apiKey || !emailDomain) {
    console.error('Contact form email configuration is missing.');
    return NextResponse.json({ message: 'Email service is temporarily unavailable.' }, { status: 500 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const subjectName = name.replace(/[\r\n]+/g, ' ');

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Portfolio inquiry <hello@${emailDomain}>`,
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject: `New portfolio inquiry from ${subjectName}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nBudget: ${budget}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b1220">
          <h1 style="font-size:24px">New portfolio inquiry</h1>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Name</strong></td><td style="padding:10px;border-bottom:1px solid #e5e7eb">${safeName}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Email</strong></td><td style="padding:10px;border-bottom:1px solid #e5e7eb">${safeEmail}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Project</strong></td><td style="padding:10px;border-bottom:1px solid #e5e7eb">${safeProjectType}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>Budget</strong></td><td style="padding:10px;border-bottom:1px solid #e5e7eb">${safeBudget}</td></tr>
          </table>
          <h2 style="font-size:17px">Project details</h2>
          <p style="line-height:1.65">${safeMessage}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend rejected a contact-form submission.', resendResponse.status);
    return NextResponse.json({ message: 'Your message could not be sent. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'Message sent.' });
}

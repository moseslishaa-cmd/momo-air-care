import { NextRequest, NextResponse } from 'next/server';

// Lead delivery: forwards validated submissions to the business inbox via
// FormSubmit (the existing, already-activated integration for this site).
// The destination is configurable via env so it never has to live in client code.
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || 'moses.lishaa@gmail.com';

// --- Simple in-memory rate limiter (per serverless instance, best-effort) ---
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

const clean = (v: unknown, max = 300): string =>
  typeof v === 'string' ? v.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max) : '';

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please call us instead.' },
        { status: 429 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot — real users never fill this hidden field.
    if (clean(body.company)) {
      // Pretend success so bots learn nothing.
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
    }
    if (phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid phone number.' }, { status: 400 });
    }
    const email = clean(body.email, 160);
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const payload: Record<string, string> = {
      _subject: '🔔 New MOMO Air Care Lead!',
      _template: 'table',
      name,
      phone,
    };

    const optional: Array<[string, number]> = [
      ['email', 160], ['address', 200], ['city', 80], ['zip', 20],
      ['service', 80], ['property_type', 60],
      ['preferred_date', 40], ['time_window', 40],
      ['vents', 20], ['returns', 20], ['furnace_location', 80], ['property_size', 40],
      ['dryer_location', 80], ['exterior_vent_location', 80], ['vent_length', 40], ['dryer_problem', 200],
      ['message', 1500], ['page', 120],
    ];
    for (const [key, max] of optional) {
      const v = clean(body[key], max);
      if (v) payload[key] = v;
    }

    const res = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // FormSubmit requires a web origin. NOTE: activation is per email+domain
        // pair — the activated pair for this inbox is the apex domain.
        Origin: 'https://momoaircare.com',
        Referer: 'https://momoaircare.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
      },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => null);
    const success = !!json && (json.success === true || json.success === 'true');

    if (!success) {
      console.error('[quote] delivery failed', { status: res.status, body: JSON.stringify(json)?.slice(0, 300) });
      // Validation passed but upstream delivery failed (e.g. datacenter IP blocked).
      // Tell the client it may deliver directly from the browser instead.
      return NextResponse.json(
        {
          ok: false,
          fallback: true,
          payload,
          error: 'Something went wrong. Please call us at (425) 200-5790.',
        },
        { status: 502 },
      );
    }

    console.log('[quote] lead delivered', { city: payload.city || '-', service: payload.service || '-' });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[quote] error', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please call us at (425) 200-5790.' },
      { status: 500 },
    );
  }
}

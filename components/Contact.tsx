'use client';

import { useState } from 'react';
import { GlowCard } from './GlowCard';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1.5px solid #dcdcd7',
  background: '#ffffff',
  color: '#111111',
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '0.9rem',
  fontWeight: 400,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#333333',
  marginBottom: '6px',
};

const SERVICES = [
  'Air Duct Cleaning',
  'Dryer Vent Cleaning',
  'Furnace / Blower Cleaning',
  'HVAC Sanitizing',
  'Coil Cleaning',
  'Crawl Space Cleaning',
  'Insulation Removal / Installation',
  'Not Sure — Need Advice',
];

// Reusable quote form — embedded on the homepage, contact page, and service pages.
export function QuoteForm({ page = 'home' }: { page?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [service, setService] = useState('');

  const isDuct = service === 'Air Duct Cleaning';
  const isDryer = service === 'Dryer Vent Cleaning';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries());
    payload.page = page;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        setStatus('success');
        form.reset();
        setService('');
      } else {
        setErrorMsg(json?.error || 'Something went wrong. Please call us at (425) 200-5790.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please call us at (425) 200-5790.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <GlowCard glowColor="blue" className="flex flex-col gap-6" width="100%">
        <div style={{ textAlign: 'center', padding: '24px 8px' }} role="status">
          <div style={{ fontSize: '2.6rem', marginBottom: '10px' }}>✅</div>
          <h4 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#111111', margin: '0 0 8px', letterSpacing: '0.04em' }}>
            Thank You!
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
            We got your request and will reach out shortly. Need it now? Call{' '}
            <a href={SITE.phoneHref} style={{ color: '#8f7300', fontWeight: 800 }}>{SITE.phoneDisplay}</a>.
          </p>
        </div>
      </GlowCard>
    );
  }

  return (
    <GlowCard glowColor="blue" className="flex flex-col gap-6" width="100%">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>

        {/* Honeypot — hidden from real users */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
          <label>
            Company
            <input name="company" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} htmlFor={`q-name-${page}`}>Full Name *</label>
            <input id={`q-name-${page}`} name="name" type="text" required autoComplete="name" placeholder="John Smith" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor={`q-phone-${page}`}>Phone *</label>
            <input id={`q-phone-${page}`} name="phone" type="tel" required autoComplete="tel" placeholder="(425) 000-0000" style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} htmlFor={`q-email-${page}`}>Email</label>
            <input id={`q-email-${page}`} name="email" type="email" autoComplete="email" placeholder="you@email.com" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor={`q-address-${page}`}>Service Address</label>
            <input id={`q-address-${page}`} name="address" type="text" autoComplete="street-address" placeholder="Street address" style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} htmlFor={`q-city-${page}`}>City</label>
            <input id={`q-city-${page}`} name="city" type="text" autoComplete="address-level2" placeholder="Seattle" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor={`q-zip-${page}`}>ZIP</label>
            <input id={`q-zip-${page}`} name="zip" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="98101" style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} htmlFor={`q-service-${page}`}>Service Needed</label>
            <select
              id={`q-service-${page}`}
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>Select a service…</option>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor={`q-property-${page}`}>Property Type</label>
            <select id={`q-property-${page}`} name="property_type" defaultValue="" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
              <option value="" disabled>Select…</option>
              <option>House</option>
              <option>Townhome</option>
              <option>Condo / Apartment</option>
              <option>Commercial</option>
            </select>
          </div>
        </div>

        {/* Progressive disclosure — Air Duct Cleaning */}
        {isDuct && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '12px', padding: '14px' }}>
            <div>
              <label style={labelStyle} htmlFor={`q-vents-${page}`}>Vents (approx.)</label>
              <input id={`q-vents-${page}`} name="vents" type="number" min={1} placeholder="12" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-returns-${page}`}>Returns</label>
              <input id={`q-returns-${page}`} name="returns" type="number" min={0} placeholder="2" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-furnace-${page}`}>Furnace Location</label>
              <input id={`q-furnace-${page}`} name="furnace_location" type="text" placeholder="Garage…" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-size-${page}`}>Home Size</label>
              <input id={`q-size-${page}`} name="property_size" type="text" placeholder="1,800 sqft" style={inputStyle} />
            </div>
          </div>
        )}

        {/* Progressive disclosure — Dryer Vent Cleaning */}
        {isDryer && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '12px', padding: '14px' }}>
            <div>
              <label style={labelStyle} htmlFor={`q-dryerloc-${page}`}>Dryer Location</label>
              <input id={`q-dryerloc-${page}`} name="dryer_location" type="text" placeholder="Laundry room…" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-extvent-${page}`}>Exterior Vent</label>
              <input id={`q-extvent-${page}`} name="exterior_vent_location" type="text" placeholder="Roof / wall…" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-length-${page}`}>Vent Length</label>
              <input id={`q-length-${page}`} name="vent_length" type="text" placeholder="~15 ft" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor={`q-problem-${page}`}>Current Problem</label>
              <input id={`q-problem-${page}`} name="dryer_problem" type="text" placeholder="Slow drying…" style={inputStyle} />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} htmlFor={`q-date-${page}`}>Preferred Date</label>
            <input id={`q-date-${page}`} name="preferred_date" type="date" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor={`q-window-${page}`}>Time Window</label>
            <select id={`q-window-${page}`} name="time_window" defaultValue="" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
              <option value="" disabled>Select…</option>
              <option>Morning (8–12)</option>
              <option>Afternoon (12–4)</option>
              <option>Evening (4–8)</option>
              <option>Flexible / ASAP</option>
            </select>
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor={`q-message-${page}`}>Message</label>
          <textarea
            id={`q-message-${page}`}
            name="message"
            placeholder="Tell us about your home and what you need…"
            rows={4}
            style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
          />
        </div>

        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: '#666', lineHeight: 1.5, cursor: 'pointer' }}>
          <input type="checkbox" name="consent" required style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: '#FFD400' }} />
          <span>I agree to be contacted by MOMO Air Care by phone, text, or email about my request. *</span>
        </label>

        {status === 'error' && (
          <p role="alert" style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#b3261e', textAlign: 'center' }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-ripple"
          style={{
            width: '100%',
            padding: '18px',
            borderRadius: '12px',
            border: 'none',
            background: '#FFD400',
            color: '#111',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: status === 'sending' ? 'wait' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1,
            boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
        </button>
      </form>
    </GlowCard>
  );
}

// Full homepage/contact section: heading + big phone CTA + mascot + form.
export function Contact({ page = 'home' }: { page?: string }) {
  const isMobile = useIsMobile();

  return (
    <section
      style={{ background: '#F6F6F3', fontFamily: 'var(--font-inter), sans-serif', position: 'relative' }}
      className="px-6 pb-0 pt-16"
    >
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '16px',
          }}>
            <span style={{ fontSize: '0.9rem' }}>📞</span>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFD400' }}>
              Let&apos;s Get Started
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#111', fontFamily: 'var(--font-fraunces), serif' }}>
            Ready to Breathe<br />Cleaner Air?
          </h2>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: '#888' }}>
            Get your free quote today — same-week appointments available
          </p>
        </div>

        <div className="text-center mb-10">
          <a
            href={SITE.phoneHref}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              letterSpacing: '0.05em',
              color: '#111111',
              textShadow: '0 3px 0 #FFD400, 0 8px 22px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              lineHeight: 1,
            }}
          >
            {SITE.phoneDisplay}
          </a>
          <p style={{ marginTop: '10px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
            Tap to call · {SITE.hours}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-end', gap: '0px', marginLeft: isMobile ? 0 : '-110px' }}>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/momo-giraffe.png"
            alt="MOMO Air Care giraffe mascot giving a thumbs up"
            width={200}
            height={300}
            loading="lazy"
            style={{
              width: isMobile ? '150px' : '200px',
              height: 'auto',
              maxWidth: '45%',
              order: isMobile ? 2 : 0,
              flexShrink: 0,
              objectFit: 'contain',
              objectPosition: 'bottom',
              marginBottom: isMobile ? '-2px' : '-6px',
              marginTop: isMobile ? '6px' : 0,
              filter: isMobile ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' : undefined,
            }}
          />

          <div id="quote" style={{ flex: 1, width: isMobile ? '100%' : 'auto', order: isMobile ? 1 : 0 }}>
            <QuoteForm page={page} />
          </div>
        </div>

        {/* Footer strip inside contact section */}
        <footer style={{ textAlign: 'center', padding: '48px 0 96px' }}>
          <a
            href={`mailto:${SITE.email}`}
            style={{
              display: 'inline-block',
              marginBottom: '20px',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.85rem',
              color: '#666666',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              borderBottom: '1px solid #d5d5d0',
              paddingBottom: '1px',
            }}
          >
            {SITE.email}
          </a>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: '#888888', letterSpacing: '0.05em', margin: 0 }}>
            {SITE.hours} · Serving {SITE.region}
          </p>
        </footer>
      </div>
    </section>
  );
}

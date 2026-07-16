import { useState } from 'react';
import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';
import { useIsMobile } from './useIsMobile';

// Free, no-backend email delivery. Submissions are emailed here.
const NOTIFY_EMAIL = 'moses.lishaa@gmail.com';

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1.5px solid hsl(0 0% 100% / 0.35)',
  background: 'hsl(0 0% 100% / 0.15)',
  backdropFilter: 'blur(8px)',
  color: '#1a1a1a',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 400,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#1a1a1a',
  marginBottom: '6px',
};

export function Contact() {
  const isMobile = useIsMobile();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.target;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    payload._subject = '🔔 New MOMO Air Care Lead!';
    payload._template = 'table';
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json && (json.success === true || json.success === 'true')) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      style={{ background: '#F9A800', fontFamily: "'Inter', sans-serif", position: 'relative' }}
      className="px-6 pb-0 pt-4"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '16px',
          }}>
            <span style={{ fontSize: '0.9rem' }}>📞</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F9A800' }}>
              Let's Get Started
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Breathe<br />Cleaner Air?
          </h2>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60">
            Get your free quote today — same day service available
          </p>
        </div>

        {/* Big phone CTA */}
        <div className="text-center mb-10">
          <a
            href="tel:+14252005790"
            style={{
              display: 'inline-block',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              letterSpacing: '0.05em',
              color: '#ffffff',
              textShadow: `
                1px 1px 0 #ccc,
                2px 2px 0 #bbb,
                3px 3px 0 #aaa,
                4px 4px 0 #999,
                5px 5px 0 #888,
                6px 6px 0 #777,
                7px 7px 12px rgba(0,0,0,0.3)
              `,
              textDecoration: 'none',
              lineHeight: 1,
            }}
          >
            (425) 200-5790
          </a>
          <p style={{ marginTop: '8px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Tap to call · Available 7 days a week
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-end', gap: '0px', marginLeft: isMobile ? 0 : '-110px' }}>

          <img
            src="/momo-giraffe.png"
            alt="Momo mascot"
            style={{
              width: isMobile ? '150px' : '200px',
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

        {/* Contact form card */}
        <div style={{ flex: 1, width: isMobile ? '100%' : 'auto', order: isMobile ? 1 : 0 }}>
        <GlowCard glowColor="blue" className="flex flex-col gap-6" width="100%">

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '24px 8px' }}>
              <div style={{ fontSize: '2.6rem', marginBottom: '10px' }}>✅</div>
              <h4 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: '#1a1a1a', margin: '0 0 8px', letterSpacing: '0.04em' }}>
                Thank You!
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#1a1a1a', lineHeight: 1.6, margin: 0 }}>
                We got your request and will reach out shortly. Need it now? Call <a href="tel:+14252005790" style={{ color: '#1a1a1a', fontWeight: 800 }}>(425) 200-5790</a>.
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Name</label>
              <input name="name" type="text" required placeholder="John Smith" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input name="phone" type="tel" required placeholder="(425) 000-0000" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Email</label>
            <input name="email" type="email" placeholder="you@email.com" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your home and what service you need..."
              rows={4}
              style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
            />
          </div>

          {status === 'error' && (
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#7a1500', textAlign: 'center' }}>
              Something went wrong. Please call us at (425) 200-5790.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
              color: '#F9A800',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: status === 'sending' ? 'wait' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3)'; }}
            onMouseLeave={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)'; }}
          >
            {status === 'sending' ? 'Sending…' : 'Get Free Quote'}
          </button>

          </form>
          )}

        </GlowCard>
        </div>

        </div>

      </div>

      {/* Footer */}
      <footer style={{ marginTop: '80px', paddingBottom: '40px', textAlign: 'center' }}>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          marginBottom: '24px',
        }} />

        <a
          href="mailto:info@momoaircare.com"
          style={{
            display: 'inline-block',
            marginBottom: '20px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            letterSpacing: '0.03em',
            borderBottom: '1px solid rgba(255,255,255,0.25)',
            paddingBottom: '1px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
        >
          info@momoaircare.com
        </a>

        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          marginBottom: '20px',
        }} />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px 32px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.05em',
        }}>
          <span>© 2025 Momo Air Care · All Rights Reserved</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Services', 'About', 'Contact'].map(link => (
              <a key={link} href="#" style={{
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </section>
  );
}

'use client';

import { useState } from 'react';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

const BADGES = [
  { icon: '★', text: '5-Star Rated' },
  { icon: '✓', text: 'Licensed & Insured' },
  { icon: '♥', text: 'Satisfaction Guaranteed' },
  { icon: '⚡', text: 'Same Day Service' },
];

// Puget Sound ZIP prefixes MOMO serves (Olympia → Arlington corridor).
const SERVED_ZIP = /^98[0-5]\d{2}$/;

function ZipChecker({ isMobile }: { isMobile: boolean }) {
  const [zip, setZip] = useState('');
  const [state, setState] = useState<'idle' | 'yes' | 'maybe'>('idle');

  const check = () => {
    if (SERVED_ZIP.test(zip.trim())) {
      setState('yes');
    } else {
      setState('maybe');
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex', gap: '8px', maxWidth: '380px',
        background: '#fff', borderRadius: '12px', padding: '6px',
        border: '1.5px solid #e2e2dc', boxShadow: '0 8px 28px rgba(0,0,0,0.08)',
      }}>
        <input
          inputMode="numeric"
          maxLength={5}
          placeholder="Enter ZIP code"
          aria-label="Enter your ZIP code to check service availability"
          value={zip}
          onChange={(e) => { setZip(e.target.value.replace(/\D/g, '')); setState('idle'); }}
          onKeyDown={(e) => { if (e.key === 'Enter') check(); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none',
            fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', fontWeight: 600,
            color: '#111', padding: '10px 12px', background: 'transparent', letterSpacing: '0.06em',
          }}
        />
        <button
          onClick={check}
          className="btn-ripple"
          style={{
            fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.8rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: '#111', color: YELLOW, border: 'none', cursor: 'pointer',
            padding: '12px 18px', borderRadius: '9px', whiteSpace: 'nowrap',
          }}
        >
          Check Area
        </button>
      </div>
      {state === 'yes' && (
        <p style={{ margin: '10px 2px 0', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#1e6b2e' }}>
          ✓ Great news — we serve your area! <a href="/contact" style={{ color: '#1e6b2e', textDecoration: 'underline' }}>Book below</a> or call {SITE.phoneDisplay}.
        </p>
      )}
      {state === 'maybe' && (
        <p style={{ margin: '10px 2px 0', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#555' }}>
          We may still reach you — call <a href={SITE.phoneHref} style={{ color: '#8f7300', fontWeight: 800 }}>{SITE.phoneDisplay}</a> and we&apos;ll check.
        </p>
      )}
    </div>
  );
}

export function Hero() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ position: 'relative', background: '#fff', overflow: 'hidden' }}>
      {/* Full-bleed calming photo */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero-family.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? '72% center' : 'center right',
      }} />
      {/* Legibility wash — soft white fading to reveal the family on the right */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: isMobile
          ? 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.86) 46%, rgba(255,255,255,0.25) 100%)'
          : 'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 34%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 78%)',
      }} />

      <div style={{
        position: 'relative', maxWidth: '1200px', margin: '0 auto',
        padding: isMobile ? '44px 20px 210px' : '96px 24px 110px',
      }}>
        <div style={{ maxWidth: isMobile ? '100%' : '540px' }}>
          <Reveal delay={0.06}>
            <h1 style={{
              fontFamily: 'var(--font-fraunces), serif', fontWeight: 900,
              fontSize: isMobile ? 'clamp(2.3rem, 10vw, 3rem)' : 'clamp(3rem, 4.6vw, 4.1rem)',
              lineHeight: 1.05, color: '#0e0e0e', margin: '0 0 16px',
            }}>
              A Cleaner Home.<br />Healthier Air<span style={{ color: YELLOW }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif', fontSize: isMobile ? '0.97rem' : '1.05rem',
              color: '#3d3d3a', lineHeight: 1.75, maxWidth: '470px', margin: '0 0 22px', fontWeight: 500,
            }}>
              Air ducts, dryer vents, chimneys, and furnaces — deep-cleaned by licensed local
              technicians who treat your home like family lives there. Serving {SITE.region} with
              photo-documented results.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <a href="/contact" className="btn-ripple" style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: YELLOW, color: '#111', textDecoration: 'none',
                padding: '16px 30px', borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(255,212,0,0.5)',
                flex: isMobile ? '1 1 100%' : 'none', textAlign: 'center',
              }}>
                Schedule Now
              </a>
              <a href="/contact" className="btn-ripple" style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#111', color: '#fff', textDecoration: 'none',
                padding: '16px 30px', borderRadius: '12px',
                flex: isMobile ? '1 1 100%' : 'none', textAlign: 'center',
              }}>
                Get Estimate
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ZipChecker isMobile={isMobile} />
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '22px' }}>
              {BADGES.map((b) => (
                <div key={b.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
                  border: '1px solid #e8e8e0',
                  borderRadius: '999px', padding: '7px 14px',
                }}>
                  <span style={{
                    width: '18px', height: '18px', borderRadius: '50%', background: YELLOW,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.62rem', color: '#111', fontWeight: 900,
                  }} aria-hidden="true">{b.icon}</span>
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.7rem', color: '#333', letterSpacing: '0.03em' }}>
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

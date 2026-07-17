'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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

// Editorial, stacked hero: headline → copy → full-width flat CTA → large media.
export function Hero() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: isMobile ? '36px 20px 44px' : '60px 24px 72px',
        position: 'relative',
      }}>

        {/* Offer chip */}
        <Reveal>
          <Link href="/dryer-vent-cleaning" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#111', borderRadius: '999px', textDecoration: 'none',
            padding: '8px 18px', marginBottom: '20px',
            border: `1.5px solid ${YELLOW}80`,
          }}>
            <span style={{ fontSize: '0.85rem' }} aria-hidden="true">🔥</span>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: YELLOW }}>
              $69 Dryer Vent Special
            </span>
          </Link>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.05}>
          <h1 style={{
            fontFamily: 'var(--font-fraunces), serif', fontWeight: 900,
            fontSize: isMobile ? 'clamp(2.5rem, 11vw, 3.4rem)' : 'clamp(3.4rem, 6vw, 5rem)',
            lineHeight: 1.04, color: '#0e0e0e', margin: '0 0 18px', maxWidth: '900px',
          }}>
            Healthy air starts here.<br />We do the dirty part<span style={{ color: YELLOW }}>.</span>
          </h1>
        </Reveal>

        {/* Sub copy */}
        <Reveal delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif', fontSize: isMobile ? '0.98rem' : '1.1rem',
            color: '#555', lineHeight: 1.75, maxWidth: '640px', margin: '0 0 24px',
          }}>
            Dust, lint, and allergens build up inside the ducts and vents your family breathes
            from every day. Our certified local technicians deep-clean the whole system across{' '}
            {SITE.region} — with photo proof on every job.
          </p>
        </Reveal>

        {/* Full-width flat CTA + secondary */}
        <Reveal delay={0.15}>
          <div style={{ maxWidth: '760px' }}>
            <Link href="/contact" className="btn-ripple" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.05rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: YELLOW, color: '#111', textDecoration: 'none',
              padding: '19px 30px', borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(255,212,0,0.45)',
              transition: 'transform 0.15s, filter 0.15s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
            >
              Get a Free Quote
            </Link>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
              <a href={SITE.phoneHref} className="btn-ripple" style={{
                flex: 1, minWidth: '220px', textAlign: 'center',
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#111', color: '#fff', textDecoration: 'none',
                padding: '15px 22px', borderRadius: '8px',
              }}>
                📞 Call {SITE.phoneDisplay}
              </a>
              <Link href="/#services" style={{
                flex: 1, minWidth: '180px', textAlign: 'center',
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#fff', color: '#111', textDecoration: 'none',
                padding: '15px 22px', borderRadius: '8px', border: '1.5px solid #1a1a1a',
              }}>
                Our Services →
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '22px 0 0' }}>
            {BADGES.map((b) => (
              <div key={b.text} style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: '#FAFAF7', border: '1px solid #ececdf',
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

        {/* Large editorial media below */}
        <Reveal delay={0.22}>
          <div style={{ position: 'relative', marginTop: isMobile ? '26px' : '38px' }}>
            <div style={{
              borderRadius: '18px', overflow: 'hidden',
              boxShadow: '0 26px 64px rgba(0,0,0,0.16)',
              border: '1px solid #eee',
              aspectRatio: isMobile ? '4/3' : '21/9',
              background: '#111',
            }}>
              <img
                src="/brand-hero.jpg"
                alt="MOMO Air Care technician waving beside the branded yellow van while a happy family watches from their front lawn"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '55% 42%', display: 'block' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: 'absolute', top: '14px', left: '14px',
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.9)',
                borderRadius: '13px', padding: '9px 13px',
                boxShadow: '0 8px 26px rgba(0,0,0,0.16)',
              }}
            >
              <div style={{ color: '#EFB000', fontSize: '0.82rem', letterSpacing: '2px' }} aria-hidden="true">★★★★★</div>
              <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.72rem', color: '#111', marginTop: '2px' }}>
                4.9 · 200+ local reviews
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '14px', right: '14px',
                background: 'rgba(17,17,17,0.88)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                border: `1.5px solid ${YELLOW}66`,
                borderRadius: '13px', padding: '9px 13px',
                boxShadow: '0 8px 26px rgba(0,0,0,0.3)',
                display: 'flex', alignItems: 'center', gap: '9px',
              }}
            >
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%', background: YELLOW,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.7rem', color: '#fff', lineHeight: 1.3 }}>
                100% Satisfaction<br />Guarantee
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

export function CompanyStory() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Calming full-bleed backdrop */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero-calm.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.9)' }} />

      <div style={{
        position: 'relative', maxWidth: '1120px', margin: '0 auto',
        padding: isMobile ? '56px 20px' : '92px 24px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '30px' : '60px', alignItems: 'center',
      }}>

        {/* Then & now photos */}
        <Reveal style={{ flex: isMobile ? 'none' : '0 0 46%', width: '100%' }}>
          <div style={{ position: 'relative', paddingBottom: isMobile ? '54px' : '64px' }}>
            {/* Then — polaroid-style */}
            <figure style={{
              margin: 0, background: '#fff', padding: '10px 10px 14px',
              borderRadius: '6px', boxShadow: '0 16px 44px rgba(0,0,0,0.18)',
              transform: 'rotate(-2.5deg)', width: isMobile ? '86%' : '82%',
            }}>
              <img
                src="/heritage-van.jpg"
                alt="MOMO Air Care's first van and founder in 2010, outside a Seattle-area home"
                loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: '3px' }}
              />
              <figcaption style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.74rem', fontWeight: 600, color: '#777', paddingTop: '9px', textAlign: 'center' }}>
                Where it started — one van, one promise.
              </figcaption>
            </figure>
            {/* Now — overlapping card */}
            <figure style={{
              margin: 0, position: 'absolute', right: 0, bottom: 0,
              width: isMobile ? '58%' : '56%',
              background: '#fff', padding: '8px 8px 10px', borderRadius: '6px',
              boxShadow: '0 18px 48px rgba(0,0,0,0.24)', transform: 'rotate(2deg)',
            }}>
              <img
                src="/fleet.jpg"
                alt="The MOMO Air Care fleet today — a row of branded yellow service vans"
                loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: '3px', aspectRatio: '16/10', objectFit: 'cover' }}
              />
              <figcaption style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#777', paddingTop: '7px', textAlign: 'center' }}>
                Today — the yellow fleet.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Story copy */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Reveal delay={0.08}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                Our Story
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.6rem', color: '#0e0e0e', margin: '0 0 14px', lineHeight: 1.1 }}>
              From One Van to the<br />Name on Your Street
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#444', lineHeight: 1.8, margin: '0 0 14px', maxWidth: '480px' }}>
              MOMO Air Care started the way the best local companies do — one van, a vacuum,
              and a simple promise: <b>treat every home like family lives there.</b> No shortcuts,
              no surprise fees, and photo proof of every job.
            </p>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#444', lineHeight: 1.8, margin: '0 0 22px', maxWidth: '480px' }}>
              15+ years later, the vans are yellow, the team is bigger, and the promise hasn&apos;t
              changed. When the giraffe rolls into your neighborhood, cleaner air is on the way.
            </p>
            <Link href="/about" style={{
              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.88rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#111', textDecoration: 'none',
              borderBottom: `3px solid ${YELLOW}`, paddingBottom: '3px',
            }}>
              Read the Full Story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

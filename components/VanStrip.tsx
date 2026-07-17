'use client';

import Link from 'next/link';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

export function VanStrip() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ background: '#ffffff', padding: isMobile ? '52px 20px' : '76px 24px', overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center', gap: isMobile ? '20px' : '48px',
      }}>
        <Reveal style={{ flex: isMobile ? 'none' : '0 0 55%', width: '100%' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #ebebe7', boxShadow: '0 22px 54px rgba(0,0,0,0.14)' }}>
            <img
              src="/brand-van.jpg"
              alt="The MOMO Air Care service van — bright yellow with the giraffe mascot and phone number on the side"
              loading="lazy"
              style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </div>
        </Reveal>

        <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
          <Reveal delay={0.08}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '14px',
            }}>
              <span style={{ fontSize: '0.85rem' }} aria-hidden="true">🚐</span>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                MOMO On The Way
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.7rem' : '2.3rem', color: '#0e0e0e', margin: '0 0 10px', lineHeight: 1.12 }}>
              Look for the Yellow Van
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.93rem', color: '#555', lineHeight: 1.75, margin: '0 0 18px', maxWidth: '440px', marginLeft: isMobile ? 'auto' : 0, marginRight: isMobile ? 'auto' : 0 }}>
              If you spot the giraffe rolling through your neighborhood, cleaner air is close by.
              Our vans arrive stocked with everything the job needs — negative-pressure vacuums,
              rotary brushes, and cameras for your before/after proof.
            </p>
            <Link href="/contact" className="btn-ripple" style={{
              display: 'inline-block',
              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.92rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: YELLOW, color: '#111', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '9px',
              boxShadow: '0 8px 24px rgba(255,212,0,0.45)',
            }}>
              Book Your Visit
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';
import { ServiceArea } from './ServiceArea';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

const FEATURED = [
  { slug: 'seattle', name: 'Seattle', blurb: 'Craftsman classics to new Ballard townhomes' },
  { slug: 'bellevue', name: 'Bellevue', blurb: 'Eastside homes, condos, and high-rises' },
  { slug: 'tacoma', name: 'Tacoma', blurb: 'North End character homes and beyond' },
  { slug: 'renton', name: 'Renton', blurb: 'Highlands, Fairwood, and new developments' },
];

export function ServiceAreasPage() {
  const isMobile = useIsMobile(1024);

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '30px 20px 8px' : '48px 24px 8px', textAlign: 'center' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : '3rem', color: '#0e0e0e', margin: '0 0 12px', lineHeight: 1.1 }}>
              Our Service Areas
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#555', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto' }}>
              MOMO Air Care serves the full I-5 corridor of Greater Puget Sound — from Olympia in the
              south to Arlington in the north. Find your city below, or call and we&apos;ll confirm coverage in seconds.
            </p>
          </Reveal>
        </section>

        {/* Featured city pages */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: isMobile ? '26px 20px 8px' : '36px 24px 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
            {FEATURED.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link href={`/service-areas/${c.slug}`} style={{
                  display: 'block', background: '#111', borderRadius: '16px',
                  padding: '18px 18px', textDecoration: 'none', height: '100%',
                  border: `1.5px solid ${YELLOW}40`,
                }}>
                  <h2 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.05em', color: YELLOW, margin: '0 0 4px', textTransform: 'uppercase' }}>{c.name} →</h2>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.76rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>{c.blurb}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Interactive map + full city list (existing component) */}
        <ServiceArea />
      </main>

      <Footer />
      <FloatingCallButton />
      <StickyBar />
    </div>
  );
}

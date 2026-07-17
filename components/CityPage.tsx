'use client';

import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';
import { QuoteForm } from './Contact';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';
import type { CityContent } from '@/lib/cities';

const YELLOW = '#FFD400';

const SERVICE_LINKS = [
  { label: 'Air Duct Cleaning', href: '/air-duct-cleaning', desc: 'Whole-system deep clean with negative pressure' },
  { label: 'Dryer Vent Cleaning', href: '/dryer-vent-cleaning', desc: 'Full-line lint removal — from $69' },
  { label: 'Furnace & Blower Cleaning', href: '/furnace-cleaning', desc: 'Blower removed and cleaned blade by blade' },
  { label: 'Crawl Space & Insulation', href: '/crawl-space-services', desc: 'Cleanup, removal, and fresh installation' },
];

export function CityPage({ city }: { city: CityContent }) {
  const isMobile = useIsMobile(1024);

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: '1160px', margin: '0 auto', padding: '18px 20px 0' }}>
          <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.76rem', color: '#999', flexWrap: 'wrap' }}>
            <li><Link href="/" style={{ color: '#999', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/service-areas" style={{ color: '#999', textDecoration: 'none' }}>Service Areas</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: '#333', fontWeight: 600 }} aria-current="page">{city.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '26px 20px 36px' : '44px 24px 52px', textAlign: 'center' }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111', borderRadius: '999px', padding: '6px 16px', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.85rem' }}>📍</span>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>
                Serving {city.name}, WA
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : '3rem', color: '#0e0e0e', margin: '0 0 14px', lineHeight: 1.1 }}>
              Air Duct & Dryer Vent Cleaning in {city.name}
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.96rem', color: '#555', lineHeight: 1.8, margin: '0 auto 22px', maxWidth: '680px', textAlign: 'left' }}>
              {city.intro}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#quote" className="btn-ripple" style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: YELLOW, color: '#111', textDecoration: 'none',
                padding: '15px 28px', borderRadius: '11px', boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
              }}>Get a Free {city.name} Quote</a>
              <a href={SITE.phoneHref} style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#111', textDecoration: 'none', padding: '15px 24px', borderRadius: '11px',
                border: '1.5px solid #1a1a1a',
              }}>📞 {SITE.phoneDisplay}</a>
            </div>
          </Reveal>
        </section>

        {/* Local note + neighborhoods */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec', padding: isMobile ? '36px 20px' : '48px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Reveal>
              <div style={{ background: '#111', borderRadius: '16px', padding: isMobile ? '20px' : '24px 28px', border: `1.5px solid ${YELLOW}4d`, marginBottom: '22px' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, margin: 0 }}>
                  <strong style={{ color: YELLOW }}>Local tip:</strong> {city.localNote}
                </p>
              </div>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '1.3rem', color: '#111', margin: '0 0 12px' }}>
                Neighborhoods we serve in {city.name}
              </h2>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {city.neighborhoods.map((n) => (
                  <span key={n} style={{
                    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, fontSize: '0.78rem',
                    color: '#333', background: '#fff', border: '1px solid #e3e3e0',
                    borderRadius: '999px', padding: '7px 15px',
                  }}>{n}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services in city */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '40px 20px' : '56px 24px' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '1.9rem', color: '#111', margin: '0 0 20px', textAlign: 'center' }}>
              Services available in {city.name}
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
            {SERVICE_LINKS.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.05}>
                <Link href={s.href} style={{
                  display: 'block', background: '#fff', border: '1px solid #ececea', borderRadius: '16px',
                  padding: '20px 22px', textDecoration: 'none', height: '100%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1rem', color: '#111', margin: '0 0 5px' }}>{s.label} →</h3>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.83rem', color: '#666', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* City FAQ */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', padding: isMobile ? '40px 20px' : '56px 24px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '1.9rem', color: '#111', margin: '0 0 20px', textAlign: 'center' }}>
                {city.name} — Common Questions
              </h2>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {city.faqs.map((f) => (
                <Reveal key={f.q}>
                  <div style={{ background: '#fff', border: '1px solid #ececea', borderRadius: '14px', padding: '18px 20px' }}>
                    <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.94rem', color: '#111', margin: '0 0 6px' }}>{f.q}</h3>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.86rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section style={{ background: '#F6F6F3', padding: isMobile ? '44px 20px 56px' : '56px 24px 72px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.6rem' : '2.1rem', color: '#111', margin: '0 0 8px', textAlign: 'center' }}>
                Get Your Free {city.name} Quote
              </h2>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#777', margin: '0 0 24px' }}>
                Fast local scheduling — usually within the same week.
              </p>
            </Reveal>
            <div id="quote">
              <QuoteForm page={`city-${city.slug}`} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCallButton />
      <StickyBar />
    </div>
  );
}

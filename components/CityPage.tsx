'use client';

import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
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
  { label: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Full-flue sweep with HEPA containment' },
  { label: 'Crawl Space & Insulation', href: '/crawl-space-services', desc: 'Cleanup, removal, and fresh installation' },
  { label: 'HVAC Repair & Inspection', href: '/hvac-repair-inspection', desc: 'Airflow diagnostics and honest findings' },
  { label: 'Furnace Repair', href: '/furnace-repair', desc: 'Diagnostic-first fixes, tested under load' },
  { label: 'Heat Pumps & AC', href: '/heat-pump-services', desc: 'Heating and cooling in one efficient system' },
];

function Check({ dark }: { dark?: boolean }) {
  return (
    <span aria-hidden="true" style={{
      width: '20px', height: '20px', borderRadius: '50%', background: dark ? '#111' : YELLOW, flexShrink: 0, marginTop: '2px',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={dark ? YELLOW : '#111'} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

function CitySpotlight({ city, isMobile }: { city: CityContent; isMobile: boolean }) {
  const { spotlight: sp, variant } = city;
  const titleStyle = {
    fontFamily: 'var(--font-fraunces), serif', fontWeight: 900 as const,
    fontSize: isMobile ? '1.45rem' : '1.8rem', lineHeight: 1.15, margin: '0 0 12px',
  };
  const bodyStyle = { fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.94rem', lineHeight: 1.8, margin: '0 0 16px' };
  const pointStyle = { fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600 as const, fontSize: '0.88rem', lineHeight: 1.6 };

  if (variant === 'yellow-band') {
    return (
      <section style={{ background: YELLOW, padding: isMobile ? '38px 20px' : '52px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ ...titleStyle, color: '#111' }}>{sp.title}</h2>
            <p style={{ ...bodyStyle, color: '#242400', maxWidth: '640px' }}>{sp.body}</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '14px', flexWrap: 'wrap' }}>
              {sp.points.map((p) => (
                <div key={p} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.55)', borderRadius: '12px', padding: '12px 16px', flex: isMobile ? 'none' : '1 1 0' }}>
                  <Check dark />
                  <span style={{ ...pointStyle, color: '#111' }}>{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === 'dark-card') {
    return (
      <section style={{ background: '#0c0c0c', padding: isMobile ? '40px 20px' : '56px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ ...titleStyle, color: YELLOW }}>{sp.title}</h2>
            <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.82)', maxWidth: '640px' }}>{sp.body}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sp.points.map((p) => (
                <li key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ ...pointStyle, color: 'rgba(255,255,255,0.92)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section style={{ background: '#fff', padding: isMobile ? '38px 20px' : '56px 24px' }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '18px' : '44px',
        }}>
          <Reveal style={{ flex: isMobile ? 'none' : '1 1 50%' }}>
            <h2 style={{ ...titleStyle, color: '#111' }}>{sp.title}</h2>
            <p style={{ ...bodyStyle, color: '#4a4a47', margin: 0 }}>{sp.body}</p>
          </Reveal>
          <Reveal delay={0.08} style={{ flex: isMobile ? 'none' : '1 1 50%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sp.points.map((p) => (
                <div key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '14px', padding: '14px 18px' }}>
                  <Check />
                  <span style={{ ...pointStyle, color: '#333' }}>{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // 'bordered'
  return (
    <section style={{ background: '#fff', padding: isMobile ? '34px 20px' : '48px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            background: '#FFFDF2', border: '1px solid #f0e8c0', borderLeft: `7px solid ${YELLOW}`,
            borderRadius: '16px', padding: isMobile ? '22px 20px' : '30px 34px',
            boxShadow: '0 10px 32px rgba(0,0,0,0.06)',
          }}>
            <h2 style={{ ...titleStyle, color: '#111' }}>{sp.title}</h2>
            <p style={{ ...bodyStyle, color: '#55503a' }}>{sp.body}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sp.points.map((p) => (
                <li key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ ...pointStyle, color: '#444' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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

        {/* City banner — each city gets its own scene */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: isMobile ? '14px 16px 0' : '20px 24px 0' }}>
          <Reveal>
            <div style={{ position: 'relative', borderRadius: isMobile ? '16px' : '22px', overflow: 'hidden', boxShadow: '0 18px 48px rgba(0,0,0,0.16)' }}>
              <img
                src={city.heroImg}
                alt={`${city.name}, WA — the homes and streets MOMO Air Care serves`}
                style={{ width: '100%', display: 'block', height: isMobile ? '210px' : '350px', objectFit: 'cover' }}
              />
              <div aria-hidden="true" style={{
                position: 'absolute', left: 0, right: 0, bottom: 0, height: '62%',
                background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.62))',
              }} />
              <div style={{ position: 'absolute', left: isMobile ? '16px' : '26px', bottom: isMobile ? '14px' : '22px', right: isMobile ? '16px' : '26px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111', borderRadius: '999px', padding: '6px 16px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>
                    Serving {city.name}, WA
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 700, fontSize: isMobile ? '0.98rem' : '1.25rem', color: '#fff', margin: 0, lineHeight: 1.3, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                  {city.blurb}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Hero */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '26px 20px 36px' : '38px 24px 52px', textAlign: 'center' }}>
          <Reveal>
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
              }}>{SITE.phoneDisplay}</a>
            </div>
          </Reveal>
        </section>

        {/* City signature spotlight — four visual variants keep every city distinct */}
        <CitySpotlight city={city} isMobile={isMobile} />

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
      <StickyBar />
    </div>
  );
}

'use client';

import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';
import { QuoteForm } from './Contact';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

const INFO = [
  { t: 'Phone', v: SITE.phoneDisplay, href: SITE.phoneHref, icon: '📞' },
  { t: 'Email', v: SITE.email, href: `mailto:${SITE.email}`, icon: '✉️' },
  { t: 'Hours', v: SITE.hours, icon: '🕒' },
  { t: 'Service Area', v: SITE.region, icon: '📍' },
];

export function ContactPageBody() {
  const isMobile = useIsMobile(1024);

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '32px 20px 12px' : '52px 24px 16px', textAlign: 'center' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : '3rem', color: '#0e0e0e', margin: '0 0 10px', lineHeight: 1.1 }}>
              Contact MOMO Air Care
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#555', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto' }}>
              Call, email, or send the form — we reply fast with clear answers and honest pricing.
            </p>
          </Reveal>
        </section>

        {/* Contact info cards */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '20px 20px 8px' : '28px 24px 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
            {INFO.map((x, i) => (
              <Reveal key={x.t} delay={i * 0.05}>
                {x.href ? (
                  <a href={x.href} style={{
                    display: 'block', background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '14px',
                    padding: '16px', textDecoration: 'none', height: '100%', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: '6px' }} aria-hidden="true">{x.icon}</div>
                    <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#999', marginBottom: '3px' }}>{x.t}</div>
                    <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.86rem', color: '#111', wordBreak: 'break-word' }}>{x.v}</div>
                  </a>
                ) : (
                  <div style={{
                    background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '14px',
                    padding: '16px', height: '100%', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: '6px' }} aria-hidden="true">{x.icon}</div>
                    <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#999', marginBottom: '3px' }}>{x.t}</div>
                    <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.86rem', color: '#111' }}>{x.v}</div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div style={{ textAlign: 'center', marginTop: '14px' }}>
              <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#111', borderRadius: '10px', padding: '10px 16px', textDecoration: 'none',
              }}>
                <span style={{ color: '#EFB000', fontSize: '0.8rem', letterSpacing: '1.5px' }} aria-hidden="true">★★★★★</span>
                <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.74rem', color: '#fff' }}>Find us on Google</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Quote form */}
        <section style={{ background: '#F6F6F3', marginTop: '28px', padding: isMobile ? '40px 20px 56px' : '56px 24px 72px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.6rem' : '2.1rem', color: '#111', margin: '0 0 8px', textAlign: 'center' }}>
                Request Your Free Quote
              </h2>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#777', margin: '0 0 24px' }}>
                Tell us what&apos;s going on — we&apos;ll reply with a clear price and the earliest available slot.
              </p>
            </Reveal>
            <div id="quote">
              <QuoteForm page="contact" />
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

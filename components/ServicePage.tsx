'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';
import { QuoteForm } from './Contact';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';
import type { ServiceContent } from '@/lib/services';

const YELLOW = '#FFD400';

function Check() {
  return (
    <span style={{
      width: '22px', height: '22px', borderRadius: '50%', background: YELLOW, flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

function MiniFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ background: '#fff', border: '1px solid #e7e7e4', borderRadius: '16px', boxShadow: '0 4px 18px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
      {faqs.map((f, i) => (
        <div key={f.q} style={{ borderTop: i > 0 ? '1px solid #f0f0ed' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '14px', textAlign: 'left',
            }}
          >
            <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.93rem', color: '#111', lineHeight: 1.4 }}>{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} style={{
              flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(0,0,0,0.07)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#111', fontSize: '1.1rem', fontWeight: 300,
            }}>+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.86rem', color: '#555', lineHeight: 1.7, padding: '0 20px 18px', margin: 0 }}>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function ServicePage({ svc, otherServices }: { svc: ServiceContent; otherServices: { slug: string; nav: string }[] }) {
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
            <li><Link href="/#services" style={{ color: '#999', textDecoration: 'none' }}>Services</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: '#333', fontWeight: 600 }} aria-current="page">{svc.nav}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: isMobile ? '26px 20px 40px' : '44px 24px 64px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '28px' : '54px', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111', borderRadius: '999px', padding: '6px 16px', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>{svc.eyebrow}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 4vw, 3.4rem)', color: '#0e0e0e', margin: '0 0 14px', lineHeight: 1.08 }}>
                {svc.h1}
              </h1>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.97rem', color: '#555', lineHeight: 1.78, margin: '0 0 22px', maxWidth: '600px' }}>
                {svc.lead}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#quote" className="btn-ripple" style={{
                  fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: YELLOW, color: '#111', textDecoration: 'none',
                  padding: '15px 28px', borderRadius: '11px', boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
                }}>Get a Free Quote</a>
                <a href={SITE.phoneHref} style={{
                  fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#111', textDecoration: 'none', padding: '15px 24px', borderRadius: '11px',
                  border: '1.5px solid #1a1a1a',
                }}>📞 {SITE.phoneDisplay}</a>
              </div>
            </Reveal>
          </div>

          <Reveal style={{ flex: isMobile ? 'none' : '0 0 44%', width: isMobile ? '100%' : 'auto' }}>
            <div style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid #ebebe7', boxShadow: '0 22px 54px rgba(0,0,0,0.13)', background: '#111' }}>
              {svc.media.type === 'video' ? (
                <video src={svc.media.src} autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }} aria-label={`${svc.nav} in progress`} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={svc.media.src} alt={`${svc.nav} — real job photo by MOMO Air Care`} width={1200} height={750} loading="eager" style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }} />
              )}
            </div>
          </Reveal>
        </section>

        {/* Signs / common problems */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec', padding: isMobile ? '44px 20px' : '64px 24px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '2rem', color: '#111', margin: '0 0 22px', textAlign: 'center' }}>
                {svc.signsTitle}
              </h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '10px' : '16px' }}>
              {svc.signs.map((s, i) => (
                <Reveal key={s} delay={(i % 3) * 0.06}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#fff', border: '1px solid #ececea', borderRadius: '14px', padding: '16px 18px', height: '100%' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#111', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="2.4" strokeLinecap="round"><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
                    </span>
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.87rem', fontWeight: 600, color: '#333', lineHeight: 1.5 }}>{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Included + Equipment */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: isMobile ? '44px 20px' : '64px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '26px' : '44px' }}>
            <Reveal>
              <div>
                <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '1.4rem', color: '#111', margin: '0 0 14px' }}>Key Benefits</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {svc.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '11px', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#333', lineHeight: 1.55, fontWeight: 500 }}>
                      <Check /> {b}
                    </li>
                  ))}
                </ul>
                <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '1.4rem', color: '#111', margin: '26px 0 14px' }}>Equipment We Use</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {svc.equipment.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '11px', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#333', lineHeight: 1.55, fontWeight: 500 }}>
                      <Check /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div style={{ background: '#111', borderRadius: '18px', padding: isMobile ? '22px 20px' : '28px 26px', border: `1.5px solid ${YELLOW}4d` }}>
                <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '1.4rem', color: '#fff', margin: '0 0 14px' }}>What&apos;s Included</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {svc.included.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '11px', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, fontWeight: 500 }}>
                      <Check /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: '#111', padding: isMobile ? '46px 20px' : '64px 24px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '2rem', color: '#fff', margin: '0 0 24px', textAlign: 'center' }}>
                How It Works
              </h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '10px' : '16px' }}>
              {svc.process.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '20px 18px', height: '100%', display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '14px', alignItems: isMobile ? 'center' : 'flex-start' }}>
                    <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: YELLOW, color: '#111', fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.96rem', color: '#fff', margin: '0 0 4px' }}>{p.title}</h3>
                      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}

        {/* Why MOMO strip */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec', padding: isMobile ? '40px 20px' : '52px 24px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '14px' }}>
            {[
              { t: 'Photo Proof, Every Job', d: 'Before/after photos are standard — you see exactly what we did.' },
              { t: 'Upfront Pricing', d: 'The price we quote is the price you pay. No door-step upsells.' },
              { t: 'Satisfaction Guaranteed', d: "If anything isn't right, we come back and fix it free." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.06}>
                <div style={{ background: '#fff', border: '1px solid #ececea', borderRadius: '14px', padding: '18px 20px', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#111', margin: '0 0 5px' }}>{x.t}</h3>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.83rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '44px 20px' : '64px 24px' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '2rem', color: '#111', margin: '0 0 22px', textAlign: 'center' }}>
              {svc.nav} — Common Questions
            </h2>
          </Reveal>
          <MiniFaq faqs={svc.faqs} />
        </section>

        {/* Service area + internal links */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: isMobile ? '0 20px 40px' : '0 24px 56px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#666', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 18px' }}>
            {svc.nav} is available across {SITE.region} — including{' '}
            <Link href="/service-areas/seattle" style={{ color: '#8f7300', fontWeight: 700 }}>Seattle</Link>,{' '}
            <Link href="/service-areas/bellevue" style={{ color: '#8f7300', fontWeight: 700 }}>Bellevue</Link>,{' '}
            <Link href="/service-areas/tacoma" style={{ color: '#8f7300', fontWeight: 700 }}>Tacoma</Link> and{' '}
            <Link href="/service-areas/renton" style={{ color: '#8f7300', fontWeight: 700 }}>Renton</Link>.
            See the full <Link href="/service-areas" style={{ color: '#8f7300', fontWeight: 700 }}>service area</Link>.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} style={{
                fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.76rem',
                color: '#333', textDecoration: 'none', background: '#F6F6F3',
                border: '1px solid #e3e3e0', borderRadius: '999px', padding: '8px 16px',
              }}>
                {s.nav} →
              </Link>
            ))}
          </div>
        </section>

        {/* Quote form */}
        <section style={{ background: '#F6F6F3', padding: isMobile ? '44px 20px 56px' : '64px 24px 72px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.6rem' : '2.2rem', color: '#111', margin: '0 0 8px', textAlign: 'center' }}>
                Get Your Free {svc.nav} Quote
              </h2>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#777', margin: '0 0 24px' }}>
                Tell us about your home — we&apos;ll reply fast with a clear, honest price.
              </p>
            </Reveal>
            <div id="quote">
              <QuoteForm page={svc.slug} />
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

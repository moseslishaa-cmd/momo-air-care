'use client';

import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

const VALUES = [
  { t: 'Show, don’t tell', d: 'Every job ends with before/after photos of your actual system. Proof is part of the service, not an extra.' },
  { t: 'One honest price', d: 'We quote after inspecting, and the number doesn’t change at the door. No surprise add-ons, ever.' },
  { t: 'Respect for your home', d: 'Shoe covers, floor protection, careful equipment handling — we leave your home the way we found it, just cleaner.' },
  { t: 'Straight answers', d: 'If something doesn’t need cleaning, we say so. If a problem needs a different specialist, we tell you plainly.' },
];

export function AboutPage() {
  const isMobile = useIsMobile(1024);

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: isMobile ? '32px 20px 20px' : '52px 24px 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111', borderRadius: '999px', padding: '6px 16px', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.85rem' }}>🦒</span>
                <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>
                  About MOMO Air Care
                </span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : '3rem', color: '#0e0e0e', margin: 0, lineHeight: 1.1 }}>
                The Local Team Behind<br />Cleaner Air in Puget Sound
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#444', lineHeight: 1.85 }}>
              <p style={{ margin: '0 0 16px' }}>
                MOMO Air Care started with a simple observation: homeowners around the Sound kept telling us
                the same two stories. Either they had never had their ducts or dryer vent cleaned — because nobody
                had ever explained why it matters — or they had paid someone who rushed the job, skipped the returns,
                and left without showing a shred of proof.
              </p>
              <p style={{ margin: '0 0 16px' }}>
                We built MOMO to be the company we would want at our own homes. That means truck-grade
                negative-pressure equipment instead of a shop vac. It means cleaning every line — supplies,
                returns, trunk, and blower — not just the vents you can see. And it means photographing everything,
                because you should never have to take a contractor&apos;s word for what happened inside your walls.
              </p>
              <p style={{ margin: '0 0 16px' }}>
                The giraffe? That&apos;s MOMO — our mascot and our standard. Giraffes see what others can&apos;t reach,
                and that&apos;s the job: getting to the parts of your home&apos;s air system nobody else looks at,
                and leaving them genuinely clean.
              </p>
              <p style={{ margin: 0 }}>
                We&apos;re local, licensed, and insured, and we serve the whole I-5 corridor —{' '}
                <Link href="/service-areas/seattle" style={{ color: '#8f7300', fontWeight: 700 }}>Seattle</Link>,{' '}
                <Link href="/service-areas/bellevue" style={{ color: '#8f7300', fontWeight: 700 }}>Bellevue</Link>,{' '}
                <Link href="/service-areas/tacoma" style={{ color: '#8f7300', fontWeight: 700 }}>Tacoma</Link>,{' '}
                <Link href="/service-areas/renton" style={{ color: '#8f7300', fontWeight: 700 }}>Renton</Link>{' '}
                and <Link href="/service-areas" style={{ color: '#8f7300', fontWeight: 700 }}>beyond</Link>.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Team & fleet photos */}
        <section style={{ maxWidth: '1060px', margin: '0 auto', padding: isMobile ? '4px 20px 40px' : '8px 24px 60px' }}>
          <Reveal>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #ebebe7', boxShadow: '0 22px 54px rgba(0,0,0,0.13)' }}>
              <img
                src="/team.jpg"
                alt="The MOMO Air Care technician team standing in front of a branded yellow service van"
                loading="lazy"
                style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '14px' : '20px', marginTop: isMobile ? '14px' : '20px' }}>
            <Reveal delay={0.06}>
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #ebebe7', boxShadow: '0 14px 36px rgba(0,0,0,0.10)' }}>
                <img
                  src="/fleet.jpg"
                  alt="A row of yellow MOMO Air Care service vans at golden hour"
                  loading="lazy"
                  style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #ebebe7', boxShadow: '0 14px 36px rgba(0,0,0,0.10)' }}>
                <img
                  src="/family-home.jpg"
                  alt="A relaxed family with their dog enjoying a bright, clean living room"
                  loading="lazy"
                  style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec', padding: isMobile ? '40px 20px' : '56px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '1.9rem', color: '#111', margin: '0 0 20px', textAlign: 'center' }}>
                How We Work
              </h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
              {VALUES.map((v, i) => (
                <Reveal key={v.t} delay={i * 0.05}>
                  <div style={{ background: '#fff', border: '1px solid #ececea', borderRadius: '16px', padding: '20px 22px', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.98rem', color: '#111', margin: '0 0 6px' }}>{v.t}</h3>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: '#666', lineHeight: 1.65, margin: 0 }}>{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mascot + CTA */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: isMobile ? '40px 20px 56px' : '56px 24px 72px', textAlign: 'center' }}>
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/momo-think-gold.png"
              alt="MOMO the giraffe mascot thinking"
              width={220}
              height={330}
              loading="lazy"
              style={{ width: isMobile ? '170px' : '220px', height: 'auto', margin: '0 auto 18px', display: 'block', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.18))' }}
            />
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '1.9rem', color: '#111', margin: '0 0 10px' }}>
              Have a question about your home&apos;s air?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.92rem', color: '#666', lineHeight: 1.7, margin: '0 0 20px' }}>
              Call us — you&apos;ll get a straight answer, not a sales pitch.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={SITE.phoneHref} className="btn-ripple" style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: YELLOW, color: '#111', textDecoration: 'none',
                padding: '15px 28px', borderRadius: '11px', boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
              }}>📞 {SITE.phoneDisplay}</a>
              <Link href="/contact" style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#111', textDecoration: 'none', padding: '15px 24px', borderRadius: '11px',
                border: '1.5px solid #1a1a1a',
              }}>Get a Free Quote</Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
      <FloatingCallButton />
      <StickyBar />
    </div>
  );
}

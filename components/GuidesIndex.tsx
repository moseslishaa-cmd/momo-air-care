'use client';

import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { GUIDES_CONTENT } from '@/lib/guides';

const YELLOW = '#FFD400';

const CATEGORY_ORDER = ['Heating', 'Cooling & Heat Pumps', 'Air Quality & Safety'] as const;

export function GuidesIndex() {
  const isMobile = useIsMobile(1024);

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '30px 20px 8px' : '48px 24px 8px', textAlign: 'center' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.5rem)' : '3rem', color: '#0e0e0e', margin: '0 0 12px', lineHeight: 1.1 }}>
              Homeowner Guides
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#555', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto' }}>
              Straight answers about heating, cooling, and the air in your home, written for
              Puget Sound houses and Puget Sound weather. No scare tactics, no sales scripts.
            </p>
          </Reveal>
        </section>

        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '26px 20px 50px' : '36px 24px 70px' }}>
          {CATEGORY_ORDER.map((cat) => {
            const guides = GUIDES_CONTENT.filter((g) => g.category === cat);
            if (guides.length === 0) return null;
            return (
              <div key={cat} style={{ marginBottom: isMobile ? '30px' : '40px' }}>
                <Reveal>
                  <h2 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', margin: '0 0 14px' }}>
                    {cat}
                  </h2>
                </Reveal>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '14px' }}>
                  {guides.map((g, i) => (
                    <Reveal key={g.slug} delay={(i % 2) * 0.05}>
                      <Link href={`/guides/${g.slug}`} style={{
                        display: 'block', background: '#fff', borderRadius: '16px',
                        padding: '20px 22px', textDecoration: 'none', height: '100%',
                        border: '1px solid #e7e7e4', boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                      }}>
                        <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.02rem', color: '#111', margin: '0 0 8px', lineHeight: 1.35 }}>
                          {g.title}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.84rem', color: '#666', lineHeight: 1.65, margin: '0 0 10px' }}>
                          {g.intro.length > 150 ? g.intro.slice(0, 147).trimEnd() + '…' : g.intro}
                        </p>
                        <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', borderBottom: `2.5px solid ${YELLOW}`, paddingBottom: '2px' }}>
                          Read the Guide →
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}

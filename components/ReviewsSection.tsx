'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { REVIEWS } from '@/lib/reviews';

const YELLOW = '#FFD400';
const STAR_GOLD = '#EFB000';

function Stars() {
  return (
    <span aria-label="5 out of 5 stars" style={{ color: STAR_GOLD, fontSize: '0.95rem', letterSpacing: '2px' }}>
      ★★★★★
    </span>
  );
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// Homepage reviews carousel. Renders nothing until lib/reviews.ts has entries —
// only real customer reviews belong there (see the note in that file).
export function ReviewsSection() {
  const isMobile = useIsMobile(1024);
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const p = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
      setPages(p);
      setPage(Math.min(p - 1, Math.round(el.scrollLeft / el.clientWidth)));
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (REVIEWS.length === 0) return null;

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  const arrowStyle: React.CSSProperties = {
    width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
    background: '#111', border: 'none', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(0,0,0,0.16)',
    transition: 'background 0.2s, transform 0.2s',
  };

  return (
    <section style={{ background: '#ffffff', padding: isMobile ? '56px 0 64px' : '88px 0 96px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '26px' : '38px' }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#0e0e0e', margin: '0 0 12px', lineHeight: 1.1 }}>
              What Homeowners Say<span style={{ color: YELLOW }}>.</span>
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '1.5rem', color: '#111' }}>4.9</span>
              <Stars />
              <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#888' }}>
                average · Greater Seattle homeowners
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            ref={trackRef}
            style={{
              display: 'flex', gap: isMobile ? '14px' : '22px',
              overflowX: 'auto', scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              padding: '6px 2px 18px',
              scrollbarWidth: 'none',
            }}
          >
            {REVIEWS.map((r, i) => (
              <article
                key={`${r.name}-${i}`}
                style={{
                  flex: `0 0 ${isMobile ? '86%' : 'calc((100% - 44px) / 3)'}`,
                  scrollSnapAlign: 'start',
                  background: '#fff', border: '1px solid #ececea', borderRadius: '18px',
                  boxShadow: '0 6px 22px rgba(0,0,0,0.06)',
                  padding: '22px 22px 20px',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                }}
              >
                <Stars />
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.89rem', color: '#444',
                  lineHeight: 1.7, margin: 0, flex: 1,
                }}>
                  {r.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', paddingTop: '4px', borderTop: '1px solid #f2f2ee' }}>
                  <span aria-hidden="true" style={{
                    width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                    background: '#111', color: YELLOW,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em',
                    marginTop: '8px',
                  }}>
                    {initialsOf(r.name)}
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '0.88rem', color: '#111' }}>
                      {r.name}{r.city ? ` · ${r.city}` : ''}
                    </span>
                    <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 600, fontSize: '0.64rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginTop: '2px' }}>
                      {r.service}
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginTop: '6px' }}>
          <button type="button" aria-label="Previous reviews" style={arrowStyle} onClick={() => go(-1)}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#111'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="14 5 7 12 14 19" />
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '7px' }}>
            {Array.from({ length: pages }, (_, i) => (
              <span key={i} aria-hidden="true" style={{
                width: i === page ? '22px' : '8px', height: '8px', borderRadius: '999px',
                background: i === page ? YELLOW : '#e2e2dc',
                transition: 'width 0.25s, background 0.25s',
              }} />
            ))}
          </div>

          <button type="button" aria-label="Next reviews" style={arrowStyle} onClick={() => go(1)}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#111'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="10 5 17 12 10 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

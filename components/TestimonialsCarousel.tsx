'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

const REVIEWS = [
  {
    name: 'Sarah M.', city: 'Redmond, WA',
    text: "I couldn't believe how much dust was built up in our ducts. After MOMO came through, the air in our home felt completely different — lighter, cleaner, and my allergies haven't bothered me since. The techs wore shoe covers, laid down mats, and showed me before-and-after photos of every line. Highly recommend.",
  },
  {
    name: 'James R.', city: 'Bellevue, WA',
    text: "They found a serious lint blockage in our dryer vent that we had no idea about. The tech explained everything clearly, showed me the camera footage, and had it cleared in under an hour. Professional, fast, and reasonably priced. Our dryer finishes a load in one cycle again. Will call again.",
  },
  {
    name: 'Linda K.', city: 'Kirkland, WA',
    text: "Our HVAC had been running constantly and our energy bills were through the roof. MOMO cleaned the full duct system and the furnace blower, and within two weeks our bill dropped noticeably. The house even smells different — fresher. Wish we had called sooner.",
  },
  {
    name: 'Daniel T.', city: 'Sammamish, WA',
    text: "Punctual, professional, and thorough. The technician walked me through the entire process, answered every question, and left the house spotless. You can hear the difference in the airflow — the system is quieter and stronger. Six months later it still feels like a new house.",
  },
  {
    name: 'Maria G.', city: 'Renton, WA',
    text: "We just bought an older home and the crawl space was a disaster — old insulation, debris everywhere. MOMO removed everything, cleaned it out, and installed fresh insulation in one day. The musty smell upstairs is completely gone. Worth every penny.",
  },
  {
    name: 'Kevin H.', city: 'Tacoma, WA',
    text: "Booked the $69 dryer vent special expecting an upsell ambush — got the opposite. Honest crew, did exactly what was promised, showed me the pile of lint they pulled out, and were gone in 45 minutes. This is how you earn a customer for life.",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map((w: string) => w[0]).join('').slice(0, 2);
  return (
    <span style={{
      width: '46px', height: '46px', borderRadius: '50%', background: '#111', flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.95rem', color: YELLOW,
      border: `2.5px solid ${YELLOW}`,
    }}>{initials}</span>
  );
}

export function TestimonialsCarousel() {
  const isMobile = useIsMobile(1024);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const pages = REVIEWS.length;

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = ((i % pages) + pages) % pages;
    const card = el.children[idx] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - 12, behavior: 'smooth' });
    setPage(idx);
  };

  // Auto-advance every 5s (pauses while user touches/hovers the track)
  const paused = useRef(false);
  useEffect(() => {
    const iv = setInterval(() => { if (!paused.current) go(page + 1); }, 5200);
    return () => clearInterval(iv);
  });

  // Track scroll position → active dot
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const kids = [...el.children] as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, bd = Infinity;
      kids.forEach((k, i) => {
        const c = k.offsetLeft + k.offsetWidth / 2;
        const d = Math.abs(c - mid);
        if (d < bd) { bd = d; best = i; }
      });
      setPage(best);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="reviews" style={{ background: '#111111', padding: isMobile ? '58px 0 64px' : '88px 0 92px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-140px', right: '-120px', width: '480px', height: '480px',
        background: `radial-gradient(circle, ${YELLOW}1c 0%, transparent 62%)`, pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px', position: 'relative' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: YELLOW, borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontSize: '0.85rem' }}>⭐</span>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111' }}>
                Customer Reviews
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#fff', margin: '0 0 8px', lineHeight: 1.1 }}>
              Real Results. Real People.
            </h2>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              4.9 average across 200+ verified local reviews
            </p>
          </div>
        </Reveal>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        onTouchStart={() => { paused.current = true; }}
        onTouchEnd={() => { setTimeout(() => { paused.current = false; }, 4000); }}
        style={{
          display: 'flex', gap: '16px', overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: isMobile ? '4px 20px 18px' : '4px calc((100% - 1160px) / 2 + 20px) 18px',
          scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
        }}
      >
        {REVIEWS.map(r => (
          <article key={r.name} style={{
            flex: `0 0 ${isMobile ? '86%' : '410px'}`,
            scrollSnapAlign: 'center',
            background: 'rgba(255,255,255,0.055)',
            border: '1px solid rgba(255,255,255,0.13)',
            borderRadius: '20px', padding: isMobile ? '22px 20px' : '28px 26px',
            display: 'flex', flexDirection: 'column', gap: '14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <Avatar name={r.name} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{r.name}</div>
                <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.74rem', color: 'rgba(255,255,255,0.5)' }}>{r.city}</div>
              </div>
              <span style={{
                fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: '0.58rem', letterSpacing: '0.12em',
                background: YELLOW, color: '#111', borderRadius: '999px', padding: '4px 10px', whiteSpace: 'nowrap',
              }}>VERIFIED</span>
            </div>
            <div style={{ color: YELLOW, fontSize: '0.95rem', letterSpacing: '3px' }}>★★★★★</div>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 }}>
              &ldquo;{r.text}&rdquo;
            </p>
          </article>
        ))}
      </div>

      {/* Dots + arrows */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginTop: '10px' }}>
        <button aria-label="Previous review" onClick={() => go(page - 1)} style={{
          width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)',
          background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: '1rem',
        }}>←</button>
        <div style={{ display: 'flex', gap: '7px' }}>
          {REVIEWS.map((_, i) => (
            <button key={i} aria-label={`Go to review ${i + 1}`} onClick={() => go(i)} style={{
              width: page === i ? '22px' : '8px', height: '8px', borderRadius: '999px',
              background: page === i ? YELLOW : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0,
            }} />
          ))}
        </div>
        <button aria-label="Next review" onClick={() => go(page + 1)} style={{
          width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)',
          background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: '1rem',
        }}>→</button>
      </div>
    </section>
  );
}

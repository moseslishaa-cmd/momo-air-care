'use client';

import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

// Original mini line-art illustrations, one per step.
const STEPS = [
  {
    n: '1', title: 'Inspection',
    desc: 'We scope your full system with cameras, show you exactly what we find, and quote a clear upfront price.',
    art: (<><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" /><path d="M8 10.5h5M10.5 8v5" /></>),
  },
  {
    n: '2', title: 'Deep Cleaning',
    desc: 'Negative-pressure vacuums and rotary brushes scrub every line from vent to trunk — nothing is skipped.',
    art: (<><rect x="3" y="9" width="18" height="6" rx="3" /><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" /><path d="M7 5l2 2.5M12 4v3M17 5l-2 2.5" /></>),
  },
  {
    n: '3', title: 'Sanitizing',
    desc: 'An EPA-registered, family-safe fog neutralizes bacteria, mold spores, and lingering odors system-wide.',
    art: (<><path d="M12 21s7-3.6 7-9V6l-7-2.7L5 6v6c0 5.4 7 9 7 9z" /><path d="M9.5 11.5l2 2 3.5-3.5" /></>),
  },
  {
    n: '4', title: 'Final Air Quality Check',
    desc: 'We verify airflow at every register, walk you through before/after photos, and back it all with our guarantee.',
    art: (<><path d="M3 8h9a3 3 0 1 0-3-3" /><path d="M3 13h13a3 3 0 1 1-3 3" /><path d="M3 18h5" /><path d="M17 8l1.5 1.5L21.5 6.5" /></>),
  },
];

export function Process() {
  const isMobile = useIsMobile(1024);
  return (
    <section style={{ background: '#111111', padding: isMobile ? '58px 20px' : '88px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-160px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '380px', background: `radial-gradient(ellipse, ${YELLOW}1f 0%, transparent 65%)`, pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: YELLOW, borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111' }}>
                Our Process
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#fff', margin: 0, lineHeight: 1.1 }}>
              Four Steps to Perfectly Clean Air
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '12px' : '18px' }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '18px', padding: isMobile ? '20px 18px' : '26px 22px', height: '100%',
                display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '16px',
                alignItems: isMobile ? 'center' : 'flex-start',
              }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <span style={{
                    width: isMobile ? '56px' : '64px', height: isMobile ? '56px' : '64px', borderRadius: '18px',
                    background: YELLOW, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 26px rgba(255,212,0,0.35)',
                  }}>
                    <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {s.art}
                    </svg>
                  </span>
                  <span style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: '#fff', color: '#111', fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700, fontSize: '0.78rem',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.35)',
                  }}>{s.n}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '1rem', color: '#fff', margin: '0 0 6px' }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

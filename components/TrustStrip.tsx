'use client';

import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

const ITEMS = [
  {
    title: 'Thousands of Happy Customers',
    sub: 'Across the Greater Seattle area',
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  },
  {
    title: 'Google Reviews',
    sub: '4.9 average rating, verified',
    icon: (<><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></>),
  },
  {
    title: 'Licensed Technicians',
    sub: 'Background-checked & certified',
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>),
  },
  {
    title: 'Years of Experience',
    sub: 'Residential & commercial',
    icon: (<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>),
  },
];

export function TrustStrip() {
  const isMobile = useIsMobile(1024);
  return (
    <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: isMobile ? '30px 20px' : '38px 24px',
      }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '22px' : '26px' }}>
            <div style={{ color: '#EFB000', fontSize: '1.5rem', letterSpacing: '5px' }}>★★★★★</div>
            <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.3rem', color: '#111', marginTop: '4px' }}>
              Trusted by homeowners all over Puget Sound
            </div>
          </div>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '18px',
        }}>
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                gap: '10px', padding: isMobile ? '16px 10px' : '20px 14px',
                background: '#fff', borderRadius: '16px', border: '1px solid #eeeee9',
                boxShadow: '0 3px 14px rgba(0,0,0,0.05)', height: '100%',
              }}>
                <span style={{
                  width: '44px', height: '44px', borderRadius: '13px', background: '#111',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {it.icon}
                  </svg>
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#111', lineHeight: 1.3 }}>{it.title}</div>
                  <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.72rem', color: '#888', marginTop: '3px' }}>{it.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

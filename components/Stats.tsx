'use client';

import { Reveal, CountUp } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

export function Stats() {
  const isMobile = useIsMobile();

  const items = [
    { render: <CountUp end={10000} suffix="+" />, label: 'Homes Served' },
    { render: <CountUp end={4.9} decimals={1} suffix="★" />, label: 'Average Rating' },
    { render: <CountUp end={98} suffix="%" />, label: 'Customer Satisfaction' },
    { render: <CountUp end={15} suffix="+" />, label: 'Years Experience' },
  ];

  return (
    <section style={{ background: '#FAFAF7', borderTop: '1px solid #f0f0ec', borderBottom: '1px solid #f0f0ec', padding: isMobile ? '46px 20px' : '64px 24px' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '26px 14px' : '20px', textAlign: 'center',
      }}>
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div>
              <div style={{
                fontFamily: "var(--font-fraunces), serif", fontWeight: 900,
                fontSize: isMobile ? '2.1rem' : '2.9rem', color: '#0e0e0e', lineHeight: 1,
              }}>
                {s.render}
              </div>
              <div style={{ width: '34px', height: '4px', background: YELLOW, borderRadius: '2px', margin: '10px auto' }} />
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888' }}>
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

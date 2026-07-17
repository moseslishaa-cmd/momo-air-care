'use client';

import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

const CARDS = [
  {
    title: 'Licensed Technicians',
    desc: 'Every tech is licensed, background-checked, and trained to the highest industry standard before entering your home.',
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>),
  },
  {
    title: 'Advanced Equipment',
    desc: 'Truck-grade negative-pressure vacuums, rotary brush systems, and camera inspection — not shortcuts.',
    icon: (<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>),
  },
  {
    title: 'Transparent Pricing',
    desc: 'The price we quote is the price you pay. No upsells at the door, no surprise fees on the invoice. Ever.',
    icon: (<><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20" /><path d="M6 15h4" /></>),
  },
  {
    title: 'Eco-Friendly Products',
    desc: 'Our sanitizers are EPA-registered and plant-based where possible — tough on mold, gentle on the planet.',
    icon: (<><path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-10 0 0 8 3 8 10a7 7 0 0 1-7 7z" /><path d="M12 21c0-5 0-8 3-11" /></>),
  },
  {
    title: 'Family Safe',
    desc: 'Everything we use is safe for kids, pets, and sensitive lungs. Your home is livable the moment we leave.',
    icon: (<><path d="M20.8 8.6a5.5 5.5 0 0 0-9.8-3.4 5.5 5.5 0 0 0-9.8 3.4c0 6 9.8 11.4 9.8 11.4s9.8-5.4 9.8-11.4z" /></>),
  },
  {
    title: 'Fast Scheduling',
    desc: 'Same-week appointments, weekend availability, and same-day emergency service when you need it most.',
    icon: (<><rect x="3" y="5" width="18" height="16" rx="3" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /><path d="M10 15l2 2 4-4" /></>),
  },
  {
    title: '100% Satisfaction Guarantee',
    desc: "If you're not completely happy with the result, we come back and make it right — free. That's the promise.",
    icon: (<><circle cx="12" cy="8" r="6" /><path d="M15.5 13l1.5 8-5-3-5 3 1.5-8" /></>),
  },
];

export function WhyChoose() {
  const isMobile = useIsMobile(1024);
  return (
    <section id="about" style={{ background: '#ffffff', padding: isMobile ? '58px 20px' : '88px 24px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                The MOMO Difference
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#0e0e0e', margin: 0, lineHeight: 1.1 }}>
              Why Homeowners Choose MOMO
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '12px' : '20px' }}>
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <div
                style={{
                  background: '#FAFAF7', border: '1px solid #ececea', borderRadius: '18px',
                  padding: isMobile ? '20px 18px' : '26px 24px', height: '100%',
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.09)'; }}
                onMouseLeave={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{
                  width: '46px', height: '46px', borderRadius: '13px', background: '#111', flexShrink: 0,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.98rem', color: '#111', margin: '0 0 5px' }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.83rem', color: '#666', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

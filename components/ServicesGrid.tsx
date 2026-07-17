'use client';

import Link from 'next/link';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

// All icons are original hand-drawn stroke SVGs.
const SERVICES = [
  {
    title: 'Air Duct Cleaning',
    desc: 'Whole-system deep cleaning that removes years of dust, dander, and debris from every supply and return line.',
    href: '/air-duct-cleaning',
    icon: (<><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="15" width="18" height="5" rx="2" /><path d="M7 11v4M12 11v4M17 11v4" /></>),
  },
  {
    title: 'Dryer Vent Cleaning',
    desc: 'Clear packed lint from the full vent line — prevent fires, dry faster, and extend the life of your dryer.',
    href: '/dryer-vent-cleaning',
    icon: (<><rect x="4" y="3" width="16" height="18" rx="3" /><circle cx="12" cy="13" r="5" /><circle cx="8" cy="7" r="0.6" fill="currentColor" /><circle cx="11" cy="7" r="0.6" fill="currentColor" /></>),
  },
  {
    title: 'Furnace Cleaning',
    desc: 'Full furnace cabinet, burner, and heat-exchanger area cleaning for safer, more efficient heating.',
    href: '/furnace-cleaning',
    icon: (<><path d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-4.5 5-9 5-9z" /><path d="M12 12s2 1.6 2 3.4A2 2 0 0 1 10 15c0-1.6 2-3 2-3z" /></>),
  },
  {
    title: 'HVAC Sanitizing',
    desc: 'EPA-registered, family-safe sanitizing fog that neutralizes odors, bacteria, and mold spores in your system.',
    href: '/contact',
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v6M9 11h6" /></>),
  },
  {
    title: 'Blower Cleaning',
    desc: 'We remove the blower wheel and motor, then deep-clean every blade — restoring full airflow to your home.',
    href: '/furnace-cleaning',
    icon: (<><circle cx="12" cy="12" r="2.4" /><path d="M12 9.6c0-3 1.5-5.6 4-6.6 1 2.6.2 5.2-1.8 7M14.4 12c3 0 5.6 1.5 6.6 4-2.6 1-5.2.2-7-1.8M12 14.4c0 3-1.5 5.6-4 6.6-1-2.6-.2-5.2 1.8-7M9.6 12c-3 0-5.6-1.5-6.6-4 2.6-1 5.2-.2 7 1.8" /></>),
  },
  {
    title: 'Coil Cleaning',
    desc: 'Dirty evaporator coils choke cooling power. We restore them to like-new condition and efficiency.',
    href: '/contact',
    icon: (<><path d="M4 6h13a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13" /></>),
  },
  {
    title: 'Crawl Space Cleaning',
    desc: 'Debris removal, moisture inspection, and vapor-barrier care to protect the air rising into your home.',
    href: '/crawl-space-services',
    icon: (<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M5 16h14" /></>),
  },
  {
    title: 'Insulation Removal',
    desc: 'Safe removal of old, damaged, or contaminated insulation — including rodent-affected material.',
    href: '/crawl-space-services',
    icon: (<><path d="M3 8h18M3 13h18M3 18h12" /><path d="M18 16l4 4M22 16l-4 4" /></>),
  },
  {
    title: 'Insulation Installation',
    desc: 'Fresh, code-compliant insulation that locks in comfort and cuts heating and cooling costs year-round.',
    href: '/crawl-space-services',
    icon: (<><path d="M3 8h18M3 13h18M3 18h12" /><path d="M20 15v6M17 18h6" /></>),
  },
];

export function ServicesGrid() {
  const isMobile = useIsMobile();

  return (
    <section id="services" style={{ background: '#ffffff', padding: isMobile ? '56px 20px' : '88px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                Complete Home Air Services
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#0e0e0e', margin: '0 0 10px', lineHeight: 1.1 }}>
              One Team for Everything<br />Your Home Breathes
            </h2>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.95rem', color: '#666', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              From the ducts behind your walls to the crawl space under your floors —
              we keep the entire path of your home&apos;s air clean, safe, and efficient.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '14px' : '22px',
        }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <div
                style={{
                  background: '#fff', border: '1px solid #ececea', borderRadius: '18px',
                  padding: isMobile ? '22px 20px' : '28px 26px',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s', height: '100%',
                  display: 'flex', flexDirection: 'column', gap: '13px',
                }}
                onMouseEnter={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 44px rgba(0,0,0,0.10)'; }}
                onMouseLeave={isMobile ? undefined : e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.05)'; }}
              >
                <span style={{
                  width: '52px', height: '52px', borderRadius: '15px',
                  background: YELLOW, boxShadow: '0 6px 18px rgba(255,212,0,0.45)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#111' }}>
                    {s.icon}
                  </svg>
                </span>
                <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#111', margin: 0 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.85rem', color: '#666', lineHeight: 1.65, margin: 0, flex: 1 }}>{s.desc}</p>
                <Link href={s.href} style={{
                  fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.8rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#111', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  borderBottom: `2px solid ${YELLOW}`, alignSelf: 'flex-start', paddingBottom: '2px',
                }}>
                  Learn More →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

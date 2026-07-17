'use client';

import Link from 'next/link';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

// Premium catalog cards — big photo, clear promise, one action.
const SERVICES = [
  {
    title: 'Air Duct Cleaning',
    desc: 'Remove years of dust, dander, and debris from every supply and return line — so your home breathes through clean metal again.',
    href: '/air-duct-cleaning',
    img: '/service-airduct.jpg',
    alt: 'Technician connecting cleaning equipment to a floor vent in a bright living room',
    cta: 'Learn More',
  },
  {
    title: 'Dryer Vent Cleaning',
    desc: 'Clear packed lint from the full vent line. Dry faster, spend less on power, and shut down a leading cause of house fires.',
    href: '/dryer-vent-cleaning',
    img: '/service-dryer.jpg',
    alt: 'Technician brushing lint out of a dryer vent in a bright laundry room',
    cta: 'Learn More',
  },
  {
    title: 'Chimney Cleaning',
    desc: 'Full-flue sweeping with HEPA containment and camera-verified results — safe, clean fires all season long.',
    href: '/chimney-cleaning',
    img: '/chimney-service.jpg',
    alt: 'Technician with a chimney brush beside a brick chimney on a rooftop at sunrise',
    cta: 'Learn More',
  },
  {
    title: 'Furnace & Blower Cleaning',
    desc: 'We remove the blower wheel and deep-clean the heart of your HVAC — restoring the airflow your system had when new.',
    href: '/furnace-cleaning',
    img: '/service-furnace.jpg',
    alt: 'Technician holding a removed blower wheel next to an open furnace cabinet',
    cta: 'Learn More',
  },
  {
    title: 'Crawl Space & Insulation',
    desc: 'Debris removal, vapor-barrier care, and fresh code-compliant insulation — protecting the air that rises into your home.',
    href: '/crawl-space-services',
    img: '/service-crawl.jpg',
    alt: 'Technician with fresh insulation at a crawl space entrance',
    cta: 'Learn More',
  },
  {
    title: 'Indoor Air Quality',
    desc: 'EPA-registered, family-safe sanitizing and honest advice about the air your family breathes every day.',
    href: '/contact',
    img: '/family-home.jpg',
    alt: 'A relaxed family with their dog in a bright, clean living room',
    cta: 'Talk to an Expert',
  },
];

export function ServicesGrid() {
  const isMobile = useIsMobile(1024);

  return (
    <section id="services" style={{ background: '#ffffff', padding: isMobile ? '56px 20px' : '92px 24px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '34px' : '52px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                What We Do
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#0e0e0e', margin: '0 0 12px', lineHeight: 1.1 }}>
              Every Path Your Home&apos;s Air Takes
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#666', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              From the ducts behind your walls to the chimney above your roof —
              one licensed local team for all of it.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '18px' : '26px',
        }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <article
                style={{
                  background: '#fff', border: '1px solid #ececea', borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 22px rgba(0,0,0,0.06)',
                  transition: 'transform 0.22s, box-shadow 0.22s', height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={isMobile ? undefined : (e) => { e.currentTarget.style.transform = 'translateY(-7px)'; e.currentTarget.style.boxShadow = '0 24px 54px rgba(0,0,0,0.12)'; }}
                onMouseLeave={isMobile ? undefined : (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.06)'; }}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: isMobile ? '20px 20px 22px' : '24px 24px 26px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.12rem', color: '#111', margin: 0 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.87rem', color: '#666', lineHeight: 1.65, margin: 0, flex: 1 }}>{s.desc}</p>
                  <Link href={s.href} className="btn-ripple" style={{
                    alignSelf: 'flex-start',
                    fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.8rem',
                    letterSpacing: '0.09em', textTransform: 'uppercase',
                    background: YELLOW, color: '#111', textDecoration: 'none',
                    padding: '11px 20px', borderRadius: '9px', marginTop: '4px',
                    boxShadow: '0 5px 16px rgba(255,212,0,0.4)',
                  }}>
                    {s.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

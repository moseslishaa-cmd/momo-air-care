'use client';

import Link from 'next/link';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

const COL_LINK: React.CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)',
  textDecoration: 'none', lineHeight: 2.1, display: 'block',
};
const COL_TITLE: React.CSSProperties = {
  fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.78rem',
  letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW, marginBottom: '12px',
};

export function Footer() {
  const isMobile = useIsMobile(1024);

  return (
    <footer style={{ background: '#0c0c0c', padding: isMobile ? '48px 20px 110px' : '64px 24px 40px' }}>
      <div style={{
        maxWidth: '1160px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1.6fr 1fr 1fr 1fr',
        gap: isMobile ? '30px 18px' : '40px',
      }}>

        {/* Brand */}
        <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              width: '34px', height: '34px', borderRadius: '10px', background: YELLOW,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 13h15a3 3 0 1 1-3 3" /><path d="M3 18h7" />
              </svg>
            </span>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.1em', color: '#fff', textTransform: 'uppercase' }}>
              MOMO <span style={{ color: YELLOW }}>Air Care</span>
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '300px', margin: '0 0 14px' }}>
            Air duct, dryer vent, furnace, and crawl space specialists serving {SITE.region}.
            Licensed, insured, and backed by a 100% satisfaction guarantee.
          </p>
          <a href={SITE.phoneHref} style={{ ...COL_LINK, color: '#fff', fontWeight: 800, fontSize: '1.05rem' }}>📞 {SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`} style={COL_LINK}>{SITE.email}</a>
          <span style={{ ...COL_LINK, cursor: 'default' }}>{SITE.hours}</span>
          <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '12px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '10px', padding: '9px 14px', textDecoration: 'none',
          }}>
            <span style={{ color: '#EFB000', fontSize: '0.8rem', letterSpacing: '1.5px' }} aria-hidden="true">★★★★★</span>
            <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.72rem', color: '#fff' }}>Review us on Google</span>
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <div style={COL_TITLE}>Quick Links</div>
          <Link href="/" style={COL_LINK}>Home</Link>
          <Link href="/#services" style={COL_LINK}>All Services</Link>
          <Link href="/#reviews" style={COL_LINK}>Reviews</Link>
          <Link href="/about" style={COL_LINK}>About Us</Link>
          <Link href="/#faq" style={COL_LINK}>FAQ</Link>
          <Link href="/contact" style={COL_LINK}>Get a Free Quote</Link>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <div style={COL_TITLE}>Services</div>
          <Link href="/air-duct-cleaning" style={COL_LINK}>Air Duct Cleaning</Link>
          <Link href="/dryer-vent-cleaning" style={COL_LINK}>Dryer Vent Cleaning</Link>
          <Link href="/furnace-cleaning" style={COL_LINK}>Furnace & Blower</Link>
          <Link href="/crawl-space-services" style={COL_LINK}>Crawl Space</Link>
          <Link href="/crawl-space-services" style={COL_LINK}>Insulation</Link>
          <Link href="/contact" style={COL_LINK}>HVAC Sanitizing</Link>
        </nav>

        {/* Cities */}
        <nav aria-label="Cities served">
          <div style={COL_TITLE}>Cities Served</div>
          <Link href="/service-areas/seattle" style={COL_LINK}>Seattle</Link>
          <Link href="/service-areas/bellevue" style={COL_LINK}>Bellevue</Link>
          <Link href="/service-areas/tacoma" style={COL_LINK}>Tacoma</Link>
          <Link href="/service-areas/renton" style={COL_LINK}>Renton</Link>
          {['Kent', 'Everett', 'Lynnwood', 'Redmond', 'Issaquah', 'Kirkland'].map((c) => (
            <span key={c} style={{ ...COL_LINK, cursor: 'default' }}>{c}</span>
          ))}
          <Link href="/service-areas" style={{ ...COL_LINK, color: YELLOW, fontWeight: 700 }}>All service areas →</Link>
        </nav>
      </div>

      {/* Legal row */}
      <div style={{
        maxWidth: '1160px', margin: '36px auto 0', paddingTop: '22px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center', justifyContent: 'space-between', gap: '10px',
      }}>
        <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.74rem', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} MOMO Air Care · All Rights Reserved · Licensed & Insured · WA
        </span>
        <div style={{ display: 'flex', gap: '18px' }}>
          <Link href="/contact" style={{ ...COL_LINK, lineHeight: 1.4, fontSize: '0.74rem' }}>Privacy Policy</Link>
          <Link href="/contact" style={{ ...COL_LINK, lineHeight: 1.4, fontSize: '0.74rem' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

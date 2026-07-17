'use client';

import Link from 'next/link';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

// Original MOMO Air Care branded-van illustration (hand-drawn SVG).
// The real mascot artwork is printed onto the van's side panel.
function BrandedVan() {
  return (
    <svg viewBox="0 0 1200 560" role="img" aria-label="Illustration of the yellow MOMO Air Care service van with the giraffe mascot printed on the side" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <clipPath id="vanPanelClip">
          <rect x="168" y="148" width="220" height="266" rx="14" />
        </clipPath>
        <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFDD33" />
          <stop offset="1" stopColor={YELLOW} />
        </linearGradient>
      </defs>

      {/* backdrop glow + ground */}
      <ellipse cx="600" cy="480" rx="520" ry="60" fill={YELLOW} opacity="0.12" />
      <line x1="80" y1="492" x2="1120" y2="492" stroke="#dcdcd4" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 26" />

      {/* motion lines */}
      <g stroke={YELLOW} strokeWidth="10" strokeLinecap="round" opacity="0.75">
        <line x1="52" y1="220" x2="118" y2="220" />
        <line x1="28" y1="280" x2="112" y2="280" />
        <line x1="60" y1="340" x2="120" y2="340" />
      </g>

      {/* cargo box */}
      <rect x="150" y="126" width="670" height="318" rx="26" fill="url(#vanBody)" stroke="#111" strokeWidth="7" />

      {/* cab */}
      <path
        d="M818 150 L928 160 C 984 168 1022 206 1038 262 L1052 330 C 1058 382 1034 428 986 436 L818 442 Z"
        fill="url(#vanBody)" stroke="#111" strokeWidth="7" strokeLinejoin="round"
      />
      {/* windshield */}
      <path d="M842 176 L920 183 C 962 190 992 220 1006 266 L1012 292 L842 288 Z" fill="#151515" />
      <path d="M851 184 L872 284" stroke="#3a3a3a" strokeWidth="5" />

      {/* black skirt */}
      <path d="M150 404 h668 v40 h-668 z" fill="#131313" />
      <path d="M818 404 L988 400 C 1010 398 1024 412 1020 430 L1016 436 L818 442 Z" fill="#131313" />

      {/* roof vent hint */}
      <rect x="300" y="104" width="180" height="22" rx="11" fill="#131313" />

      {/* wheels */}
      <g>
        <circle cx="318" cy="452" r="62" fill="#131313" />
        <circle cx="318" cy="452" r="30" fill="#e8e8e2" />
        <circle cx="318" cy="452" r="10" fill="#131313" />
        <circle cx="908" cy="452" r="62" fill="#131313" />
        <circle cx="908" cy="452" r="30" fill="#e8e8e2" />
        <circle cx="908" cy="452" r="10" fill="#131313" />
      </g>

      {/* lights */}
      <rect x="1032" y="308" width="26" height="34" rx="8" fill="#fff" stroke="#111" strokeWidth="5" />
      <rect x="146" y="180" width="14" height="46" rx="7" fill="#e2574c" stroke="#111" strokeWidth="4" />

      {/* mascot printed on the panel */}
      <g clipPath="url(#vanPanelClip)">
        <rect x="168" y="148" width="220" height="266" rx="14" fill="#fff" />
        <image href="/momo-giraffe.png" x="186" y="156" width="184" height="276" preserveAspectRatio="xMidYMin meet" />
      </g>
      <rect x="168" y="148" width="220" height="266" rx="14" fill="none" stroke="#111" strokeWidth="6" />

      {/* side lettering */}
      <g fontFamily="var(--font-oswald), Arial, sans-serif">
        <text x="420" y="238" fontSize="86" fontWeight="700" fill="#111" letterSpacing="4">MOMO</text>
        <rect x="424" y="258" width="230" height="44" rx="10" fill="#111" />
        <text x="539" y="289" fontSize="27" fontWeight="700" fill={YELLOW} letterSpacing="6" textAnchor="middle">AIR CARE</text>
        <text x="424" y="342" fontSize="21" fontWeight="600" fill="#333" letterSpacing="2">AIR DUCT · DRYER VENT · CHIMNEY</text>
        {/* phone chip */}
        <rect x="420" y="360" width="290" height="46" rx="23" fill="#111" />
        <text x="565" y="391" fontSize="26" fontWeight="700" fill={YELLOW} letterSpacing="2" textAnchor="middle">(425) 200-5790</text>
      </g>

      {/* airflow mark near cab */}
      <g transform="translate(742,180)" fill="none" stroke="#111" strokeWidth="7" strokeLinecap="round">
        <path d="M0 22 h44 a12 12 0 1 0 -12 -12" />
        <path d="M0 42 h58 a12 12 0 1 1 -12 12" />
        <path d="M0 62 h30" />
      </g>
    </svg>
  );
}

export function VanStrip() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ background: '#ffffff', padding: isMobile ? '52px 20px' : '76px 24px', overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center', gap: isMobile ? '20px' : '48px',
      }}>
        <Reveal style={{ flex: isMobile ? 'none' : '0 0 55%', width: '100%' }}>
          <BrandedVan />
        </Reveal>

        <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
          <Reveal delay={0.08}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '14px',
            }}>
              <span style={{ fontSize: '0.85rem' }} aria-hidden="true">🚐</span>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: YELLOW }}>
                MOMO On The Way
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.7rem' : '2.3rem', color: '#0e0e0e', margin: '0 0 10px', lineHeight: 1.12 }}>
              Look for the Yellow Van
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.93rem', color: '#555', lineHeight: 1.75, margin: '0 0 18px', maxWidth: '440px', marginLeft: isMobile ? 'auto' : 0, marginRight: isMobile ? 'auto' : 0 }}>
              If you spot the giraffe rolling through your neighborhood, cleaner air is close by.
              Our vans arrive stocked with everything the job needs — negative-pressure vacuums,
              rotary brushes, and cameras for your before/after proof.
            </p>
            <Link href="/contact" className="btn-ripple" style={{
              display: 'inline-block',
              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.92rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: YELLOW, color: '#111', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '9px',
              boxShadow: '0 8px 24px rgba(255,212,0,0.45)',
            }}>
              Book Your Visit
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

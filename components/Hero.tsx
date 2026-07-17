'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

const BADGES = [
  { icon: '★', text: '5-Star Rated' },
  { icon: '✓', text: 'Licensed & Insured' },
  { icon: '♥', text: 'Satisfaction Guaranteed' },
  { icon: '⚡', text: 'Same Day Service' },
];

export function Hero() {
  const isMobile = useIsMobile(1024);

  return (
    <section style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      {/* soft yellow wash top-right */}
      <div style={{
        position: 'absolute', top: '-180px', right: '-180px', width: '520px', height: '520px',
        background: `radial-gradient(circle, ${YELLOW}33 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: isMobile ? '40px 20px 46px' : '72px 24px 84px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center', gap: isMobile ? '34px' : '56px',
        position: 'relative',
      }}>

        {/* LEFT — copy */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Reveal>
            <a href="#dryer-vent" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', textDecoration: 'none',
              padding: '8px 18px', marginBottom: '20px',
              border: `1.5px solid ${YELLOW}80`,
            }}>
              <span style={{ fontSize: '0.85rem' }}>🔥</span>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: YELLOW }}>
                $69 Dryer Vent Special
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 style={{
              fontFamily: "var(--font-fraunces), serif", fontWeight: 900,
              fontSize: isMobile ? 'clamp(2.5rem, 11vw, 3.2rem)' : 'clamp(3.2rem, 5.2vw, 4.6rem)',
              lineHeight: 1.04, color: '#0e0e0e', margin: '0 0 18px',
            }}>
              Healthy Air<br />Starts Here<span style={{ color: YELLOW }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif", fontSize: isMobile ? '0.98rem' : '1.08rem',
              color: '#555', lineHeight: 1.75, maxWidth: '520px', margin: '0 0 26px',
            }}>
              Dust, allergens, and mold hide inside the ducts you breathe from every day.
              Our certified technicians deep-clean your entire system — so your family breathes
              easier, your HVAC runs efficiently, and your energy bills drop.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '26px' }}>
              <a href="#contact" className="btn-ripple" style={{
                fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '1rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: YELLOW, color: '#111', textDecoration: 'none',
                padding: '17px 30px', borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(255,212,0,0.5)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                flex: isMobile ? '1 1 100%' : 'none', textAlign: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get Instant Quote
              </a>
              <a href="tel:+14252005790" className="btn-ripple" style={{
                fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '1rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#111', color: '#fff', textDecoration: 'none',
                padding: '17px 30px', borderRadius: '12px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                transition: 'transform 0.15s',
                flex: isMobile ? '1 1 100%' : 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                📞 Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {BADGES.map(b => (
                <div key={b.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: '#FAFAF7', border: '1px solid #ececdf',
                  borderRadius: '999px', padding: '7px 14px',
                }}>
                  <span style={{
                    width: '18px', height: '18px', borderRadius: '50%', background: YELLOW,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.62rem', color: '#111', fontWeight: 900,
                  }}>{b.icon}</span>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: '0.7rem', color: '#333', letterSpacing: '0.03em' }}>
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — media card */}
        <Reveal delay={0.15} style={{ flex: isMobile ? 'none' : '0 0 44%', width: isMobile ? '100%' : 'auto' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0,0,0,0.18)',
              border: '1px solid #eee',
              aspectRatio: isMobile ? '4/3' : '4/4.6',
              background: '#111',
            }}>
              <video
                src="/dryer-spin.mp4"
                autoPlay muted loop playsInline preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating glass badge — rating */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: 'absolute', top: '16px', left: '16px',
                background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.9)',
                borderRadius: '14px', padding: '10px 14px',
                boxShadow: '0 8px 26px rgba(0,0,0,0.16)',
              }}
            >
              <div style={{ color: '#EFB000', fontSize: '0.85rem', letterSpacing: '2px' }}>★★★★★</div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.74rem', color: '#111', marginTop: '2px' }}>
                4.9 · 200+ local reviews
              </div>
            </motion.div>

            {/* Floating glass badge — guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '16px', right: '16px',
                background: 'rgba(17,17,17,0.86)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                border: `1.5px solid ${YELLOW}66`,
                borderRadius: '14px', padding: '10px 14px',
                boxShadow: '0 8px 26px rgba(0,0,0,0.3)',
                display: 'flex', alignItems: 'center', gap: '9px',
              }}
            >
              <span style={{
                width: '26px', height: '26px', borderRadius: '50%', background: YELLOW,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.72rem', color: '#fff' }}>
                100% Satisfaction<br />Guarantee
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

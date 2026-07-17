'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const YELLOW = '#FFD400';

// Desktop exit-intent offer: fires once per session when the cursor leaves the top of the page.
export function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Pointer-based devices only
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (sessionStorage.getItem('momoExitShown')) return;

    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0 && !sessionStorage.getItem('momoExitShown')) {
        sessionStorage.setItem('momoExitShown', '1');
        setShow(true);
      }
    };
    document.addEventListener('mouseout', onOut);
    return () => document.removeEventListener('mouseout', onOut);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 9500, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}
          />
          <div style={{ position: 'fixed', inset: 0, zIndex: 9501, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              style={{
                pointerEvents: 'all', width: 'min(480px, 92vw)',
                background: '#111', borderRadius: '22px', overflow: 'hidden',
                border: `1.5px solid ${YELLOW}59`,
                boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
                fontFamily: "var(--font-inter), sans-serif", textAlign: 'center',
              }}
            >
              <div style={{ background: YELLOW, padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111', paddingLeft: '8px' }}>
                  Wait — before you go
                </span>
                <button onClick={() => setShow(false)} aria-label="Close" style={{
                  width: '28px', height: '28px', borderRadius: '50%', border: 'none',
                  background: 'rgba(0,0,0,0.14)', color: '#111', cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
                }}>×</button>
              </div>
              <div style={{ padding: '30px 28px 28px' }}>
                <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: '2rem', color: '#fff', lineHeight: 1.15, marginBottom: '8px' }}>
                  Take <span style={{ color: YELLOW }}>20% Off</span><br />Your First Cleaning
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: '0 0 18px' }}>
                  Mention code <b style={{ color: YELLOW }}>MOMO20</b> when you call —
                  valid for any first air duct or dryer vent cleaning.
                </p>
                <a href="tel:+14252005790" onClick={() => setShow(false)} className="btn-ripple" style={{
                  display: 'block', background: YELLOW, color: '#111', textDecoration: 'none',
                  fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '1rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '15px', borderRadius: '12px', marginBottom: '10px',
                  boxShadow: '0 8px 26px rgba(255,212,0,0.4)',
                }}>
                  📞 Call Now & Claim It
                </a>
                <button onClick={() => setShow(false)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.76rem', color: 'rgba(255,255,255,0.35)', padding: '4px',
                }}>
                  No thanks, I&apos;ll pay full price
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from './useIsMobile';

export function DidYouKnowPopup({ triggerRef }) {
  const [visible, setVisible] = useState(false);
  const shown = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!triggerRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shown.current) {
          shown.current = true;
          setTimeout(() => setVisible(true), 500);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [triggerRef]);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Centering shell */}
          <div style={{
            position: 'fixed', inset: 0, zIndex: 9001,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            style={{
              pointerEvents: 'all',
              width: isMobile ? '92vw' : '65vw',
              maxWidth: isMobile ? '92vw' : '860px',
              maxHeight: isMobile ? '90vh' : 'none',
              overflowY: isMobile ? 'auto' : 'visible',
              background: '#111',
              borderRadius: isMobile ? '20px' : '28px',
              overflow: 'hidden',
              boxShadow: '0 0 0 1.5px rgba(249,168,0,0.35), 0 40px 100px rgba(0,0,0,0.8)',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Yellow header bar */}
            <div style={{
              background: '#F9A800',
              padding: '12px 28px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#111' }}>
                  Did You Know?
                </span>
              </div>
              <button onClick={close} style={{
                background: 'rgba(0,0,0,0.15)', border: 'none', borderRadius: '50%',
                width: '28px', height: '28px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', color: '#111', lineHeight: 1,
              }}>×</button>
            </div>

            {/* Main body — two columns */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', minHeight: isMobile ? 'auto' : '360px' }}>

              {/* LEFT — mascot */}
              <div style={{
                flex: isMobile ? '0 0 auto' : '0 0 42%',
                height: isMobile ? '170px' : 'auto',
                background: 'linear-gradient(135deg, #F9A800 0%, #e06b00 100%)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Decorative rings */}
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

                <img
                  src="/momo-lightbulb.jpeg"
                  alt="MOMO mascot"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* RIGHT — content */}
              <div style={{
                flex: 1, padding: isMobile ? '24px 22px 28px' : '40px 36px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: isMobile ? '16px' : '20px',
              }}>

                {/* Big stat */}
                <div>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                    fontSize: isMobile ? '3.4rem' : '5.2rem', lineHeight: 1, color: '#F9A800',
                    letterSpacing: '-0.02em',
                  }}>5,970</div>
                  <div style={{
                    fontSize: '1rem', fontWeight: 900,
                    color: '#fff',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    marginTop: '6px', lineHeight: 1.3,
                  }}>
                    HOMES DESTROYED LAST YEAR!<br/>
                    <span style={{ color: '#F9A800' }}>DIRTY DRYER VENT WAS THE CAUSE.</span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(249,168,0,0.4), transparent)' }} />

                {/* Body text */}
                <p style={{
                  fontSize: '0.95rem', fontWeight: 400,
                  color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, margin: 0,
                }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    DON'T LET THIS HAPPEN TO YOU!
                  </span>
                  One clogged vent. One spark. <span style={{ color: '#F9A800', fontWeight: 800 }}>Your home is gone forever.</span> It takes one phone call to prevent it — and MOMO does it for just <span style={{ color: '#F9A800', fontWeight: 800, fontSize: '1.1em' }}>$69!</span>
                </p>

                {/* CTA */}
                <a
                  href="tel:+14252005790"
                  onClick={close}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: '#F9A800', color: '#111',
                    borderRadius: '12px', padding: isMobile ? '15px 20px' : '16px 28px',
                    fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                    fontSize: isMobile ? '0.85rem' : '1rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                    textDecoration: 'none', textAlign: 'center',
                    boxShadow: '0 6px 24px rgba(249,168,0,0.4)',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    alignSelf: isMobile ? 'stretch' : 'flex-start',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(249,168,0,0.55)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(249,168,0,0.4)'; }}
                >
                  Clean My Dryer Vent — Only <span style={{ fontSize: '1.5rem', fontWeight: 900, marginLeft: '8px' }}>$69!</span>
                </a>

                <button onClick={close} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)',
                  textAlign: 'left', padding: 0, fontFamily: "'Inter', sans-serif",
                }}>
                  No thanks, I'll take my chances
                </button>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

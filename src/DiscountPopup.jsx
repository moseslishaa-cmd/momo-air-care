import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DiscountPopup({ triggerRef }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    if (!triggerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shown.current) {
          shown.current = true;
          // small delay so the user settles into the section
          setTimeout(() => setVisible(true), 400);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [triggerRef]);

  const close = () => setVisible(false);

  const copy = () => {
    navigator.clipboard.writeText('MOMO20').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <>

          {/* Popup card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'fixed',
              top: '57%', right: '8px',
              transform: 'translateY(-50%)',
              zIndex: 9001,
              width: '100%',
              maxWidth: '180px',
              background: '#111',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(249,168,0,0.3), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(249,168,0,0.1)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {/* Yellow top bar */}
            <div style={{
              background: '#F9A800',
              padding: '4px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#111',
              }}>
                Limited Time Offer
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="12" y2="12"/>
              </svg>
            </div>

            {/* Main content */}
            <div style={{ padding: '4px 8px 4px' }}>

              {/* Headline */}
              <div style={{ textAlign: 'center', marginBottom: '4px' }}>
                <p style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.65rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#F9A800',
                  margin: '0 0 4px',
                }}>
                  MOMO Discount
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                  <span style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    lineHeight: 1,
                    color: '#F9A800',
                    letterSpacing: '-0.02em',
                  }}>20%</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: '#fff',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>OFF</span>
                </div>
                <p style={{
                  fontWeight: 400,
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.55)',
                  margin: '2px 0 0',
                }}>
                  Your first air duct or dryer vent cleaning
                </p>
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(249,168,0,0.3), transparent)',
                marginBottom: '4px',
              }} />

              {/* Code box */}
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textAlign: 'center', margin: '0 0 4px' }}>
                Use code at checkout
              </p>
              <button
                onClick={copy}
                style={{
                  display: 'block', width: '100%',
                  background: 'transparent',
                  border: '1.5px dashed rgba(249,168,0,0.6)',
                  borderRadius: '12px',
                  padding: '5px',
                  textAlign: 'center',
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  color: '#F9A800',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  transition: 'background 0.2s, border-color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,168,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                {copied ? '✓ COPIED!' : 'MOMO20'}
              </button>

              {/* CTA */}
              <a
                href="tel:+14252005790"
                style={{
                  display: 'block', width: '100%',
                  background: '#F9A800',
                  color: '#111',
                  borderRadius: '12px',
                  padding: '7px',
                  textAlign: 'center',
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(249,168,0,0.35)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  marginBottom: '6px',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(249,168,0,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,168,0,0.35)'; }}
              >
                Call Now — Claim Your Discount
              </a>

              <button
                onClick={close}
                style={{
                  display: 'block', width: '100%',
                  background: 'transparent', border: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem', fontWeight: 500,
                  color: 'rgba(255,255,255,0.28)',
                  cursor: 'pointer', padding: '4px',
                  letterSpacing: '0.04em',
                }}
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Close X */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

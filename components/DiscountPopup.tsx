'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from './useIsMobile';

export function DiscountPopup({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement | null> }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const shown = useRef(false);
  const isMobile = useIsMobile();

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
              top: isMobile ? 'auto' : '57%',
              bottom: isMobile ? '108px' : 'auto',
              right: '8px',
              transform: isMobile ? 'none' : 'translateY(-50%)',
              zIndex: 9001,
              width: '100%',
              maxWidth: isMobile ? '146px' : '180px',
              background: '#111',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(255,212,0,0.3), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(255,212,0,0.1)',
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {/* Yellow top bar */}
            <div style={{
              background: '#FFD400',
              padding: '4px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#111',
                whiteSpace: 'nowrap',
              }}>
                Limited Offer
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="12" y2="12"/>
              </svg>
            </div>

            {/* Main content — compact */}
            <div style={{ padding: '8px 8px' }}>

              {/* 20% OFF */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px', marginBottom: '7px' }}>
                <span style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: '1.55rem',
                  lineHeight: 1,
                  color: '#FFD400',
                  letterSpacing: '-0.02em',
                }}>20%</span>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#fff',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>OFF</span>
              </div>

              {/* Code box */}
              <button
                onClick={copy}
                style={{
                  display: 'block', width: '100%',
                  background: 'transparent',
                  border: '1.5px dashed rgba(255,212,0,0.6)',
                  borderRadius: '10px',
                  padding: '6px',
                  textAlign: 'center',
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  color: '#FFD400',
                  cursor: 'pointer',
                  marginBottom: '6px',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,212,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                {copied ? '✓ COPIED!' : 'MOMO20'}
              </button>

              {/* CTA */}
              <a
                href="tel:+14252005790"
                style={{
                  display: 'block', width: '100%',
                  background: '#FFD400',
                  color: '#111',
                  borderRadius: '10px',
                  padding: '9px',
                  textAlign: 'center',
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(255,212,0,0.35)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,212,0,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,212,0,0.35)'; }}
              >
                Call Now
              </a>
            </div>

            {/* Close X */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

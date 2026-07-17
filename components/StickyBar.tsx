'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

// Mobile-only sticky bottom action bar: Call + Quote.
export function StickyBar() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 6000,
      transform: visible ? 'translateY(0)' : 'translateY(110%)',
      transition: 'transform 0.3s ease',
      background: 'rgba(12,12,12,0.94)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,212,0,0.35)',
      padding: '10px 14px calc(10px + env(safe-area-inset-bottom))',
      display: 'flex', gap: '10px',
    }}>
      <a href="tel:+14252005790" className="btn-ripple" style={{
        flex: 1, textAlign: 'center', textDecoration: 'none',
        fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.9rem',
        letterSpacing: '0.07em', textTransform: 'uppercase',
        background: YELLOW, color: '#111', borderRadius: '11px', padding: '14px 8px',
        boxShadow: '0 6px 20px rgba(255,212,0,0.4)',
      }}>
        📞 Call Now
      </a>
      <a href="#quote" className="btn-ripple" style={{
        flex: 1, textAlign: 'center', textDecoration: 'none',
        fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.9rem',
        letterSpacing: '0.07em', textTransform: 'uppercase',
        background: 'transparent', color: '#fff', borderRadius: '11px', padding: '14px 8px',
        border: '1.5px solid rgba(255,255,255,0.4)',
      }}>
        Get Quote
      </a>
    </div>
  );
}

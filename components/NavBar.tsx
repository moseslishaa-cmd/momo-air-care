'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';

const YELLOW = '#FFD400';

const SERVICE_LINKS = [
  { label: 'Air Duct Cleaning', href: '/air-duct-cleaning' },
  { label: 'Dryer Vent Cleaning', href: '/dryer-vent-cleaning' },
  { label: 'Furnace Cleaning', href: '/furnace-cleaning' },
  { label: 'Crawl Space Services', href: '/crawl-space-services' },
  { label: 'Chimney Cleaning', href: '/chimney-cleaning' },
];

const MAIN_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function NavBar() {
  const isMobile = useIsMobile(1024);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [banner, setBanner] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => setBanner((b) => (b + 1) % SITE.banners.length), 4000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, fontSize: '0.78rem',
    letterSpacing: '0.02em', color: '#444', textDecoration: 'none', whiteSpace: 'nowrap',
  };

  return (
    <header id="top" style={{ position: 'sticky', top: 0, zIndex: 5000 }}>

      {/* Announcement bar */}
      <div style={{ background: '#0c0c0c', overflow: 'hidden' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 18px', gap: '12px',
        }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={banner}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700,
                fontSize: '0.7rem', letterSpacing: '0.08em',
                color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}
            >
              {SITE.banners[banner]}
            </motion.span>
          </AnimatePresence>
          <a href={SITE.phoneHref} style={{
            fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.8rem',
            letterSpacing: '0.08em', color: YELLOW, textDecoration: 'none', whiteSpace: 'nowrap',
          }}>
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main nav — shrinks slightly when scrolled */}
      <nav style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #ececea',
        boxShadow: scrolled ? '0 6px 24px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.25s',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile
            ? (scrolled ? '9px 16px' : '12px 16px')
            : (scrolled ? '10px 24px' : '14px 24px'),
          gap: '14px',
          transition: 'padding 0.25s',
        }}>
          {/* Logo */}
          <Link href="/" aria-label="MOMO Air Care — home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-nav.png"
              alt="MOMO Air Care"
              style={{ height: isMobile ? (scrolled ? '28px' : '32px') : (scrolled ? '34px' : '40px'), width: 'auto', display: 'block', transition: 'height 0.25s' }}
            />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/" style={linkStyle}>Home</Link>

              {/* Services dropdown */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                  style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: 0 }}
                >
                  Services <span aria-hidden="true" style={{ fontSize: '0.6rem' }}>▼</span>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      style={{
                        position: 'absolute', top: '100%', left: '-14px', paddingTop: '12px', zIndex: 10,
                      }}
                    >
                      <div style={{
                        background: '#fff', border: '1px solid #ececea', borderRadius: '14px',
                        boxShadow: '0 18px 44px rgba(0,0,0,0.12)', padding: '8px', minWidth: '230px',
                      }}>
                        {SERVICE_LINKS.map((s) => (
                          <Link key={s.href} href={s.href} style={{
                            display: 'block', padding: '11px 14px', borderRadius: '9px',
                            fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, fontSize: '0.82rem',
                            color: '#333', textDecoration: 'none',
                          }}
                            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#FAFAF3'; }}
                            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; }}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {MAIN_LINKS.slice(1).map((l) => (
                <Link key={l.label} href={l.href} style={linkStyle}>{l.label}</Link>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {!isMobile && (
              <a href={SITE.phoneHref} style={{
                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.9rem',
                letterSpacing: '0.05em', color: '#111', textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                {SITE.phoneDisplay}
              </a>
            )}
            <Link href="/contact" className="btn-ripple" style={{
              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700,
              fontSize: isMobile ? '0.74rem' : '0.86rem', letterSpacing: '0.06em', textTransform: 'uppercase',
              background: YELLOW, color: '#111', textDecoration: 'none',
              padding: isMobile ? '10px 12px' : '11px 20px', borderRadius: '9px',
              boxShadow: '0 4px 16px rgba(255,212,0,0.5)', whiteSpace: 'nowrap',
            }}>
              {isMobile ? 'Free Quote' : 'Get a Free Quote'}
            </Link>

            {isMobile && (
              <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)} style={{
                width: '40px', height: '40px', borderRadius: '9px',
                background: '#111', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                  {open
                    ? <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>
                    : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobile && open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26 }}
              style={{ overflow: 'hidden', background: '#fff', borderTop: '1px solid #f0f0ee' }}
            >
              <div style={{ padding: '8px 18px 18px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', padding: '12px 4px 4px' }}>Services</span>
                {SERVICE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                    color: '#222', textDecoration: 'none', padding: '12px 4px',
                    borderBottom: '1px solid #f4f4f2',
                  }}>{l.label}</Link>
                ))}
                <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', padding: '14px 4px 4px' }}>Company</span>
                {MAIN_LINKS.map((l) => (
                  <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                    color: '#222', textDecoration: 'none', padding: '12px 4px',
                    borderBottom: '1px solid #f4f4f2',
                  }}>{l.label}</Link>
                ))}
                <a href={SITE.phoneHref} onClick={() => setOpen(false)} className="btn-ripple" style={{
                  marginTop: '14px', textAlign: 'center',
                  fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: '#111', color: YELLOW, textDecoration: 'none',
                  padding: '14px', borderRadius: '12px',
                }}>
                  📞 {SITE.phoneDisplay}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

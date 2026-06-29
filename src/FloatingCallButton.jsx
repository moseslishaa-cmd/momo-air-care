import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:+14252005790"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 36px 10px rgba(249,168,0,0.9), 0 0 70px 20px rgba(249,168,0,0.55), 0 6px 32px rgba(0,0,0,0.25)' }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          style={{
            position: 'fixed',
            right: '24px',
            top: '50%',
            marginTop: '-28px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 22px',
            border: '1.5px solid rgba(255,230,50,0.9)',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #fffbe0 0%, #FFE566 40%, #FFF9C4 60%, #F9A800 100%)',
            boxShadow: '0 0 18px 4px rgba(249,168,0,0.55), 0 0 40px 8px rgba(249,168,0,0.3), 0 4px 24px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            textDecoration: 'none',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        >
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            background: 'linear-gradient(105deg, #5a3a00 0%, #7a5000 20%, #fff8e0 48%, #ffe066 52%, #7a5000 80%, #3a2000 100%)',
            backgroundSize: '250% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shine-sweep 2.2s linear infinite',
          }}>
            (425) 200-5790
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

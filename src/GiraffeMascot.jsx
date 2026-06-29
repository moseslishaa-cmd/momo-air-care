import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function GiraffeMascot() {
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  const x = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.8 });

  useEffect(() => {
    const move = (e) => {
      rawX.set(e.clientX - 80);
      rawY.set(e.clientY - 220);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.img
      src="/momo-giraffe.png"
      alt="Momo mascot"
      style={{
        position: 'fixed',
        x,
        y,
        width: '160px',
        pointerEvents: 'none',
        zIndex: 999,
        objectFit: 'contain',
      }}
    />
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Scroll-reveal wrapper: fades + slides content in the first time it enters view.
export function Reveal({ children, delay = 0, y = 26, style, className }: { children: React.ReactNode; delay?: number; y?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated counter: counts from 0 to `end` when scrolled into view.
export function CountUp({ end, duration = 1600, decimals = 0, prefix = '', suffix = '', style }: { end: number; duration?: number; decimals?: number; prefix?: string; suffix?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(end * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const shown = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-US');
  return <span ref={ref} style={style}>{prefix}{shown}{suffix}</span>;
}

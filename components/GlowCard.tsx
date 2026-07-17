'use client';

import { useEffect, useRef } from 'react';
import { useIsMobile } from './useIsMobile';

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
};

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-repeat: no-repeat;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 0% 100% / 0.9),
      transparent 100%
    );
    filter: brightness(1.5);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({ children, className = '', glowColor = 'blue', width, height }: { children: React.ReactNode; className?: string; glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange'; width?: string | number; height?: string | number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const el = cardRef.current;
    if (!el) return;
    const syncPointer = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', (e.clientX - rect.left).toFixed(1));
      el.style.setProperty('--xp', ((e.clientX - rect.left) / rect.width).toFixed(3));
      el.style.setProperty('--y', (e.clientY - rect.top).toFixed(1));
      el.style.setProperty('--yp', ((e.clientY - rect.top) / rect.height).toFixed(3));
    };
    el.addEventListener('pointermove', syncPointer, { passive: true });
    return () => el.removeEventListener('pointermove', syncPointer);
  }, [isMobile]);

  const { base, spread } = glowColorMap[glowColor];

  const inlineStyles: React.CSSProperties & { [key: `--${string}`]: string | number } = {
    '--base': base,
    '--spread': spread,
    '--radius': '16',
    '--border': '2',
    '--backdrop': '#ffffff',
    '--backup-border': 'rgba(0,0,0,0.10)',
    '--size': '260',
    '--outer': '1',
    '--saturation': '0',
    '--lightness': '100',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': '0',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 0% 100% / 0.15),
      transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: isMobile ? 'pan-y' : 'none',
    willChange: 'background-image',
    ...(width !== undefined  ? { width:  typeof width  === 'number' ? `${width}px`  : width  } : {}),
    ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={inlineStyles}
        className={`rounded-lg relative shadow-[0_4px_18px_rgba(0,0,0,0.07)] p-6 transition-transform duration-150 ${isMobile ? '' : 'hover:-translate-y-2'} ${className}`}
      >
        <div data-glow />
        {children}
      </div>
    </>
  );
}

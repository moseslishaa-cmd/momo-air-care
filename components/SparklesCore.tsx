'use client';

import { useEffect, useRef } from 'react';
import { useIsMobile } from './useIsMobile';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  opacityDir: 1 | -1;
  opacitySpeed: number;
  vx: number;
  vy: number;
}

interface SparklesProps {
  className?: string;
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

export function SparklesCore({
  className = '',
  background = 'transparent',
  particleColor = '#ffffff',
  particleDensity = 120,
  minSize = 1,
  maxSize = 3,
  speed = 1,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let particles: Particle[] = [];

    const hexToRgb = (hex: string): string => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };

    const rgb = hexToRgb(particleColor.startsWith('#') ? particleColor : '#ffffff');

    function init() {
      if (!canvas) return;
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / ((400 * 400) / particleDensity));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: minSize + Math.random() * (maxSize - minSize),
          opacity: Math.random(),
          opacityDir: Math.random() > 0.5 ? 1 : -1,
          opacitySpeed: 0.003 + Math.random() * 0.008 * speed,
          vx: (Math.random() - 0.5) * 0.3 * speed,
          vy: (Math.random() - 0.5) * 0.3 * speed,
        });
      }
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (background !== 'transparent') {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (const p of particles) {
        p.opacity += p.opacityDir * p.opacitySpeed;
        if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1; }
        if (p.opacity <= 0.05) { p.opacity = 0.05; p.opacityDir = 1; }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${p.opacity})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [background, particleColor, particleDensity, minSize, maxSize, speed, isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    />
  );
}

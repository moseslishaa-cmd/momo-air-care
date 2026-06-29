import { useEffect, useRef } from 'react';

export function InteractiveDots({
  colors = ['#C501E1','#9A26F8','#6564FE','#2B97FA','#02C4E7','#16E6CC','#2EF9A0','#C6E501','#E7C501','#FF6A63','#F82D98','#E830CE'],
  spacing = 18,
  dotRadius = 3,
  repelForce = 0.6,
  repelDistance = 3000,
  returnSpeed = 1,
  style = {},
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const init = () => {
      dotsRef.current = [];
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dotsRef.current.push({ x, y, dx: x, dy: y, color: randomColor() });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      dotsRef.current.forEach(dot => {
        const disX = dot.x - mx;
        const disY = dot.y - my;
        const ds = disX * disX + disY * disY;
        const angle = Math.atan2(disY, disX);
        const dist = repelDistance / ds;

        if (ds < repelDistance) {
          dot.x += Math.cos(angle) * dist * repelForce;
          dot.y += Math.sin(angle) * dist * repelForce;
        } else {
          dot.x += (dot.dx - dot.x) * 0.02 * returnSpeed;
          dot.y += (dot.dy - dot.y) * 0.02 * returnSpeed;
        }

        if (dot.x < 0 || dot.x > canvas.width) dot.x = dot.dx;
        if (dot.y < 0 || dot.y > canvas.height) dot.y = dot.dy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
        ctx.closePath();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    animate();

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 'inherit', ...style }}
    />
  );
}

import { useEffect, useRef } from 'react';
import { GlowingShadow } from './GlowingShadow';
import { AnimatedText } from './AnimatedText';
import { SparklesCore } from './SparklesCore';
import { useIsMobile } from './useIsMobile';
import * as THREE from 'three';

const GLSLHills = ({ width = '100vw', height = '100vh', cameraZ = 125, planeSize = 256, speed = 0.5 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    class Plane {
      constructor() {
        this.uniforms = { time: { type: 'f', value: 0 } };
        this.mesh = this.createMesh();
        this.time = speed;
      }

      createMesh() {
        return new THREE.Mesh(
          new THREE.PlaneGeometry(planeSize, planeSize, planeSize, planeSize),
          new THREE.RawShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
              #define GLSLIFY 1
              attribute vec3 position;
              uniform mat4 projectionMatrix;
              uniform mat4 modelViewMatrix;
              uniform float time;
              varying vec3 vPosition;

              mat4 rotateMatrixX(float radian) {
                return mat4(
                  1.0, 0.0, 0.0, 0.0,
                  0.0, cos(radian), -sin(radian), 0.0,
                  0.0, sin(radian), cos(radian), 0.0,
                  0.0, 0.0, 0.0, 1.0
                );
              }

              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
              vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
              vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

              float cnoise(vec3 P) {
                vec3 Pi0 = floor(P);
                vec3 Pi1 = Pi0 + vec3(1.0);
                Pi0 = mod289(Pi0);
                Pi1 = mod289(Pi1);
                vec3 Pf0 = fract(P);
                vec3 Pf1 = Pf0 - vec3(1.0);
                vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                vec4 iy = vec4(Pi0.yy, Pi1.yy);
                vec4 iz0 = Pi0.zzzz;
                vec4 iz1 = Pi1.zzzz;

                vec4 ixy = permute(permute(ix) + iy);
                vec4 ixy0 = permute(ixy + iz0);
                vec4 ixy1 = permute(ixy + iz1);

                vec4 gx0 = ixy0 * (1.0 / 7.0);
                vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
                gx0 = fract(gx0);
                vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
                vec4 sz0 = step(gz0, vec4(0.0));
                gx0 -= sz0 * (step(0.0, gx0) - 0.5);
                gy0 -= sz0 * (step(0.0, gy0) - 0.5);

                vec4 gx1 = ixy1 * (1.0 / 7.0);
                vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
                gx1 = fract(gx1);
                vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
                vec4 sz1 = step(gz1, vec4(0.0));
                gx1 -= sz1 * (step(0.0, gx1) - 0.5);
                gy1 -= sz1 * (step(0.0, gy1) - 0.5);

                vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
                vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
                vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
                vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
                vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
                vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
                vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
                vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

                vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
                g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
                vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
                g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;

                float n000 = dot(g000, Pf0);
                float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
                float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
                float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
                float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
                float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
                float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
                float n111 = dot(g111, Pf1);

                vec3 fade_xyz = fade(Pf0);
                vec4 n_z = mix(vec4(n000,n100,n010,n110), vec4(n001,n101,n011,n111), fade_xyz.z);
                vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
                float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
                return 2.2 * n_xyz;
              }

              void main(void) {
                vec3 updatePosition = (rotateMatrixX(radians(90.0)) * vec4(position, 1.0)).xyz;
                float sin1 = sin(radians(updatePosition.x / 128.0 * 90.0));
                vec3 noisePosition = updatePosition + vec3(0.0, 0.0, time * -30.0);
                float noise1 = cnoise(noisePosition * 0.08);
                float noise2 = cnoise(noisePosition * 0.06);
                float noise3 = cnoise(noisePosition * 0.4);
                vec3 lastPosition = updatePosition + vec3(0.0,
                  noise1 * sin1 * 8.0
                  + noise2 * sin1 * 8.0
                  + noise3 * (abs(sin1) * 2.0 + 0.5)
                  + pow(sin1, 2.0) * 40.0, 0.0);

                vPosition = lastPosition;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(lastPosition, 1.0);
              }
            `,
            fragmentShader: `
              precision highp float;
              #define GLSLIFY 1
              varying vec3 vPosition;

              void main(void) {
                float opacity = (96.0 - length(vPosition)) / 256.0 * 0.6;
                vec3 color = vec3(1.0);
                gl_FragColor = vec4(color, opacity);
              }
            `,
            transparent: true
          })
        );
      }

      render(time) {
        this.uniforms.time.value += time * this.time;
      }
    }

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: false });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    const clock = new THREE.Clock();
    const plane = new Plane();
    let rafId;

    const resize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    let running = false;
    const renderLoop = () => {
      plane.render(clock.getDelta());
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(renderLoop);
    };
    const start = () => { if (!running) { running = true; clock.getDelta(); renderLoop(); } };
    const stop = () => { if (running) { running = false; cancelAnimationFrame(rafId); } };

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    camera.position.set(0, 16, cameraZ);
    camera.lookAt(new THREE.Vector3(0, 28, 0));
    scene.add(plane.mesh);
    window.addEventListener('resize', resize);
    resize();

    // Only animate while the hero is on-screen — saves GPU while scrolling the rest of the page
    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    if (containerRef.current) io.observe(containerRef.current);
    start();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  }, [cameraZ, planeSize, speed]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height: 'auto', background: '#ffffff' }}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Black utility bar */}
      <div style={{
        background: '#0d0d0d',
        padding: isMobile ? '12px 16px' : '14px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
      }}>
        <a href="tel:+14252005790" style={{
          fontFamily: "'Oswald', sans-serif", fontWeight: 700,
          fontSize: isMobile ? '1.05rem' : '1.15rem', letterSpacing: '0.08em',
          color: '#fff', textDecoration: 'none',
        }}>
          (425) 200-5790
        </a>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 700,
          fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#F9A800',
        }}>
          Call for a free quote
        </span>
      </div>


      {/* Navbar */}
      <nav style={{
        position: 'relative', zIndex: 11,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '14px 18px' : '18px 48px',
        background: '#ffffff',
        borderBottom: '1px solid #ececec',
      }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: isMobile ? '1.05rem' : '1.4rem', letterSpacing: '0.12em', color: '#111', textTransform: 'uppercase' }}>
          Momo <span style={{ color: '#D98F00' }}>Air Care</span>
        </div>
        {!isMobile && (
        <div style={{ display: 'flex', gap: '36px', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: '#contact' },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#000'}
              onMouseLeave={e => e.target.style.color = '#555'}
            >{l.label}</a>
          ))}
        </div>
        )}
        <a href="tel:+14252005790" style={{
          fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: isMobile ? '0.82rem' : '0.95rem',
          letterSpacing: '0.06em', color: '#111', textDecoration: 'none',
          background: '#F9A800', padding: isMobile ? '9px 14px' : '11px 22px', borderRadius: '6px',
          boxShadow: '0 2px 10px rgba(249,168,0,0.3)', transition: 'filter 0.2s, transform 0.15s', whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.06)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          (425) 200-5790
        </a>
      </nav>

      {/* Hero content — clean editorial flow */}
      <div style={{
        position: 'relative',
        zIndex: 4,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        padding: isMobile ? '34px 20px 0' : '56px 72px 0',
        maxWidth: '1180px', margin: '0 auto', width: '100%',
      }}>


        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '0', width: '100%' }}>

        {/* LEFT: text content */}
        <div style={{ flex: isMobile ? 'none' : 1, width: isMobile ? '100%' : 'auto', minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '8px' }}>

          {/* Offer chip — price anchor */}
          <a href="tel:+14252005790" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', textDecoration: 'none',
            borderRadius: '999px', padding: isMobile ? '7px 16px' : '8px 20px',
            marginBottom: '16px',
            border: '1.5px solid rgba(249,168,0,0.5)',
            boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
          }}>
            <span style={{ fontSize: '0.9rem' }}>🔥</span>
            <span style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: isMobile ? '0.72rem' : '0.8rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#F9A800',
            }}>
              $69 Dryer Vent Special
            </span>
          </a>

          {/* Big headline — dominant */}
          <h1 style={{
            margin: '0 0 16px',
            fontFamily: "'Fraunces', serif",
            fontSize: isMobile ? 'clamp(2.1rem, 9.6vw, 2.8rem)' : 'clamp(2.8rem, 5vw, 4.4rem)',
            fontWeight: 900, color: '#111111', lineHeight: 1.06,
          }}>
            There's Clean.<br />Then There's MOMO.
          </h1>

          {/* Brand + meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <AnimatedText>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>Momo Air Care</span>
            </AnimatedText>
            <span style={{ width: '1px', height: '14px', background: '#ddd' }} />
            <span style={{ color: '#E9A800', fontSize: '0.8rem' }}>★★★★★</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#666' }}>5.0 · 200+ Reviews</span>
            <span style={{ width: '1px', height: '14px', background: '#ddd' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#666' }}>📍 Greater Seattle</span>
          </div>

          {/* Description */}
          <p style={{
            margin: '0 0 28px',
            fontSize: '0.95rem', fontWeight: 400, color: '#555',
            maxWidth: '440px', lineHeight: 1.75, fontFamily: "'Inter', sans-serif",
          }}>
            Professional duct & dryer vent cleaning for healthier air, lower energy bills, and total peace of mind.
          </p>

          {/* CTAs + promo */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: isMobile ? '10px' : '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+14252005790" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#F9A800', color: '#111',
              padding: '15px 28px', borderRadius: '10px',
              boxShadow: '0 6px 28px rgba(249,168,0,0.35)',
              transition: 'transform 0.15s, box-shadow 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)'; }}
            >
              📞 Call Now — Free Quote
            </a>
            <a href="#services" style={{
              display: 'inline-flex', alignItems: 'center', textDecoration: 'none',
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#ffffff', color: '#111',
              border: '1.5px solid #1a1a1a',
              padding: '15px 28px', borderRadius: '6px',
              transition: 'background 0.15s, transform 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={isMobile ? undefined : e => { e.currentTarget.style.background = '#f5f5f3'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={isMobile ? undefined : e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Our Services →
            </a>

          </div>

          {/* Trust strip */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['✓ Same-Day Service', '✓ 100% Satisfaction', '✓ No Hidden Fees'].map(t => (
              <div key={t} style={{
                padding: '6px 12px',
                background: '#F6F6F3',
                border: '1px solid #e5e5e2', borderRadius: '999px',
                fontFamily: "'Inter', sans-serif", fontSize: '0.63rem', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: '#555',
                whiteSpace: 'nowrap',
              }}>{t}</div>
            ))}
          </div>

        </div>

        {/* RIGHT: mascot — tall, bottom-anchored */}
        {!isMobile && (
        <div style={{ flexShrink: 0, width: '460px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img
            src="/momo-giraffe.png"
            alt="Momo mascot"
            style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.3))' }}
          />
        </div>
        )}

        </div>
      </div>


    </div>
  );
};

export { GLSLHills };

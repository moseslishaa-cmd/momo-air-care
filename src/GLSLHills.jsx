import { useEffect, useRef } from 'react';
import { GlowingShadow } from './GlowingShadow';
import { AnimatedText } from './AnimatedText';
import { SparklesCore } from './SparklesCore';
import * as THREE from 'three';

const GLSLHills = ({ width = '100vw', height = '100vh', cameraZ = 125, planeSize = 256, speed = 0.5 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

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

    const renderLoop = () => {
      plane.render(clock.getDelta());
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(renderLoop);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    camera.position.set(0, 16, cameraZ);
    camera.lookAt(new THREE.Vector3(0, 28, 0));
    scene.add(plane.mesh);
    window.addEventListener('resize', resize);
    resize();
    renderLoop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  }, [cameraZ, planeSize, speed]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height, background: '#F9A800' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1 }} />

      {/* Sparkles layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>

      {/* Dark gradient overlay for depth */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        background: 'linear-gradient(160deg, rgba(0,0,0,0.18) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        pointerEvents: 'none',
      }} />


      {/* Navbar */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 11,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 48px',
        background: 'rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.15em', color: '#fff', textTransform: 'uppercase' }}>
          Momo <span style={{ color: '#FFE566' }}>Air Care</span>
        </div>
        <div style={{ display: 'flex', gap: '36px', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: '#contact' },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
            >{l.label}</a>
          ))}
        </div>
        <a href="tel:+14252005790" style={{
          fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '0.95rem',
          letterSpacing: '0.08em', color: '#F9A800', textDecoration: 'none',
          background: '#1a1a1a', padding: '11px 22px', borderRadius: '8px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.25)', transition: 'background 0.2s, transform 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          (425) 200-5790
        </a>
      </nav>

      {/* Hero content — bottom-anchored layout */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 4,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 72px 48px',
      }}>

        {/* Big centered brand title */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          paddingTop: '120px',
          pointerEvents: 'none',
        }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.1)',
            margin: 0,
            lineHeight: 1,
            userSelect: 'none',
            whiteSpace: 'nowrap',
            textShadow: '0 0 60px rgba(249,168,0,0.12)',
          }}>
            MOMO Air Care
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0', width: '100%' }}>

        {/* LEFT: text content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '8px' }}>

          {/* Big headline — dominant */}
          <h1 style={{
            margin: '0 0 16px',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            fontWeight: 900, color: '#ffffff', lineHeight: 1.05,
            textShadow: '0 2px 24px rgba(0,0,0,0.2)',
          }}>
            There's Clean.<br />Then There's MOMO.
          </h1>

          {/* Brand + meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <AnimatedText>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Momo Air Care</span>
            </AnimatedText>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: '#FFE566', fontSize: '0.8rem' }}>★★★★★</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>5.0 · 200+ Reviews</span>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>📍 Greater Seattle</span>
          </div>

          {/* Description */}
          <p style={{
            margin: '0 0 28px',
            fontSize: '0.92rem', fontWeight: 400, color: 'rgba(255,255,255,0.7)',
            maxWidth: '400px', lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
          }}>
            Professional duct & dryer vent cleaning for healthier air, lower energy bills, and total peace of mind.
          </p>

          {/* CTAs + promo */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '24px' }}>
            <a href="tel:+14252005790" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#1a1a1a', color: '#F9A800',
              padding: '15px 28px', borderRadius: '10px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
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
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)',
              padding: '15px 28px', borderRadius: '10px',
              transition: 'background 0.15s, transform 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Our Services →
            </a>

          </div>

          {/* Trust strip */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {['✓ Same-Day Service', '✓ 100% Satisfaction', '✓ No Hidden Fees'].map(t => (
              <div key={t} style={{
                padding: '6px 12px',
                background: 'rgba(0,0,0,0.18)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px',
                fontFamily: "'Inter', sans-serif", fontSize: '0.63rem', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
                whiteSpace: 'nowrap',
              }}>{t}</div>
            ))}
          </div>

        </div>

        {/* RIGHT: mascot — tall, bottom-anchored */}
        <div style={{ flexShrink: 0, width: '460px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img
            src="/momo-giraffe.png"
            alt="Momo mascot"
            style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.3))' }}
          />
        </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 11, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
      }}>
        <span>Scroll</span>
        <div style={{ width: '1px', height: '28px', background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)' }} />
      </div>

    </div>
  );
};

export { GLSLHills };

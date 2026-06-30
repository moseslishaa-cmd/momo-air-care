import { SparklesCore } from './SparklesCore';
import { useIsMobile } from './useIsMobile';

const images = [
  {
    type: 'before',
    image: '/gallery-before-1.jpg',
    label: 'Heavy dust & debris clogging the air duct',
    tag: 'Before',
  },
  {
    type: 'after',
    image: '/gallery-after-1.jpg',
    label: 'Spotless, fully cleared air duct after service',
    tag: 'After',
  },
  {
    type: 'before',
    image: '/gallery-before-2.jpg',
    label: 'Clogged dryer vent — serious fire hazard',
    tag: 'Before',
  },
  {
    type: 'after',
    image: '/gallery-after-2.jpg',
    label: 'Fully cleared dryer vent — safe & flowing',
    tag: 'After',
  },
  {
    type: 'before',
    image: '/gallery-before-3.jpg',
    label: 'Mold & buildup inside return duct',
    tag: 'Before',
  },
  {
    type: 'after',
    image: '/gallery-after-3.jpg',
    label: 'Sanitized, fresh return duct — like new',
    tag: 'After',
  },
];

function GalleryCard({ type, image, label, tag, gradient, emoji }) {
  const isBefore = type === 'before';
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        aspectRatio: '4/3',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
        background: gradient || '#111',
      }}
      onMouseEnter={isMobile ? undefined : e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.28)';
      }}
      onMouseLeave={isMobile ? undefined : e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)';
      }}
    >
      {image ? (
        <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <span style={{ fontSize: '2.8rem' }}>{emoji}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.08em', textAlign: 'center', maxWidth: '78%',
            color: isBefore ? 'rgba(255,200,100,0.9)' : 'rgba(30,90,30,0.9)',
            lineHeight: 1.4, textTransform: 'uppercase',
          }}>{label}</span>
        </div>
      )}
      <div style={{
        position: 'absolute', top: '12px', left: '12px',
        padding: '4px 10px', borderRadius: '999px',
        fontFamily: "'Oswald', sans-serif", fontWeight: 600,
        fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        background: isBefore ? 'rgba(0,0,0,0.65)' : 'rgba(20,120,20,0.85)',
        color: isBefore ? '#F9A800' : '#fff',
        backdropFilter: 'blur(4px)',
      }}>
        {tag}
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, subtitle, bullets }) {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.18)',
      borderRadius: '20px',
      padding: '32px 28px',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255,255,255,0.15)',
      flex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: '#F9A800', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{title}</div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: '2px' }}>{subtitle}</div>
        </div>
      </div>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '16px' }} />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ color: '#F9A800', fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, flexShrink: 0 }}>→</span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      style={{ background: '#F9A800', fontFamily: "'Inter', sans-serif", position: 'relative' }}
      className="px-6 pb-24 pt-4"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">See the Difference</h2>
        </div>

        {/* 6-image grid: 3 rows × 2 columns */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>

          {/* Row 1 — Duct Cleaning */}
          <div>
            <p style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: '2rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              marginBottom: '12px',
            }}>Duct Cleaning</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GalleryCard {...images[0]} />
              <GalleryCard {...images[1]} />
            </div>
          </div>

          {/* Row 2 — Return Duct Cleaning */}
          <div>
            <p style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: '2rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              marginBottom: '12px',
            }}>Return Duct Cleaning</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GalleryCard {...images[2]} />
              <GalleryCard {...images[3]} />
            </div>
          </div>

          {/* Row 3 — Blower Cleaning */}
          <div>
            <p style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: '2rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              marginBottom: '12px',
            }}>Blower Cleaning</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GalleryCard {...images[4]} />
              <GalleryCard {...images[5]} />
            </div>
          </div>

        </div>

        {/* Service explanation cards */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

          <ServiceCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            }
            title="Return Duct Cleaning"
            subtitle="Deep cleaning where dirty air re-enters your system"
            bullets={[
              'We use a high-powered rotary brush system to scrub the full length of your return ducts.',
              'Removes built-up mold, dust, allergens, and debris that recirculate through your home.',
              'Every vent cover is removed, cleaned, and reinstalled — leaving no detail untouched.',
            ]}
          />

          <ServiceCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
                <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
              </svg>
            }
            title="Furnace Blower Cleaning"
            subtitle="The heart of your HVAC — fully removed & deep cleaned"
            bullets={[
              'We physically remove the furnace blower to access every blade and housing compartment.',
              'A rotary brush system is used to break loose years of compacted dust and grime.',
              'Deep cleaned and reinstalled — restoring full airflow and extending the life of your system.',
            ]}
          />

        </div>

        <p style={{
          textAlign: 'center', marginTop: '28px',
          fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
          fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        }}>
          Real results from real homes in the area
        </p>

      </div>
    </section>
  );
}

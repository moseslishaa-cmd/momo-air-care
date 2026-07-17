'use client';

import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';

const YELLOW = '#FFD400';

function Check() {
  return (
    <span style={{
      width: '22px', height: '22px', borderRadius: '50%', background: YELLOW, flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

function BeforeAfter({ before, after, isMobile }: { before: string; after: string; isMobile: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '10px' : '14px', marginTop: '18px' }}>
      {[{ img: before, tag: 'BEFORE', bg: '#111', fg: YELLOW }, { img: after, tag: 'AFTER', bg: '#1e6b2e', fg: '#fff' }].map(x => (
        <div key={x.tag} style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4/3', border: '1px solid #e8e8e4', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}>
          <img src={x.img} alt={x.tag} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <span style={{
            position: 'absolute', top: '10px', left: '10px', background: x.bg, color: x.fg,
            fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.66rem',
            letterSpacing: '0.14em', padding: '4px 12px', borderRadius: '999px',
          }}>{x.tag}</span>
        </div>
      ))}
    </div>
  );
}

export interface ServiceDetailProps {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  benefits: string[];
  included: string[];
  media: { type: 'video' | 'image'; src: string };
  before?: string;
  after?: string;
  flip?: boolean;
  bg?: string;
}

export function ServiceDetail({
  id, eyebrow, title, lead, benefits, included, media, before, after, flip = false, bg = '#ffffff',
}: ServiceDetailProps) {
  const isMobile = useIsMobile(1024);

  return (
    <section id={id} style={{ background: bg, padding: isMobile ? '56px 20px' : '84px 24px' }}>
      <div style={{
        maxWidth: '1160px', margin: '0 auto',
        display: 'flex', flexDirection: isMobile ? 'column' : (flip ? 'row-reverse' : 'row'),
        gap: isMobile ? '28px' : '54px', alignItems: 'center',
      }}>

        {/* Media */}
        <Reveal style={{ flex: isMobile ? 'none' : '0 0 46%', width: isMobile ? '100%' : 'auto' }}>
          <div>
            <div style={{
              borderRadius: '22px', overflow: 'hidden', border: '1px solid #ebebe7',
              boxShadow: '0 22px 54px rgba(0,0,0,0.13)', background: '#111',
            }}>
              {media.type === 'video'
                ? <video src={media.src} autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }} />
                : <img src={media.src} alt={title} loading="lazy" style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }} />}
            </div>
            {before && after && <BeforeAfter before={before} after={after} isMobile={isMobile} />}
          </div>
        </Reveal>

        {/* Copy */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#111', borderRadius: '999px', padding: '6px 16px', marginBottom: '14px',
            }}>
              <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>
                {eyebrow}
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 900, fontSize: isMobile ? '1.8rem' : '2.4rem', color: '#0e0e0e', margin: '0 0 12px', lineHeight: 1.12 }}>
              {title}
            </h2>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.75, margin: '0 0 20px', maxWidth: '560px' }}>
              {lead}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '18px' : '26px', marginBottom: '22px' }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', margin: '0 0 10px' }}>Key Benefits</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {benefits.map((b: string) => (
                    <li key={b} style={{ display: 'flex', gap: '10px', fontFamily: "var(--font-inter), sans-serif", fontSize: '0.86rem', color: '#333', lineHeight: 1.5, fontWeight: 500 }}>
                      <Check /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', margin: '0 0 10px' }}>What&apos;s Included</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {included.map((b: string) => (
                    <li key={b} style={{ display: 'flex', gap: '10px', fontFamily: "var(--font-inter), sans-serif", fontSize: '0.86rem', color: '#333', lineHeight: 1.5, fontWeight: 500 }}>
                      <Check /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#contact" className="btn-ripple" style={{
                fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.92rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: YELLOW, color: '#111', textDecoration: 'none',
                padding: '14px 26px', borderRadius: '11px',
                boxShadow: '0 8px 24px rgba(255,212,0,0.45)',
              }}>
                Get Instant Quote
              </a>
              <a href="tel:+14252005790" style={{
                fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.92rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#111', textDecoration: 'none',
                padding: '14px 22px', borderRadius: '11px', border: '1.5px solid #1a1a1a',
              }}>
                📞 (425) 200-5790
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailsAll() {
  return (
    <>
      <ServiceDetail
        id="air-duct"
        eyebrow="Air Duct Cleaning"
        title="Every Vent. Every Line. Spotless."
        lead="Your ducts quietly collect dust, pollen, pet dander, and construction debris for years — then blow it back into every room. Our negative-pressure deep clean removes it all at the source."
        benefits={[
          'Noticeably fresher indoor air',
          'Fewer allergy & asthma triggers',
          'HVAC runs quieter and lasts longer',
          'Lower monthly energy bills',
        ]}
        included={[
          'Every supply & return vent',
          'Main trunk lines, full length',
          'Vent covers removed & cleaned',
          'Before/after photo proof',
        ]}
        media={{ type: 'image', src: '/gallery-before-1.jpg' }}
        before="/gallery-before-1.jpg"
        after="/gallery-after-1.jpg"
      />

      <ServiceDetail
        id="furnace"
        eyebrow="Furnace & Blower Cleaning"
        title="The Heart of Your HVAC, Deep-Cleaned"
        lead="The furnace blower is where all your home's air gets pushed from — and where grime builds thickest. We physically remove the blower and clean every blade, then service the furnace cabinet."
        benefits={[
          'Restores full airflow instantly',
          'Prevents overheating & breakdowns',
          'Extends furnace lifespan by years',
          'Safer, more efficient heating',
        ]}
        included={[
          'Blower wheel removed & degreased',
          'Furnace cabinet vacuumed & wiped',
          'Rotary-brush return duct scrub',
          'Post-clean airflow check',
        ]}
        media={{ type: 'image', src: '/gallery-before-3.jpg' }}
        before="/gallery-before-3.jpg"
        after="/gallery-after-3.jpg"
        flip
        bg="#FAFAF7"
      />

      <ServiceDetail
        id="crawl-space"
        eyebrow="Crawl Space & Insulation"
        title="Clean Below. Comfortable Above."
        lead="Up to 40% of the air in your living space rises from the crawl space. If it's full of debris, moisture, or damaged insulation, that's what your family breathes. We make it right — removal, cleanup, and fresh installation."
        benefits={[
          'Blocks musty odors at the source',
          'Stops heat loss through the floor',
          'Removes rodent-damaged material',
          'Healthier air rising into your home',
        ]}
        included={[
          'Debris & old insulation removal',
          'Moisture & vapor-barrier inspection',
          'New code-compliant insulation',
          'Full photo documentation',
        ]}
        media={{ type: 'image', src: '/gallery-before-2.jpg' }}
        before="/gallery-before-2.jpg"
        after="/gallery-after-2.jpg"
      />
    </>
  );
}

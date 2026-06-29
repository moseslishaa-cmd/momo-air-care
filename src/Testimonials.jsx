import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';

const reviews = [
  {
    name: 'Sarah M.',
    city: 'Redmond, WA',
    text: 'I couldn\'t believe how much dust was built up in our ducts. After Momo came through, the air in our home felt completely different — lighter, cleaner, and my allergies haven\'t bothered me since. Highly recommend.',
    glowColor: 'blue',
  },
  {
    name: 'James R.',
    city: 'Bellevue, WA',
    text: 'They found a serious lint blockage in our dryer vent that we had no idea about. The tech explained everything clearly and had it cleared in under an hour. Professional, fast, and reasonably priced. Will call again.',
    glowColor: 'orange',
  },
  {
    name: 'Linda K.',
    city: 'Kirkland, WA',
    text: 'Our HVAC had been running constantly and our energy bills were through the roof. Momo cleaned the full duct system and within two weeks our bill dropped noticeably. Wish we had called sooner.',
    glowColor: 'green',
  },
  {
    name: 'Daniel T.',
    city: 'Sammamish, WA',
    text: 'Punctual, professional, and thorough. The technician walked me through the entire process and showed me before-and-after photos. The house smells fresher and our HVAC is running quieter than ever.',
    glowColor: 'purple',
  },
];

const Stars = () => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '2px' }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#B8860B" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section
      style={{ background: '#F9A800', fontFamily: "'Inter', sans-serif", position: 'relative' }}
      className="px-6 pb-24 pt-4"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3">
            What Our Customers Say
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Real Results. Real People.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reviews.map((r) => (
            <GlowCard key={r.name} glowColor={r.glowColor} className="flex flex-col gap-4">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-black text-base leading-tight" style={{ color: '#1a1a1a' }}>
                    {r.name}
                  </p>
                  <p className="text-xs font-light tracking-wide mt-0.5" style={{ color: '#888' }}>
                    {r.city}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    color: '#F9A800',
                    background: 'rgba(25,25,25,0.85)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  VERIFIED
                </div>
              </div>

              <Stars />

              <p className="text-sm leading-relaxed font-light" style={{ color: '#444' }}>
                "{r.text}"
              </p>

            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}

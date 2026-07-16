import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';
import { Gallery } from './Gallery';
import { useIsMobile } from './useIsMobile';

const shineStyle = {
  background: 'linear-gradient(105deg, #8a5f00 0%, #b57e00 20%, #F9A800 45%, #FFD34d 50%, #F9A800 55%, #b57e00 80%, #8a5f00 100%)',
  backgroundSize: '250% 100%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'shine-sweep 9s linear infinite',
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 600,
  letterSpacing: '0.08em',
  display: 'block',
};

const services = [
  {
    title: 'Air Duct Cleaning',
    description: 'Deep cleaning of your entire duct system — removing dust, allergens, and buildup for fresher, healthier air.',
    glowColor: 'blue',
  },
  {
    title: 'Dryer Vent Cleaning',
    description: 'Prevent fire hazards and boost dryer efficiency. We clear lint and blockages so your machine runs safely.',
    glowColor: 'red',
  },
  {
    title: 'Duct Insulation',
    description: 'Properly insulated ducts keep conditioned air where it belongs — cutting energy waste and utility bills.',
    glowColor: 'green',
  },
  {
    title: 'HVAC Services',
    description: 'Full-service HVAC inspections, maintenance, and repairs. We keep your system running clean year-round.',
    glowColor: 'purple',
  },
];

export function Services() {
  const isMobile = useIsMobile();
  return (
    <>
    <section style={{ fontFamily: "'Inter', sans-serif", position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        background: '#ffffff',
        paddingTop: '60px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        position: 'relative',
      }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        <div className="text-center mb-12">
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#F6F6F3', backdropFilter: 'blur(8px)',
            border: '1px solid #e5e5e2',
            borderRadius: '999px', padding: '5px 16px', marginBottom: '14px',
            fontFamily: "'Inter', sans-serif", fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#666',
          }}>
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: '#111', fontFamily: "'Fraunces', serif" }}>
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <GlowCard key={s.title} glowColor={s.glowColor} className="flex flex-col gap-4">
              <div className="flex flex-col leading-none">
                <span style={{ ...shineStyle, fontSize: '1.5rem' }}>MOMO</span>
                <span style={{ ...shineStyle, fontSize: '0.75rem', letterSpacing: '0.2em', marginTop: '2px' }}>AIR CARE</span>
              </div>
              <h3 className="text-base font-black leading-snug" style={{ color: '#111111' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#555555' }}>{s.description}</p>
            </GlowCard>
          ))}
        </div>

        </div>
        </div>
        </div>
        </section>

        <Gallery />

        <section style={{ fontFamily: "'Inter', sans-serif", position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ background: '#ffffff', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
        </div>
        <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* How it works */}
        <div style={{ marginTop: '0px' }}>
          <div className="text-center mb-10">
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '999px', padding: '5px 16px', marginBottom: '14px',
              fontFamily: "'Inter', sans-serif", fontSize: '0.68rem',
              fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
            }}>
              How It Works
            </div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', fontWeight: 900, color: '#111', margin: 0 }}>
              Simple. Fast. Guaranteed.
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '12px' : '24px' }}>
            {[
              { step: '01', title: 'Book a Free Quote', desc: 'Call or fill out our form. We assess your home and give you a clear, upfront price — no surprises.' },
              { step: '02', title: 'We Come to You', desc: 'Our certified technicians arrive on time with professional equipment and handle everything from start to finish.' },
              { step: '03', title: 'Breathe Cleaner Air', desc: 'Within hours your ducts are spotless. Notice fresher air, quieter airflow, and lower energy costs immediately.' },
            ].map((item, i) => (
              <div key={item.step} style={{
                background: '#ffffff',
                border: '1px solid #e7e7e4',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                borderRadius: '10px',
                padding: isMobile ? '18px 18px' : '28px 24px',
                position: 'relative',
                display: isMobile ? 'flex' : 'block',
                alignItems: isMobile ? 'center' : undefined,
                gap: isMobile ? '16px' : undefined,
              }}>
                {!isMobile && (
                <div style={{
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: '3rem', color: 'rgba(0,0,0,0.06)',
                  lineHeight: 1, marginBottom: '12px',
                  position: 'absolute', top: '16px', right: '20px',
                }}>
                  {item.step}
                </div>
                )}
                <div style={{
                  width: isMobile ? '44px' : '36px', height: isMobile ? '44px' : '36px', borderRadius: '50%',
                  background: '#1a1a1a', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: isMobile ? 0 : '16px', flexShrink: 0,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: isMobile ? '1.05rem' : '0.85rem', color: '#F9A800',
                }}>
                  {i + 1}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#111', margin: isMobile ? '0 0 4px' : '0 0 10px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#555', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats + CTA strip */}
        <div style={{
          marginTop: '48px',
          background: '#141414',
          border: '1px solid rgba(249,168,0,0.3)',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'stretch',
        }}>
          <div style={{ flex: 1, width: isMobile ? '100%' : 'auto', padding: isMobile ? '24px 22px 8px' : '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: isMobile ? '20px' : '24px' }}>
            <div style={{ display: 'flex', gap: isMobile ? '20px 28px' : '40px', flexWrap: 'wrap' }}>
              {[
                { num: '2,500+', label: 'Homes Served' },
                { num: '10+', label: 'Years Experience' },
                { num: '100%', label: 'Satisfaction Rate' },
                { num: '5★', label: 'Average Rating' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: '#fff', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { text: 'Licensed & Insured', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                { text: 'Certified Technicians', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M9 12l-4 8h14l-4-8"/></svg> },
                { text: '100% Satisfaction Guarantee', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
              ].map(badge => (
                <div key={badge.text} style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid rgba(249,168,0,0.25)',
                  borderRadius: '8px', padding: '7px 14px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.68rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>

            <a href="tel:+14252005790" style={{
              textDecoration: 'none', alignSelf: 'flex-start',
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '1rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#F9A800', color: '#111',
              padding: '14px 28px', borderRadius: '6px',
              boxShadow: '0 4px 20px rgba(249,168,0,0.3)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'; }}
            >
              Book Your Service →
            </a>
          </div>

          <div style={{
            width: isMobile ? '170px' : '200px',
            flexShrink: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingTop: isMobile ? '8px' : 0,
          }}>
            <img
              src="/stats-image.png"
              alt="Momo mascot — it's so easy"
              style={{
                width: '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: isMobile ? 'contain' : 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

      </div>
      </div>
      </div>
    </section>
    </>
  );
}

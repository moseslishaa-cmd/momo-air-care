import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';

const benefits = [
  {
    tag: 'AIR',
    title: 'Healthier Air for Your Family',
    description: 'We eliminate dust, allergens, mold, and bacteria from your duct system — improving indoor air quality and protecting the health of everyone in your home.',
  },
  {
    tag: 'ECO',
    title: 'Lower Energy Bills',
    description: 'Blocked ducts force your HVAC system to work harder and longer. A clean system runs at peak efficiency, reducing energy consumption and cutting your monthly costs.',
  },
  {
    tag: 'SAFE',
    title: 'Fire Prevention',
    description: 'Lint accumulation in dryer vents is one of the leading causes of residential fires. Our thorough cleaning eliminates that risk and keeps your home and family protected.',
  },
  {
    tag: 'PRO',
    title: 'Certified & Fully Guaranteed',
    description: 'Our technicians are licensed, insured, and trained to the highest industry standards. Every job is backed by a 100% satisfaction guarantee — no exceptions.',
  },
  {
    tag: 'FAST',
    title: 'Same-Week Availability',
    description: 'We know your time is valuable. That\'s why we offer flexible scheduling with same-week appointments and arrive on time, every time — with no hidden fees.',
  },
  {
    tag: 'DEEP',
    title: 'Whole-System Cleaning',
    description: 'We don\'t just clean the visible parts. We service every register, return vent, main trunk line, and air handler — leaving zero buildup behind.',
  },
];

const stats = [
  { number: '2500+', label: 'Homes Served' },
  { number: '10+',  label: 'Years of Experience' },
  { number: '100%', label: 'Satisfaction Rate' },
  { number: '5★',   label: 'Average Rating' },
];

const dividerStyle = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.25), transparent)',
  margin: '4px 0',
};

export function WhyMomo() {
  return (
    <section
      style={{ background: '#F9A800', fontFamily: "'Inter', sans-serif", position: 'relative' }}
      className="px-6 pb-24 pt-4"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-6xl mx-auto">

        <div>

        <div className="text-center mb-12">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '16px',
          }}>
            <span style={{ fontSize: '0.9rem' }}>🦒</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F9A800' }}>
              The Momo Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Why Choose Momo Air Care?
          </h2>
        </div>

        <GlowCard glowColor="blue" className="flex flex-col gap-0" width="100%">

          {/* Intro */}
          <p className="text-sm leading-relaxed" style={{ color: '#444', marginBottom: '28px' }}>
            At Momo Air Care, we believe clean air isn't a luxury — it's a right. We bring
            professional-grade duct and vent cleaning directly to your door, with the care and precision your home deserves. Here's what sets us apart:
          </p>

          {/* Benefits list */}
          <div className="flex flex-col gap-6">
            {benefits.map((b, i) => (
              <div key={b.title}>
                <div className="flex gap-5 items-start">
                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      background: 'hsl(0 0% 100% / 0.2)',
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {b.tag}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-black leading-snug" style={{ color: '#1a1a1a' }}>
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light" style={{ color: '#555' }}>
                      {b.description}
                    </p>
                  </div>
                </div>
                {i < benefits.length - 1 && <div style={{ ...dividerStyle, marginTop: '24px' }} />}
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ ...dividerStyle, margin: '32px 0 28px' }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, #bbb 0%, #fff 45%, #bbb 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shine-sweep 9s linear infinite',
                  }}
                >
                  {s.number}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#888' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div style={{ ...dividerStyle, margin: '28px 0 24px' }} />
          <p className="text-xs text-center font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Licensed · Insured · Local · Trusted
          </p>

        </GlowCard>

        </div>

      </div>
    </section>
  );
}

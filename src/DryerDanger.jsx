import { SparklesCore } from './SparklesCore';
import { useIsMobile } from './useIsMobile';

const STATS = [
  { num: '13,820', label: 'Home dryer fires in the U.S. every year' },
  { num: '$238M', label: 'In property damage — every single year' },
  { num: '1 in 3', label: 'Caused by failure to clean lint & vents' },
];

const WARNING_SIGNS = [
  {
    title: 'Clothes take longer to dry',
    desc: 'If a load needs two cycles, trapped lint is choking your airflow.',
    icon: (p) => (<><circle cx="12" cy="12" r="9" {...p} /><polyline points="12 7 12 12 15 14" {...p} /></>),
  },
  {
    title: 'The dryer feels very hot',
    desc: 'A hot dryer or laundry room means heat has nowhere to escape.',
    icon: (p) => (<path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-4.5 5-10 5-10z" {...p} />),
  },
  {
    title: 'A burning or musty smell',
    desc: 'Scorched lint smells hot. Trapped moisture smells musty. Both are bad.',
    icon: (p) => (<><path d="M8 20h8" {...p} /><path d="M10 20c-2-2-3-4-1-7 1 2 2 2 3 1 1-2 0-4-1-6 4 1 6 5 6 8a5 5 0 0 1-7 4z" {...p} /></>),
  },
  {
    title: 'Lint around the vent opening',
    desc: 'Visible lint outside means it is packing up on the inside too.',
    icon: (p) => (<><rect x="3" y="4" width="18" height="16" rx="2" {...p} /><circle cx="12" cy="12" r="3.5" {...p} /></>),
  },
  {
    title: "It's been over a year",
    desc: 'Vents should be cleaned yearly — sooner for big families or pets.',
    icon: (p) => (<><rect x="3" y="5" width="18" height="16" rx="2" {...p} /><line x1="3" y1="10" x2="21" y2="10" {...p} /><line x1="8" y1="3" x2="8" y2="7" {...p} /><line x1="16" y1="3" x2="16" y2="7" {...p} /></>),
  },
  {
    title: 'The vent flap stays shut',
    desc: 'If the outside flap barely opens, airflow is badly blocked.',
    icon: (p) => (<><path d="M4 12h16" {...p} /><path d="M4 12l4-4M4 12l4 4" {...p} /></>),
  },
];

const BENEFITS = [
  { title: 'Prevent house fires', desc: 'Removing packed lint eliminates the #1 dryer fire risk in your home.' },
  { title: 'Lower energy bills', desc: 'A clear vent lets your dryer run efficiently — less power, lower bills.' },
  { title: 'Dry clothes faster', desc: 'Proper airflow means one cycle, not two. Save time on every load.' },
  { title: 'Extend dryer life', desc: 'Less strain and overheating means your machine lasts years longer.' },
  { title: 'Healthier indoor air', desc: 'Stop lint, dust and moisture from pushing back into your home.' },
  { title: 'Peace of mind', desc: 'Know your family and home are protected — guaranteed.' },
];

function BenefitCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function DryerDanger() {
  const isMobile = useIsMobile();

  return (
    <section id="dryer" style={{
      background: 'linear-gradient(180deg, #F9A800 0%, #f0a000 100%)',
      position: 'relative',
      padding: isMobile ? '64px 18px 72px' : '96px 24px 110px',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={50} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '18px',
          }}>
            <span style={{ fontSize: '0.95rem' }}>🔥</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F9A800' }}>
              Dryer Fire Safety
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: isMobile ? 'clamp(1.9rem, 8vw, 2.4rem)' : 'clamp(2.4rem, 4vw, 3.4rem)',
            color: '#1a1a1a', margin: '0 0 14px', lineHeight: 1.08,
          }}>
            Is Your Dryer a Fire<br />Waiting to Happen?
          </h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 500,
            color: 'rgba(0,0,0,0.72)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Every load of laundry leaves lint behind. Year after year it packs into your
            dryer vent — until airflow is choked and the heat has nowhere to go. That's how
            fires start. Cleaning it is fast, affordable, and could save your home.
          </p>
        </div>

        {/* Danger stats banner */}
        <div style={{
          background: '#111', borderRadius: '20px',
          padding: isMobile ? '26px 20px' : '34px 40px',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '24px',
          marginBottom: isMobile ? '40px' : '56px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
          border: '1.5px solid rgba(249,168,0,0.3)',
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, textAlign: 'center',
              borderLeft: !isMobile && i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              borderTop: isMobile && i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              paddingTop: isMobile && i > 0 ? '18px' : 0,
            }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: isMobile ? '2.6rem' : '3.2rem', lineHeight: 1,
                color: '#F9A800', letterSpacing: '-0.02em',
              }}>{s.num}</div>
              <div style={{
                fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)',
                marginTop: '8px', lineHeight: 1.5, maxWidth: '240px', marginLeft: 'auto', marginRight: 'auto',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div style={{ marginBottom: isMobile ? '40px' : '56px' }}>
          <h3 style={{
            textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: isMobile ? '1.4rem' : '1.9rem', color: '#1a1a1a', margin: '0 0 6px',
          }}>
            See the Difference
          </h3>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)', margin: '0 0 24px' }}>
            Real results from homes just like yours.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '10px' : '20px' }}>
            {[
              { img: '/gallery-before-1.jpg', tag: 'BEFORE', color: '#1a1a1a', accent: '#F9A800' },
              { img: '/gallery-after-1.jpg', tag: 'AFTER', color: '#1e6b2e', accent: '#fff' },
            ].map(item => (
              <div key={item.tag} style={{
                position: 'relative', borderRadius: '16px', overflow: 'hidden',
                aspectRatio: '3/4', boxShadow: '0 10px 30px rgba(0,0,0,0.22)',
                border: '2px solid rgba(255,255,255,0.5)',
              }}>
                <img src={item.img} alt={`Dryer vent ${item.tag}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: item.color, color: item.accent,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: isMobile ? '0.7rem' : '0.82rem', letterSpacing: '0.14em',
                  padding: '5px 14px', borderRadius: '999px',
                }}>{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warning signs */}
        <div style={{ marginBottom: isMobile ? '40px' : '56px' }}>
          <h3 style={{
            textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: isMobile ? '1.4rem' : '1.9rem', color: '#1a1a1a', margin: '0 0 6px',
          }}>
            6 Warning Signs to Watch For
          </h3>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)', margin: '0 0 24px' }}>
            Notice any of these? It's time to call us.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '12px' : '18px' }}>
            {WARNING_SIGNS.map(w => (
              <div key={w.title} style={{
                background: 'rgba(255,255,255,0.22)',
                border: '1px solid rgba(255,255,255,0.45)',
                borderRadius: '16px',
                padding: isMobile ? '16px 18px' : '22px 20px',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
              }}>
                <div style={{
                  flexShrink: 0, width: '42px', height: '42px', borderRadius: '12px',
                  background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {w.icon({})}
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.98rem', color: '#1a1a1a', margin: '0 0 4px' }}>{w.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.66)', lineHeight: 1.55, margin: 0 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: isMobile ? '38px' : '52px' }}>
          <h3 style={{
            textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: isMobile ? '1.4rem' : '1.9rem', color: '#1a1a1a', margin: '0 0 24px',
          }}>
            Why It's Worth It
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '10px' : '14px' }}>
            {BENEFITS.map(b => (
              <div key={b.title} style={{
                background: 'rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '14px', padding: isMobile ? '14px 16px' : '18px 20px',
                display: 'flex', alignItems: 'flex-start', gap: '12px',
              }}>
                <div style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', background: '#F9A800', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #1a1a1a' }}>
                  <BenefitCheck />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#1a1a1a', margin: '0 0 3px' }}>{b.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.66)', lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: '#111', borderRadius: '20px',
          padding: isMobile ? '28px 22px' : '36px 44px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          border: '1.5px solid rgba(249,168,0,0.35)',
        }}>
          <h3 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: isMobile ? '1.35rem' : '1.9rem', color: '#fff', margin: '0 0 10px', lineHeight: 1.2,
          }}>
            Don't Wait for a Warning You Can't Undo
          </h3>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: 'rgba(255,255,255,0.72)', margin: '0 0 22px', lineHeight: 1.6, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Professional dryer vent cleaning takes under an hour and starts at just <span style={{ color: '#F9A800', fontWeight: 800 }}>$69</span>. Book today and breathe easy.
          </p>
          <a href="tel:+14252005790" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            background: '#F9A800', color: '#111',
            borderRadius: '12px', padding: isMobile ? '15px 26px' : '17px 40px',
            fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: isMobile ? '1rem' : '1.15rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            textDecoration: 'none', boxShadow: '0 8px 30px rgba(249,168,0,0.45)',
          }}>
            📞 Clean My Dryer Vent — $69
          </a>
        </div>

      </div>
    </section>
  );
}

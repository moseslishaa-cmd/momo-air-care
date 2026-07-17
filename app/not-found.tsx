import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '60px 24px', background: '#fff',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/momo-think-gold.png"
        alt="MOMO the giraffe looking puzzled"
        width={180}
        height={270}
        style={{ width: '180px', height: 'auto', marginBottom: '20px', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))' }}
      />
      <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '2.4rem', color: '#0e0e0e', margin: '0 0 8px' }}>
        Page Not Found
      </h1>
      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#666', lineHeight: 1.7, maxWidth: '420px', margin: '0 0 24px' }}>
        Even MOMO can&apos;t find this one. The page may have moved — but clean air is always one click away.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          background: '#FFD400', color: '#111', textDecoration: 'none',
          padding: '15px 28px', borderRadius: '11px', boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
        }}>Back to Home</Link>
        <a href="tel:+14252005790" style={{
          fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#111', textDecoration: 'none', padding: '15px 24px', borderRadius: '11px',
          border: '1.5px solid #1a1a1a',
        }}>📞 (425) 200-5790</a>
      </div>
    </div>
  );
}

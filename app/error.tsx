'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{
      minHeight: '70vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '60px 24px', background: '#fff',
    }}>
      <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: '2.2rem', color: '#0e0e0e', margin: '0 0 8px' }}>
        Something went wrong
      </h1>
      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#666', lineHeight: 1.7, maxWidth: '420px', margin: '0 0 24px' }}>
        Sorry about that. Try again — or just call us and we&apos;ll take care of you directly.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={reset} style={{
          fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          background: '#FFD400', color: '#111', border: 'none', cursor: 'pointer',
          padding: '15px 28px', borderRadius: '11px', boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
        }}>Try Again</button>
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

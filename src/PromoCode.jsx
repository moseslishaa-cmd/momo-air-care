
export function PromoCode({ code = 'MOMO20' }) {
  return (
    <div style={{
      width: '160px',
      background: '#111',
      borderRadius: '14px',
      padding: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      border: '1px solid rgba(255,255,255,0.08)',
      fontFamily: "'Inter', sans-serif",
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Content above dots */}
      <div style={{ position: 'relative', zIndex: 1 }}>

      {/* Scissors icon + dashed top border */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2">
          <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
          <line x1="20" y1="4" x2="8.12" y2="15.88"/>
          <line x1="14.47" y1="14.48" x2="20" y2="20"/>
          <line x1="8.12" y1="8.12" x2="12" y2="12"/>
        </svg>
        <div style={{ flex: 1, borderTop: '1.5px dashed rgba(249,168,0,0.4)' }} />
      </div>

      {/* Discount text */}
      <p style={{
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        margin: '0 0 4px',
      }}>
        20% off your first service
      </p>
      <p style={{
        fontSize: '0.58rem', fontWeight: 400, color: 'rgba(255,255,255,0.35)',
        margin: '0 0 12px', lineHeight: 1.4,
      }}>
        Use this code at checkout
      </p>

      {/* Code box */}
      <div style={{
        background: 'rgba(249,168,0,0.12)',
        border: '1.5px dashed rgba(249,168,0,0.5)',
        borderRadius: '8px',
        padding: '8px 0',
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: '1.1rem',
        letterSpacing: '0.2em',
        color: '#F9A800',
      }}>
        {code}
      </div>
      </div>
    </div>
  );
}

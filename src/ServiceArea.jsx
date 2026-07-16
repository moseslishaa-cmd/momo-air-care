import { useEffect, useRef } from 'react';
import { SparklesCore } from './SparklesCore';

const CITIES = [
  { name: 'Arlington',  lat: 48.166, lng: -122.116, dir: 'right', major: false },
  { name: 'Marysville', lat: 48.051, lng: -122.177, dir: 'right', major: false },
  { name: 'Everett',    lat: 47.979, lng: -122.202, dir: 'left',  major: false },
  { name: 'Monroe',     lat: 47.855, lng: -121.972, dir: 'right', major: false },
  { name: 'Duvall',     lat: 47.742, lng: -121.985, dir: 'right', major: false },
  { name: 'Seattle',    lat: 47.606, lng: -122.332, dir: 'left',  major: true  },
  { name: 'North Bend', lat: 47.492, lng: -121.787, dir: 'bottom',major: false },
  { name: 'Tacoma',     lat: 47.252, lng: -122.444, dir: 'left',  major: false },
  { name: 'Lacey',      lat: 47.034, lng: -122.822, dir: 'right', major: false },
  { name: 'Olympia',    lat: 47.037, lng: -122.900, dir: 'left',  major: false },
];

const I5_ROUTE = [
  [48.20, -122.10],
  [48.17, -122.12],
  [48.05, -122.18],
  [47.98, -122.20],
  [47.91, -122.24],
  [47.82, -122.31],
  [47.72, -122.34],
  [47.61, -122.33],
  [47.52, -122.30],
  [47.47, -122.30],
  [47.32, -122.31],
  [47.25, -122.44],
  [47.17, -122.51],
  [47.10, -122.62],
  [47.04, -122.82],
  [47.03, -122.90],
];

// Service area boundary — wraps around every city marker with padding
const SERVICE_AREA = [
  [48.36, -122.22],   // top, N of Arlington
  [48.22, -121.82],   // NE
  [47.62, -121.55],   // E, right of North Bend
  [47.38, -121.62],   // SE, below North Bend
  [46.92, -122.55],   // S, below Tacoma
  [46.88, -123.08],   // SW, below/west of Olympia
  [47.42, -122.86],   // W, west of Lacey/Olympia
  [48.02, -122.42],   // NW, west of Everett
  [48.36, -122.22],   // close
];

const CITY_CHIPS = [
  'Olympia','Lacey','Tumwater','DuPont','Tacoma','Puyallup',
  'Federal Way','Auburn','Kent','Renton','Seattle','Bellevue',
  'Kirkland','Redmond','Bothell','Lynnwood','Everett','Marysville','Arlington',
  'Monroe','Duvall','Snoqualmie','North Bend',
];

const HIGHLIGHT_ICONS = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>
    </svg>
  ),
  bolt: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  map: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F9A800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
};

const HIGHLIGHTS = [
  { icon: 'home',  label: 'Residential & Commercial' },
  { icon: 'bolt',  label: 'Same-Day Appointments Available' },
  { icon: 'map',   label: 'Full I-5 Corridor Coverage' },
  { icon: 'phone', label: 'Free Phone Consultations' },
];

function LeafletMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const L = window.L;
    if (!L || !containerRef.current || mapRef.current) return;

    // On touch devices, make the map static so finger gestures scroll the page
    // instead of getting "stuck" panning the map.
    const isTouch = window.matchMedia('(max-width: 768px)').matches
      || ('ontouchstart' in window && navigator.maxTouchPoints > 0);

    const map = L.map(containerRef.current, {
      center: [47.62, -122.45],
      zoom: 8,
      scrollWheelZoom: false,
      zoomControl: !isTouch,
      dragging: !isTouch,
      touchZoom: !isTouch,
      doubleClickZoom: !isTouch,
      boxZoom: !isTouch,
      keyboard: !isTouch,
      tap: !isTouch,
    });

    // OpenStreetMap standard — vibrant blue water, green terrain
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Service area polygon — vibrant gold fill
    L.polygon(SERVICE_AREA, {
      color: '#F9A800',
      weight: 2.5,
      opacity: 0.85,
      fillColor: '#F9A800',
      fillOpacity: 0.18,
      dashArray: '7, 5',
    }).addTo(map);

    // I-5 outer glow
    L.polyline(I5_ROUTE, {
      color: '#F9A800',
      weight: 16,
      opacity: 0.25,
    }).addTo(map);

    // I-5 main route
    L.polyline(I5_ROUTE, {
      color: '#e06b00',
      weight: 5,
      opacity: 1,
    }).addTo(map);

    // I-5 center dash
    L.polyline(I5_ROUTE, {
      color: '#fff',
      weight: 2,
      opacity: 0.7,
      dashArray: '5, 12',
    }).addTo(map);

    const makeIcon = (major) => {
      const size = major ? 22 : 16;
      const half = size / 2;
      return L.divIcon({
        className: '',
        html: `<div style="position:relative;width:${size}px;height:${size}px">
          ${major ? `<div style="position:absolute;inset:-5px;border-radius:50%;border:2.5px solid rgba(249,168,0,0.7);animation:momo-ping 2s ease-out infinite"></div>` : ''}
          <div style="width:${size}px;height:${size}px;background:radial-gradient(circle at 38% 35%,#FFE566,#F9A800 60%,#e06b00);border:${major ? 3.5 : 2.5}px solid #fff;border-radius:50%;box-shadow:0 0 0 ${major ? 3 : 2}px rgba(249,168,0,0.6),0 3px 12px rgba(0,0,0,0.35)"></div>
        </div>`,
        iconSize: [size, size],
        iconAnchor: [half, half],
      });
    };

    CITIES.forEach(city => {
      const offset = city.dir === 'left' ? [-10, 0] : city.dir === 'top' ? [0, -10] : city.dir === 'bottom' ? [0, 10] : [10, 0];
      L.marker([city.lat, city.lng], { icon: makeIcon(city.major) })
        .bindTooltip(city.name, {
          permanent: true,
          direction: city.dir,
          offset,
          className: 'momo-tip',
        })
        .addTo(map);
    });


    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '460px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 48px rgba(0,0,0,0.22)',
        touchAction: 'pan-y',
      }}
    />
  );
}

export function ServiceArea() {
  return (
    <section style={{
      background: '#F9A800',
      position: 'relative',
      padding: '80px 24px 100px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={50} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '16px',
          }}>
            <span style={{ fontSize: '0.9rem' }}>📍</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F9A800' }}>
              Where We Work
            </span>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', margin: '0 0 14px', lineHeight: 1.1 }}>
            Our Service Area
          </h2>
          <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', margin: '0 0 12px' }}>
            Proudly Serving Greater Puget Sound, Washington
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8 }}>
            From Olympia in the south to Arlington in the north — we provide professional air duct cleaning, dryer vent cleaning, duct insulation and HVAC services throughout the region.
          </p>
        </div>

        {/* Map */}
        <div style={{ marginBottom: '48px', borderRadius: '20px', overflow: 'hidden' }}>
          <LeafletMap />
        </div>

        {/* City chips + highlights row */}
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>

          <div style={{ flex: 1, minWidth: '280px', maxWidth: '560px' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff', margin: '0 0 16px' }}>
              Cities We Serve
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CITY_CHIPS.map(city => (
                <div key={city} style={{
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: '999px',
                  padding: '6px 15px',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  color: '#fff',
                }}>
                  {city}
                </div>
              ))}
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px dashed rgba(255,255,255,0.3)',
                borderRadius: '999px',
                padding: '6px 15px',
                fontStyle: 'italic',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.6)',
              }}>
                & surrounding communities
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: '280px', maxWidth: '440px' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff', margin: '0 0 16px' }}>
              What We Offer
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {HIGHLIGHTS.map(h => (
                <div key={h.label} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: 'rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                }}>
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{HIGHLIGHT_ICONS[h.icon]}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{h.label}</span>
                </div>
              ))}
              <div style={{
                marginTop: '6px',
                background: 'rgba(0,0,0,0.14)',
                borderRadius: '12px',
                padding: '14px 18px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <p style={{ margin: '0 0 8px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                  Not sure if we cover your area? Call us — we'll let you know right away.
                </p>
                <a href="tel:+14252005790" style={{
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#F9A800', textDecoration: 'none',
                }}>
                  (425) 200-5790 →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

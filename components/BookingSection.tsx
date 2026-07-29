'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE, YELLOW } from '@/lib/site';
import { submitLead } from '@/lib/submitLead';

const SERVICES = [
  { label: 'Air Duct Cleaning', img: '/service-airduct.jpg' },
  { label: 'Dryer Vent Cleaning', img: '/service-dryer.jpg' },
  { label: 'Chimney Cleaning', img: '/chimney-service.jpg' },
  { label: 'Furnace & Blower Cleaning', img: '/service-furnace.jpg' },
  { label: 'Crawl Space & Insulation', img: '/service-crawl.jpg' },
  { label: 'HVAC Sanitizing', img: '/family-home.jpg' },
];

const TIME_WINDOWS = ['Morning (8–12)', 'Afternoon (12–4)', 'Evening (4–8)', 'Flexible / ASAP'];

const PROPERTY_TYPES = ['House', 'Townhome', 'Condo / Apartment', 'Commercial'];

const STEPS = ['Service', 'Day & Time', 'Your Details'];

type Day = { human: string; top: string; sub: string };

// Next 14 bookable days, starting TOMORROW (same-day booking is not offered —
// owner request 2026-07-28), labeled for the picker.
function buildDays(): Day[] {
  const days: Day[] = [];
  for (let i = 1; i <= 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const top =
      i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const sub = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const human = d.toLocaleDateString('en-US', {
      weekday: 'long', month: 'short', day: 'numeric', year: 'numeric',
    });
    days.push({ human, top, sub });
  }
  return days;
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#333333',
  marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1.5px solid #dcdcd7',
  background: '#ffffff',
  color: '#111111',
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '0.9rem',
  fontWeight: 400,
  outline: 'none',
  boxSizing: 'border-box',
};

function StepBadge({ n, label, state, onClick }: { n: number; label: string; state: 'done' | 'active' | 'todo'; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'transparent', border: 'none', padding: 0,
        cursor: onClick ? 'pointer' : 'default',
        opacity: state === 'todo' ? 0.45 : 1,
      }}
    >
      <span style={{
        width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: state === 'todo' ? '#eeeee9' : YELLOW,
        color: '#111',
        fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.78rem',
      }}>
        {state === 'done' ? '✓' : n}
      </span>
      <span style={{
        fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.72rem',
        letterSpacing: '0.12em', textTransform: 'uppercase', color: '#222', whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </button>
  );
}

// Homepage booking wizard: pick a service → pick a day + time window → details.
// Same field names + delivery path as the contact-page QuoteForm.
export function BookingSection() {
  const isMobile = useIsMobile(1024);
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<string[]>([]);
  const [dayIdx, setDayIdx] = useState(-1);
  const [timeWindow, setTimeWindow] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentName, setSentName] = useState('');

  const days = useMemo(buildDays, []);

  const toggleService = (label: string) => {
    setServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries());
    payload.service = services.join(' + ');
    payload.preferred_date = dayIdx >= 0 ? days[dayIdx].human : '';
    payload.time_window = timeWindow;
    if (propertyType) payload.property_type = propertyType;
    payload.page = 'home-booking';
    setStatus('sending');
    setErrorMsg('');
    const res = await submitLead(payload);
    if (res.ok) {
      setSentName(String(payload.name || '').split(' ')[0]);
      setStatus('success');
    } else {
      setErrorMsg(res.error || `Something went wrong. Please call us at ${SITE.phoneDisplay}.`);
      setStatus('error');
    }
  };

  const summaryChip = (text: string, goTo: number) => (
    <button
      type="button"
      onClick={() => setStep(goTo)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: '#FAFAF7', border: '1px solid #e7e7e0', borderRadius: '999px',
        padding: '7px 14px', cursor: 'pointer',
        fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#333',
      }}
    >
      {text}
      <span style={{ color: '#8f7300', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Edit</span>
    </button>
  );

  const backBtn = (goTo: number) => (
    <button
      type="button"
      onClick={() => setStep(goTo)}
      style={{
        fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.8rem',
        letterSpacing: '0.09em', textTransform: 'uppercase',
        background: 'transparent', color: '#555', border: '1.5px solid #dcdcd7',
        padding: '13px 22px', borderRadius: '10px', cursor: 'pointer',
      }}
    >
      ← Back
    </button>
  );

  return (
    <section id="quote" style={{ background: '#F6F6F3', padding: isMobile ? '56px 20px 72px' : '92px 24px 110px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '44px' }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.9rem' : '2.7rem', color: '#0e0e0e', margin: 0, lineHeight: 1.1 }}>
              Schedule Your Service<span style={{ color: YELLOW }}>.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div style={{
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-end', marginLeft: isMobile ? 0 : '-110px',
          }}>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/momo-giraffe.png"
              alt="MOMO Air Care giraffe mascot giving a thumbs up"
              width={200}
              height={300}
              loading="lazy"
              style={{
                width: isMobile ? '140px' : '200px',
                height: 'auto', maxWidth: '45%',
                order: isMobile ? 2 : 0, flexShrink: 0,
                objectFit: 'contain', objectPosition: 'bottom',
                marginBottom: isMobile ? '-2px' : '-6px',
                marginTop: isMobile ? '10px' : 0,
                filter: isMobile ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' : undefined,
              }}
            />

            <div style={{
              flex: 1, width: isMobile ? '100%' : 'auto', order: isMobile ? 1 : 0,
              background: '#fff', border: '1px solid #ececea', borderRadius: '22px',
              boxShadow: '0 10px 34px rgba(0,0,0,0.07)',
              padding: isMobile ? '22px 18px 26px' : '30px 34px 34px',
              overflow: 'hidden',
            }}>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '28px 8px' }} role="status">
                  <div aria-hidden="true" style={{
                    width: '58px', height: '58px', margin: '0 auto 14px', borderRadius: '50%',
                    background: YELLOW, color: '#111',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.9rem', fontWeight: 900,
                    boxShadow: '0 8px 22px rgba(255,212,0,0.45)',
                  }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#111', margin: '0 0 10px', letterSpacing: '0.04em' }}>
                    Booking Request Sent{sentName ? `, ${sentName}` : ''}!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0, maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {services.join(' + ')} · {dayIdx >= 0 ? days[dayIdx].human : ''} · {timeWindow}.<br />
                    We&apos;ll call you shortly to confirm your visit. Need it now? Call{' '}
                    <a href={SITE.phoneHref} style={{ color: '#8f7300', fontWeight: 800 }}>{SITE.phoneDisplay}</a>.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '8px', marginBottom: '6px', flexWrap: 'wrap',
                  }}>
                    {STEPS.map((label, i) => (
                      <StepBadge
                        key={label}
                        n={i + 1}
                        label={isMobile && i !== step ? '' : label}
                        state={i < step ? 'done' : i === step ? 'active' : 'todo'}
                        onClick={i < step ? () => setStep(i) : undefined}
                      />
                    ))}
                  </div>
                  <div style={{ height: '4px', background: '#eeeee9', borderRadius: '999px', marginBottom: '22px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: '999px', background: YELLOW,
                      width: `${((step + 1) / 3) * 100}%`, transition: 'width 0.35s ease',
                    }} />
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 36 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -36 }}
                      transition={{ duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
                    >

                      {step === 0 && (
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#111', margin: '0 0 4px' }}>
                            What do you need cleaned?
                          </h3>
                          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.82rem', color: '#888', margin: '0 0 14px' }}>
                            Pick as many as you need — one visit, one team.
                          </p>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                            gap: isMobile ? '12px' : '16px',
                          }}>
                            {SERVICES.map((s) => {
                              const selected = services.includes(s.label);
                              return (
                                <button
                                  key={s.label}
                                  type="button"
                                  onClick={() => toggleService(s.label)}
                                  aria-pressed={selected}
                                  style={{
                                    position: 'relative', padding: 0, textAlign: 'left', cursor: 'pointer',
                                    background: '#fff', border: 'none', borderRadius: '14px', overflow: 'hidden',
                                    boxShadow: selected
                                      ? `0 0 0 3px ${YELLOW}, 0 10px 26px rgba(0,0,0,0.12)`
                                      : '0 0 0 1px #ececea, 0 4px 14px rgba(0,0,0,0.05)',
                                    transition: 'box-shadow 0.18s, transform 0.18s',
                                  }}
                                  onMouseEnter={isMobile ? undefined : (e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                  onMouseLeave={isMobile ? undefined : (e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={s.img}
                                    alt=""
                                    loading="lazy"
                                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                                  />
                                  {selected && (
                                    <span style={{
                                      position: 'absolute', top: '8px', right: '8px',
                                      width: '24px', height: '24px', borderRadius: '50%',
                                      background: YELLOW, color: '#111',
                                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                      fontWeight: 900, fontSize: '0.8rem',
                                    }} aria-hidden="true">✓</span>
                                  )}
                                  <span style={{
                                    display: 'block', padding: isMobile ? '10px 12px 12px' : '12px 14px 14px',
                                    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800,
                                    fontSize: isMobile ? '0.8rem' : '0.88rem', color: '#111', lineHeight: 1.3,
                                  }}>
                                    {s.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleService('Not Sure — Need Advice')}
                            aria-pressed={services.includes('Not Sure — Need Advice')}
                            style={{
                              marginTop: '14px', width: '100%', cursor: 'pointer',
                              background: services.includes('Not Sure — Need Advice') ? '#FFF7CC' : '#FAFAF7',
                              border: services.includes('Not Sure — Need Advice') ? `1.5px solid ${YELLOW}` : '1.5px dashed #d8d8d0',
                              borderRadius: '12px',
                              padding: '13px 16px',
                              fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.85rem',
                              color: services.includes('Not Sure — Need Advice') ? '#111' : '#555',
                            }}
                          >
                            Not sure what you need? Get free advice — we&apos;ll figure it out together.
                          </button>
                          <button
                            type="button"
                            disabled={services.length === 0}
                            onClick={() => setStep(1)}
                            className="btn-ripple"
                            style={{
                              marginTop: '16px', width: '100%',
                              fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                              letterSpacing: '0.1em', textTransform: 'uppercase',
                              background: services.length > 0 ? YELLOW : '#eeeee9',
                              color: services.length > 0 ? '#111' : '#999',
                              border: 'none', borderRadius: '10px', padding: '15px 20px',
                              cursor: services.length > 0 ? 'pointer' : 'not-allowed',
                              boxShadow: services.length > 0 ? '0 8px 22px rgba(255,212,0,0.45)' : 'none',
                              transition: 'background 0.2s, box-shadow 0.2s',
                            }}
                          >
                            {services.length > 1 ? `Continue with ${services.length} services →` : 'Continue →'}
                          </button>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                            {summaryChip(services.join(' + '), 0)}
                          </div>
                          <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#111', margin: '0 0 14px' }}>
                            Pick a day
                          </h3>
                          <div style={{
                            display: isMobile ? 'flex' : 'grid',
                            gridTemplateColumns: isMobile ? undefined : 'repeat(7, 1fr)',
                            gap: '8px',
                            overflowX: isMobile ? 'auto' : undefined,
                            paddingBottom: isMobile ? '6px' : 0,
                            WebkitOverflowScrolling: 'touch',
                          }}>
                            {days.map((d, i) => {
                              const selected = dayIdx === i;
                              return (
                                <button
                                  key={d.human}
                                  type="button"
                                  onClick={() => setDayIdx(i)}
                                  aria-pressed={selected}
                                  style={{
                                    flexShrink: 0, minWidth: isMobile ? '86px' : 0,
                                    padding: '10px 6px', borderRadius: '11px', cursor: 'pointer',
                                    background: selected ? YELLOW : '#fff',
                                    border: selected ? '1.5px solid #e6bf00' : '1.5px solid #e2e2dc',
                                    boxShadow: selected ? '0 6px 16px rgba(255,212,0,0.45)' : 'none',
                                    textAlign: 'center',
                                  }}
                                >
                                  <span style={{ display: 'block', fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#111' }}>
                                    {d.top}
                                  </span>
                                  <span style={{ display: 'block', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, fontSize: '0.78rem', color: selected ? '#3d3300' : '#777', marginTop: '2px' }}>
                                    {d.sub}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#111', margin: '20px 0 14px' }}>
                            Pick a time window
                          </h3>
                          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '10px' }}>
                            {TIME_WINDOWS.map((t) => {
                              const selected = timeWindow === t;
                              return (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setTimeWindow(t)}
                                  aria-pressed={selected}
                                  style={{
                                    padding: '13px 10px', borderRadius: '11px', cursor: 'pointer',
                                    background: selected ? YELLOW : '#fff',
                                    border: selected ? '1.5px solid #e6bf00' : '1.5px solid #e2e2dc',
                                    boxShadow: selected ? '0 6px 16px rgba(255,212,0,0.45)' : 'none',
                                    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700,
                                    fontSize: '0.82rem', color: '#111',
                                  }}
                                >
                                  {t}
                                </button>
                              );
                            })}
                          </div>

                          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: '#888', margin: '14px 0 0' }}>
                            We&apos;ll confirm your exact arrival time by phone.
                          </p>

                          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                            {backBtn(0)}
                            <button
                              type="button"
                              disabled={dayIdx < 0 || !timeWindow}
                              onClick={() => setStep(2)}
                              className="btn-ripple"
                              style={{
                                flex: 1,
                                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem',
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                background: dayIdx >= 0 && timeWindow ? YELLOW : '#eeeee9',
                                color: dayIdx >= 0 && timeWindow ? '#111' : '#999',
                                border: 'none', borderRadius: '10px', padding: '15px 20px',
                                cursor: dayIdx >= 0 && timeWindow ? 'pointer' : 'not-allowed',
                                boxShadow: dayIdx >= 0 && timeWindow ? '0 8px 22px rgba(255,212,0,0.45)' : 'none',
                                transition: 'background 0.2s, box-shadow 0.2s',
                              }}
                            >
                              Continue →
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <form onSubmit={handleSubmit}>
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                            {summaryChip(services.join(' + '), 0)}
                            {dayIdx >= 0 && summaryChip(`${days[dayIdx].top === 'Today' || days[dayIdx].top === 'Tomorrow' ? days[dayIdx].top : days[dayIdx].human.split(',')[0]} · ${days[dayIdx].sub}`, 1)}
                            {timeWindow && summaryChip(timeWindow, 1)}
                          </div>

                          <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#111', margin: '0 0 14px' }}>
                            Where do we send the team?
                          </h3>

                          {/* Honeypot — hidden from real users */}
                          <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                            <label>
                              Company
                              <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                            </label>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
                            <div>
                              <label style={labelStyle} htmlFor="bk-name">Full Name *</label>
                              <input id="bk-name" name="name" type="text" required autoComplete="name" placeholder="John Smith" style={inputStyle} />
                            </div>
                            <div>
                              <label style={labelStyle} htmlFor="bk-phone">Phone *</label>
                              <input id="bk-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(425) 000-0000" style={inputStyle} />
                            </div>
                            <div>
                              <label style={labelStyle} htmlFor="bk-email">Email</label>
                              <input id="bk-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" style={inputStyle} />
                            </div>
                            <div>
                              <label style={labelStyle} htmlFor="bk-address">Service Address</label>
                              <input id="bk-address" name="address" type="text" autoComplete="street-address" placeholder="Street address" style={inputStyle} />
                            </div>
                            <div>
                              <label style={labelStyle} htmlFor="bk-city">City</label>
                              <input id="bk-city" name="city" type="text" autoComplete="address-level2" placeholder="Seattle" style={inputStyle} />
                            </div>
                            <div>
                              <label style={labelStyle} htmlFor="bk-zip">ZIP</label>
                              <input id="bk-zip" name="zip" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="98101" style={inputStyle} />
                            </div>
                          </div>

                          <div style={{ margin: '16px 0 0' }}>
                            <span style={labelStyle}>Property Type</span>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {PROPERTY_TYPES.map((p) => {
                                const selected = propertyType === p;
                                return (
                                  <button
                                    key={p}
                                    type="button"
                                    onClick={() => setPropertyType(selected ? '' : p)}
                                    aria-pressed={selected}
                                    style={{
                                      padding: '9px 16px', borderRadius: '999px', cursor: 'pointer',
                                      background: selected ? '#111' : '#fff',
                                      color: selected ? YELLOW : '#444',
                                      border: '1.5px solid ' + (selected ? '#111' : '#e2e2dc'),
                                      fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.8rem',
                                    }}
                                  >
                                    {p}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div style={{ margin: '16px 0 0' }}>
                            <label style={labelStyle} htmlFor="bk-message">Anything we should know?</label>
                            <textarea
                              id="bk-message"
                              name="message"
                              placeholder="Gate codes, pets, problem details…"
                              rows={2}
                              style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
                            />
                          </div>

                          <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: '#666', lineHeight: 1.5, cursor: 'pointer', margin: '16px 0 0' }}>
                            <input type="checkbox" name="consent" required style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: YELLOW }} />
                            <span>I agree to be contacted by MOMO Air Care by phone, text, or email about my request. *</span>
                          </label>

                          {status === 'error' && (
                            <p role="alert" style={{ margin: '14px 0 0', fontSize: '0.85rem', fontWeight: 700, color: '#b3261e', textAlign: 'center' }}>
                              {errorMsg}
                            </p>
                          )}

                          <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
                            {backBtn(1)}
                            <button
                              type="submit"
                              disabled={status === 'sending'}
                              className="btn-ripple"
                              style={{
                                flex: 1,
                                fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '1.02rem',
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                background: YELLOW, color: '#111', border: 'none', borderRadius: '10px',
                                padding: '16px 20px',
                                cursor: status === 'sending' ? 'wait' : 'pointer',
                                opacity: status === 'sending' ? 0.7 : 1,
                                boxShadow: '0 8px 26px rgba(255,212,0,0.45)',
                              }}
                            >
                              {status === 'sending' ? 'Sending…' : 'Book My Visit'}
                            </button>
                          </div>
                        </form>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

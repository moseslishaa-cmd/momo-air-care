'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { QuoteForm } from './Contact';
import { Reveal } from './Reveal';
import { useIsMobile } from './useIsMobile';
import { SITE } from '@/lib/site';
import type { GuideContent } from '@/lib/guides';
import { SERVICES_CONTENT } from '@/lib/services';

const YELLOW = '#FFD400';

function GuideFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ background: '#fff', border: '1px solid #e7e7e4', borderRadius: '16px', boxShadow: '0 4px 18px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
      {faqs.map((f, i) => (
        <div key={f.q} style={{ borderTop: i > 0 ? '1px solid #f0f0ed' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '14px', textAlign: 'left',
            }}
          >
            <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '0.93rem', color: '#111', lineHeight: 1.4 }}>{f.q}</span>
            <span aria-hidden="true" style={{
              flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(0,0,0,0.07)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', color: '#111', fontWeight: 700,
              transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s',
            }}>+</span>
          </button>
          {open === i && (
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0, padding: '0 20px 18px' }}>{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function GuidePage({ guide }: { guide: GuideContent }) {
  const isMobile = useIsMobile(1024);
  const related = SERVICES_CONTENT.filter((s) => guide.related.includes(s.slug));

  return (
    <div style={{ background: '#fff' }}>
      <NavBar />
      <main>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: '860px', margin: '0 auto', padding: '18px 20px 0' }}>
          <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.76rem', color: '#999', flexWrap: 'wrap' }}>
            <li><Link href="/" style={{ color: '#999', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/guides" style={{ color: '#999', textDecoration: 'none' }}>Guides</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: '#333', fontWeight: 600 }} aria-current="page">{guide.title}</li>
          </ol>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '22px 20px 10px' : '34px 24px 16px' }}>
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#111', borderRadius: '999px', padding: '7px 18px', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: YELLOW }}>
                {guide.category}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? 'clamp(1.8rem, 7.5vw, 2.3rem)' : '2.7rem', color: '#0e0e0e', margin: '0 0 16px', lineHeight: 1.12 }}>
              {guide.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: isMobile ? '0.96rem' : '1.02rem', color: '#444', lineHeight: 1.8, margin: '0 0 10px', fontWeight: 500 }}>
              {guide.intro}
            </p>
            {guide.verifiedNote && (
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem', color: '#6d5c00',
                background: '#FFFBE6', border: '1px solid #f0e6b3', borderRadius: '10px',
                padding: '10px 14px', lineHeight: 1.6, margin: '14px 0 0',
              }}>
                {guide.verifiedNote}
              </p>
            )}
          </Reveal>

          {guide.sections.map((sec) => (
            <Reveal key={sec.h2}>
              <section style={{ marginTop: isMobile ? '30px' : '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.35rem' : '1.6rem', color: '#111', margin: '0 0 12px', lineHeight: 1.2 }}>
                  {sec.h2}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.94rem', color: '#4a4a47', lineHeight: 1.85, margin: '0 0 12px' }}>{p}</p>
                ))}
                {sec.bullets && (
                  <ul style={{ margin: '4px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {sec.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span aria-hidden="true" style={{
                          width: '20px', height: '20px', borderRadius: '50%', background: YELLOW, flexShrink: 0, marginTop: '2px',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.92rem', color: '#4a4a47', lineHeight: 1.7 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          {/* FAQs */}
          <Reveal>
            <section style={{ marginTop: isMobile ? '34px' : '46px' }}>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.35rem' : '1.6rem', color: '#111', margin: '0 0 14px' }}>
                Common Questions
              </h2>
              <GuideFaq faqs={guide.faqs} />
            </section>
          </Reveal>

          {/* Related services */}
          {related.length > 0 && (
            <Reveal>
              <section style={{ marginTop: isMobile ? '34px' : '46px' }}>
                <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.35rem' : '1.6rem', color: '#111', margin: '0 0 14px' }}>
                  Related Services
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${Math.min(related.length, 3)}, 1fr)`, gap: '12px' }}>
                  {related.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`} style={{
                      display: 'block', background: '#111', borderRadius: '14px',
                      padding: '16px 18px', textDecoration: 'none',
                      border: `1.5px solid ${YELLOW}40`,
                    }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em', color: YELLOW, textTransform: 'uppercase' }}>{s.nav} →</span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px', lineHeight: 1.5 }}>{s.metaTitle}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>
          )}
        </article>

        {/* Quote form, same closing section as service pages */}
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #eeeeea', marginTop: isMobile ? '36px' : '52px', padding: isMobile ? '40px 20px 46px' : '56px 24px 64px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-fraunces), serif', fontWeight: 900, fontSize: isMobile ? '1.5rem' : '2rem', color: '#111', margin: '0 0 6px' }}>
                Talk to a Local Specialist
              </h2>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', color: '#777', margin: '0 0 22px' }}>
                Honest answers and free quotes, call <a href={SITE.phoneHref} style={{ color: '#8f7300', fontWeight: 800, textDecoration: 'none' }}>{SITE.phoneDisplay}</a> or send the form.
              </p>
              <QuoteForm page={`guide-${guide.slug}`} />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
    </div>
  );
}

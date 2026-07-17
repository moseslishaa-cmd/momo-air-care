'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';
import { useIsMobile } from './useIsMobile';

const faqs = [
  {
    q: 'How often should I clean my air ducts?',
    a: 'We recommend cleaning your air ducts once every 1–2 years. If you have pets, allergies, young children, or recent renovations, annual cleaning is the best way to keep your air fresh and your family healthy.',
  },
  {
    q: 'How long does the cleaning process take?',
    a: 'A full duct cleaning typically takes 2–4 hours depending on the size of your home and the number of vents. We work efficiently and won\'t rush — every duct gets the attention it needs.',
  },
  {
    q: 'Will my house be messy after the service?',
    a: 'Not at all. We use professional-grade negative air pressure equipment that contains all dust and debris during the cleaning. We leave your home exactly as we found it — just with cleaner air.',
  },
  {
    q: 'Do you clean dryer vents too?',
    a: 'Yes! Dryer vent cleaning is one of our most popular services. A clogged dryer vent is a leading cause of house fires and significantly reduces your dryer\'s efficiency. We clear it completely.',
  },
  {
    q: 'Is duct cleaning really worth it?',
    a: 'Absolutely. Clean ducts mean better air quality, a more efficient HVAC system, lower energy bills, and fewer allergy symptoms. Most customers notice the difference from the very first day.',
  },
  {
    q: 'Are you insured and certified?',
    a: 'Yes. MOMO Air Care is fully licensed, insured, and our technicians are certified professionals. Every job is backed by our 100% satisfaction guarantee — your peace of mind is our priority.',
  },
  {
    q: 'How much does air duct cleaning cost?',
    a: 'Pricing depends on the size of your system and number of vents. We give a clear, upfront quote before any work begins — and the price we quote is the price you pay. No hidden fees, no surprise add-ons at the door.',
  },
  {
    q: 'How do I know if my dryer vent is clogged?',
    a: 'Watch for these signs: clothes take more than one cycle to dry, the dryer or laundry room feels hot, you notice a burning smell, or lint collects around the outside vent flap. Any one of these means it\'s time for a cleaning.',
  },
  {
    q: 'Is the sanitizing fog safe for kids and pets?',
    a: 'Yes. We only use EPA-registered sanitizers that are approved for occupied homes. The treatment is family-safe and pet-safe, and your home is fully livable the moment we finish.',
  },
  {
    q: 'Do I need to prepare anything before you arrive?',
    a: 'Very little. We just ask that you clear small items away from vent covers and secure pets in a comfortable room. Our technicians handle everything else, including floor and corner protection.',
  },
  {
    q: 'Do you service both homes and businesses?',
    a: 'Yes. We service single-family homes, condos, apartments, rental properties, and light commercial spaces like offices and salons across the Greater Seattle area.',
  },
  {
    q: 'Will duct cleaning help with allergies and asthma?',
    a: 'Many customers report a real difference. Removing built-up dust, pollen, pet dander, and mold spores from your ducts reduces the allergens circulating through your home every time the system runs.',
  },
  {
    q: 'What is that musty smell when my HVAC turns on?',
    a: 'A musty odor usually means moisture and microbial growth somewhere in the system — often on the coil, in the ducts, or rising from the crawl space. Our cleaning plus sanitizing treatment eliminates the smell at its source.',
  },
  {
    q: 'How often should the dryer vent be cleaned?',
    a: 'Once a year for most homes. Large families, pet owners, and homes with long or roof-terminating vent runs should consider every 6–9 months, since those vents clog faster.',
  },
  {
    q: 'What happens during a furnace blower cleaning?',
    a: 'We physically remove the blower wheel and motor from the furnace, degrease and deep-clean every blade, vacuum the cabinet, and reinstall everything — restoring the airflow your system had when it was new.',
  },
  {
    q: 'Do you take before and after photos?',
    a: 'Always. You\'ll see exactly what your ducts looked like before we started and after we finished. We never ask you to just take our word for it.',
  },
  {
    q: 'When should insulation be replaced?',
    a: 'If insulation is water-damaged, compressed, moldy, or has been contaminated by rodents, it should be removed and replaced. Fresh insulation pays for itself through lower heating and cooling bills.',
  },
  {
    q: 'How soon can you get here?',
    a: 'We offer same-week scheduling in most of our service area, weekend appointments, and same-day emergency service when available. Call us and we\'ll find the fastest slot for you.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, cash, checks, and popular mobile payment apps. Flexible financing options are also available on larger projects.',
  },
  {
    q: 'What if I\'m not satisfied with the service?',
    a: 'Then we\'re not done. Every job is backed by our 100% satisfaction guarantee — if anything isn\'t right, we come back and fix it at no charge. That\'s the MOMO promise.',
  },
];

function FAQItem({ item, isOpen, onToggle, index }: { item: { q: string; a: string }; index?: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: '0.95rem',
          color: '#1a1a1a',
          lineHeight: 1.4,
        }}>
          {item.q}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a1a1a',
            fontSize: '1.2rem',
            lineHeight: 1,
            fontWeight: 300,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: '0.875rem',
              fontWeight: 300,
              color: '#555',
              lineHeight: 1.7,
              paddingBottom: '20px',
              margin: 0,
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const dividerStyle = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)',
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{ background: '#ffffff', fontFamily: "var(--font-inter), sans-serif", position: 'relative' }}
      className="px-6 pb-24 pt-16"
    >
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#1a1a1a', borderRadius: '999px',
            padding: '7px 18px', marginBottom: '16px',
          }}>
            <span style={{ fontSize: '0.9rem' }}>💬</span>
            <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFD400' }}>
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: '#111', fontFamily: "var(--font-fraunces), serif" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0px' }}>

          {!isMobile && (
          <img
            src="/momo-faq-left.png"
            alt="Momo mascot"
            style={{
              width: '200px',
              flexShrink: 0,
              objectFit: 'contain',
              marginBottom: '-6px',
            }}
          />
          )}

          <div style={{ flex: 1, minWidth: 0 }}>
            <GlowCard glowColor="blue" className="flex flex-col" width="100%">
              {faqs.map((item, i) => (
                <div key={item.q}>
                  <FAQItem
                    item={item}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                  {i < faqs.length - 1 && <div style={dividerStyle} />}
                </div>
              ))}
            </GlowCard>
          </div>

          {!isMobile && (
          <img
            src="/momo-faq.png"
            alt="Momo mascot"
            style={{
              width: '200px',
              flexShrink: 0,
              objectFit: 'contain',
              marginBottom: '-6px',
            }}
          />
          )}

        </div>

      </div>
    </section>
  );
}

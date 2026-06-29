import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { SparklesCore } from './SparklesCore';

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
    a: 'Yes. Momo Air Care is fully licensed, insured, and our technicians are certified professionals. Every job is backed by our 100% satisfaction guarantee — your peace of mind is our priority.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
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
          fontFamily: "'Inter', sans-serif",
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
            background: 'hsl(0 0% 100% / 0.3)',
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
              fontFamily: "'Inter', sans-serif",
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
  background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.3), transparent)',
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{ background: '#F9A800', fontFamily: "'Inter', sans-serif", position: 'relative' }}
      className="px-6 pb-24 pt-4"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0px' }}>

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

          <div style={{ flex: 1 }}>
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

        </div>

      </div>
    </section>
  );
}

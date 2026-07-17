'use client';

import { useRef } from 'react';
import { NavBar } from './NavBar';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { CompanyStory } from './CompanyStory';
import { ServicesGrid } from './ServicesGrid';
import { DryerDanger } from './DryerDanger';
import { Process } from './Process';
import { WhyChoose } from './WhyChoose';
import { Stats } from './Stats';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { VanStrip } from './VanStrip';
import { FAQ } from './FAQ';
import { ServiceArea } from './ServiceArea';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { ExitIntent } from './ExitIntent';
import { FloatingCallButton } from './FloatingCallButton';
import { DiscountPopup } from './DiscountPopup';
import { DidYouKnowPopup } from './DidYouKnowPopup';

export function HomeSections() {
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const dryerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#ffffff' }}>
      <NavBar />

      <main>
        <Hero />
        <CompanyStory />
        <TrustStrip />
        <Stats />
        <ServicesGrid />

        <div id="dryer-vent" ref={dryerRef}>
          <DryerDanger />
        </div>

        <WhyChoose />
        <Process />

        <VanStrip />

        <div ref={reviewsRef}>
          <TestimonialsCarousel />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <ServiceArea />

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      <FloatingCallButton />
      <StickyBar />
      <ExitIntent />
      <DiscountPopup triggerRef={reviewsRef} />
      <DidYouKnowPopup triggerRef={dryerRef} />
    </div>
  );
}

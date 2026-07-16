import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GLSLHills } from './GLSLHills';
import { Services } from './Services';
import { DryerDanger } from './DryerDanger';
import { Testimonials } from './Testimonials';
import { WhyMomo } from './WhyMomo';
import { FAQ } from './FAQ';
import { Gallery } from './Gallery';
import { ServiceArea } from './ServiceArea';
import { Contact } from './Contact';
import { FloatingCallButton } from './FloatingCallButton';
import { GiraffeMascot } from './GiraffeMascot';
import { SparklesCore } from './SparklesCore';
import { DiscountPopup } from './DiscountPopup';
import { DidYouKnowPopup } from './DidYouKnowPopup';

function App() {
  const testimonialsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#131313' }}>
      {/* Soft golden radial glow overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(249,168,0,0.10) 0%, transparent 65%)',
      }} />
      {/* Global sparkles layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} minSize={0.5} maxSize={1.8} speed={0.7} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <GLSLHills />
        <DryerDanger />
        <div id="services" ref={servicesRef}>
          <Services />
        </div>
        <div id="testimonials" ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="about">
          <WhyMomo />
        </div>
        <ServiceArea />
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        <FloatingCallButton />
        <GiraffeMascot />
      </div>
      <DiscountPopup triggerRef={testimonialsRef} />
      <DidYouKnowPopup triggerRef={servicesRef} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

'use client';

import { NavBar } from './NavBar';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { CompanyStory } from './CompanyStory';
import { ServicesGrid } from './ServicesGrid';
import { Stats } from './Stats';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';
import { FloatingCallButton } from './FloatingCallButton';

export function HomeSections() {

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#ffffff' }}>
      <NavBar />

      <main>
        <Hero />
        <CompanyStory />
        <TrustStrip />
        <Stats />
        <ServicesGrid />

      </main>

      <Footer />

      <FloatingCallButton />
      <StickyBar />
    </div>
  );
}

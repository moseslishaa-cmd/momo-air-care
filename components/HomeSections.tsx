'use client';

import { NavBar } from './NavBar';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { CompanyStory } from './CompanyStory';
import { BookingSection } from './BookingSection';
import { Stats } from './Stats';
import { ReviewsSection } from './ReviewsSection';
import { Footer } from './Footer';
import { StickyBar } from './StickyBar';

export function HomeSections() {

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#ffffff' }}>
      <NavBar />

      <main>
        <Hero />
        <CompanyStory />
        <TrustStrip />
        <Stats />
        <ReviewsSection />
        <BookingSection />
      </main>

      <Footer />

      <StickyBar />
    </div>
  );
}

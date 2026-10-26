import { preload } from 'react-dom';
import { HomeSections } from '@/components/HomeSections';

export default function HomePage() {
  // The hero photo is a CSS background (not an <img>), so browsers discover it
  // late; preloading it keeps it from dragging LCP.
  preload('/hero-family.jpg', { as: 'image', fetchPriority: 'high' });
  return <HomeSections />;
}

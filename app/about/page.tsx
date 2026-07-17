import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — Local Air Care Specialists',
  description:
    'MOMO Air Care is a local, licensed and insured team serving Greater Seattle with photo-documented air duct, dryer vent, furnace, and crawl space services.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About MOMO Air Care',
    description: 'The local team behind cleaner air in Puget Sound — honest pricing, photo proof, real results.',
    url: `${SITE.url}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}

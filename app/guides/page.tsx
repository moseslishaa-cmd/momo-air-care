import type { Metadata } from 'next';
import { GuidesIndex } from '@/components/GuidesIndex';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Homeowner Guides: Heating, Cooling & Air Quality',
  description:
    'Honest guides for Puget Sound homeowners: furnace repair vs. replacement, heat pumps in Seattle winters, dryer fire safety, duct cleaning facts, and current rebates. MOMO Air Care, (425) 200-5790.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Homeowner Guides | MOMO Air Care',
    description: 'Straight answers about heating, cooling, and the air in your home, written for Puget Sound houses.',
    url: `${SITE.url}/guides`,
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <GuidesIndex />;
}

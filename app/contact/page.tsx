import type { Metadata } from 'next';
import { ContactPageBody } from '@/components/ContactPageBody';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us — Free Quotes & Fast Scheduling',
  description:
    'Contact MOMO Air Care for air duct, dryer vent, furnace, and crawl space services in Greater Seattle. Call (425) 200-5790 or request a free quote online.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact MOMO Air Care',
    description: 'Free quotes, fast local scheduling, honest answers. Call (425) 200-5790.',
    url: `${SITE.url}/contact`,
  },
};

export default function Page() {
  return <ContactPageBody />;
}

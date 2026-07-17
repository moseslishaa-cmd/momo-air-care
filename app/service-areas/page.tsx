import type { Metadata } from 'next';
import { ServiceAreasPage } from '@/components/ServiceAreasPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Areas — Greater Seattle & Puget Sound',
  description:
    'MOMO Air Care serves the full I-5 corridor: Seattle, Bellevue, Renton, Tacoma, Kent, Everett, Lynnwood, Redmond, Issaquah, Kirkland and surrounding communities.',
  alternates: { canonical: '/service-areas' },
  openGraph: {
    title: 'Service Areas | MOMO Air Care',
    description: 'Air duct & dryer vent cleaning across Greater Puget Sound — find your city.',
    url: `${SITE.url}/service-areas`,
  },
};

export default function Page() {
  return <ServiceAreasPage />;
}

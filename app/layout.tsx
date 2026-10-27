import type { Metadata, Viewport } from 'next';
import { Inter, Oswald, Fraunces } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Air Duct, Dryer Vent & Chimney Cleaning in Seattle, WA | MOMO Air Care',
    template: '%s | MOMO Air Care',
  },
  description:
    'Professional air duct cleaning, dryer vent cleaning, chimney sweeping, furnace & blower cleaning, and crawl space services in Seattle, Bellevue, Tacoma & across Puget Sound. Call (425) 200-5790 for a free quote.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'MOMO Air Care',
    title: 'MOMO Air Care | Healthy Air Starts Here',
    description:
      'Air duct & dryer vent cleaning specialists serving Greater Seattle. Licensed, insured, satisfaction guaranteed. Free quotes and fast scheduling.',
    url: SITE.url,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'A MOMO Air Care technician with a happy family in a bright Seattle-area living room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOMO Air Care | Healthy Air Starts Here',
    description:
      'Air duct & dryer vent cleaning specialists serving Greater Seattle. Free quotes, fast scheduling, satisfaction guaranteed.',
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FFD400',
  width: 'device-width',
  initialScale: 1,
};

function GlobalSchema() {
  const business = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HVACBusiness'],
    '@id': `${SITE.url}/#business`,
    name: 'MOMO Air Care',
    description:
      'Air duct cleaning, dryer vent cleaning, furnace and blower cleaning, HVAC sanitizing, and crawl space services in the Greater Seattle area.',
    url: SITE.url,
    telephone: SITE.phoneIntl,
    email: SITE.email,
    image: `${SITE.url}/brand-hero.jpg`,
    logo: `${SITE.url}/logo.png`,
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
    areaServed: SITE.cities.map((c) => ({ '@type': 'City', name: c })),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: 'MOMO Air Care',
    publisher: { '@id': `${SITE.url}/#business` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${fraunces.variable}`}>
      <head>
        <GlobalSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}

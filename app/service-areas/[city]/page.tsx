import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CityPage } from '@/components/CityPage';
import { CITIES_CONTENT, getCity } from '@/lib/cities';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES_CONTENT.map((c) => ({ city: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> },
): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/service-areas/${c.slug}` },
    openGraph: {
      title: `${c.metaTitle} | MOMO Air Care`,
      description: c.metaDescription,
      url: `${SITE.url}/service-areas/${c.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
      { '@type': 'ListItem', position: 3, name: c.name, item: `${SITE.url}/service-areas/${c.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPage city={c} />
    </>
  );
}

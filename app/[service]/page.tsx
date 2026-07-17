import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/ServicePage';
import { SERVICES_CONTENT, getService } from '@/lib/services';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ service: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ service: string }> },
): Promise<Metadata> {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `/${svc.slug}` },
    openGraph: {
      title: `${svc.metaTitle} | MOMO Air Care`,
      description: svc.metaDescription,
      url: `${SITE.url}/${svc.slug}`,
      images: [{ url: svc.media.type === 'image' ? svc.media.src : '/brand-hero.jpg' }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) notFound();

  const others = SERVICES_CONTENT.filter((s) => s.slug !== svc.slug).map((s) => ({ slug: s.slug, nav: s.nav }));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.nav,
    description: svc.metaDescription,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: SITE.cities.map((c) => ({ '@type': 'City', name: c })),
    url: `${SITE.url}/${svc.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svc.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
      { '@type': 'ListItem', position: 3, name: svc.nav, item: `${SITE.url}/${svc.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePage svc={svc} otherServices={others} />
    </>
  );
}

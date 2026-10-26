import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/GuidePage';
import { GUIDES_CONTENT, getGuide } from '@/lib/guides';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES_CONTENT.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      type: 'article',
      title: `${g.metaTitle} | MOMO Air Care`,
      description: g.metaDescription,
      url: `${SITE.url}/guides/${g.slug}`,
      images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDescription,
    author: { '@type': 'Organization', name: 'MOMO Air Care', '@id': `${SITE.url}/#business` },
    publisher: { '@id': `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}/guides/${g.slug}`,
    image: `${SITE.url}/og.jpg`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE.url}/guides` },
      { '@type': 'ListItem', position: 3, name: g.title, item: `${SITE.url}/guides/${g.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuidePage guide={g} />
    </>
  );
}

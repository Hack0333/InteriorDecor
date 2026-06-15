import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta, localPages, baseUrl } from '../data/seo.js';
import { blogPosts } from '../data/blog.js';
import { business } from '../data/business.js';

function updateMeta(attr, key, value) {
  if (!value) return;
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function updateLink(rel, href) {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function updateJsonLd(schema) {
  const id = 'seo-dynamic-jsonld';
  let script = document.head.querySelector(`#${id}`);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema, null, 2);
}

function getBreadcrumbList(path, title) {
  const segments = path === '/' ? ['Home'] : path.split('/').filter(Boolean);
  const itemListElement = [{
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: `${baseUrl}/`,
  }];

  if (segments.length > 0) {
    const breadcrumbName = title.replace(/\|.*$/, '').trim();
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: breadcrumbName,
      item: `${baseUrl}${path}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

function getFaqSchema(path) {
  const commonFaqs = [
    {
      '@type': 'Question',
      name: 'Do you provide interior design services in Dimapur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, INTERIOR DECOR offers complete interior design services, false ceilings, PVC panels and commercial interiors across Dimapur and Nagaland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can INTERIOR DECOR design false ceilings for homes in Nagaland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team designs and installs gypsum, PVC and POP false ceilings for homes, apartments and offices throughout Nagaland.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact INTERIOR DECOR for a free consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact INTERIOR DECOR by phone, WhatsApp or the enquiry form to schedule a free interior design consultation in Dimapur.',
      },
    },
  ];

  if (path === '/blog' || path.startsWith('/blog/')) {
    return null;
  }

  return {
    '@type': 'FAQPage',
    mainEntity: commonFaqs,
  };
}

function getPageSchema(path, meta, post = null) {
  const articleSchema = post
    ? {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        url: `${baseUrl}${path}`,
        author: {
          '@type': 'Organization',
          name: business.name,
        },
        publisher: {
          '@type': 'Organization',
          name: business.name,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/interior-decor-preview.png`,
          },
        },
        image: `${baseUrl}/interior-decor-preview.png`,
        datePublished: post.published || '2025-01-01',
      }
    : null;

  return [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: business.name,
          description: meta.description,
          publisher: {
            '@type': 'Organization',
            name: business.name,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: getBreadcrumbList(path, meta.title).itemListElement,
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}/#business`,
          name: business.name,
          description: business.tagline,
          telephone: business.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Airport Road, Airport Junction, 3rd Mile',
            addressLocality: 'Dimapur',
            addressRegion: 'Nagaland',
            postalCode: '797112',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
          },
          url: baseUrl,
          sameAs: [business.instagram],
          areaServed: ['Dimapur', 'Chümoukedima', 'Kohima', 'Nagaland'],
        },
        {
          '@type': 'Service',
          name: 'Interior Design and False Ceiling Services',
          provider: { '@id': `${baseUrl}/#business` },
          serviceType: [
            'Interior Designer Dimapur',
            'False Ceiling Contractor Dimapur',
            'PVC Panel Installation Nagaland',
            'Commercial Interior Design Nagaland',
          ],
          areaServed: ['Dimapur', 'Chümoukedima', 'Kohima', 'Nagaland'],
        },
      ].concat(articleSchema ? [articleSchema] : []),
    },
  ];
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let meta = pageMeta[path] || pageMeta.default;
    let post = null;

    if (path.startsWith('/locations/')) {
      const slug = path.split('/').pop();
      const localMeta = localPages[slug];
      if (localMeta) {
        meta = {
          title: `${localMeta.title} | Interior Decor`,
          description: localMeta.description,
          keywords: `${localMeta.title}, Interior Designer Dimapur, Local Interior Services Nagaland`,
          image: `${baseUrl}/interior-decor-preview.png`,
          robots: 'index, follow',
        };
      }
    }

    if (path.startsWith('/blog/')) {
      const slug = path.split('/').pop();
      post = blogPosts.find((item) => item.slug === slug);
      if (post) {
        meta = {
          title: `${post.title} | INTERIOR DECOR Blog`,
          description: post.excerpt,
          keywords: `${post.title}, Interior Design Blog, Dimapur Interior Designer`,
          image: `${baseUrl}/interior-decor-preview.png`,
          robots: 'index, follow',
        };
      } else {
        meta = pageMeta['/blog'];
      }
    }

    const canonical = `${baseUrl}${path === '/' ? '' : path}`;
    document.title = meta.title;
    updateMeta('name', 'description', meta.description);
    updateMeta('name', 'keywords', meta.keywords || 'Interior Designer Dimapur, Interior Design Nagaland, False Ceiling Contractor Dimapur');
    updateMeta('name', 'robots', meta.robots || 'index, follow');
    updateMeta('property', 'og:type', path.startsWith('/blog/') ? 'article' : 'website');
    updateMeta('property', 'og:title', meta.title);
    updateMeta('property', 'og:description', meta.description);
    updateMeta('property', 'og:url', canonical);
    updateMeta('property', 'og:image', meta.image || `${baseUrl}/interior-decor-preview.png`);
    updateMeta('property', 'og:site_name', business.name);
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', meta.title);
    updateMeta('name', 'twitter:description', meta.description);
    updateMeta('name', 'twitter:image', meta.image || `${baseUrl}/interior-decor-preview.png`);
    updateMeta('name', 'twitter:image:alt', 'Interior Decor Nagaland interior design');
    updateLink('canonical', canonical);

    const schema = getPageSchema(path, meta, post);
    updateJsonLd(schema);
  }, [location.pathname]);

  return null;
}

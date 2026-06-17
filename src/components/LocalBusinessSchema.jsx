import { useEffect } from 'react';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Interior Decor Dimapur',
  url: 'https://interiordecordimapur.com',
  telephone: '+918131897816',
  description:
    'Interior Decor Dimapur delivers residential and commercial interior design, modular kitchens, custom furniture layout, and space optimization in Dimapur and Nagaland.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dimapur',
    addressRegion: 'Nagaland',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.9061,
    longitude: 93.7277,
  },
  areaServed: ['Dimapur', 'Chümoukedima', 'Kohima', 'Nagaland'],
  serviceType: [
    'Residential interior styling',
    'Modular kitchen engineering',
    'Commercial office space design',
    'Customized furniture layout',
    'Space optimization',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

export default function LocalBusinessSchema() {
  useEffect(() => {
    const scriptId = 'local-business-jsonld';
    let script = document.head.querySelector(`#${scriptId}`);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      const existing = document.head.querySelector(`#${scriptId}`);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return null;
}

import { useEffect } from 'react';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Interior Decor - Nagaland & Assam',
  url: 'https://interiordecordimapur.com',
  telephone: '+918131897816',
  description:
    'Interior Decor delivers residential and commercial interior design, modular kitchens, false ceilings, PVC wall panels, WPC cladding, and gypsum solutions across Nagaland and Assam.',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Dimapur',
      addressRegion: 'Nagaland',
      addressCountry: 'IN',
      streetAddress: 'Airport Road, Airport Junction, 3rd Mile',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Lahorijan',
      addressRegion: 'Assam',
      addressCountry: 'IN',
      streetAddress: '24V, Lahorijan',
    },
  ],
  geo: [
    {
      '@type': 'GeoCoordinates',
      latitude: 25.8762071,
      longitude: 93.7635709,
    },
    {
      '@type': 'GeoCoordinates',
      latitude: 26.1234,
      longitude: 92.8456,
    },
  ],
  areaServed: [
    'Dimapur',
    'Chümoukedima',
    'Kohima',
    'Mokokchung',
    'Wokha',
    'Mon',
    'Phek',
    'Tuensang',
    'Zunheboto',
    'Niuland',
    'Peren',
    'Tseminyu',
    'Longleng',
    'Kiphire',
    'Meluri',
    'Shamator',
    'Lahorijan',
    'Bokajan',
    'Karbi Anglong',
    'Golaghat',
  ],
  serviceType: [
    'Residential interior styling',
    'Commercial interior design',
    'Modular kitchen engineering',
    'False ceiling installation',
    'PVC wall panels',
    'WPC cladding',
    'Gypsum board solutions',
    'POP designs',
    'Complete renovations',
    'Turnkey projects',
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

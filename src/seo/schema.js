const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://interiordecordimapur.com/#organization',
      name: 'Interior Decor',
      alternateName: 'Interior Decor Dimapur',
      url: 'https://interiordecordimapur.com',
      logo: 'https://interiordecordimapur.com/logo.png',
      image: 'https://interiordecordimapur.com/interior-decor-preview.png',
      description:
        'Leading interior design company in Dimapur, Nagaland, specializing in moisture-proof false ceilings, PVC panels, WPC cladding, and bespoke modular kitchens.',
      telephone: '+91-8043867418',
      email: 'info@interiordecordimapur.com',
      priceRange: '$$',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Airport Junction, 3rd Mile, Airport Road, Lungwiram',
        addressLocality: 'Dimapur',
        addressRegion: 'Nagaland',
        postalCode: '797112',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.8851',
        longitude: '93.7731',
      },
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
            'Sunday',
          ],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/interiordecordimapur',
        'https://www.instagram.com/interiordecordimapur',
        'https://www.justdial.com/Dimapur/Interior-Decor-Lungwiram/9999P3862-3862-250104221340-G1W8_BZDET',
      ],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Dimapur',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Kohima',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Chumoukedima',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Mokokchung',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Wokha',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://interiordecordimapur.com/#ceiling-service',
      serviceType: 'False Ceiling Design and Installation',
      provider: {
        '@id': 'https://interiordecordimapur.com/#organization',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Nagaland',
      },
      description:
        'Professional installation of high-quality gypsum, POP, and PVC false ceilings designed to improve interior aesthetics, temperature insulation, and moisture control in humid climates.',
    },
    {
      '@type': 'Service',
      '@id': 'https://interiordecordimapur.com/#pvc-service',
      serviceType: 'PVC and WPC Wall Paneling',
      provider: {
        '@id': 'https://interiordecordimapur.com/#organization',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Nagaland',
      },
      description:
        'Premium installation of dampness-proof PVC wall panels, 3D fluted panels, and louvered WPC cladding to protect walls from peeling paint and moisture intrusion.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://interiordecordimapur.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Which type of false ceiling is best suited for Nagaland's humid climate?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PVC and moisture-resistant gypsum ceilings are highly recommended for Nagaland\'s wet subtropical climate. Unlike conventional materials, PVC panels are waterproof, termite-proof, and resistant to interstructural dampness, making them ideal for areas with high relative humidity like Dimapur.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do PVC wall panels protect interior walls from dampness and peeling paint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Decorative PVC and WPC wall panels are waterproof. They are installed over damp brickwork with a minimal air gap, creating a protective barrier that stops moisture from reaching the surface. This prevents capillary rising dampness from peeling the paint and stops mold growth.',
          },
        },
        {
          '@type': 'Question',
          name: 'What materials are used for modular kitchens to prevent moisture damage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We construct all modular kitchens using premium boiling-water-proof (BWP) marine-grade plywood and apply complete edge-sealing. This ensures that the cabinets and counters are highly resistant to moisture, warping, and humidity damage.',
          },
        },
      ],
    },
  ],
};

export default schema;

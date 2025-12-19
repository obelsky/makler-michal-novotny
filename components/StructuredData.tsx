import agentData from '@/content/michal-novotny'

export default function StructuredData() {
  // LocalBusiness schema pro SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: agentData.name,
    image: 'https://michalnovotny.cz/images/michal-novotny.png',
    '@id': 'https://michalnovotny.cz',
    url: 'https://michalnovotny.cz',
    telephone: agentData.phone,
    email: agentData.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Praha',
      addressRegion: 'Praha',
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.0755,
      longitude: 14.4378,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Praha',
      },
      {
        '@type': 'State',
        name: 'Středočeský kraj',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/zfpreality',
      'https://www.linkedin.com/company/zfp-reality',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '570',
    },
  }

  // Person schema pro E-E-A-T
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: agentData.name,
    jobTitle: 'Realitní makléř',
    worksFor: {
      '@type': 'Organization',
      name: agentData.company,
      url: 'https://zfpreality.cz',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'ZFP Reality',
    },
    knowsAbout: [
      'Prodej nemovitostí',
      'Odhad nemovitostí',
      'Realitní poradenství',
      'Developerské projekty',
      'Správa nemovitostí',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Praha',
      addressCountry: 'CZ',
    },
    email: agentData.email,
    telephone: agentData.phone,
    image: 'https://michalnovotny.cz/images/michal-novotny.png',
    url: 'https://michalnovotny.cz',
  }

  // Organization schema pro ZFP Reality
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZFP Reality',
    url: 'https://zfpreality.cz',
    logo: 'https://michalnovotny.cz/images/zfp-reality-logo.png',
    image: 'https://michalnovotny.cz/images/zfp-reality-logo.png',
    description: 'Realitní společnost specializující se na developerské projekty a prodej nemovitostí v Praze.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Praha',
      addressCountry: 'CZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: agentData.phone,
      contactType: 'customer service',
      areaServed: 'CZ',
      availableLanguage: ['Czech'],
    },
  }

  // BreadcrumbList pro navigaci
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Úvod',
        item: 'https://michalnovotny.cz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Jak pracuji',
        item: 'https://michalnovotny.cz/jak-pracuji',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Proč s makléřem',
        item: 'https://michalnovotny.cz/proc-s-maklerem',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Prodané nemovitosti',
        item: 'https://michalnovotny.cz/prodane-nemovitosti',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Kontakt',
        item: 'https://michalnovotny.cz/kontakt',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

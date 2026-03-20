export function OrganizationJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SMASTA',
    url: 'https://smasta.co.jp',
    logo: 'https://reaxion.pro/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-3-3556-9988',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '六番町1-1 恩田ビル3階',
      addressLocality: '千代田区',
      addressRegion: '東京都',
      postalCode: '102-0085',
      addressCountry: 'JP',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ProductJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'REAXION PRO',
    description:
      'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。',
    brand: {
      '@type': 'Brand',
      name: 'REAXION PRO',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'SMASTA',
    },
    category: 'スポーツトレーニング機器',
    offers: [
      {
        '@type': 'Offer',
        name: 'スタータープラン',
        price: '200000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'SMASTA',
        },
      },
      {
        '@type': 'Offer',
        name: 'チームプラン',
        price: '400000',
        priceCurrency: 'JPY',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'SMASTA',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebSiteJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'REAXION PRO',
    url: 'https://reaxion.pro',
    description:
      'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。',
    publisher: {
      '@type': 'Organization',
      name: 'SMASTA',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://reaxion.pro/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'REAXION PROとは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。プロ野球やJリーグをはじめとする多くのトップチームで導入されています。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのようなスポーツで使用できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '野球、サッカー、バスケットボール、テニス、バレーボール、ゴルフ、格闘技、eスポーツなど、幅広いスポーツで活用いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '導入にはどのくらいの費用がかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'スタータープラン（20名まで）は初期費用20万円〜、月額1万円〜。チームプラン（50名まで）は初期費用40万円〜、月額3万円〜です。',
        },
      },
      {
        '@type': 'Question',
        name: 'デモや資料請求は可能ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、無料でデモのご予約や資料請求が可能です。お問い合わせフォームまたはお電話（03-3556-9988）にてご連絡ください。',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

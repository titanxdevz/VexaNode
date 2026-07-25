import React from 'react'

interface ProductSchemaProps {
  name: string
  description: string
  image?: string
  brand?: string
  lowPrice: number
  highPrice: number
  priceCurrency?: string
  ratingValue?: number
  reviewCount?: number
  url: string
  offerCount?: number
}

export function ProductSchema({
  name,
  description,
  image = 'https://vexanode.cloud/logo.png',
  brand = 'VexaNode',
  lowPrice,
  highPrice,
  priceCurrency = 'INR',
  ratingValue = 4.9,
  reviewCount = 128,
  url,
  offerCount = 8
}: ProductSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: [image],
    brand: {
      '@type': 'Brand',
      name: brand
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'AggregateOffer',
      url,
      priceCurrency,
      lowPrice: lowPrice.toString(),
      highPrice: highPrice.toString(),
      offerCount: offerCount.toString(),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'VexaNode Cloud'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

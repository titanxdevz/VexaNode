import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vexanode.cloud'
  const currentDate = new Date().toISOString()

  const routes = [
    '',
    '/vps',
    '/vps/miami',
    '/vps/utah',
    '/vps/germany',
    '/vps/india',
    '/vps/singapore',
    '/dedicated',
    '/dedicated/utah',
    '/dedicated/miami',
    '/discord',
    '/discord/free',
    '/lavalink',
    '/lavalink/managed',
    '/lavalink/self-managed',
    '/databases',
    '/games',
    '/webhosting',
    '/domains',
    '/partners',
    '/affiliates',
    '/about',
    '/team',
    '/contact',
    '/docs',
    '/blogs',
    '/terms-of-services',
    '/privacy-policy',
    '/refund-policy',
    '/sla',
    '/aup',
    '/fup'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route.startsWith('/vps') || route.startsWith('/dedicated') || route.startsWith('/discord') || route.startsWith('/games') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/vps') || route.startsWith('/dedicated') || route.startsWith('/discord') || route.startsWith('/games') || route.startsWith('/lavalink') ? 0.95 : 0.8,
  }))
}

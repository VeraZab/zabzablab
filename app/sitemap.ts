import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'

    const routes = ['', '/about', '/blog', '/resize-recolor-request', '/for-interior-designers']
    const now = new Date().toISOString()

    return routes.map((route) => ({
        url: `${baseUrl}${route || '/'}`,
        lastModified: now,
        changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/blog' ? 0.8 : 0.6,
    }))
}



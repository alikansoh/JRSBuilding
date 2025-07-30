import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://jrs-building.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/private'],
      },
    ],
  },
}

export default config

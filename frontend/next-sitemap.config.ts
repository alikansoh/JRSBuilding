import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://jrs-building.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/services'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/projects'), 
    await config.transform(config, '/services/home-renovations'),
    await config.transform(config, '/services/bathroom-upgrades'),
    await config.transform(config, '/services/loft-conversions'),
    await config.transform(config, '/kitchen-remodeling'),
    await config.transform(config, '/services/Commercial-Fit-Outs'),
    await config.transform(config, '/Electrical-services'),
    await config.transform(config, '/Plumbing-services'),
  ],
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

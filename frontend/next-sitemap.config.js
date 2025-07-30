/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://jrs-building.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/admin', '/api', '/private'] },
    ],
  },
};

module.exports = config;

import fs from 'fs';
import path from 'path';

export async function GET() {
  // Define all routes on the site
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.9', changefreq: 'monthly' },
    { path: '/clients', priority: '0.8', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>https://pelagoconsultants.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

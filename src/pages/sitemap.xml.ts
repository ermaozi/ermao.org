import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${new URL("sitemap-index.xml", siteConfig.url).href}</loc>
  </sitemap>
</sitemapindex>`;

export const GET: APIRoute = () => {
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

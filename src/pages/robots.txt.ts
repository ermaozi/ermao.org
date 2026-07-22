import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

const robotsTxt = `
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${new URL("sitemap-index.xml", siteConfig.url).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

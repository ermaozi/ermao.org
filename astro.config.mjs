import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

const fragmentPattern = /^#[a-z][\w-]*$/i;

const markdownText = (node) =>
  typeof node.value === "string"
    ? node.value
    : (node.children ?? []).map(markdownText).join("");

export function remarkFragmentAliases() {
  return (tree) => {
    const aliases = new Map();

    const collectAliases = (node) => {
      if (
        node.type === "link" &&
        typeof node.url === "string" &&
        fragmentPattern.test(node.url)
      ) {
        aliases.set(markdownText(node), node.url.slice(1));
      }
      node.children?.forEach(collectAliases);
    };

    const addAliases = (node) => {
      if (!node.children) return;
      node.children = node.children.flatMap((child) => {
        addAliases(child);
        const text = markdownText(child);
        const id = child.type === "heading" ? aliases.get(text) : undefined;
        if (!id) return [child];
        aliases.delete(text);
        return [{ type: "html", value: `<span id="${id}"></span>` }, child];
      });
    };

    collectAliases(tree);
    addAliases(tree);
  };
}

const sitemapExcludedPaths = new Set([
  "/blog/tags/uuone/",
  "/blog/tags/%E5%B1%B1%E6%B0%B4%E4%BA%91/",
  "/blog/tags/%E4%B8%80%E7%BF%BB%E4%BA%91/",
  "/blog/tags/99%E5%90%A7/",
  "/blog/tags/%E8%9C%9C%E7%B3%96%E4%BA%91/",
  "/blog/tags/%E9%9A%8F%E4%BE%BF%E4%BA%91/",
  "/contact/",
  "/services/",
  "/widgets/",
]);

export default defineConfig({
  site: "https://ermao.org",
  integrations: [
    sitemap({
      filter: (page) => !sitemapExcludedPaths.has(new URL(page).pathname),
    }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
      remarkFragmentAliases,
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

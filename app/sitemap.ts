import type { MetadataRoute } from "next";

const SITE_URL = "https://davegzarca.dev";
const locales = ["en", "es", "de"];
const pages = ["", "/about", "/contact", "/experience"];

const sitemap = (): MetadataRoute.Sitemap =>
  pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${page}`])
        ),
      },
    }))
  );

export default sitemap;

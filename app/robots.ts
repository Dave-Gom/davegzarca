import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
    },
  ],
  sitemap: "https://www.davegzarca.dev/sitemap.xml",
});

export default robots;

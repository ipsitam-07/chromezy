import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://chromezy-ten.vercel.app/sitemap.xml",
    host: "https://chromezy-ten.vercel.app",
  };
}

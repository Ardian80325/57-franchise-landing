import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://57-franchise-landing.vercel.app/", changeFrequency: "monthly", priority: 1 },
    { url: "https://57-franchise-landing.vercel.app/privacy", changeFrequency: "yearly", priority: .2 }];
}

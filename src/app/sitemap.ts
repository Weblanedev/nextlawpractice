import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/our-people`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/attorneys`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/practices`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/capabilities`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sectors`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/publications`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-use`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = INSIGHTS.filter(
    (a) => a.body && a.body.length > 0,
  ).map((a) => ({
    url: `${base}/insights/${a.id}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}

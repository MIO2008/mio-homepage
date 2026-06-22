import type { MetadataRoute } from "next";
import { SITE_URL } from "./content/site";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

const routes = [
  { path: "/", priority: 1, languages: { ko: "/", en: "/en" } },
  { path: "/en", priority: 1, languages: { ko: "/", en: "/en" } },
  { path: "/what-we-do", priority: 0.7 },
  { path: "/about/greeting", priority: 0.7, languages: { ko: "/about/greeting", en: "/en/about" } },
  { path: "/about/certifications", priority: 0.6 },
  { path: "/about/location", priority: 0.7 },
  { path: "/en/about", priority: 0.7, languages: { ko: "/about/greeting", en: "/en/about" } },
  { path: "/products/custom", priority: 0.8 },
  { path: "/products/coating", priority: 0.8, languages: { ko: "/products/coating", en: "/en/coating" } },
  { path: "/products/dicing", priority: 0.8, languages: { ko: "/products/dicing", en: "/en/dicing" } },
  { path: "/en/coating", priority: 0.8, languages: { ko: "/products/coating", en: "/en/coating" } },
  { path: "/en/dicing", priority: 0.8, languages: { ko: "/products/dicing", en: "/en/dicing" } },
  { path: "/products/optical-mirror", priority: 0.7 },
  { path: "/products/filter", priority: 0.7 },
  { path: "/products/window", priority: 0.7 },
  { path: "/products/prism", priority: 0.7 },
  { path: "/technology/custom-production", priority: 0.8 },
  { path: "/technology/process", priority: 0.7 },
  { path: "/technology/equipment", priority: 0.7 },
  { path: "/technology/measurement", priority: 0.7 },
  { path: "/technology/certificates", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
    alternates: route.languages
      ? {
          languages: {
            ko: new URL(route.languages.ko, siteUrl).toString(),
            en: new URL(route.languages.en, siteUrl).toString()
          }
        }
      : undefined
  }));
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mio2008.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/what-we-do/", priority: 0.7 },
  { path: "/about/greeting/", priority: 0.7 },
  { path: "/about/certifications/", priority: 0.6 },
  { path: "/about/location/", priority: 0.7 },
  { path: "/products/custom/", priority: 0.8 },
  { path: "/products/coating/", priority: 0.8 },
  { path: "/products/dicing/", priority: 0.8 },
  { path: "/products/optical-mirror/", priority: 0.7 },
  { path: "/products/filter/", priority: 0.7 },
  { path: "/products/window/", priority: 0.7 },
  { path: "/products/prism/", priority: 0.7 },
  { path: "/technology/custom-production/", priority: 0.8 },
  { path: "/technology/process/", priority: 0.7 },
  { path: "/technology/equipment/", priority: 0.7 },
  { path: "/technology/measurement/", priority: 0.7 },
  { path: "/technology/certificates/", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority
  }));
}

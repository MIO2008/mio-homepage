import type { Metadata } from "next";
import SiteHome from "../components/SiteHome";
import { enHomeContent, SITE_URL } from "../content/site";

const enUrl = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title: "MIO OPTICS | Optical Coating & Glass Dicing Specialist in Korea",
  description: "MIO OPTICS specializes in E-Beam Optical Coating, Glass Dicing, Optical Filters and Precision Optical Components in Korea.",
  alternates: {
    canonical: enUrl,
    languages: {
      ko: SITE_URL,
      en: enUrl
    }
  },
  openGraph: {
    title: "MIO OPTICS | Optical Coating & Glass Dicing Specialist in Korea",
    description: "MIO OPTICS specializes in E-Beam Optical Coating, Glass Dicing, Optical Filters and Precision Optical Components in Korea.",
    url: enUrl,
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"]
  }
};

export default function EnglishHomePage() {
  return <SiteHome content={enHomeContent} />;
}

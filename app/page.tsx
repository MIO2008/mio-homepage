import type { Metadata } from "next";
import SiteHome from "./components/SiteHome";
import { koHomeContent, SITE_URL } from "./content/site";

export const metadata: Metadata = {
  title: "주식회사 명인 | 광학코팅·박막증착·Glass Dicing 전문기업",
  description: "주식회사 명인은 E-Beam 광학코팅, Glass Dicing, 광학필터와 정밀 광학부품을 제조하는 전문기업입니다.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      ko: SITE_URL,
      en: `${SITE_URL}/en`
    }
  },
  openGraph: {
    title: "주식회사 명인 | 광학코팅·박막증착·Glass Dicing 전문기업",
    description: "주식회사 명인은 E-Beam 광학코팅, Glass Dicing, 광학필터와 정밀 광학부품을 제조하는 전문기업입니다.",
    url: SITE_URL,
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"]
  }
};

export default function Home() {
  return <SiteHome content={koHomeContent} />;
}

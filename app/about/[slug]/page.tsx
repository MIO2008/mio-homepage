import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const pages = [
  {
    slug: "greeting",
    label: "인삿말",
    title: "혁신적인 코팅 기술과 정밀 가공으로 미래를 연결합니다.",
    lead: "안녕하세요, 주식회사 명인입니다.",
    body: [
      "저희 명인 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사의 말씀을 드립니다.",
      "주식회사 명인은 급변하는 산업 환경 속에서 E-beam 진공 증착 및 다이싱(Dicing) 분야의 차별화된 기술력을 바탕으로 고품질의 광학 및 전자 부품 솔루션을 제공하고 있습니다.",
      "저희는 단순한 제조를 넘어, 고객의 아이디어가 완벽한 제품으로 구현될 수 있도록 끊임없이 연구하고 도전합니다.",
      "명인의 모든 임직원은 기본에 충실한 품질과 고객과의 굳건한 신뢰를 최우선 가치로 삼고 있습니다. 앞으로도 지속적인 설비 투자와 기술 혁신을 통해 글로벌 시장에서 인정받는 최고의 파트너가 될 것을 약속드립니다."
    ],
    certificates: [],
    mapImage: "",
    footer: "주식회사 명인 대표이사 김쌍태"
  },
  {
    slug: "certifications",
    label: "인증현황",
    title: "품질 신뢰를 위한 인증 및 관리 체계",
    lead: "명인은 정밀 광학 부품 생산에 필요한 품질 기준과 공정 검증 체계를 지속적으로 관리합니다.",
    body: [
      "국내외 고객 요구 기준에 대응하기 위해 품질, 환경, 특허 및 기업 인증 자료를 체계적으로 관리합니다.",
      "각 인증 자료는 고객 요청과 프로젝트 조건에 따라 확인 및 제출할 수 있도록 보관하고 있습니다."
    ],
    certificates: [
      { title: "DNV Management System Certificate", image: "/assets/certificates/dnv-management-system-clean.jpg" },
      { title: "LGE Green Program Certificate", image: "/assets/certificates/lge-green-program-clean.jpg" },
      { title: "특허증", image: "/assets/certificates/patent-certificate-clean.jpg" },
      { title: "벤처기업확인서", image: "/assets/certificates/venture-business-clean.jpg" },
      { title: "품질경영시스템 인증서", image: "/assets/certificates/iso-quality-system-clean.jpg" },
      { title: "환경경영시스템 인증서", image: "/assets/certificates/iso-environment-system-clean.jpg" },
      { title: "기술혁신형 중소기업 확인서", image: "/assets/certificates/inno-biz-confirmation-clean.jpg" }
    ],
    mapImage: "",
    footer: "인증서 원본 자료는 고객 요청 및 프로젝트 조건에 따라 확인 후 제출할 수 있습니다."
  },
  {
    slug: "location",
    label: "찾아오시는길",
    title: "MIO MYUNG IN Optics CO.,LTD.",
    lead: "경기도 오산시에 위치한 명인은 광학 및 전자 부품 제조를 위한 정밀 공정 설비를 운영하고 있습니다.",
    body: [
      "주소: 733-5 Naesammi-dong, Osan-si, Gyeonggi-do, Korea",
      "Tel: +82-31-377-6254",
      "Email: mio2008@naver.com"
    ],
    certificates: [],
    mapImage: "/assets/location-map.jpg",
    footer: "방문 전 담당자와 일정을 확인해 주시기 바랍니다."
  }
];

type AboutPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  const pageTitle = slug === "greeting" ? "회사소개 | 주식회사 명인" : `${page.label} | MIO MYUNG IN Optics CO.,LTD.`;

  return {
    title: pageTitle,
    description: page.lead
  };
}

export default async function AboutDetailPage({ params }: AboutPageProps) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="info-page">
      <header className="detail-header">
        <Link className="detail-brand" href="/">
          MiO
        </Link>
        <Link className="detail-back" href="/#about">
          ABOUT US
        </Link>
      </header>

      <section className={`info-hero${page.certificates.length > 0 ? " info-hero--wide" : ""}`}>
        <p className="section-kicker">ABOUT US</p>
        <h1>{page.title}</h1>
        <strong>{page.lead}</strong>
        <div className="info-copy">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {page.certificates.length > 0 ? (
          <div className="certificate-grid">
            {page.certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.title}>
                <div className="certificate-image">
                  <Image src={certificate.image} alt={certificate.title} fill sizes="(max-width: 760px) 100vw, 45vw" />
                </div>
                <h2>{certificate.title}</h2>
              </article>
            ))}
          </div>
        ) : null}
        {page.mapImage ? (
          <div className="location-layout">
            <div className="location-map">
              <Image src={page.mapImage} alt="MIO MYUNG IN Optics location map" fill sizes="(max-width: 960px) 100vw, 960px" />
            </div>
            <div className="location-info">
              <span>Company</span>
              <strong>MIO MYUNG IN Optics CO.,LTD.</strong>
              <p>733-5 Naesammi-dong, Osan-si, Gyeonggi-do, Korea</p>
              <p>Tel. +82-31-377-6254</p>
              <p>Email. mio2008@naver.com</p>
            </div>
          </div>
        ) : null}
        <p className="info-footer">{page.footer}</p>
      </section>
    </main>
  );
}

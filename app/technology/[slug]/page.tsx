import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Certificate = {
  title: string;
  image: string;
};

type TechnologyPage = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  points: string[];
  certificates?: Certificate[];
  image?: string;
  imageAlt?: string;
};

const certificates = [
  { title: "DNV Management System Certificate", image: "/assets/certificates/dnv-management-system-clean.jpg" },
  { title: "LGE Green Program Certificate", image: "/assets/certificates/lge-green-program-clean.jpg" },
  { title: "특허증", image: "/assets/certificates/patent-certificate-clean.jpg" },
  { title: "벤처기업확인서", image: "/assets/certificates/venture-business-clean.jpg" },
  { title: "품질경영시스템 인증서", image: "/assets/certificates/iso-quality-system-clean.jpg" },
  { title: "환경경영시스템 인증서", image: "/assets/certificates/iso-environment-system-clean.jpg" },
  { title: "기술혁신형 중소기업 확인서", image: "/assets/certificates/inno-biz-confirmation-clean.jpg" }
];

const technologyPages: TechnologyPage[] = [
  {
    slug: "custom-production",
    label: "맞춤제작",
    title: "고객 사양 기반 맞춤제작",
    summary: "광학 성능, 크기, 소재, 후공정 조건을 검토해 목적에 맞는 제작 방향을 제안합니다.",
    points: ["요구 사양 검토", "공정 조건 설계", "샘플 및 양산 대응"],
    image: "/assets/custom-production-process.png",
    imageAlt: "COATING and DICING customized process overview"
  },
  {
    slug: "process",
    label: "생산공정",
    title: "정밀 생산공정",
    summary: "Coating과 Dicing을 중심으로 가공, 세정, 검사까지 연결된 공정 흐름을 관리합니다.",
    points: ["Coating", "Dicing", "Cleaning & inspection"]
  },
  {
    slug: "equipment",
    label: "보유설비",
    title: "보유설비",
    summary: "광학 박막 코팅과 정밀 절단을 위한 주요 생산 설비를 운영합니다.",
    points: ["E-beam coating equipment", "Dicing system", "Process support equipment"]
  },
  {
    slug: "measurement",
    label: "측정설비",
    title: "측정설비",
    summary: "제품 성능과 치수 품질을 안정적으로 확인하기 위한 측정 및 검증 장비를 활용합니다.",
    points: ["Spectral measurement", "Dimension check", "Visual inspection"]
  },
  {
    slug: "certificates",
    label: "인증서",
    title: "인증서",
    summary: "품질, 환경, 특허 및 기업 인증 자료를 체계적으로 관리합니다.",
    points: ["품질 인증", "환경 인증", "특허 및 기업 인증"],
    certificates
  }
];

type TechnologyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return technologyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: TechnologyPageProps) {
  const { slug } = await params;
  const page = technologyPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.label} | MIO MYUNG IN Optics CO.,LTD.`,
    description: page.summary
  };
}

export default async function TechnologyDetailPage({ params }: TechnologyPageProps) {
  const { slug } = await params;
  const page = technologyPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const isVisualPage = Boolean(page.image);

  return (
    <main className="info-page">
      <header className="detail-header">
        <Link className="detail-brand" href="/">
          MiO
        </Link>
        <Link className="detail-back" href="/">
          기술현황
        </Link>
      </header>

      {isVisualPage ? (
        <section className="technology-visual-page">
          <div className="technology-visual">
            <Image src={page.image!} alt={page.imageAlt ?? page.title} fill priority sizes="(max-width: 1180px) 100vw, 1180px" />
          </div>
        </section>
      ) : (
        <>
          <section className="info-hero">
            <p className="section-kicker">TECHNOLOGY</p>
            <h1>{page.title}</h1>
            <p>{page.summary}</p>
          </section>

          <section className="info-content">
            <div className="detail-lists">
              <section>
                <h2>주요 내용</h2>
                <ul>
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            </div>
            {page.certificates ? (
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
          </section>
        </>
      )}
    </main>
  );
}

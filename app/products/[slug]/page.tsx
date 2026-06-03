import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    slug: "custom",
    title: "맞춤제작",
    image: "/assets/what-we-do-processes-no-labels.jpg",
    summary: "고객이 요구하는 규격, 광학 특성, 적용 환경에 맞춰 광학 부품 제작 조건을 설계하고 생산합니다.",
    features: ["Custom specification review", "Optical performance target setup", "Prototype and production support"],
    applications: ["광학 부품 개발", "소량 맞춤 생산", "양산 전 샘플 제작"]
  },
  {
    slug: "coating",
    title: "COATING",
    image: "/assets/technology-coating-equipment.jpg",
    summary: "E-beam 진공 증착 기반의 광학 박막 코팅으로 투과율, 반사율, 파장 특성을 정밀하게 제어합니다.",
    features: ["E-beam vacuum deposition", "Optical thin-film coating", "Spectral performance check"],
    applications: ["Optical Mirror", "Filter", "Window", "Prism"]
  },
  {
    slug: "dicing",
    title: "DICING",
    image: "/assets/technology-dicing-equipment.jpg",
    summary: "광학 및 전자 부품 소재를 목적 규격에 맞춰 정밀 절단하고, 치수와 외관을 안정적으로 검증합니다.",
    features: ["Precision dicing", "Dimension control", "Cleaning & inspection"],
    applications: ["정밀 절단", "규격 가공", "외관 및 치수 검증"]
  },
  {
    slug: "optical-mirror",
    title: "Optical Mirror",
    image: "/assets/detail-optical-mirror.jpg",
    summary: "정밀 코팅과 가공 조건을 기반으로 반사 성능과 표면 품질을 안정적으로 구현하는 광학 미러 제품입니다.",
    features: ["High reflection control", "Precision surface quality", "Custom size support"],
    applications: ["광학 장비", "검사 장비", "센서 모듈"]
  },
  {
    slug: "filter",
    title: "Filter",
    image: "/assets/detail-filter-welding-no-otos.jpg",
    summary: "목적 파장 대역에 맞춰 투과와 차단 특성을 제어하는 필터 제품으로, 산업용 광학 시스템에 적용됩니다.",
    features: ["Band control", "IR / visible spectrum response", "Stable coating performance"],
    applications: ["용접 필터", "IR CUT", "광학 센서"]
  },
  {
    slug: "window",
    title: "Window",
    image: "/assets/product-window-lens.jpg",
    summary: "광 경로를 보호하면서 투과 성능을 유지하는 윈도우 제품으로, 다양한 장비 환경에 맞춰 제작합니다.",
    features: ["Clear optical transmission", "Protective optical surface", "Dimensional customization"],
    applications: ["보호 윈도우", "측정 장비", "광학 모듈"]
  },
  {
    slug: "prism",
    title: "Prism",
    image: "/assets/product-prism-color.jpg",
    summary: "광 분리와 방향 제어가 필요한 장비에 적용되는 프리즘 제품으로, 정밀 가공과 코팅 조건을 함께 관리합니다.",
    features: ["Light path control", "Precision angle processing", "Coating compatibility"],
    applications: ["분광 장비", "이미징 모듈", "정밀 광학 시스템"]
  }
];

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | MIO MYUNG IN Optics CO.,LTD.`,
    description: product.summary
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-detail-page">
      <header className="detail-header">
        <Link className="detail-brand" href="/">
          MiO
        </Link>
        <Link className="detail-back" href="/#products">
          Product
        </Link>
      </header>

      <section className="detail-hero">
        <div className="detail-media">
          <Image src={product.image} alt={product.title} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>

        <div className="detail-copy">
          <p className="section-kicker">PRODUCT DETAIL</p>
          <h1>{product.title}</h1>
          <p>{product.summary}</p>

          <div className="detail-lists">
            <section>
              <h2>Key Features</h2>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Applications</h2>
              <ul>
                {product.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

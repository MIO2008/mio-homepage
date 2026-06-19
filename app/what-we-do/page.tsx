import Image from "next/image";
import Link from "next/link";

const processImages = [
  {
    title: "Dicing / E-beam Coating",
    image: "/assets/what-we-do-processes-no-labels.jpg",
    alt: "Dicing and E-beam coating process",
    description: "정밀 절단과 E-beam 진공 증착 공정을 한눈에 볼 수 있도록 구성한 공정 이미지입니다."
  },
  {
    title: "Mass-Produced Products Characteristic Graph",
    image: "/assets/what-we-do-data-sheet.jpg",
    alt: "Mass-produced products characteristic graph data sheet",
    description: "AR coating, IR CUT, UV CUT, Band pass 등 양산 제품의 대표 특성 데이터를 정리한 자료입니다."
  }
];

const processSteps = [
  {
    title: "Dicing",
    description: "광학 소재를 목표 규격에 맞춰 정밀하게 절단하고 치수 안정성을 확인합니다."
  },
  {
    title: "E-beam Coating",
    description: "진공 증착 기반의 박막 코팅으로 투과율, 반사율, 파장 특성을 제어합니다."
  },
  {
    title: "Data Verification",
    description: "양산 제품의 광학 특성 그래프를 통해 품질과 재현성을 검증합니다."
  }
];

export const metadata = {
  title: "광학코팅 및 Glass Dicing 서비스 | 주식회사 명인",
  description: "Dicing, E-beam coating, and optical performance process overview."
};

export default function WhatWeDoPage() {
  return (
    <main className="what-detail-page">
      <header className="detail-header">
        <Link className="detail-brand" href="/">
          MiO
        </Link>
        <Link className="detail-back" href="/#what-we-do">
          WHAT WE DO로 돌아가기
        </Link>
      </header>

      <section className="what-detail-hero">
        <div className="what-detail-copy">
          <p className="section-kicker">WHAT WE DO</p>
          <h1>Dicing &amp; E-beam Coating</h1>
          <p>
            정밀 Dicing, E-beam 진공 증착, 양산 특성 데이터 검증까지 제품 제작에 필요한 핵심 공정을
            일관된 품질 기준으로 관리합니다.
          </p>
        </div>

        <div className="what-process-summary" aria-label="What We Do process summary">
          {processSteps.map((step) => (
            <article key={step.title}>
              <span>{step.title}</span>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="what-detail-gallery">
          {processImages.map((item) => (
            <article className="what-detail-card" key={item.title}>
              <div className="what-detail-image">
                <Image src={item.image} alt={item.alt} fill priority={item.image === "/assets/what-we-do-processes-no-labels.jpg"} sizes="(max-width: 900px) 100vw, 1120px" />
              </div>
              <div className="what-detail-card-copy">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

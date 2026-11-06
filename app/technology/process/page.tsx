import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./process.module.css";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "E-Beam 코팅 생산공정 | 주식회사 명인",
  description: "사양 검토, 기판 세정, 진공 형성, E-Beam 증착부터 광학 특성 측정과 출하까지 이어지는 코팅 생산공정을 소개합니다.",
  alternates: { canonical: "https://mio2008.com/technology/process/" }
};

const phases = [
  { title: "준비", steps: [
    ["SPECIFICATION", "사양 검토", "사용 파장, 목표 광학 특성, 소재와 규격을 검토합니다."],
    ["SUBSTRATE", "기판 확인", "코팅 전 기판의 규격과 표면 상태를 확인합니다."],
    ["CLEANING", "세정·건조", "코팅 준비를 위한 기판 세정 및 건조 단계입니다."]
  ] },
  { title: "코팅", steps: [
    ["LOADING", "장비 장착", "기판을 지그에 고정하고 챔버에 장착합니다."],
    ["VACUUM", "진공 형성", "증착을 위한 챔버 내부 조건을 준비합니다."],
    ["CORE PROCESS", "E-Beam 증착", "설계된 조건에 따라 광학 박막을 형성합니다."]
  ] },
  { title: "품질 확인", steps: [
    ["MEASUREMENT", "광학 특성 측정", "요구 파장 영역의 투과·반사 특성을 확인합니다."],
    ["INSPECTION", "외관·품질 검사", "제품별 기준에 따라 외관 및 품질을 확인합니다."],
    ["DELIVERY", "포장·출하", "검사 완료 제품을 보호 포장하여 출하합니다."]
  ] }
];

export default function CoatingProcessPage() {
  return <main className={styles.page}>
    <SiteHeader koHref="/technology/process/" />
    <div className={styles.wrap}>
      <div className={styles.crumb}><Link href="/">HOME</Link> / TECHNOLOGY / PRODUCTION PROCESS</div>
      <section className={styles.intro}><p className={styles.eyebrow}>E-BEAM COATING PROCESS</p><h1>E-Beam 코팅 생산공정</h1><p>요구 사양 검토부터 코팅, 검사와 출하까지.</p></section>
      <section className={styles.flow} aria-label="E-Beam 코팅 생산공정 9단계">
        {phases.map((phase, phaseIndex) => <section className={styles.lane} key={phase.title} aria-labelledby={`phase-${phaseIndex}`}>
          <h2 className={styles.phase} id={`phase-${phaseIndex}`}><span>PHASE 0{phaseIndex + 1}</span>{phase.title}<b aria-hidden="true">{phaseIndex < 2 ? "→" : "✓"}</b></h2>
          <ol start={phaseIndex * 3 + 1} className={styles.steps}>{phase.steps.map(([category, title, description], stepIndex) => {
            const number = phaseIndex * 3 + stepIndex + 1;
            return <li className={`${styles.step} ${number === 6 ? styles.focus : ""}`} key={title}><div className={styles.topline}><span className={styles.number}>{String(number).padStart(2, "0")}</span><span className={styles.category}>{category}</span></div><h3>{title}</h3><p>{description}</p></li>;
          })}</ol>
        </section>)}
      </section>
      <p className={styles.legend}>준비 → 코팅 → 품질 확인 순으로 진행합니다. 세부 공정과 검사 항목은 제품 사양에 따라 달라질 수 있습니다.</p>
    </div>
    <section className={styles.equipment}><div className={styles.wrap}><figure className={styles.photo}><Image src="/assets/technology-coating-equipment.jpg" alt="E-Beam 코팅 장비" width={640} height={420} /></figure><div><p className={styles.eyebrow}>EQUIPMENT &amp; QUALITY</p><h2>광학 박막 형성부터<br />결과 확인까지.</h2><p>요구 광학 특성을 바탕으로 코팅 조건과 제품별 확인 항목을 검토합니다.</p><ul className={styles.checks}><li><b>사양</b><span>사용 파장 · 소재 · 목표 광학 특성</span></li><li><b>코팅</b><span>장비 장착 · 진공 형성 · E-Beam 증착</span></li><li><b>검사</b><span>광학 특성 · 외관 · 제품별 품질 기준</span></li></ul><Link className={styles.more} href="/products/coating/">코팅 서비스 자세히 보기 →</Link></div></div></section>
  </main>;
}

import Image from "next/image";
import Link from "next/link";
import styles from "../technology/process/process.module.css";
import SiteHeader from "./SiteHeader";


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

const englishPhases = [
  { title: "Preparation", steps: [
    ["SPECIFICATION", "Specification review", "Review the operating wavelength, optical targets, material and dimensions."],
    ["SUBSTRATE", "Substrate check", "Check substrate dimensions and surface condition before coating."],
    ["CLEANING", "Cleaning & drying", "Clean and dry the substrate in preparation for coating."]
  ] },
  { title: "Coating", steps: [
    ["LOADING", "Loading", "Secure substrates in the fixtures and load them into the chamber."],
    ["VACUUM", "Vacuum preparation", "Prepare the chamber conditions for deposition."],
    ["CORE PROCESS", "E-Beam deposition", "Form optical thin films under the designed conditions."]
  ] },
  { title: "Quality verification", steps: [
    ["MEASUREMENT", "Optical measurement", "Check transmission and reflection over the required wavelength range."],
    ["INSPECTION", "Visual & quality inspection", "Inspect appearance and quality against the product criteria."],
    ["DELIVERY", "Packing & delivery", "Protectively pack inspected products for delivery."]
  ] }
];


export default function CoatingProcess({ english = false }: { english?: boolean }) {
  const currentPhases = english ? englishPhases : phases;
  return <main className={styles.page} lang={english ? "en" : "ko"}>
    <SiteHeader english={english} koHref="/technology/process/" enHref="/en/process/" />
    <div className={styles.wrap}>
      <div className={styles.crumb}><Link href={english ? "/en" : "/"}>HOME</Link> / TECHNOLOGY / PRODUCTION PROCESS</div>
      <section className={styles.intro}><p className={styles.eyebrow}>E-BEAM COATING PROCESS</p><h1>{english ? "E-Beam Coating Production Process" : "E-Beam 코팅 생산공정"}</h1><p>{english ? "From requirements review to coating, inspection and delivery." : "요구 사양 검토부터 코팅, 검사와 출하까지."}</p></section>
      <section className={styles.flow} aria-label={english ? "Nine-step E-Beam coating process" : "E-Beam 코팅 생산공정 9단계"}>
        {currentPhases.map((phase, phaseIndex) => <section className={styles.lane} key={phase.title} aria-labelledby={`phase-${phaseIndex}`}>
          <h2 className={styles.phase} id={`phase-${phaseIndex}`}><span>PHASE 0{phaseIndex + 1}</span>{phase.title}<b aria-hidden="true">{phaseIndex < 2 ? "→" : "✓"}</b></h2>
          <ol start={phaseIndex * 3 + 1} className={styles.steps}>{phase.steps.map(([category, title, description], stepIndex) => {
            const number = phaseIndex * 3 + stepIndex + 1;
            return <li className={`${styles.step} ${number === 6 ? styles.focus : ""}`} key={title}><div className={styles.topline}><span className={styles.number}>{String(number).padStart(2, "0")}</span><span className={styles.category}>{category}</span></div><h3>{title}</h3><p>{description}</p></li>;
          })}</ol>
        </section>)}
      </section>
      <p className={styles.legend}>{english ? "Preparation \u2192 Coating \u2192 Quality verification. Detailed processes and inspection items vary by product specification." : "준비 → 코팅 → 품질 확인 순으로 진행합니다. 세부 공정과 검사 항목은 제품 사양에 따라 달라질 수 있습니다."}</p>
    </div>
    <section className={styles.equipment}><div className={styles.wrap}><figure className={styles.photo}><Image src="/assets/technology-coating-equipment.jpg" alt={english ? "E-Beam coating equipment" : "E-Beam 코팅 장비"} width={640} height={420} /></figure><div><p className={styles.eyebrow}>EQUIPMENT &amp; QUALITY</p><h2>{english ? "From optical thin-film formation" : "광학 박막 형성부터"}<br />{english ? "to performance verification." : "결과 확인까지."}</h2><p>{english ? "We review coating conditions and inspection items based on the required optical characteristics." : "요구 광학 특성을 바탕으로 코팅 조건과 제품별 확인 항목을 검토합니다."}</p><ul className={styles.checks}><li><b>{english ? "Specifications" : "사양"}</b><span>{english ? "Wavelength \u00b7 Material \u00b7 Optical targets" : "사용 파장 · 소재 · 목표 광학 특성"}</span></li><li><b>{english ? "Coating" : "코팅"}</b><span>{english ? "Loading \u00b7 Vacuum preparation \u00b7 E-Beam deposition" : "장비 장착 · 진공 형성 · E-Beam 증착"}</span></li><li><b>{english ? "Inspection" : "검사"}</b><span>{english ? "Optical characteristics \u00b7 Appearance \u00b7 Product quality criteria" : "광학 특성 · 외관 · 제품별 품질 기준"}</span></li></ul><Link className={styles.more} href={english ? "/en/coating/" : "/products/coating/"}>{english ? "Explore coating services \u2192" : "코팅 서비스 자세히 보기 →"}</Link></div></div></section>
  </main>;
}

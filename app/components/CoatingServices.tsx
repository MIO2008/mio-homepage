import styles from "./CoatingServices.module.css";

export default function CoatingServices() {
  return <div className={styles.services}>
<section className="section" aria-label="광학 코팅 서비스 소개">
<div className="heading"><div><p className="kicker">OPTICAL COATING SERVICES</p><h2>명인이 제공하는<br />광학 코팅 솔루션</h2></div><p className="intro">반사 방지부터 파장 선택, 광 분할과 금속 박막까지.<br />제품의 용도와 요구 광학 특성에 맞춘 코팅을 제공합니다.</p></div>
<div className="services">
<article className="service"><span className="num">01</span><div><h3>반사방지 코팅</h3><p className="english">Anti-Reflection Coating</p></div><div className="detail"><p className="description">광학 부품 표면의 반사를 줄여 빛의 투과 특성을 개선하는 코팅입니다.</p><div className="keywords"><span>AR 코팅</span><span>투과 특성 제어</span></div></div></article>
<article className="service"><span className="num">02</span><div><h3>빔 스플리터</h3><p className="english">Beam Splitter</p></div><div className="detail"><p className="description">입사광을 투과광과 반사광으로 나누며, 요구하는 분광비에 맞춰 설계합니다.</p><div className="keywords"><span>광 분할</span><span>투과·반사 비율 제어</span></div></div></article>
<article className="service"><span className="num">03</span><div><h3>콜드·히트 미러</h3><p className="english">Cold &amp; Heat Mirror</p></div><div className="detail"><p className="description">가시광과 적외선의 투과·반사 특성을 구분해 필요한 빛과 열을 제어합니다.</p><div className="keywords"><span>파장 선택</span><span>열선 제어</span></div></div></article>
<article className="service"><span className="num">04</span><div><h3>컬러 필터</h3><p className="english">Color Filter</p></div><div className="detail"><p className="description">특정 파장 대역을 선택적으로 투과하거나 차단하는 광학 필터 코팅입니다.</p><div className="keywords"><span>선택적 투과</span><span>분광 특성 설계</span></div></div></article>
<article className="service"><span className="num">05</span><div><h3>UV·레이저 미러 코팅</h3><p className="english">UV &amp; Laser Mirror Coating</p></div><div className="detail"><p className="description">사용 파장과 입사 조건에 맞춰 자외선 및 레이저 광학계용 반사 코팅을 설계합니다.</p><div className="keywords"><span>사용 파장 대응</span><span>반사 특성 설계</span></div></div></article>
<article className="service"><span className="num">06</span><div><h3>금속 코팅</h3><p className="english">Metal Coating</p></div><div className="detail"><p className="description">금속 박막을 형성해 광학 부품에 필요한 반사 및 차광 특성을 구현합니다.</p><div className="keywords"><span>금속 박막</span><span>반사·차광</span></div></div></article>
</div><div className="closing"><p>세부 대응 범위와 목표 성능은 소재, 사용 파장, 입사각 및 제품 사양에 따라 협의합니다.</p></div>
</section>
</div>;
}

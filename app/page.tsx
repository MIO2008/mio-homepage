"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["PRODUCT", "#products"],
  ["TECHNOLOGY", "#technology"],
  ["WHAT WE DO", "#what-we-do"],
  ["ABOUT US", "#about"],
  ["CONTACT", "#contact"]
];

const aboutMenuItems = [
  ["인삿말", "/about/greeting"],
  ["인증현황", "/about/certifications"],
  ["찾아오시는길", "/about/location"]
];

const heroTags = ["Optical Mirror", "Filter", "Window", "Prism", "Coating"];

const productCards = [
  { title: "Optical Mirror", image: "/assets/product-optical-mirror-clean.jpg", href: "/products/optical-mirror", fit: "contain" },
  { title: "Filter", image: "/assets/product-filter-welding-no-otos.jpg", href: "/products/filter", fit: "contain" },
  { title: "Window", image: "/assets/product-window-lens.jpg", href: "/products/window", fit: "contain" },
  { title: "Prism", image: "/assets/product-prism-color.jpg", href: "/products/prism", fit: "contain" }
];

const technologyProcesses = [
  {
    title: "Coating",
    image: "/assets/technology-coating-equipment.jpg",
    description: "E-beam 진공 증착 기반의 광학 박막 코팅으로 투과율, 반사율, 파장 특성을 정밀하게 제어합니다.",
    steps: ["E-beam vacuum deposition", "Optical thin-film coating", "Spectral performance check"]
  },
  {
    title: "Dicing",
    image: "/assets/technology-dicing-equipment.jpg",
    description: "광학 및 전자 부품 소재를 목적 규격에 맞춰 정밀 절단하고, 치수와 외관을 안정적으로 검증합니다.",
    steps: ["Precision dicing", "Dimension control", "Cleaning & inspection"]
  }
];


const aboutParagraphs = [
  "안녕하세요, 주식회사 명인입니다.",
  "저희 명인 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사의 말씀을 드립니다.",
  "주식회사 명인은 급변하는 산업 환경 속에서 E-beam 진공 증착 및 다이싱(Dicing) 분야의 차별화된 기술력을 바탕으로 고품질의 광학 및 전자 부품 솔루션을 제공하고 있습니다.",
  "저희는 단순한 제조를 넘어, 고객의 아이디어가 완벽한 제품으로 구현될 수 있도록 끊임없이 연구하고 도전합니다.",
  "명인의 모든 임직원은 ‘기본에 충실한 품질’과 ‘고객과의 굳건한 신뢰’를 최우선 가치로 삼고 있습니다. 앞으로도 지속적인 설비 투자와 기술 혁신을 통해 글로벌 시장에서 인정받는 최고의 파트너가 될 것을 약속드립니다.",
  "여러분의 비즈니스 여정에 명인이 든든한 조력자가 되겠습니다. 감사합니다."
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="MIO MYUNG IN OPTICS" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">MiO</span>
            <span className="brand-sub">MYUNG IN OPTICS</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) =>
              label === "ABOUT US" ? (
                <div className="nav-dropdown" key={href}>
                  <a href={href}>{label}</a>
                  <div className="nav-dropdown-menu">
                    {aboutMenuItems.map(([itemLabel, itemHref]) => (
                      <Link key={itemHref} href={itemHref}>
                        {itemLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={href} href={href}>
                  {label}
                </a>
              )
            )}
          </nav>

          <button className="menu-button" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <span />
            <span />
          </button>
        </div>

        <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <div className="mobile-nav-group" key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
              {label === "ABOUT US" ? (
                <div className="mobile-subnav">
                  {aboutMenuItems.map(([itemLabel, itemHref]) => (
                    <Link key={itemHref} href={itemHref} onClick={() => setMenuOpen(false)}>
                      {itemLabel}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="main-visual" aria-label="MIO main visual">
          <Image src="/assets/mio-hero-no-focus.png" alt="MIO facility background" fill priority sizes="100vw" />
          <div className="visual-inner">
            <div className="hero-copy">
              <p>ENGINEERING OPTICAL EXCELLENCE</p>
              <h1>MYUNG IN OPTICS</h1>
              <strong>광학 미러, 필터, 윈도우, 프리즘, 코팅 제품을 정밀 설비와 양산 검증 데이터로 완성합니다.</strong>
              <div className="hero-tags" aria-label="product keywords">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a href="#products">제품 보기</a>
                <a href="#contact">문의하기</a>
              </div>
            </div>
          </div>
        </section>

        <section className="company-section" id="about">
          <div className="section-inner company-grid">
            <div className="company-heading">
              <p className="section-kicker">ABOUT US</p>
              <h1>
                혁신적인 코팅 기술과
                <br />
                정밀 가공으로
                <br />
                미래를 연결합니다.
              </h1>
            </div>
            <div className="greeting-copy">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="signature">주식회사 명인 대표이사 김쌍태</p>
            </div>
          </div>
        </section>

        <section className="product-section" id="products">
          <div className="section-inner">
            <div className="section-heading">
              <div className="product-label-stack">
                <p className="section-kicker">PRODUCT</p>
                <span>Coating</span>
              </div>
              <h2 className="product-heading">
                <span>Optical Mirror · Filter · Window · Prism ·</span>
              </h2>
            </div>
            <div className="product-grid">
              {productCards.map((card) => (
                <article className="product-card" key={card.title}>
                  <Link href={card.href}>
                    <div className={`product-image${card.fit === "contain" ? " product-image--contain" : ""}`}>
                      <Image src={card.image} alt={card.title} fill sizes="(max-width: 760px) 100vw, 25vw" />
                    </div>
                    <div className="product-copy">
                      <span>PRODUCT</span>
                      <h3>{card.title}</h3>
                      <p>자세히 보기</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capability-section" id="technology">
          <div className="section-inner capability-grid capability-grid--processes">
            <div className="capability-copy">
              <p className="section-kicker">TECHNOLOGY</p>
              <h2>Coating과 Dicing 중심의 정밀 공정</h2>
              <div className="technology-processes">
                {technologyProcesses.map((process) => (
                  <article className="technology-process" key={process.title}>
                    {process.image ? (
                      <div className="technology-process-photo">
                        <Image src={process.image} alt={`${process.title} process equipment`} fill sizes="(max-width: 760px) 100vw, 24vw" />
                      </div>
                    ) : null}
                    <span>{process.title}</span>
                    <p>{process.description}</p>
                    <ul>
                      {process.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="quality-section" id="what-we-do">
          <div className="section-inner quality-grid">
            <div>
              <p className="section-kicker">WHAT WE DO</p>
              <h2>정밀 가공부터 코팅 검증까지 연결된 공정</h2>
            </div>
            <Link className="quality-photo quality-photo-link" href="/what-we-do" aria-label="View What We Do detail">
              <Image src="/assets/what-we-do-processes-no-labels.jpg" alt="Dicing and E-beam coating process" fill sizes="(max-width: 900px) 100vw, 48vw" />
              <span>공정 상세 보기</span>
            </Link>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-inner contact-grid">
            <div>
              <p className="section-kicker">CONTACT</p>
              <h2>문의하기</h2>
            </div>
            <div className="contact-box">
              <strong>+82-31-377-6254</strong>
              <a href="mailto:mio2008@naver.com">mio2008@naver.com</a>
              <p>MIO MYUNG IN Optics CO.,LTD.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

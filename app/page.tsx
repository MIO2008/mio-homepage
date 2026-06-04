"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const aboutMenuItems = [
  ["인삿말", "/about/greeting"],
  ["인증현황", "/about/certifications"],
  ["찾아오시는길", "/about/location"]
];

const productMenuItems = [
  ["COATING", "/products/coating"],
  ["DICING", "/products/dicing"]
];

const technologyMenuItems = [
  ["맞춤제작", "/technology/custom-production"],
  ["생산공정", "/technology/process"],
  ["보유설비", "/technology/equipment"],
  ["측정설비", "/technology/measurement"]
];

const navItems = [
  { label: "회사소개", href: "#about", subItems: aboutMenuItems },
  { label: "제품정보", href: "#products", subItems: productMenuItems },
  { label: "기술현황", href: "/technology/process", subItems: technologyMenuItems },
  { label: "고객지원", href: "#contact" }
];

const productCards = [
  { title: "맞춤제작", summary: "고객 사양에 맞춘 광학 부품 제작", href: "/products/custom" },
  { title: "COATING", summary: "E-beam 기반 광학 박막 코팅", href: "/products/coating" },
  { title: "DICING", summary: "정밀 절단 및 규격 가공", href: "/products/dicing" }
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
            {navItems.map((item) =>
              item.subItems ? (
                <div className="nav-dropdown" key={item.href}>
                  <a href={item.href}>{item.label}</a>
                  <div className="nav-dropdown-menu">
                    {item.subItems.map(([itemLabel, itemHref]) =>
                      itemHref.startsWith("#") ? (
                        <a key={itemHref} href={itemHref}>
                          {itemLabel}
                        </a>
                      ) : (
                        <Link key={itemHref} href={itemHref}>
                          {itemLabel}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <a key={item.href} href={item.href}>
                  {item.label}
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
          {navItems.map((item) => (
            <div className="mobile-nav-group" key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
              {item.subItems ? (
                <div className="mobile-subnav">
                  {item.subItems.map(([itemLabel, itemHref]) =>
                    itemHref.startsWith("#") ? (
                      <a key={itemHref} href={itemHref} onClick={() => setMenuOpen(false)}>
                        {itemLabel}
                      </a>
                    ) : (
                      <Link key={itemHref} href={itemHref} onClick={() => setMenuOpen(false)}>
                        {itemLabel}
                      </Link>
                    )
                  )}
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
                <p className="section-kicker">PRODUCTS</p>
                <span>Products</span>
              </div>
            </div>
            <div className="product-grid">
              {productCards.map((card, index) => (
                <article className="product-card product-card--simple" key={card.title}>
                  <Link href={card.href}>
                    <div className="product-copy">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{card.title}</h3>
                      <p>{card.summary}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
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
              <p className="contact-company">(주)명인</p>
              <p className="contact-address">주소 : 경기도 내삼미동 733-5 (주) 명인</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

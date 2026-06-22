"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HomeContent, NavItem } from "../content/site";
import LanguageSwitcher from "./LanguageSwitcher";

type SiteHomeProps = {
  content: HomeContent;
};

function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export default function SiteHome({ content }: SiteHomeProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="MIO MYUNG IN OPTICS" onClick={closeMenu}>
            <span className="brand-mark">MiO</span>
            <span className="brand-sub">MYUNG IN OPTICS</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {content.navItems.map((item) =>
              item.subItems ? (
                <div className="nav-dropdown" key={item.href}>
                  <NavLink item={item} />
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
                <NavLink item={item} key={item.href} />
              )
            )}
          </nav>

          <div className="header-tools">
            <LanguageSwitcher current={content.currentLanguage} koHref={content.languageHrefs.ko} enHref={content.languageHrefs.en} onNavigate={closeMenu} />
            <button className="menu-button" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {content.navItems.map((item) => (
            <div className="mobile-nav-group" key={item.href}>
              <NavLink item={item} onNavigate={closeMenu} />
              {item.subItems ? (
                <div className="mobile-subnav">
                  {item.subItems.map(([itemLabel, itemHref]) =>
                    itemHref.startsWith("#") ? (
                      <a key={itemHref} href={itemHref} onClick={closeMenu}>
                        {itemLabel}
                      </a>
                    ) : (
                      <Link key={itemHref} href={itemHref} onClick={closeMenu}>
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
          <Image src="/assets/mio-hero-no-focus.png" alt={content.hero.imageAlt} fill priority sizes="100vw" />
          <div className="visual-inner">
            <div className="hero-copy">
              <p>{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <strong>{content.hero.description}</strong>
              <div className="hero-actions">
                <a href="#products">{content.hero.primaryAction}</a>
                <a href="#contact">{content.hero.secondaryAction}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="company-section" id="about">
          <div className="section-inner company-grid">
            <div className="company-heading">
              <p className="section-kicker">{content.about.kicker}</p>
              <h1>
                {content.about.titleLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < content.about.titleLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
            </div>
            <div className="greeting-copy">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="signature">{content.about.signature}</p>
            </div>
          </div>
        </section>

        <section className="product-section" id="products">
          <div className="section-inner">
            <div className="section-heading">
              <div className="product-label-stack">
                <p className="section-kicker">{content.products.kicker}</p>
                <span>{content.products.label}</span>
              </div>
            </div>
            <div className={`product-grid${content.products.cards.length === 2 ? " product-grid--two" : ""}`}>
              {content.products.cards.map((card, index) => (
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
              <p className="section-kicker">{content.contact.kicker}</p>
              <h2>{content.contact.title}</h2>
            </div>
            <div className="contact-box">
              <strong>+82-31-377-6254</strong>
              <a href="mailto:mio2008@naver.com">mio2008@naver.com</a>
              <p className="contact-company">{content.contact.company}</p>
              <p className="contact-address">{content.contact.address}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

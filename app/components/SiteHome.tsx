"use client";

import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "../content/site";
import SiteHeader from "./SiteHeader";

type SiteHomeProps = {
  content: HomeContent;
};

export default function SiteHome({ content }: SiteHomeProps) {

  return (
    <>
      <SiteHeader content={content} home />

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

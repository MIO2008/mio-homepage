import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { englishDetailPages, getEnglishDetailPage, SITE_URL } from "../../content/site";

type EnglishPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return englishDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: EnglishPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getEnglishDetailPage(slug);

  if (!page) {
    return {};
  }

  const enUrl = `${SITE_URL}/en/${page.slug}`;
  const koUrl = `${SITE_URL}${page.koHref}`;

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: enUrl,
      languages: {
        ko: koUrl,
        en: enUrl
      }
    },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: enUrl,
      type: "website",
      locale: "en_US",
      alternateLocale: ["ko_KR"]
    }
  };
}

export default async function EnglishDetailPage({ params }: EnglishPageProps) {
  const { slug } = await params;
  const page = getEnglishDetailPage(slug);

  if (!page) {
    notFound();
  }

  if (page.kind === "about") {
    return (
      <main className="info-page">
        <header className="detail-header">
          <Link className="detail-brand" href="/en">
            MiO
          </Link>
          <div className="detail-header-actions">
            <Link className="detail-back" href="/en#about">
              ABOUT US
            </Link>
            <LanguageSwitcher current="en" koHref={page.koHref} enHref="/en/about" />
          </div>
        </header>

        <section className="info-hero">
          <p className="section-kicker">ABOUT US</p>
          <h1>{page.title}</h1>
          <strong>{page.lead}</strong>
          <div className="info-copy">
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="info-footer">{page.footer}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="product-detail-page">
      <header className="detail-header">
        <Link className="detail-brand" href="/en">
          MiO
        </Link>
        <div className="detail-header-actions">
          <Link className="detail-back" href="/en#products">
            Product
          </Link>
          <LanguageSwitcher current="en" koHref={page.koHref} enHref={`/en/${page.slug}`} />
        </div>
      </header>

      <section className="detail-hero">
        <div className="detail-media">
          <Image src={page.image} alt={page.title} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>

        <div className="detail-copy">
          <p className="section-kicker">PRODUCT DETAIL</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>

          <div className="detail-lists">
            <section>
              <h2>Key Features</h2>
              <ul>
                {page.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Applications</h2>
              <ul>
                {page.applications.map((application) => (
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

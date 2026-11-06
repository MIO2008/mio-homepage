"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { enHomeContent, koHomeContent, type HomeContent } from "../content/site";
import LanguageSwitcher from "./LanguageSwitcher";
import { languagePairs } from "../content/english-pages";

type Props = { content?: HomeContent; home?: boolean; english?: boolean; koHref?: string; enHref?: string };

export default function SiteHeader({ content, home = false, english = false, koHref = "/", enHref = "/en" }: Props) {
  const data = content ?? (english ? enHomeContent : koHomeContent);
  const isEnglish = data.currentLanguage === "en";
  const homeHref = isEnglish ? "/en" : "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);
  const hrefFor = (href: string) => href.startsWith("#") && !home ? `${homeHref}${href}` : href;
  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand" href={home ? "#top" : homeHref} aria-label="MIO MYUNG IN OPTICS" onClick={close}><span className="brand-mark">MiO</span><span className="brand-sub">MYUNG IN OPTICS</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{data.navItems.map(item => item.subItems ? <div className="nav-dropdown" key={item.href}>
        <Link href={hrefFor(item.href)}>{item.label}</Link>
        <div className="nav-dropdown-menu">{item.subItems.map(([label, href]) => <Link key={href} href={hrefFor(href)} aria-current={pathname?.replace(/\/$/, "") === href.replace(/\/$/, "") ? "page" : undefined}>{label}</Link>)}</div>
      </div> : <Link key={item.href} href={hrefFor(item.href)}>{item.label}</Link>)}</nav>
      <div className="header-tools"><LanguageSwitcher current={data.currentLanguage} koHref={content?.languageHrefs.ko ?? koHref} enHref={content?.languageHrefs.en ?? (enHref === "/en" ? languagePairs[koHref.replace(/\/$/, "")] ?? "/en" : enHref)} onNavigate={close} /><button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-mobile-nav" onClick={() => setMenuOpen(value => !value)}><span /><span /></button></div>
    </div>
    <nav id="site-mobile-nav" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">{data.navItems.map(item => <div className="mobile-nav-group" key={item.href}><Link href={hrefFor(item.href)} onClick={close}>{item.label}</Link>{item.subItems && <div className="mobile-subnav">{item.subItems.map(([label, href]) => <Link key={href} href={hrefFor(href)} onClick={close} aria-current={pathname?.replace(/\/$/, "") === href.replace(/\/$/, "") ? "page" : undefined}>{label}</Link>)}</div>}</div>)}</nav>
  </header>;
}

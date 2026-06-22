"use client";

import Link from "next/link";
import type { LanguageCode } from "../content/site";

type LanguageSwitcherProps = {
  current: LanguageCode;
  koHref: string;
  enHref: string;
  onNavigate?: () => void;
};

export default function LanguageSwitcher({ current, koHref, enHref, onNavigate }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" aria-label="Language selection">
      <Link href={koHref} aria-current={current === "ko" ? "page" : undefined} onClick={onNavigate}>
        한국어
      </Link>
      <span aria-hidden="true">|</span>
      <Link href={enHref} aria-current={current === "en" ? "page" : undefined} onClick={onNavigate}>
        English
      </Link>
    </div>
  );
}

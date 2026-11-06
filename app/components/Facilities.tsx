"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { facilities } from "../content/facilities";
import SiteHeader from "./SiteHeader";
import styles from "./Facilities.module.css";

const categories = [
  { id: "process", label: "가공 설비", description: "유리 제단과 다이싱을 위한 주요 가공 설비입니다." },
  { id: "coat", label: "코팅 설비", description: "광학 박막 형성을 위한 E-BEAM 증착 설비입니다." },
  { id: "measure", label: "측정 설비", description: "측정 및 환경 시험을 위한 주요 설비입니다." },
  { id: "clean", label: "초음파 세척기", description: "코팅 전 기판 세척을 위한 설비입니다." }
] as const;
type Category = typeof categories[number]["id"];
type Equipment = { title: string; alt: string; image: string; width: number; height: number; en?: string; copy?: string; tags?: string };

export default function Facilities({ initialCategory = "process" }: { initialCategory?: Category }) {
  const [selected, setSelected] = useState<Category>(initialCategory);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (categories.some(c => c.id === id)) setSelected(id as Category);
    };
    sync(); window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  function choose(id: Category) {
    setSelected(id);
    window.history.replaceState(null, "", `#${id}`);
  }
  return <div className={styles.page}>
    <SiteHeader koHref="/technology/equipment/" />
    <main>
      <section className={styles.hero}><div className={styles.wrap}><div className={styles.crumb}><Link href="/">HOME</Link><span>/</span><Link href="/technology/process/">기술현황</Link><span>/</span><span>설비현황</span></div><p className={styles.eyebrow}>OUR FACILITIES</p><h1>설비현황</h1><p className={styles.lead}>가공부터 코팅, 측정, 세척까지.<br />명인의 주요 설비를 공정별로 소개합니다.</p></div></section>
      <div className={`${styles.wrap} ${styles.content}`}>
        <div className={styles.tabs} role="tablist" aria-label="설비 분류">{categories.map((category, i) => <button key={category.id} ref={el => { tabRefs.current[i] = el; }} type="button" role="tab" id={`tab-${category.id}`} aria-controls={`panel-${category.id}`} aria-selected={selected === category.id} tabIndex={selected === category.id ? 0 : -1} onClick={() => choose(category.id)} onKeyDown={event => {
          let next = i;
          if (event.key === "ArrowRight") next = (i + 1) % categories.length;
          else if (event.key === "ArrowLeft") next = (i + categories.length - 1) % categories.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = categories.length - 1;
          else return;
          event.preventDefault(); choose(categories[next].id); tabRefs.current[next]?.focus();
        }}>{category.label}</button>)}</div>
        {categories.map(category => <section key={category.id} id={`panel-${category.id}`} role="tabpanel" aria-labelledby={`tab-${category.id}`} hidden={selected !== category.id}>
          <h2>{category.label}</h2><p className={styles.sectionDescription}>{category.description}</p>
          <div className={category.id === "clean" ? styles.feature : styles.grid}>{(facilities[category.id] as readonly Equipment[]).map((item, i) => <article key={item.image} className={styles.item}>
            <Image src={item.image} width={item.width} height={item.height} alt={item.title} sizes="(max-width: 650px) 100vw, (max-width: 1160px) 45vw, 520px" priority={category.id === initialCategory && i < 2} />
            <div className={styles.itemCopy}><h3>{item.title}</h3>{item.en && <p className={styles.english}>{item.en}</p>}{item.copy && <p className={styles.description}>{item.copy}</p>}{item.tags && <p className={styles.tags}>{item.tags}</p>}</div>
          </article>)}</div>
        </section>)}
        <div className={styles.contact}><p>가공 및 코팅 가능 여부는 소재와 요청 사양에 따라 협의합니다.</p><Link href="/#contact">제작 문의하기 <span aria-hidden="true">↗</span></Link></div>
      </div>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}>MYUNG IN OPTICS <span>광학 코팅 · 정밀 가공</span></div></footer>
  </div>;
}

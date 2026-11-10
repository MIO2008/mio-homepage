import type { Metadata } from "next";
import CoatingProcess from "../../components/CoatingProcess";
export const metadata: Metadata = {
  title: "E-Beam 코팅 생산공정 | 주식회사 명인",
  description: "사양 검토, 기판 세정, 진공 형성, E-Beam 증착부터 광학 특성 측정과 출하까지 이어지는 코팅 생산공정을 소개합니다.",
  alternates: { canonical: "https://mio2008.com/technology/process/", languages: { ko: "https://mio2008.com/technology/process/", en: "https://mio2008.com/en/process/" } }
};
export default function Page() { return <CoatingProcess />; }

import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto",
  display: "swap"
});

export const metadata: Metadata = {
  title: "MIO MYUNG IN Optics CO.,LTD.",
  description: "MIO OPTICS specializes in optical filters, coating, dicing, optical mirrors, prisms and precision optical components for industrial applications.",
  keywords: ["MIO", "MYUNG IN Optics", "optical filter", "optical mirror", "optical coating", "prism", "optical window"],
  openGraph: {
    title: "MIO MYUNG IN Optics CO.,LTD.",
    description: "Precision optical components, coating and assembly.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body>{children}</body>
    </html>
  );
}

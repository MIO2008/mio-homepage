export const SITE_URL = "https://mio2008.com";

export type LanguageCode = "ko" | "en";

export type NavItem = {
  label: string;
  href: string;
  subItems?: [string, string][];
};

export type HomeContent = {
  currentLanguage: LanguageCode;
  languageHrefs: {
    ko: string;
    en: string;
  };
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    imageAlt: string;
  };
  about: {
    kicker: string;
    titleLines: string[];
    paragraphs: string[];
    signature: string;
  };
  products: {
    kicker: string;
    label: string;
    cards: {
      title: string;
      summary: string;
      href: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    company: string;
    address: string;
  };
};

export type EnglishDetailPage =
  | {
      slug: "coating" | "dicing";
      kind: "product";
      koHref: string;
      title: string;
      image: string;
      summary: string;
      features: string[];
      applications: string[];
      metadataTitle: string;
      metadataDescription: string;
    }
  | {
      slug: "about";
      kind: "about";
      koHref: string;
      title: string;
      lead: string;
      body: string[];
      footer: string;
      metadataTitle: string;
      metadataDescription: string;
    };

export const koHomeContent: HomeContent = {
  currentLanguage: "ko",
  languageHrefs: {
    ko: "/",
    en: "/en"
  },
  navItems: [
    {
      label: "회사소개",
      href: "#about",
      subItems: [
        ["인삿말", "/about/greeting"],
        ["인증현황", "/about/certifications"],
        ["찾아오시는길", "/about/location"]
      ]
    },
    {
      label: "제품정보",
      href: "#products",
      subItems: [
        ["COATING", "/products/coating"],
        ["DICING", "/products/dicing"]
      ]
    },
    {
      label: "기술현황",
      href: "/technology/process",
      subItems: [
        ["맞춤제작", "/technology/custom-production"],
        ["생산공정", "/technology/process"],
        ["보유설비", "/technology/equipment"],
        ["측정설비", "/technology/measurement"]
      ]
    },
    { label: "고객지원", href: "#contact" }
  ],
  hero: {
    eyebrow: "ENGINEERING OPTICAL EXCELLENCE",
    title: "MYUNG IN OPTICS",
    description: "광학 미러, 필터, 윈도우, 프리즘, 코팅 제품을 정밀 설비와 양산 검증 데이터로 완성합니다.",
    primaryAction: "제품 보기",
    secondaryAction: "문의하기",
    imageAlt: "MIO facility background"
  },
  about: {
    kicker: "ABOUT US",
    titleLines: ["혁신적인 코팅 기술과", "정밀 가공으로", "미래를 연결합니다."],
    paragraphs: [
      "안녕하세요, 주식회사 명인입니다.",
      "저희 명인 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사의 말씀을 드립니다.",
      "주식회사 명인은 급변하는 산업 환경 속에서 E-beam 진공 증착 및 다이싱(Dicing) 분야의 차별화된 기술력을 바탕으로 고품질의 광학 및 전자 부품 솔루션을 제공하고 있습니다.",
      "저희는 단순한 제조를 넘어, 고객의 아이디어가 완벽한 제품으로 구현될 수 있도록 끊임없이 연구하고 도전합니다.",
      "명인의 모든 임직원은 ‘기본에 충실한 품질’과 ‘고객과의 굳건한 신뢰’를 최우선 가치로 삼고 있습니다. 앞으로도 지속적인 설비 투자와 기술 혁신을 통해 글로벌 시장에서 인정받는 최고의 파트너가 될 것을 약속드립니다.",
      "여러분의 비즈니스 여정에 명인이 든든한 조력자가 되겠습니다. 감사합니다."
    ],
    signature: "주식회사 명인 대표이사 김쌍태"
  },
  products: {
    kicker: "PRODUCTS",
    label: "Products",
    cards: [
      { title: "맞춤제작", summary: "고객 사양에 맞춘 광학 부품 제작", href: "/products/custom" },
      { title: "COATING", summary: "E-beam 기반 광학 박막 코팅", href: "/products/coating" },
      { title: "DICING", summary: "정밀 절단 및 규격 가공", href: "/products/dicing" }
    ]
  },
  contact: {
    kicker: "CONTACT",
    title: "문의하기",
    company: "(주)명인",
    address: "주소 : 경기도 내삼미동 733-5 (주) 명인"
  }
};

export const enHomeContent: HomeContent = {
  currentLanguage: "en",
  languageHrefs: {
    ko: "/",
    en: "/en"
  },
  navItems: [
    {
      label: "About",
      href: "#about",
      subItems: [["About MIO", "/en/about"]]
    },
    {
      label: "Products",
      href: "#products",
      subItems: [
        ["COATING", "/en/coating"],
        ["DICING", "/en/dicing"]
      ]
    },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "ENGINEERING OPTICAL EXCELLENCE",
    title: "MYUNG IN OPTICS",
    description: "MIO OPTICS manufactures optical mirrors, filters, windows, prisms and coated components with precision equipment and verified production data.",
    primaryAction: "View Products",
    secondaryAction: "Contact Us",
    imageAlt: "MIO OPTICS facility background"
  },
  about: {
    kicker: "ABOUT US",
    titleLines: ["Optical coating", "and precision processing", "for reliable production."],
    paragraphs: [
      "MIO OPTICS is a Korea-based specialist in E-Beam optical coating and glass dicing.",
      "We support customers from specification review to prototype and production, helping optical and electronic components meet the required performance, size and process conditions.",
      "Our team combines vacuum deposition, precision cutting and inspection know-how to provide stable optical component manufacturing for industrial applications.",
      "With continued equipment investment and process improvement, MIO OPTICS aims to be a dependable partner for customers in Korea and overseas."
    ],
    signature: "MIO MYUNG IN Optics CO.,LTD."
  },
  products: {
    kicker: "PRODUCTS",
    label: "Products",
    cards: [
      { title: "COATING", summary: "E-Beam optical thin-film coating for optical components", href: "/en/coating" },
      { title: "DICING", summary: "Precision glass dicing and dimensional processing", href: "/en/dicing" }
    ]
  },
  contact: {
    kicker: "CONTACT",
    title: "Contact Us",
    company: "MIO MYUNG IN Optics CO.,LTD.",
    address: "733-5 Naesammi-dong, Osan-si, Gyeonggi-do, Korea"
  }
};

export const englishDetailPages: EnglishDetailPage[] = [
  {
    slug: "coating",
    kind: "product",
    koHref: "/products/coating",
    title: "COATING",
    image: "/assets/technology-coating-equipment.jpg",
    summary: "MIO OPTICS provides E-Beam vacuum deposition and optical thin-film coating to control transmission, reflection and wavelength characteristics for precision optical components.",
    features: ["E-Beam vacuum deposition", "Optical thin-film coating", "Spectral performance verification"],
    applications: ["Optical Mirror", "Filter", "Window", "Prism"],
    metadataTitle: "Optical Coating in Korea | MIO OPTICS",
    metadataDescription: "MIO OPTICS provides E-Beam optical coating, thin-film deposition and spectral performance verification for precision optical components in Korea."
  },
  {
    slug: "dicing",
    kind: "product",
    koHref: "/products/dicing",
    title: "DICING",
    image: "/assets/technology-dicing-equipment.jpg",
    summary: "MIO OPTICS performs precision glass dicing and size processing for optical and electronic component materials, with stable dimensional and visual inspection.",
    features: ["Precision glass dicing", "Dimensional control", "Cleaning and inspection"],
    applications: ["Glass dicing", "Custom size processing", "Visual and dimensional verification"],
    metadataTitle: "Glass Dicing in Korea | MIO OPTICS",
    metadataDescription: "MIO OPTICS offers precision glass dicing, dimensional control and inspection services for optical and electronic components in Korea."
  },
  {
    slug: "about",
    kind: "about",
    koHref: "/about/greeting",
    title: "Optical coating and precision glass processing partner in Korea.",
    lead: "MIO OPTICS specializes in E-Beam optical coating, glass dicing and precision optical component manufacturing.",
    body: [
      "MIO MYUNG IN Optics CO.,LTD. supports industrial customers that require reliable optical coating, dicing and component processing.",
      "Based in Osan-si, Gyeonggi-do, Korea, we operate precision process equipment for optical and electronic component manufacturing.",
      "We review customer specifications, process requirements and target optical performance, then support prototypes and production with a practical manufacturing approach.",
      "Our goal is to provide dependable quality and a responsive production partnership for customers in Korea and international markets."
    ],
    footer: "MIO MYUNG IN Optics CO.,LTD.",
    metadataTitle: "About MIO OPTICS | Optical Coating & Glass Dicing in Korea",
    metadataDescription: "Learn about MIO OPTICS, a Korea-based specialist in E-Beam optical coating, glass dicing and precision optical component manufacturing."
  }
];

export function getEnglishDetailPage(slug: string) {
  return englishDetailPages.find((page) => page.slug === slug);
}

// lib/data.ts

export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  sub?: NavSubItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Kurumsal",
    href: "/kurumsal",
    sub: [
      { label: "Temel Değerler", href: "/kurumsal/temel-degerler" },
      { label: "İdari Yapı", href: "/kurumsal/idari-yapi" },
      { label: "Politikalar", href: "/kurumsal/politikalar" },
      { label: "Arabuluculuk Komisyonu", href: "/kurumsal/arabuluculuk-komisyonu" },
      { label: "Belediye Meclisi", href: "/kurumsal/belediye-meclisi" },
      { label: "Belediye Encümeni", href: "/kurumsal/belediye-encumeni" },
      { label: "Eski Başkanlarımız", href: "/kurumsal/eski-baskanlarimiz" },
      { label: "Misyon / Vizyon", href: "/kurumsal/misyon-vizyon" },
      { label: "Etik Komisyonu", href: "/kurumsal/etik-komisyonu" },
      { label: "Banka Hesap Numaraları", href: "/kurumsal/banka-hesap-numaralari" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    sub: [
      { label: "İhale - Duyuru", href: "/hizmetler/ihale-duyuru" },
      { label: "İmar Değişiklikleri", href: "/hizmetler/imar-degisiklikleri" },
      { label: "18.Madde İmar Uygulaması", href: "/hizmetler/18-madde-imar-uygulamasi" },
      { label: "Kent Estetik Kurulu Kararları", href: "/hizmetler/kent-estetik-kurulu-kararlari" },
      { label: "Hal Fiyatları", href: "/hizmetler/hal-fiyatlari" },
      { label: "UKOME", href: "/hizmetler/ukome" },
      { label: "AYKOME", href: "/hizmetler/aykome" },
    ],
  },
  {
    label: "Güncel",
    href: "/guncel",
    sub: [
      { label: "Projeler", href: "/guncel/projeler" },
      { label: "Haberler", href: "/guncel/haberler" },
      { label: "Etkinlikler", href: "/guncel/etkinlikler" },
      { label: "Duyurular", href: "/guncel/duyurular" },
    ],
  },
  {
    label: "Yayınlar",
    href: "/yayinlar",
    sub: [
      { label: "E-Bülten", href: "/yayinlar/e-bulten" },
      { label: "Faaliyet Raporları", href: "/yayinlar/faaliyet-raporlari" },
      { label: "Sayıştay Raporları", href: "/yayinlar/sayistay-raporlari" },
      { label: "Performans Programları", href: "/yayinlar/performans-programlari" },
      { label: "Stratejik Plan", href: "/yayinlar/stratejik-plan" },
      { label: "Kurumsal Kimlik Kılavuzu", href: "/yayinlar/kurumsal-kimlik-kilavuzu" },
      { label: "Gelir Tarifeleri", href: "/yayinlar/gelir-tarifeleri" },
      { label: "Harcıraha Esas Ücret Tarifesi", href: "/yayinlar/harciraha-esas-ucret-tarifesi" },
      { label: "Belediye Logosu İndir", href: "/yayinlar/belediye-logosu-indir" },
    ],
  },
];


export const getNavItems = () => {
  return Object.keys(SITE_DATA).map((key) => ({
    label: SITE_DATA[key].label,
    href: SITE_DATA[key].href,
    sub: SITE_DATA[key].pages.map((p: any) => ({
      label: p.title,
      href: `/${key}/${p.slug}`
    }))
  }));
};


export const SITE_DATA: Record<string, any> = {
  kurumsal: {
    title: "Kurumsal",
    pages: [

     

      {
        slug: "temel-degerler",
        title: "Temel Değerler",
        content: "<p>Temel değerler içeriği...</p>",
      },
      {
      slug: "idari-yapi",
      title: "İdari Yapı",
      content: "", // İçeriği boş bırakıyoruz çünkü bileşen çağıracağız
      },
      {
        slug: "politikalar",
        title: "Politikalar",
        content: "<p>Politika içerikleri...</p>",
      },
      {
        slug: "arabuluculuk-komisyonu",
        title: "Arabuluculuk Komisyonu",
        content: "<p>Arabuluculuk komisyonu açıklaması...</p>",
      },
      {
        slug: "belediye-meclisi",
        title: "Belediye Meclisi",
        content: "<p>Belediye meclisi bilgileri...</p>",
      },
      {
        slug: "belediye-encumeni",
        title: "Belediye Encümeni",
        content: "<p>Encümen açıklaması...</p>",
      },
      {
        slug: "eski-baskanlarimiz",
        title: "Eski Başkanlarımız",
        content: "<p>Eski başkanlar listesi...</p>",
      },
      {
        slug: "misyon-vizyon",
        title: "Misyon ve Vizyon",
        content: "<p>Misyon ve vizyon metni...</p>",
      },
      {
        slug: "etik-komisyonu",
        title: "Etik Komisyonu",
        content: "<p>Etik komisyonu bilgileri...</p>",
      },
      {
        slug: "banka-hesap-numaralari",
        title: "Banka Hesap Numaraları",
        content:"",
      },
    ],
  },

  hizmetler: {
    title: "Hizmetler",
    pages: [
      {
        slug: "ihale-duyuru",
        title: "İhale ve Duyurular",
        content: "<p>İhale ve duyuru içerikleri...</p>",
      },
      {
        slug: "imar-degisiklikleri",
        title: "İmar Değişiklikleri",
        content: "<p>İmar değişiklikleri bilgisi...</p>",
      },
      {
        slug: "18-madde-imar-uygulamasi",
        title: "18. Madde İmar Uygulaması",
        content: "<p>18. madde açıklamaları...</p>",
      },
      {
        slug: "kent-estetik-kurulu-kararlari",
        title: "Kent Estetik Kurulu Kararları",
        content: "<p>Karar metinleri...</p>",
      },
      {
        slug: "hal-fiyatlari",
        title: "Hal Fiyatları",
        content: "<p>Güncel hal fiyatları...</p>",
      },
      {
        slug: "ukome",
        title: "UKOME",
        content: "<p>UKOME kararları...</p>",
      },
      {
        slug: "aykome",
        title: "AYKOME",
        content: "<p>AYKOME bilgileri...</p>",
      },
    ],
  },

  guncel: {
    title: "Güncel",
    pages: [
      {
        slug: "projeler",
        title: "Projeler",
        content: "<p>Devam eden projeler...</p>",
      },
      {
        slug: "haberler",
        title: "Haberler",
        content: "<p>Güncel haberler...</p>",
      },
      {
        slug: "etkinlikler",
        title: "Etkinlikler",
        content: "<p>Etkinlik listesi...</p>",
      },
      {
        slug: "duyurular",
        title: "Duyurular",
        content: "<p>Duyuru içerikleri...</p>",
      },
    ],
  },

  yayinlar: {
    title: "Yayınlar",
    pages: [
      {
        slug: "e-bulten",
        title: "E-Bülten",
        content: "<p>E-bülten arşivi...</p>",
      },
      {
        slug: "faaliyet-raporlari",
        title: "Faaliyet Raporları",
        content: "<p>Faaliyet raporları...</p>",
      },
      {
        slug: "sayistay-raporlari",
        title: "Sayıştay Raporları",
        content: "<p>Sayıştay raporları...</p>",
      },
      {
        slug: "performans-programlari",
        title: "Performans Programları",
        content: "<p>Performans programları...</p>",
      },
      {
        slug: "stratejik-plan",
        title: "Stratejik Plan",
        content: "<p>Stratejik plan dokümanı...</p>",
      },
      {
        slug: "kurumsal-kimlik-kilavuzu",
        title: "Kurumsal Kimlik Kılavuzu",
        content: "<p>Kurumsal kimlik rehberi...</p>",
      },
      {
        slug: "gelir-tarifeleri",
        title: "Gelir Tarifeleri",
        content: "<p>Gelir tarifeleri listesi...</p>",
      },
      {
        slug: "harciraha-esas-ucret-tarifesi",
        title: "Harcırah Ücret Tarifesi",
        content: "<p>Ücret tarifesi detayları...</p>",
      },
      {
        slug: "belediye-logosu-indir",
        title: "Belediye Logosu İndir",
        content: "<p>Logo indirme alanı...</p>",
      },
    ],
  },
};
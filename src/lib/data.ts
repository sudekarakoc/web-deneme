// lib/data.ts



export type NavSubItem = {
  label: string;
  href: string;
  group?: string; // Optional group property for categorization
  icon?: string;
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
      { label: "Başkanımız", href: "/kurumsal/baskan"},
      { label: "İdari Yapı", href: "/kurumsal/idari-yapi" },
      { label: "Politikalar", href: "/kurumsal/politikalar" },
      { label: "Arabuluculuk Komisyonu", href: "/kurumsal/arabuluculuk-komisyonu" },
      { label: "Belediye Meclisi", href: "/kurumsal/belediye-meclisi" },
      { label: "Belediye Encümeni", href: "/kurumsal/belediye-encumeni" },
      { label: "Eski Başkanlarımız", href: "/kurumsal/eski-baskanlarimiz" },
      { label: "Misyon / Vizyon", href: "/kurumsal/misyon-vizyon" },
      { label: "Etik Komisyonu", href: "/kurumsal/etik-komisyonu" },
      { label: "Banka Hesap Numaraları", href: "/kurumsal/banka-hesap-numaralari" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    sub: [
      // BELEDİYE HİZMETLERİ
      { label: "Borç Öde", href: "https://ebelediye.tekirdag.bel.tr", group: "Belediye Hizmetleri", icon: "wallet" },
      { label: "Su Faturası Öde", href: "https://www.teski.gov.tr/sube/index.aspx", group: "Belediye Hizmetleri", icon: "water" },
      { label: "İhale ve Doğrudan Teminler", href: "/hizmetler/ihale-duyuru", group: "Belediye Hizmetleri", icon: "document" },
      { label: "İmar Değişiklikleri", href: "/hizmetler/imar-degisiklikleri", group: "Belediye Hizmetleri", icon: "building" },
      { label: "18.Madde İmar Uygulaması", href: "/hizmetler/18-madde-imar-uygulamasi", group: "Belediye Hizmetleri", icon: "map" },
      { label: "Güncel Hal Fiyatları", href: "/hizmetler/hal-fiyatlari", group: "Belediye Hizmetleri", icon: "chart" },
      { label: "UKOME", href: "/hizmetler/ukome", group: "Belediye Hizmetleri", icon: "car" },
      { label: "AYKOME", href: "/hizmetler/aykome", group: "Belediye Hizmetleri", icon: "road" },
      { label: "Büyükşehir TV", href: "http://tv.tekirdag.bel.tr/", group: "Belediye Hizmetleri", icon: "tv" },
      { label: "Kent Rehberi", href: "https://harita.tekirdag.bel.tr/kentrehberi/", group: "Belediye Hizmetleri", icon: "compass" },
      { label: "E-Mezarlık", href: "https://emezarlik.tekirdag.bel.tr/", group: "Belediye Hizmetleri", icon: "flower" },
      { label: "e-Devlet Kapısı Birim Hizmet Sorgu", href: "https://www.turkiye.gov.tr/tekirdag-buyuksehir-belediyesi-hizmetleri-sorgulama", group: "Belediye Hizmetleri", icon: "globe" },
      
      // SOSYAL HİZMETLER
      { label: "Sosyal Yardım Portalı", href: "https://sosyal.tekirdag.bel.tr/", group: "Sosyal Hizmetler", icon: "heart" },
      { label: "Sahipsiz Hayvan Geçici Bakımevi Hizmetleri", href: "/hizmetler/sahipsiz-hayvan-gecici-bakimevi-hizmetleri", group: "Sosyal Hizmetler", icon: "paw" },
      { label: "Temek Kursları", href: "https://temek.tekirdag.bel.tr/", group: "Sosyal Hizmetler", icon: "academic" },
      { label: "Sosyal Yardım Başvuru Formları", href: "#e-islemler", group: "Sosyal Hizmetler", icon: "clipboard" },
      
      // KÜLTÜREL HİZMETLER
      { label: "Kent Estetik Kurulu Kararları", href: "/hizmetler/kent-estetik-kurulu-kararlari", group: "Kültürel Hizmetler", icon: "gavel" },
      { label: "Tekirdağ Şehir Tiyatrosu", href: "https://tiyatro.tekirdag.bel.tr/", group: "Kültürel Hizmetler", icon: "ticket" },
      
      // ATIK VE HAFRİYAT YÖNETİMİ
      { label: "Atık Yönetimi İlçe Bilgileri", href: "/hizmetler/atik-yonetimi-ilce-bilgileri", group: "Atık ve Hafriyat Yönetimi", icon: "trash" },
      { label: "Evsel Katı Atık Toplama ve Taşıma Ücreti Tarifesi", href: "/hizmetler/evsel-kati-atik-toplama-ve-tasima-ucreti-tarifesi", group: "Atık ve Hafriyat Yönetimi", icon: "currency" },
      { label: "Hafriyat Toprağı Sahaları", href: "/hizmetler/hafriyat-topragi-sahalari", group: "Atık ve Hafriyat Yönetimi", icon: "truck" },
      
      // AFET YÖNETİMİ
      { label: "Deprem Öncü İstasyonları", href: "/hizmetler/deprem-oncu-istasyonlari", group: "Afet Yönetimi", icon: "activity" },
      { label: "Afet Bilgilendirme Haritası", href: "https://harita.tekirdag.bel.tr/keos/?p=AFET", group: "Afet Yönetimi", icon: "map-pin" },
      { label: "Tekirdağ Afete Hazır", href: "https://afet.tekirdag.bel.tr/", group: "Afet Yönetimi", icon: "shield" },
      
      // İŞTİRAKLER
      { label: "TBB Personel A.Ş.", href: "https://www.tbbpersonel.com.tr/", group: "İştirakler", icon: "users" },
      { label: "Tekulaş A.Ş.", href: "https://www.tekulas.com.tr/", group: "İştirakler", icon: "bus" },
      { label: "Tekirdağ Gıda ve Tarım A.Ş.", href: "#", group: "İştirakler", icon: "leaf" },
      { label: "Tekdaş A.Ş.", href: "#", group: "İştirakler", icon: "home" },
      { label: "Tek Tur A.Ş.", href: "#", group: "İştirakler", icon: "camera" },
      { label: "Tekirdağ Birlik Yem A.Ş.", href: "#", group: "İştirakler", icon: "archive" },
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
  // lib/data.ts içerisine eklenecek/güncellenecek kısım
{
  label: "Yayınlar",
  href: "/yayinlar",
  sub: [
    { label: "E-Bülten", href: "/yayinlar/e-bulten", group: "Bülten & Tanıtım", icon: "newspaper" },
    
    { label: "Faaliyet Raporları", href: "/yayinlar/faaliyet-raporlari", group: "Kurumsal Raporlar", icon: "file-text" },
    { label: "Sayıştay Raporları", href: "/yayinlar/sayistay-raporlari", group: "Kurumsal Raporlar", icon: "scale" },
    { label: "Performans Programları", href: "/yayinlar/performans-programlari", group: "Kurumsal Raporlar", icon: "bar-chart-3" },
    { label: "Stratejik Plan", href: "/yayinlar/stratejik-plan", group: "Kurumsal Raporlar", icon: "target" },
    { label: "Kurumsal Mali Durum ve Beklentiler Raporu", href: "/yayinlar/mali-rapor", group: "Kurumsal Raporlar", icon: "pie-chart" },
    { label: "Kurumsal Kimlik Kılavuzu", href: "/yayinlar/kurumsal-kimlik-kilavuzu", group: "Kurumsal Raporlar", icon: "book-open" },
    { label: "Yerel Yönetimlerde Çocuk Hakları Stratejisi", href: "https://tekirdag.bel.tr/content/WebSource/file/bildirge/cocuk_haklari_bildirgesi.pdf", group: "Kurumsal Raporlar", icon: "smile" },

    { label: "Gelir Tarifeleri", href: "/yayinlar/gelir-tarifeleri", group: "Ücret Tarifeleri", icon: "receipt" },
    { label: "Katı Atık Toplama Taşıma Ücretleri", href: "/yayinlar/kati-atik-ucret", group: "Ücret Tarifeleri", icon: "trash-2" },
    { label: "İl İçi Toplu Taşıma Ücret Tarifesi", href: "https://www.tekirdag.bel.tr/content/WebSource/file/toplu_tasima_rayic_bedel_listeleri/il_ici_ucret_tarife.pdf", group: "Ücret Tarifeleri", icon: "bus-front" },
    { label: "Harcıraha Esas Ücret Tarifesi", href: "https://www.tekirdag.bel.tr/content/WebSource/file/toplu_tasima_rayic_bedel_listeleri/tekirdagdan_diger_illere.pdf", group: "Ücret Tarifeleri", icon: "plane" },

    { label: "Otopark Yönetmeliği", href: "https://www.tekirdag.bel.tr/content/WebSource/file/otopark_yonetmeligi/otopark_yonetmeligi.pdf", group: "Yönetmelikler & Eylem Planları", icon: "parking-square" },
    { label: "Mevzuat", href: "/yayinlar/mevzuat", group: "Yönetmelikler & Eylem Planları", icon: "gavel" },
    { label: "Kamu Hizmet Envanteri", href: "https://www.tekirdag.bel.tr/content/WebSource/file/kamu_hizmet_envanteri_ve_hizmet_standartlari_tablosu/kamu_hizmet_envanteri_ve_hizmet_standartlari_tablosu.pdf", group: "Yönetmelikler & Eylem Planları", icon: "database" },
    { label: "İç Kontrol Eylem Planı", href: "https://www.tekirdag.bel.tr/content/WebSource/file/eylem_planlari/2023_2024_ic_kontrol_eylem_plani.pdf", group: "Yönetmelikler & Eylem Planları", icon: "check-square" },
    { label: "Tıbbi Atık Yönetim Planı", href: "https://www.tekirdag.bel.tr/content/WebSource/file/tibbi_atik_yonetim_plani/tibbi_atik_yonetim_plani.pdf", group: "Yönetmelikler & Eylem Planları", icon: "microscope" },
  ],
},
];


export type SiteDataPage = {
  slug: string;
  title: string;
  content: string;
  href?: string;
  hideInMenu?: boolean;
};

export type SiteDataEntry = {
  title: string;
  pages: SiteDataPage[];
};

export const getNavItems = () => {
  return Object.keys(SITE_DATA).map((key) => ({
    label: SITE_DATA[key].title, // SITE_DATA'da title olarak geçiyor
    href: `/${key}`, // URL'yi anahtardan (key) üretiyoruz
    sub: SITE_DATA[key].pages
      .filter((p: SiteDataPage) => !p.hideInMenu)
      .map((p: SiteDataPage) => ({
        label: p.title,
        href: p.href || `/${key}/${p.slug}`
      }))
  }));
};


export const SITE_DATA: Record<string, SiteDataEntry> = {
  kurumsal: {
    title: "Kurumsal",
    pages: [
      {
        slug: "temel-degerler",
        title: "Temel Değerler",
        content: "<p>Temel değerler içeriği...</p>",
      },
      {
        slug: "baskan",
        title: "Başkanımız",
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
      {
        slug: "iletisim",
        title: "İletişim",
        content: "",
        href: "/iletisim",
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
      {
        slug: "atik-yonetimi-ilce-bilgileri",
        title: "Atık Yönetimi İlçe Bilgileri",
        content: "<p>İlçe atık yönetimi detayları...</p>",
        hideInMenu: true,
      },
      {
        slug: "evsel-kati-atik-toplama-ve-tasima-ucreti-tarifesi",
        title: "Evsel Katı Atık Toplama ve Taşıma Ücreti Tarifesi",
        content: "<p>Evsel katı atık tarifeleri...</p>",
        hideInMenu: true,
      },
      {
        slug: "hafriyat-topragi-sahalari",
        title: "Hafriyat Toprağı Sahaları",
        content: "",
        hideInMenu: true,
      },
      {
        slug: "buyuksehir-tv",
        title: "Büyükşehir TV",
        content: "",
        href: "http://tv.tekirdag.bel.tr/",
        hideInMenu: true,
      },
      {
        slug: "sahipsiz-hayvan-gecici-bakimevi-hizmetleri",
        title: "Sahipsiz Hayvan Geçici Bakımevi Hizmetleri",
        content: "<p>Sahipsiz hayvan geçici bakımevi ve rehabilitasyon hizmetleri...</p>",
        hideInMenu: true,
      },
      {
        slug: "tekirdag-gida-ve-tarim-as",
        title: "Tekirdağ Gıda ve Tarım A.Ş.",
        content: "",
        href: "#",
        hideInMenu: true,
      },
      {
        slug: "tekdas-as",
        title: "Tekdaş A.Ş.",
        content: "",
        href: "#",
        hideInMenu: true,
      },
      {
        slug: "tektur-as",
        title: "Tek Tur A.Ş.",
        content: "",
        href: "#",
        hideInMenu: true,
      },
      {
        slug: "tekirdag-birlik-yem-as",
        title: "Tekirdağ Birlik Yem A.Ş.",
        content: "",
        href: "#",
        hideInMenu: true,
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
        slug: "kati-atik-ucret",
        title: "Katı Atık Ücret Tarifeleri",
        content: "<p>Katı atık toplama ve taşıma ücret tarifeleri...</p>",
        hideInMenu: true,
      },
      {
        slug: "harciraha-esas-ucret-tarifesi",
        title: "Harcıraha Esas Ücret Tarifesi",
        content: "<p>Ücret tarifesi detayları...</p>",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/toplu_tasima_rayic_bedel_listeleri/tekirdagdan_diger_illere.pdf",
      },
      {
        slug: "belediye-logosu-indir",
        title: "Belediye Logosu İndir",
        content: "<p>Logo indirme alanı...</p>",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/dokuman/1418043225_tekirdag_buyuksehir_belediyesi_logo_-_yazl.pdf",
      },
      {
        slug: "mevzuat",
        title: "Mevzuat",
        content: "<p>Mevzuat arşivi ve bilgi sistemleri bağlantıları...</p>",
        hideInMenu: true,
      },
      {
        slug: "cocuk-haklari",
        title: "Yerel Yönetimlerde Çocuk Hakları Stratejisi",
        content: "",
        href: "https://tekirdag.bel.tr/content/WebSource/file/bildirge/cocuk_haklari_bildirgesi.pdf",
        hideInMenu: true,
      },
      {
        slug: "toplu-tasima-ucret",
        title: "İl İçi Toplu Taşıma Ücret Tarifesi",
        content: "",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/toplu_tasima_rayic_bedel_listeleri/il_ici_ucret_tarife.pdf",
        hideInMenu: true,
      },
      {
        slug: "otopark-yonetmelik",
        title: "Otopark Yönetmeliği",
        content: "",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/otopark_yonetmeligi/otopark_yonetmeligi.pdf",
        hideInMenu: true,
      },
      {
        slug: "hizmet-envanteri",
        title: "Kamu Hizmet Envanteri ve Hizmet Standartları Tablosu",
        content: "",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/kamu_hizmet_envanteri_ve_hizmet_standartlari_tablosu/kamu_hizmet_envanteri_ve_hizmet_standartlari_tablosu.pdf",
        hideInMenu: true,
      },
      {
        slug: "ic-kontrol-plan",
        title: "İç Kontrol Eylem Planı",
        content: "",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/eylem_planlari/2023_2024_ic_kontrol_eylem_plani.pdf",
        hideInMenu: true,
      },
      {
        slug: "tibbi-atik-plan",
        title: "Tıbbi Atık Yönetim Planı",
        content: "",
        href: "https://www.tekirdag.bel.tr/content/WebSource/file/tibbi_atik_yonetim_plani/tibbi_atik_yonetim_plani.pdf",
        hideInMenu: true,
      },
      {
        slug: "mali-rapor",
        title: "Kurumsal Mali Durum ve Beklentiler Raporu",
        content: "",
        hideInMenu: true,
      },
    ],
  },
};
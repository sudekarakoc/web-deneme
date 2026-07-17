export interface TarifeDosyasi {
  title: string;
  url: string;
}

export interface YilTarifesi {
  year: number;
  subtitle?: string;
  files: TarifeDosyasi[];
}

export const katiAtikTarifeleri: YilTarifesi[] = [
  {
    year: 2026,
    subtitle: "2026 Yılı Evsel Katı Atık Ücretleri",
    files: [
      {
        title: "2026 Yılı Evsel Katı Atık Ücretleri (Genel)",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026_tarife.pdf"
      },
      {
        title: "Süleymanpaşa",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/suleymanpasa.pdf"
      },
      {
        title: "Muratlı",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/muratli.pdf"
      },
      {
        title: "Malkara",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/malkara.pdf"
      },
      {
        title: "Saray",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/saray.pdf"
      },
      {
        title: "Ergene",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/ergene.pdf"
      },
      {
        title: "Hayrabolu",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/hayrabolu.pdf"
      },
      {
        title: "Çerkezköy",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/cerkezkoy.pdf"
      },
      {
        title: "Şarköy",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/sarkoy.pdf"
      },
      {
        title: "Çorlu",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/corlu.pdf"
      },
      {
        title: "Kapaklı",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/kapakli.pdf"
      },
      {
        title: "Marmaraereğlisi",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2026/marmaraereglisi.pdf"
      }
    ]
  },
  {
    year: 2025,
    subtitle: "2025 Yılı Evsel Katı Atık Ücretleri (İşyerleri)",
    files: [
      {
        title: "Süleymanpaşa",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/suleymanpasa.pdf"
      },
      {
        title: "Muratlı",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/muratli.pdf"
      },
      {
        title: "Malkara",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/malkara.pdf"
      },
      {
        title: "Saray",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/saray.pdf"
      },
      {
        title: "Ergene",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/ergene.pdf"
      },
      {
        title: "Hayrabolu",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/hayrabolu.pdf"
      },
      {
        title: "Çerkezköy",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/cerkezkoy.pdf"
      },
      {
        title: "Şarköy",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/sarkoy.pdf"
      },
      {
        title: "Çorlu",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/corlu.pdf"
      },
      {
        title: "Kapaklı",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/kapakli.pdf"
      },
      {
        title: "Marmaraereğlisi",
        url: "https://www.tekirdag.bel.tr/content/WebSource/file/kati_atik_ucret_tarifeleri/2025/marmaraereglisi.pdf"
      }
    ]
  }
];

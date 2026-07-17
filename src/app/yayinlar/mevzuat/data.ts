export interface MevzuatDosyasi {
  title: string;
  url: string;
  type: 'link' | 'excel' | 'ppt';
}

export const mevzuatListesi: MevzuatDosyasi[] = [
  {
    title: "Belediye Mevzuat Mali İdareler Gnl. Mdr.",
    url: "http://www.migm.gov.tr/MevzuatKanunlar.aspx?KanunId=1",
    type: "link"
  },
  {
    title: "Mevzuat Bilgi Sistemi",
    url: "http://www.mevzuat.gov.tr/",
    type: "link"
  },
  {
    title: "Resmi Gazete",
    url: "http://www.resmigazete.gov.tr/default.aspx",
    type: "link"
  },
  {
    title: "Resmi Yazışma Kuralları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/mevzuat/resmi_yazisma_kurallari.ppt",
    type: "ppt"
  },
  {
    title: "Standart Dosya Planı",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/mevzuat/standart_dosya_plani.xlsx",
    type: "excel"
  },
  {
    title: "Standart Dosya Planı Eğitim Semineri",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/mevzuat/standart_dosya_plani_egitim_semineri.ppt",
    type: "ppt"
  }
];

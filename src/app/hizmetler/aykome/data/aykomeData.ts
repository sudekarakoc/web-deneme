export interface AykomeDocument {
  id: string;
  title: string;
  url: string;
  type: "pdf" | "image";
}

export const aykomeDocuments: AykomeDocument[] = [
  {
    id: "d1",
    title: "Tekirdağ Büyükşehir Belediyesi Aykome Çalışma Yönetmeliği",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/2025_09_19_aykome_calisma_yonetmeligi.pdf",
    type: "pdf",
  },
  {
    id: "d2",
    title: "2026 Yılı Müeyyide Bedelleri Cetveli",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/6864128_EK-8_Mueyye_Bedel_Cetveli.pdf",
    type: "pdf",
  },
  {
    id: "d3",
    title: "2026 Aykome Alan Tahrip Tutarları ve Keşif Bedeli",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/2026_aykome_bedelleri.jpg",
    type: "image",
  },
  {
    id: "d4",
    title: "1. 2. 3. 4. Aykome Üst Kurul Kararları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/ust_kurul_kararlari.pdf",
    type: "pdf",
  },
  {
    id: "d5",
    title: "5. 6. 7. 8. 9. Aykome Üst Kurul Kararları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/ust_kurul_kararlari_devami.pdf",
    type: "pdf",
  },
  {
    id: "d6",
    title: "10. Aykome Üst Kurul Kararları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/onuncu_aykome_ust_kararlari.pdf",
    type: "pdf",
  },
  {
    id: "d7",
    title: "11. Aykome Üst Kurul Kararları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/onbirinci_aykome_ust_kararlari.pdf",
    type: "pdf",
  },
  {
    id: "d8",
    title: "12. Aykome Üst Kurul Kararları",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/aykome/onikinci_aykome_ust_kararlari.pdf",
    type: "pdf",
  }
];

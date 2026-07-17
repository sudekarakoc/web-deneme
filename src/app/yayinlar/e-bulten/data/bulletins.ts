export interface Bulletin {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  pdfUrl: string;
}

const BASE = "https://www.tekirdag.bel.tr/content/WebSource/file/haber_bultenleri";

export const bulletins: Bulletin[] = [
  {
    id: 26,
    title: "E-Bülten Sayı 26",
    date: "(1 - 30 Haziran 2026)",
    imageUrl: `${BASE}/e_bulten_26.png`,
    pdfUrl: `${BASE}/e_bulten_26.pdf`,
  },
  {
    id: 25,
    title: "E-Bülten Sayı 25",
    date: "(1 - 31 Mayıs 2026)",
    imageUrl: `${BASE}/e_bulten_25.png`,
    pdfUrl: `${BASE}/e_bulten_25.pdf`,
  },
  {
    id: 24,
    title: "E-Bülten Sayı 24",
    date: "(1 - 30 Nisan 2026)",
    imageUrl: `${BASE}/e_bulten_24.png`,
    pdfUrl: `${BASE}/e_bulten_24.pdf`,
  },
  {
    id: 23,
    title: "E-Bülten Sayı 23",
    date: "(1 - 31 Mart 2026)",
    imageUrl: `${BASE}/e_bulten_23.png`,
    pdfUrl: `${BASE}/e_bulten_23.pdf`,
  },
  {
    id: 22,
    title: "E-Bülten Sayı 22",
    date: "(1 - 28 Şubat 2026)",
    imageUrl: `${BASE}/e_bulten_22.png`,
    pdfUrl: `${BASE}/e_bulten_22.pdf`,
  },
  {
    id: 21,
    title: "E-Bülten Sayı 21",
    date: "(1 - 31 Ocak 2026)",
    imageUrl: `${BASE}/e_bulten_21.png`,
    pdfUrl: `${BASE}/e_bulten_21.pdf`,
  },
  {
    id: 20,
    title: "E-Bülten Sayı 20",
    date: "Aralık 2025 Özel Sayı",
    imageUrl: `${BASE}/e_bulten_20.png`,
    pdfUrl: `${BASE}/e_bulten_20.pdf`,
  },
  {
    id: 19,
    title: "E-Bülten Sayı 19",
    date: "(1 - 31 Kasım 2025)",
    imageUrl: `${BASE}/e_bulten_19.png`,
    pdfUrl: `${BASE}/e_bulten_19.pdf`,
  },
  {
    id: 18,
    title: "E-Bülten Sayı 18",
    date: "(1 - 31 Ekim 2025)",
    imageUrl: `${BASE}/e_bulten_18.png`,
    pdfUrl: `${BASE}/e_bulten_18.pdf`,
  },
  {
    id: 17,
    title: "E-Bülten Sayı 17",
    date: "(1 - 30 Eylül 2025)",
    imageUrl: `${BASE}/e_bulten_17.png`,
    pdfUrl: `${BASE}/e_bulten_17.pdf`,
  },
  {
    id: 16,
    title: "E-Bülten Sayı 16",
    date: "(1 - 31 Ağustos 2025)",
    imageUrl: `${BASE}/e_bulten_16.png`,
    pdfUrl: `${BASE}/e_bulten_16.pdf`,
  },
  {
    id: 15,
    title: "E-Bülten Sayı 15",
    date: "(1 - 31 Temmuz 2025)",
    imageUrl: `${BASE}/e_bulten_15.png`,
    pdfUrl: `${BASE}/e_bulten_15.pdf`,
  },
  {
    id: 14,
    title: "E-Bülten Sayı 14",
    date: "(1 - 30 Haziran 2025)",
    imageUrl: `${BASE}/e_bulten_14.png`,
    pdfUrl: `${BASE}/e_bulten_14.pdf`,
  },
  {
    id: 13,
    title: "E-Bülten Sayı 13",
    date: "(28 Ocak - 3 Şubat 2025)",
    imageUrl: `${BASE}/e_bulten_13.png`,
    pdfUrl: `${BASE}/e_bulten_13.pdf`,
  },
  {
    id: 12,
    title: "E-Bülten Sayı 12",
    date: "(21 - 27 Ocak 2025)",
    imageUrl: `${BASE}/e_bulten_12.png`,
    pdfUrl: `${BASE}/e_bulten_12.pdf`,
  },
  {
    id: 11,
    title: "E-Bülten Sayı 11",
    date: "(14 - 20 Ocak 2025)",
    imageUrl: `${BASE}/e_bulten_11.png`,
    pdfUrl: `${BASE}/e_bulten_11.pdf`,
  },
  {
    id: 10,
    title: "E-Bülten Sayı 10",
    date: "(7 - 13 Ocak 2025)",
    imageUrl: `${BASE}/e_bulten_10.png`,
    pdfUrl: `${BASE}/e_bulten_10.pdf`,
  },
  {
    id: 9,
    title: "E-Bülten Sayı 9",
    date: "(31 Aralık 2024 - 6 Ocak 2025)",
    imageUrl: `${BASE}/e_bulten_9.png`,
    pdfUrl: `${BASE}/e_bulten_9.pdf`,
  },
  {
    id: 8,
    title: "E-Bülten Sayı 8",
    date: "Özel Sayı",
    imageUrl: `${BASE}/e_bulten_8.png`,
    pdfUrl: `${BASE}/e_bulten_8.pdf`,
  },
  {
    id: 7,
    title: "E-Bülten Sayı 7",
    date: "(17 Aralık - 23 Aralık 2024)",
    imageUrl: `${BASE}/e_bulten_7.png`,
    pdfUrl: `${BASE}/e_bulten_7.pdf`,
  },
  {
    id: 6,
    title: "E-Bülten Sayı 6",
    date: "(10 Aralık - 16 Aralık 2024)",
    imageUrl: `${BASE}/e_bulten_6.png`,
    pdfUrl: `${BASE}/e_bulten_6.pdf`,
  },
  {
    id: 5,
    title: "E-Bülten Sayı 5",
    date: "(3 - 9 Aralık 2024)",
    imageUrl: `${BASE}/e_bulten_5.png`,
    pdfUrl: `${BASE}/e_bulten_5.pdf`,
  },
  {
    id: 4,
    title: "E-Bülten Sayı 4",
    date: "(26 Kasım - 2 Aralık 2024)",
    imageUrl: `${BASE}/e_bulten_4.png`,
    pdfUrl: `${BASE}/e_bulten_4.pdf`,
  },
  {
    id: 3,
    title: "E-Bülten Sayı 3",
    date: "(19 - 25 Kasım 2024)",
    imageUrl: `${BASE}/e_bulten_3.png`,
    pdfUrl: `${BASE}/e_bulten_3.pdf`,
  },
  {
    id: 2,
    title: "E-Bülten Sayı 2",
    date: "(11 - 18 Kasım 2024)",
    imageUrl: `${BASE}/e_bulten_2.png`,
    pdfUrl: `${BASE}/e_bulten_2.pdf`,
  },
  {
    id: 1,
    title: "E-Bülten Sayı 1",
    date: "(4 - 11 Kasım 2024)",
    imageUrl: `${BASE}/e_bulten_1.png`,
    pdfUrl: `${BASE}/e_bulten_1.pdf`,
  },
];

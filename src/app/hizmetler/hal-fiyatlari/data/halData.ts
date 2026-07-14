import { HalListe } from "../types/hal";

export const mockHalData: HalListe[] = [
  {
    id: "h1",
    halId: "suleymanpasa",
    tarih: "2026-07-12",
    displayTarih: "12.07.2026",
    urunler: [
      { id: "u1", urunAdi: "Domates (Salkım)", birim: "Kg", enDusuk: 15, enYuksek: 22 },
      { id: "u2", urunAdi: "Salatalık (Sera)", birim: "Kg", enDusuk: 10, enYuksek: 15 },
      { id: "u3", urunAdi: "Biber (Çarliston)", birim: "Kg", enDusuk: 20, enYuksek: 28 },
      { id: "u4", urunAdi: "Patlıcan (Kemer)", birim: "Kg", enDusuk: 18, enYuksek: 25 },
      { id: "u5", urunAdi: "Karpuz", birim: "Kg", enDusuk: 8, enYuksek: 12 },
      { id: "u6", urunAdi: "Kavun", birim: "Kg", enDusuk: 15, enYuksek: 20 },
    ],
  },
  {
    id: "h2",
    halId: "suleymanpasa",
    tarih: "2026-07-11",
    displayTarih: "11.07.2026",
    urunler: [
      { id: "u1", urunAdi: "Domates (Salkım)", birim: "Kg", enDusuk: 14, enYuksek: 20 },
      { id: "u2", urunAdi: "Salatalık (Sera)", birim: "Kg", enDusuk: 9, enYuksek: 14 },
      { id: "u3", urunAdi: "Biber (Çarliston)", birim: "Kg", enDusuk: 19, enYuksek: 26 },
      { id: "u5", urunAdi: "Karpuz", birim: "Kg", enDusuk: 7, enYuksek: 11 },
    ],
  },
  {
    id: "h3",
    halId: "corlu",
    tarih: "2026-07-12",
    displayTarih: "12.07.2026",
    urunler: [
      { id: "u1", urunAdi: "Domates (Salkım)", birim: "Kg", enDusuk: 16, enYuksek: 24 },
      { id: "u2", urunAdi: "Salatalık (Sera)", birim: "Kg", enDusuk: 11, enYuksek: 16 },
      { id: "u3", urunAdi: "Biber (Sivri)", birim: "Kg", enDusuk: 22, enYuksek: 30 },
      { id: "u7", urunAdi: "Limon", birim: "Kg", enDusuk: 30, enYuksek: 40 },
      { id: "u8", urunAdi: "Şeftali", birim: "Kg", enDusuk: 25, enYuksek: 35 },
    ],
  },
  {
    id: "h4",
    halId: "corlu",
    tarih: "2026-07-10",
    displayTarih: "10.07.2026",
    urunler: [
      { id: "u1", urunAdi: "Domates (Salkım)", birim: "Kg", enDusuk: 15, enYuksek: 22 },
      { id: "u2", urunAdi: "Salatalık (Sera)", birim: "Kg", enDusuk: 10, enYuksek: 15 },
      { id: "u8", urunAdi: "Şeftali", birim: "Kg", enDusuk: 24, enYuksek: 33 },
    ],
  },
];

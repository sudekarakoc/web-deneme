export interface Tender {
  id: number;
  baslik: string;
  tarih: string;
  saat: string;
  birim: string;
  durum: "Devam Ediyor" | "Yaklaşıyor" | "Sonuçlandı";
  usul: string;
  usulTip: string;
  kayitNo: string;
}
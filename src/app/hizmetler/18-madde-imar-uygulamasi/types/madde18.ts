export interface Madde18Document {
  baslik: string;
  url: string;
}

export interface Madde18Application {
  id: number;
  dosyaNo: string;
  ada: string;
  parselNo: string;
  ilce: string;
  mahalle: string;
  konu: string;
  encumenKararTarihi: string;
  encumenKararNo: string;
  askiBaslangicTarihi: string;
  askiBitisTarihi: string;
  yuzdeDOP: number; // Düzenleme Ortaklık Payı (%)
  sorumluMuhendis: string;
  durum: "Devam Ediyor" | "Tamamlandı" | "Askıda" | "İptal";
  aciklama: string;
  dokumanlar?: Madde18Document[];
}

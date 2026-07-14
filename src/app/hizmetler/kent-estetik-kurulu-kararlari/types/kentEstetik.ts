export interface EstetikDocument {
  id: string;
  baslik: string;
  url: string;
  tarih?: string;
  kategori: "Yönetmelik" | "Karar";
}

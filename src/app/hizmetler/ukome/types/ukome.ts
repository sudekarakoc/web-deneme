export interface UkomeDocument {
  id: string;
  baslik: string;
  url: string;
}

export interface UkomeMeeting {
  id: string;
  tarih: string; // YYYY-MM-DD
  displayTarih: string; // 12/03/2026 Tarihli Ukome Toplantısı
  yil: string;
  dokumanlar: UkomeDocument[];
}

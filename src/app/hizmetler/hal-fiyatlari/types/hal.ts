export interface UrunFiyat {
  id: string;
  urunAdi: string;
  birim: string; // Kg, Adet, Kasa vb.
  enDusuk: number;
  enYuksek: number;
}

export interface HalListe {
  id: string;
  halId: "suleymanpasa" | "corlu";
  tarih: string; // YYYY-MM-DD format for easier filtering
  displayTarih: string; // 12.07.2026 format
  urunler: UrunFiyat[];
}

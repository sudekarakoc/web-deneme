export interface ImarChangeDocument {
  baslik: string;
  url: string;
}

export interface ImarChange {
  id: number;
  parselNo: string;
  ada: string;
  ilce: string;
  mahalle: string;
  oncekiDurum: string;
  yeniDurum: string;
  karar: string;
  kararTarih: string;
  yururlukTarih: string;
  durum: "Yürürlükte" | "Askıda" | "İptal";
  planTuru: "1/1000 UİP" | "1/5000 NİP" | "Revizyon" | "İlave";
  aciklama: string;
  dokumanlar?: ImarChangeDocument[];
}

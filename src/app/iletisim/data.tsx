import React from "react";

export const mainContacts = [
  {
    label: "Ana Hizmet Binası",
    value: "Atatürk Mah. 57. Alay Cad. No:6 Süleymanpaşa",
    href: "https://maps.app.goo.gl/x5roDfUBrmrnrz1n7",
    color: "#0F2D52",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Çağrı Merkezi",
    value: "0 850 459 59 59",
    href: "tel:+908504595959",
    color: "#009FE3",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Destek",
    value: "0 543 870 59 59",
    href: "https://wa.me/+905438705959",
    color: "#73B646",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Kurumsal E-Posta",
    value: "tbb@tekirdag.bel.tr",
    href: "mailto:tbb@tekirdag.bel.tr",
    color: "#1B4F8A",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Resmi KEP Adresi",
    value: "tekirdag.bbb@hs01.kep.tr",
    href: "mailto:tekirdag.bbb@hs01.kep.tr",
    color: "#0F2D52",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export const otherPhones = [
  { 
    label: "Genel Evrak Kayıt", 
    value: "Faks: 0 282 258 62 21", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-8.25 0h.008v.008H10.5V12z" />
      </svg>
    )
  },
  { 
    label: "Zabıta Dairesi Bşk.", 
    value: "Faks: 0 282 258 62 21", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  { 
    label: "İtfaiye Dairesi Bşk.", 
    value: "Faks: 0 282 258 62 05", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    )
  },
  { 
    label: "Mezbahalar Ortak Hattı", 
    value: "0 850 459 33 88", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    )
  },
  { 
    label: "Kadın Danışma Merkezleri", 
    value: "0 850 459 34 34", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
];

export const locations = [
  {
    name: "Belediye Ana Hizmet Binası",
    address: "Atatürk Mahallesi, 57. Alay Caddesi No:6 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/40.988185621,27.533992167",
  },
  {
    name: "Fen İşleri Hizmet Binası",
    address: "İstiklal Mahallesi, Çağlar Sokak No:12 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/41.00861013600002,27.51950087799997",
  },
  {
    name: "Park Bahçeler Hizmet Binası",
    address: "100. Yıl Mahallesi, Atatürk Bulvarı No:120 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/40.96776270700002,27.49952949499999",
  },
  {
    name: "İtfaiye Hizmet Binası",
    address: "100. Yıl Mahallesi, Uğur Mumcu Caddesi No:15/1 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/40.972721842,27.49401516199998",
  },
  {
    name: "Süleymanpaşa Otogar",
    address: "İstiklal Mahallesi, Mustafa Faik Öztrak Caddesi No:1 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/41.000645086,27.509214314",
  },
  {
    name: "Süleymanpaşa Meyve Sebze Hali",
    address: "Karadeniz Mahallesi, Trabzon Caddesi No:17/7 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/40.98578544700001,27.48313913999999",
  },
  {
    name: "Süleymanpaşa Kadın Danışma Merkezi",
    address: "Ortacami Mahallesi, Yunus Bey Caddesi No:14 Süleymanpaşa/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/40.97977509,27.515799264",
  },
  {
    name: "Çorlu Kadın Danışma Merkezi",
    address: "Muhittin Mahallesi, Salih Omurtak Caddesi No:51 Çorlu/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/41.154651057,27.818785119",
  },
  {
    name: "Çerkezköy Atatürk Kültür Merkezi",
    address: "İstasyon Mahallesi, Ahenk Sokak No:2 Çerkezköy/TEKİRDAĞ",
    mapUrl: "https://www.google.com/maps/place/41.278004376,27.997404842",
  },
];

export interface OrgNode {
  id: string | number;
  title: string;
  layout?: 'horizontal' | 'vertical';
  children?: OrgNode[];
}

export const IDARI_YAPI_DATA: OrgNode[] = [
  {
    id: 'baskan',
    title: "Dr. Candan YÜCEER - Tekirdağ Büyükşehir Belediye Başkanı",
    layout: 'vertical',
    children: [
      { id: 'meclis', title: "Tekirdağ Büyükşehir Belediye Meclisi" },
      { id: 'encumen', title: "Tekirdağ Büyükşehir Belediye Encümen Üyeleri" },
      { id: 'teski', title: "Teski Genel Müdürlüğü" },
      { id: 'rehberlik', title: "Rehberlik ve Teftiş Kurulu Başkanlığı" },
      { id: 'ozel-kalem', title: "Özel Kalem Müdürlüğü" },
      { id: 'hukuk', title: "1. Hukuk Müşavirliği" },
      { id: 'ic-denetim', title: "İç Denetim Birimi Başkanlığı" },
      {
        id: 'genel-sekreter',
        title: "Doç. Dr. Ergül HALİSÇELİK - Genel Sekreter V.",
        layout: 'vertical',
        children: [
          // --- DOĞRUDAN GENEL SEKRETERE BAĞLI DAİRE BAŞKANLIKLARI ---
          {
            id: 'basin-yayin',
            title: "Basın, Yayın ve Halkla İlişkiler Dairesi Başkanlığı",
            children: [
              { id: 'basin-1', title: "Balkan Türkleri ve Dış İlişkiler Şube Müdürlüğü" },
              { id: 'basin-2', title: "Basın Yayın Şube Müdürlüğü" },
              { id: 'basin-3', title: "Halkla İlişkiler Şube Müdürlüğü" },
              { id: 'basin-4', title: "Protokol Şube Müdürlüğü" },
            ]
          },
          {
            id: 'bilgi-islem',
            title: "Bilgi İşlem Dairesi Başkanlığı",
            children: [
              { id: 'bilgi-1', title: "Bilgi Teknolojileri Şube Müdürlüğü" },
              { id: 'bilgi-2', title: "Coğrafi Bilgi Sistemleri Şube Müdürlüğü" },
              { id: 'bilgi-3', title: "Elektronik Sistemler Şube Müdürlüğü" },
              { id: 'bilgi-4', title: "Yönetim Bilgi Sistemleri Şube Müdürlüğü" },
            ]
          },
          {
            id: 'ik-egitim',
            title: "İnsan Kaynakları ve Eğitim Dairesi Başkanlığı",
            children: [
              { id: 'ik-1', title: "Bordro ve Tahakkuk Şube Müdürlüğü" },
              { id: 'ik-2', title: "Eğitim Şube Müdürlüğü" },
              { id: 'ik-3', title: "İnsan Kaynakları Şube Müdürlüğü" },
              { id: 'ik-4', title: "İş Sağlığı ve Güvenliği Şube Müdürlüğü" },
              { id: 'ik-5', title: "İşçi ve İşveren İlişkileri Şube Müdürlüğü" },
            ]
          },
          {
            id: 'isletme',
            title: "İşletme ve İştirakler Dairesi Başkanlığı",
            children: [
              { id: 'isletme-1', title: "İştirakler Şube Müdürlüğü" },
              { id: 'isletme-2', title: "Kaynak Geliştirme ve İşletmeler Şube Müdürlüğü" },
            ]
          },
          {
            id: 'mali-hizmetler',
            title: "Mali Hizmetler Dairesi Başkanlığı",
            children: [
              { id: 'mali-1', title: "Bütçe ve Stratejik Yönetim Şube Müdürlüğü" },
              { id: 'mali-2', title: "Gelir Şube Müdürlüğü" },
              { id: 'mali-3', title: "Mali Kontrol Şube Müdürlüğü" },
              { id: 'mali-4', title: "Muhasebe Şube Müdürlüğü" },
            ]
          },
          {
            id: 'satin-alma',
            title: "Satın Alma Dairesi Başkanlığı",
            children: [
              { id: 'satin-1', title: "İhale İşleri Şube Müdürlüğü" },
              { id: 'satin-2', title: "Satın Alma Şube Müdürlüğü" },
              { id: 'satin-3', title: "Taşınır Mal İşlemleri Şube Müdürlüğü" },
            ]
          },
          {
            id: 'yazi-isleri',
            title: "Yazı İşleri ve Kararlar Dairesi Başkanlığı",
            children: [
              { id: 'yazi-1', title: "Arşiv Şube Müdürlüğü" },
              { id: 'yazi-2', title: "Encümen Şube Müdürlüğü" },
              { id: 'yazi-3', title: "Meclis Şube Müdürlüğü" },
              { id: 'yazi-4', title: "Yazı İşleri Şube Müdürlüğü" },
            ]
          },
          
          // --- GENEL SEKRETER YARDIMCILARI (YATAY DİZİLİM İÇİN GRUP) ---
          {
            id: 'gsy-grup',
            title: "Genel Sekreter Yardımcılıkları",
            layout: 'horizontal', // Burası altındaki 4 yardımcıyı yan yana dizecek!
            children: [
              // YARDIMCI 1
              {
                id: 'gsy-1',
                title: "Genel Sekreter Yardımcılığı - 1 (Dr. Rıza Evren KILCI)",
                layout: 'vertical',
                children: [
                  {
                    id: 'afet',
                    title: "Afet İşleri ve Risk Yönetimi Dairesi Başkanlığı",
                    children: [
                      { id: 'afet-1', title: "Afet Yönetimi Şube Müdürlüğü" },
                      { id: 'afet-2', title: "Deprem ve Zemin İnceleme Şube Müdürlüğü" },
                      { id: 'afet-3', title: "Kentsel Dönüşüm Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'emlak',
                    title: "Emlak ve İstimlak Dairesi Başkanlığı",
                    children: [
                      { id: 'emlak-1', title: "Emlak ve Emlak Yönetimi Şube Müdürlüğü" },
                      { id: 'emlak-2', title: "Kamulaştırma Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'etut',
                    title: "Etüt ve Projeler Dairesi Başkanlığı",
                    children: [
                      { id: 'etut-1', title: "Etüt Proje ve Keşif Şube Müdürlüğü" },
                      { id: 'etut-2', title: "Yapı İşleri ve Kontrol Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'fen',
                    title: "Fen İşleri Dairesi Başkanlığı",
                    children: [
                      { id: 'fen-1', title: "Akarsu Yapıları Şube Müdürlüğü" },
                      { id: 'fen-2', title: "Altyapı Koordinasyon Şube Müdürlüğü" },
                      { id: 'fen-3', title: "Fen İşleri İdari Hizmetler Şube Müdürlüğü" },
                      { id: 'fen-4', title: "Yol Bakım Şube Müdürlüğü" },
                      { id: 'fen-5', title: "Yol Proje ve Yapım Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'imar',
                    title: "İmar ve Şehircilik Dairesi Başkanlığı",
                    children: [
                      { id: 'imar-1', title: "Harita Şube Müdürlüğü" },
                      { id: 'imar-2', title: "İmar İşleri Şube Müdürlüğü" },
                      { id: 'imar-3', title: "Kültür Varlıkları Şube Müdürlüğü" },
                      { id: 'imar-4', title: "Şehir Planlama Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'park',
                    title: "Park ve Bahçeler Dairesi Başkanlığı",
                    children: [
                      { id: 'park-1', title: "Kent Estetiği ve Temizliği Şube Müdürlüğü" },
                      { id: 'park-2', title: "Park ve Bahçeler Şube Müdürlüğü" },
                      { id: 'park-3', title: "Proje Geliştirme ve Yapım Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'ulasim',
                    title: "Ulaşım Dairesi Başkanlığı",
                    children: [
                      { id: 'ulasim-1', title: "Terminaller ve Otoparklar Şube Müdürlüğü" },
                      { id: 'ulasim-2', title: "Ticari Plaka İşlemleri Şube Müdürlüğü" },
                      { id: 'ulasim-3', title: "Toplu Taşıma ve Planlama Şube Müdürlüğü" },
                      { id: 'ulasim-4', title: "Trafik Hizmetleri Şube Müdürlüğü" },
                      { id: 'ulasim-5', title: "Ulaşım Koordinasyon Şube Müdürlüğü" },
                    ]
                  }
                ]
              },
              // YARDIMCI 2
              {
                id: 'gsy-2',
                title: "Genel Sekreter Yardımcılığı - 2 (Doç. Dr. Ergül HALİSÇELİK)",
                layout: 'vertical',
                children: [] // Boş listelenmiş, ileride doldurulabilir
              },
              // YARDIMCI 3
              {
                id: 'gsy-3',
                title: "Genel Sekreter Yardımcılığı - 3 (Erdin ERAL)",
                layout: 'vertical',
                children: [
                  {
                    id: 'destek',
                    title: "Destek Hizmetleri Dairesi Başkanlığı",
                    children: [
                      { id: 'destek-1', title: "Güvenlik Şube Müdürlüğü" },
                      { id: 'destek-2', title: "Tesisler Bakım ve Onarım Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'itfaiye',
                    title: "İtfaiye Dairesi Başkanlığı",
                    children: [
                      { id: 'itfaiye-1', title: "Acil Durum Yönetimi Şube Müdürlüğü" },
                      { id: 'itfaiye-2', title: "Arama Kurtarma ve Müdahale Şube Müdürlüğü" },
                      { id: 'itfaiye-3', title: "Eğitim ve Önleme Şube Müdürlüğü" },
                      { id: 'itfaiye-4', title: "İtfaiye Destek Hizmetleri Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'kultur',
                    title: "Kültür, Sanat ve Sosyal İşler Dairesi Başkanlığı",
                    children: [
                      { id: 'kultur-1', title: "Gençlik Hizmetleri ve Spor Şube Müdürlüğü" },
                      { id: 'kultur-2', title: "Hayat Boyu Öğrenme Şube Müdürlüğü" },
                      { id: 'kultur-3', title: "Kültür Şube Müdürlüğü" },
                      { id: 'kultur-4', title: "Şehir Tiyatroları Şube Müdürlüğü" },
                      { id: 'kultur-5', title: "Turizm ve Tanıtım Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'makine',
                    title: "Makine İkmal, Bakım ve Onarım Dairesi Başkanlığı",
                    children: [
                      { id: 'makine-1', title: "Bakım Onarım Şube Müdürlüğü" },
                      { id: 'makine-2', title: "İkmal Şube Müdürlüğü" },
                      { id: 'makine-3', title: "İşletme Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'saglik',
                    title: "Sağlık ve Sosyal Hizmetler Dairesi Başkanlığı",
                    children: [
                      { id: 'saglik-1', title: "Engelli ve Yaşlı Hizmetleri Şube Müdürlüğü" },
                      { id: 'saglik-2', title: "Kadın ve Aile Hizmetleri Şube Müdürlüğü" },
                      { id: 'saglik-3', title: "Sağlık İşleri Şube Müdürlüğü" },
                      { id: 'saglik-4', title: "Sosyal Yardımlar Şube Müdürlüğü" },
                      { id: 'saglik-5', title: "Şehit Aileleri ve Gazi Hizmetleri Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'zabita',
                    title: "Zabıta Dairesi Başkanlığı",
                    children: [
                      { id: 'zabita-1', title: "Ruhsat ve Denetim Şube Müdürlüğü" },
                      { id: 'zabita-2', title: "Zabıta Şube Müdürlüğü" },
                      { id: 'zabita-3', title: "Zabıta Trafik Şube Müdürlüğü" },
                    ]
                  }
                ]
              },
              // YARDIMCI 4
              {
                id: 'gsy-4',
                title: "Genel Sekreter Yardımcılığı - 4 (Av. Arzu ÇEBİ TOPÇU)",
                layout: 'vertical',
                children: [
                  {
                    id: 'cevre',
                    title: "Çevre Koruma ve Kontrol Dairesi Başkanlığı",
                    children: [
                      { id: 'cevre-1', title: "Çevre ve Deniz Hizmetleri Şube Müdürlüğü" },
                      { id: 'cevre-2', title: "Hafriyat Yönetimi Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'iklim',
                    title: "İklim Değişikliği ve Sıfır Atık Dairesi Başkanlığı",
                    children: [
                      { id: 'iklim-1', title: "Atık Yönetimi Şube Müdürlüğü" },
                      { id: 'iklim-2', title: "Enerji Yönetimi ve İklim Değişikliği Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'mezarlik',
                    title: "Mezarlıklar Dairesi Başkanlığı",
                    children: [
                      { id: 'mezarlik-1', title: "Mezarlıklar Destek Hizmetleri Şube Müdürlüğü" },
                      { id: 'mezarlik-2', title: "Mezarlıklar Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'muhtarlik',
                    title: "Muhtarlık İşleri Dairesi Başkanlığı",
                    children: [
                      { id: 'muhtarlik-1', title: "Muhtarlık Destek Hizmetleri Şube Müdürlüğü" },
                      { id: 'muhtarlik-2', title: "1. Bölge Muhtarlık İşleri Şube Müdürlüğü" },
                      { id: 'muhtarlik-3', title: "2. Bölge Muhtarlık İşleri Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'tarim',
                    title: "Tarımsal Hizmetler Dairesi Başkanlığı",
                    children: [
                      { id: 'tarim-1', title: "Haller Şube Müdürlüğü" },
                      { id: 'tarim-2', title: "Kırsal Kalkınma Şube Müdürlüğü" },
                      { id: 'tarim-3', title: "Tarımsal Altyapılar Şube Müdürlüğü" },
                    ]
                  },
                  {
                    id: 'veteriner',
                    title: "Veteriner İşleri Dairesi Başkanlığı",
                    children: [
                      { id: 'veteriner-1', title: "Gıda Kontrol ve Mezbahalar Şube Müdürlüğü" },
                      { id: 'veteriner-2', title: "Veteriner İşleri Şube Müdürlüğü" },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
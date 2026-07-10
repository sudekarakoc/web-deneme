import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

type Page = {
  slug: string;
  title: string;
};

type CategoryData = {
  title?: string;
  pages: Page[];
} | undefined;

export default function BelediyeEncumeniStaticPage() {
  const kategori = "kurumsal";
  const slug = "belediye-encumeni";
  
  const categoryData = SITE_DATA[kategori] as CategoryData;
  const currentPage = categoryData?.pages.find((p: Page) => p.slug === slug);

  // Encümen Üyeleri Verisi
  const encumenUyeleri = [
    { isim: "Dr. Candan YÜCEER", gorev: "Encümen Başkanı", unvan: "Büyükşehir Belediye Başkanı" },
    { isim: "Doç. Dr. Ergül HALİSÇELİK", gorev: "Encümen Üyesi", unvan: "Genel Sekreter V." },
    { isim: "Av. Bulut BECERİK", gorev: "Encümen Üyesi", unvan: "-" },
    { isim: "Uğur KAYA", gorev: "Encümen Üyesi", unvan: "-" },
    { isim: "Umut ÖGE", gorev: "Encümen Üyesi", unvan: "-" },
    { isim: "Fatma ÇOBAN", gorev: "Encümen Üyesi", unvan: "-" },
    { isim: "Fatma ERÖZKAN", gorev: "Encümen Üyesi", unvan: "-" },
    { isim: "Av. Arzu ÇEBİ TOPÇU", gorev: "Encümen Üyesi", unvan: "Mali Hizmetler D.Bşk" },
    { isim: "Av. Nevim KAÇAR", gorev: "Encümen Üyesi", unvan: "Yazı İşleri ve Kar. D. Bşk" },
    { isim: "İsmail GÜLSEN", gorev: "Encümen Üyesi", unvan: "İmar ve Şehircilik D.Bşk." },
    { isim: "Emre TÜMER", gorev: "Encümen Üyesi", unvan: "Ulaşım Dairesi Başkan V." }
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Belediye Encümeni"}
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <Link href={`/${kategori}`}>
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData?.title}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {categoryData?.pages.map((p: Page) => {
                const isActive = p.slug === slug;
                return (
                  <li key={p.slug}>
                    <Link 
                      href={`/${kategori}/${p.slug}`} 
                      className={`block px-6 py-3 text-[15px] transition-colors border-l-4 ${
                        isActive 
                          ? "font-medium text-[#009FE3] bg-[#EAF4E2]/30 border-[#73B646]" 
                          : "text-gray-600 hover:text-[#009FE3] hover:bg-gray-50 border-transparent hover:border-[#73B646]/30"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Tekirdağ Büyükşehir Belediyesi Encümenleri
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Encümen Üyeleri Tablosu */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead className="bg-[#1B4F8A]">
                    <tr>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Ad - Soyad</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Görev</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Ünvan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {encumenUyeleri.map((uye, index) => {
                      const isBaskan = uye.gorev === "Encümen Başkanı";
                      
                      return (
                        <tr 
                          key={index} 
                          className={`hover:bg-[#EAF4E2]/40 transition-colors ${isBaskan ? 'bg-[#009FE3]/5' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}`}
                        >
                          {/* İsim Sütunu */}
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isBaskan ? 'bg-[#1B4F8A] text-white shadow-md' : 'bg-[#009FE3]/10 text-[#009FE3]'}`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <span className={`text-base ${isBaskan ? 'font-bold text-[#1B4F8A]' : 'font-semibold text-gray-900'}`}>
                                {uye.isim}
                              </span>
                            </div>
                          </td>
                          
                          {/* Görev Sütunu */}
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
                              isBaskan 
                                ? 'bg-[#1B4F8A] text-white border-[#1B4F8A] shadow-sm' 
                                : 'bg-[#EAF4E2] text-[#5a9435] border-[#73B646]/30'
                            }`}>
                              {isBaskan && (
                                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                              )}
                              {uye.gorev}
                            </span>
                          </td>

                          {/* Ünvan Sütunu */}
                          <td className="py-4 px-6">
                            <span className={`text-sm ${uye.unvan === "-" ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>
                              {uye.unvan}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
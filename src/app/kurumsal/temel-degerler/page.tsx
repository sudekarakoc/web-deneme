import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

interface PageItem {
  slug: string;
  title: string;
}

interface CategoryData {
  title: string;
  pages: PageItem[];
}

export default function TemelDegerlerPage() {
  // Bu sayfa spesifik olduğu için kategori ve slug değerlerini sabitliyoruz
  const kategori = "kurumsal";
  const slug = "temel-degerler";
  
  const categoryData = SITE_DATA[kategori] as CategoryData;
  const currentPage = categoryData?.pages.find((p) => p.slug === slug);

  // Animasyonsuz, statik temel değerler listesi
  const degerler = [
    "Cumhuriyetin değer ve ilkelerine bağlı,",
    "Kaliteli ve vatandaş odaklı hizmet sunan,",
    "Güler yüzlü, yapıcı ve çözüm odaklı yaklaşıma sahip,",
    "Çevreye, insana ve diğer canlılara, kültürel değerlere ve tarihi dokuya saygılı,",
    "Sosyal, adil, şeffaf, katılımcı ve demokratik belediyecilik hizmeti sunan,",
    "Etkili, verimli ve sürdürülebilir kaynak tahsisi ve kullanımına odaklanmış,",
    "İlçe belediyeleri ve diğer kurumlarla uyum, işbirliği ve koordinasyon içinde çalışan."
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI (LOGOYLA UYUMLU) --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link 
              href="/" 
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              Anasayfa
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <Link 
              href={`/${kategori}`} 
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              {categoryData?.title || "Kurumsal"}
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Temel Değerler"}
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
              {categoryData?.pages.map((p: PageItem) => {
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

        {/* ANA İÇERİK ALANI (Temel Değerler Özel Tasarımı) */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Temel Değerlerimiz
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Değerler Listesi */}
            <ul className="flex flex-col gap-4">
              {degerler.map((deger, index) => (
                <li 
                  key={index}
                  className="group flex items-start p-4 rounded-xl border border-transparent hover:border-[#73B646]/30 hover:bg-[#EAF4E2]/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {/* Kurumsal Check İkonu */}
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#EAF4E2] group-hover:bg-[#73B646] transition-colors duration-300">
                      <svg 
                        className="h-3.5 w-3.5 text-[#73B646] group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {deger}
                  </p>
                </li>
              ))}
            </ul>
            
          </div>
        </article>

      </section>
    </main>
  );
}
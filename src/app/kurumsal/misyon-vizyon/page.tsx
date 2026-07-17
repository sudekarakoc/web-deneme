import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

type Page = { slug: string; title: string };
type CategoryData = { title: string; pages: Page[] };

export default function MisyonVizyonStaticPage() {
  const kategori = "kurumsal";
  const slug = "misyon-vizyon";
  
  const categoryData = SITE_DATA[kategori] as CategoryData | undefined;
  const currentPage = categoryData?.pages.find((p) => p.slug === slug);

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
              {currentPage?.title || "Misyon ve Vizyon"}
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Misyon ve Vizyon
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Misyon & Vizyon Kartları */}
            <div className="flex flex-col gap-8">
              
              {/* Misyonumuz Kartı */}
              <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg hover:border-[#009FE3]/30 transition-all duration-300 overflow-hidden">
                {/* Arka Plan Dekoratif Şekli */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#009FE3]/5 rounded-full blur-3xl group-hover:bg-[#009FE3]/10 transition-colors duration-500"></div>
                
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 bg-[#EAF4E2] text-[#73B646] p-4 rounded-2xl shadow-inner group-hover:scale-110 group-hover:bg-[#73B646] group-hover:text-white transition-all duration-300">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F8A] mb-4">Misyonumuz</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                      <strong className="font-semibold text-gray-900">Tekirdağ’ın refahını artıran</strong>, Tekirdağlıların huzurlu ve mutlu bir yaşam sürmesini sağlayan, çağdaş ve demokratik bir yerel yönetim modeli sunmak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vizyonumuz Kartı */}
              <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg hover:border-[#73B646]/30 transition-all duration-300 overflow-hidden">
                {/* Arka Plan Dekoratif Şekli */}
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#73B646]/5 rounded-full blur-3xl group-hover:bg-[#73B646]/10 transition-colors duration-500"></div>
                
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 bg-[#EAF4E2] text-[#009FE3] p-4 rounded-2xl shadow-inner group-hover:scale-110 group-hover:bg-[#009FE3] group-hover:text-white transition-all duration-300">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F8A] mb-4">Vizyonumuz</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                      Cumhuriyetin ikinci yüzyılında, yaşam kalitesini ve sürdürülebilirliği esas alan, çağdaş, çevreye duyarlı, yenilikçi, şeffaf, <strong className="font-semibold text-gray-900">sosyal adaleti ve toplumsal katılımı gözeten ve örnek alınan</strong> bir belediye olmak.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

type PageItem = {
  slug: string;
  title: string;
};

export default function PolitikalarStaticPage() {
  const kategori = "kurumsal";
  const slug = "politikalar";
  
  const categoryData = SITE_DATA[kategori] as { title: string; pages: PageItem[] } | undefined;
  const currentPage = categoryData?.pages.find((p: PageItem) => p.slug === slug);

  // Politikalar Verisi
  // 'url' kısmına PDF dosya yolunu (örn: /docs/belge.pdf) veya sayfa linkini yazabilirsin.
  // 'target' kısmını PDF'ler için "_blank", normal sayfalar için "_self" yapabilirsin.
  const politikalar = [
    { 
      id: 1, 
      title: "Bilgi Güvenliği Politikamız", 
      url: "/kurumsal/politikalar/bilgi-guvenligi-politikasi", 
      target: "_self" 
    },
    { 
      id: 2, 
      title: "Entegre Yönetim Sistemi Kapsamı", 
      url: "https://www.tekirdag.bel.tr/content/WebSource/file/entegre_yonetim_sistemi_kapsami/kapsam.pdf", 
      target: "_blank" 
    },
    { 
      id: 3, 
      title: "İnsan Kaynakları Politikamız", 
      url: "/kurumsal/politikalar/insan-kaynaklari-politikasi", 
      target: "_self" 
    },
    { 
      id: 4, 
      title: "Yönetim Sistemleri Politikamız", 
      url: "/kurumsal/politikalar/yonetim-sistemleri-politikasi", 
      target: "_self" 
    }
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
              {currentPage?.title || "Politikalar"}
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
            
            {/* Görseldeki Özel Başlık */}
            <header className="mb-8 border-b border-gray-100 pb-4">
              <h1 className="text-3xl font-extrabold text-[#73B646] uppercase tracking-wide">
                POLİTİKALAR
              </h1>
            </header>

            {/* İndirilebilir / Tıklanabilir Politikalar Listesi */}
            <div className="flex flex-col gap-4">
              {politikalar.map((item) => (
                <a 
                  key={item.id}
                  href={item.url}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                  className="group flex items-center justify-between p-5 md:px-6 md:py-5 bg-[#F2FBF9] border-l-[6px] border-[#73B646] hover:bg-[#e6f5ef] transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Sol Doküman İkonu */}
                    <div className="text-[#73B646]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    {/* Liste Başlığı */}
                    <span className="text-lg font-bold text-gray-800 group-hover:text-[#1B4F8A] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  
                  {/* Sağ İndirme / Yönlendirme İkonu */}
                  <div className="text-gray-300 group-hover:text-[#009FE3] transition-colors pl-4">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    // Rengi ayarlamak için: aktif/hover durumunda mavi, normalde gri
                    className="w-5 h-5 text-[#d1d5db] group-hover:text-[#009FE3] transition-colors duration-200"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
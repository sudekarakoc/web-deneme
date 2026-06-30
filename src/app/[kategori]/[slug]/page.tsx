import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";

export default async function DynamicPage({ params }: { params: Promise<{ kategori: string; slug: string }> }) {
  const resolvedParams = await params;
  const { kategori, slug } = resolvedParams;

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound(); 

  const currentPage = categoryData.pages.find((p: any) => p.slug === slug);
  if (!currentPage) return notFound(); 

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI (LOGOYLA UYUMLU) --- */}
      <div className="w-full bg-[#EAF4E2] pt-[115px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb - Logodaki mavi vurgusuyla */}
          <div className="text-sm text-gray-600 font-medium tracking-wide">
            Anasayfa / {categoryData.title} / <span className="text-[#009FE3] font-bold">{currentPage.title}</span>
          </div>
        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row gap-10">
        
        {/* DİNAMİK YAN MENÜ (Sidebar) */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[140px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData.title}</h3>
            </div>
            <ul className="flex flex-col py-2">
              {categoryData.pages.map((p: any) => {
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

        {/* SAĞ ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <div 
            className="prose prose-lg max-w-none text-gray-700 prose-a:text-[#009FE3] prose-headings:text-[#009FE3]"
            dangerouslySetInnerHTML={{ __html: currentPage.content }} 
          />
        </article>

      </section>
    </main>
  );
}
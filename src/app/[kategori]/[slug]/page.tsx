import Link from "next/link";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import IdariYapi from "@/components/IdariYapiTree";
import { IDARI_YAPI_DATA } from "@/lib/idariYapiData";

export default async function DynamicPage({ params }: { params: Promise<{ kategori: string; slug: string }> }) {
  const resolvedParams = await params;
  const { kategori, slug } = resolvedParams;
  // avoid using `any` to satisfy eslint rule: @typescript-eslint/no-explicit-any
  const IdariYapiComponent = IdariYapi as ComponentType<{ node: unknown }>;

  type Page = { slug: string; title: string; content?: string };
  const categoryData = SITE_DATA[kategori] as { title: string; pages: Page[] } | undefined;
  if (!categoryData) return notFound();

  const currentPage = categoryData.pages.find((p: Page) => p.slug === slug);
  if (!currentPage) return notFound(); 

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI (LOGOYLA UYUMLU) --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb - Tıklanabilir Yapıya Dönüştürüldü */}
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
              {categoryData.title}
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <span className="text-[#009FE3] font-bold">
              {currentPage.title}
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* DİNAMİK YAN MENÜ (Sidebar) - Sadece idari-yapi DEĞİLSE göster */}
        {/* Mobilde alta geçmesi için 'order-2', masaüstünde solda kalması için 'lg:order-1' eklendi */}
        {slug !== "idari-yapi" && (
          <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
                <Link href={`/${kategori}`}>
                  <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData.title}</h3>
                </Link>
              </div>
              <ul className="flex flex-col py-2">
                {categoryData.pages.map((p: Page) => {
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
        )}

        {/* ANA İÇERİK ALANI - Eğer idari-yapi ise %100 genişlik (w-full), değilse %75 (lg:w-3/4) kullan */}
        {/* Mobilde üste çıkması için 'order-1', masaüstünde sağda kalması için 'lg:order-2' eklendi */}
        <article className={`w-full ${slug === "idari-yapi" ? "lg:w-full" : "lg:w-3/4"} order-1 lg:order-2`}>
          {slug === "idari-yapi" ? (
           <IdariYapiComponent node={IDARI_YAPI_DATA[0]} />
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              <div 
                className="prose prose-lg max-w-none text-gray-700 prose-a:text-[#009FE3] prose-headings:text-[#009FE3]"
                dangerouslySetInnerHTML={{ __html: currentPage.content ?? "" }}
              />
            </div>
          )}
        </article>

      </section>
    </main>
  );
}
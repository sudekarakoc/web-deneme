import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import Link from "next/link";
import CategoryGridClient from "@/components/CategoryGridClient";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const resolvedParams = await params;
  const { kategori } = resolvedParams;

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound();

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI (SENİN TASARIMIN) --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb - Kategori Ana Sayfası Olduğu İçin Sadece Anasayfa / Kategori Adı */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link 
              href="/" 
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              Anasayfa
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <span className="text-[#009FE3] font-bold">
              {categoryData.title}
            </span>
          </div>

        </div>
      </div>

      {/* --- İÇERİK ALANI (GSAP ANİMASYONLU GRID MENÜ) --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12">
        {/* Görseldeki gibi temiz bir kutu içine almak istersen dışına bg-white verebiliriz, 
            ancak grid yapısı genellikle arka planla (bg-[#f8f9fa]) doğrudan uyumlu olduğunda daha şık durur. */}
        <CategoryGridClient pages={categoryData.pages} kategori={kategori} />
      </section>

    </main>
  );
}
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import Link from "next/link";
import CategoryGridClient from "@/components/CategoryGridClient";

// Klasör adı sabit (guncel) olduğu için params beklememize gerek yok.
export default function GuncelPage() {
  // SITE_DATA içindeki "Güncel" kategorisinin anahtarı neyse onu yazın. 
  // (Örn: "guncel", "Guncel" veya "Güncel")
  const kategori = "guncel"; 
  const categoryData = SITE_DATA[kategori];

  if (!categoryData) return notFound();

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
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

      {/* --- İÇERİK ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12">
        <CategoryGridClient pages={categoryData.pages} kategori={kategori} />
      </section>

    </main>
  );
}
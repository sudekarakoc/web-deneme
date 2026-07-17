"use client";

import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

type SitePage = {
  slug: string;
  title: string;
  [key: string]: unknown;
};

export default function MeclisUyeleriPage() {
  // Statik sayfa ayarları
  const kategori = "kurumsal";
  const slug = "belediye-meclisi";
  
  const categoryData = SITE_DATA[kategori];
  // Eğer verilerinde "meclis-uyeleri" yoksa fallback olarak boş obje veya varsayılan değer atanır
  const currentPage = categoryData?.pages?.find((p: SitePage) => p.slug === slug) || { title: "Meclis Üyeleri" };

  // Meclis Üyeleri Örnek Verisi (Gerçek verilerle çoğaltabilirsin)
  const councilMembers = [
    { name: "Dr. Candan YÜCEER", role: "Büyükşehir Belediye Başkanı", district: "Tekirdağ", party: "CHP" },
    { name: "Volkan NALLAR", role: "Meclis Üyesi", district: "Süleymanpaşa", party: "CHP" },
    { name: "Burak Boğaç BAYKAL", role: "Meclis Üyesi", district: "Tekirdağ", party: "CHP" },
    { name: "Emin Benan UTKU", role: "Meclis Üyesi", district: "Tekirdağ", party: "CHP" },
    { name: "Oral ÇELİKKOL", role: "Meclis Üyesi", district: "Tekirdağ", party: "CHP" },
    { name: "Ergün GÜLERYÜZ", role: "Meclis Üyesi", district: "Tekirdağ", party: "CHP" },
    { name: "Kazım DOĞAÇ", role: "Meclis Üyesi", district: "Ergene", party: "AK Parti" },
    { name: "Birol TANER", role: "Meclis Üyesi", district: "Ergene", party: "AK Parti" }
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
                
                {/* Belediye Meclisi Linki */}
                <Link href={`/${kategori}/belediye-meclisi`} className="hover:text-[#1B4F8A] transition-colors duration-200">
                    Belediye Meclisi
                </Link>
                
                <span className="text-gray-400">/</span>
                
                {/* Aktif Sayfa (Meclis Üyeleri) */}
                <span className="text-[#009FE3] font-bold">
                    {currentPage.title}
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
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Büyükşehir Belediye Meclis Üyeleri
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Bilgilendirme Metni */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tekirdağ Büyükşehir Belediyesi Meclisi, şehrimizin geleceğini şekillendiren kararların alındığı, yerel demokrasinin en önemli temsil organıdır. Aşağıda görev yapmakta olan meclis üyelerimizin güncel listesine ulaşabilirsiniz.
            </p>

            {/* MECLİS ÜYELERİ KARTLARI (Grid Yapısı) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {councilMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Kart Üst Alanı (Kapak ve Profil) */}
                  <div className="h-20 bg-gradient-to-r from-[#EAF4E2] to-gray-50 relative flex justify-center border-b border-gray-100">
                    <div className="absolute -bottom-8 w-16 h-16 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center shadow-sm overflow-hidden text-gray-400 group-hover:text-[#009FE3] transition-colors">
                      {/* Profil Fotoğrafı (İstersen buraya Image tagi koyabilirsin, şimdilik ikon) */}
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Kart İçeriği */}
                  <div className="pt-12 pb-6 px-4 text-center flex-1 flex flex-col">
                    <h3 className="font-bold text-[#1B4F8A] text-[17px] mb-1 group-hover:text-[#009FE3] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {member.role}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                        <svg className="w-3.5 h-3.5 mr-1 text-[#73B646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {member.district}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#EAF4E2] text-[#1B4F8A]">
                        {member.party}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
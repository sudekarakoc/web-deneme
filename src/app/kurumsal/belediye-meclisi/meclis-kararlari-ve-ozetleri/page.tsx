"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

export default function MeclisDonemleriPage() {
  const kategori = "kurumsal";
  const slug = "belediye-meclisi"; 
  
  const categoryData = SITE_DATA[kategori];

  // Sadece bir yılın açık kalmasını sağlayan state (Varsayılan olarak en son yıl açık)
  const [openYear, setOpenYear] = useState<string | null>("2026");

  // Yıllara göre meclis dönemleri verisi
  const yearlyData = [
    {
      year: "2026",
      title: "2026 Yılı Meclis Dönemleri",
      months: [
        { title: "2026 Yılı Haziran Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2026 Yılı Mayıs Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2026 Yılı Nisan Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2026 Yılı Mart Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2026 Yılı Şubat Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2026 Yılı Ocak Meclis Dönemi Karar Özetleri", href: "#" }
      ]
    },
    {
      year: "2025",
      title: "2025 Yılı Meclis Dönemleri",
      months: [
        { title: "2025 Yılı Aralık Meclis Dönemi Karar Özetleri", href: "#" },
        { title: "2025 Yılı Kasım Meclis Dönemi Karar Özetleri", href: "#" }
      ]
    },
    {
      year: "2024",
      title: "2024 Yılı Meclis Dönemleri",
      months: [
        { title: "2024 Yılı Aralık Meclis Dönemi Karar Özetleri", href: "#" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[115px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}/belediye-meclisi`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              Belediye Meclisi
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              Meclis Dönemleri
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
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData?.title || "Kurumsal"}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {categoryData?.pages?.map((p: any) => {
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
            
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Meclis Dönemleri
              </h1>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* YILLARA GÖRE AKORDİYON LİSTESİ */}
            <div className="space-y-3">
              {yearlyData.map((data, index) => {
                const isOpen = openYear === data.year;
                
                return (
                  <div key={index} className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
                    {/* Akordiyon Başlığı (Tıklanabilir Yıl) */}
                    <button
                      onClick={() => setOpenYear(isOpen ? null : data.year)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                        isOpen ? "bg-gray-50/50" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className={`text-[17px] font-bold flex items-center gap-3 ${isOpen ? "text-[#73B646]" : "text-gray-700"}`}>
                        {/* Sol taraftaki ufak ikon (Liste ikonu) */}
                        <svg className={`w-5 h-5 ${isOpen ? "text-[#73B646]" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {data.title}
                      </span>
                      
                      {/* Sağ taraftaki + / - İkonu */}
                      <span className={`text-xl font-light ${isOpen ? "text-[#73B646]" : "text-gray-400"}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Akordiyon İçeriği (Aylar Listesi) */}
                    {isOpen && (
                      <div className="bg-white px-5 pb-5">
                        <ul className="flex flex-col border-t border-gray-100 pt-2">
                          {data.months.map((month, mIndex) => (
                            <li key={mIndex}>
                              <Link 
                                href={month.href} 
                                className="group flex items-center justify-between py-3.5 px-4 hover:bg-gray-50 rounded-md transition-colors border-b border-gray-50 last:border-0"
                              >
                                <span className="text-[15px] text-gray-600 group-hover:text-[#009FE3] transition-colors">
                                  {month.title}
                                </span>
                                
                                {/* Sağ Ok İkonu */}
                                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#009FE3] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

export default function EskiBaskanlarimizPage() {
  const kategori = "kurumsal";
  const slug = "eski-baskanlarimiz";
  
  type Page = { slug: string; title: string };
  const categoryData = SITE_DATA[kategori] as { title?: string; pages: Page[] } | undefined;
  const currentPage = categoryData?.pages.find((p: Page) => p.slug === slug);

  // Sıralama Yönü State'i (true = Yeniden Eskiye, false = Eskiden Yeniye)
  const [isDescending, setIsDescending] = useState(true);

  // Orijinal Liste (Yeniden Eskiye olarak tanımlı)
  const eskiBaskanlar = [
    { isim: "Kadir ALBAYRAK", yillar: "2014 - 2019 / 2019 - 2024" },
    { isim: "Adem DALGIÇ", yillar: "2009 - 2014" },
    { isim: "Ahmet AYGÜN", yillar: "2004 - 2009" },
    { isim: "Kadir ÇEBİ", yillar: "2002 - 2004" },
    { isim: "Osman TABAK", yillar: "1994 - 1999 / 1999 - 2002" },
    { isim: "Figen ÖNGÖR", yillar: "1993 - 1994" },
    { isim: "Cemal ÜNLÜSARAÇ", yillar: "1989 - 1993" },
    { isim: "Dr. Mahmut ÇAĞLIYURT", yillar: "1984 - 1989" },
    { isim: "Hüsnü BAŞAT", yillar: "1980 - 1984" },
    { isim: "Nushet ERMAN", yillar: "1980 - 1980" },
    { isim: "Ekrem TANTI", yillar: "1977 - 1980" },
    { isim: "Osman ALYANAK", yillar: "1973 - 1977" },
    { isim: "Erol ERDOĞAN", yillar: "1968 - 1973" },
    { isim: "Hüsnü BAŞAR", yillar: "1962 - 1963" },
    { isim: "Şeref TOLUNGÜÇ", yillar: "1960 - 1962" },
    { isim: "Rebii KARATEKİN", yillar: "1960 - 1960" },
    { isim: "İrfan ALPTEKİN", yillar: "1960 - 1960" },
    { isim: "Hüsnü GÜNGÖR", yillar: "1958 - 1959" },
    { isim: "Rüstem ŞERİFOĞLU", yillar: "1955 - 1956 / 1959 - 1960" },
    { isim: "Şefik GÜRSOY", yillar: "1954 - 1955 / 1958 - 1963" },
    { isim: "Alâeddin KOŞAR", yillar: "1952 - 1952 / 1952 - 1954 / 1956 - 1958" },
    { isim: "Reşat AYDINLI", yillar: "1952 - 1952" },
    { isim: "Mahmut SÜMER", yillar: "1951 - 1952" },
    { isim: "İsmail ÖZDOYURAN", yillar: "1950 - 1951" },
    { isim: "Şevket CİCİOĞLU", yillar: "1946 - 1950" },
    { isim: "Muhterem PEKEL", yillar: "1936 - 1946" },
    { isim: "Ekrem PEKEL", yillar: "1927 - 1936" },
    { isim: "Nuri Bey", yillar: "1925 - 1927" },
    { isim: "Hilmi Bey", yillar: "1923 - 1925" },
    { isim: "Rahmi Bey", yillar: "1922 - 1923" },
    { isim: "Hafız Hulusi", yillar: "1915 - 1920" },
    { isim: "Emin Bey", yillar: "1913 - 1915" },
    { isim: "Halis Bey", yillar: "1912 - 1913 / 1920 - 1922" },
    { isim: "Fuat Bey", yillar: "1904 - 1907" },
    { isim: "Adil Bey", yillar: "1901 - 1904" },
    { isim: "Remzi Efendi", yillar: "1897 - 1901 / 1907 - 1912 / 1915 - 1916" },
    { isim: "Hüsnü Bey", yillar: "1890 - 1897" },
    { isim: "Hasan Cemali Baba", yillar: "1879 - 1890" }
  ];

  // State'e göre listeyi dinamik olarak çeviriyoruz
  // Orijinal diziyi bozmamak için spread operatörü [...] ile kopya alıyoruz
  const gosterilenBaskanlar = isDescending ? eskiBaskanlar : [...eskiBaskanlar].reverse();

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
              {currentPage?.title || "Eski Başkanlarımız"}
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
            
            {/* İçerik Başlığı ve Sıralama Butonu */}
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                  Eski Başkanlarımız
                </h1>
                {/* Dekoratif Kurumsal Çizgi */}
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-[#009FE3] rounded-full"></div>
                </div>
              </div>
              
              {/* Etkileşimli Sıralama Butonu */}
              <button 
                onClick={() => setIsDescending(!isDescending)}
                className="inline-flex items-center gap-2 bg-[#EAF4E2] hover:bg-[#d5ebc5] text-[#73B646] hover:text-[#5a9435] px-4 py-2 rounded-full text-sm font-semibold border border-[#73B646]/30 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#73B646]/50 active:scale-95"
              >
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-500 ${isDescending ? '' : 'rotate-180'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                {isDescending ? "Yeniden Eskiye" : "Eskiden Yeniye"}
              </button>
            </header>

            {/* Başkanlar Tablosu */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead className="sticky top-0 bg-[#1B4F8A] z-10 shadow-sm">
                    <tr>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Ad Soyad</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider text-right">Hizmet Yılları</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 relative">
                    {gosterilenBaskanlar.map((baskan, index) => (
                      <tr 
                        key={`${baskan.isim}-${isDescending}`} 
                        className={`hover:bg-[#EAF4E2]/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} animate-[fadeIn_0.5s_ease-out]`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#009FE3]/10 text-[#009FE3]">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span className="text-base font-semibold text-gray-900">{baskan.isim}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200 whitespace-nowrap">
                            {baskan.yillar}
                          </span>
                        </td>
                      </tr>
                    ))}
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
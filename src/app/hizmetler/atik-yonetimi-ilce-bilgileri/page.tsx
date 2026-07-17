"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

import { districts } from "./data/districts";

export default function AtikYonetimiIlceBilgileriPage() {
  const [openDistrict, setOpenDistrict] = useState<number | null>(null);

  const toggleDistrict = (id: number) => {
    setOpenDistrict(openDistrict === id ? null : id);
  };

  const kategori = "hizmetler";
  const slug = "atik-yonetimi-ilce-bilgileri";

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound(); 

  const currentPage = categoryData.pages.find((p: any) => p.slug === slug);
  if (!currentPage) return notFound(); 

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* BREADCRUMB / HEADER */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">{categoryData.title}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">{currentPage.title}</span>
          </div>
        </div>
      </div>
          
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (SIDEBAR) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData.title}
          pages={categoryData.pages}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-2xl font-bold text-[#1B4F8A] tracking-wide flex items-center gap-3">
              <svg className="w-7 h-7 text-[#8DC63F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {currentPage.title}
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              İlçe belediyelerimize ait atık yönetimi iletişim ve birim bilgilerine aşağıdan ulaşabilirsiniz.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {districts.map((district) => (
              <div key={district.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-all duration-300">
                <button 
                  onClick={() => toggleDistrict(district.id)}
                  className={`w-full flex items-center justify-between p-5 transition-colors ${openDistrict === district.id ? 'bg-[#8DC63F]/5' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openDistrict === district.id ? 'bg-[#8DC63F]/20' : 'bg-[#1B4F8A]/5'}`}>
                      <svg className={`w-5 h-5 transition-colors ${openDistrict === district.id ? 'text-[#8DC63F]' : 'text-[#1B4F8A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className={`font-semibold text-[16px] tracking-wide transition-colors ${openDistrict === district.id ? 'text-[#8DC63F]' : 'text-gray-800'}`}>
                      {district.name}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openDistrict === district.id ? 'rotate-180 bg-[#8DC63F] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${openDistrict === district.id ? 'max-h-[1000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 bg-gray-50">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[15px]">
                        <span className="font-semibold text-gray-700 min-w-[150px]">İlgili Birim:</span>
                        <span className="text-gray-600">{district.birim}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[15px]">
                        <span className="font-semibold text-gray-700 min-w-[150px]">Sorumlu Adı Soyadı:</span>
                        <span className="text-gray-600">{district.sorumlu}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[15px]">
                        <span className="font-semibold text-gray-700 min-w-[150px]">Telefon & Fax:</span>
                        <span className="text-gray-600">{district.tel}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[15px]">
                        <span className="font-semibold text-gray-700 min-w-[150px]">E-Posta:</span>
                        <span className="text-[#009FE3] hover:underline cursor-pointer">{district.eposta}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

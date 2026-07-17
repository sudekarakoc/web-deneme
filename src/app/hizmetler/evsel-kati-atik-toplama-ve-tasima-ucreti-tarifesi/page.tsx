"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

import { tariffs } from "./data/tariffs";

export default function EvselKatiAtikTarifesiPage() {
  const [openTariffIndex, setOpenTariffIndex] = useState<number | null>(0);

  const toggleTariff = (index: number) => {
    setOpenTariffIndex(openTariffIndex === index ? null : index);
  };

  const kategori = "hizmetler";
  const slug = "evsel-kati-atik-toplama-ve-tasima-ucreti-tarifesi";

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Evsel Katı Atık Toplama ve Taşıma Ücreti Tarifesi
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Yıllara göre Evsel Katı Atık Toplama, Taşıma ve Bertaraf Ücreti tarifeleri duyuruları ve kararlarına aşağıdan ulaşabilirsiniz.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {tariffs.map((tariff, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-all duration-300">
                <button 
                  onClick={() => toggleTariff(index)}
                  className={`w-full flex items-center justify-between p-5 transition-colors ${openTariffIndex === index ? 'bg-[#8DC63F]/5' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors ${openTariffIndex === index ? 'bg-[#8DC63F]/20' : 'bg-[#1B4F8A]/5'}`}>
                      <svg className={`w-5 h-5 transition-colors ${openTariffIndex === index ? 'text-[#8DC63F]' : 'text-[#1B4F8A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className={`font-semibold text-[15px] sm:text-[16px] tracking-wide transition-colors ${openTariffIndex === index ? 'text-[#8DC63F]' : 'text-gray-800'}`}>
                      {tariff.title}
                    </span>
                  </div>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openTariffIndex === index ? 'rotate-180 bg-[#8DC63F] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${openTariffIndex === index ? 'max-h-[1000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-2 sm:p-4 bg-gray-50">
                    <ul className="flex flex-col">
                      {tariff.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="border-b border-gray-200/60 last:border-0">
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 hover:bg-white hover:text-[#8DC63F] group transition-all duration-200 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2 shrink-0 rounded-full bg-gray-300 group-hover:bg-[#8DC63F] transition-colors"></span>
                              <span className="font-medium text-gray-600 group-hover:text-[#8DC63F] transition-colors text-[14px] sm:text-[15px]">
                                {link.label}
                              </span>
                            </div>
                            <svg className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#8DC63F] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
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

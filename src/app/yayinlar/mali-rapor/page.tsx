"use client";

import React from 'react';
import Link from 'next/link';
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import { reports } from "./data/reports";
import { FileText, Download } from 'lucide-react';

export default function MaliRaporPage() {
  const kategori = "yayinlar";
  const slug = "mali-rapor";

  const categoryData = SITE_DATA[kategori];
  const currentPage = categoryData?.pages.find((p: any) => p.slug === slug);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* BREADCRUMB / HEADER */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">{categoryData?.title}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">{currentPage?.title || "Kurumsal Mali Durum ve Beklentiler Raporu"}</span>
          </div>
        </div>
      </div>
          
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (SIDEBAR) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-2xl font-bold text-[#1B4F8A] tracking-wide flex items-center gap-3">
              <svg className="w-7 h-7 text-[#8DC63F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Kurumsal Mali Durum ve Beklentiler Raporu
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Tekirdağ Büyükşehir Belediyesi kurumsal mali durum, bütçe uygulamaları ve beklentilerine dair hazırlanan raporları aşağıdaki bağlantılardan indirebilirsiniz.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {reports.map((report, index) => (
              <a 
                key={index} 
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:border-[#8DC63F] group transition-all duration-200"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#1B4F8A]/5 flex items-center justify-center group-hover:bg-[#8DC63F]/20 transition-colors">
                    <FileText className="w-5 h-5 text-[#1B4F8A] group-hover:text-[#8DC63F] transition-colors" />
                  </div>
                  <span className="font-semibold text-[15px] sm:text-[16px] text-gray-800 group-hover:text-[#8DC63F] transition-colors tracking-wide">
                    {report.title}
                  </span>
                </div>
                <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#8DC63F] group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <Download className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

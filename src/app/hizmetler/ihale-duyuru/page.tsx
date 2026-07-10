"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";

type Page = {
  slug: string;
  title: string;
};

import { tenders } from './data/tenders';
import Filters from './components/Filters';
import TenderTable from './components/TenderTable';
import Pagination from './components/Pagination';

export default function IhaleDuyuruPage() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const kategori = "hizmetler";
  const slug = "ihale-duyuru";

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound(); 

  const pages = categoryData.pages as Page[];
  const currentPage = pages.find((p) => p.slug === slug);
  if (!currentPage) return notFound(); 

  const handleToggleRow = (id: number) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  const filteredTenders = tenders.filter((tender) =>
    tender.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
    tender.birim.toLowerCase().includes(aramaMetni.toLowerCase())
  );

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
        <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-first">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <Link href={`/${kategori}`}>
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData.title}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {pages.map((p) => {
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
        <div className="w-full flex-1 order-1 lg:order-none">
          
          <div className="mb-6 px-1">
            <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">{currentPage.title}</h1>
            <p className="text-[15px] text-gray-500 mt-1">Güncel ve geçmiş ihale ilanlarını buradan takip edebilirsiniz.</p>
          </div>

          <Filters aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />

          {/* page.tsx içindeki ilgili kısım */}
            <TenderTable 
            tenders={filteredTenders} 
            expandedRowId={expandedRowId} 
            onToggle={handleToggleRow}
            />

          <Pagination />

        </div>
      </section>
    </main>
  );
}
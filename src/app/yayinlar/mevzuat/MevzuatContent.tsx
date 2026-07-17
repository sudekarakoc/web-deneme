"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Download, ExternalLink, FileSpreadsheet, Presentation, Search, Scale } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import { mevzuatListesi } from "./data";

export default function MevzuatContent() {
  const kategori = "yayinlar";
  const slug = "mevzuat";
  const categoryData = SITE_DATA[kategori];

  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const filteredItems = mevzuatListesi.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initial Entry Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, []);

  // Card list animations when search changes
  useEffect(() => {
    if (cardsRef.current.length > 0 && gridRef.current) {
      gsap.killTweensOf(cardsRef.current);
      
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.04,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all"
        }
      );
    }
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* BREADCRUMB / HEADER */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/yayinlar" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Yayınlar
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">Mevzuat</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || "Yayınlar"}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 min-w-0 order-1 lg:order-2 pb-20">
          
          <div ref={headerRef} className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#73B646]/10 text-[#73B646] text-xs font-bold tracking-widest uppercase mb-4">
                <Scale className="w-4 h-4" />
                Mevzuat ve Yönetmelikler
              </span>
              <h1 className="text-[28px] sm:text-[34px] font-black text-[#1B4F8A] tracking-tight leading-tight">
                Mevzuat
              </h1>
              <p className="text-[15px] sm:text-[16px] text-gray-500 mt-3 leading-relaxed">
                Belediye mevzuatları, Resmi Gazete, Resmi Yazışma kuralları ve standart dosya planı eğitim semineri dokümanlarına buradan ulaşabilirsiniz.
              </p>
            </div>
            
            {/* Search Box */}
            <div className="relative w-full sm:w-72 shrink-0">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Mevzuat veya doküman ara..." 
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#009FE3] focus:ring-4 focus:ring-[#009FE3]/10 transition-all"
              />
            </div>
          </div>

          {/* FILES GRID */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">
              Mevzuat ve Bilgi Sistemleri Dokümanları
            </h3>
            <span className="text-sm font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {filteredItems.length} Kayıt
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredItems.map((item, index) => {
                // Determine icon and label by type
                let typeLabel = "BAĞLANTI";
                let IconComponent = ExternalLink;
                let colorClass = "bg-[#73B646]/10 text-[#73B646] group-hover:bg-[#73B646] group-hover:text-white";
                let badgeColor = "text-[#73B646]";

                if (item.type === 'excel') {
                  typeLabel = "EXCEL DOSYASI";
                  IconComponent = FileSpreadsheet;
                } else if (item.type === 'ppt') {
                  typeLabel = "SUNUM DOSYASI";
                  IconComponent = Presentation;
                }

                return (
                  <a
                    key={`${index}-${item.title}`}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#009FE3]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none group-hover:scale-110 duration-500 transform origin-top-right">
                      <Scale className="w-24 h-24 text-[#1B4F8A]" />
                    </div>

                    <div className="flex items-start gap-4 z-10 h-full flex-col justify-between">
                      <div className="flex items-start gap-3 w-full">
                        <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors ${colorClass}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-[#1B4F8A] transition-colors leading-snug line-clamp-3">
                          {item.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-gray-50 group-hover:border-gray-100 transition-colors">
                        <span className={`text-[11px] font-bold tracking-wider uppercase ${badgeColor}`}>
                          {typeLabel}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#1B4F8A] group-hover:text-white transition-colors shadow-sm">
                          {item.type === 'link' ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="py-16 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-gray-100 border-dashed">
              <Search className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-gray-500 font-medium">Bu kriterlere uygun kayıt bulunamadı.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-[#009FE3] font-bold hover:underline text-sm"
              >
                Aramayı Temizle
              </button>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}

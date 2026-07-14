"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { mockUkomeData } from "./data/ukomeData";
import { UkomeMeeting } from "./types/ukome";

export default function UkomePage() {
  const [selectedYil, setSelectedYil] = useState<string>("all");
  const [aramaMetni, setAramaMetni] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Benzersiz yılları bul (Seçenekler için)
  const yillar = useMemo(() => {
    const y = mockUkomeData.map((d) => d.yil);
    return Array.from(new Set(y)).sort((a, b) => b.localeCompare(a));
  }, []);

  // Filtreleme
  const filteredData = mockUkomeData.filter((item) => {
    let match = true;
    if (selectedYil !== "all" && item.yil !== selectedYil) match = false;
    
    if (aramaMetni) {
      const lowerSearch = aramaMetni.toLowerCase();
      const inTitle = item.displayTarih.toLowerCase().includes(lowerSearch);
      const inDocs = item.dokumanlar.some((doc) => doc.baslik.toLowerCase().includes(lowerSearch));
      if (!inTitle && !inDocs) match = false;
    }
    return match;
  }).sort((a, b) => b.tarih.localeCompare(a.tarih));

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* HEADER & HERO */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-12 px-6 lg:px-8 border-b border-[#73B646]/20 relative">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/hizmetler" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Hizmetler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">UKOME Toplantı Kararları</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#1B4F8A] leading-tight tracking-tight mb-3">
              UKOME Toplantı Kararları
            </h1>
            <p className="text-[#3a7d1e] text-[16px] md:text-[18px] leading-relaxed font-medium">
              Ulaşım Koordinasyon Merkezi (UKOME) toplantılarında alınan güncel karar ve ücret tarifelerine buradan ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* FILTER BAR (Yatay Arama Barı) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 lg:p-6 flex flex-col lg:flex-row items-end gap-4">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 ml-1">Yıla Göre Filtrele</label>
            <div className="relative">
              <select
                value={selectedYil}
                onChange={(e) => setSelectedYil(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#009FE3]/50 focus:border-[#009FE3]"
              >
                <option value="all">Tüm Yıllar</option>
                {yillar.map((y) => (
                  <option key={y} value={y}>{y} Yılı</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 ml-1">Kelime ile Ara</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Örn: Ücret Tarifesi, Kararlar..."
                value={aramaMetni}
                onChange={(e) => setAramaMetni(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/50 focus:border-[#009FE3]"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* İÇERİK (Sonuç Listesi) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 pb-20">
        
        {filteredData.length === 0 ? (
           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-20 text-center animate-fade-in mt-6">
            <svg className="w-12 h-12 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
            </svg>
            <p className="text-gray-400 text-[15px] font-medium">Arama kriterlerinize uygun UKOME toplantısı bulunamadı.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mt-6">
            <div className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-widest pl-2">
              Toplam {filteredData.length} Toplantı Bulundu
            </div>
            {filteredData.map((item) => (
              <UkomeCard 
                key={item.id} 
                data={item} 
                isExpanded={expandedId === item.id} 
                onToggle={() => toggleExpand(item.id)} 
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}

function UkomeCard({ data, isExpanded, onToggle }: { data: UkomeMeeting; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${isExpanded ? 'border-[#1B4F8A] ring-1 ring-[#1B4F8A]/20' : 'border-gray-100 hover:border-[#009FE3]/40'}`}>
      
      {/* HEADER / ACCORDION TRIGGER */}
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 lg:px-6 cursor-pointer group text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-[#1B4F8A] text-white' : 'bg-blue-50 text-[#1B4F8A] group-hover:bg-[#1B4F8A] group-hover:text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className={`text-[16px] font-bold transition-colors ${isExpanded ? 'text-[#1B4F8A]' : 'text-gray-800 group-hover:text-[#1B4F8A]'}`}>
              {data.displayTarih}
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-0.5">{data.yil} Yılı Toplantısı</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-100">
             <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 22h16a2 2 0 0 0 2-2V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm13-14.5V9h4.5L17 7.5zM11.5 13c.4 0 .8-.1 1.2-.2v-1c-.3.1-.7.2-1 .2-.5 0-.8-.1-1-.4-.2-.2-.2-.5-.2-1h2.5v-.2c0-1.2-.6-1.9-1.9-1.9-1.3 0-2 1-2 2.3s.7 2.2 2.4 2.2zm-.8-3.1c.4 0 .6.2.7.5H10c.1-.3.3-.5.7-.5zm5.5 1.7h-1.6V13h-1.3v-3.5h1.6c1.1 0 1.6.5 1.6 1.4s-.5 1.4-1.6 1.4v-.7c.4 0 .6-.1.6-.5s-.2-.6-.6-.6zm-5.5 4.5v-3.3H9v3.3h1.7zm3.3 0v-1.1h1.4v-1h-1.4v-1.2h1.6v-1h-2.9v4.3h1.3z" />
            </svg>
            {data.dokumanlar.length} Belge
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-[#1B4F8A] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-[#1B4F8A]/10 group-hover:text-[#1B4F8A]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* DETAY (EXPANDED CONTENT) */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50/50">
          <div className="p-5 lg:px-6 animate-fade-in">
            <h4 className="text-[13px] font-bold tracking-widest uppercase text-gray-400 mb-4 px-1">
              İlgili Dosya ve Dokümanlar
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {data.dokumanlar.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#009FE3] hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 shrink-0 bg-red-50 text-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 22h16a2 2 0 0 0 2-2V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm13-14.5V9h4.5L17 7.5zM11.5 13c.4 0 .8-.1 1.2-.2v-1c-.3.1-.7.2-1 .2-.5 0-.8-.1-1-.4-.2-.2-.2-.5-.2-1h2.5v-.2c0-1.2-.6-1.9-1.9-1.9-1.3 0-2 1-2 2.3s.7 2.2 2.4 2.2zm-.8-3.1c.4 0 .6.2.7.5H10c.1-.3.3-.5.7-.5zm5.5 1.7h-1.6V13h-1.3v-3.5h1.6c1.1 0 1.6.5 1.6 1.4s-.5 1.4-1.6 1.4v-.7c.4 0 .6-.1.6-.5s-.2-.6-.6-.6zm-5.5 4.5v-3.3H9v3.3h1.7zm3.3 0v-1.1h1.4v-1h-1.4v-1.2h1.6v-1h-2.9v4.3h1.3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-gray-800 leading-snug group-hover:text-[#009FE3] transition-colors line-clamp-3">
                      {doc.baslik}
                    </p>
                  </div>
                  <div className="shrink-0 text-gray-300 group-hover:text-[#009FE3] transition-colors self-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

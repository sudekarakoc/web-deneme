"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockHalData } from "./data/halData";
import { HalListe } from "./types/hal";

export default function HalFiyatlariPage() {
  const [selectedHal, setSelectedHal] = useState<"suleymanpasa" | "corlu" | "all">("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filtreleme
  const filteredData = mockHalData.filter((item) => {
    let match = true;
    if (selectedHal !== "all" && item.halId !== selectedHal) match = false;
    if (startDate && item.tarih < startDate) match = false;
    if (endDate && item.tarih > endDate) match = false;
    return match;
  }).sort((a, b) => b.tarih.localeCompare(a.tarih)); // Tarihe göre azalan (En yeni en üstte)

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
            <span className="text-[#009FE3] font-bold">Günlük Hal Fiyatları</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#1B4F8A] leading-tight tracking-tight mb-3">
              Günlük Hal Fiyatları
            </h1>
            <p className="text-[#3a7d1e] text-[16px] md:text-[18px] leading-relaxed font-medium">
              Tekirdağ Büyükşehir Belediyesi&apos;ne ait toptancı hallerindeki günlük meyve ve sebze fiyatlarını takip edebilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* FILTER BAR (Yatay Arama Barı) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 lg:p-6 flex flex-col lg:flex-row items-end gap-4">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 ml-1">Hal Seçimi</label>
            <div className="relative">
              <select
                value={selectedHal}
                onChange={(e) => setSelectedHal(e.target.value as "suleymanpasa" | "corlu" | "all")}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#009FE3]/50 focus:border-[#009FE3]"
              >
                <option value="all">Tüm Haller</option>
                <option value="suleymanpasa">Süleymanpaşa Toptancı Hali</option>
                <option value="corlu">Çorlu Meyve Sebze Toptancı Hali</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 ml-1">Başlangıç Tarihi</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/50 focus:border-[#009FE3]"
            />
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 ml-1">Bitiş Tarihi</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/50 focus:border-[#009FE3]"
            />
          </div>

          <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-auto">
            <button
              onClick={() => setExpandedId(null)} // reset expansions on search
              className="w-full lg:w-auto bg-gradient-to-r from-[#009FE3] to-[#1B4F8A] hover:from-[#1B4F8A] hover:to-[#009FE3] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Listele
            </button>
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
            <p className="text-gray-400 text-[15px] font-medium">Seçili tarihler arasında hal fiyat listesi bulunamadı.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mt-6">
            {filteredData.map((item) => (
              <HalCard 
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

function HalCard({ data, isExpanded, onToggle }: { data: HalListe; isExpanded: boolean; onToggle: () => void }) {
  const isSuleymanpasa = data.halId === "suleymanpasa";
  const halName = isSuleymanpasa ? "Süleymanpaşa Toptancı Hali" : "Çorlu Meyve Sebze Toptancı Hali";
  const halIconBg = isSuleymanpasa ? "bg-amber-50 text-amber-500" : "bg-emerald-50 text-emerald-500";

  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${isExpanded ? 'border-[#009FE3] ring-1 ring-[#009FE3]/20' : 'border-gray-100 hover:border-[#009FE3]/40'}`}>
      
      {/* HEADER / ACCORDION TRIGGER */}
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 lg:px-6 cursor-pointer group text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${halIconBg}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm2 4h12v12H6zm3 2v8h2v-8zm4 0v8h2v-8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-[#1B4F8A] group-hover:text-[#009FE3] transition-colors">
              {data.displayTarih} Tarihli Hal Fiyat Listesi
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-0.5">{halName}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-full border border-gray-100">
            {data.urunler.length} Ürün
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-[#009FE3] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-[#009FE3]/10 group-hover:text-[#009FE3]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* DETAY TABLOSU (EXPANDED CONTENT) */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50/50">
          <div className="p-5 lg:px-6 animate-fade-in">
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/2">Ürün Adı</th>
                    <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Birim</th>
                    <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">En Düşük</th>
                    <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">En Yüksek</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.urunler.map((urun) => (
                    <tr key={urun.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-3 text-[14px] font-semibold text-gray-800">{urun.urunAdi}</td>
                      <td className="px-5 py-3 text-[13px] font-medium text-gray-500 text-center">{urun.birim}</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-gray-700 text-right">{urun.enDusuk.toFixed(2)} ₺</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-gray-700 text-right">{urun.enYuksek.toFixed(2)} ₺</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

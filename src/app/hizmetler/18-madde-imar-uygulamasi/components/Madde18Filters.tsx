"use client";

import React from "react";

interface FiltersProps {
  aramaMetni: string;
  setAramaMetni: (v: string) => void;
  ilceFilter: string;
  setIlceFilter: (v: string) => void;
  durumFilter: string;
  setDurumFilter: (v: string) => void;
}

export default function Madde18Filters({
  aramaMetni,
  setAramaMetni,
  ilceFilter,
  setIlceFilter,
  durumFilter,
  setDurumFilter,
}: FiltersProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col gap-4">
      {/* Arama */}
      <div className="relative">
        <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="madde18-arama"
          type="text"
          placeholder="Dosya no, ada, parsel veya mahalle ile arayın..."
          value={aramaMetni}
          onChange={(e) => setAramaMetni(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* İlçe */}
        <div className="flex-1 relative">
          <select
            id="madde18-ilce"
            aria-label="İlçe seçin"
            value={ilceFilter}
            onChange={(e) => setIlceFilter(e.target.value)}
            className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all appearance-none cursor-pointer"
          >
            <option value="">Tüm İlçeler</option>
            <option value="Süleymanpaşa">Süleymanpaşa</option>
            <option value="Çorlu">Çorlu</option>
            <option value="Çerkezköy">Çerkezköy</option>
            <option value="Muratlı">Muratlı</option>
            <option value="Ergene">Ergene</option>
            <option value="Hayrabolu">Hayrabolu</option>
          </select>
          <svg className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Durum */}
        <div className="flex-1 relative">
          <select
            id="madde18-durum"
            aria-label="Durum seçin"
            value={durumFilter}
            onChange={(e) => setDurumFilter(e.target.value)}
            className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all appearance-none cursor-pointer"
          >
            <option value="">Tüm Durumlar</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Tamamlandı">Tamamlandı</option>
            <option value="Askıda">Askıda</option>
            <option value="İptal">İptal</option>
          </select>
          <svg className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

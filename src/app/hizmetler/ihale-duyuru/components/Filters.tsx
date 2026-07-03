import React from 'react';

interface FiltersProps {
  aramaMetni: string;
  setAramaMetni: (value: string) => void;
}

export default function Filters({ aramaMetni, setAramaMetni }: FiltersProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input 
          type="text" 
          placeholder="İhale adı ara..." 
          value={aramaMetni}
          onChange={(e) => setAramaMetni(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all" 
        />
      </div>
      
      <div className="w-full md:w-56 relative">
        <select aria-label="Birim seçin" className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all appearance-none cursor-pointer">
          <option value="">Tüm Birimler</option>
          <option value="fen">Fen İşleri Dairesi</option>
          <option value="park">Park ve Bahçeler Dairesi</option>
        </select>
        <svg className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      
      <div className="w-full md:w-48 relative">
        <select aria-label="Durum seçin" className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all appearance-none cursor-pointer">
          <option value="">Tüm Durumlar</option>
          <option value="devam">Devam Ediyor</option>
          <option value="yaklasan">Yaklaşıyor</option>
          <option value="sonuclandi">Sonuçlandı</option>
        </select>
        <svg className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
}
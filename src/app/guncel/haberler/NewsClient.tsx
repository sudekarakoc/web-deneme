"use client";

import React, { useState, useMemo, useRef } from "react";
import News from "../../../components/News"; // Yolun doğru olduğundan emin ol

export default function NewsClient({ initialNewsItems }: { initialNewsItems: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredAndSortedNews = useMemo(() => {
    let result = [...initialNewsItems];

    if (searchTerm.trim() !== "") {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortOrder === "newest") return b.id - a.id;
      if (sortOrder === "oldest") return a.id - b.id;
      if (sortOrder === "a-z") return a.title.localeCompare(b.title);
      if (sortOrder === "z-a") return b.title.localeCompare(a.title);
      return 0;
    });

    return result;
  }, [initialNewsItems, searchTerm, sortOrder]);

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
        
        {/* Arama Kutusu Alanı */}
        <div className="w-full md:w-1/2 relative flex items-center">
          
          {/* Senin Eklediğin Arama İkonu */}
          <button 
            onClick={() => inputRef.current?.focus()}
            className="absolute left-3 z-10 flex items-center justify-center text-zinc-400 hover:text-[#1B4F8A] transition-colors"
            title="Arama yapmak için tıklayın"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2.5} 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <input
            ref={inputRef}
            type="text"
            placeholder="Haberlerde ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 relative z-0 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] focus:border-transparent transition-all"
          />

          {/* Sağ Taraftaki Temizleme (Çarpı) İkonu */}
          {searchTerm && (
            <button 
              onClick={() => {
                setSearchTerm("");
                inputRef.current?.focus();
              }}
              className="absolute right-3 z-10 flex items-center justify-center text-zinc-400 hover:text-red-500 transition-colors"
              title="Aramayı Temizle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Sıralama Seçeneği */}
        <div className="w-full md:w-auto flex items-center gap-2">
          <label htmlFor="sort" className="text-zinc-600 font-medium whitespace-nowrap">
            Sırala:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-auto px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] bg-white cursor-pointer"
          >
            <option value="newest">En Yeniler</option>
            <option value="oldest">En Eskiler</option>
            <option value="a-z">A'dan Z'ye</option>
            <option value="z-a">Z'den A'ya</option>
          </select>
        </div>
      </div>

      <p className="text-zinc-500 mb-6 text-sm">
        Toplam {filteredAndSortedNews.length} haber bulundu.
      </p>

      {filteredAndSortedNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredAndSortedNews.map((item) => (
            <News key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-500 bg-white rounded-xl border border-zinc-200">
          Arama kriterlerinize uygun haber bulunamadı.
        </div>
      )}
    </div>
  );
}
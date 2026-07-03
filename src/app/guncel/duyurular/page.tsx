"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";

// Örnek Duyuru Verileri (Tarihler "YYYY-MM-DD" formatında)
const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    title: "2026/239 Nolu Ulaşım ve Trafik Düzenleme Komisyonu Kararı",
    date: "2026-06-25",
    summary: "2026/239 nolu ulaşım ve trafik düzenleme komisyonu kararını içeren detaylı belge yayımlanmıştır.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=T.C.+TEKİRDAĞ+BÜYÜKŞEHİR+BELEDİYESİ",
  },
  {
    id: 2,
    title: "Su Kesintisi Uyarısı - Süleymanpaşa İlçesi",
    date: "2026-07-02",
    summary: "Altyapı yenileme çalışmaları sebebiyle Süleymanpaşa ilçesi genelinde planlı su kesintisi yapılacaktır.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=DUYURU+-+TESKİ",
  },
  {
    id: 3,
    title: "Büyükşehir Belediyesi 2026 Yılı Emlak Vergisi 2. Taksit Ödemeleri",
    date: "2026-06-15",
    summary: "Emlak ve Çevre Temizlik Vergisi 2. taksit ödemeleri için son tarih 30 Kasım 2026 olarak belirlenmiştir.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=VERGİ+ÖDEMELERİ",
  },
  {
    id: 4,
    title: "İl Geneli İlaçlama Çalışmaları Hakkında Bilgilendirme",
    date: "2026-07-01",
    summary: "Yaz aylarının gelmesiyle birlikte vektörle mücadele kapsamında tüm ilçelerde gece ilaçlama çalışmaları başlamıştır.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=SAĞLIK+İŞLERİ",
  },
  {
    id: 5,
    title: "Toplu Taşıma Hat Güzergah Değişikliği",
    date: "2026-06-28",
    summary: "Çorlu ilçesi 4 numaralı halk otobüsü hattının güzergahında geçici süreliğine değişikliğe gidilmiştir.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=ULAŞIM+DAİRESİ",
  },
  {
    id: 6,
    title: "Kültür Merkezi Yaz Kursları Kayıtları Başladı",
    date: "2026-07-03",
    summary: "Çocuklar ve yetişkinler için düzenlenen ücretsiz sanat ve beceri kursları kayıtlarımız başlamıştır.",
    image: "https://placehold.co/600x400/1B4F8A/FFFFFF?text=KÜLTÜR+VE+SANAT",
  },
];

export default function DuyurularPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // newest, oldest
  
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filtreleme ve Sıralama
  const filteredAnnouncements = useMemo(() => {
    let result = [...MOCK_ANNOUNCEMENTS];

    if (searchTerm.trim() !== "") {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortOrder === "newest") return dateB - dateA;
      if (sortOrder === "oldest") return dateA - dateB;
      return 0;
    });

    return result;
  }, [searchTerm, sortOrder]);

  // GSAP Animasyonu (Kartların listelenmesi)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".announcement-card",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          clearProps: "all" 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [filteredAnnouncements]);

  // Arama Çubuğu Placeholder Daktilo (Typewriter) Efekti
  useEffect(() => {
    const phrases = ["Duyurularda ara...", "İlanlarda ara...", "Kararlarda ara..."];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (searchInputRef.current) {
        searchInputRef.current.placeholder = currentPhrase.substring(0, currentCharIndex);
      }

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
        currentCharIndex++;
        timeoutId = setTimeout(type, 100); // Yazma hızı
      } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        timeoutId = setTimeout(type, 50); // Silme hızı
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
        // Bekleme süreleri (yazdıktan sonra ve sildikten sonra)
        timeoutId = setTimeout(type, isDeleting ? 1500 : 500); 
      }
    };
    
    timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Tarihi GG/AA/YYYY formatına çeviren yardımcı fonksiyon
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Container - Responsive padding eklendi */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Sayfa Başlığı */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#1B4F8A] mb-4">
            Duyurular
          </h1>
          <div className="h-1.5 w-20 bg-[#7ab536] mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Büyükşehir Belediyemiz tarafından yayımlanan resmi duyuru, ilan ve kararlara buradan ulaşabilirsiniz.
          </p>
        </div>

        {/* Arama ve Sıralama Çubuğu */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
          
          {/* Arama */}
          <div className="w-full md:w-1/2 relative flex items-center">
            <label htmlFor="search-input" className="sr-only">Duyurular içinde ara</label>
            <div className="absolute left-3 z-10 text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              id="search-input"
              ref={searchInputRef}
              type="text"
              placeholder="Duyurular içinde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] focus:bg-white transition-all"
            />
          </div>

          {/* Sıralama */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <label htmlFor="sort-select" className="text-zinc-500 font-medium whitespace-nowrap">Sırala:</label>
            <select
              id="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-auto px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] cursor-pointer transition-all"
            >
              <option value="newest">Yeniden Eskiye</option>
              <option value="oldest">Eskiden Yeniye</option>
            </select>
          </div>
        </div>

        {/* Duyurular Grid Yapısı - Responsive boşluklar (gap) ve kolonlar eklendi */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                // Hover Efektleri burada: transition-all, hover:-translate-y-2 ve hover:shadow-xl
                className="announcement-card bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                           transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl 
                           overflow-hidden border border-zinc-100 flex flex-col cursor-pointer group"
              >
                {/* Görsel Alanı */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={announcement.image} 
                    alt={announcement.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* İçerik Alanı */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-[#7ab536] font-bold text-[17px] leading-snug mb-4 uppercase group-hover:text-[#64962c] transition-colors line-clamp-3">
                    {announcement.title}
                  </h3>
                  
                  <div className="flex items-center text-zinc-400 text-sm mb-4 font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {formatDate(announcement.date)}
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed uppercase line-clamp-2 mt-auto">
                    {announcement.summary}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-xl border border-zinc-200 shadow-sm">
              <div className="text-zinc-300 mb-3 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-zinc-500 font-medium text-lg">Arama kriterlerinize uygun duyuru bulunamadı.</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-[#1B4F8A] hover:underline font-medium"
              >
                Aramayı Temizle
              </button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
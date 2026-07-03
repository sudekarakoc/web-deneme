"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";

// Örnek Etkinlik Verileri
// Tarihleri "YYYY-MM-DD" formatında tutuyoruz ki sıralaması kolay olsun
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Açık Hava Sinema Günleri",
    category: "Sinema",
    date: "2026-07-15",
    location: "Sahil Dolgu Alanı",
    image: "https://placehold.co/600x800/1B4F8A/FFFFFF?text=Sinema+G%C3%BCnleri",
  },
  {
    id: 2,
    title: "Yaz Konserleri: Gençlik Festivali",
    category: "Müzik",
    date: "2026-07-22",
    location: "Amfi Tiyatro",
    image: "https://placehold.co/600x800/7ab536/FFFFFF?text=Yaz+Konseri",
  },
  {
    id: 3,
    title: "Çocuklar İçin Tiyatro Şenliği",
    category: "Tiyatro",
    date: "2026-08-05",
    location: "Kültür Merkezi",
    image: "https://placehold.co/600x800/D97706/FFFFFF?text=Tiyatro+%C5%9Eenli%C4%9Fi",
  },
  {
    id: 4,
    title: "Geleneksel El Sanatları Sergisi",
    category: "Sergi",
    date: "2026-08-12",
    location: "Kent Müzesi",
    image: "https://placehold.co/600x800/4B5563/FFFFFF?text=El+Sanatlar%C4%B1",
  },
  {
    id: 5,
    title: "Uluslararası Kiraz Festivali",
    category: "Festival",
    date: "2026-06-10",
    location: "Festival Alanı",
    image: "https://placehold.co/600x800/B45309/FFFFFF?text=Kiraz+Festivali",
  },
  {
    id: 6,
    title: "Kitap Fuarı ve İmza Günleri",
    category: "Fuar",
    date: "2026-09-20",
    location: "Fuar Merkezi",
    image: "https://placehold.co/600x800/0F766E/FFFFFF?text=Kitap+Fuar%C4%B1",
  },
];

export default function EtkinliklerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("yaklasan"); // yaklasan, gecmis, a-z
  
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filtreleme ve Sıralama İşlemi
  const filteredEvents = useMemo(() => {
    let result = [...MOCK_EVENTS];

    // 1. Arama
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Sıralama
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortOrder === "yaklasan") return dateA - dateB; // En yakın tarih ilk
      if (sortOrder === "gecmis") return dateB - dateA; // En uzak/geçmiş tarih ilk
      if (sortOrder === "a-z") return a.title.localeCompare(b.title); // A'dan Z'ye
      return 0;
    });

    return result;
  }, [searchTerm, sortOrder]);

  // GSAP Animasyonu (Filtrelenen veri her değiştiğinde tetiklenir)
  useEffect(() => {
    // gsap.context kullanarak React strict mode sorunlarını önlüyoruz
    const ctx = gsap.context(() => {
      // Önceki animasyonları sıfırlayıp yeniden başlatıyoruz
      gsap.fromTo(
        ".event-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, // Kartların 0.1 saniye arayla sırayla gelmesini sağlar
          ease: "power2.out",
          clearProps: "all" // Animasyon bitince inline stilleri temizler (Responsive bozulmasın diye)
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Component unmount olduğunda animasyonları temizle
  }, [filteredEvents]);

  // Arama Çubuğu Placeholder Daktilo (Typewriter) Efekti
  useEffect(() => {
    const phrases = ["Etkinlik ara...", "Mekan ara...", "Kategori ara..."];
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

  // Tarihi gün ve ay olarak ayırmak için yardımcı fonksiyon
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.toLocaleDateString("tr-TR", { day: "numeric" });
    const month = date.toLocaleDateString("tr-TR", { month: "short" }).toUpperCase();
    return { day, month };
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Container - Responsive padding eklendi */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Sayfa Başlığı */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#1B4F8A] mb-4">
            Kültür & Sanat Etkinlikleri
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Şehrimizdeki tüm konser, tiyatro, sergi ve festivalleri buradan takip edebilir, afişleri inceleyebilirsiniz.
          </p>
        </div>

        {/* Arama ve Sıralama Çubuğu */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-200">
          
          {/* Arama */}
          <div className="w-full md:w-1/2 relative flex items-center">
            <div className="absolute left-3 z-10 text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Etkinlik ara..."
              title="Etkinlik ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] focus:bg-white transition-all"
            />
          </div>

          {/* Sıralama */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <span className="text-zinc-500 font-medium whitespace-nowrap">Sırala:</span>
            <select
              aria-label="Etkinlikleri sıralama"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-auto px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] cursor-pointer transition-all"
            >
              <option value="yaklasan">Tarihe Göre (Yaklaşanlar)</option>
              <option value="gecmis">Tarihe Göre (Öncekiler)</option>
              <option value="a-z">İsme Göre (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Etkinlikler Grid (Afiş Alanı) - Responsive gap eklendi */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => {
              const { day, month } = formatDate(event.date);
              
              return (
                <div 
                  key={event.id} 
                  // Hover Efektleri ve Transition güncellendi
                  className="event-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 group flex flex-col cursor-pointer border border-zinc-100"
                >
                  {/* Afiş / Görsel Alanı */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Tarih Rozeti (Görselin üzerinde) */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm shadow-md rounded-xl p-2 text-center min-w-[3.5rem] border border-white/20">
                      <div className="text-xl font-black text-[#1B4F8A] leading-none">{day}</div>
                      <div className="text-xs font-bold text-zinc-500 mt-1">{month}</div>
                    </div>

                    {/* Kategori Etiketi */}
                    <div className="absolute top-4 left-4 bg-[#7ab536] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {event.category}
                    </div>
                  </div>

                  {/* Alt Bilgi Alanı */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-zinc-900 leading-tight mb-3 group-hover:text-[#1B4F8A] transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center text-sm text-zinc-500 font-medium">
                      <svg className="w-4 h-4 mr-1.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-zinc-200">
              <div className="text-zinc-400 mb-3 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-zinc-600 font-medium text-lg">Arama kriterlerinize uygun etkinlik bulunamadı.</p>
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
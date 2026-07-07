"use client";

import React, { useState, useMemo } from "react";

// Örnek Proje Verileri (Gerçek verileri bir API'den çekebilirsin)
const INITIAL_PROJECTS = [
  { id: 1, title: "Hayrabolu İlçesi Kapalı Spor Salonu Projesi", status: "devam_eden", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Spor+Salonu" },
  { id: 2, title: "Marmaraereğlisi İlçesi 21 Derslikli İlkokul Projesi", status: "tamamlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Ilkokul+Projesi" },
  { id: 3, title: "II. Etap Sahil Dolgu Alanı Projesi", status: "tamamlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sahil+Dolgu" },
  { id: 4, title: "Muratlı İnanlı Mesire Alanı Projesi", status: "planlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Mesire+Alani" },
  { id: 5, title: "Çorlu Katı Atık Bertaraf Tesisi", status: "devam_eden", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Kati+Atik" },
  { id: 6, title: "Süleymanpaşa Yeni Otogar Projesi", status: "tamamlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Otogar+Projesi" },
  { id: 7, title: "Kapaklı Kültür Merkezi", status: "planlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Kultur+Merkezi" },
  { id: 8, title: "Ergene Kent Park Yapımı", status: "tamamlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Kent+Park" },
  { id: 9, title: "Malkara Kapalı Pazar Yeri", status: "devam_eden", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Pazar+Yeri" },
  { id: 10, title: "Saray Spor Kompleksi", status: "planlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Spor+Kompleksi" },
  { id: 11, title: "Şarköy Sahil Yolu Düzenlemesi", status: "tamamlanan", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sahil+Yolu" },
  { id: 12, title: "Tekirdağ Merkez Kütüphane", status: "devam_eden", image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Kutuphane" },
];

export default function ProjelerPage() {
  // Varsayılan olarak "Tamamlanan Projeler" seçili gelsin (Görseldeki gibi)
  const [activeTab, setActiveTab] = useState("tamamlanan");

  // Aktif sekmeye göre projeleri filtreleme
  const filteredProjects = useMemo(() => {
    return INITIAL_PROJECTS.filter((project) => project.status === activeTab);
  }, [activeTab]);

  // Sekme (Tab) Bilgileri
  const tabs = [
    { id: "devam_eden", label: "DEVAM EDEN PROJELER" },
    { id: "tamamlanan", label: "TAMAMLANAN PROJELER" },
    { id: "planlanan", label: "PLANLANAN PROJELER" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-40 pb-20">
      {/* pt-28 değeri pt-40 olarak değiştirildi. Hâlâ yakınsa pt-48 veya pt-56 yapabilirsin. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Sayfa Başlığı */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B4F8A] uppercase tracking-wide mb-2">
            Projelerimiz
          </h1>
          <div className="h-1 w-24 bg-[#7ab536] mx-auto rounded-full"></div>
        </div>

        {/* Filtreleme Butonları (Sekmeler) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-sm
                  ${
                    isActive
                      ? "bg-[#7ab536] text-white shadow-md transform scale-105" // Aktif buton stili (Yeşil)
                      : "bg-[#e2e8f0] text-[#475569] hover:bg-[#cbd5e1] hover:text-[#1e293b]" // Pasif buton stili (Açık Mavi/Gri)
                  }
                `}
                aria-label={tab.label}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projeler Grid (Slider yerine, çoklu görünüm) */}
        {/* lg:grid-cols-4 ile yan yana 4 tane, md:grid-cols-3 ile yan yana 3 tane görünür */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col cursor-pointer group"
              >
                {/* Proje Görseli */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  {/* İsteğe bağlı: Görsel üzerine hafif bir karartma efekti eklenebilir */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Proje Başlığı */}
                <div className="p-5 flex-grow flex items-center justify-center">
                  <h3 className="text-center font-semibold text-[#1e293b] text-sm leading-snug group-hover:text-[#1B4F8A] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            // Eğer o kategoride proje yoksa çıkacak uyarı
            <div className="col-span-full py-12 text-center text-zinc-500 bg-white rounded-2xl border border-zinc-200">
              Bu kategoride henüz bir proje bulunmamaktadır.
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
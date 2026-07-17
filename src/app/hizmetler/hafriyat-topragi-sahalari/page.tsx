"use client";

import React from 'react';
import Link from 'next/link';
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

const MapComponent = dynamic(() => import('./components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center border border-gray-200">
      <div className="flex flex-col items-center gap-2 text-gray-400">
        <MapPin size={32} className="animate-bounce" />
        <span className="font-medium">Harita Yükleniyor...</span>
      </div>
    </div>
  )
});

export default function HafriyatSahalariPage() {
  const kategori = "hizmetler";
  const slug = "hafriyat-topragi-sahalari";

  const categoryData = SITE_DATA[kategori];
  const currentPage = categoryData?.pages.find((p: { slug: string }) => p.slug === slug);

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
            <span className="text-[#009FE3] font-bold">{currentPage?.title || "Hafriyat Toprağı Sahaları"}</span>
          </div>
        </div>
      </div>
          
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (SIDEBAR) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-2xl font-bold text-[#1B4F8A] tracking-wide flex items-center gap-3">
              <svg className="w-7 h-7 text-[#8DC63F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Hafriyat Toprağı Sahaları
            </h1>
            <p className="text-[15px] text-gray-500 mt-2">
              Tekirdağ Büyükşehir Belediyesi sınırları içerisinde belirlenen hafriyat toprağı ve inşaat/yıkıntı atıkları döküm sahalarını aşağıdaki harita üzerinden inceleyebilirsiniz.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {/* Harita Bileşeni */}
            <div className="mb-4 relative z-0">
              <MapComponent />
            </div>
            
            {/* Bilgilendirme */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex gap-4">
              <div className="text-blue-500 mt-1 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Harita Kullanımı</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Harita üzerindeki işaretçilere (pin) tıklayarak hafriyat sahasının adını, bulunduğu konumu, açık adresini ve kesin koordinat bilgilerini görüntüleyebilirsiniz. Ayrıca <strong>&quot;Haritada Aç&quot;</strong> butonu ile OpenStreetMap üzerinde detaylı yol tarifi alabilirsiniz.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

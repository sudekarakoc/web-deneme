"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function IstekSikayetPage() {
  const [isLoading, setIsLoading] = useState(true);

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
            <span className="text-gray-400">E-İşlemler</span>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">İstek Şikayet</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#1B4F8A] leading-tight tracking-tight mb-3 uppercase">
            İSTEK ŞİKAYET BAŞVURU VE SORGULAMA
          </h1>
          <p className="text-[#3a7d1e] text-[16px] md:text-[18px] leading-relaxed font-medium">
            Şehrimiz ile ilgili tüm talep, öneri, şikayetlerinizi buradan iletebilir ve başvurularınızı takip edebilirsiniz.
          </p>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 pb-20">
        
        {/* UYARI BANNERI */}
        <div className="flex items-start gap-4 p-5 bg-[#fff3cd] border border-[#ffeeba] text-[#856404] rounded-2xl mb-8 shadow-sm">
          <AlertTriangle className="w-6 h-6 shrink-0 text-[#856404]" strokeWidth={2.2} />
          <div>
            <h4 className="font-bold text-[16px] mb-1">Önemli Bilgilendirme</h4>
            <p className="text-sm leading-relaxed">
              Gıda kolisi yardımı başvuruları bu ekran üzerinden yapılmamaktadır. Gıda kolisi yardımına başvurmak için lütfen{" "}
              <a 
                href="https://www.tekirdag.bel.tr/basvuru_formu/46" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-black font-semibold transition-colors"
              >
                Sosyal Yardım Başvuru Formu&apos;nu
              </a>{" "}
              kullanınız.
            </p>
          </div>
        </div>

        {/* IFRAME & SKELETON */}
        <div className="relative w-full h-[85vh] bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50/80 backdrop-blur-sm">
              {/* Shimmer animation loading block */}
              <div className="w-16 h-16 border-4 border-gray-200 border-t-[#009FE3] rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-semibold text-sm animate-pulse">Çözüm Merkezi Bağlantısı Kuruluyor...</p>
            </div>
          )}
          
          <iframe 
            src="https://candancozum.tekirdag.bel.tr/web-ticket.html?tscf=1" 
            style={{ width: "100%", height: "100%", border: "none" }}
            onLoad={() => setIsLoading(false)}
            title="Candan Çözüm İstek Şikayet Formu"
          />
        </div>

      </div>
    </main>
  );
}

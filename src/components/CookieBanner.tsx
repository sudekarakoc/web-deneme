"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false); // Komponentin DOM'da olup olmadığını kontrol eder
  const [animate, setAnimate] = useState(false); // CSS animasyonunu tetikler

  useEffect(() => {
    // sessionStorage kontrolünü kaldırdık. 
    // Sayfa her yüklendiğinde doğrudan banner'ı gösteriyoruz.
    setShowBanner(true);
    
    // DOM'a eklendikten kısa bir süre sonra animasyonu başlat
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (action?: "accepted" | "rejected") => {
    // Hafızaya kaydetme işlemini çıkardık, sadece animasyonla kapatıyoruz.
    setAnimate(false);
    
    // Aksiyon parametresi ileride kullanılabilir.
    // Animasyon bittikten sonra (500ms) DOM'dan kaldır
    setTimeout(() => setShowBanner(false), 500);
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-6 left-1/2 w-max max-w-[95%] sm:max-w-lg bg-white border border-gray-200 rounded-full shadow-2xl pl-5 pr-2 py-2 flex items-center justify-between gap-4 sm:gap-8 z-50 transition-all duration-500 ease-out transform -translate-x-1/2 
        ${animate ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
      `}
    >
      
      {/* Metin ve Link Alanı */}
      <div className="flex flex-col py-1">
        <span className="text-[#333333] text-xs sm:text-sm font-medium leading-tight">
          Daha iyi bir deneyim için çerezleri kullanıyoruz.
        </span>
        <a 
          href="/cerez-politikasi" 
          className="text-[11px] sm:text-xs text-[#666666] hover:text-[#008CCB] underline transition-colors mt-0.5"
        >
          Daha Fazla Detay
        </a>
      </div>

      {/* Aksiyon Butonları (Yuvarlak İkonlar) */}
      <div className="flex items-center gap-1 shrink-0">
        
        {/* Reddet Butonu (Çarpı) */}
        <button
          onClick={() => handleClose("rejected")}
          className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Reddet"
          title="Reddet"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Kabul Et Butonu (Tik) */}
        <button
          onClick={() => handleClose("accepted")}
          className="flex items-center justify-center w-10 h-10 bg-[#008CCB] text-white rounded-full hover:bg-[#007AB5] transition-colors shadow-md"
          aria-label="Kabul Et"
          title="Kabul Et"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>

      </div>
    </div>
  );
}
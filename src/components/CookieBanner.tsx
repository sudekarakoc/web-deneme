"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // localStorage yerine sessionStorage kullanarak oturum bazlı kontrol yapıyoruz
    const consent = sessionStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    sessionStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white border border-gray-200 rounded-lg shadow-xl p-4 sm:p-5 z-50">
      
      {/* Çarpı (Kapatma) Butonu */}
      <button
        onClick={handleReject}
        className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-7 h-7 bg-[#e2e8f0] text-gray-700 rounded-full hover:bg-gray-300 transition-colors shadow-sm"
        aria-label="Kapat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Metin İçeriği */}
      <p className="text-[#333333] text-xs sm:text-sm leading-relaxed mb-4 pr-2">
        Size daha iyi hizmet verebilmek amacıyla kişisel verilerinizi mevzuata uygun olarak çerezler
        aracılığıyla kaydedip işliyoruz. Ayrıntılı bilgiye Çerez Politikası’ndan{" "}
        <a href="/cerez-politikasi" className="font-bold underline text-black hover:text-gray-700 transition-colors">
          ulaşabilirsiniz.
        </a>
      </p>

      {/* Aksiyon Butonları */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-4">
        <button
          onClick={handleReject}
          className="text-[#666666] hover:text-black underline text-xs sm:text-sm font-medium transition-colors"
        >
          Tümünü Reddet
        </button>
        
        <button
          onClick={handleAccept}
          className="bg-[#008CCB] hover:bg-[#007AB5] text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto"
        >
          Tümünü Kabul Et
        </button>
      </div>
      
    </div>
  );
}
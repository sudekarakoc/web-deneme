"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerEIslemler = () => {
    window.dispatchEvent(new CustomEvent("open-e-islemler"));
  };

  const triggerServices = () => {
    window.dispatchEvent(
      new CustomEvent("open-services", { detail: { tab: "Hizmetler" } })
    );
  };

  return (
    <div
      className={`lg:hidden fixed bottom-6 left-4 right-4 z-50 bg-white/95 backdrop-blur-md border border-gray-100 rounded-full shadow-[0_10px_35px_rgba(15,45,82,0.16)] px-2 py-2 transition-all duration-500 ease-out transform ${
        isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-24 scale-95 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center max-w-sm mx-auto">
        
        {/* İLETİŞİM (WhatsApp) */}
        <Link
          href="/iletisim"
          className="flex flex-col items-center gap-1 group flex-1 text-center py-0.5"
        >
          <div className="w-11 h-11 rounded-full bg-[#4CD05C] hover:bg-[#3ec14e] text-white flex items-center justify-center shadow-md active:scale-90 hover:scale-105 transition-all duration-300">
            <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.768 2.589-5.768 5.77 0 1.018.266 2.016.773 2.893l-.823 3.01 3.08-.807a5.736 5.736 0 0 0 2.738.704c3.182 0 5.77-2.59 5.77-5.77 0-3.18-2.588-5.77-5.77-5.77zm3.402 8.163c-.144.403-.72.738-.992.763-.264.026-.603.047-1.753-.42-1.47-.6-2.402-2.1-2.476-2.198-.073-.098-.593-.79-.593-1.507 0-.717.365-1.07.495-1.217.13-.146.285-.183.38-.183.095 0 .19.002.273.005.087.004.204-.015.318.263.119.288.408.995.443 1.07.036.073.059.159.01.257-.048.098-.073.159-.145.244-.073.085-.152.19-.218.255-.073.073-.15.153-.064.299.086.147.38.629.815 1.016.56.498 1.03.653 1.178.727.147.073.235.062.32-.038.087-.1.367-.427.465-.573.098-.146.196-.122.328-.074.132.049.837.395.981.467.145.072.242.109.277.17.035.06.035.348-.109.756z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors leading-none tracking-tight">
            İletişim
          </span>
        </Link>

        {/* E-İŞLEMLER */}
        <button
          onClick={triggerEIslemler}
          className="flex flex-col items-center gap-1 group flex-1 text-center py-0.5"
        >
          <div className="w-11 h-11 rounded-full bg-[#1B4F8A] hover:bg-[#153f6e] text-white flex items-center justify-center shadow-md active:scale-90 hover:scale-105 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth={1} strokeDasharray="3 3" opacity={0.5} />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.5c-2.5 0-4.5 1.5-4.5 4s2 4 4.5 4M9 10h5.5M9 13h5.5M10.5 6v12" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors leading-none tracking-tight">
            E-İşlemler
          </span>
        </button>

        {/* HIZLI ERİŞİM */}
        <button
          onClick={triggerServices}
          className="flex flex-col items-center gap-1 group flex-1 text-center py-0.5"
        >
          <div className="w-11 h-11 rounded-full bg-[#009FE3]/8 text-[#009FE3] hover:bg-[#009FE3]/15 flex items-center justify-center shadow-sm active:scale-90 hover:scale-105 transition-all duration-300">
            <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
              <rect x="3" y="3" width="18" height="18" rx="4.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 9v12M15 9v12" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors leading-none tracking-tight">
            Hızlı Erişim
          </span>
        </button>

        {/* YUKARI KAYDIR */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-1 group flex-1 text-center py-0.5"
        >
          <div className="w-11 h-11 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 flex items-center justify-center shadow-sm active:scale-90 hover:scale-105 transition-all duration-300">
            <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors leading-none tracking-tight">
            Yukarı Kaydır
          </span>
        </button>

      </div>
    </div>
  );
}

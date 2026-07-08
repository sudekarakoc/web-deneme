"use client";
import { useState, useRef, useEffect } from "react";
import { getNavItems } from "@/lib/data"; 
import MegaDropdown from "./Dropdown";

export default function DesktopMenu({ theme, onOpenServices }: { theme: "light" | "dark"; onOpenServices: (tab?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const lineBg = theme === "light" ? "bg-white" : "bg-[#1B4F8A]";
  const menuItems = getNavItems(); 

  return (
    <div ref={menuRef} className="hidden lg:flex relative items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-10 h-10 flex justify-center items-center rounded-lg transition-colors ${
          theme === "light" 
            ? "hover:bg-white/10" 
            : "hover:bg-gray-100"
        }`}
        aria-label="Menü"
      >
        <div className="relative w-6 h-[18px]">
          {/* 1. ÜST ÇİZGİ: Tam boy (w-6) */}
          <span 
            className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "top-[8px] rotate-45 w-6" : "top-0 w-6"
            }`} 
          />
          
          {/* 2. ORTA ÇİZGİ: Biraz kısa (w-5) */}
          <span 
            className={`absolute right-0 top-[8px] h-[1.5px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "opacity-0 translate-x-3 w-5" : "opacity-100 w-5"
            }`} 
          />
          
          {/* 3. ALT ÇİZGİ: En kısa (w-3.5). Menü açılınca X olabilmesi için w-6'ya uzar */}
          <span 
            className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "top-[8px] -rotate-45 w-6" : "top-[16px] w-3.5"
            }`} 
          />
        </div>
      </button>

      {isOpen && (
        <MegaDropdown 
          items={menuItems} 
          onClose={() => setIsOpen(false)} 
          onOpenServices={(tab) => {
            setIsOpen(false); // Önce mevcut büyük dropdown menüyü kapatıyoruz
            
            // Üst bileşenden gelen fonksiyonu tetikliyoruz.
            // Böylece üst bileşendeki TEK bir modal, doğru tab parametresiyle ("Hizmetler" veya "Yayınlar") açılıyor.
            if (onOpenServices) onOpenServices(tab); 
          }} 
        />
      )}
    </div>
  );
}
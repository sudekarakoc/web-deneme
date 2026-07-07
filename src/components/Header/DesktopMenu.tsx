"use client";
import { useState, useRef, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import MegaDropdown from "./Dropdown";

export default function DesktopMenu({ theme }: { theme: "light" | "dark" }) {
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

  // Çizgilerin renk mantığı (Tema değiştiğinde okunabilir olması için)
  const lineBg = theme === "light" ? "bg-white" : "bg-[#1B4F8A]";

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
        {/* Animasyonlu Hamburger İkonu Konteyneri */}
        <div className="relative w-6 h-[18px]">
          {/* Üst Çizgi */}
          <span 
            className={`absolute left-0 w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "top-[8px] rotate-45" : "top-0"
            }`} 
          />
          
          {/* Orta Çizgi */}
          <span 
            className={`absolute left-0 top-[8px] w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "opacity-0 translate-x-3" : "opacity-100"
            }`} 
          />
          
          {/* Alt Çizgi */}
          <span 
            className={`absolute left-0 w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${lineBg} ${
              isOpen ? "top-[8px] -rotate-45" : "top-[16px]"
            }`} 
          />
        </div>
      </button>

      {isOpen && <MegaDropdown items={NAV_ITEMS} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
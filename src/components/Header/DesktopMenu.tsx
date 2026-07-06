"use client";
import { useState, useRef, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import MegaDropdown from "./Dropdown";

export default function DesktopMenu({ theme }: { theme: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Eğer tıklanan yer menünün dışındaysa kapat
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

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-bold text-[15px] px-4 py-2 rounded-lg transition-colors ${
          theme === "light" 
            ? "text-white hover:bg-white/10" 
            : "text-gray-800 hover:bg-gray-100"
        }`}
      >
        Menü
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && <MegaDropdown items={NAV_ITEMS} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
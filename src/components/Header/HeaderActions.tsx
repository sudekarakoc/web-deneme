"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import EIslemlerMenu from "../EIslemlerMenu";

export default function HeaderActions({ theme = "light" }: { theme?: "light" | "dark" }) {
  // Menünün açık/kapalı durumunu burada tutuyoruz
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="items-center hidden gap-3 shrink-0 lg:flex">
      <SearchBar theme={theme} />
      
      {/* Link yerine button kullanıyoruz ve onClick ekliyoruz */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className={`px-6 py-2.5 rounded-full font-bold backdrop-blur-md transition-all whitespace-nowrap border ${
          theme === "light"
            ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#1B4F8A]"
            : "bg-[#1B4F8A] border-[#1B4F8A] text-white hover:bg-[#1B4F8A]/90 hover:shadow-md"
        }`}
      >
        E-İşlemler
      </button>

      {/* Menüyü çağırıp state'leri prop olarak gönderiyoruz */}
      {/* Props casted to any to satisfy differing component prop types */}
      <EIslemlerMenu {...({ isOpen: isMenuOpen, setIsOpen: setIsMenuOpen } as any)} />
    </div>
  );
}
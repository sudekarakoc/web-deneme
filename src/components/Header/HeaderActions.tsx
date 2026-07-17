"use client";

import SearchBar from "./SearchBar";
import Link from "next/link";

interface HeaderActionsProps {
  theme?: "light" | "dark";
  onOpenEIslemler: () => void;
}

export default function HeaderActions({ theme = "light", onOpenEIslemler }: HeaderActionsProps) {
  return (
    <div className="hidden lg:flex items-center gap-3 shrink-0">
      <SearchBar theme={theme} />


      <button 
        onClick={onOpenEIslemler}
        aria-label="E-İşlemler Menüsünü Aç"
        className={`px-6 py-2.5 rounded-full font-bold backdrop-blur-md transition-all whitespace-nowrap border ${
          theme === "light"
            ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#1B4F8A]"
            : "bg-[#1B4F8A] border-[#1B4F8A] text-white hover:bg-[#1B4F8A]/90 hover:shadow-md"
        }`}
      >
        E-İşlemler
      </button>
    </div>
  );
}
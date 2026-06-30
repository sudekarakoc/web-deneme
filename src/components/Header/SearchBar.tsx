"use client";

import { useState, useRef, useEffect } from "react";

export default function SearchBar({ theme }: { theme: "light" | "dark" }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setTimeout(() => searchInputRef.current?.focus(), 150);
    } else {
      console.log("Aranıyor:", searchInputRef.current?.value);
    }
  };

  const containerClass = theme === "light"
    ? isSearchOpen
      ? "w-64 bg-white/20 border-white/50 pl-4 shadow-inner"
      : "w-11 bg-white/10 border-white/20 hover:bg-white group"
    : isSearchOpen
      ? "w-64 bg-gray-100 border-gray-300 pl-4 shadow-inner"
      : "w-11 bg-gray-100 border-gray-200 hover:bg-gray-200 group";

  const inputClass = theme === "light"
    ? "text-white placeholder-white/70"
    : "text-gray-800 placeholder-gray-500";

  const buttonClass = isSearchOpen
    ? theme === "light" ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-800"
    : theme === "light" ? "text-white group-hover:text-[#1B4F8A]" : "text-gray-700 group-hover:text-[#1B4F8A]";

  return (
    <div
      ref={searchRef}
      className={`flex items-center transition-all duration-300 ease-in-out border rounded-full backdrop-blur-md overflow-hidden ${containerClass}`}
    >
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Sitede ara..."
        className={`bg-transparent outline-none text-[15px] transition-all duration-300 ${inputClass} ${
          isSearchOpen ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
        onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
      />
      <button
        onClick={handleSearchClick}
        className={`w-11 h-[42px] flex items-center justify-center transition-colors shrink-0 ${buttonClass}`}
        aria-label="Arama Yap"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  );
}
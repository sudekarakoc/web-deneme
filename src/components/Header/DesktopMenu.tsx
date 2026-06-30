"use client";

import { useState, useRef, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import Dropdown from "./Dropdown";

export default function DesktopMenu({ theme }: { theme: "light" | "dark" }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDesktopMenuClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div ref={desktopNavRef} className="hidden lg:flex items-center gap-8 ml-auto mr-6">
      {NAV_ITEMS.map((item) => (
        <div key={item.label} className="relative">
          <button
            onClick={() => handleDesktopMenuClick(item.label)}
            className={`flex items-center gap-1.5 font-bold text-[15px] transition-colors ${
              theme === "light"
                ? activeDropdown === item.label ? "text-white" : "text-white/90 hover:text-white"
                : activeDropdown === item.label ? "text-[#1B4F8A]" : "text-gray-800 hover:text-[#1B4F8A]"
            }`}
          >
            {item.label}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </button>
          
          {activeDropdown === item.label && item.sub && (
            <Dropdown subItems={item.sub} onClose={() => setActiveDropdown(null)} />
          )}
        </div>
      ))}
    </div>
  );
}
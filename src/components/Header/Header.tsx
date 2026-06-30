"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Anasayfada mıyız?

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ARKA PLAN MANTIĞI:
  const headerBgClass = isHomePage
    ? isScrolled
      ? "bg-[#1B4F8A]/90 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-[#EAF4E2]"; // İç sayfalarda header arka planı başlıkla birebir aynı renk olacak

  // TEMA MANTIĞI (İşte yazıları koyulaştıran kısım burası):
  // Anasayfada koyu zemin üstünde beyaz yazılar (light), iç sayfada açık zemin üstünde koyu yazılar (dark)
  const theme = isHomePage ? "light" : "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${headerBgClass}`}
      >
        {/* --- ŞEFFAF TOPBAR --- */}
        <Topbar isScrolled={isScrolled} theme={theme} />

        {/* --- ANA MENÜ --- */}
        <div className="flex items-center justify-between px-6 lg:px-8 py-4 transition-all duration-300">
          <Logo />
          <DesktopMenu theme={theme} />
          <HeaderActions theme={theme} />

          {/* MOBİL HAMBURGER BUTONU */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ml-auto ${
              theme === "light" ? "text-white" : "text-gray-800 hover:bg-white/50"
            }`}
            title="Mobil Menü Aç" aria-label="Mobil Menü Aç"
          >
            <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- MOBİL YAN MENÜ --- */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
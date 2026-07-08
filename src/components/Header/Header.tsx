"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";
import ServicesModal from "../ServicesModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesPopupOpen, setIsServicesPopupOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("Hizmetler");
  
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
    : "bg-[#EAF4E2]";

  // TEMA MANTIĞI:
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

          {/* MASAÜSTÜ MENÜ VE AKSİYONLAR */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            {/* @ts-ignore */}
            <DesktopMenu 
              theme={theme}
              onOpenServices={(tab) => {
              if (tab) setActiveModalTab(tab); // Tıklanan kategori ("Hizmetler" veya "Yayınlar") state'e kaydedilir
              setIsServicesPopupOpen(true); // Modalı aç
              }}
            />
            <HeaderActions theme={theme} />
          </div>

          {/* MOBİL HAMBURGER BUTONU */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex justify-center items-center rounded-lg transition-colors hover:bg-black/5"
              aria-label="Mobil Menü"
            >
              <div className="relative w-6 h-[18px]">
                {/* 1. ÜST ÇİZGİ */}
                {/* Not: bg-[#1B4F8A] rengini kendi mobil temanın rengine göre (örneğin bg-white veya lineBg) değiştirebilirsin */}
                <span 
                  className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out bg-[#1B4F8A] ${
                    isMobileMenuOpen ? "top-[8px] rotate-45 w-6" : "top-0 w-6"
                  }`} 
                />
                
                {/* 2. ORTA ÇİZGİ */}
                <span 
                  className={`absolute right-0 top-[8px] h-[1.5px] rounded-full transition-all duration-300 ease-out bg-[#1B4F8A] ${
                    isMobileMenuOpen ? "opacity-0 translate-x-3 w-5" : "opacity-100 w-5"
                  }`} 
                />
                
                {/* 3. ALT ÇİZGİ */}
                <span 
                  className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out bg-[#1B4F8A] ${
                    isMobileMenuOpen ? "top-[8px] -rotate-45 w-6" : "top-[16px] w-3.5"
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBİL YAN MENÜ --- */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onOpenServices={() => setIsServicesPopupOpen(true)} // Modal tetikleyici eklendi
      />

      {/* --- TÜM HİZMETLER MODALI (POP-UP) --- */}
      <ServicesModal 
      isOpen={isServicesPopupOpen} 
      onClose={() => setIsServicesPopupOpen(false)} 
      activeTab={activeModalTab} // BİLGİ BURADAN MODAL'A GİRER
    />
    </>
  );
}
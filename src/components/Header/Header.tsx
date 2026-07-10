"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; 
import gsap from "gsap";
import Logo from "./Logo";
import TopBar from "./Topbar";
import DesktopMenu from "./DesktopMenu";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";
import ServicesModal from "../ServicesModal";
import EIslemlerMenu from "../EIslemlerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesPopupOpen, setIsServicesPopupOpen] = useState(false);
  const [isEIslemlerOpen, setIsEIslemlerOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("Hizmetler");
  
  const pathname = usePathname();
  const isHomePage = pathname === "/"; 
  const headerRef = useRef<HTMLElement>(null);

  // Scroll Dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa Yüklemesinde GSAP Giriş Animasyonu
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // ARKA PLAN MANTIĞI:
  const headerBgClass = isScrolled
    ? "bg-[#1B4F8A] shadow-lg backdrop-blur-sm" 
    : "bg-transparent"; 

  // YENİ TEMA MANTIĞI:
  // Anasayfadaysak VEYA sayfa aşağı kaydırıldıysa (header lacivert olduysa) tema "light" (beyaz metin/buton) olsun.
  // Sadece iç sayfalarda ve sayfa en üstteyken tema "dark" (lacivert metin/buton) kalsın.
  const theme = (isHomePage || isScrolled) ? "light" : "dark";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 flex flex-col ${headerBgClass}`}
      >
        <TopBar isScrolled={isScrolled} theme={theme} />

        {/* --- ANA MENÜ --- */}
        <div className="flex items-center justify-between px-6 lg:px-8 py-4 transition-all duration-300">
          <Logo theme={theme} />

          {/* MASAÜSTÜ MENÜ VE AKSİYONLAR */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <DesktopMenu 
              theme={theme}
              onOpenServices={(tab) => {
                if (tab) setActiveModalTab(tab); 
                setIsServicesPopupOpen(true); 
              }}
            />
            <HeaderActions
              theme={theme}
              onOpenEIslemler={() => setIsEIslemlerOpen(true)}
            />
          </div>

          {/* MOBİL E-İŞLEMLER BUTONU */}
          <button
            onClick={() => setIsEIslemlerOpen(true)}
            className={`lg:hidden ml-auto px-3 py-1.5 text-[12px] font-bold rounded-lg shadow-sm active:scale-95 transition-all mr-4 ${
              theme === "light"
                ? "bg-white text-[#0F2D52]"
                : "bg-[#0F2D52] text-white"
            }`}
          >
            E-İşlemler
          </button>

          {/* MOBİL HAMBURGER BUTONU */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex justify-center items-center rounded-lg transition-colors hover:bg-black/5"
              aria-label="Mobil Menü"
            >
              <div className="relative w-6 h-[18px]">
                {/* 1. ÜST ÇİZGİ */}
                <span 
                  className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${
                    theme === "light" ? "bg-white" : "bg-[#0F2D52]"
                  } ${isMobileMenuOpen ? "top-[8px] rotate-45 w-6" : "top-0 w-6"}`} 
                />
                
                {/* 2. ORTA ÇİZGİ */}
                <span 
                  className={`absolute right-0 top-[8px] h-[1.5px] rounded-full transition-all duration-300 ease-out ${
                    theme === "light" ? "bg-white" : "bg-[#0F2D52]"
                  } ${isMobileMenuOpen ? "opacity-0 translate-x-3 w-5" : "opacity-100 w-5"}`} 
                />
                
                {/* 3. ALT ÇİZGİ */}
                <span 
                  className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${
                    theme === "light" ? "bg-white" : "bg-[#0F2D52]"
                  } ${isMobileMenuOpen ? "top-[8px] -rotate-45 w-6" : "top-[16px] w-3.5"}`} 
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
      />

      {/* --- TÜM HİZMETLER MODALI (POP-UP) --- */}
      <ServicesModal 
        isOpen={isServicesPopupOpen} 
        onClose={() => setIsServicesPopupOpen(false)} 
        activeTab={activeModalTab} 
      />

      <EIslemlerMenu
        isOpen={isEIslemlerOpen}
        setIsOpen={setIsEIslemlerOpen}
      />
    </>
  );
}
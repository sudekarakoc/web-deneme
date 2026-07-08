"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import Link from "next/link";

interface EIslemlerMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function EIslemlerMenu({ isOpen, setIsOpen }: EIslemlerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const eIslemlerList = [
    { title: "Hızlı Borç Öde", href: "https://ebelediye.tekirdag.bel.tr/", target: "_blank" },
    { title: "Su Faturası Öde", href: "https://www.teski.gov.tr/sube/index.aspx", target: "_blank" },
    { 
      title: "Başvuru Formları", 
      subItems: [
        { title: "Gezi Başvuru Formu", href: "/gezi-basvurusu" },
        { title: "Tam Bağımlı Özel Gereksinimli Bireyi Bulunan Hanelere Yönelik Başvuru Formu", href: "/ozel-gereksinimli-basvurusu" },
        { title: "HPV Aşısı Başvuru Formları", href: "/hpv-asisi-basvurusu" },
        { title: "Gıda Kolisi Yardımı Başvuru Formu", href: "/gida-kolisi-basvurusu" },
        { title: "Dijital Gençlik Merkezi", href: "/dijital-genclik-merkezi" },
        { title: "Evde Temizlik", href: "/evde-temizlik" },
        { title: "Tekerlekli Sandalye Tamiri", href: "/tekerlekli-sandalye-tamiri" },
        { title: "Evde Kişisel Bakım Hizmeti Talebi", href: "/evde-kisisel-bakim" },
        { title: "Evde Kuaför Hizmeti Talebi", href: "/evde-kuafor" },
        { title: "Kapaklı Sosyal Yaşam Merkezi Başvuruları", href: "/kapakli-sosyal-yasam" },
        { title: "Asker Destek Paketi", href: "/asker-destek-paketi" },
        { title: "Yenidoğan Destek Paketi", href: "/yenidogan-destek-paketi" }
      ]
    },
    { title: "İstek Şikayet", href: "/istek-sikayet" },
    { title: "E-Devlet Hizmetleri", href: "https://www.turkiye.gov.tr/tekirdag-buyuksehir-belediyesi-hizmetleri-sorgulama", target: "_blank" },
    { title: "Kent Rehberi", href: "https://harita.tekirdag.bel.tr/kentrehberi/", target: "_blank" },
    { title: "E-Mezarlık", href: "https://emezarlik.tekirdag.bel.tr/", target: "_blank" },
    { title: "Sosyal Portal", href: "https://sosyal.tekirdag.bel.tr/", target: "_blank" },
    { title: "Tekirdağ Ulaşım Ruhsat Başvuru Sistemi", href: "https://turbas.tekirdag.bel.tr/Authentication/Login", target: "_blank" },
  ];

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.1 });
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.1 });
      gsap.to(menuRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
      document.body.style.overflow = "auto";
      
      setTimeout(() => setExpandedItem(null), 400); 
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return createPortal(
    <>
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-[9998] invisible opacity-0 bg-transparent"
      ></div>

      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 z-[9999] w-full h-full max-w-sm bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col"
      >
        <div className="flex items-center justify-between p-6 bg-[#1B4F8A] text-white rounded-bl-3xl">
          <h2 className="text-xl font-bold tracking-wide">E-İŞLEMLER</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 transition-colors rounded-full text-white/80 hover:bg-white/20 hover:text-white"
            title="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 custom-scrollbar">
          <ul className="space-y-3">
            {eIslemlerList.map((item, index) => {
              const hasSubItems = !!item.subItems;
              const isExpanded = expandedItem === item.title;

              return (
                <li key={index} className="flex flex-col">
                  {hasSubItems ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                        // isExpanded mantığı burada değiştirildi. Açıkken yazı siyah/mavi arası kalacak.
                        className={`flex items-center justify-between px-4 py-3 font-medium transition-all border rounded-xl group ${
                          isExpanded 
                            ? "bg-[#1B4F8A]/5 border-[#1B4F8A]/30 text-[#1B4F8A] shadow-sm" 
                            : "bg-white border-gray-100 text-gray-700 hover:bg-[#1B4F8A] hover:text-white hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center">
                          {/* Nokta ikonu hover ve aktif durumlarda ezilmesin diye düzeltildi */}
                          <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors shrink-0 ${
                            isExpanded ? "bg-[#1B4F8A]" : "bg-[#1B4F8A] group-hover:bg-white"
                          }`}></span>
                          {item.title}
                        </div>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 py-2 ml-3 border-l-2 space-y-2 border-[#1B4F8A]/20">
                          {item.subItems.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm font-medium leading-snug text-gray-600 transition-colors rounded-lg hover:bg-[#1B4F8A]/10 hover:text-[#1B4F8A]"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      // Ana linkler için target okuması eklendi
                      target={item.target || "_self"}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 font-medium text-gray-700 transition-all bg-white border border-gray-100 rounded-xl hover:bg-[#1B4F8A] hover:text-white hover:shadow-md hover:-translate-y-0.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#1B4F8A] group-hover:bg-white mr-3 transition-colors"></span>
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="p-4 text-xs text-center text-gray-400 border-t border-gray-100 bg-gray-50">
          Tekirdağ Büyükşehir Belediyesi
        </div>
      </div>
    </>,
    document.body
  );
}
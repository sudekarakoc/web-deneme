"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import Link from "next/link";
import { 
  CreditCard, 
  Droplets, 
  ClipboardList, 
  MessageSquare, 
  Globe, 
  Map, 
  MapPin, 
  Heart, 
  FileText, 
  ChevronDown, 
  X 
} from "lucide-react";

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
    const handleOpenEvent = (e: CustomEvent<{ expandedItem: string }>) => {
      if (e.detail?.expandedItem) {
        setExpandedItem(e.detail.expandedItem);
      }
    };
    window.addEventListener("open-e-islemler", handleOpenEvent as EventListener);
    return () => window.removeEventListener("open-e-islemler", handleOpenEvent as EventListener);
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "auto";
    };
  }, []);

  const eIslemlerList = [
    { 
      title: "Hızlı Borç Öde", 
      href: "https://ebelediye.tekirdag.bel.tr/", 
      target: "_blank", 
      Icon: CreditCard 
    },
    { 
      title: "Su Faturası Öde", 
      href: "https://www.teski.gov.tr/sube/index.aspx", 
      target: "_blank", 
      Icon: Droplets 
    },
    { 
      title: "Başvuru Formları", 
      Icon: ClipboardList,
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
    { 
      title: "İstek Şikayet", 
      href: "/istek-sikayet", 
      Icon: MessageSquare 
    },
    { 
      title: "E-Devlet Hizmetleri", 
      href: "https://www.turkiye.gov.tr/tekirdag-buyuksehir-belediyesi-hizmetleri-sorgulama", 
      target: "_blank", 
      Icon: Globe 
    },
    { 
      title: "Kent Rehberi", 
      href: "https://harita.tekirdag.bel.tr/kentrehberi/", 
      target: "_blank", 
      Icon: Map 
    },
    { 
      title: "E-Mezarlık", 
      href: "https://emezarlik.tekirdag.bel.tr/", 
      target: "_blank", 
      Icon: MapPin 
    },
    { 
      title: "Sosyal Portal", 
      href: "https://sosyal.tekirdag.bel.tr/", 
      target: "_blank", 
      Icon: Heart 
    },
    { 
      title: "Tekirdağ Ulaşım Ruhsat Başvuru Sistemi", 
      href: "https://turbas.tekirdag.bel.tr/Authentication/Login", 
      target: "_blank", 
      Icon: FileText 
    },
  ];

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 });
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
        className="fixed inset-0 z-[9998] invisible opacity-0 bg-slate-900/10 backdrop-blur-md transition-all"
      ></div>

      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 z-[9999] w-full h-full max-w-[420px] bg-white text-gray-800 rounded-l-[32px] shadow-[-15px_0_40px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden border-l border-gray-100"
      >
        {/* HEADER AREA */}
        <div className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100 relative">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#009FE3]">T.C. TEKİRDAĞ BÜYÜKŞEHİR</span>
            <h2 className="text-xl font-black tracking-wide mt-0.5 text-[#1B4F8A]">E-İŞLEMLER</h2>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center transition-all rounded-full border border-gray-100 hover:border-red-200 hover:bg-red-50 text-gray-400 hover:text-red-500 active:scale-95 shadow-sm"
            title="Kapat"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT LIST */}
        <div className="flex-1 px-6 py-8 overflow-y-auto bg-gray-50/40 custom-scrollbar">
          <ul className="space-y-4">
            {eIslemlerList.map((item, index) => {
              const hasSubItems = !!item.subItems;
              const isExpanded = expandedItem === item.title;
              const Icon = item.Icon;

              return (
                <li key={index} className="flex flex-col">
                  {hasSubItems ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                        className={`flex items-center justify-between w-full px-5 py-4 font-bold text-[15px] transition-all border rounded-2xl group ${
                          isExpanded 
                            ? "bg-gradient-to-r from-[#1B4F8A]/5 to-[#009FE3]/5 border-[#1B4F8A]/30 text-[#1B4F8A] shadow-sm" 
                            : "bg-white border-gray-100 text-gray-700 hover:border-[#73B646]/40 hover:bg-gradient-to-r hover:from-white hover:to-[#73B646]/5 hover:text-[#73B646] hover:shadow-md hover:-translate-x-1.5"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isExpanded ? "bg-[#1B4F8A] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#73B646] group-hover:text-white"
                          }`}>
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#1B4F8A]" : "group-hover:text-[#73B646]"}`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 py-1.5 ml-5 border-l-2 space-y-1.5 border-gray-200/80">
                          {item.subItems.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={sub.href}
                                target={sub.href?.startsWith("http") ? "_blank" : undefined}
                                rel={sub.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2.5 text-[13.5px] font-semibold leading-snug text-gray-600 transition-all rounded-xl hover:bg-[#73B646]/5 hover:text-[#73B646] hover:translate-x-1"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#73B646] mr-2.5"></span>
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
                      target={item.target || "_self"}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-5 py-4 font-bold text-[15px] text-gray-700 transition-all bg-white border border-gray-100 rounded-2xl hover:border-[#73B646]/40 hover:bg-gradient-to-r hover:from-white hover:to-[#73B646]/5 hover:text-[#73B646] hover:shadow-md hover:-translate-x-1.5 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-500 group-hover:bg-[#73B646] group-hover:text-white flex items-center justify-center transition-all shrink-0">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                      
                      {item.target === "_blank" ? (
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#73B646] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#73B646] transition-colors transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* FOOTER */}
        <div className="py-4 text-xs font-semibold text-center text-gray-400 border-t border-gray-100 bg-white">
          T.C. Tekirdağ Büyükşehir Belediyesi
        </div>
      </div>
    </>,
    document.body
  );
}
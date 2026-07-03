"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

// Menü öğelerini NAV_ITEMS'dan alıyoruz
const menuItems = NAV_ITEMS.find(item => item.label === "Kurumsal")?.sub || [];

export default function KurumsalMenu() {
  const containerRef = useRef(null);


  useEffect(() => {
    // GSAP Context kullanımı, React strict mode ve temizleme (cleanup) işlemleri için en güvenli yoldur
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1, // Kartların sırayla gelmesini sağlar
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Component unmount olduğunda animasyonları temizler
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex justify-center items-start">
      <div className="w-full max-w-6xl" ref={containerRef}>
        
        {/* Başlık ve Breadcrumb Alanı */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h1 className="text-2xl font-bold text-[#8dc63f]">
            TEKİRDAĞ BÜYÜKŞEHİR BELEDİYESİ
          </h1>
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm text-sm text-gray-600 dark:text-gray-300">
            <span>Anasayfa // Kurumsal</span>
          </div>
        </div>

        {/* Menü Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <Link key={item.href ?? item.label ?? idx} href={item.href ?? '#'}>
              <div className="menu-card group bg-white dark:bg-gray-800 flex items-center h-20 px-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-[6px] border-[#8dc63f] rounded-r-md cursor-pointer hover:translate-x-1">
                <span className="font-semibold text-gray-600 dark:text-gray-200 group-hover:text-[#8dc63f] transition-colors duration-200 uppercase text-sm tracking-wide">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
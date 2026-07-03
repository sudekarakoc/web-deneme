"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function TemelDegerlerPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Sayfa yüklendiğinde içeriklerin yumuşakça belirmesi için GSAP animasyonu
    const ctx = gsap.context(() => {
      gsap.fromTo(".animate-item", 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Sol menü elemanları
  const menuItems = [
    { title: "İdari Yapı", href: "#", isActive: false },
    { title: "Temel Değerler", href: "#", isActive: true }, // Aktif eleman
    { title: "Politikalar", href: "#", isActive: false },
    { title: "Arabuluculuk Komisyonu", href: "#", isActive: false },
    { title: "Belediye Meclisi", href: "#", isActive: false },
    { title: "Belediye Encümeni", href: "#", isActive: false },
    { title: "Eski Başkanlarımız", href: "#", isActive: false },
    { title: "Misyon ve Vizyon", href: "#", isActive: false },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8f9fa] text-gray-800 pb-12 font-sans">
      
      {/* 1. Breadcrumb (Ekmek Kırıntısı) - Görseldeki gibi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-item">
        <nav className="text-sm flex gap-2 text-gray-500">
          <Link href="/" className="hover:text-blue-500 transition-colors">Anasayfa</Link>
          <span>/</span>
          <Link href="/kurumsal" className="hover:text-blue-500 transition-colors">Kurumsal</Link>
          <span>/</span>
          <span className="text-[#00a0e3] font-medium">Temel Değerler</span>
        </nav>
      </div>

      {/* Ana İçerik Izgarası (Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* 2. Sol Menü (Sidebar) */}
          <aside className="w-full md:w-64 flex-shrink-0 animate-item">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-[#00a0e3] text-lg font-semibold tracking-wide">Kurumsal</h2>
              </div>
              <ul className="flex flex-col py-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className={`block px-6 py-3 text-sm transition-colors duration-200 ${
                        item.isActive 
                          ? "border-l-4 border-[#8dc63f] bg-[#f2f9ec] text-[#00a0e3] font-medium" 
                          : "border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* 3. Sağ İçerik Kartı (Main Content) */}
          <main className="flex-1 animate-item">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[400px]">
              {/* Burası "Temel değerler içeriği..." yazan kısım */}
              <div className="text-gray-700 leading-relaxed">
                Temel değerler içeriği...
              </div>
            </div>
          </main>

        </div>
      </div>
      
    </div>
  );
}
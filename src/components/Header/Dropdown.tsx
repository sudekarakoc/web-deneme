"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function MegaDropdown({ items, onClose }: { items: any[], onClose: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Açılış animasyonu
  useEffect(() => {
    gsap.fromTo(dropdownRef.current, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, []);

  // Kapanış animasyonu tetikleyicisi
  const handleClose = (e?: React.MouseEvent) => {
    // Animasyonu başlat
    gsap.to(dropdownRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      onComplete: () => onClose(), // Animasyon bitince state'i güncelle (menüyü kaldır)
    });
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-12 -right-10 w-[800px] bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 grid grid-cols-4 gap-6"
    >
      {items.map((category) => (
        <div key={category.label}>
          <h3 className="font-bold text-[#1B4F8A] mb-3">{category.label}</h3>
          <ul className="space-y-2">
            {category.sub?.map((sub: any) => (
              <li key={sub.label}>
                <Link 
                  href={sub.href} 
                  onClick={(e) => {
                    e.preventDefault(); // Sayfa geçişini hemen yapmasın diye
                    handleClose();
                    // Küçük bir gecikmeyle yönlendir (animasyonun tamamlanması için)
                    setTimeout(() => window.location.href = sub.href, 200);
                  }}
                  className="text-sm text-gray-600 hover:text-[#1B4F8A] flex items-center transition-colors"
                >
                  <span className="mr-2">›</span> {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
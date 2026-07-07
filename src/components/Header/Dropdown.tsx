"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

// MegaDropdown.tsx

export default function MegaDropdown({ items, onClose }: { items: any[], onClose: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-12 -right-10 w-[800px] bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 grid grid-cols-4 gap-6"
    >
      {items.map((category) => (
        <div key={category.label}>
          {/* Başlığı h3 içinde Link ile sarmalayarak tıklanabilir yapıyoruz */}
          <h3 className="mb-3">
            <Link 
              href={category.href || "#"} 
              onClick={onClose} 
              className="font-bold text-[#1B4F8A] hover:text-blue-800 transition-colors"
            >
              {category.label}
            </Link>
          </h3>
          <ul className="space-y-2">
            {category.sub?.map((sub: any) => (
              <li key={sub.label}>
                <Link 
                  href={sub.href} 
                  onClick={onClose} // BURAYA DİKKAT: Tıklanınca onClose çalışacak
                  className="text-sm text-gray-600 hover:text-[#1B4F8A] flex items-center"
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
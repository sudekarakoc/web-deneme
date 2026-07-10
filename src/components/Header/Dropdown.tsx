"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type DropdownSubItem = {
  label: string;
  href: string;
};

type DropdownCategory = {
  label: string;
  href?: string;
  sub?: DropdownSubItem[];
};

export default function MegaDropdown({ 
  items, 
  onClose, 
  onOpenServices 
}: { 
  items: DropdownCategory[]; 
  onClose: () => void;
  onOpenServices: (category: string) => void 
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(dropdownRef.current, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-12 -right-10 w-[800px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-10 border border-gray-100/50 grid grid-cols-4 gap-8"
    >
      {items.map((category) => (
        <div key={category.label}>
          <h3 className="mb-4">
            <Link 
              href={category.href || "#"} 
              onClick={onClose} 
              className="font-extrabold text-[#1B4F8A] hover:text-[#009FE3] transition-colors"
            >
              {category.label}
            </Link>
          </h3>
          
          <ul className="space-y-3">
            {category.sub?.slice(0, 7).map((sub: DropdownSubItem) => (
              <li key={sub.label}>
                <Link 
                  href={sub.href} 
                  onClick={onClose}
                  className="group flex items-center text-[14px] font-medium text-gray-500 hover:text-[#1B4F8A] transition-colors"
                >
                  {/* Modern nokta belirteci */}
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200 mr-3 group-hover:bg-[#009FE3] group-hover:scale-150 transition-all duration-300"></span>
                  {sub.label}
                </Link>
              </li>
            ))}

            {/* YENİ EK: Hem Hizmetler hem Yayınlar için buton */}
            {(category.label === "Hizmetler" || category.label === "Yayınlar") && (
              <li className="pt-2 mt-2 border-t border-gray-100">

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onClose(); 
                    onOpenServices(category.label);
                  }}
                  className="group text-[13px] font-bold text-[#009FE3] hover:text-[#1B4F8A] flex items-center transition-colors w-full text-left"
                >

            
                  Tümünü Gör
                  <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
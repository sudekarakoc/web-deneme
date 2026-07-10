"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";


type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps){
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
      body.style.height = '100vh';
    } else {
      body.style.overflow = 'unset';
      body.style.height = 'auto';
    }
  }, [isOpen]);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[90] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[350px] bg-[#f9f9f9] z-[100] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <Link href="/" className="flex flex-col text-[#1B4F8A]" onClick={onClose}>
            <span className="text-xl font-black tracking-tight leading-none">TEKİRDAĞ</span>
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-80 uppercase">Büyükşehir Belediyesi</span>
          </Link>

          <button
            onClick={onClose}
            className="text-[#8DC63F] hover:scale-110 transition-transform p-1"
            title="Mobil Menüyü Kapat" aria-label="Mobil Menüyü Kapat"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-0">
                {item.sub ? (
                  <div>
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-[15px] font-medium">{item.label}</span>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-90" : ""}`}
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
                        mobileExpanded === item.label ? "max-h-[800px] py-2" : "max-h-0"
                      }`}
                    >
                      {item.sub.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={onClose}
                          className="block px-10 py-3 text-sm text-gray-600 hover:text-[#1B4F8A] transition-colors border-b border-gray-100 last:border-0"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={onClose}
                    className="block w-full px-6 py-4 text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="border-b border-gray-100 last:border-0">
               <Link
                  href="#"
                  onClick={onClose}
                  className="block w-full px-6 py-4 text-[15px] font-medium text-[#8DC63F] transition-colors hover:bg-gray-100"
                >
                  Kısayollar
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
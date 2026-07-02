"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface PageItem {
  slug: string;
  title: string;
}

export default function CategoryGridClient({ pages, kategori }: { pages: PageItem[], kategori: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pages.map((page) => (
        <Link key={page.slug} href={`/${kategori}/${page.slug}`}>
          <div className="menu-card group bg-[#EAF4E2] flex items-center h-20 px-6 shadow-sm hover:shadow-md border border-transparent border-l-[6px] border-l-[#73B646] hover:border-l-[#009FE3] hover:bg-[#73B646] rounded-r-xl cursor-pointer transition-all duration-300 hover:translate-x-1.5">
            <span className="font-semibold text-gray-700 group-hover:text-white transition-colors duration-200 uppercase text-[14px] tracking-wide">
              {page.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
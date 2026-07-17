"use client";

import Link from "next/link";

export interface SidebarPage {
  slug: string;
  title: string;
  href?: string;
  hideInMenu?: boolean;
}

interface SidebarProps {
  kategori: string;
  categoryTitle: string;
  pages: SidebarPage[];
  activeSlug: string;
}

export default function Sidebar({
  kategori,
  categoryTitle,
  pages,
  activeSlug,
}: SidebarProps) {
  return (
    <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
          <Link href={`/${kategori}`}>
            <h3 className="font-bold text-[18px] text-[#009FE3] hover:text-[#1B4F8A] transition-colors">
              {categoryTitle}
            </h3>
          </Link>
        </div>
        <ul className="flex flex-col py-2">
          {pages.map((p) => {
            const isActive = p.slug === activeSlug;
            if (p.hideInMenu && !isActive) return null;
            const targetHref = p.href || `/${kategori}/${p.slug}`;
            return (
              <li key={p.slug}>
                <Link
                  href={targetHref}
                  className={`block px-6 py-3 text-[15px] transition-colors border-l-4 ${
                    isActive
                      ? "font-medium text-[#009FE3] bg-[#EAF4E2]/30 border-[#73B646]"
                      : "text-gray-600 hover:text-[#009FE3] hover:bg-gray-50 border-transparent hover:border-[#73B646]/30"
                  }`}
                >
                  {p.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

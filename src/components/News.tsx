import React from "react";

// Typescript kullanıyorsan item için bir arayüz tanımlamak iyi olur
interface NewsItemProps {
  item: {
    id: number | string;
    hexColor: string;
    title: string;
    body: string;
  };
}

export default function News({ item }: NewsItemProps) {
  return (
    <article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#1B4F8A]/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
      {/* Haber Görseli - Dinamik hex renkleri Tailwind ile derlenemediği için style prop'u kullanıldı */}
      <div 
        className="h-40 md:h-48 w-full relative overflow-hidden"
        style={{ backgroundColor: `#${item.hexColor}` }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Haber İçeriği */}
      <div className="p-5 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="px-3 py-1 bg-[#F0F6FD] text-[#1B4F8A] text-[10px] md:text-xs font-bold rounded-md">
            Gündem
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-zinc-400">
            Haziran 2026
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 md:mb-3 line-clamp-2 capitalize group-hover:text-[#1B4F8A] transition-colors">
          {item.title}
        </h3>

        <p className="text-zinc-500 text-sm line-clamp-3 mb-5 md:mb-6 flex-1">
          {item.body}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center font-bold text-sm text-zinc-900 group-hover:text-[#1B4F8A] transition-colors">
          Devamını Oku <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}
import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import { reports } from "./data";

export const metadata = {
  title: "Faaliyet Raporları | T.C. Tekirdağ Büyükşehir Belediyesi",
  description: "Tekirdağ Büyükşehir Belediyesi geçmiş ve güncel faaliyet raporları",
};

export default function FaaliyetRaporlariPage() {
  const kategori = "yayinlar";
  const slug = "faaliyet-raporlari";
  const categoryData = SITE_DATA[kategori];

  const group2020s = reports.filter((r) => r.year >= 2020);
  const group2010s = reports.filter((r) => r.year < 2020);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* BREADCRUMB / HEADER */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/yayinlar" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Yayınlar
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">Faaliyet Raporları</span>
          </div>
        </div>
      </div>

      {/* İÇERİK VE SIDEBAR */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">

        {/* YAN MENÜ */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || "Yayınlar"}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 pb-20">

          <div className="mb-10 px-1">
            <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">Faaliyet Raporları</h1>
            <p className="text-[15px] text-gray-500 mt-1">
              Tekirdağ Büyükşehir Belediyesi&apos;nin yıllara göre düzenlenmiş güncel ve geçmiş idare faaliyet raporlarına bu sayfadan ulaşabilirsiniz.
            </p>
          </div>

          {/* GRUP: 2020'Lİ YILLAR */}
          <div className="mb-10">
            {/* Grup başlığı */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2.5 bg-[#1B4F8A] text-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase">2020&apos;li Yıllar</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#1B4F8A]/30 to-transparent" />
              <span className="text-[12px] text-gray-400 font-semibold">{group2020s.length} rapor</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group2020s.map((report, index) => {
                const isLatest = index === 0;
                return (
                  <a
                    key={report.year}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col justify-between p-5 rounded-2xl border overflow-hidden transition-all duration-300
                      ${isLatest
                        ? "bg-gradient-to-br from-[#0F2D52] to-[#1B4F8A] border-[#1B4F8A] text-white shadow-[0_8px_28px_rgba(15,45,82,0.25)] hover:shadow-[0_12px_36px_rgba(15,45,82,0.35)] hover:scale-[1.02] col-span-2 sm:col-span-1"
                        : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-[#1B4F8A]/25 hover:bg-blue-50/40"
                      }`}
                  >
                    {/* Dekoratif yıl damgası */}
                    <span className={`absolute -bottom-3 -right-2 text-[72px] font-black leading-none select-none pointer-events-none tracking-tighter
                      ${isLatest ? "text-white/10" : "text-[#1B4F8A]/6"}`}>
                      {report.year}
                    </span>

                    <div className="relative">
                      {isLatest && (
                        <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase bg-[#009FE3] text-white px-2.5 py-1 rounded-full mb-3">
                          Güncel
                        </span>
                      )}
                      <div className={`text-[32px] font-black leading-none tracking-tighter mb-1
                        ${isLatest ? "text-white" : "text-[#1B4F8A]"}`}>
                        {report.year}
                      </div>
                      <p className={`text-[12px] font-semibold leading-snug
                        ${isLatest ? "text-white/70" : "text-gray-500"}`}>
                        İdare Faaliyet Raporu
                      </p>
                    </div>

                    <div className={`relative flex items-center justify-between mt-5`}>
                      <span className={`text-[11px] font-bold
                        ${isLatest ? "text-white/50" : "text-gray-400"}`}>
                        PDF
                      </span>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isLatest
                          ? "bg-white/20 text-white group-hover:bg-white group-hover:text-[#1B4F8A]"
                          : "bg-gray-100 text-gray-400 group-hover:bg-[#1B4F8A] group-hover:text-white"
                        }`}>
                        <Download className="w-3.5 h-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* GRUP: 2010'LU YILLAR */}
          <div>
            {/* Grup başlığı */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2.5 bg-[#73B646] text-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase">2010&apos;lu Yıllar</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#73B646]/30 to-transparent" />
              <span className="text-[12px] text-gray-400 font-semibold">{group2010s.length} rapor</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group2010s.map((report) => (
                <a
                  key={report.year}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#73B646]/30 hover:bg-[#f0fae8]/40 overflow-hidden transition-all duration-300"
                >
                  {/* Dekoratif yıl damgası */}
                  <span className="absolute -bottom-3 -right-2 text-[72px] font-black leading-none text-[#73B646]/6 select-none pointer-events-none tracking-tighter">
                    {report.year}
                  </span>

                  <div className="relative">
                    <div className="text-[32px] font-black leading-none tracking-tighter mb-1 text-[#3a7d1e]">
                      {report.year}
                    </div>
                    <p className="text-[12px] font-semibold leading-snug text-gray-500">
                      İdare Faaliyet Raporu
                    </p>
                  </div>

                  <div className="relative flex items-center justify-between mt-5">
                    <span className="text-[11px] font-bold text-gray-400">PDF</span>
                    <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-400 group-hover:bg-[#73B646] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <Download className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

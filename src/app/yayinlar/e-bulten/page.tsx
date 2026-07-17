"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import { bulletins } from "./data/bulletins";
import Sidebar from "@/components/Sidebar";

type Page = {
  slug: string;
  title: string;
};

const ITEMS_PER_PAGE = 12;

export default function EBultenPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const kategori = "yayinlar";
  const slug = "e-bulten";

  const categoryData = SITE_DATA[kategori];
  const pages = categoryData.pages as Page[];
  const pageEntry = pages.find((p) => p.slug === slug);

  /* ---- Filtreleme ---- */
  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return bulletins;
    const q = searchTerm.toLowerCase();
    return bulletins.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.date.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  /* ---- Sayfalama ---- */
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* BREADCRUMB */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/${kategori}`}
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              {categoryData.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">{pageEntry?.title}</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        {/* YAN MENÜ (SIDEBAR) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK */}
        <div className="w-full flex-1 order-1 lg:order-2">
          {/* Başlık */}
          <div className="mb-6 px-1">
            <h1
              lang="tr"
              className="text-[22px] font-bold text-[#1B4F8A] tracking-wide"
              style={{ fontFeatureSettings: '"locl"', textRendering: "optimizeLegibility" }}
            >
              E-Bülten
            </h1>
            <p className="text-[15px] text-gray-500 mt-1">
              Belediyemizin aylık faaliyet ve haber bültenlerini aşağıdan inceleyebilir, PDF
              olarak görüntüleyebilirsiniz.
            </p>
          </div>

          {/* Özet Kartlar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center rounded-2xl border p-4 bg-blue-50 border-blue-100 text-[#1B4F8A]">
              <span className="text-3xl font-extrabold leading-none">{bulletins.length}</span>
              <span className="mt-1 text-xs font-semibold text-center opacity-70">Toplam Sayı</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border p-4 bg-[#EAF4E2] border-[#73B646]/20 text-[#3a7d1e]">
              <span className="text-3xl font-extrabold leading-none">
                {bulletins.filter((b) => b.date.includes("2026")).length}
              </span>
              <span className="mt-1 text-xs font-semibold text-center opacity-70">2026 Yılı</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border p-4 bg-amber-50 border-amber-100 text-amber-700">
              <span className="text-3xl font-extrabold leading-none">
                {bulletins.filter((b) => b.date.includes("Özel")).length}
              </span>
              <span className="mt-1 text-xs font-semibold text-center opacity-70">Özel Sayı</span>
            </div>
          </div>

          {/* Arama */}
          <div className="mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Bülten adı veya tarih ile arayın..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/30 focus:border-[#009FE3] transition-all shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Aramayı temizle"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Kart Grid */}
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-medium">Sonuç bulunamadı</p>
              <p className="text-sm mt-1">Farklı bir arama terimi deneyin</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
              {paginated.map((bulletin) => (
                <a
                  key={bulletin.id}
                  href={bulletin.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#009FE3]/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* PDF Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z" />
                    </svg>
                    PDF
                  </div>

                  {/* Kapak Görseli */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={bulletin.imageUrl}
                      alt={bulletin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bilgi Alanı */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#0F2D52] group-hover:text-[#009FE3] transition-colors duration-200 leading-tight">
                      {bulletin.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {bulletin.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Sonuç + Sayfalama */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 px-1 gap-4">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">{filtered.length}</span> sonuçtan{" "}
              <span className="font-semibold text-gray-700">
                {Math.min((safePage - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–
                {Math.min(safePage * ITEMS_PER_PAGE, filtered.length)}
              </span>{" "}
              gösteriliyor
            </p>

            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  disabled={safePage === 1}
                  onClick={() => handlePageChange(safePage - 1)}
                  aria-label="Önceki sayfa"
                  className="p-2 rounded-xl border border-gray-200 text-gray-400 disabled:opacity-40 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`w-9 h-9 rounded-xl text-sm font-semibold transition ${
                      p === safePage
                        ? "bg-[#009FE3] text-white shadow"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  disabled={safePage === totalPages}
                  onClick={() => handlePageChange(safePage + 1)}
                  aria-label="Sonraki sayfa"
                  className="p-2 rounded-xl border border-gray-200 text-gray-400 disabled:opacity-40 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

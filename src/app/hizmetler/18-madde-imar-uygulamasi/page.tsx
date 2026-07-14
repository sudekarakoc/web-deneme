"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";
import { madde18Applications } from "./data/madde18Applications";
import Madde18Filters from "./components/Madde18Filters";
import Madde18Table from "./components/Madde18Table";

type Page = { slug: string; title: string };

const ITEMS_PER_PAGE = 5;

export default function Madde18Page() {
  const [aramaMetni, setAramaMetni]   = useState("");
  const [ilceFilter, setIlceFilter]   = useState("");
  const [durumFilter, setDurumFilter] = useState("");
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const kategori = "hizmetler";
  const slug     = "18-madde-imar-uygulamasi";

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound();

  const pages     = categoryData.pages as Page[];
  const pageEntry = pages.find((p) => p.slug === slug);
  if (!pageEntry) return notFound();

  const handleToggle = (id: number) =>
    setExpandedRowId(expandedRowId === id ? null : id);

  /* ---- Filtreleme ---- */
  const filtered = madde18Applications.filter((a) => {
    const q = aramaMetni.toLowerCase();
    const matchSearch =
      !aramaMetni ||
      a.dosyaNo.toLowerCase().includes(q) ||
      a.ada.toLowerCase().includes(q) ||
      a.parselNo.toLowerCase().includes(q) ||
      a.mahalle.toLowerCase().includes(q) ||
      a.ilce.toLowerCase().includes(q) ||
      a.konu.toLowerCase().includes(q);
    const matchIlce  = !ilceFilter  || a.ilce  === ilceFilter;
    const matchDurum = !durumFilter || a.durum === durumFilter;
    return matchSearch && matchIlce && matchDurum;
  });

  /* ---- Sayfalama ---- */
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage   = Math.min(currentPage, totalPages);
  const paginated  = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    setExpandedRowId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- Sayaçlar ---- */
  const counts = {
    total:      madde18Applications.length,
    tamamlandi: madde18Applications.filter((a) => a.durum === "Tamamlandı").length,
    devamEdiyor:madde18Applications.filter((a) => a.durum === "Devam Ediyor").length,
    askida:     madde18Applications.filter((a) => a.durum === "Askıda").length,
    iptal:      madde18Applications.filter((a) => a.durum === "İptal").length,
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">

      {/* BREADCRUMB */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors">{categoryData.title}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">{pageEntry.title}</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-first">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <Link href={`/${kategori}`}>
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData.title}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {pages.map((p) => {
                const isActive = p.slug === slug;
                return (
                  <li key={p.slug}>
                    <Link
                      href={`/${kategori}/${p.slug}`}
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

        {/* ANA İÇERİK */}
        <div className="w-full flex-1 order-1 lg:order-none">

          {/* Başlık */}
          <div className="mb-6 px-1">
            <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">
              {pageEntry.title}
            </h1>
            <p className="text-[15px] text-gray-500 mt-1">
              İmar Kanunu&apos;nun 18. maddesi kapsamında yürütülen arazi düzenleme ve
              parsel yeniden yapılandırma uygulamalarını buradan takip edebilirsiniz.
            </p>
          </div>

          {/* Özet Kartlar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard label="Toplam Başvuru"  value={counts.total}       color="blue"  />
            <StatCard label="Tamamlandı"      value={counts.tamamlandi}  color="green" />
            <StatCard label="Devam Ediyor"    value={counts.devamEdiyor} color="sky"   />
            <StatCard label="Askıda / İptal"  value={counts.askida + counts.iptal} color="amber" />
          </div>

          {/* Filtreler */}
          <Madde18Filters
            aramaMetni={aramaMetni}
            setAramaMetni={(v) => { setAramaMetni(v); setCurrentPage(1); }}
            ilceFilter={ilceFilter}
            setIlceFilter={(v) => { setIlceFilter(v); setCurrentPage(1); }}
            durumFilter={durumFilter}
            setDurumFilter={(v) => { setDurumFilter(v); setCurrentPage(1); }}
          />

          {/* Bilgi Notu */}
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#009FE3]/20 bg-blue-50/60 px-5 py-4">
            <svg className="w-5 h-5 text-[#009FE3] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
            <p className="text-[13.5px] text-[#1B4F8A] leading-relaxed">
              <span className="font-semibold">DOP (Düzenleme Ortaklık Payı):</span> Yol, park, otopark gibi
              kamusal alanlara ayrılan parsel yüzdesidir. Kanuna göre en fazla %45 olarak uygulanabilir.
            </p>
          </div>

          {/* Tablo */}
          <Madde18Table
            applications={paginated}
            expandedRowId={expandedRowId}
            onToggle={handleToggle}
          />

          {/* Sonuç + Sayfalama */}
          <div className="flex items-center justify-between mt-6 px-1">
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

/* ---- Stat Kartı ---- */
function StatCard({
  label, value, color,
}: {
  label: string; value: number; color: "blue" | "green" | "sky" | "amber";
}) {
  const palette = {
    blue:  "bg-blue-50 border-blue-100 text-[#1B4F8A]",
    green: "bg-[#EAF4E2] border-[#73B646]/20 text-[#3a7d1e]",
    sky:   "bg-sky-50 border-sky-100 text-[#009FE3]",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
  };
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border p-4 ${palette[color]}`}>
      <span className="text-3xl font-extrabold leading-none">{value}</span>
      <span className="mt-1 text-xs font-semibold text-center opacity-70">{label}</span>
    </div>
  );
}

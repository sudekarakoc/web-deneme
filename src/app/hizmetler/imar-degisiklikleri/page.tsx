"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_DATA } from "@/lib/data";

import { imarChanges } from "./data/imarChanges";
import ImarFilters from "./components/ImarFilters";
import ImarTable from "./components/ImarTable";
import Sidebar from "@/components/Sidebar";

type Page = {
  slug: string;
  title: string;
};

const ITEMS_PER_PAGE = 5;

export default function ImarDegisiklikleriPage() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [ilceFilter, setIlceFilter] = useState("");
  const [durumFilter, setDurumFilter] = useState("");
  const [planTuruFilter, setPlanTuruFilter] = useState("");
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const kategori = "hizmetler";
  const slug = "imar-degisiklikleri";

  const categoryData = SITE_DATA[kategori];
  if (!categoryData) return notFound();

  const pages = categoryData.pages as Page[];
  const pageEntry = pages.find((p) => p.slug === slug);
  if (!pageEntry) return notFound();

  const handleToggleRow = (id: number) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  // Filtreleme
  const filtered = imarChanges.filter((item) => {
    const searchLower = aramaMetni.toLowerCase();
    const matchesSearch =
      !aramaMetni ||
      item.mahalle.toLowerCase().includes(searchLower) ||
      item.ada.toLowerCase().includes(searchLower) ||
      item.parselNo.toLowerCase().includes(searchLower) ||
      item.karar.toLowerCase().includes(searchLower) ||
      item.ilce.toLowerCase().includes(searchLower);

    const matchesIlce = !ilceFilter || item.ilce === ilceFilter;
    const matchesDurum = !durumFilter || item.durum === durumFilter;
    const matchesPlanTuru = !planTuruFilter || item.planTuru === planTuruFilter;

    return matchesSearch && matchesIlce && matchesDurum && matchesPlanTuru;
  });

  // Sayfalama
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    setExpandedRowId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Özet sayaçlar
  const counts = {
    total: imarChanges.length,
    yururlukte: imarChanges.filter((i) => i.durum === "Yürürlükte").length,
    askida: imarChanges.filter((i) => i.durum === "Askıda").length,
    iptal: imarChanges.filter((i) => i.durum === "İptal").length,
  };

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
            <Link
              href={`/${kategori}`}
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              {categoryData.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">{pageEntry.title}</span>
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

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2">
          <div className="mb-6 px-1">
            <h1
              lang="tr"
              className="text-[22px] font-bold text-[#1B4F8A] tracking-wide"
              style={{ fontFeatureSettings: '"locl"', textRendering: "optimizeLegibility" }}
            >
              {pageEntry.title}
            </h1>
            <p className="text-[15px] text-gray-500 mt-1">
              Belediyemiz sınırları dahilindeki güncel ve geçmiş imar planı değişikliklerini
              aşağıdan takip edebilirsiniz.
            </p>
          </div>

          {/* Özet Kartları */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard label="Toplam Değişiklik" value={counts.total} color="blue" />
            <StatCard label="Yürürlükte" value={counts.yururlukte} color="green" />
            <StatCard label="Askıda" value={counts.askida} color="amber" />
            <StatCard label="İptal" value={counts.iptal} color="red" />
          </div>

          {/* Filtreler */}
          <ImarFilters
            aramaMetni={aramaMetni}
            setAramaMetni={(v) => { setAramaMetni(v); setCurrentPage(1); }}
            ilceFilter={ilceFilter}
            setIlceFilter={(v) => { setIlceFilter(v); setCurrentPage(1); }}
            durumFilter={durumFilter}
            setDurumFilter={(v) => { setDurumFilter(v); setCurrentPage(1); }}
            planTuruFilter={planTuruFilter}
            setPlanTuruFilter={(v) => { setPlanTuruFilter(v); setCurrentPage(1); }}
          />

          {/* Tablo */}
          <ImarTable
            changes={paginated}
            expandedRowId={expandedRowId}
            onToggle={handleToggleRow}
          />

          {/* Sonuç Sayısı + Sayfalama */}
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

/* ---- Yardımcı Bileşen ---- */
function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "blue" | "green" | "amber" | "red";
}) {
  const palette = {
    blue: "bg-blue-50 border-blue-100 text-[#1B4F8A]",
    green: "bg-[#EAF4E2] border-[#73B646]/20 text-[#3a7d1e]",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    red: "bg-red-50 border-red-100 text-red-600",
  };
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border p-4 ${palette[color]}`}
    >
      <span className="text-3xl font-extrabold leading-none">{value}</span>
      <span className="mt-1 text-xs font-semibold text-center opacity-70">{label}</span>
    </div>
  );
}

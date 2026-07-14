"use client";

import React, { useState } from "react";
import Link from "next/link";
import { estetikDocuments } from "./data/estetikDocuments";
import { EstetikDocument } from "./types/kentEstetik";

export default function KentEstetikKuruluPage() {
  const [activeTab, setActiveTab] = useState<"Yönetmelik" | "Karar">("Yönetmelik");

  const yonetmelikler = estetikDocuments.filter((d) => d.kategori === "Yönetmelik");
  const kararlar = estetikDocuments.filter((d) => d.kategori === "Karar");

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* HEADER / HERO SECTION */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-10 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/hizmetler"
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              Hizmetler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">Kent Estetik Kurulu</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#1B4F8A] leading-tight tracking-tight mb-3">
              Kent Estetik Kurulu
            </h1>
            <p className="text-[#3a7d1e] text-[16px] md:text-[18px] leading-relaxed font-medium">
              Kent Estetik Kuruluna ait yönetmelikler ve düzenli toplanan kurulun güncel gündem ve kararlarına buradan ulaşabilirsiniz.
            </p>
          </div>
          {/* İstatistik / Küçük Kart */}
          <div className="flex gap-4">
            <div className="bg-white/80 backdrop-blur border border-[#73B646]/30 rounded-2xl p-5 shadow-sm min-w-[140px]">
              <p className="text-3xl font-extrabold text-[#73B646] mb-1">{yonetmelikler.length}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Yönetmelik</p>
            </div>
            <div className="bg-white/80 backdrop-blur border border-[#73B646]/30 rounded-2xl p-5 shadow-sm min-w-[140px]">
              <p className="text-3xl font-extrabold text-[#1B4F8A] mb-1">{kararlar.length}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Karar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        {/* SIDEBAR (Sol Menü) */}
        <div className="lg:w-1/4 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-[140px]">
            <h3 className="text-[14px] font-bold tracking-widest uppercase text-gray-400 mb-4 px-2">
              Kategoriler
            </h3>
            <nav className="flex flex-col gap-1.5">
              <button
                onClick={() => setActiveTab("Yönetmelik")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                  activeTab === "Yönetmelik"
                    ? "bg-[#009FE3]/10 text-[#009FE3]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  activeTab === "Yönetmelik" ? "bg-[#009FE3] text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Yönetmelikler
              </button>
              <button
                onClick={() => setActiveTab("Karar")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                  activeTab === "Karar"
                    ? "bg-[#009FE3]/10 text-[#009FE3]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  activeTab === "Karar" ? "bg-[#009FE3] text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                Kararlar
              </button>
            </nav>
          </div>
        </div>

        {/* ANA İÇERİK */}
        <div className="w-full flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === "Yönetmelik" ? "Yönetmelik Listesi" : "Kurul Kararları"}
            </h2>
            <span className="text-sm font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
              {activeTab === "Yönetmelik" ? yonetmelikler.length : kararlar.length} Kayıt
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {(activeTab === "Yönetmelik" ? yonetmelikler : kararlar).map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function DocumentCard({ doc }: { doc: EstetikDocument }) {
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#009FE3]/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 22h16a2 2 0 0 0 2-2V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm13-14.5V9h4.5L17 7.5zM11.5 13c.4 0 .8-.1 1.2-.2v-1c-.3.1-.7.2-1 .2-.5 0-.8-.1-1-.4-.2-.2-.2-.5-.2-1h2.5v-.2c0-1.2-.6-1.9-1.9-1.9-1.3 0-2 1-2 2.3s.7 2.2 2.4 2.2zm-.8-3.1c.4 0 .6.2.7.5H10c.1-.3.3-.5.7-.5zm5.5 1.7h-1.6V13h-1.3v-3.5h1.6c1.1 0 1.6.5 1.6 1.4s-.5 1.4-1.6 1.4v-.7c.4 0 .6-.1.6-.5s-.2-.6-.6-.6zm-5.5 4.5v-3.3H9v3.3h1.7zm3.3 0v-1.1h1.4v-1h-1.4v-1.2h1.6v-1h-2.9v4.3h1.3z" />
          </svg>
        </div>
        {doc.tarih && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {doc.tarih}
          </span>
        )}
      </div>
      
      <h3 className="text-[15px] font-bold text-[#1B4F8A] leading-snug group-hover:text-[#009FE3] transition-colors line-clamp-3 mb-4 flex-1">
        {doc.baslik}
      </h3>
      
      <div className="flex items-center gap-2 text-[13px] font-semibold text-[#009FE3] mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
        Görüntüle
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
}

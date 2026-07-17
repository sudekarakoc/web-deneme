"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

type Page = {
  slug: string;
  title: string;
};

export default function BankaHesapNumaralariStaticPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Kopyalama fonksiyonu
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    // 2 saniye sonra ikonu eski haline çevir
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  // Statik sayfa olduğu için kategori ve slug değerlerini sabitliyoruz
  const kategori = "kurumsal";
  const slug = "banka-hesap-numaralari";
  
  const categoryData = SITE_DATA[kategori];
  const currentPage = categoryData?.pages.find((p: Page) => p.slug === slug);

  // Banka Hesap Bilgileri Verisi
  const bankAccounts = [
    { bank: "T.C. Ziraat Bankası", branch: "Tekirdağ Şubesi", iban: "TR71 0001 0001 0608 3868 8451 89" },
    { bank: "T.C. Ziraat Bankası", branch: "Aykome Teminat Hesabı", iban: "TR65 0001 0001 0608 3868 8452 00" },
    { bank: "T.C. Ziraat Bankası", branch: "Aykome Zemin Tahrip Bedeli", iban: "TR92 0001 0001 0608 3868 8451 99" },
    { bank: "T.C. Ziraat Bankası", branch: "Büyükşehir Otopark Hesabı", iban: "TR98 0001 0001 0608 3868 8451 88" },
    { bank: "Vakıfbank", branch: "Tekirdağ Şubesi", iban: "TR63 0001 5001 5800 7293 3431 57" },
    { bank: "Halkbank", branch: "Tekirdağ Şubesi", iban: "TR78 0001 2009 3040 0007 0000 01" },
    { bank: "Posta Çeki Merkez", branch: "Tekirdağ Şubesi", iban: "240101" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Banka Hesap Numaraları"}
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Banka Hesap Numaraları
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Banka Hesap Bilgileri Tablosu */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#73B646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                T.C. Tekirdağ Büyükşehir Belediyesine Ait Banka Hesap Bilgileri
              </h2>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600 uppercase tracking-wider">Banka</th>
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600 uppercase tracking-wider">Şube / Hesap Adı</th>
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600 uppercase tracking-wider">IBAN / Hesap No</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {bankAccounts.map((account, index) => (
                      <tr key={index} className="hover:bg-[#EAF4E2]/20 transition-colors">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{account.bank}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{account.branch}</td>
                        <td className="py-4 px-6 text-sm text-[#1B4F8A] font-mono font-medium tracking-tight">
                          <div className="flex items-center justify-between gap-4">
                            <span>{account.iban}</span>
                            <button
                              onClick={() => handleCopy(account.iban)}
                              className="p-1.5 rounded-md text-gray-400 hover:text-[#009FE3] hover:bg-blue-50 transition-all"
                              title="Kopyala"
                            >
                              {copiedText === account.iban ? (
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Vergi Kimlik Numarası Tablosu */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#009FE3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                T.C. Tekirdağ Büyükşehir Belediyesi Vergi Kimlik Numarası
              </h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <thead>
                    <tr className="bg-[#1B4F8A]">
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider w-1/2">Vergi Dairesi</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider w-1/2">Vergi Numarası</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-5 px-6 text-base font-medium text-gray-900 border-r border-gray-100">
                        Namık Kemal Vergi Dairesi
                      </td>
                      <td className="py-5 px-6 text-lg text-[#1B4F8A] font-mono font-bold tracking-widest">
                        <div className="flex items-center justify-between gap-4">
                          <span>8360015014</span>
                          <button
                            onClick={() => handleCopy("8360015014")}
                            className="p-1.5 rounded-md text-gray-400 hover:text-[#009FE3] hover:bg-blue-50 transition-all"
                            title="Kopyala"
                          >
                            {copiedText === "8360015014" ? (
                              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}
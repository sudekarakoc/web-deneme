'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Download, ArrowUpRight, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_DATA } from '@/lib/data';
import Sidebar from '@/components/Sidebar';
import { reports } from './data';

export default function PerformansContent() {
  const kategori = 'yayinlar';
  const slug = 'performans-programlari';
  const categoryData = SITE_DATA[kategori];

  const [featured, ...rest] = reports;
  const highlighted = rest.slice(0, 2);
  const archive = rest.slice(2);

  const heroRef = useRef<HTMLAnchorElement>(null);
  const highlightedRef = useRef<HTMLDivElement>(null);
  const archiveHeaderRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero card animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }

    // 2. Highlighted cards animation
    if (highlightedRef.current) {
      gsap.fromTo(
        highlightedRef.current.querySelectorAll('a'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: highlightedRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }

    // 3. Archive header animation
    if (archiveHeaderRef.current) {
      gsap.fromTo(
        archiveHeaderRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: archiveHeaderRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }

    // 4. Archive list items animation
    if (archiveRef.current) {
      gsap.fromTo(
        archiveRef.current.querySelectorAll('li'),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.07,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: archiveRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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
            <span className="text-[#009FE3] font-bold">Performans Programları</span>
          </div>
        </div>
      </div>

      {/* İÇERİK VE SIDEBAR */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">

        {/* YAN MENÜ (Sidebar) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || 'Yayınlar'}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 pb-20">
          <div className="mb-8 px-1">
            <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">Performans Programları</h1>
            <p className="text-[15px] text-gray-500 mt-1">
              Tekirdağ Büyükşehir Belediyesi'nin yıllara göre hedeflenen performans göstergelerini ve faaliyet planlarını içeren raporlara buradan ulaşabilirsiniz.
            </p>
          </div>

          {/* HERO KART — EN GÜNCEL YIL */}
          <a ref={heroRef} href={featured.url} target="_blank" rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-br from-[#0F2D52] to-[#1B4F8A] text-white shadow-[0_12px_40px_rgba(15,45,82,0.28)] hover:shadow-[0_16px_48px_rgba(15,45,82,0.38)] hover:scale-[1.01] transition-all duration-300 mb-5 overflow-hidden">
            <div className="absolute -right-12 -top-12 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute right-16 -bottom-16 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
            <div className="relative">
              <span className="inline-block text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#009FE3] text-white mb-4">Güncel Program</span>
              <div className="flex items-end gap-3">
                <span className="text-[64px] sm:text-[80px] font-black leading-none text-white tracking-tighter">{featured.year}</span>
                <TrendingUp className="w-8 h-8 mb-3 text-[#009FE3]" strokeWidth={2} />
              </div>
              <p className="text-white/60 text-sm font-semibold mt-1">{featured.title}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2 relative">
              <span className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">PDF Raporu</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-white font-bold text-sm">İndir / Görüntüle</span>
                <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/20 group-hover:bg-white group-hover:text-[#1B4F8A] text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </a>

          {/* ORTA KARTLAR — 2 YIL YAN YANA */}
          <div ref={highlightedRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {highlighted.map((report) => (
              <a key={report.year} href={report.url} target="_blank" rel="noopener noreferrer"
                className="group relative flex flex-col justify-between gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1B4F8A]/30 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#1B4F8A]/4 pointer-events-none group-hover:bg-[#009FE3]/8 transition-colors" />
                <div>
                  <span className="text-[48px] font-black leading-none text-[#1B4F8A]/10 group-hover:text-[#009FE3]/15 transition-colors tracking-tighter select-none">{report.year}</span>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[#1B4F8A] transition-colors -mt-2 leading-snug">{report.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold mt-1">PDF Raporu</p>
                </div>
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#1B4F8A] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Download className="w-4 h-4" strokeWidth={2} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ARŞİV LİSTESİ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div ref={archiveHeaderRef} className="px-6 py-4 border-b border-gray-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#73B646]"></span>
              <h2 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Arşiv</h2>
            </div>
            <ul ref={archiveRef} className="divide-y divide-gray-50">
              {archive.map((report) => (
                <li key={report.year}>
                  <a href={report.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center justify-between px-6 py-4 hover:bg-[#f0f7ff] transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <span className="text-[22px] font-black text-[#1B4F8A]/20 group-hover:text-[#009FE3]/40 transition-colors w-16 leading-none">{report.year}</span>
                      <span className="text-[14px] font-semibold text-gray-700 group-hover:text-[#1B4F8A] transition-colors">{report.title}</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-300 group-hover:bg-[#1B4F8A] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
                      <Download className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}

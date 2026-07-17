'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Download, ArrowRight, CalendarRange, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_DATA } from '@/lib/data';
import Sidebar from '@/components/Sidebar';
import { plans } from './data';

gsap.registerPlugin(ScrollTrigger);

const cardGradients = [
  {
    bg: 'from-[#0F2D52] to-[#1B4F8A]',
    badge: 'bg-[#009FE3]',
    glow: 'shadow-[0_8px_32px_rgba(27,79,138,0.25)]',
    ring: 'ring-[#1B4F8A]/20',
    tag: 'Güncel Plan',
  },
  {
    bg: 'from-[#1B4F8A] to-[#1e6eb0]',
    badge: 'bg-[#73B646]',
    glow: 'shadow-[0_8px_32px_rgba(27,79,138,0.18)]',
    ring: 'ring-[#1B4F8A]/15',
    tag: 'Önceki Dönem',
  },
  {
    bg: 'from-[#3a7d60] to-[#2e6b4f]',
    badge: 'bg-[#73B646]',
    glow: 'shadow-[0_8px_32px_rgba(58,125,96,0.18)]',
    ring: 'ring-[#3a7d60]/15',
    tag: 'Arşiv',
  },
];

export default function StratejikPlanContent() {
  const kategori = 'yayinlar';
  const slug = 'stratejik-plan';
  const categoryData = SITE_DATA[kategori];

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page title/description
      const titleDiv = containerRef.current?.closest('.flex-1')?.querySelector('.mb-8');
      if (titleDiv) {
        gsap.fromTo(
          titleDiv,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      // Animate each plan card with stagger and ScrollTrigger
      if (cardRefs.current.length > 0) {
        gsap.fromTo(
          cardRefs.current,
          { opacity: 0, x: -60, rotateY: 8 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
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
            <span className="text-[#009FE3] font-bold">Stratejik Plan</span>
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
            <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">Stratejik Plan</h1>
            <p className="text-[15px] text-gray-500 mt-1">
              Tekirdağ Büyükşehir Belediyesi'nin gelecek hedeflerini, vizyon ve misyonunu belirleyen dönemlik kurumsal stratejik planları aşağıda bulabilirsiniz.
            </p>
          </div>

          {/* PLAN KARTLARI */}
          <div className="flex flex-col gap-5" ref={containerRef}>
            {plans.map((plan, index) => {
              const style = cardGradients[index] ?? cardGradients[2];
              const [startYear, endYear] = plan.period.split(' - ');

              return (
                <a
                  key={plan.period}
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={el => { if (el) cardRefs.current[index] = el; }}
                  className={`group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 rounded-3xl bg-gradient-to-r ${style.bg} text-white ${style.glow} ring-1 ${style.ring} hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Dekoratif arka plan dairesi */}
                  <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
                  <div className="absolute -right-4 -bottom-12 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

                  {/* Sol: yıl ikonu */}
                  <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm shrink-0 border border-white/20">
                    <CalendarRange className="w-6 h-6 mb-1 text-white/80" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold text-white/70 tracking-widest uppercase">Dönem</span>
                  </div>

                  {/* Orta: başlık ve açıklama */}
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${style.badge} text-white mb-3`}>
                      {style.tag}
                    </span>

                    <h2 className="text-[22px] sm:text-[26px] font-black text-white leading-tight tracking-tight">
                      {startYear}
                      <span className="text-white/50 mx-2">—</span>
                      {endYear}
                    </h2>

                    <p className="text-white/70 text-sm font-medium mt-1 flex items-center gap-2">
                      <Target className="w-4 h-4 shrink-0" strokeWidth={2} />
                      {plan.title}
                    </p>
                  </div>

                  {/* Sağ: indirme butonu */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex flex-col items-end text-right">
                      <span className="text-[11px] text-white/50 font-semibold uppercase tracking-widest">PDF Belgesi</span>
                      <span className="text-sm text-white/80 font-bold">İndir / Görüntüle</span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 group-hover:bg-white group-hover:text-[#1B4F8A] text-white flex items-center justify-center transition-all duration-300">
                      <Download className="w-5 h-5 group-hover:hidden" strokeWidth={2} />
                      <ArrowRight className="w-5 h-5 hidden group-hover:block" strokeWidth={2.5} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Alt bilgi notu */}
          <p className="mt-8 px-1 text-xs text-gray-400 font-medium">
            * Stratejik planlar 5 yıllık dönemler halinde hazırlanmaktadır. PDF belgelerini görüntülemek için Adobe Acrobat Reader gereklidir.
          </p>
        </div>

      </section>
    </main>
  );
}

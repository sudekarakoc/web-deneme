'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Download, ShieldCheck, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_DATA } from '@/lib/data';
import Sidebar from '@/components/Sidebar';
import { reports } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function SayistayContent() {
  const kategori = 'yayinlar';
  const slug = 'sayistay-raporlari';
  const categoryData = SITE_DATA[kategori];

  const lineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Timeline vertical line: scaleY 0 → 1
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 2. Each timeline item (li): opacity/x entrance with stagger
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('li');
        gsap.fromTo(
          items,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.18,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
            },
          }
        );

        // 3. Each year dot box: scale 0 → 1 with stagger
        if (dotRefs.current.length > 0) {
          gsap.fromTo(
            dotRefs.current,
            { scale: 0 },
            {
              scale: 1,
              stagger: 0.18,
              duration: 0.5,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: listRef.current,
                start: 'top 85%',
              },
            }
          );
        }
      }

      // 4. Bottom info card: opacity/y entrance
      if (infoCardRef.current) {
        gsap.fromTo(
          infoCardRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoCardRef.current,
              start: 'top 90%',
            },
          }
        );
      }

      // 5. Official badge: opacity/x entrance
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: badgeRef.current,
              start: 'top 90%',
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
            <Link href="/">Anasayfa</Link>
            <span>/</span>
            <Link href="/yayinlar">Yayınlar</Link>
            <span>/</span>
            <span className="text-[#009FE3] font-bold">Sayıştay Raporları</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        <Sidebar kategori={kategori} categoryTitle={categoryData?.title || 'Yayınlar'} pages={categoryData?.pages || []} activeSlug={slug} />

        <div className="w-full flex-1 order-1 lg:order-2 pb-20">

          {/* BAŞLIK + RESMİ ROZET */}
          <div className="mb-10 px-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-[22px] font-bold text-[#1B4F8A] tracking-wide">Sayıştay Raporları</h1>
              <p className="text-[15px] text-gray-500 mt-1">T.C. Sayıştay Başkanlığı tarafından hazırlanan denetim raporlarına bu sayfadan ulaşabilirsiniz.</p>
            </div>
            <div ref={badgeRef} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm shrink-0 self-start">
              <ShieldCheck className="w-5 h-5 text-[#1B4F8A] shrink-0" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Resmi Kaynak</span>
                <span className="text-[12px] font-bold text-[#1B4F8A]">sayistay.gov.tr</span>
              </div>
            </div>
          </div>

          {/* VERTİKAL TİMELINE */}
          <div className="relative">
            <div ref={lineRef} className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#1B4F8A] via-[#009FE3]/40 to-transparent rounded-full" />

            <ul ref={listRef} className="flex flex-col gap-0">
              {reports.map((report, index) => {
                const isFirst = index === 0;
                return (
                  <li key={report.year} className="relative flex gap-6 pb-6 last:pb-0">
                    <div className="flex flex-col items-center shrink-0 z-10">
                      <div ref={el => { if (el) dotRefs.current[index] = el; }} className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-[15px] tracking-tight border-2 shadow-sm transition-all ${isFirst ? 'bg-[#1B4F8A] text-white border-[#1B4F8A] shadow-[0_4px_16px_rgba(27,79,138,0.3)]' : 'bg-white text-[#1B4F8A] border-[#1B4F8A]/20'}`}>
                        {report.year}
                      </div>
                    </div>
                    <a href={report.url} target="_blank" rel="noopener noreferrer" className={`group flex-1 flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-300 ${isFirst ? 'bg-gradient-to-r from-[#0F2D52] to-[#1B4F8A] border-[#1B4F8A] text-white shadow-[0_6px_24px_rgba(15,45,82,0.22)] hover:shadow-[0_10px_32px_rgba(15,45,82,0.32)] hover:scale-[1.01]' : 'bg-white border-gray-100 text-gray-800 shadow-sm hover:shadow-md hover:border-[#009FE3]/30 hover:bg-[#f0f7ff]'}`}>
                      <div className="flex flex-col">
                        {isFirst && <span className="text-[10px] font-black tracking-widest uppercase text-[#009FE3] mb-1">En Güncel</span>}
                        <h3 className={`text-[15px] font-bold leading-snug transition-colors ${isFirst ? 'text-white' : 'text-gray-800 group-hover:text-[#1B4F8A]'}`}>{report.title}</h3>
                        <span className={`text-[12px] font-semibold mt-0.5 ${isFirst ? 'text-white/60' : 'text-gray-400'}`}>T.C. Sayıştay Başkanlığı Denetim Raporu</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[11px] font-bold hidden sm:block ${isFirst ? 'text-white/60' : 'text-gray-400'}`}>Görüntüle</span>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isFirst ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#1B4F8A]' : 'bg-gray-50 text-gray-400 group-hover:bg-[#1B4F8A] group-hover:text-white'}`}>
                          {isFirst ? <ExternalLink className="w-4 h-4" strokeWidth={2.5} /> : <Download className="w-4 h-4" strokeWidth={2} />}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ALT BİLGİ */}
          <div ref={infoCardRef} className="mt-10 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#73B646] shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">Sayıştay raporları T.C. Sayıştay Başkanlığı'nın resmi web sitesine (<span className="text-[#1B4F8A] font-bold">sayistay.gov.tr</span>) yönlendirmektedir.</p>
          </div>

        </div>
      </section>
    </main>
  );
}

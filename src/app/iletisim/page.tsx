"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CozumMerkeziBanner from "@/components/CozumMerkezi";

gsap.registerPlugin(ScrollTrigger);

import { mainContacts, otherPhones, locations } from "./data";

/* ──────── BİLEŞEN ──────── */

export default function IletisimPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const muhtarRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Breadcrumb ve başlık animasyonu
      gsap.fromTo(".iletisim-hero-content", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      // Ana kartlar animasyonu
      gsap.fromTo(".contact-card", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.05 }
      );

      // Diğer numaralar
      gsap.fromTo(".phone-pill-card", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: phonesRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Muhtarlık alanı
      gsap.fromTo(".muhtar-banner", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: muhtarRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Konum kartları
      gsap.fromTo(".location-grid-card", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* ── BREADCRUMB ── */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide iletisim-hero-content">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">İletişim Bilgileri</span>
          </div>
        </div>
      </div>

      {/* ── ANA İÇERİK ALANI ── */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pt-12">
        {/* Başlık ve Açıklama */}
        <div className="mb-12 px-1 iletisim-hero-content text-center flex flex-col items-center">
          <div className="relative inline-block mb-4">
            <h1
              lang="tr"
              className="text-[24px] font-black text-[#0F2D52] tracking-tight uppercase relative z-10"
              style={{ fontFeatureSettings: '"locl"', textRendering: "optimizeLegibility" }}
            >
              İLETİŞİM BİLGİLERİ
            </h1>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#73B646] rounded-full"></span>
          </div>
          <p className="text-[15px] text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Tekirdağ Büyükşehir Belediyesi ile irtibata geçmek, talep ve önerilerinizi iletmek için 
            aşağıdaki kurumsal iletişim kanallarını kullanabilirsiniz.
          </p>
        </div>

        {/* ── KURUMSAL, SADE VE ŞIK İLETİŞİM KARTLARI (5 KOLONLU) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16" ref={cardsRef}>
          {mainContacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Üst İnce Renk Çizgisi */}
              <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: c.color }} />
              
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-opacity-20"
                style={{ backgroundColor: `${c.color}15`, color: c.color }}
              >
                {c.icon}
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                {c.label}
              </h2>
              <span className="text-sm font-bold text-[#0F2D52] group-hover:text-[#009FE3] transition-colors leading-snug">
                {c.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── DİĞER TELEFON NUMARALARI ── */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-14 border-t border-gray-100" ref={phonesRef}>
        <div className="mb-10 px-1 text-center flex flex-col items-center">
          <div className="relative inline-block mb-3">
            <h2 className="text-[20px] font-black text-[#0F2D52] uppercase relative z-10">DİĞER KURUMSAL NUMARALAR</h2>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#73B646] rounded-full"></span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Belediyemizin belirli hizmet birimlerine ait faks ve telefon irtibat numaraları.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherPhones.map((p, i) => (
            <div
              key={i}
              className="phone-pill-card group bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col hover:border-[#73B646]/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Sol yeşil ince çizgi */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#73B646]/20 group-hover:bg-[#73B646] transition-colors"></div>
              
              <div className="flex items-center gap-3 mb-3 ml-2">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4E2] text-[#73B646] flex items-center justify-center group-hover:bg-[#73B646] group-hover:text-white transition-all">
                  {p.icon}
                </div>
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider line-clamp-2">
                  {p.label}
                </h3>
              </div>
              <p className="text-sm font-bold text-[#0F2D52] ml-13 pl-1">{p.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MUHTARLIK İLETİŞİM ── */}
      <section ref={muhtarRef} className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-16">
        <div className="muhtar-banner bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-[#73B646]/10 text-[#73B646] flex items-center justify-center shrink-0">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] font-black text-[#0F2D52] tracking-tight uppercase">MUHTARLIK İLETİŞİM BİLGİLERİ</h2>
              <p className="text-sm text-gray-500 mt-1 max-w-md font-medium">
                Mahalle muhtarlarımızın güncel iletişim bilgilerine ve telefon numaralarına buradan ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <a
            href="https://www.tekirdag.bel.tr/content/WebSource/file/muhtarlik/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#73B646] text-white hover:bg-[#609A3A] hover:shadow-md px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
          >
            İletişim Rehberini Görüntüle
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── BİRİM LOKASYONLARI ── */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-20" ref={locationsRef}>
        <div className="mb-10 px-1 text-center flex flex-col items-center">
          <div className="relative inline-block mb-3">
            <h2 className="text-[20px] font-black text-[#0F2D52] uppercase relative z-10">HİZMET BİRİMLERİ LOKASYONLARI</h2>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#73B646] rounded-full"></span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Belediyemize bağlı dış hizmet binalarımızın fiziki adresleri ve koordinatları.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="location-grid-card group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[#73B646]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF4E2] text-[#73B646] flex items-center justify-center group-hover:bg-[#73B646] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#0F2D52] group-hover:text-[#73B646] transition-colors leading-tight">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                  {loc.address}
                </p>
              </div>

              <div className="px-6 py-4 border-t border-slate-50 flex justify-end">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold bg-[#73B646] text-white hover:bg-[#609A3A] hover:shadow-sm px-4 py-2.5 rounded-lg transition-all uppercase tracking-wide"
                >
                  Haritada Göster
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALO 153 CTA ── */}
      <section className="max-w-5xl mx-auto w-full px-6 lg:px-8 pb-20">
        <CozumMerkeziBanner />
      </section>
    </main>
  );
}

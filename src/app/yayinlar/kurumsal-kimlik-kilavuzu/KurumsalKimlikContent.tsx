"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Download, BookOpen, MonitorPlay, Palette, Shapes, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import { documents } from "./data";

export default function KurumsalKimlikContent() {
  const kategori = "yayinlar";
  const slug = "kurumsal-kimlik-kilavuzu";
  const categoryData = SITE_DATA[kategori];

  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
          },
        }
      );
    }

    if (visualRef.current) {
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95, rotate: 2 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 85%",
          },
        }
      );
    }
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
            <span className="text-[#009FE3] font-bold">Kurumsal Kimlik Kılavuzu</span>
          </div>
        </div>
      </div>

      {/* İÇERİK VE SIDEBAR */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || "Yayınlar"}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 order-1 lg:order-2 pb-20">
          
          <div ref={headerRef} className="mb-10 px-1">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-bold tracking-widest uppercase mb-4">
              <Palette className="w-4 h-4" />
              Marka & İletişim Rehberi
            </span>
            <h1 className="text-[28px] sm:text-[34px] font-black text-[#1B4F8A] tracking-tight leading-tight">
              Kurumsal Kimlik Kılavuzu
            </h1>
            <p className="text-[15px] sm:text-[16px] text-gray-500 mt-3 leading-relaxed max-w-3xl">
              Belediyemizin kurumsal kimliğinin standartlarını belirleyen, logomuzun doğru kullanımı, renk paletimiz, tipografimiz ve kurumsal materyallerin tasarım ilkelerini içeren dokümanlar. Kurumsal bütünlüğü sağlamak amacıyla tasarımlarda bu kılavuzdaki esaslara uyulması gerekmektedir.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* DÖKÜMAN KARTLARI */}
            <div className="flex flex-col gap-4 flex-1">
              {documents.map((doc, index) => {
                const isMain = doc.id === "kilavuz";
                return (
                  <a
                    key={doc.id}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-5 p-6 rounded-3xl border transition-all duration-400 overflow-hidden
                      ${isMain 
                        ? "bg-gradient-to-r from-[#0F2D52] to-[#1B4F8A] border-[#1B4F8A] text-white shadow-[0_12px_30px_rgba(27,79,138,0.25)] hover:shadow-[0_16px_40px_rgba(27,79,138,0.35)] hover:scale-[1.02]" 
                        : "bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md hover:border-[#009FE3]/30 hover:bg-[#f0f7ff]"
                      }`}
                  >
                    {isMain && (
                      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
                    )}

                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300
                      ${isMain 
                        ? "bg-white/15 text-white backdrop-blur-sm group-hover:bg-white group-hover:text-[#1B4F8A]" 
                        : "bg-gray-50 text-[#1B4F8A] group-hover:bg-[#1B4F8A] group-hover:text-white"
                      }`}>
                      {doc.iconType === "book" && <BookOpen className="w-7 h-7" strokeWidth={1.5} />}
                      {doc.iconType === "presentation" && <MonitorPlay className="w-7 h-7" strokeWidth={1.5} />}
                    </div>

                    <div className="flex-1 min-w-0 pr-4">
                      {isMain && (
                        <span className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#009FE3] text-white mb-2">
                          Ana Kılavuz
                        </span>
                      )}
                      <h3 className={`text-[18px] sm:text-[20px] font-bold leading-snug transition-colors
                        ${isMain ? "text-white" : "text-gray-800 group-hover:text-[#1B4F8A]"}`}>
                        {doc.title}
                      </h3>
                      <p className={`text-[13px] font-medium mt-1.5 leading-relaxed hidden sm:block
                        ${isMain ? "text-white/70" : "text-gray-500"}`}>
                        {doc.description}
                      </p>
                      <div className={`text-[12px] font-bold mt-3 flex items-center gap-2
                        ${isMain ? "text-white/90" : "text-[#1B4F8A]"}`}>
                        <span className={`px-2 py-0.5 rounded-md ${isMain ? "bg-white/20" : "bg-[#1B4F8A]/10"}`}>
                          {doc.format} BELGESİ
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent transition-all duration-300
                      group-hover:border-current opacity-80 group-hover:opacity-100 group-hover:translate-x-1">
                      <ArrowRight className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* GÖRSEL ALAN (Brand Elements Showcase) */}
            <div 
              ref={visualRef}
              className="lg:w-80 shrink-0 bg-white rounded-3xl border border-gray-100 p-8 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1B4F8A] via-[#009FE3] to-[#73B646]" />
              
              <div className="w-20 h-20 rounded-2xl bg-gray-50 mb-6 flex items-center justify-center relative shadow-inner">
                <Shapes className="w-10 h-10 text-[#1B4F8A]" strokeWidth={1.5} />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#73B646] flex items-center justify-center border-4 border-white shadow-sm">
                  <Palette className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              
              <h4 className="text-[16px] font-bold text-gray-800 mb-2">Marka Standartları</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Tüm basılı ve dijital materyallerde standartları koruyarak şehrimizin kurumsal kimliğini en doğru şekilde temsil edelim.
              </p>

              <div className="w-full h-px bg-gray-100 my-6" />

              <div className="flex gap-3 justify-center w-full">
                <div className="w-8 h-8 rounded-full bg-[#1B4F8A] shadow-md" title="Kurumsal Lacivert"></div>
                <div className="w-8 h-8 rounded-full bg-[#009FE3] shadow-md" title="Açık Mavi"></div>
                <div className="w-8 h-8 rounded-full bg-[#73B646] shadow-md" title="Yeşil"></div>
                <div className="w-8 h-8 rounded-full bg-[#2C3E50] shadow-md" title="Koyu Gri"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

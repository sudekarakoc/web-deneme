"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, PawPrint, HeartPulse, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

interface BarinakItem {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const barinakVerileri: BarinakItem[] = [
  {
    id: 1,
    title: "Köpek Tedavi",
    description: "Sahipsiz köpek dostlarımız burada hem dinleniyor hem iyileşiyor. Candan bir dokunuşla başlayan bu misafirlik, sıcak bir yuvaya kavuşana dek devam ediyor.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/1.jpg",
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/2.jpg"
    ]
  },
  {
    id: 2,
    title: "Kedi Tedavi Alanı",
    description: "Sahipsiz kedi dostlarımız, burada şefkatle tedavi ediliyor, kısırlaştırma işlemleri yapılıyor. Candan bir ilgiyle bakımları tamamlandıktan sonra ya sıcak bir yuvaya kavuşuyorlar ya da doğaya, geldikleri yere sağlıklı bir şekilde geri dönüyorlar.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/3.jpg"
    ]
  },
  {
    id: 3,
    title: "Kedi Yaşam Alanı",
    description: "Sahiplendirilmeyi bekleyen kedilerimiz ile sokağa dönemeyecek durumda olan özel ve engelli canlarımız bu alanda barınmaktadır.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/4.jpg",
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/5.jpg"
    ]
  },
  {
    id: 4,
    title: "Yoğun Bakım",
    description: "Durumu kritik olan hayvanların tedavi süreçlerinin yürütüldüğü bu alanda; oksijen desteği, nebülizatör, serum ısıtıcıları ve hasta ısıtma üniteleri gibi donanımlar bulunmaktadır.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/8.jpg",
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/9.jpg"
    ]
  },
  {
    id: 5,
    title: "Laboratuvar",
    description: "Bu bölümde hemogram, biyokimyasal analiz ve mikroskobik incelemelerle hayvan dostlarımızın sağlık durumu ayrıntılı şekilde değerlendiriliyor.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/7.jpg"
    ]
  },
  {
    id: 6,
    title: "Ameliyathane",
    description: "Operasyonlar, steril koşullarda veteriner hekimler tarafından gerçekleştirilir. Her müdahale özenle yürütülür.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/12.jpg"
    ]
  },
  {
    id: 7,
    title: "Radyolojik Görüntüleme",
    description: "Röntgen ve görüntüleme sistemleri sayesinde iç organ hasarları, kırıklar ve benzeri sağlık sorunları hızlı ve doğru bir şekilde tespit edilir.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/11.jpg"
    ]
  },
  {
    id: 8,
    title: "Muayene",
    description: "Can dostlarımızın genel sağlık kontrolleri, ilk değerlendirmeleri ve gerekli yönlendirmeleri bu alanda yapılır.",
    images: [
      "https://www.tekirdag.bel.tr/content/WebSource/image/barinak/10.jpg"
    ]
  }
];

export default function SahipsizHayvanContent() {
  const kategori = "hizmetler";
  const slug = "sahipsiz-hayvan-gecici-bakimevi-hizmetleri";
  const categoryData = SITE_DATA[kategori];

  const [openId, setOpenId] = useState<number | null>(1); // Default first one open
  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredItems = barinakVerileri.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initial Entry Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    if (accordionRef.current) {
      tl.fromTo(
        accordionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
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
            <Link href="/hizmetler" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Hizmetler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">Sahipsiz Hayvan Geçici Bakımevi</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || "Hizmetler"}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <div className="w-full flex-1 min-w-0 order-1 lg:order-2 pb-20">
          
          <div ref={headerRef} className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#73B646]/10 text-[#73B646] text-xs font-bold tracking-widest uppercase mb-4">
                <PawPrint className="w-4 h-4" />
                Sosyal Hizmetler
              </span>
              <h1 className="text-[28px] sm:text-[34px] font-black text-[#1B4F8A] tracking-tight leading-tight">
                Sahipsiz Hayvan Geçici Bakımevi Hizmetleri
              </h1>
              <p className="text-[15px] sm:text-[16px] text-gray-500 mt-3 leading-relaxed">
                Geçici bakımevimizde yer alan birimlerimiz, tedavi olanaklarımız, kedi-köpek sosyal yaşam alanlarımız ve veterinerlik hizmetlerimize ait detayları inceleyebilirsiniz.
              </p>
            </div>
            
            {/* Search Box */}
            <div className="relative w-full sm:w-72 shrink-0">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Birim veya hizmet ara..." 
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#009FE3] focus:ring-4 focus:ring-[#009FE3]/10 transition-all"
              />
            </div>
          </div>

          {/* ACCORDION GRID */}
          <div ref={accordionRef} className="flex flex-col gap-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center justify-between px-6 py-5 text-left font-bold text-lg transition-colors border-l-4
                        ${isOpen 
                          ? "text-[#1B4F8A] bg-gray-50/50 border-[#73B646]" 
                          : "text-gray-800 hover:text-[#009FE3] border-transparent"
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <HeartPulse className={`w-5 h-5 ${isOpen ? 'text-[#73B646]' : 'text-gray-400'}`} />
                        {item.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>

                    {/* Body */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden
                        ${isOpen ? "max-h-[1200px] border-t border-gray-50" : "max-h-0"}`}
                    >
                      <div className="p-6 flex flex-col gap-6">
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                          {item.description}
                        </p>

                        {/* Images */}
                        <div className={`grid gap-4 ${item.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                          {item.images.map((img, index) => (
                            <div key={index} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm border border-gray-100">
                              <img
                                src={img}
                                alt={`${item.title} - ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-16 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-gray-100 border-dashed">
                <Search className="w-12 h-12 text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Aradığınız kriterlere uygun birim bulunamadı.</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-[#009FE3] font-bold hover:underline text-sm"
                >
                  Aramayı Temizle
                </button>
              </div>
            )}
          </div>
          
        </div>
      </section>
    </main>
  );
}

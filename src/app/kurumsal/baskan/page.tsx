"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

// ScrollTrigger eklentisini kaydediyoruz
gsap.registerPlugin(ScrollTrigger);

export default function BelediyeBaskaniSayfasi() {
  const containerRef = useRef<HTMLDivElement>(null);
  const breadcrumbCategoryTitle = "Kurumsal";
  const kategori = "kurumsal";
  const slug = "baskan";

  const categoryData = SITE_DATA[kategori as keyof typeof SITE_DATA] as
    | {
        pages?: Array<{ slug: string; title: string }>;
      }
    | undefined;
  const currentPage = categoryData?.pages?.find((p) => p.slug === slug);

  useEffect(() => {
    // GSAP Context ile animasyonları sarmalayarak clean-up işlemini kolaylaştırıyoruz
    const ctx = gsap.context(() => {
      // Hero Section Animasyonları (Sayfa yüklendiğinde çalışır)
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2, 
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      });

      // Özgeçmiş Bölümü Animasyonları (Aşağı kaydırıldığında çalışır)
      gsap.from(".bio-title", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".bio-paragraph", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert(); // Sayfa değiştiğinde animasyonları temizle
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI (LOGOYLA UYUMLU) --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link 
              href="/" 
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              Anasayfa
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <Link 
              href={`/${kategori}`} 
              className="hover:text-[#1B4F8A] transition-colors duration-200"
            >
              {breadcrumbCategoryTitle}
            </Link>
            
            <span className="text-gray-400">/</span>
            
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Temel Değerler"}
            </span>
          </div>

        </div>
      </div>
    <div ref={containerRef} className="min-h-screen bg-white font-sans text-gray-800">
        
        {/* Alt Kısım Beyaz Fade Efekti */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

        <div className="container mx-auto px-10 relative z-20 flex justify-between items-center h-200">
          {/* Sol Yazı Alanı */}
          <div className="max-w-xl">
            <h1 className="hero-text text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter">
              Dr. Candan<br />YÜCEER
            </h1>
            <h2 className="hero-text mt-4 text-xl md:text-2xl font-light text-gray-400 uppercase tracking-widest">
              TEKİRDAĞ BÜYÜKŞEHİR BELEDİYE BAŞKANI
            </h2>
            
            <button className="hero-text mt-10 bg-white border-l-4 border-green-500 text-gray-700 font-bold py-4 px-8 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
              YÖNETİM ŞEMASI
            </button>
          </div>

          {/* Sağ Portre Görseli */}
          <div className="hero-image hidden md:block absolute right-10 bottom-0 h-[90%]">
            <Image 
              src="https://www.tekirdag.bel.tr/assets/2025/img/mayor.png"
              alt="Dr. Candan Yüceer" 
              className="h-full object-contain object-bottom"
              width={400}
              height={600}
            />
          </div>
        </div>

      {/* ÖZGEÇMİŞ BÖLÜMÜ */}
      <section className="bio-section bg-white py-20 px-6 md:px-20 lg:px-40 relative z-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="bio-title text-4xl font-extrabold text-[#3b5973] text-center mb-12">
            ÖZGEÇMİŞ
          </h3>
          
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed text-justify">
            <p className="bio-paragraph">
              1973 yılında doğan Candan Yüceer, ilk, orta ve lise öğrenimini Ankara&apos;da tamamladı. Gazi Üniversitesi Tıp Fakültesi&apos;ni bitirdi. Ankara ve Tekirdağ halkına devlet kurumlarında hizmet vermiştir.</p>
              
            <p>Tekirdağ Çerkezköy CUMOK Kurucu Başkanlığı, Türkiye CUMOK Yönetim Kurulu Üyeliği, Tekirdağ Çerkezköy Atatürkçü Düşünce Derneği üyeliği ve yöneticiliği, Kadınlar El Ele Derneği üyeliği, Tekirdağ Tabip Odası üyeliği görevlerinde bulundu.</p>

            <p>Aynı zamanda Siyaset Bilimi ve Kamu Yönetimi Yüksek Lisans mezunu olan Dr. Candan Yüceer Tekirdağ’da 2011 ve 2015 Milletvekili Genel Seçimleri için yapılan ön seçimlerden birinci olarak çıktı ve Tekirdağ Milletvekili seçildi. Cumhuriyet Halk Partisi’nin en üst yönetim organı olan Parti Meclisi’nde PM üyesi olarak görev yaptı.</p>

            <p>Dr. Candan Yüceer Milletvekilliği süresince Tekirdağ’ın çevre, eğitim, sağlık, ulaşım, yatırım gibi sorunlarının TBMM’de yakından takipçisi oldu ve ülke gündemine taşıdı. Tekirdağ’ın 11 ilçesinde halkla sürekli iletişim halinde oldu, Tekirdağ’ı mahalle mahalle, köy köy ziyaret ederek yaşanan sorunların giderilmesi için yerel ve ulusal düzeyde çalışmalar yürüttü. Yerel yönetimlerin hizmet süreçlerine destek verdi.</p>

            <p>TBMM’de görev süresi boyunca sadece seçim bölgesinde değil, yurt genelinde de etkin çalışma yürüttü ve toplumsal sorunlarda mağdurların ve ezilenin yanında mücadele vererek sorunlara çözüm yolları aradı. TBMM’de Sağlık, Aile, Çalışma ve Sosyal İşler Komisyonu üyeliği, TBMM Kadın Erkek Fırsat Eşitliği Komisyonu’nda Başkanvekilliği ve Grup Sözcülüğü, CHP Kadın ve Çocuk Hakları İzleme ve İnceleme Komisyonu Başkanlığı, Kadın Erkek Fırsat Eşitliği Komisyonu üyeliği yaptı.</p>

            <p>Evli ve 2 çocuk annesi olan Dr. Candan Yüceer çocuklarını büyüttüğü şehrine yerel yönetici olarak hizmet etmek ve Tekirdağ’da yaşamanın bir ayrıcalık olduğunu kentte yaşayan her bir bireyin tam anlamıyla hissetmesi için yola çıktı.</p>

          </div>
        </div>  
      </section>
    </div>
    </main>
  )
}  

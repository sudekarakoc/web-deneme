"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";

// GSAP ScrollTrigger'ı Next.js tarafında güvenle kaydetmek için
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    id: 1,
    title: "BÜYÜKŞEHİR",
    highlight: "7/24 NÖBETTE",
    description: "Kesintisiz ve etkili çözüm sunma anlayışıyla 7 gün 24 saat vatandaşlarımızın hizmetindeyiz.",
    contactText: "ALO 153 Çözüm Merkezi",
    whatsapp: "0543 870 59 59",
    bgImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "SOSYAL BELEDİYECİLİK",
    highlight: "EĞİTİME TAM DESTEK",
    description: "Üniversite öğrencilerimiz için hazırladığımız eğitim destek programı ve ulaşım indirimleri başladı. Geleceğimiz gençlerimize emanet.",
    contactText: "444 0 153 İletişim",
    whatsapp: "0543 870 59 59",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    id: 3,
    title: "ÇEVRE DOSTU ŞEHİR",
    highlight: "YENİ NESİL ULAŞIM",
    description: "Şehrimizin dört bir yanına yayılan yeni nesil akıllı bisiklet durakları ve yeşil enerji projeleriyle sürdürülebilir bir gelecek inşa ediyoruz.",
    contactText: "Beyaz Masa",
    whatsapp: "0543 870 59 59",
    bgImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "KÜLTÜR VE SANAT",
    highlight: "YAZ ETKİNLİKLERİ",
    description: "Açık hava konserleri, tiyatro gösterimleri ve sanat atölyeleriyle dolu dolu bir yaz sezonu vatandaşlarımızı bekliyor.",
    contactText: "Etkinlik Takvimi",
    whatsapp: "0543 870 59 59",
    bgImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
  }
];


export default function PromoBanner() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Ana Banner için Scroll Animasyonu (Kullanıcı buraya kaydırdığında çalışır)
      gsap.fromTo(
        ".banner-container",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Bileşenin üst kısmı ekranın %80'ine geldiğinde başla
            toggleActions: "play none none reverse", // Yukarı çıkınca geri alması için (isteğe bağlı)
          },
        }
      );

      // 2. Alt Butonlar için Scroll Animasyonu
      gsap.fromTo(
        ".quick-link",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".quick-links-container",
            start: "top 90%", 
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Slayt içi geçiş animasyonu (Kullanıcı oklarla değiştirdiğinde)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        q(".slide-content"),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* --- BANNER ALANI --- */}
      <div className="banner-container relative w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden group shadow-xl bg-zinc-900 mb-6">
        {/* Arka Plan */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${slides[current].bgImage})` }}
        />
        
        {/* Gradient Katmanı */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/70 to-transparent" />

        {/* İçerik Kartı */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl w-full">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <h2 className="slide-content text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-1">
              {slides[current].title}
            </h2>
            <h3 className="slide-content text-2xl md:text-3xl font-bold text-red-500 mb-4">
              {slides[current].highlight}
            </h3>
            <p className="slide-content text-zinc-300 text-base md:text-lg mb-6 line-clamp-3">
              {slides[current].description}
            </p>

            <div className="slide-content flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors border border-white/10">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{slides[current].contactText}</span>
              </button>
              
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(22,163,74,0.3)] hover:shadow-[0_0_20px_rgba(22,163,74,0.5)]">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">ÇEK GÖNDER</span>
                <span className="ml-1 text-sm font-bold border-l border-green-400 pl-2">{slides[current].whatsapp}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Yönlendirme Okları (Görseldeki gibi kenarlarda) */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              title="Önceki duyuru"
              aria-label="Önceki duyuru"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              title="Sonraki duyuru"
              aria-label="Sonraki duyuru"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
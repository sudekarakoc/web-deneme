"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";

// Swiper Stilleri
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// İçeriğe Uygun ve Çalışan Yeni Görseller
const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop", // Sahil ve Deniz (Tekirdağ konsepti)
    title: "Mavi Gözlü Şehir Tekirdağ",
    description: "Trakya'nın incisinde yaşam kalitesini artıracak projelerle hizmetinizdeyiz.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop", // Tarım ve Doğa
    title: "Sürdürülebilir Tarım ve Çevre",
    description: "Gelecek nesillere daha yeşil bir Tekirdağ bırakmak için çalışıyoruz.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop", // Modern Şehir ve Altyapı
    title: "Modern Şehircilik Anlayışı",
    description: "Altyapıdan üstyapıya, yenilikçi çözümlerle şehrimizi geleceğe taşıyoruz.",
  }
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen min-h-[600px] bg-zinc-900 group overflow-hidden">
      
      {/* Özel Pagination (Noktalar) Stili */}
      <style>{`
        .swiper-pagination { 
          text-align: center !important; 
          padding-bottom: 2rem !important;
        }
        .swiper-pagination-bullet { 
          width: 12px !important; 
          height: 6px !important; 
          border-radius: 4px !important; 
          background: white !important; 
          opacity: 0.5 !important; 
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active { 
          opacity: 1 !important; 
          width: 32px !important; 
        }
      `}</style>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        effect="fade"
        // YAZILARIN ÜST ÜSTE BİNMESİNİ ENGELLEYEN AYAR: crossFade
        fadeEffect={{ crossFade: true }} 
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.ozel-sol-buton',
          nextEl: '.ozel-sag-buton',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        
        {/* MOBİL DÜZELTME: hidden md:block eklendi ve z-index z-30'a düşürüldü */}
        <div className="hidden md:block ozel-sol-buton absolute top-0 left-0 w-1/4 h-full z-30 cursor-pointer"></div>
        <div className="hidden md:block ozel-sag-buton absolute top-0 right-0 w-1/4 h-full z-30 cursor-pointer"></div>

        {SLIDES.map((slide, index) => (
          // bg-zinc-900 sınıfı, geçiş sırasında alttaki yazının görünmesini engeller
          <SwiperSlide key={slide.id} className="bg-zinc-900 overflow-hidden">
            
            {/* 1. Katman: Arka Plan Görseli */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* 2. Katman: Karartma (Overlay) - Şeffaf menü ve yazı okunabilirliği için */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* 3. Katman: İçerik (Yazılar ve Butonlar) */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-6">
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg tracking-tight [font-family:'Plus Jakarta Sans',sans-serif]">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-2xl text-white/90 max-w-3xl font-light leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
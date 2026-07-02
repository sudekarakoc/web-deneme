"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Search } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop", 
    title: "Mavi Gözlü Şehir Tekirdağ",
    description: "Trakya'nın incisinde yaşam kalitesini artıracak projelerle hizmetinizdeyiz.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop", 
    title: "Sürdürülebilir Tarım ve Çevre",
    description: "Gelecek nesillere daha yeşil bir Tekirdağ bırakmak için çalışıyoruz.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop", 
    title: "Modern Şehircilik Anlayışı",
    description: "Altyapıdan üstyapıya, yenilikçi çözümlerle şehrimizi geleceğe taşıyoruz.",
  }
];

const SUGGESTIONS = [
  "Su kesintisi",
  "İmar durumu",
  "Ruhsat sorgulama",
  "Belediye duyuruları",
  "Otobüs saatleri",
  "Etkinlikler",
];

export default function HeroSlider() {
  const [query, setQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const suggestionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const phrases = [
      "Hizmet, duyuru veya işlem ara...",
      "Su kesintisi sorgula...",
      "Otobüs saatlerini öğren...",
      "Tekirdağ'da etkinlik ara..."
    ];

    const masterTl = gsap.timeline({ repeat: -1 });

    phrases.forEach((phrase) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      const proxy = { length: 0 };

      tl.to(proxy, {
        length: phrase.length,
        duration: phrase.length * 0.08, 
        ease: "none",
        onUpdate: () => {
          setPlaceholderText(phrase.substring(0, Math.ceil(proxy.length)));
        }
      });

      masterTl.add(tl);
    });

    return () => {
      masterTl.kill();
    };
  }, []);

  // --- Zıplamayı Önleyen Yeni GSAP Mantığı ---
  const handleSlideChange = () => {
    // 1. Önce olası devam eden tüm animasyonları durdur ve metinleri başlangıç konumuna al
    gsap.killTweensOf(".slide-text-anim");
    gsap.set(".slide-text-anim", { y: 30, opacity: 0 });

    // 2. Sadece aktif (ekranda olan) slaytın içindeki metinleri yukarı doğru canlandır
    // Gecikme (delay), Swiper'ın geçiş efektinin oturması için yumuşaklık sağlar
    gsap.to(".swiper-slide-active .slide-text-anim", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.15,
    });
  };

  const openSuggestions = () => {
    if (!suggestionRef.current) return;
    gsap.to(suggestionRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
      pointerEvents: "auto",
    });
  };

  const closeSuggestions = () => {
    if (!suggestionRef.current) return;
    gsap.to(suggestionRef.current, {
      opacity: 0,
      y: -10,
      scale: 0.98,
      duration: 0.25,
      ease: "power2.in",
      pointerEvents: "none",
    });
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] xl:h-screen bg-gray-900 overflow-hidden [&_.swiper-pagination]:!text-right [&_.swiper-pagination]:!px-6 md:[&_.swiper-pagination]:!px-16 [&_.swiper-pagination]:!bottom-8 md:[&_.swiper-pagination]:!bottom-12">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSlideChangeTransitionStart={handleSlideChange} // Animasyon geçiş başladığı an tetiklenir
        onSwiper={handleSlideChange} 
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !inline-block !h-1.5 !w-6 !mx-1.5 !rounded-full !bg-white/40 !transition-all !duration-500 hover:!bg-white/80 [&.swiper-pagination-bullet-active]:!w-12 [&.swiper-pagination-bullet-active]:!bg-[#73B646]"></span>`;
          },
        }}
        navigation={{
          prevEl: ".ozel-sol-buton",
          nextEl: ".ozel-sag-buton",
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        <div className="hidden md:block ozel-sol-buton absolute top-0 left-0 w-1/4 h-full z-30 cursor-pointer" />
        <div className="hidden md:block ozel-sag-buton absolute top-0 right-0 w-1/4 h-full z-30 cursor-pointer" />

        {SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <>
                {/* ARKA PLAN */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`w-full h-full transition-transform duration-[5000ms] ease-out ${isActive ? "scale-110" : "scale-100"}`}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-10" />

                <div className="relative z-20 w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-8 gap-10 lg:gap-20">

                  {/* SOL - ARAMA ÇUBUĞU */}
                  <div className="w-full md:w-5/12 relative flex flex-col items-center md:items-start order-2 md:order-1 mt-8 md:mt-0">
                    <div className="w-full bg-white/10 border border-white/20 rounded-xl p-2 flex items-center backdrop-blur-md shadow-2xl transition-all duration-300 focus-within:bg-white/15 focus-within:border-white/40">
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={openSuggestions}
                        onBlur={() => setTimeout(closeSuggestions, 150)}
                        placeholder={placeholderText}
                        className="flex-1 bg-transparent text-white px-4 py-2 outline-none placeholder-white/70 text-[15px]"
                      />
                      <button
                        className="p-3 rounded-lg bg-white text-gray-900 hover:bg-[#73B646] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        aria-label="Arama Yap"
                      >
                        <Search size={20} strokeWidth={2.5} />
                      </button>
                    </div>

                    <div
                      ref={suggestionRef}
                      className="absolute left-0 right-0 top-full mt-3 w-full bg-gray-900/95 border border-white/10 rounded-xl shadow-2xl p-2 opacity-0 -translate-y-2 scale-95 pointer-events-none z-50 backdrop-blur-xl"
                    >
                      {SUGGESTIONS.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors duration-200 text-[15px]"
                          onMouseDown={() => setQuery(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SAĞ - METİN ALANI (Artık koşula bağlı değil, her zaman render ediliyor) */}
                    <div className="w-full md:w-7/12 flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-2">
                      <h1 className="slide-text-anim text-4xl md:text-5xl lg:text-6xl font-auto text-white mb-4 tracking-wide drop-shadow-md leading-tight opacity-0">
                        {slide.title}
                      </h1>
                      <p className="slide-text-anim text-lg md:text-xl text-gray-200 max-w-lg font-light tracking-wider leading-relaxed drop-shadow-sm opacity-0">
                        {slide.description}
                      </p>
                    </div>

                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
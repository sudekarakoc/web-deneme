"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { Search, Droplet, Map, FileCheck, Megaphone, Bus, CalendarDays, ChevronRight } from "lucide-react";

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
  { label: "Su kesintisi sorgula", icon: Droplet },
  { label: "İmar durumu sorgula", icon: Map },
  { label: "Ruhsat işlemleri", icon: FileCheck },
  { label: "Belediye duyuruları", icon: Megaphone },
  { label: "Otobüs saatleri", icon: Bus },
  { label: "Yaklaşan etkinlikler", icon: CalendarDays },
];

export default function HeroSlider() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (finalQuery.trim()) {
      router.push(`/arama?q=${encodeURIComponent(finalQuery.trim())}`);
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      {/* YENİ: Slayt Metinleri İçin Kusursuz CSS Animasyonu */}
      <style>{`
        .hero-text-anim {
          opacity: 0;
          transform: translateY(30px);
        }
        .swiper-slide-active .hero-text-anim,
        .swiper-slide-duplicate-active .hero-text-anim {
          animation: slideUpFade 0.8s ease-out forwards;
        }
        .swiper-slide-active .delay-title,
        .swiper-slide-duplicate-active .delay-title {
          animation-delay: 0.15s;
        }
        .swiper-slide-active .delay-desc,
        .swiper-slide-duplicate-active .delay-desc {
          animation-delay: 0.3s;
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative w-full h-[600px] lg:h-[700px] xl:h-screen bg-gray-900 overflow-hidden [&_.swiper-pagination]:!text-right [&_.swiper-pagination]:!px-6 md:[&_.swiper-pagination]:!px-16 [&_.swiper-pagination]:!bottom-8 md:[&_.swiper-pagination]:!bottom-12">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          watchSlidesProgress={true} // YENİ: Kaydırma sırasında sınıfların kopmasını engeller
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
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full transition-transform duration-[10000ms] ease-out scale-100 [.swiper-slide-active_&]:scale-110 [.swiper-slide-duplicate-active_&]:scale-110">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    unoptimized
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-10" />

              <div className="relative z-20 w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-8 gap-10 lg:gap-20">

                {/* SOL - ARAMA ÇUBUĞU VE ÖNERİLER */}
                <div className="w-full md:w-5/12 relative flex flex-col items-center md:items-start order-2 md:order-1 mt-8 md:mt-0 z-50">
                  <div className="w-full h-[56px] bg-black/30 border border-white/30 rounded-xl p-1 flex items-center backdrop-blur-md shadow-lg transition-all duration-300 focus-within:bg-black/40 focus-within:border-white/50 relative z-[60]">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setIsDropdownOpen(true)}
                      onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                      }}
                      placeholder={placeholderText}
                      className="flex-1 bg-transparent text-white px-4 h-full outline-none placeholder-white/70 text-[15px] tracking-wide"
                    />
                    <button
                      onClick={() => handleSearch()}
                      className="h-full aspect-square rounded-lg bg-white text-gray-900 hover:bg-[#73B646] hover:text-white transition-colors duration-300 flex items-center justify-center mr-0.5"
                      aria-label="Arama Yap"
                    >
                      <Search size={20} strokeWidth={2.5} />
                    </button>
                  </div>

                  <div
                    onMouseDown={(e) => e.preventDefault()}
                    className={`absolute left-0 right-0 top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-1.5 z-[55] transition-all duration-200 ease-out origin-top swiper-no-swiping ${ 
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="px-3 py-2 mb-1 border-b border-gray-50 shrink-0">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Hızlı İşlemler
                      </span>
                    </div>
                    
                    <div 
                      className="flex flex-col gap-0.5 max-h-[190px] overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full pr-1"
                      onWheel={(e) => e.stopPropagation()} 
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchMove={(e) => e.stopPropagation()}
                    >
                      {SUGGESTIONS.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={idx}
                            // Üzerine gelince arka plan tamamen yeşil, yazılar tamamen beyaz olacak
                            className="group flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:text-white hover:bg-[#73B646] rounded-md cursor-pointer transition-all duration-200 text-[14px] font-medium"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setQuery(item.label);
                              handleSearch(item.label);
                            }}
                          >
                            {/* İkon normalde yeşil, üstüne gelince beyaza dönüyor */}
                            <div className="text-[#73B646] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                              <IconComponent size={20} strokeWidth={2} />
                            </div>
                            
                            <span className="flex-1">{item.label}</span>

                            {/* Üzerine gelince sağdan beliren küçük ok - tıklanabilirliği kesinleştirir */}
                            <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0">
                              <ChevronRight size={18} strokeWidth={2.5} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* SAĞ - METİN ALANI (Sınıflar Keyframe'e Bağlandı) */}
                <div className="w-full md:w-7/12 flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-2">
                  <h1 className="hero-text-anim delay-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md leading-tight">
                    {slide.title}
                  </h1>
                  <p className="hero-text-anim delay-desc text-lg md:text-xl text-gray-200 max-w-lg font-light tracking-wider leading-relaxed drop-shadow-sm">
                    {slide.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Bazılarına "link" özelliği ekledik. Linki olmayanlar sadece görsel olarak kalacak.
const SLIDES = [
  {
    id: 1,
    bgImage:
      "https://www.tekirdag.bel.tr/content/WebSource/image/banner/banner_1781185455.jpg",
  },
  {
    id: 2,
    bgImage:
      "https://www.tekirdag.bel.tr/content/WebSource/image/banner/banner_1780399693.jpg",
    link: "/yayinlar/e-bulten",
  },
  {
    id: 3,
    bgImage:
      "https://www.tekirdag.bel.tr/content/WebSource/image/banner/banner_1778662716.jpg",
    link: "https://www.tekirdag.bel.tr/haberler",
  },
  {
    id: 4,
    bgImage:
      "https://www.tekirdag.bel.tr/content/WebSource/image/banner/banner_1765347572.jpg",
  },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]); 

  const getSlideClasses = (index: number, active: number) => {
    let diff = index - active;

    if (diff === -3) diff = 1;
    if (diff === 3) diff = -1;
    if (diff === -2) diff = 2;

    if (diff === 0) {
      return "z-20 opacity-100 translate-x-0 shadow-2xl";
    } else if (diff === -1) {
      // 104% değeri slaytların birbirine değmeden çok şık bir mesafede durmasını sağlar
      return "z-10 opacity-50 -translate-x-[104%] cursor-pointer hover:opacity-75 shadow-lg";
    } else if (diff === 1) {
      return "z-10 opacity-50 translate-x-[104%] cursor-pointer hover:opacity-75 shadow-lg";
    } else {
      return "z-0 opacity-0 translate-x-[200%] pointer-events-none";
    }
  };

  return (
    // w-[100vw] hilesi kaldırıldı, w-full ve overflow-hidden eklendi.
    <div className="relative w-full flex items-center justify-center overflow-hidden py-8">
      
      {/* Görünmez Tutucu (Spacer) - Sayfa yüksekliğini oranlayıp kaymayı engeller */}
      <div className="w-[92%] md:w-[75%] aspect-[1200/350] invisible pointer-events-none"></div>

      {/* Sol Ok */}
      <button 
        onClick={prevSlide}
        aria-label="Önceki"
        className="absolute left-4 md:left-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all z-30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Slaytlar */}
      {SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            onClick={() => {
              if (!isActive) {
                const isNext = (activeIndex + 1) % SLIDES.length === index;
                if (isNext) nextSlide();
                else prevSlide();
              }
            }}
            className={`absolute w-[92%] md:w-[75%] aspect-[1200/350] rounded-[40px] overflow-hidden flex items-center justify-center transition-all duration-700 ease-out ${getSlideClasses(index, activeIndex)}`}
          >
            {isActive && slide.link ? (
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="w-full h-full block group">
                <div className="w-full h-full relative">
                  <Image
                    src={slide.bgImage}
                    alt={`Slayt ${slide.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    unoptimized
                  />
                </div>
              </a>
            ) : (
              <div className="w-full h-full relative">
                <Image
                  src={slide.bgImage}
                  alt={`Slayt ${slide.id}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Sağ Ok */}
      <button 
        onClick={nextSlide}
        aria-label="Sonraki"
        className="absolute right-4 md:right-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all z-30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}
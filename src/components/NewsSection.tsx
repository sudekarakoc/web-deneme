'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
// Swiper Importları
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Sol tarafta dönecek ana haberlerin birleştirilmiş listesi
const featuredNewsList = [
  {
    id: 101,
    title: "Büyükşehir Zabıta'dan Halk Sağlığını Tehdit Eden Ürünlere Geçit Yok",
    date: "08/07/2026",
    category: "Gündem",
    image: "https://www.tekirdag.bel.tr/content/WebSource/image/haber_manset/51280_manset.jpg", 
  },
  {
    id: 102,
    title: "Tekirdağ'da Tarım İçin Yeni Dönem: Üreticiye Büyük Destek",
    date: "09/07/2026",
    category: "Tarım",
    image: "https://www.tekirdag.bel.tr/content/WebSource/image/haber_manset/51281_manset.jpg",
  },
  {
    id: 103,
    title: "Kültür ve Sanat Etkinlikleri Hız Kesmeden Devam Ediyor",
    date: "10/07/2026",
    category: "Kültür Sanat",
    image: "https://www.tekirdag.bel.tr/content/WebSource/image/haber_manset/51273_manset.jpg",
  }
];

const newsList = [
  { id: 1, title: 'Candan Başkan: "Biz Hiçbir Zaman Sorumluluktan Kaçan Bir Büyükşehir Olmadık"', date: '08/07/2026' },
  { id: 2, title: "Tekirdağ'da Can Dostları Emin Ellerde", date: '08/07/2026' },
  { id: 3, title: "Büyükşehir'den Çocuklara Eğlenerek Öğrenme Fırsatı", date: '07/07/2026' },
  { id: 4, title: "Candan Başkan'dan Tekirdağ'da Bir İlk: Mazot Desteği Üreticiyle Buluştu", date: '07/07/2026' },
  { id: 5, title: "Dil Eğitim Merkezi'nde Pratikle Öğrenme Kolaylığı", date: '06/07/2026' },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const listRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const textContentRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // GSAP Giriş Animasyonları
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        listRefs.current,
        { opacity: 0, x: 15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Metin Güncelleme Animasyonu (Index değiştikçe çalışır)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [currentIndex]);

  const activeNews = featuredNewsList[currentIndex];

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 bg-white select-none">
      
      {/* Çizgi Şeklinde Pagination için Özel CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-line-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 4px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        .custom-line-pagination .swiper-pagination-bullet-active {
          background-color: #ffffff;
          width: 32px;
        }
      `}} />

      {/* Başlık Alanı */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a2b49]">
          Güncel Haberler
        </h2>
        <a href="guncel/haberler" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          Tüm Haberler &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[460px]">
        
        {/* Sol Taraf: Öne Çıkan Haber */}
        <div 
          ref={featuredRef} 
          className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-slate-900 h-[400px] lg:h-full shadow-sm"
        >
          
          {/* Swiper Görsel Şeridi */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            pagination={{
              el: '.custom-line-pagination',
              clickable: true,
            }}
            navigation={{
              nextEl: '.custom-next-btn',
              prevEl: '.custom-prev-btn',
            }}
            className="absolute inset-0 h-full w-full"
          >
            {featuredNewsList.map((news) => (
              <SwiperSlide key={news.id} className="h-full w-full relative">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Daha Yumuşak Karartma Filmi */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/40 to-transparent pointer-events-none z-10" />

          {/* Kontrol Okları */}
          <div className="absolute inset-0 hidden md:flex items-center justify-between px-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className="custom-prev-btn p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all pointer-events-auto border border-white/10" 
                aria-label="Önceki haber"
                title="Önceki haber"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                className="custom-next-btn p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all pointer-events-auto border border-white/10" 
                aria-label="Sonraki haber"
                title="Sonraki haber"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
          </div>
          
          {/* Minimal Kategori Etiketi */}
          <div className="absolute top-5 left-6 z-20 rounded-md bg-blue-600/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wide text-white uppercase pointer-events-none">
            {activeNews.category}
          </div>
          
          {/* Metin Alanı ve Çizgili Pagination (Alt kısım) */}
          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20 flex flex-col pointer-events-none">
            
            <div ref={textContentRef} className="pointer-events-auto mb-4">
              <div className="flex items-center space-x-2 mb-3 text-auto text-gray-300/90 font-medium">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 <span>{activeNews.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-2xl font-regular text-white leading-tight hover:text-blue-300 transition-colors line-clamp-3">
                <a href={`guncel/haberler/${activeNews.id}`}>
                  {activeNews.title}
                </a>
              </h3>
            </div>
            
            {/* Çizgili Pagination Konteyneri */}
            <div className="custom-line-pagination flex items-center justify-start pointer-events-auto"></div>
            
          </div>
        </div>

        {/* Sağ Taraf: Haber Listesi */}
        <div className="lg:col-span-4 flex flex-col h-[400px] lg:h-full overflow-y-auto pl-1 pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="divide-y divide-gray-100/80">
            {newsList.map((news, index) => (
              <a
                key={news.id}
                href={`/haberler/${news.id}`}
                ref={(el) => {
                  listRefs.current[index] = el;
                }}
                className="group block py-5 first:pt-1 last:pb-1 transition-all"
              >
                <div className="flex flex-col justify-between h-full">
                  <h4 className="text-base font-semibold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                    {news.title}
                  </h4>
                  <div className="mt-2.5 flex items-center text-xs text-gray-400 font-medium">
                    <svg className="mr-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {news.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
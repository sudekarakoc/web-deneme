"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Kartları bir dizide (array) tutuyoruz ki GSAP ile sırayla animasyon verebilelim
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Her bir kart için scroll yapıldıkça ekrana gelme animasyonu
      textRefs.current.forEach((text) => {
        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%", // Kart ekrana girmeye başladığında çalışır
                end: "bottom 15%",
                toggleActions: "play reverse play reverse", // Kullanıcı yukarı geri çıkarsa animasyon geri sarar
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Ekstra yükseklik (250vh) veriyoruz ki kaydırma (scroll) alanı uzun olsun
    <section ref={containerRef} className="relative w-full h-[250vh] bg-zinc-950">
      
      {/* ARKADA SABİT (STICKY) KALAN VİDEO ALANI */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Test için aynı sorunsuz W3Schools videosu */}
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Yazıların okunabilirliğini artırmak için alt kısımdan üste kararan gradyan */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/40 to-zinc-950"></div>
      </div>

      {/* VİDEONUN ÜZERİNDEN KAYAN İÇERİKLER (KARTLAR) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-[100vh] pb-[20vh] flex flex-col gap-[70vh] pt-[60vh]">
        
        {/* 1. KART */}
        <div 
          ref={(el) => { textRefs.current[0] = el; }} 
          className="w-full md:w-2/3 bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider mb-4 border border-blue-500/30">
            DİJİTAL ALTYAPI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Tekirdağ&apos;ın <br/><span className="text-blue-400">Akıllı Ağı</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Şehrin dört bir yanından gelen veriler, tek bir merkezde toplanarak vatandaşlarımıza daha hızlı ve akıllı hizmet sunmak için yüksek performansla işleniyor.
          </p>
        </div>

        {/* 2. KART (Sağa yaslanmış) */}
        <div 
          ref={(el) => { textRefs.current[1] = el; }} 
          className="w-full md:w-2/3 ml-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider mb-4 border border-blue-500/30">
            SİSTEM MİMARİSİ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Kesintisiz <br/><span className="text-blue-400">Teknoloji</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Modern yazılım mimarisi sayesinde, sistemlerimiz 7/24 kesintisiz çalışarak kurum içi operasyonları ve hizmet kalitesini maksimuma çıkarır.
          </p>
        </div>

      </div>
    </section>
  );
}
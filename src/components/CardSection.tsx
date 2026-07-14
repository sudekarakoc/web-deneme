"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Camera, Tv, Cherry, CalendarDays } from "lucide-react";

const cards = [
  {
    title: "Fotoğraf Albümü",
    icon: Camera,
    "image url": "https://www.tekirdag.bel.tr/assets/2025/img/candan_baskan.jpg",
    href: "https://www.flickr.com/photos/tbbfotograf/albums",
  },
  {
    title: "Büyükşehir Web TV",
    icon: Tv,
    "image url": "https://www.tekirdag.bel.tr/assets/2025/img/tv_foto.jpg",
    href: "https://www.tekirdag.bel.tr/tv",
  },
  {
    title: "Tekirdağ Hakkında",
    icon: Cherry,
    "image url": "https://www.tekirdag.bel.tr/assets/2025/img/tekirdag.jpg",
    href: "https://www.tekirdag.bel.tr/tekirdag",
  },
  {
    title: "Etkinlikler",
    icon: CalendarDays,
    "image url": "https://www.tekirdag.bel.tr/assets/2025/img/etkinlik_foto.jpg",
    href: "https://www.tekirdag.bel.tr/etkinlikler",
  },
];

export default function CardSection() {
  const overlays = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP matchMedia ile ekran boyutuna göre animasyon kuralları belirliyoruz
    const mm = gsap.matchMedia();

    // Mobil cihazlar (768px'den küçük): Resimler her zaman görünür
    mm.add("(max-width: 767px)", () => {
      gsap.set(overlays.current, {
        y: 0,
        opacity: 1,
        scale: 1,
      });
    });

    // Masaüstü cihazlar (768px ve üzeri): Resimler gizli (hover bekleniyor)
    mm.add("(min-width: 768px)", () => {
      gsap.set(overlays.current, {
        y: "100%",
        opacity: 0,
        scale: 1.08,
      });
    });

    return () => mm.revert(); // Sayfa değişirse GSAP ayarlarını temizle
  }, []);

  const enter = (index: number) => {
    // Animasyonu sadece masaüstünde tetikle
    if (window.innerWidth >= 768) {
      gsap.to(overlays.current[index], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  const leave = (index: number) => {
    // Animasyonu sadece masaüstünde tetikle
    if (window.innerWidth >= 768) {
      gsap.to(overlays.current[index], {
        y: "100%",
        opacity: 0,
        scale: 1.08,
        duration: 0.45,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pt-4 pb-4">
      <h2 className="mb-10 text-3xl font-light">
        Tekirdağ Büyükşehir Belediyesi
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Link
              key={index}
              href={card.href}
              onMouseEnter={() => enter(index)}
              onMouseLeave={() => leave(index)}
              className="relative h-[360px] overflow-hidden rounded-3xl border border-zinc-200 bg-white"
            >
              {/* Normal görünüm (Sadece masaüstünde başlangıçta görünür) */}
              <div className="flex h-full flex-col justify-center px-10">
                <Icon size={55} className="mb-10 text-black" />
                <h3 className="text-4xl font-semibold leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Hover Fotoğraf (Mobilde varsayılan, masaüstünde hover ile) */}
              <div
                ref={(el) => {
                  overlays.current[index] = el;
                }}
                className="absolute inset-0 translate-y-full opacity-0"
              >
                <Image
                  src={card["image url"]}
                  alt={card.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
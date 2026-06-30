"use client";

import { useRef, type RefObject } from "react";
import { useGsapFadeIn } from "@/lib/useGsapFadeIn";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGsapFadeIn(ref as RefObject<HTMLElement>);

  return (
    <section className="relative overflow-hidden">

      <div
        ref={ref}
        className="bg-gradient-to-br from-[#0F2D52] to-[#1B4F8A]
        text-white px-6 py-20 text-center"
      >

        <h2 className="text-4xl font-bold">
          Şehrin Dijital Hizmetleri
        </h2>

        <p className="text-blue-100 mt-2">
          Tüm belediye işlemleri tek noktada
        </p>

        <input
          className="mt-8 w-full max-w-md mx-auto px-4 py-3 rounded-2xl text-black"
          placeholder="Ara..."
        />

      </div>
    </section>
  );
}
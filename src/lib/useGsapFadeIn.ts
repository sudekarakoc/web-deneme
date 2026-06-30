"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useGsapFadeIn(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [ref]);
}
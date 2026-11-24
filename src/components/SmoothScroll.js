"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scrolling with Lenis: one requestAnimationFrame loop,
 * destroyed on unmount. Falls back to native scrolling if Lenis
 * is unavailable.
 */
export default function SmoothScroll() {
  useEffect(() => {
    let lenis;
    let rafId;
    try {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } catch {
      // Native smooth scroll (globals.css) takes over.
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}

"use client";
import { useEffect } from "react";

// Scroll-reveal engine: ports the preview's IntersectionObserver
// logic. Sections reveal ONLY when scrolled into view; there is no
// timed reveal-all, so below-fold animations never fire on load.
// One safety net remains: after 1100ms, anything already in the
// viewport at that moment is revealed (the preview's own fallback).
// Without JS at all, nothing is hidden in the first place: the
// hidden start states in globals.css only apply under html.js.
export default function RevealInit() {
  useEffect(() => {
    const els = () =>
      Array.from(document.querySelectorAll(".reveal, .flip, .fallwords"));
    const reveal = (el) => el.classList.add("in");

    if (!("IntersectionObserver" in window)) {
      els().forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    els().forEach((el) => io.observe(el));

    const t1 = setTimeout(() => {
      els().forEach((el) => {
        if (
          !el.classList.contains("in") &&
          el.getBoundingClientRect().top < window.innerHeight
        ) {
          reveal(el);
        }
      });
    }, 1100);

    return () => {
      io.disconnect();
      clearTimeout(t1);
    };
  }, []);

  return null;
}

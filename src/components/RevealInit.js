"use client";
import { useEffect } from "react";

// Scroll-reveal engine — ports the preview's IntersectionObserver
// logic exactly, with two safety nets so a section heading can NEVER
// be left invisible:
//  1. after 1100ms, anything already in the viewport is revealed
//     (the preview's own fallback);
//  2. after 4000ms, EVERYTHING is revealed, even if the observer
//     never fired (the defect on the old Vercel site: headings whose
//     word-drop never ran stayed hidden forever).
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

    const t2 = setTimeout(() => els().forEach(reveal), 4000);

    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}

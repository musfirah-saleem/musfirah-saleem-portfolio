"use client";

import { useReducedMotion } from "framer-motion";

const items = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Redux",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
  "X-Pay",
  "Stripe",
  "AI/LLM",
];

/** Scrolling tech strip near the bottom of the page — big display type. */
export default function Marquee() {
  const reduceMotion = useReducedMotion();

  const row = (key, hidden) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span
          key={`${key}-${item}`}
          className="flex items-center font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-4xl"
        >
          <span className="px-4 sm:px-6">{item}</span>
          <span className="text-pink">◆</span>
        </span>
      ))}
    </div>
  );

  // Calm version under prefers-reduced-motion: a static wrapped row.
  if (reduceMotion) {
    return (
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-6">
        <div className="flex flex-wrap items-center justify-center">{row("static")}</div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-6 sm:py-7"
      aria-label="Technologies I work with"
    >
      <div className="marquee-track flex w-max hover:[animation-play-state:paused]">
        {row("a")}
        {row("b", true)}
      </div>
    </div>
  );
}

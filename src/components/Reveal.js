"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Shared scroll-reveal wrapper: fades + slides content in on scroll. */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-drop: each word falls in from above, one after another,
 * when the heading scrolls into view. Slow on purpose (0.9s per word,
 * 0.18s stagger) so the drop is clearly visible. Disabled under
 * prefers-reduced-motion (words render statically).
 */
export function WordDrop({ text, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-1 align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "-115%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: delay + i * 0.18, ease: "easeOut" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Section eyebrow label (mono, cyan) + display heading. */
export function SectionHeading({ eyebrow, title, highlight, sub, dropWords = false, highlightClassName = "text-pink" }) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
        {"//"} {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
        {dropWords ? (
          <>
            <WordDrop text={title} />{" "}
            {highlight && <WordDrop text={highlight} className={highlightClassName} delay={0.15} />}
          </>
        ) : (
          <>
            {title}{" "}
            {highlight && <span className={highlightClassName}>{highlight}</span>}
          </>
        )}
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
      <div className="gradient-divider mt-5 h-[3px] w-24 rounded-full" />
    </Reveal>
  );
}

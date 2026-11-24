"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCodeLines, profile } from "@/data/portfolio";

/** Code block that types itself out line by line, then loops. */
function TypingCode() {
  const [typed, setTyped] = useState("");
  const full = heroCodeLines.join("\n");

  useEffect(() => {
    let i = 0;
    let timer;
    const type = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i < full.length) {
        timer = setTimeout(type, full[i - 1] === "\n" ? 220 : 18);
      } else {
        // Pause at the end, then restart the typing loop.
        timer = setTimeout(() => {
          i = 0;
          setTyped("");
          type();
        }, 6000);
      }
    };
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [full]);

  return (
    <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-white/85 sm:text-sm">
      <code className="caret">{typed}</code>
    </pre>
  );
}

/**
 * Hero heading words drop in from above, one after another, on load.
 * Disabled under prefers-reduced-motion (words render statically).
 */
function DropWord({ children, index, reduceMotion, className = "" }) {
  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }
  return (
    <span className="inline-block overflow-hidden pb-1 align-bottom" aria-hidden="true">
      <motion.span
        className={`inline-block will-change-transform ${className}`}
        initial={{ y: "-115%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.1 + index * 0.14, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="dot-grid relative overflow-hidden pb-12 pt-28 sm:pt-32"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Left — intro copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-cyan"
          >
            {"//"} Hello, I&apos;m
          </motion.p>

          <h1
            aria-label="Musfirah Saleem"
            className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl"
          >
            <DropWord index={0} reduceMotion={reduceMotion}>
              Musfirah
            </DropWord>
            <br />
            <DropWord index={1} reduceMotion={reduceMotion} className="gradient-text">
              Saleem
            </DropWord>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-display text-xl font-bold text-white/90 sm:text-2xl"
          >
            MERN Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl leading-relaxed text-white/70"
          >
            I build scalable, production-grade web applications &amp;
            AI-powered products with the{" "}
            <span className="font-bold text-white">MERN stack</span>.
          </motion.p>

          {/* Stack chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["React", "Next.js", "Node.js", "Express", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-pink/40 bg-pink/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-pink"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Availability + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-block rounded-full bg-pink px-6 py-3 font-extrabold text-white shadow-glowPink transition-all hover:-translate-y-0.5 hover:bg-pink-dark"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded-full border border-cyan/60 px-6 py-3 font-extrabold text-cyan transition-all hover:-translate-y-0.5 hover:bg-cyan/10"
            >
              Contact Me
            </a>
            <span className="flex items-center gap-2 text-sm font-bold text-white/80">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </motion.div>
        </div>

        {/* Right — typing code block (Nityanand-style hero).
            Hanging-photo effect: pinned at the top-right corner, tilted
            clearly so the far side droops down, gentle slow sway. */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative"
        >
          <div className="hanging relative">
            {/* Pin at the hanging corner — its centre sits EXACTLY on
                the panel's top-right corner point: half on the panel,
                half off, engaged with the corner (top: -8, right: -8
                on a 16px dot puts its centre at the corner itself) */}
            <span
              aria-hidden="true"
              style={{ top: -8, right: -8 }}
              className="absolute z-20 h-4 w-4 rounded-full border-2 border-white/40 bg-pink shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute -inset-3 rounded-3xl bg-pink/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-pink/70 bg-[#121216] shadow-[0_24px_70px_rgba(237,33,144,0.35),0_10px_40px_rgba(0,0,0,0.8)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-pink" />
                <span className="h-3 w-3 rounded-full bg-cyan" />
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="ml-3 font-mono text-xs text-white/50">developer.js</span>
              </div>
              <div className="min-h-[210px] p-5">
                <TypingCode />
              </div>
              <div className="gradient-divider h-1 w-full" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-panel px-4 py-3 text-body shadow-card sm:-left-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Currently</p>
              <p className="font-display text-sm font-extrabold">
                MERN Developer @ <span className="text-pink">Egora</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

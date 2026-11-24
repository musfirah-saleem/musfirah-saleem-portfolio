"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've" highlight="worked" dropWords />

      {/* Timeline — each card slides in from the left, one after another.
          All text starts from the left side. */}
      <ol className="relative mt-12 space-y-10 border-l-2 border-pink/30 pl-8 text-left">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative text-left">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -64 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="text-left"
            >
              <span
                className={`absolute -left-[43px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  job.current
                    ? "border-pink bg-pink shadow-glowPink"
                    : "border-cyan bg-ink"
                }`}
              >
                {job.current && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-left">
                <h3 className="text-left font-display text-xl font-extrabold text-white">
                  {job.role}
                  {job.current && (
                    <span className="ml-3 rounded-full bg-pink/15 px-3 py-1 align-middle font-mono text-[11px] font-bold uppercase tracking-wide text-pink">
                      Current
                    </span>
                  )}
                </h3>
                <span className="font-mono text-xs font-semibold text-cyan">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-left font-bold text-pink">
                {job.company} <span className="font-semibold text-muted">· {job.location}</span>
              </p>
              <ul className="mt-3 space-y-1.5 text-left">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-left text-sm leading-relaxed text-white/70">
                    <span className="text-pink">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ol>

      {/* Education — white panel, pink top border (BGRM style) */}
      <Reveal delay={0.15}>
        <div className="mt-14 overflow-hidden rounded-2xl border-t-[6px] border-pink bg-panel text-left text-body shadow-card">
          <div className="flex flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Education</p>
              <h3 className="mt-1 font-display text-xl font-extrabold">{education.degree}</h3>
              <p className="mt-1 font-bold text-muted">
                {education.school} · {education.location}
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-pink/10 px-4 py-2 font-mono text-sm font-bold text-pink">
              {education.period}
            </span>
          </div>
          <div className="gradient-divider h-1.5 w-full" />
        </div>
      </Reveal>
    </section>
  );
}

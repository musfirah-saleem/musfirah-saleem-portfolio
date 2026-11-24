"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { skillGroups, skillLevels } from "@/data/portfolio";

/**
 * One skill bar — the colourful line fills from 0 to its level and the
 * percentage number counts up from 1 to the max in sync with the fill,
 * when the Skills section scrolls into view.
 */
function SkillBar({ skill, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setProgress(level);
      return;
    }
    // One shared progress value drives both the fill width and the
    // number, so they stay perfectly in sync.
    const controls = animate(0, level, {
      duration: 1.4,
      delay: index * 0.08,
      ease: "easeOut",
      onUpdate: (v) => setProgress(v),
    });
    return () => controls.stop();
  }, [inView, level, index, reduceMotion]);

  // Count starts at 1% and climbs to the max as the bar fills.
  const shown = Math.max(1, Math.round(progress));

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-white/85">
        <span>{skill}</span>
        <span className="font-mono text-xs font-bold text-pink">{shown}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink via-pink to-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/** Skill level bars — levels live in src/data/portfolio.js (skillLevels). */
function SkillLevelBars() {
  return (
    <Reveal delay={0.1} className="mt-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          {"//"} Skill levels
        </p>
        <div className="mt-5 space-y-4">
          {skillLevels.map((item, i) => (
            <SkillBar key={item.skill} skill={item.skill} level={item.level} index={i} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="My Skills"
        title="A MERN-focused"
        highlight="toolkit"
        sub="With AI integration and payment/webhook expertise on top — the stack I ship production products with every day."
        dropWords
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.1}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
                <span className="text-pink">▸</span> {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-ink px-3.5 py-1.5 text-sm font-bold text-white/85 transition-colors hover:border-pink hover:text-pink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

        {/* Core stack callout */}
        <Reveal delay={0.2}>
          <article className="flex h-full flex-col justify-center rounded-2xl bg-pink p-6 text-white shadow-glowPink">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
              Core Stack
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight">
              MongoDB · Express
              <br />
              React · Node.js
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              The MERN stack, end to end — plus AI/LLM features and payment
              integrations where products need them.
            </p>
          </article>
        </Reveal>
      </div>

      <SkillLevelBars />
    </section>
  );
}

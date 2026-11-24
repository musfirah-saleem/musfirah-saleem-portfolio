"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

/**
 * Flip entrance — each card flips in with a FULL 180° rotateY turn when
 * the Projects section scrolls into view, so the spin is unmistakable.
 * Starts on the back face (hidden), sweeps through edge-on, then lands
 * flat. 1.25s + 0.18s stagger — a middle speed. The grid only triggers
 * once half of it is actually in view, so the flip never finishes
 * before she scrolls to it. Falls back to a plain fade under
 * prefers-reduced-motion.
 */
function flipVariants(reduceMotion) {
  return reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.4 } },
      }
    : {
        hidden: { opacity: 0, rotateY: -180 },
        show: {
          opacity: 1,
          rotateY: 0,
          transition: { duration: 1.25, ease: "easeInOut" },
        },
      };
}

function ProjectCard({ project, variants }) {
  return (
    <motion.article
      variants={variants}
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-[border-color,box-shadow] duration-300 hover:border-pink/50 hover:shadow-glowPink"
    >
      {/* Pink top border (BGRM card style) */}
        <div className="h-1.5 w-full bg-pink transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-cyan" />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-cyan/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-cyan">
              {project.tag}
            </span>
            {project.featured && (
              <span className="rounded-full bg-pink/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-pink">
                Featured
              </span>
            )}
          </div>
          <h3 className="mt-4 font-display text-2xl font-extrabold text-white transition-colors group-hover:text-pink">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
            {project.description}
          </p>
          <div className="mt-6 flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink px-5 py-2 text-sm font-extrabold text-white transition-colors hover:bg-pink-dark"
              >
                View Project ↗
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-5 py-2 text-sm font-extrabold text-white transition-colors hover:border-cyan hover:text-cyan"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const cardVariants = flipVariants(reduceMotion);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Full-stack web &"
        highlight="AI products"
        sub="A curated selection of production work — POS platforms, e-commerce, AI bots and Web3."
      />

      {/* Featured — larger cards */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        style={{ perspective: 1200 }}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} variants={cardVariants} />
        ))}
      </motion.div>

      {/* Remaining projects */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        style={{ perspective: 1200 }}
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} variants={cardVariants} />
        ))}
      </motion.div>
    </section>
  );
}

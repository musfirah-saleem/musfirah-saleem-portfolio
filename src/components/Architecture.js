import Reveal, { SectionHeading, WordDrop } from "@/components/Reveal";
import { architecture } from "@/data/portfolio";

export default function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="How I Architect MERN Apps"
        title="A layered, scalable"
        highlight="approach"
        sub="From React UI down to MongoDB — every layer owned, from responsive interfaces to REST APIs to database design."
        dropWords
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {architecture.map((tier, i) => (
          <Reveal key={tier.tier} delay={i * 0.12}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink/50 hover:shadow-glowPink">
                <div className="gradient-divider h-1 w-full opacity-80" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                      {tier.tier}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink/15 font-display text-lg font-extrabold text-pink transition-transform duration-300 group-hover:scale-110">
                      {tier.icon}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-white">
                    {tier.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                    {tier.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tier.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-semibold text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
          </Reveal>
        ))}
      </div>

      {/* Tier flow — Client → API → Data, words dropping from above */}
      <Reveal delay={0.2}>
        <p className="mt-10 text-center font-mono text-sm text-white/50">
          <WordDrop text="Client →" className="font-bold text-pink" delay={0} />{" "}
          <WordDrop text="API →" className="font-bold text-white" delay={0.3} />{" "}
          <WordDrop text="Data" className="font-bold text-cyan" delay={0.6} />{" "}
          <WordDrop
            text="— one clean request path, end to end."
            className="text-muted"
            delay={0.9}
          />
        </p>
      </Reveal>
    </section>
  );
}

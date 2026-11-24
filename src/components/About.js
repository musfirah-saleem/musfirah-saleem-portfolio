import Reveal, { SectionHeading } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading eyebrow="About Me" title="Who I am &" highlight="what I do" />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Intro paragraph — verbatim CV intro */}
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-white/85">{profile.intro}</p>
          <p className="mt-5 leading-relaxed text-white/65">{profile.about}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:musfi606@gmail.com?subject=Hello%20Musfirah"
              className="rounded-full bg-pink px-6 py-3 font-extrabold text-white transition-colors hover:bg-pink-dark"
            >
              Email Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 font-extrabold text-white transition-colors hover:border-pink hover:text-pink"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 font-extrabold text-white transition-colors hover:border-cyan hover:text-cyan"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        {/* Quick facts card — white panel, pink top border (BGRM style) */}
        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border-t-[6px] border-pink bg-panel text-body shadow-card">
            <div className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Profile</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                  <dt className="font-bold text-muted">Name</dt>
                  <dd className="font-extrabold">{profile.name}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                  <dt className="font-bold text-muted">Role</dt>
                  <dd className="font-extrabold">{profile.role}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                  <dt className="font-bold text-muted">Based in</dt>
                  <dd className="font-extrabold">{profile.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                  <dt className="font-bold text-muted">Experience</dt>
                  <dd className="font-extrabold">4+ years</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-bold text-muted">Focus</dt>
                  <dd className="text-right font-extrabold">POS · E-commerce · AI apps</dd>
                </div>
              </dl>
            </div>
            <div className="gradient-divider h-1.5 w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

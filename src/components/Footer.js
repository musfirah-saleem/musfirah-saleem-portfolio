import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="gradient-divider h-1 w-full" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:text-left">
        <p className="font-display text-lg font-extrabold uppercase text-white">
          <span className="text-pink">M</span>usfirah<span className="text-cyan">.</span>
        </p>
        <p className="text-sm text-white/60">
          © {year} {profile.name} — MERN Stack Developer, {profile.location}
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Her chosen contact email for the portfolio (not the CV email).
  const contactEmail = "musfi606@gmail.com";

  // Sends the message via the /api/contact route (Nodemailer) — the email
  // lands in her inbox; the visitor's email app is never opened.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, description }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send your message — please try again.");
      }
      setSent(true);
      setName("");
      setEmail("");
      setDescription("");
    } catch (err) {
      // Keep the form data so the visitor can retry.
      setError(err.message || "Could not send your message — please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build"
        highlight="something great"
        sub="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        dropWords
        highlightClassName="text-cyan"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Direct contact details */}
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/60"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Email</p>
              <p className="mt-1 break-all font-bold text-white">{contactEmail}</p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/60"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Phone</p>
              <p className="mt-1 font-bold text-white">{profile.phone}</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/60"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">GitHub</p>
              <p className="mt-1 font-bold text-white">github.com/musfirah-saleem ↗</p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/60"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">LinkedIn</p>
              <p className="mt-1 font-bold text-white">linkedin.com/in/musfirah-saleem ↗</p>
            </a>
            <p className="pt-2 text-sm font-bold text-white/70">
              📍 {profile.location} · <span className="text-cyan">{profile.availability}</span>
            </p>
          </div>
        </Reveal>

        {/* Contact form — white panel, cyan top border (blue accent in this section) */}
        <Reveal delay={0.15} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-2xl border-t-[6px] border-cyan bg-panel text-body shadow-card"
          >
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-extrabold">Send a message</h3>
              <p className="mt-1 text-sm font-semibold text-muted">
                Your message goes straight to my inbox.
              </p>
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-bold">
                  Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Jane Doe"
                    className="mt-1.5 block w-full rounded-xl border-[1.5px] border-pink-light bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/25"
                  />
                </label>
                <label className="block text-sm font-bold">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="jane@company.com"
                    className="mt-1.5 block w-full rounded-xl border-[1.5px] border-pink-light bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/25"
                  />
                </label>
                <label className="block text-sm font-bold">
                  Description
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={5}
                    placeholder="Hi Musfirah, I'd like to talk about…"
                    className="mt-1.5 block w-full resize-y rounded-xl border-[1.5px] border-pink-light bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/25"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-pink py-3.5 font-extrabold text-white transition-colors hover:bg-cyan hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message →"}
                </button>
                {sent && (
                  <p className="rounded-xl bg-[#DDF0E4] px-4 py-3 text-sm font-bold text-[#0F6A3C]">
                    Message sent — thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
                {error && (
                  <p className="rounded-xl bg-[#FBE3E3] px-4 py-3 text-sm font-bold text-[#8F1D1D]">
                    {error}
                  </p>
                )}
              </div>
            </div>
            <div className="gradient-divider h-1.5 w-full" />
          </form>
        </Reveal>
      </div>
    </section>
  );
}

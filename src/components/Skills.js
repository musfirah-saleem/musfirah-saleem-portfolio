"use client";

import { useEffect, useRef } from "react";

const frontendSkills = [
  { label: "React.js", value: 95 },
  { label: "Next.js", value: 90 },
  { label: "Redux & State Management", value: 88 },
  { label: "Tailwind CSS / Material UI", value: 92 },
];

const backendSkills = [
  { label: "Node.js & Express", value: 90 },
  { label: "MongoDB & Mongoose", value: 88 },
  { label: "REST APIs & Webhooks", value: 92 },
  { label: "Payments (X-Pay, Stripe) & AI/LLM", value: 85 },
];

function SkillRow({ label, value, cyan }) {
  return (
    <div className="skill-row">
      <div className="skill-top">
        <span>{label}</span>
        <span className="pct" data-to={value}>
          0%
        </span>
      </div>
      <div className={cyan ? "bar cyan" : "bar"}>
        <i data-w={value}></i>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          observer.unobserve(card);

          const bars = card.querySelectorAll(".bar i");
          bars.forEach((bar, idx) => {
            setTimeout(() => {
              bar.style.width = `${bar.dataset.w}%`;
            }, idx * 130);
          });

          const pcts = card.querySelectorAll(".pct");
          pcts.forEach((pct) => {
            const to = parseInt(pct.dataset.to, 10);
            const stepMs = Math.max(10, Math.round(1100 / to));
            let current = 1;
            const timer = setInterval(() => {
              pct.textContent = `${current}%`;
              if (current >= to) {
                clearInterval(timer);
              }
              current += 1;
            }, stepMs);
          });
        });
      },
      { threshold: 0.3 }
    );

    section.querySelectorAll("#skills .card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="sec-head reveal">
        <p className="eyebrow">03 · Skills</p>
        <h2 className="fallwords">
          <span className="fw" style={{ "--d": "0s" }}>
            Skills
          </span>{" "}
          <span className="fw" style={{ "--d": ".45s" }}>
            <em className="cyan">breakdown</em>
          </span>
        </h2>
        <div className="divider"></div>
      </div>
      <div className="skills-grid">
        <div className="card pink-top reveal">
          <h3>Frontend</h3>
          {frontendSkills.map((skill) => (
            <SkillRow key={skill.label} label={skill.label} value={skill.value} />
          ))}
        </div>
        <div className="card cyan-top reveal d1">
          <h3>Backend &amp; More</h3>
          {backendSkills.map((skill) => (
            <SkillRow key={skill.label} label={skill.label} value={skill.value} cyan />
          ))}
        </div>
      </div>
    </section>
  );
}

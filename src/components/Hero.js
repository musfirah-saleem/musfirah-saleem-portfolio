"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "MERN Stack Developer",
  "React & Next.js Specialist",
  "Node.js API Builder",
  "POS & Payments Developer",
  "AI Product Builder",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [shownLines, setShownLines] = useState(0);

  /* Role typewriter: same state machine as the preview script:
     start after 1800ms; type 68ms/char, hold 1600ms at full word,
     delete 38ms/char, then move to the next role. */
  useEffect(() => {
    let role = 0;
    let char = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = ROLES[role];
      if (!deleting) {
        char += 1;
        setTyped(word.slice(0, char));
        if (char === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
        timer = setTimeout(tick, 68);
      } else {
        char -= 1;
        setTyped(word.slice(0, char));
        if (char === 0) {
          deleting = false;
          role = (role + 1) % ROLES.length;
          timer = setTimeout(tick, 68);
          return;
        }
        timer = setTimeout(tick, 38);
      }
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, []);

  /* Terminal lines: one by one, 600ms start, 750ms apart,
     each fading in over .5s. */
  useEffect(() => {
    const timers = [0, 1, 2].map((i) =>
      setTimeout(() => setShownLines(i + 1), 600 + i * 750)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const terminalLines = [
    <div key={0}>→ Musfirah Saleem · MERN Stack Developer</div>,
    <div key={1}>
      → stack loaded: MongoDB · Express · React · Node{" "}
      <span className="ok">✓</span>
    </div>,
    <div key={2}>
      → status: <span className="ok">open to work</span> · remote, worldwide
    </div>,
  ];

  return (
    <div className="hero">
      <p className="eyebrow">Available for remote roles</p>
      <div className="hero-grid">
        <div>
          <h1>
            <span className="wfall" style={{ "--d": ".05s" }}>
              Musfirah
            </span>
            <br />
            <span className="wfall pink" style={{ "--d": ".2s" }}>
              Saleem
            </span>
            <br />
            <span className="wfall" style={{ "--d": ".5s" }}>
              builds
            </span>{" "}
            <span className="wfall" style={{ "--d": ".62s" }}>
              web
            </span>
            <br />
            <span className="wfall" style={{ "--d": ".74s" }}>
              apps
            </span>{" "}
            <span className="wfall" style={{ "--d": ".86s" }}>
              that
            </span>{" "}
            <span className="wfall" style={{ "--d": ".98s" }}>
              ship.
            </span>
          </h1>
          <p className="role-line">
            &gt; <span className="typed">{typed}</span>
            <span className="caret"></span>
          </p>
          <p className="lede">
            MERN Stack Developer with around 3 years of experience building
            scalable platforms like POS systems, e-commerce stores and AI
            powered products, with clean REST APIs, payment integrations and
            interfaces people actually enjoy using.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pink" href="#projects">
              View Projects ↓
            </a>
            <a className="btn btn-ghost" href="mailto:musfi606@gmail.com">
              musfi606@gmail.com
            </a>
          </div>
        </div>
        <div className="hang">
          <span className="pin" aria-hidden="true"></span>
          <div className="codewin reveal in">
            <div className="codewin-head">
              <span className="dot r"></span>
              <span className="dot y"></span>
              <span className="dot g"></span>
              <span>developer.js · portfolio</span>
            </div>
            <pre>
              <code>
                <span className="tok-k">const</span> developer = {"{"}
                {"\n"}
                {"  "}name: <span className="tok-s">'Musfirah Saleem'</span>,
                {"\n"}
                {"  "}role: <span className="tok-s">'MERN Stack Developer'</span>,
                {"\n"}
                {"  "}stack: [<span className="tok-s">'MongoDB'</span>,{" "}
                <span className="tok-s">'Express'</span>,{"\n"}
                {"          "}
                <span className="tok-s">'React'</span>,{" "}
                <span className="tok-s">'Node.js'</span>],{"\n"}
                {"  "}also: [<span className="tok-s">'Next.js'</span>,{" "}
                <span className="tok-s">'Redux'</span>,{"\n"}
                {"         "}
                <span className="tok-s">'Tailwind'</span>,{" "}
                <span className="tok-s">'Docker'</span>],{"\n"}
                {"  "}payments: [<span className="tok-s">'X-Pay'</span>,{" "}
                <span className="tok-s">'Stripe'</span>],{"\n"}
                {"  "}ai: <span className="tok-s">'LLM integrations'</span>,{"\n"}
                {"  "}hireable: <span className="tok-n">true</span>,{"\n"}
                {"}"};{"\n"}
                {"\n"}
                <span className="tok-k">export default</span> developer;
              </code>
            </pre>
          </div>
          <div className="terminal" id="terminal" aria-label="Console intro">
            <div>
              <span className="prompt">musfirah@portfolio:~$</span> whoami
            </div>
            <div>
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    opacity: shownLines > i ? 1 : 0,
                    transition: "opacity .5s ease",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

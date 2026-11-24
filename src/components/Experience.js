export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-head reveal">
        <p className="eyebrow">04 · Experience</p>
        <h2 className="fallwords">
          <span className="fw" style={{ "--d": "0s" }}>
            Where
          </span>{" "}
          <span className="fw" style={{ "--d": ".4s" }}>
            I&apos;ve
          </span>{" "}
          <span className="fw" style={{ "--d": ".8s" }}>
            <em className="cyan">worked</em>
          </span>
        </h2>
        <div className="divider"></div>
      </div>
      <div className="timeline">
        <article className="tl-item reveal from-left">
          <span className="tl-meta">JUN 2024 · PRESENT · LAHORE</span>
          <h3>Egora</h3>
          <h4>MERN Stack Developer</h4>
          <p>
            Building and maintaining Egora&apos;s POS and merchant platform, MERN stack with
            REST APIs, MongoDB/Mongoose data models, a React/Redux point-of-sale interface,
            and the X-Pay payment gateway with webhook handling for live transactions.
          </p>
        </article>
        <article className="tl-item reveal from-left">
          <span className="tl-meta">FEB 2024 · JUN 2024</span>
          <h3>Fiction Developers</h3>
          <h4>Frontend Developer</h4>
          <p>
            Frontend development on client web products, responsive React interfaces,
            component systems and API integration.
          </p>
        </article>
        <article className="tl-item reveal from-left">
          <span className="tl-meta">JUN 2023 · FEB 2024 · ENGLAND (REMOTE)</span>
          <h3>Ahom Limited</h3>
          <h4>Frontend Developer · Blockchain / Web3</h4>
          <p>
            Built Web3 and blockchain-facing frontends for a UK-based company,
            wallet-connected interfaces and decentralised app experiences.
          </p>
        </article>
        <article className="tl-item reveal from-left">
          <span className="tl-meta">MAR 2023 · NOV 2023</span>
          <h3>Briksen Technologies</h3>
          <h4>Web / Frontend Developer</h4>
          <p>
            Where it started, web and frontend development across client sites and
            applications, building the foundation in modern JavaScript and React.
          </p>
        </article>
      </div>
    </section>
  );
}

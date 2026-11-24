const projects = [
  {
    tag: "AI · CRM · WhatsApp",
    title: "Chatroot",
    desc: "WhatsApp AI bot & CRM platform by DevEarth Solutions. The bot chats with customers in Urdu, English and Roman Urdu, backed by a full CRM with secure APIs and automated monthly-plan launches.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "OpenAI", "Baileys"],
    url: "https://devearthsolutions.com/chatroot",
    flip: "",
  },
  {
    tag: "POS · Payments",
    title: "Egora POS",
    desc: "Point-of-sale system used by merchants at Egora, fast checkout flows in React/Redux, live inventory, and X-Pay payment processing with webhook-confirmed transactions.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "X-Pay"],
    url: "https://venue.egora.pk",
    flip: "d1",
  },
  {
    tag: "Dashboard · Merchants",
    title: "Egora Merchants",
    desc: "The merchant side of Egora, dashboards for sales, products and payments, giving shop owners a clear view of their business in real time.",
    stack: ["React", "Express", "Mongoose", "REST APIs"],
    url: "https://merchants.egora.pk",
    flip: "d2",
  },
  {
    tag: "E-commerce",
    title: "Fusion Store",
    desc: "A full e-commerce storefront, product catalogue, cart and checkout built on the MERN stack with a clean, conversion-focused shopping experience.",
    stack: ["MERN", "React", "Node.js", "MongoDB"],
    url: "https://fusionstorebyms.netlify.app/",
    flip: "",
  },
  {
    tag: "AI Product",
    title: "Pluto-AI",
    desc: "An AI-powered web application exploring LLM integrations inside a modern React interface, prompt flows, streamed responses and a polished chat experience.",
    stack: ["React", "LLM APIs", "Node.js"],
    url: "https://call-center-01.netlify.app/",
    flip: "d1",
  },
  {
    tag: "Web3 · Frontend",
    title: "Planet Bickram",
    desc: "A Web3 project frontend from my time building blockchain interfaces, wallet connection, on-chain data display and a playful, immersive UI.",
    stack: ["React", "Web3", "JavaScript"],
    url: "https://planet-final-01.netlify.app/",
    flip: "d2",
  },
  {
    tag: "Blockchain · Web3",
    title: "Block Factory",
    desc: "Website for a blockchain development company, presenting its cryptocurrency and Web 3.0 services, from smart contracts and cryptotokens to ICO launches, with team and project showcases.",
    stack: ["React", "JavaScript", "Web3"],
    url: "https://block-factory.netlify.app",
    flip: "",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-head reveal">
        <p className="eyebrow">05 · Featured Work</p>
        <h2>
          Projects that <em className="cyan">shipped</em>
        </h2>
        <p>Real products · point-of-sale, commerce, AI and Web3 · not tutorial clones.</p>
        <div className="divider"></div>
      </div>
      <div className="proj-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={project.flip ? `proj flip ${project.flip}` : "proj flip"}
          >
            <div className="proj-body">
              <span className="p-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a className="plink" href={project.url} target="_blank" rel="noopener">
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

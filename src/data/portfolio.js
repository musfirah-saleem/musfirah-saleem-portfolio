// ─────────────────────────────────────────────────────────────
// ALL portfolio content lives in this one file.
// Edit the values below and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Musfirah Saleem",
  role: "MERN Stack Developer",
  location: "Lahore, Pakistan",
  email: "musfirahsaleem606@gmail.com",
  phone: "+92 311 7855606",
  github: "https://github.com/musfirah-saleem",
  linkedin: "https://www.linkedin.com/in/musfirah-saleem-768064280/",
  availability: "Available for remote work",
  // Intro: verbatim from her CV
  intro:
    "I'm a MERN Stack Developer with around 4+ years of experience building full-stack web applications with React and Next.js frontends, Node.js/Express REST APIs, MongoDB/Mongoose data modelling, payment gateway and webhook integrations (X-Pay, Stripe), and AI/LLM-powered features across e-commerce, POS/reservation and AI applications.",
  about:
    "I'm a MERN Stack Developer based in Lahore, Pakistan. At Egora I build MERN apps and a React/Redux POS platform, REST APIs, MongoDB/Mongoose data modelling, and payment gateway + webhook integrations. Before that I shipped frontend work at Fiction Developers, built Blockchain/Web3 interfaces at Ahom Limited in England, and worked on web projects at Briksen Technologies. I care about clean architecture, production-ready code, and products that actually solve real problems.",
};

// Hero code block: typed out character by character
export const heroCodeLines = [
  "const developer = {",
  '  name: "Musfirah Saleem",',
  '  role: "MERN Stack Developer",',
  '  stack: ["React", "Next.js", "Node.js", "MongoDB"],',
  '  focus: ["POS", "E-commerce", "AI-powered apps"],',
  "  hireable: true,",
  "};",
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Egora",
    location: "Lahore, Pakistan",
    period: "Jun 2024 – Present",
    current: true,
    points: [
      "Building MERN apps and a React/Redux POS platform",
      "REST APIs with Node.js/Express and MongoDB/Mongoose",
      "X-Pay payment gateway + webhook integrations",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Fiction Developers",
    location: "Pakistan",
    period: "Feb 2024 – Jun 2024",
    current: false,
    points: ["Frontend development with React"],
  },
  {
    role: "Frontend Developer (Blockchain/Web3)",
    company: "Ahom Limited",
    location: "England",
    period: "Jun 2023 – Feb 2024",
    current: false,
    points: ["Blockchain/Web3 frontend interfaces"],
  },
  {
    role: "Web/Frontend Developer",
    company: "Briksen Technologies",
    location: "Pakistan",
    period: "Mar 2023 – Nov 2023",
    current: false,
    points: ["Web and frontend development"],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of Education",
  location: "Vehari, Pakistan",
  period: "2019 – 2023",
};

// MERN architecture: Client / API / Data tiers
export const architecture = [
  {
    tier: "Client Tier",
    icon: "◈",
    title: "React + Next.js",
    description:
      "Reusable React components & pages. Redux state management, Tailwind CSS and Material-UI for responsive, production-grade interfaces.",
    tags: ["React", "Next.js", "Redux", "Tailwind CSS", "Material-UI"],
  },
  {
    tier: "API Tier",
    icon: "⬡",
    title: "Node.js + Express",
    description:
      "REST APIs with Express, structured routes and controllers, JWT auth, validation and error-handling middleware, plus payment gateway and webhook endpoints.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "X-Pay", "Stripe"],
  },
  {
    tier: "Data Tier",
    icon: "⬢",
    title: "MongoDB + Mongoose",
    description:
      "MongoDB with Mongoose schemas as the primary store, indexes and aggregation pipelines tuned for performance. Relational stores where the model fits better.",
    tags: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Supabase"],
  },
];

// Skill levels shown as animated bars with a count-up percentage.
// DEFAULT values: adjust the numbers here to change what the site shows.
export const skillLevels = [
  { skill: "React", level: 90 },
  { skill: "Next.js", level: 85 },
  { skill: "Node.js", level: 88 },
  { skill: "Express.js", level: 85 },
  { skill: "MongoDB", level: 90 },
  { skill: "Mongoose", level: 85 },
  { skill: "Redux", level: 82 },
  { skill: "Tailwind CSS", level: 90 },
  { skill: "Docker", level: 78 },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Material-UI"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Payment gateway + webhook integrations (X-Pay, Stripe)",
      "AI/LLM integrations",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kafka", "Nginx", "Git", "CI/CD", "Swagger"],
  },
  {
    title: "Languages",
    skills: ["English", "Urdu", "Punjabi"],
  },
];

// Projects: only verified facts: name, link and the short description
// given on the CV. No dates or roles invented.
export const projects = [
  {
    name: "Chatroot",
    tag: "AI · Full Stack",
    description:
      "WhatsApp AI Bot & CRM Platform · DevEarth Solutions. A WhatsApp bot with OpenAI plus a CRM platform.",
    live: "https://devearthsolutions.com/chatroot",
    code: null,
    featured: true,
  },
  {
    name: "Egora POS",
    tag: "Full Stack · POS",
    description:
      "Point-of-sale platform built with React/Redux, REST APIs and MongoDB, part of the Egora product suite.",
    live: "https://venue.egora.pk",
    code: null,
    featured: true,
  },
  {
    name: "Egora Merchants",
    tag: "Full Stack · POS",
    description:
      "Merchant portal for the Egora POS platform, onboarding and managing merchant businesses.",
    live: "https://merchants.egora.pk",
    code: null,
    featured: true,
  },
  {
    name: "Pluto-AI Call Center",
    tag: "AI · Full Stack",
    description: "AI-powered call center application.",
    live: "https://call-center-01.netlify.app",
    code: null,
    featured: false,
  },
  {
    name: "Planet Bickram",
    tag: "Web App",
    description: "Web application · live project.",
    live: "https://planet-final-01.netlify.app",
    code: null,
    featured: false,
  },
  {
    name: "Block Factory",
    tag: "Web3 · Frontend",
    description: "Web3 project · live project.",
    live: "https://block-factory.netlify.app",
    code: null,
    featured: false,
  },
  {
    name: "Fusion Store",
    tag: "E-commerce · Full Stack",
    description: "E-commerce store · full-stack online store.",
    live: "https://fusionstorebyms.netlify.app",
    code: null,
    featured: false,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

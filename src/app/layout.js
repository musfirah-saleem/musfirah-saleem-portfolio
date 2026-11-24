import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://musfirah-saleem.vercel.app"),
  title: "Musfirah Saleem | MERN Stack Developer",
  description:
    "MERN Stack Developer with around 4+ years of experience building full-stack web applications with React and Next.js frontends, Node.js/Express REST APIs, MongoDB/Mongoose data modelling, payment gateway and webhook integrations (X-Pay, Stripe), and AI/LLM-powered features across e-commerce, POS/reservation and AI applications.",
  keywords: [
    "Musfirah Saleem",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Full Stack Developer Lahore",
    "POS Developer",
    "X-Pay",
    "Stripe",
    "AI LLM integrations",
  ],
  authors: [{ name: "Musfirah Saleem" }],
  creator: "Musfirah Saleem",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musfirah-saleem.vercel.app",
    siteName: "Musfirah Saleem — MERN Stack Developer",
    title: "Musfirah Saleem | MERN Stack Developer",
    description:
      "MERN Stack Developer building scalable full-stack web apps, POS platforms and AI-powered products with React, Next.js, Node.js and MongoDB.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musfirah Saleem | MERN Stack Developer",
    description:
      "MERN Stack Developer building scalable full-stack web apps, POS platforms and AI-powered products with React, Next.js, Node.js and MongoDB.",
  },
};

// JSON-LD Person schema for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Musfirah Saleem",
  jobTitle: "MERN Stack Developer",
  url: "https://musfirah-saleem.vercel.app",
  email: "musfirahsaleem606@gmail.com",
  telephone: "+92 311 7855606",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/musfirah-saleem",
    "https://www.linkedin.com/in/musfirah-saleem-768064280/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Redux",
    "Tailwind CSS",
    "REST APIs",
    "Payment gateway integrations",
    "AI/LLM integrations",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Education, Vehari",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* BGRM theme fonts: Baloo 2 (headings), Nunito (body), IBM Plex Mono (code/eyebrow) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@500;600&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="page-glow font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

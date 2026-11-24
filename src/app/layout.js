import "./globals.css";
import RevealInit from "@/components/RevealInit";

export const metadata = {
  metadataBase: new URL("https://musfirah-saleem.vercel.app"),
  title: "Musfirah Saleem | MERN Stack Developer",
  description:
    "Musfirah Saleem | MERN Stack Developer based in Pakistan. Building POS, e-commerce and AI-powered web apps with React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Musfirah Saleem",
    "MERN Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Musfirah Saleem" }],
  creator: "Musfirah Saleem",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musfirah-saleem.vercel.app",
    siteName: "Musfirah Saleem | MERN Stack Developer",
    title: "Musfirah Saleem | MERN Stack Developer",
    description:
      "Building POS, e-commerce & AI-powered apps with the MERN stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musfirah Saleem | MERN Stack Developer",
    description:
      "Building POS, e-commerce & AI-powered apps with the MERN stack.",
  },
};

// JSON-LD Person schema for search engines (email left as-is per brief)
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
        {/* BGRM theme fonts: Baloo 2 (headings), Nunito (body), IBM Plex Mono (code/eyebrow) · same set as the preview */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Marks the document as JS-enabled before first paint. The
            reveal/fallwords/flip hidden start states only apply under
            html.js, so content is visible by default without JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <RevealInit />
        {children}
      </body>
    </html>
  );
}

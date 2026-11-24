# Musfirah Saleem — MERN Stack Developer Portfolio

A modern, animated, SEO-friendly portfolio built with **Next.js 14 (App Router)**,
**Tailwind CSS**, **Framer Motion** and **Lenis** smooth scrolling.

**Design:** a mix of [Nityanand Payasi](https://nityanand-web-portfolio.netlify.app/)
(code-style hero, MERN architecture tiers, featured projects),
[Jenish Gondaliya](https://jenishgondaliya.vercel.app/) (console-style intro,
skills breakdown) and [Karanjot Singh](https://karanjot.vercel.app/) (Framer Motion
animations, full SEO) — with the colour theme of
[BGRM Supply Stock](https://stock.bgrmsupply.com): near-black `#0A0A0C` with a hot-pink
glow top-right and cyan glow bottom-left, primary accent hot pink `#ED2190`,
secondary accent cyan `#67C9D6`. Fonts: Baloo 2 (headings), Nunito (body),
IBM Plex Mono (eyebrow / code).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel (free)

1. Push this folder to a GitHub repo (e.g. `musfirah-saleem/Portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the repo.
3. Framework preset: **Next.js** (auto-detected). Add the four contact-form
   environment variables from the "Contact form email" section below
   (Project Settings → Environment Variables) — without them the contact
   form cannot send.
4. Click **Deploy**. Every future `git push` redeploys automatically.

> The site URL in `src/app/layout.js` (`metadataBase` / Open Graph / JSON-LD) is
> `https://musfirah-saleem.vercel.app` — update it if Vercel gives the project a
> different domain, or once a custom domain is connected.

## Contact form email

The contact form sends real emails with **Nodemailer** (`nodemailer` is in
`package.json`). The form POSTs to `/api/contact`
(`src/app/api/contact/route.js`), which validates Name / Email / Description
and emails them to **musfi606@gmail.com** with the subject
"Portfolio inquiry from [Name]".

Set these four environment variables (locally in `.env.local`, on Vercel in
Project Settings → Environment Variables). A template is in `.env.example`:

| Variable    | Example value                |
| ----------- | ---------------------------- |
| `SMTP_HOST` | `smtp.gmail.com`             |
| `SMTP_PORT` | `587`                        |
| `SMTP_USER` | `musfi606@gmail.com`         |
| `SMTP_PASS` | a Gmail App Password         |

`SMTP_PASS` is **not** the Gmail account password — it is a Gmail App
Password: Google Account → Security → 2-Step Verification (on) → App
passwords → generate one for "Mail" and paste it here. Never commit a real
password; `.env.local` is git-ignored.

> Without these variables set, the form shows a clear error ("Email is not
> configured on this site yet") instead of pretending the message was sent.

## Edit content

All text lives in **one file**: `src/data/portfolio.js` — profile, intro,
experience, education, architecture tiers, skills and projects. Edit the values
there and the whole site updates. No other file needs touching for content
changes.

> Skill percentages: the animated skill bars read their numbers from the
> `skillLevels` list in `src/data/portfolio.js` — adjust the numbers there
> (defaults: React 90, Next.js 85, Node.js 88, Express.js 85, MongoDB 90,
> Mongoose 85, Redux 82, Tailwind CSS 90, Docker 78).

## Tech

- Next.js 14 App Router, React 18
- Tailwind CSS 3 (theme tokens in `tailwind.config.js`)
- Framer Motion — scroll reveals, hover lifts, animated counters
- Lenis — smooth scrolling
- SEO — meta + Open Graph + Twitter cards + JSON-LD Person schema + sitemap-ready
  metadata in `src/app/layout.js`

## Sections

Hero (typing code block + animated stats) → About → MERN Architecture
(Client / API / Data tiers) → Skills → Experience timeline + Education →
Projects (7, with live links) → Contact (Nodemailer form — sends to musfi606@gmail.com) → Footer

# BharatBridge – Karo Pitch Demo

A single-page marketing site for **Karo Pitch**, the startup pitching program run by KaroStartup. The landing page explains the platform, how it works, who can apply, and who’s behind it. It’s built to feel credible and founder-friendly, with a clear path from “what is this?” to “apply” or “partner with us.”

---

## Purpose

Karo Pitch connects early-stage founders with investors and mentors, with a focus on founders in tier 2 and tier 3 cities. The site has to do three things: (1) explain the program in plain language, (2) show that real investors and startups are involved, and (3) give two actions—apply to pitch, or get in touch to partner. The copy avoids hype and keeps a straightforward, investor-friendly tone.

---

## Design decisions

- **Layout:** Single scroll with distinct sections (Hero, About Karo Pitch, How It Works, Who Can Apply, Investors, Featured Startups, About KaroStartup, CTA). Each section uses a consistent max-width container and spacing so the page doesn’t feel cramped or scattered.
- **Colour:** Primary blue (`#0B3A6B`) for trust and hierarchy; saffron accent (`#F4A261`) for main CTAs. Background is a light neutral so the content stays easy to read.
- **Typography:** Inter throughout, with a clear hierarchy (one H1, H2s per section, body and muted text). Font loading uses `display: swap` to avoid invisible text.
- **Components:** Reusable building blocks (Container, SectionTitle, Button, Card, Navbar) keep the UI consistent and make it simple to add or reorder sections later.
- **Accessibility:** Skip link to main content, focus-visible styles on interactive elements, semantic HTML (main, sections, nav, footer), smooth scroll with a fallback for `prefers-reduced-motion`. Decorative icons are hidden from assistive tech.
- **Performance:** No heavy images or scripts; Next.js and `next/font` handle routing and font loading. The goal is a fast first load and a solid Lighthouse score without extra tooling.

---

## Technology stack

- **Next.js 14** (App Router) – routing, layout, and static generation
- **TypeScript** – types across components and sections
- **Tailwind CSS** – styling and design tokens (including custom colours and type scale)
- **Shadcn UI** – base component patterns and theming (e.g. Button primitive, `cn` utility); custom Button and Card sit on top for brand styling
- **Lucide React** – section and UI icons

Everything in the stack is free to use and current; there are no paid APIs or deprecated core dependencies.

---

## Responsible use of AI tools

This project was built with help from AI-assisted coding (Cursor). AI was used to:

- Generate and refactor React/Next.js components and Tailwind class lists
- Propose section structure, copy, and accessibility tweaks (e.g. skip link, ARIA, focus styles)
- Suggest a README and docs

Decisions on purpose, audience, tone, design tokens, and final content stayed human-led. AI output was treated as a draft: structure and copy were edited for clarity and accuracy, and the stack and feature set were chosen to match the actual goal (a focused landing page, not a full product). No AI-generated content was published without review.

---

## Install

You need **Node.js 18+** and npm.

```bash
git clone <repository-url>
cd bharatbridge-karopitch-demo
npm install
```

---

## Run

**Development** (with hot reload):

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

**Production build** (local):

```bash
npm run build
npm start
```

**Lint:**

```bash
npm run lint
```

---

## Deploy

The app is a standard Next.js static/SSR build. You can deploy it anywhere that supports Node or static export.

**Vercel (recommended):**

1. Push the repo to GitHub (or connect another Git provider).
2. In [Vercel](https://vercel.com), create a new project and import the repo.
3. Leave the default build command (`npm run build`) and output (Next.js).
4. Deploy. Vercel will set the root directory if needed and assign a URL.

**Other platforms (e.g. Netlify, Railway, or a VPS):**

- Use `npm run build` and then `npm start`, or follow the host’s Next.js guide.
- Set the Node version to 18+ if the platform lets you.
- For static-only hosting, you can add `output: 'export'` in `next.config.js` and deploy the generated `out` folder; note that some Next.js features (e.g. server routes) won’t apply.

---

## Project structure

| Directory    | Purpose |
|-------------|---------|
| `app/`      | App Router: root layout, global CSS, homepage. |
| `components/` | Shared UI: Navbar, Footer, Container, SectionTitle, Button, Card, and `ui/` (Shadcn primitives). |
| `sections/` | Landing sections: Hero, AboutKaroPitch, HowItWorks, WhoCanApply, Investors, FeaturedStartups, AboutKaroStartup, CTA. |
| `lib/`      | Utilities (e.g. `cn` for class names). |
| `public/`   | Static assets. |
| `styles/`   | Reserved for extra CSS if needed. |

---

## License

Private. All rights reserved.

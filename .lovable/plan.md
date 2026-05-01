# Brenda Angarolla — Portfolio Site

A calm, editorial single-page portfolio that balances structured (logistics/tech) and fluid (wellness) energy. Minimalist, warm, and clearly designed with care.

## Design System

**Palette** (calm, grounded, wellness-tech)

- Primary `#4E2511` (deep warm brown — headlines, accents)
- Secondary `#2C666E` (muted teal — links, highlights)
- Accent `#07393C` (deep teal — buttons, hover states)
- Background `#F0EDEE` (warm off-white)
- Text `#2A2A2A` (soft dark gray, never pure black)

**Typography**

- Headings: MuseoModerno (Google Fonts) — large, confident, editorial
- Body: Open Sans — comfortable line-height, generous letter spacing

**Motion**

- Fade-in + slide-up on section enter (Intersection Observer, ~400ms ease-out, staggered)
- Soft hover: subtle scale (1.02), color/opacity shifts ~200ms
- Smooth scroll between sections via anchor IDs
- All animations respect `prefers-reduced-motion`

## Page Structure (single page, anchor sections)

Top sticky nav (translucent, blurs on scroll) with buttons:
**About · Work · Skills · Experience · Contact** + a small "Resume" download button.

### 1. Hero (`#home`)

- Two-column on desktop, stacked on mobile
- Left: name "Brenda Angarolla" (large MuseoModerno), title "UX/UI Designer — Bridging Systems & Human Experience", tagline "Designing digital experiences with an international mindset", primary CTA "View My Work" (scrolls to `#work`), secondary "Download Resume"
- Right: minimal portrait in a soft rounded shape with a subtle teal/brown gradient halo behind it (placeholder image — easy to replace)

### 2. About (`#about`)

- Two-column editorial layout: short heading on the left ("About"), narrative paragraph on the right (the full text provided)
- Three small "pillar" chips below: _Systems thinking · User empathy · Calm clarity_ — visually tying logistics, customer service, and yoga

### 3. Featured Work (`#work`)

- Section intro line + grid of 4 case study cards (2 cols desktop, 1 col mobile)
- Each card shows: project title, one-line context, role tag, "Read more" affordance
- **Expandable behavior**: clicking a card smoothly expands it in place (height animation) to reveal Process highlights, Tools (as tags), and Outcome. Click again to collapse. Only one open at a time for focus. Keyboard accessible (Enter/Space, aria-expanded).
- Projects: Serco, My Solar Home, Rebeca, EcoShop Website (all content from brief)
- Subtle hover: border color shifts to secondary teal, slight lift

### 4. Skills & Tools (`#skills`)

- Four card columns: **UX**, **UI**, **Tools**, **Transferable Skills**
- Items rendered as soft tag pills (background tint, no harsh borders)
- Transferable skills get short context lines (e.g., "Systems thinking — from logistics")

### 5. Experience (`#experience`)

- Vertical timeline with a soft vertical line in secondary color
- Three entries:
  1. UX/UI Designer & Co-founder — Digital Products Agency (current)
  2. Logistics & Customer Service — Dell Technologies (Remote) and Mediterranean Shipping Company (Buenos Aires)
  3. Yoga Teacher — group classes, in person & online
- Each: role, place, dates (placeholder if unspecified), 2–3 line narrative emphasizing the highlighted qualities

### 6. Contact (`#contact`)

- Centered, generous whitespace
- Headline "Let's create something thoughtful together"
- Message: "Feel free to contact me to bring your idea into life."
- Email link (mailto), LinkedIn link (new tab)
- Primary CTA "Let's Work Together" → mailto

### Footer

- Simple line: "© 2026 Brenda Angarolla · Designed with care" + social icons

## Technical Details

- Single route: `src/routes/index.tsx` rendering composed section components in `src/components/portfolio/` (Hero, About, Work, CaseStudyCard, Skills, Experience, Contact, Nav, Footer)
- Tailwind tokens added to `src/styles.css` for the custom palette (oklch values), plus `font-heading` / `font-body` utilities; Google Fonts loaded via `<link>` in `__root.tsx` head
- Scroll-into-view animations via a small `useInView` hook (Intersection Observer) toggling a class — no animation library needed
- Smooth scroll handled by CSS `scroll-behavior: smooth` + `scroll-margin-top` on sections to clear the sticky nav
- Mobile nav: hamburger → slide-down panel with the same anchor links
- Resume PDF: a placeholder `BrendaAngarollaResume.pdf` placed in `public/` so the download button works immediately; user can swap the file later
- Portrait: placeholder image in `public/` (easy to replace) — abstract gradient shape behind it doubles as decoration if no photo yet
- Fully responsive, mobile-first; tested layout at 375 / 768 / 1280
- Accessibility: semantic landmarks, focus rings in accent color, aria labels on nav and expandable cards, reduced-motion fallback

## Out of Scope (for now)

- Dark mode toggle
- Dedicated case study routes
- CMS / contact form backend (mailto only)

Ready to build when you approve.

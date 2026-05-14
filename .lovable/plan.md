## Goal

Let each case study show a **cover mockup** when collapsed and a **horizontal carousel of mockups** inside the expanded panel.

## Asset workflow

1. Upload your mockups in chat, grouped by project (Serco, My Solar Home, Rebeca, EcoShop). PNG or JPG, ideally landscape (~1600×1000) or device-framed.
2. Name them clearly (e.g. `serco-cover.jpg`, `serco-01.jpg`, `serco-02.jpg`).
3. I'll save them to `src/assets/work/` and import them per project.

If a project has no mockup yet, its card stays text-only — no broken placeholders.

## Design changes to `Work.tsx`

**Collapsed card**
- Add a 16:10 cover image at the top of the card with rounded top corners.
- Subtle zoom-on-hover (`scale-[1.02]`, 500ms ease) and a soft overlay tint in the secondary color for the "wellness-tech" feel.
- Text block (role, title, context) sits below the image; expand button stays top-right.

**Expanded panel**
- New "Mockups" section above Process.
- Horizontal carousel using the existing `src/components/ui/carousel.tsx` (Embla):
  - Each slide ~80% width on mobile, ~60% on desktop, so the next image peeks in.
  - Rounded corners, soft shadow, `aspect-[16/10]`.
  - Prev/Next arrows styled with the accent color; arrows hidden on touch (swipe only).
  - Click a slide to open a lightweight lightbox (Dialog) showing the full image.

**Data model**
Extend `Project` with:
```ts
cover?: string;       // imported image
mockups?: string[];   // imported images for the carousel
```
Cover and gallery render only when present.

## Animation & polish
- Reuse `useReveal` so cover images fade/slide in on scroll.
- Keep transitions calm (300–500ms, ease-out) — no bouncy motion.
- Respect `prefers-reduced-motion` by disabling the hover zoom.

## Files touched
- `src/components/portfolio/Work.tsx` — cover, carousel, lightbox, updated data shape.
- `src/assets/work/` — new folder for uploaded images (created when you send them).
- `src/styles.css` — only if a new utility is needed (likely not).

## Next step
Upload the mockups whenever you're ready and tell me which images belong to which project. I'll wire them in.

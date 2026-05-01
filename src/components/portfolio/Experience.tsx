import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    role: "UX/UI Designer & Co-founder",
    place: "Digital Products Agency",
    period: "Current",
    body:
      "Co-created a digital products agency with a developer partner, delivering end-to-end product design for independent clients across e-commerce, SaaS platforms, and marketing landing pages — from discovery to final implementation. Leveraged AI-powered tools to accelerate ideation, content structuring, and rapid prototyping.",
    tags: ["Discovery", "Product design", "AI prototyping"],
  },
  {
    role: "Customer Service & Logistics",
    place: "Dell Technologies (Remote) · Mediterranean Shipping Company (Buenos Aires)",
    period: "Earlier career",
    body:
      "Years of cross-team coordination and direct client interaction in fast-paced multinational environments. Sharpened problem-solving, communication, and a deep instinct for what users actually need under pressure.",
    tags: ["Problem-solving", "Coordination", "Client interaction"],
  },
  {
    role: "Yoga Teacher",
    place: "In person & online",
    period: "Ongoing",
    body:
      "Guided group classes through hour-long practices of movement and breath work — building empathy, presence, and the ability to hold space for very different people in the same room.",
    tags: ["Empathy", "Guidance", "Human-centered awareness"],
  },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-24 lg:py-32 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
            Experience
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl text-primary leading-tight">
            A career that connects the dots.
          </h2>
        </div>

        <ol className="relative border-l border-secondary/40 ml-3 space-y-10">
          {items.map((it) => (
            <li key={it.role} className="pl-8 relative">
              <span
                aria-hidden
                className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
              />
              <p className="font-body text-xs uppercase tracking-[0.18em] text-secondary">
                {it.period}
              </p>
              <h3 className="font-heading text-xl lg:text-2xl text-primary mt-1">
                {it.role}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{it.place}</p>
              <p className="mt-3 text-base text-foreground/85 leading-relaxed max-w-2xl">
                {it.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
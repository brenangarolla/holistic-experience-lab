import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    title: "UX",
    items: [
      "User Research",
      "User Interviews",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "UI",
    items: ["Visual Design", "Design Systems", "Interaction Design"],
  },
  {
    title: "Tools",
    items: ["Figma", "FigJam", "Notion", "Trello", "Linear", "Framer"],
  },
];

const transferable = [
  { label: "Systems thinking", note: "from logistics" },
  { label: "Stakeholder communication", note: "across cultures" },
  { label: "Customer-centric mindset", note: "from service roles" },
  { label: "Emotional intelligence", note: "from yoga & teaching" },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
            Skills & Tools
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl text-primary leading-tight">
            A hybrid toolkit, applied with care.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-secondary/50"
            >
              <p className="font-heading text-lg text-primary mb-4">{g.title}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex rounded-full bg-muted px-3 py-1 text-xs text-foreground/85"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-secondary/50">
            <p className="font-heading text-lg text-primary mb-4">Transferable</p>
            <ul className="space-y-2.5">
              {transferable.map((t) => (
                <li key={t.label} className="text-sm">
                  <span className="text-foreground/90">{t.label}</span>
                  <span className="text-muted-foreground"> — {t.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
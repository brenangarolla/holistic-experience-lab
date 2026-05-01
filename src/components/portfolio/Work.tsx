import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type Project = {
  id: string;
  title: string;
  context: string;
  role: string;
  process: string[];
  tools: string[];
  outcome: string;
};

const projects: Project[] = [
  {
    id: "serco",
    title: "Serco",
    context: "Services marketplace",
    role: "UX Research and UX/UI Design",
    process: [
      "Conducted user research and competitor analysis to inform design decisions and identify opportunities for improving conversion and usability.",
      "Designed user-centered interfaces including wireframes, high-fidelity UI, and interactive prototypes using Figma.",
    ],
    tools: ["Figma", "Google Forms", "Trello"],
    outcome:
      "Developed scalable design systems and reusable components, ensuring consistency and efficient handoff to developers.",
  },
  {
    id: "my-solar-home",
    title: "My Solar Home",
    context: "AI-powered solution for users of home solar panel systems.",
    role: "Conceptual design under tight time constraints",
    process: [
      "Used a specially trained ChatGPT agent fed with the full problem context to generate a list of discovery questions and working assumptions.",
      "Worked from those assumptions to draft a conceptual design and validate the UX direction before committing to fidelity.",
      "Used vibe coding to ship a functional initial version in minutes — not a final deliverable, but enough to test the idea early.",
    ],
    tools: ["ChatGPT (specialized agent)", "Lovable", "Google Slides"],
    outcome:
      "Used AI prototyping tools to quickly validate UX thinking and bring the concept to life for early-stage testing.",
  },
  {
    id: "rebeca",
    title: "Rebeca",
    context: "Local business growing its online presence.",
    role: "UX/UI Design",
    process: [
      "Designed a simple landing page where visitors can quickly understand Rebeca&apos;s offers and reach out — professional, but never overwhelming.",
    ],
    tools: ["Figma", "Framer"],
    outcome:
      "Rebeca expanded its customer reach through a reliable, professional website.",
  },
  {
    id: "ecoshop",
    title: "EcoShop Website",
    context: "Web version of an e-commerce app focused on sustainable products.",
    role: "Translating a mobile design into a website",
    process: [
      "Maintained the brand essence while adapting flows for diverse users and locations.",
      "Identified the main pain points of the mobile experience and resolved them in the web layout.",
    ],
    tools: ["Figma"],
    outcome:
      "Streamlined the purchase process and reinforced ecological awareness through informative on-page messages.",
  },
];

function Card({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`group rounded-3xl border bg-card transition-all duration-300 ${
        isOpen
          ? "border-secondary/60 shadow-[0_30px_60px_-40px_rgba(44,102,110,0.45)]"
          : "border-border hover:border-secondary/40 hover:-translate-y-0.5"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${project.id}-panel`}
        className="w-full text-left p-7 lg:p-8 flex items-start justify-between gap-6"
      >
        <div className="flex-1">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-secondary mb-3">
            {project.role}
          </p>
          <h3 className="font-heading text-2xl lg:text-3xl text-primary leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm lg:text-base text-muted-foreground">
            {project.context}
          </p>
        </div>
        <span
          aria-hidden
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-accent text-accent-foreground border-accent"
              : "border-border text-foreground/70 group-hover:border-secondary/60 group-hover:text-secondary"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <div
        id={`${project.id}-panel`}
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 lg:px-8 pb-8 pt-1 space-y-5 border-t border-border/60">
            <div>
              <p className="font-heading text-sm text-primary mb-2">Process</p>
              <ul className="space-y-2 text-sm lg:text-base text-foreground/85 leading-relaxed">
                {project.process.map((p, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-heading text-sm text-primary mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-heading text-sm text-primary mb-2">Outcome</p>
              <p className="text-sm lg:text-base text-foreground/85 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="py-24 lg:py-32 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
            Featured Work
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl text-primary leading-tight">
            Selected projects, told with intention.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground">
            Tap any card to expand the case study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card
              key={p.id}
              project={p}
              isOpen={openId === p.id}
              onToggle={() => setOpenId((id) => (id === p.id ? null : p.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
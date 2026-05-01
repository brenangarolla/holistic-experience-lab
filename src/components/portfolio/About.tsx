import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { title: "Systems thinking", from: "from logistics" },
  { title: "User empathy", from: "from customer service" },
  { title: "Calm clarity", from: "from yoga practice" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 lg:py-32">
      <div
        ref={ref}
        className="reveal mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-20"
      >
        <div className="lg:col-span-5 lg:pr-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">About</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-primary leading-tight">
            A
            <br />
            multidisciplinary
            <br />
            path to design.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-foreground/85 leading-relaxed">
          <p>
            I&apos;m a UX/UI Designer with a background in International Trade and extensive
            experience in multinational environments. My career has focused on enhancing customer
            experiences, problem-solving, and process optimization — skills that now fuel my
            user-centered approach to digital design.
          </p>
          <p>
            Passionate about creating intuitive and accessible interfaces that resonate across
            cultures, I combine my experience in international business with design training to
            deliver impactful digital solutions with a global perspective.
          </p>

          <div className="pt-6 grid sm:grid-cols-3 gap-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/70 bg-card/60 px-5 py-4 transition-colors hover:border-secondary/50"
              >
                <p className="font-heading text-base text-primary">{p.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{p.from}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

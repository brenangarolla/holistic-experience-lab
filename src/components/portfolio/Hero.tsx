import { ArrowRight, Download } from "lucide-react";
import portrait from "@/assets/Bren.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.11 235 / 0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.58 0.07 135 / 0.3), transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className="reveal mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative"
      >
        <div className="lg:col-span-4 order-1 relative">
          <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full -z-10 opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.62 0.11 235 / 0.35), transparent 70%)",
              }}
            />
            <img
              src={portrait}
              alt="Portrait of Brenda Angarolla"
              width={896}
              height={1152}
              className="relative w-full aspect-square object-cover object-top rounded-full ring-1 ring-border/60 shadow-[0_20px_50px_-25px_rgba(30,58,95,0.4)]"
            />
          </div>
        </div>

        <div className="lg:col-span-8 order-2">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-6">
            UX / UI Designer
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary">
            Brenda
            <br />
            Angarolla
          </h1>
          <p className="mt-6 font-heading text-xl sm:text-2xl text-foreground/85 max-w-xl leading-snug">
            Bridging systems & human experience.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Designing digital experiences with an international mindset — where logistics precision,
            customer empathy, and yoga&apos;s calm clarity meet.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-primary transition-all duration-300 hover:gap-3"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/BrendaAngarollaResume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/80 hover:text-secondary hover:border-secondary/60 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

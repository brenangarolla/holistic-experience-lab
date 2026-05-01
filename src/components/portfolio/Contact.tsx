import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-5">
          Contact
        </p>
        <h2 className="font-heading text-4xl lg:text-6xl text-primary leading-[1.05]">
          Let&apos;s create something thoughtful together.
        </h2>
        <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
          Feel free to contact me to bring your idea into life.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:bren.angarolla@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground hover:bg-primary transition-all duration-300 hover:gap-3"
          >
            Let&apos;s Work Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-angarolla/?locale=en_US"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground/80 hover:text-secondary hover:border-secondary/60 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <a
          href="mailto:bren.angarolla@gmail.com"
          className="mt-10 inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4" />
          bren.angarolla@gmail.com
        </a>
      </div>
    </section>
  );
}
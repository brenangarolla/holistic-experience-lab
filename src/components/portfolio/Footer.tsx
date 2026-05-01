import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Brenda Angarolla · Designed with care.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:bren.angarolla@gmail.com"
            aria-label="Email Brenda"
            className="hover:text-secondary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-angarolla/?locale=en_US"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hover:text-secondary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
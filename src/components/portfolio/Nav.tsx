import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-heading text-lg tracking-tight text-primary">
          Brenda Angarolla
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-foreground/80 hover:text-secondary transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Brenda-Angarolla-Resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80 hover:text-secondary hover:border-secondary/50 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-sm text-foreground/85 hover:text-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Brenda-Angarolla-Resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm w-fit"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
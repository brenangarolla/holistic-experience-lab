import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brenda Angarolla — UX/UI Designer" },
      {
        name: "description",
        content:
          "Portfolio of Brenda Angarolla, UX/UI Designer bridging systems and human experience — designing digital products with an international, user-centered mindset.",
      },
      { property: "og:title", content: "Brenda Angarolla — UX/UI Designer" },
      {
        property: "og:description",
        content:
          "UX/UI Designer bridging systems and human experience. Selected work, skills and a multidisciplinary career across logistics, customer service and wellness.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

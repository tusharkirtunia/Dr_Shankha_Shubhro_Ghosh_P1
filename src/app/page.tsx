import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { PerspectivesNewsSection } from "@/components/home/PerspectivesNewsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Scroll Stage 1 — Doctor / Identity */}
        <Hero />
        <AboutSection />

        {/* Scroll Stage 2 — Research + Professional Work */}
        <ResearchSection />

        {/* Scroll Stage 3 — Knowledge + Human Impact + Contact */}
        <PerspectivesNewsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

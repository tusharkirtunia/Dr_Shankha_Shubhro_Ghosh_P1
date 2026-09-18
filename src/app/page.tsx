import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustFeaturesSection } from "@/components/home/TrustFeaturesSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TrustFeaturesSection />
        <ExperienceTimeline />
        <TeamSection />
        <TestimonialsSection />
        <ArticlesSection />
        <FAQSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

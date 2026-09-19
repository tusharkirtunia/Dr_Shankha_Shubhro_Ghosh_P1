import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "./ServiceCard";
import { doctorProfile } from "@/data/doctorData";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8faf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          id="services-heading"
          badge="Professional Scope & Research"
          title="Diagnostic Radiology &"
          accentWord="Research Scope"
          subtitle="Advanced diagnostic imaging interpretations, consultative radiology workflows, and clinical research methodologies conducted in Kolkata."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctorProfile.demoServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Collaborative Inquiries
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Professional Consultations & Research Discussions
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Connect to discuss diagnostic imaging research, professional case consultations, or academic collaborations with Dr. Shankha Shubhro Ghosh.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-teal-50 text-teal-950 hover:bg-white"
            >
              Contact & Inquiries
            </Button>
            <Button
              href="#articles"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-teal-600 hover:bg-teal-800/50 hover:text-white"
            >
              View Knowledge
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

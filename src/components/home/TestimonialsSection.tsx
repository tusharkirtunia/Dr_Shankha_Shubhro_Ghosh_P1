import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";
import { doctorProfile } from "@/data/doctorData";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8faf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          id="testimonials-heading"
          badge="Patient Voices"
          title="What Patients & Clinicians"
          accentWord="Value"
          subtitle="Illustrative feedback regarding communication, clarity, and diagnostic precision (Demo Testimonials for Prototype)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {doctorProfile.demoTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            * Testimonials are illustrative demo placeholders for prototype layout evaluation and do not represent actual patient endorsements.
          </p>
        </div>
      </Container>
    </section>
  );
}

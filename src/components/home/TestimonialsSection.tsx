"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getStoredProfile } from "@/lib/contentStore";
import { TestimonialItem } from "@/types/content";

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => getStoredProfile().testimonials);

  useEffect(() => {
    const handleUpdate = () => {
      const updated = getStoredProfile();
      setTestimonials(updated.testimonials);
    };
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const publishedTestimonials = testimonials.filter(
    (item) => item.status === "published" || item.status.toLowerCase().includes("pub")
  );

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8faf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          id="testimonials-heading"
          badge="Professional Trust & Human Evidence"
          title="Colleague & Referring"
          accentWord="Clinical Trust"
          subtitle="Professional evaluations and clinical feedback regarding diagnostic accuracy and consultative communication (Demo Placeholder)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {publishedTestimonials.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 max-w-xl mx-auto shadow-xs">
            <p className="text-slate-500 text-sm">No published testimonials currently available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {publishedTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-teal-300 transition-all"
              >
                <div>
                  <div className="text-teal-800 text-3xl font-serif mb-3 leading-none" aria-hidden="true">
                    “
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                    {item.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-900">
                    {item.attribution}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Professional Feedback • Prototype Demo
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            * Testimonials reflect professional trust and academic collaboration feedback. No star ratings or commercial review metrics are used.
          </p>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { doctorProfile, verifiedDoctorFacts } from "@/data/doctorData";

export function TrustFeaturesSection() {
  const getFeatureIcon = (type: string) => {
    switch (type) {
      case "accuracy":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "communication":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case "collaboration":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "standards":
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100"
      aria-labelledby="trust-features-heading"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          id="trust-features-heading"
          badge="Practice Philosophy"
          title="Core Principles In"
          accentWord="Radiology"
          subtitle="Commitment to clinical excellence, clear diagnostic reporting, and collaborative communication in Kolkata."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctorProfile.demoFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center mb-5 shadow-xs">
                {getFeatureIcon(feature.iconType)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust summary pill strip */}
        <div className="mt-12 p-5 rounded-2xl bg-teal-50/60 border border-teal-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-950 block">
                Practice Standards & Compliance
              </span>
              <span className="text-xs text-teal-800">
                Patient-centered diagnostic radiology consultations for patients in {verifiedDoctorFacts.location}.
              </span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-teal-900 bg-white px-3 py-1 rounded-full border border-teal-200 shrink-0">
            Professional Practice (Prototype)
          </span>
        </div>
      </Container>
    </section>
  );
}

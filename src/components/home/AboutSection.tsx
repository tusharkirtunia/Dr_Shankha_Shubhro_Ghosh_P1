import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AboutDoctorVisual } from "./AboutDoctorVisual";
import { verifiedDoctorFacts, doctorProfile } from "@/data/doctorData";

export function AboutSection() {
  const specialtyPills = [
    "Cross-Sectional Imaging (Demo)",
    "Diagnostic Ultrasound (Demo)",
    "Computed Tomography (Demo)",
    "MRI Evaluation (Demo)",
    "Plain Film Radiography (Demo)",
    "Consultative Reporting (Demo)",
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <AboutDoctorVisual />
          </div>

          {/* Right Column: Editorial & Factual Profile */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-900">
                About The Specialist
              </span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]"
            >
              Precision Diagnostics &{" "}
              <span className="font-serif italic font-normal text-teal-800">
                Patient-Centered
              </span>{" "}
              Medical Imaging
            </h2>

            {/* Doctor Bio Lead */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">{verifiedDoctorFacts.name}</strong> is a{" "}
              <strong className="font-semibold text-teal-800">{verifiedDoctorFacts.profession}</strong> based in{" "}
              <strong className="font-semibold text-slate-900">{verifiedDoctorFacts.location}</strong>, providing
              systematic medical imaging evaluation, diagnostic accuracy, and multidisciplinary clinical consultations.
            </p>

            {/* Quote Callout with Colored Accent Border */}
            <blockquote className="w-full pl-4 sm:pl-5 py-2 border-l-4 border-teal-700 bg-teal-50/40 rounded-r-xl text-slate-700 italic text-sm sm:text-base leading-relaxed">
              &ldquo;{doctorProfile.aboutQuote}&rdquo;
            </blockquote>

            {/* Metadata Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full py-2">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Specialist Identity
                </span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5">
                  {verifiedDoctorFacts.name}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Clinical Profession
                </span>
                <span className="text-sm font-semibold text-teal-800 mt-0.5">
                  {verifiedDoctorFacts.profession}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Practice Location
                </span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5">
                  {verifiedDoctorFacts.location}, West Bengal
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Diagnostic Scope
                </span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5">
                  Comprehensive Medical Imaging
                </span>
              </div>
            </div>

            {/* Specialty / Service Demo Pills */}
            <div className="space-y-2 w-full pt-1">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                Imaging Modalities & Focus Areas (Demo)
              </span>
              <div className="flex flex-wrap gap-2">
                {specialtyPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
              <Button href="#appointment" variant="primary" size="md">
                Book Appointment
              </Button>
              <Button href="#services" variant="outline" size="md">
                View Medical Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

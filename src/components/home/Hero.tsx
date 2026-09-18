import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroDoctorVisual } from "./HeroDoctorVisual";
import { verifiedDoctorFacts } from "@/data/doctorData";

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#fbfbf9] via-[#f7f9f8] to-[#fbfbf9]">
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status / Specialty Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-900">
                {verifiedDoctorFacts.profession} • {verifiedDoctorFacts.location}
              </span>
            </div>

            {/* Main Headline with Signature Italic Serif Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Clinical Excellence in{" "}
              <span className="font-serif italic font-normal text-teal-800">
                Diagnostic
              </span>{" "}
              Radiology & Imaging
            </h1>

            {/* Doctor Identity & Introductory Statement */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-semibold text-slate-800">
                {verifiedDoctorFacts.name}
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Providing comprehensive diagnostic radiology consultations and medical imaging interpretations
                with precision and patient-centered focus in Kolkata.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                href="#appointment"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Book Appointment
              </Button>

              <Button
                href="#about"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                More About Me
              </Button>
            </div>

            {/* Trust & Location Summary Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                    Location
                  </span>
                  <span className="text-sm text-slate-600">
                    {verifiedDoctorFacts.location}, West Bengal
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                    Specialty
                  </span>
                  <span className="text-sm text-slate-600">
                    {verifiedDoctorFacts.profession}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Visual & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            {/* Main Visual */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <HeroDoctorVisual />

              {/* Floating Card: Availability / Consultation Inquiry (Demo Pattern) */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[210px] sm:max-w-[240px] z-30 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-900 tracking-tight">
                    Inquiry Preview (Demo)
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Diagnostic imaging reviews & patient consultations in Kolkata.
                </p>
              </div>

              {/* Floating Card: Diagnostic Trust Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] sm:max-w-[220px] z-30 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    DR
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">
                      Radiology Care
                    </span>
                    <span className="block text-[11px] text-teal-700 font-medium">
                      Kolkata Practice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

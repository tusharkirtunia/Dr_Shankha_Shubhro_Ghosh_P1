"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AboutDoctorVisual } from "./AboutDoctorVisual";
import { getStoredProfile } from "@/lib/contentStore";
import { DoctorProfile } from "@/types/content";

export function AboutSection() {
  const [profile, setProfile] = useState<DoctorProfile>(() => getStoredProfile());

  useEffect(() => {
    const handleUpdate = () => {
      setProfile(getStoredProfile());
    };
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const name = profile?.name || "Dr. Shankha Shubhro Ghosh";
  const profession = profile?.profession || "Radiologist";
  const location = profile?.location || "Kolkata";
  const quote = profile?.aboutQuote || "Accurate diagnostic imaging is the foundation of timely and effective medical treatment.";

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
              <strong className="font-semibold text-slate-900">{name}</strong> is a{" "}
              <strong className="font-semibold text-teal-800">{profession}</strong> based in{" "}
              <strong className="font-semibold text-slate-900">{location}</strong>, providing
              systematic medical imaging evaluation, diagnostic accuracy, and multidisciplinary clinical consultations.
            </p>

            {/* Quote Callout with Colored Accent Border */}
            <blockquote className="w-full pl-4 sm:pl-5 py-2 border-l-4 border-teal-700 bg-teal-50/30 text-slate-700 italic text-sm sm:text-base leading-relaxed">
              &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Editorial Key-Value List */}
            <div className="w-full border-t border-b border-slate-200/80 divide-y divide-slate-200/60 my-2">
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="font-medium text-slate-500">Specialist Identity</span>
                <span className="font-semibold text-slate-900">{name}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="font-medium text-slate-500">Clinical Profession</span>
                <span className="font-semibold text-teal-800">{profession}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="font-medium text-slate-500">Practice Location</span>
                <span className="font-semibold text-slate-900">{location}, West Bengal</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="font-medium text-slate-500">Diagnostic Scope</span>
                <span className="font-semibold text-slate-900">Comprehensive Medical Imaging</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
              <Button href="#research" variant="primary" size="md">
                View Professional Work
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Research Inquiries
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

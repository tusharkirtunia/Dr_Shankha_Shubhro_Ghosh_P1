"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getStoredProfile } from "@/lib/contentStore";
import { ResearchItem } from "@/types/content";

export function ResearchSection() {
  const [researchItems, setResearchItems] = useState<ResearchItem[]>(() => getStoredProfile().research);

  useEffect(() => {
    const handleUpdate = () => {
      const updated = getStoredProfile();
      setResearchItems(updated.research);
    };
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  // Filter published research (or items where status indicates published)
  const publishedResearch = researchItems.filter((item) => {
    const s = item.status.toLowerCase();
    return s.includes("pub") || s === "published" || s.includes("review");
  });

  const [featuredResearch, ...otherResearch] = publishedResearch;

  return (
    <section
      id="research"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8faf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="research-heading"
    >
      <Container>
        <SectionHeading
          id="research-heading"
          badge="Research & Professional Work"
          title="Clinical Research &"
          accentWord="Diagnostic Scope"
          subtitle="Published research, methodological standards, and cross-sectional diagnostic imaging expertise conducted in Kolkata."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {publishedResearch.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 mb-10 shadow-xs">
            <p className="text-slate-500 text-sm">No published research items currently available.</p>
          </div>
        ) : (
          <>
            {/* Featured Research Editorial Card */}
            {featuredResearch && (
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs mb-10 transition-all hover:border-teal-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/60">
                    {featuredResearch.researchArea}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {featuredResearch.date} • <span className="text-teal-900 font-semibold">{featuredResearch.status}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                  {featuredResearch.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-teal-900 mb-4">
                  Authors: {featuredResearch.authors.join(", ")} | Journal: <span className="italic">{featuredResearch.journal}</span>
                </p>

                <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed max-w-4xl">
                  {featuredResearch.abstract}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-mono">
                    DOI: <span className="text-slate-700">{featuredResearch.doi}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {featuredResearch.externalUrl && (
                      <Button href={featuredResearch.externalUrl} variant="outline" size="sm">
                        View Publication (Demo)
                      </Button>
                    )}
                    {featuredResearch.pdfUrl && (
                      <Button href={featuredResearch.pdfUrl} variant="secondary" size="sm">
                        PDF Document (Demo)
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Supporting Research Grid */}
            {otherResearch.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                {otherResearch.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-teal-300 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md">
                          {item.researchArea}
                        </span>
                        <span className="text-xs text-slate-500">{item.date}</span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-500 mb-3 italic">
                        {item.journal}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-3">
                        {item.abstract}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        DOI: {item.doi}
                      </span>
                      <span className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer">
                        Details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Professional Diagnostic Scope Summary Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Diagnostic Modalities & Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Cross-Sectional Imaging & Reporting Standards
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Comprehensive CT, MRI, Ultrasound, and Digital Radiography interpretation with structured clinical reporting in Kolkata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-teal-50 text-teal-950 hover:bg-white"
            >
              Professional Inquiry
            </Button>
            <Button
              href="#perspectives"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-teal-600 hover:bg-teal-800/50 hover:text-white"
            >
              Read Perspectives
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

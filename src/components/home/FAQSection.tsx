"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { doctorProfile } from "@/data/doctorData";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-28 bg-[#fbfbf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading
          id="faq-heading"
          badge="Patient Help & Guidelines"
          title="Frequently Asked"
          accentWord="Questions"
          subtitle="Helpful information regarding medical imaging consultations and diagnostic scan procedures (Demo FAQs)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {doctorProfile.demoFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 hover:text-teal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-teal-50 text-teal-800" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 italic">
            * General information only. Clinical questions should be addressed during direct medical consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}

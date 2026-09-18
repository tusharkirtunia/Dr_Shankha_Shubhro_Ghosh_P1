import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { doctorProfile } from "@/data/doctorData";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-28 bg-[#fbfbf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          badge="Clinical Background"
          title="Professional Practice &"
          accentWord="Experience"
          subtitle="Illustrative milestones in diagnostic imaging and clinical radiology practice (Demo Presentation Pattern)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-teal-200/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {doctorProfile.demoTimeline.map((item, index) => (
              <div key={item.id} className="relative group">
                {/* Timeline node icon / indicator */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-teal-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-800" />
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Stage 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-500 mt-0.5 mb-2">
                    {item.institution}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 italic">
              * Qualifications and professional affiliations are placeholder representations for prototype evaluation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

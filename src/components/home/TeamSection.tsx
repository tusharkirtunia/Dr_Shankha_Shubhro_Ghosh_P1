import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "./TeamCard";
import { doctorProfile } from "@/data/doctorData";

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20"
      aria-labelledby="team-heading"
    >
      <Container>
        <SectionHeading
          id="team-heading"
          badge="Expert Network"
          title="Clinical Diagnostic"
          accentWord="Associates"
          subtitle="Collaborative multidisciplinary imaging team and clinical diagnostic associates (Illustrative Demo Profiles)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {doctorProfile.demoTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 italic max-w-lg mx-auto">
            * Team members are neutral placeholders demonstrating the expert team visual composition from the reference template.
          </p>
        </div>
      </Container>
    </section>
  );
}

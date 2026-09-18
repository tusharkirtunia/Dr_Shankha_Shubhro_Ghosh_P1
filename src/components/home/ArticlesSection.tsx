import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "./ArticleCard";
import { doctorProfile } from "@/data/doctorData";

export function ArticlesSection() {
  return (
    <section
      id="articles"
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20"
      aria-labelledby="articles-heading"
    >
      <Container>
        <SectionHeading
          id="articles-heading"
          badge="Educational Insights"
          title="Diagnostic Radiology &"
          accentWord="Articles"
          subtitle="Educational guidance on medical imaging procedures, scan preparation, and diagnostic reporting (Demo Blog Articles)."
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {doctorProfile.demoArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#articles" variant="outline" size="md">
            View All Articles (Demo)
          </Button>
          <p className="text-xs text-slate-500 italic mt-3">
            * Articles are demonstrative placeholders for prototype layout structure.
          </p>
        </div>
      </Container>
    </section>
  );
}

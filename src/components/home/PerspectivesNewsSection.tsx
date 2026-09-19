"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getStoredProfile } from "@/lib/contentStore";
import { PerspectiveItem, DomainNewsItem } from "@/types/content";

export function PerspectivesNewsSection() {
  const [perspectives, setPerspectives] = useState<PerspectiveItem[]>(() => getStoredProfile().perspectives);
  const [domainNews, setDomainNews] = useState<DomainNewsItem[]>(() => getStoredProfile().domainNews);

  useEffect(() => {
    const handleUpdate = () => {
      const updated = getStoredProfile();
      setPerspectives(updated.perspectives);
      setDomainNews(updated.domainNews);
    };
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const publishedPerspectives = perspectives.filter(
    (p) => p.status === "published"
  );
  const [featuredPerspective, ...otherPerspectives] = publishedPerspectives;

  const publishedNews = domainNews.filter(
    (n) => n.status.toLowerCase().includes("pub") || n.status === "External News"
  );

  return (
    <section
      id="perspectives"
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20"
      aria-labelledby="perspectives-heading"
    >
      <Container>
        <SectionHeading
          id="perspectives-heading"
          badge="Doctor Perspectives & Domain News"
          title="Knowledge &"
          accentWord="Radiology Insights"
          subtitle="Clinical perspectives authored by Dr. Shankha Shubhro Ghosh alongside curated external radiology domain news."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Section 1: Doctor Perspectives */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Doctor Perspectives
              </h3>
              <p className="text-xs text-slate-500">
                Authored opinion and educational analysis by Dr. Shankha Shubhro Ghosh (Demo Content)
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Original Writing
            </span>
          </div>

          {publishedPerspectives.length === 0 ? (
            <div className="bg-[#f8faf9] rounded-2xl p-10 text-center border border-slate-200/80 mb-8">
              <p className="text-slate-500 text-sm">No published perspectives currently available.</p>
            </div>
          ) : (
            <>
              {/* Featured Perspective */}
              {featuredPerspective && (
                <div className="bg-[#f8faf9] rounded-2xl p-8 sm:p-10 border border-slate-200/80 mb-8 hover:border-teal-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 bg-white px-3 py-1 rounded-md border border-slate-200">
                      {featuredPerspective.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {featuredPerspective.publicationDate}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    {featuredPerspective.title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                    {featuredPerspective.excerpt}
                  </p>

                  <div className="text-xs text-slate-600 mb-6 bg-white p-4 rounded-xl border border-slate-200/60 leading-relaxed">
                    {featuredPerspective.body}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {featuredPerspective.tags && featuredPerspective.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Supporting Perspectives Grid */}
              {otherPerspectives.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherPerspectives.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#f8faf9] rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between hover:border-teal-300 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-semibold text-teal-800 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-500">{item.publicationDate}</span>
                        </div>

                        <h5 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                          {item.title}
                        </h5>

                        <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                        {item.tags && item.tags.map((t) => (
                          <span key={t} className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Section 2: External Domain & Radiology News */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                External Domain & Radiology News
              </h3>
              <p className="text-xs text-slate-500">
                Curated industry news and updates from external professional sources (Not authored by Dr. Ghosh)
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              External Reporting
            </span>
          </div>

          {publishedNews.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <p className="text-slate-500 text-sm">No published news items currently available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200">
                        {news.category}
                      </span>
                      <span className="text-xs text-slate-500">{news.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {news.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium italic">
                      Source: {news.source}
                    </span>
                    <a
                      href={news.sourceUrl}
                      className="text-teal-800 font-semibold hover:underline"
                    >
                      External Link ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

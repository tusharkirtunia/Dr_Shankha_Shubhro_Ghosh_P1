import React from "react";
import Link from "next/link";
import { DemoArticle } from "@/types/content";

interface ArticleCardProps {
  article: DemoArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Category & Date metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5">
          <span className="font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
            {article.category}
          </span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors mb-2.5 leading-snug">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {article.summary}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href="#articles"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded py-1"
        >
          <span>Read Article</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <span className="text-[10px] text-slate-400 font-medium italic">Demo Guide</span>
      </div>
    </article>
  );
}

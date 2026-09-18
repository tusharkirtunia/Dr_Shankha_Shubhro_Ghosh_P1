import React from "react";
import Link from "next/link";
import { DemoService } from "@/types/content";

interface ServiceCardProps {
  service: DemoService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (type: DemoService["iconType"]) => {
    switch (type) {
      case "ct":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" strokeWidth="1.5" strokeDasharray="2 2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
          </svg>
        );
      case "mri":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v18m6-18v18M5 9h14M5 15h14" />
          </svg>
        );
      case "ultrasound":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "xray":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        );
      case "consultation":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case "intervention":
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-100 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
            {getIcon(service.iconType)}
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-full border border-teal-100">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Footer Link / CTA */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <Link
          href="#appointment"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded py-1"
        >
          <span>Schedule Review</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <span className="text-[10px] text-slate-400 font-medium italic">Demo Preview</span>
      </div>
    </div>
  );
}

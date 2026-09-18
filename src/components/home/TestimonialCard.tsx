import React from "react";
import { DemoTestimonial } from "@/types/content";

interface TestimonialCardProps {
  testimonial: DemoTestimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        {/* Top: Star Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400" aria-label={`Rating: ${testimonial.rating} out of 5 stars (Demo)`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center font-serif text-lg font-bold">
            &ldquo;
          </div>
        </div>

        {/* Content */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      {/* Author & Location */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            {testimonial.author}
          </h4>
          <span className="text-xs text-slate-500">
            {testimonial.role} • {testimonial.location}
          </span>
        </div>
        <span className="text-[10px] uppercase font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
          Demo
        </span>
      </div>
    </div>
  );
}

import React from "react";

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  badge,
  title,
  accentWord,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCentered ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-2xl ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
          {badge}
        </span>
      )}

      <h2
        id={id}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
      >
        {title}{" "}
        {accentWord && (
          <span className="font-serif italic font-normal text-teal-800">
            {accentWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base text-slate-600 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

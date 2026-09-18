import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-teal-800 text-white hover:bg-teal-900 active:bg-teal-950 shadow-sm",
    secondary:
      "bg-teal-50 text-teal-900 hover:bg-teal-100 active:bg-teal-200 border border-teal-200",
    outline:
      "bg-transparent text-slate-800 hover:text-teal-800 hover:border-teal-800 border border-slate-300 active:bg-slate-50",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200",
    dark:
      "bg-slate-900 text-white hover:bg-slate-800 active:bg-black",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

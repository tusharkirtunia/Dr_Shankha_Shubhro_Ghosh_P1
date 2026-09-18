"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { verifiedDoctorFacts } from "@/data/doctorData";
import { navItems } from "@/data/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close when clicking outside of the menu container
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Lightweight IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = ["about", "services", "experience", "team", "testimonials", "articles", "faq", "appointment", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-xs transition-all duration-200">
      <Container className="flex items-center justify-between h-20">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-md py-1 min-h-[44px] justify-center"
          aria-label={`${verifiedDoctorFacts.name} - Home`}
        >
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors leading-tight">
            {verifiedDoctorFacts.name}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-teal-700 tracking-wide uppercase">
            {verifiedDoctorFacts.profession} • {verifiedDoctorFacts.location}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? activeSection === "/"
                : activeSection === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 ${
                  isActive
                    ? "text-teal-900 bg-teal-50/80 font-semibold"
                    : "text-slate-700 hover:text-teal-800 hover:bg-teal-50/50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button
              href="#appointment"
              variant="primary"
              size="md"
              className="shadow-xs hover:shadow-md transition-shadow"
            >
              Book Appointment
            </Button>
          </div>

          {/* Hamburger Button */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-slate-700 hover:text-teal-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
            aria-controls="mobile-navigation-drawer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer / Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto bg-teal-900/95 backdrop-blur-md text-white border-b border-teal-800 shadow-xl transition-all duration-200 ease-in-out px-6 py-8"
        >
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-teal-50 hover:text-white py-2 border-b border-teal-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="#appointment"
                variant="secondary"
                size="lg"
                className="w-full justify-center bg-white text-teal-900 hover:bg-teal-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

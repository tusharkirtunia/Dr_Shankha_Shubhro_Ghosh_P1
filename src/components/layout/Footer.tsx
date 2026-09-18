"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { verifiedDoctorFacts, doctorProfile } from "@/data/doctorData";
import { navItems } from "@/data/navigation";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#091522] text-slate-300 border-t border-slate-800">
      {/* Newsletter / Query strip (Demo Only) */}
      <div className="border-b border-slate-800/80 py-12">
        <Container>
          <div className="bg-[#112235] rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Newsletter & Updates (Demo)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Stay Updated with Diagnostic Radiology Insights
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Subscribe to receive clinical updates and medical imaging articles (Demo Placeholder).
              </p>
            </div>

            {subscribed ? (
              <div className="bg-teal-900/50 border border-teal-500/30 text-teal-200 px-6 py-3 rounded-full text-sm font-medium">
                Thank you for subscribing! (Demo state)
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md"
                aria-label="Newsletter Subscription Form (Demo)"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 bg-[#091522] border border-slate-700 rounded-full text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 w-full sm:w-72"
                  aria-label="Email address for demo newsletter"
                  defaultValue="demo.subscriber@example.com"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Identity column */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  {verifiedDoctorFacts.name}
                </span>
                <span className="text-sm font-medium text-teal-400">
                  {verifiedDoctorFacts.profession} • {verifiedDoctorFacts.location}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {doctorProfile.shortBio}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-teal-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Focus (Demo) */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Services (Demo)
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {doctorProfile.demoServices.map((service) => (
                  <li key={service.id} className="hover:text-slate-200">
                    {service.title}
                  </li>
                ))}
                <li className="text-xs text-slate-500 italic mt-2">
                  * Clinical services are illustrative placeholders for prototype preview.
                </li>
              </ul>
            </div>

            {/* Contact Placeholder */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Location & Inquiries
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-semibold">City:</span>
                  <span>{verifiedDoctorFacts.location}, West Bengal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-semibold">Address:</span>
                  <span>{doctorProfile.demoContact.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-semibold">Phone:</span>
                  <span>{doctorProfile.demoContact.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-semibold">Email:</span>
                  <span>{doctorProfile.demoContact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright & Legal disclaimer */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {verifiedDoctorFacts.name}. All rights reserved. Prototype preview.
          </p>
          <p className="text-slate-400">
            Verified Practicing Radiologist in {verifiedDoctorFacts.location}.
          </p>
        </Container>
      </div>
    </footer>
  );
}

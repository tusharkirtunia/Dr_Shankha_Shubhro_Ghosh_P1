"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPlaceholder } from "./MapPlaceholder";
import { verifiedDoctorFacts } from "@/data/doctorData";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactCards = [
    {
      title: "Practice Location",
      primary: `${verifiedDoctorFacts.location}, West Bengal`,
      secondary: "Clinic Address — To be provided",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Phone Inquiries",
      primary: "+91 XXXXX XXXXX (Demo)",
      secondary: "Clinic Contact Line — Demo",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Email Inquiries",
      primary: "contact@example.com (Demo)",
      secondary: "Direct Email — Demo Placeholder",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Consultation Hours",
      primary: "Schedule — To be provided (Demo)",
      secondary: "Prior Appointment Required (Demo)",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or question.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 bg-[#fbfbf9] border-t border-slate-200/60 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <Container>
        <SectionHeading
          id="contact-heading"
          badge="Get In Touch"
          title="Clinical Inquiries &"
          accentWord="Location"
          subtitle="Diagnostic consultation inquiries and general communication for patients and referring physicians in Kolkata."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-4 border border-teal-100">
                  {card.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {card.primary}
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                {card.secondary}
              </p>
            </div>
          ))}
        </div>

        {/* Form + Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-center">
            {isSuccess ? (
              <div
                className="text-center py-8 px-4 space-y-5"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-700 border-2 border-teal-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Demo Inquiry Submitted
                  </h3>
                  <p className="text-sm text-teal-900 font-medium">
                    Demo inquiry submitted — this prototype does not send real messages.
                  </p>
                  <p className="text-xs text-slate-500">
                    Thank you for previewing the prototype. No actual emails were transmitted.
                  </p>
                </div>
                <div className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleReset}
                  >
                    Send Another Demo Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
                aria-label="General Contact Form (Demo)"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Send A General Inquiry (Demo)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ask general questions regarding diagnostic imaging preparation or consultation procedures.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Name <span className="text-teal-700">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 bg-slate-50 border ${
                        errors.name ? "border-rose-500" : "border-slate-300"
                      } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Email <span className="text-teal-700">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 bg-slate-50 border ${
                        errors.email ? "border-rose-500" : "border-slate-300"
                      } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Subject / Modality Focus
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. CT Scan Reporting, Ultrasound Inquiry..."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Message <span className="text-teal-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Write your general inquiry message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 bg-slate-50 border ${
                      errors.message ? "border-rose-500" : "border-slate-300"
                    } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Button type="submit" disabled={isSubmitting} variant="primary" size="md">
                    {isSubmitting ? "Submitting Demo Message..." : "Send Demo Message"}
                  </Button>
                  <span className="text-[11px] text-slate-400 italic">
                    * Demo simulation only
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Map Location Placeholder */}
          <div className="lg:col-span-5 flex">
            <MapPlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}

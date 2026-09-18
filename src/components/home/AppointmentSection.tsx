"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { verifiedDoctorFacts } from "@/data/doctorData";

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  service?: string;
}

export function AppointmentSection() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number (at least 8 digits).";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred consultation date.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a diagnostic radiology modality or service.";
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

    // Simulate local demo submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      service: "",
      notes: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="appointment"
      className="py-16 sm:py-20 lg:py-28 bg-[#091522] text-white border-t border-slate-800 scroll-mt-20"
      aria-labelledby="appointment-heading"
    >
      <Container>
        <SectionHeading
          id="appointment-heading"
          badge="Consultation Booking"
          title="Schedule A Diagnostic"
          accentWord="Consultation"
          subtitle="Request a patient scan review or medical imaging consultation with Dr. Shankha Shubhro Ghosh in Kolkata (Interactive Demo Interface)."
          align="center"
          className="mb-12 sm:mb-16 text-white [&_h2]:text-white [&_p]:text-slate-400 [&_span]:text-teal-400"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: Guidelines & Specialist Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#112235] p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                  Diagnostic Specialist
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {verifiedDoctorFacts.name}
                </h3>
                <p className="text-sm text-teal-300 font-medium">
                  {verifiedDoctorFacts.profession} • {verifiedDoctorFacts.location}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Consultation Preparation Guidelines
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Bring prior scan films, DICOM discs, or digital imaging files.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Bring physician prescription and relevant clinical history notes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Structured electronic reports will be prepared following review.</span>
                  </li>
                </ul>
              </div>

              {/* Demo Advisory Banner */}
              <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40 text-xs text-teal-200 leading-relaxed">
                <strong className="block text-white font-semibold mb-1">
                  Prototype Demo Notice:
                </strong>
                This booking interface is a client-side prototype demonstration. Form submissions simulate the booking workflow locally and do not create live appointments or transmit medical records.
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form / Success Banner */}
          <div className="lg:col-span-7">
            <div className="bg-[#112235] p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-700/80 shadow-xl">
              {isSuccess ? (
                /* Success State */
                <div
                  className="text-center py-8 px-4 space-y-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border-2 border-teal-400 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Demo Request Submitted
                    </h3>
                    <p className="text-base text-teal-200 font-medium max-w-md mx-auto">
                      Demo request submitted — this prototype does not send real appointments.
                    </p>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Please consult directly with your diagnostic medical center or clinic for actual scheduling.
                    </p>
                  </div>

                  {/* Summary of submitted demo data */}
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
                    <div>
                      <strong className="text-teal-400">Patient:</strong> {formData.name}
                    </div>
                    <div>
                      <strong className="text-teal-400">Service:</strong> {formData.service}
                    </div>
                    <div>
                      <strong className="text-teal-400">Date:</strong> {formData.date}
                    </div>
                    <div>
                      <strong className="text-teal-400">Specialist:</strong> {verifiedDoctorFacts.name} ({verifiedDoctorFacts.profession})
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={handleReset}
                      className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold"
                    >
                      Book Another Demo Appointment
                    </Button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  aria-label="Appointment Request Form (Demo)"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="appointment-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Full Name <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="appointment-name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-slate-900/90 border ${
                          errors.name ? "border-rose-500" : "border-slate-700"
                        } rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-1 text-xs text-rose-400 font-medium"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="appointment-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="appointment-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-slate-900/90 border ${
                          errors.email ? "border-rose-500" : "border-slate-700"
                        } rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1 text-xs text-rose-400 font-medium"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Phone Number <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="appointment-phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-slate-900/90 border ${
                          errors.phone ? "border-rose-500" : "border-slate-700"
                        } rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="mt-1 text-xs text-rose-400 font-medium"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Preferred Date <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="appointment-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-slate-900/90 border ${
                          errors.date ? "border-rose-500" : "border-slate-700"
                        } rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                      />
                      {errors.date && (
                        <p
                          id="date-error"
                          className="mt-1 text-xs text-rose-400 font-medium"
                        >
                          {errors.date}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Modality / Service */}
                    <div>
                      <label
                        htmlFor="appointment-service"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Diagnostic Modality <span className="text-teal-400">*</span>
                      </label>
                      <select
                        id="appointment-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-slate-900/90 border ${
                          errors.service ? "border-rose-500" : "border-slate-700"
                        } rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? "service-error" : undefined}
                      >
                        <option value="">Select Modality / Service</option>
                        <option value="Computed Tomography (CT)">Computed Tomography (CT)</option>
                        <option value="Magnetic Resonance Imaging (MRI)">Magnetic Resonance Imaging (MRI)</option>
                        <option value="Diagnostic Ultrasound">Diagnostic Ultrasound</option>
                        <option value="Digital Radiography (X-Ray)">Digital Radiography (X-Ray)</option>
                        <option value="Imaging Consultation & Review">Imaging Consultation & Review</option>
                        <option value="Image-Guided Planning">Image-Guided Planning</option>
                      </select>
                      {errors.service && (
                        <p
                          id="service-error"
                          className="mt-1 text-xs text-rose-400 font-medium"
                        >
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Doctor (Fixed / Readonly) */}
                    <div>
                      <label
                        htmlFor="appointment-doctor"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Specialist
                      </label>
                      <input
                        id="appointment-doctor"
                        type="text"
                        readOnly
                        value={`${verifiedDoctorFacts.name} (${verifiedDoctorFacts.profession})`}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/60 rounded-xl text-sm text-slate-300 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      htmlFor="appointment-notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Additional Clinical Notes (Optional)
                    </label>
                    <textarea
                      id="appointment-notes"
                      rows={3}
                      placeholder="Mention any specific scan body region or referring doctor instructions..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-slate-950"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Processing Request...</span>
                        </span>
                      ) : (
                        "Request Demo Appointment"
                      )}
                    </Button>

                    <span className="text-[11px] text-slate-400 font-medium italic hidden sm:inline">
                      * Demo validation simulation
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

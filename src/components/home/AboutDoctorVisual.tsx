import React from "react";

export function AboutDoctorVisual() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      role="img"
      aria-label="Illustration depicting radiology diagnostic consultation workstation"
    >
      {/* Background Decorative Frame */}
      <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-tr from-teal-900 via-teal-800 to-slate-900 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-teal-700/50">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="about-grid"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="12" cy="12" r="1" fill="rgba(255, 255, 255, 0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header inside visual card */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-400/30 text-teal-200 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>Diagnostic Imaging Suite</span>
          </div>
          <span className="text-[11px] text-teal-300 font-mono tracking-wider">
            DICOM // VIEW
          </span>
        </div>

        {/* Middle Diagnostic Workstation Graphic */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto">
          {/* Main Radiology Monitor Screen */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] bg-slate-950/90 rounded-xl p-3 border border-teal-500/40 shadow-xl">
            {/* Screen Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2.5">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] font-mono text-teal-400">
                PATIENT_SERIES: 01-SCAN
              </span>
            </div>

            {/* 4-Quadrant Imaging Grid Simulation */}
            <div className="grid grid-cols-2 gap-2">
              {/* Scan Quadrant 1 */}
              <div className="aspect-square bg-slate-900 rounded-lg p-2 flex flex-col justify-between border border-teal-900/60 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div className="w-12 h-12 rounded-full border border-teal-400/40 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500/30"></div>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-slate-400 relative z-10">
                  AXIAL CT
                </span>
                <span className="text-[8px] font-mono text-teal-400/80 self-end relative z-10">
                  WL: 40 / WW: 400
                </span>
              </div>

              {/* Scan Quadrant 2 */}
              <div className="aspect-square bg-slate-900 rounded-lg p-2 flex flex-col justify-between border border-teal-900/60 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div className="w-14 h-10 border border-teal-400/40 rounded-sm"></div>
                </div>
                <span className="text-[9px] font-mono text-slate-400 relative z-10">
                  CORONAL
                </span>
                <span className="text-[8px] font-mono text-teal-400/80 self-end relative z-10">
                  CONTRAST+
                </span>
              </div>

              {/* Scan Quadrant 3 */}
              <div className="aspect-square bg-slate-900 rounded-lg p-2 flex flex-col justify-between border border-teal-900/60 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <svg
                    className="w-10 h-10 text-teal-400/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] font-mono text-slate-400 relative z-10">
                  SAGITTAL
                </span>
                <span className="text-[8px] font-mono text-teal-400/80 self-end relative z-10">
                  T2 WEIGHTED
                </span>
              </div>

              {/* Scan Quadrant 4 */}
              <div className="aspect-square bg-slate-900 rounded-lg p-2 flex flex-col justify-between border border-teal-900/60 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-teal-400/50"></div>
                </div>
                <span className="text-[9px] font-mono text-slate-400 relative z-10">
                  3D RECON
                </span>
                <span className="text-[8px] font-mono text-teal-400/80 self-end relative z-10">
                  ISO: 0.5mm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Focus Badge */}
        <div className="relative z-10 bg-teal-950/90 backdrop-blur-md p-3 rounded-xl border border-teal-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-teal-600/40 text-teal-200 flex items-center justify-center text-xs font-bold">
              RAD
            </div>
            <div>
              <span className="block text-xs font-bold text-white">
                Clinical Radiology Review
              </span>
              <span className="block text-[10px] text-teal-300">
                Specialized Diagnostic Interpretation
              </span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-800 text-teal-200 font-medium">
            Kolkata, WB
          </span>
        </div>
      </div>

      {/* Floating Callout / Experience Style Pill (Non-numerical, neutral) */}
      <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[220px] sm:max-w-[250px] z-20">
        <div className="flex items-center gap-2 mb-1">
          <svg
            className="w-4 h-4 text-teal-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Clinical Focus
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-snug">
          Specialized in comprehensive cross-sectional and plain film reporting.
        </p>
      </div>
    </div>
  );
}

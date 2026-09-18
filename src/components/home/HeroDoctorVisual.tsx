import React from "react";

export function HeroDoctorVisual() {
  return (
    <div
      className="relative w-full aspect-[4/5] sm:aspect-[4/5] max-w-md mx-auto flex items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-teal-800 via-teal-900 to-slate-950 shadow-2xl border border-teal-700/40"
      role="img"
      aria-label="Medical illustration representing diagnostic radiology"
    >
      {/* Background ambient lighting and scan grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Radiant glow circle behind clinician silhouette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative diagnostic scan badge in top-left */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-teal-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-500/30 text-teal-200 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        <span>Diagnostic Imaging Focus</span>
      </div>

      {/* Professional Medical Figure Vector Illustration */}
      <svg
        className="w-full h-auto max-h-[88%] object-contain relative z-10 drop-shadow-xl"
        viewBox="0 0 400 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clinician Torso / White Lab Coat */}
        <path
          d="M110 480 C110 380, 140 330, 200 330 C260 330, 290 380, 290 480 Z"
          fill="#f8fafc"
        />
        {/* Coat Lapels & Shading */}
        <path
          d="M170 330 L200 420 L230 330 L215 330 L200 380 L185 330 Z"
          fill="#e2e8f0"
        />
        <path
          d="M175 330 L200 480 L180 480 Z"
          fill="#cbd5e1"
          opacity="0.4"
        />

        {/* Teal Inner Scrub Shirt & Tie */}
        <path
          d="M185 330 L200 370 L215 330 Z"
          fill="#0f766e"
        />
        <path
          d="M195 330 L200 360 L205 330 Z"
          fill="#134e4a"
        />

        {/* Stethoscope */}
        <path
          d="M165 330 C160 380, 165 410, 185 430 C190 435, 200 435, 200 445"
          stroke="#0d9488"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="200" cy="448" r="6" fill="#14b8a6" stroke="#f8fafc" strokeWidth="2" />
        <path
          d="M235 330 C240 380, 235 410, 215 430"
          stroke="#0d9488"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neck */}
        <path
          d="M185 290 L185 335 C185 340, 215 340, 215 335 L215 290 Z"
          fill="#e2b99a"
        />
        <path
          d="M185 315 C195 325, 205 325, 215 315 L215 330 L185 330 Z"
          fill="#cb997e"
          opacity="0.5"
        />

        {/* Head */}
        <ellipse cx="200" cy="250" rx="42" ry="52" fill="#f0caa9" />

        {/* Hair - Short Professional Cut */}
        <path
          d="M158 245 C158 200, 180 185, 200 185 C220 185, 242 200, 242 245 C238 230, 230 215, 200 215 C170 215, 162 230, 158 245 Z"
          fill="#1e293b"
        />
        <path
          d="M160 235 C160 210, 175 192, 200 192 C225 192, 240 210, 240 235 C235 220, 220 205, 200 205 C180 205, 165 220, 160 235 Z"
          fill="#334155"
        />

        {/* Glasses (Modern Professional) */}
        <rect
          x="168"
          y="235"
          width="26"
          height="18"
          rx="5"
          stroke="#0f172a"
          strokeWidth="2.5"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="206"
          y="235"
          width="26"
          height="18"
          rx="5"
          stroke="#0f172a"
          strokeWidth="2.5"
          fill="rgba(255,255,255,0.2)"
        />
        <line x1="194" y1="244" x2="206" y2="244" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="160" y1="240" x2="168" y2="242" stroke="#0f172a" strokeWidth="2" />
        <line x1="232" y1="242" x2="240" y2="240" stroke="#0f172a" strokeWidth="2" />

        {/* Gentle confident smile */}
        <path
          d="M188 278 Q200 286 212 278"
          stroke="#9a5840"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Subtle diagnostic light ray overlay */}
        <path
          d="M100 480 L300 480 L280 400 L120 400 Z"
          fill="url(#light-gradient)"
          opacity="0.15"
        />

        <defs>
          <linearGradient id="light-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative Bottom Shadow Blend */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none z-20" />
    </div>
  );
}

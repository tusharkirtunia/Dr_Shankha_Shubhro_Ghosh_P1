import React from "react";

export function MapPlaceholder() {
  return (
    <div
      className="relative w-full h-full min-h-[320px] sm:min-h-[380px] rounded-2xl bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 border border-slate-700/80 overflow-hidden flex flex-col justify-between p-6 shadow-lg"
      role="img"
      aria-label="Location map placeholder for Kolkata, West Bengal"
    >
      {/* Background Stylized Map Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="map-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(45, 212, 191, 0.4)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
          {/* Abstract River / Road Paths */}
          <path
            d="M 60 -20 Q 140 120 180 240 T 260 420"
            fill="none"
            stroke="rgba(45, 212, 191, 0.5)"
            strokeWidth="8"
          />
          <path
            d="M -20 180 Q 120 190 280 150 T 450 180"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
          />
          <path
            d="M 120 -20 Q 200 160 340 380"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Top Map Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-500/30 text-teal-200 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span>Kolkata Region • West Bengal</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
          22.5726° N, 88.3639° E
        </span>
      </div>

      {/* Centered Map Pin */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
        {/* Pulsing Pin Marker */}
        <div className="relative flex items-center justify-center mb-3">
          <div className="absolute w-16 h-16 rounded-full bg-teal-500/20 animate-ping"></div>
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-xl border-2 border-white">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        <span className="text-sm font-bold text-white tracking-wide">
          Dr. Shankha Shubhro Ghosh
        </span>
        <span className="text-xs text-teal-300 font-medium">
          Radiologist • Kolkata Practice
        </span>
      </div>

      {/* Bottom Map Note */}
      <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
        <span className="text-slate-300">
          Location Map — Specific address to be provided
        </span>
        <span className="text-[10px] text-teal-400 font-semibold uppercase tracking-wider bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
          Demo Map View
        </span>
      </div>
    </div>
  );
}

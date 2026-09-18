import React from "react";
import { DemoTeamMember } from "@/types/content";

interface TeamCardProps {
  member: DemoTeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
      {/* Avatar Graphic Placeholder */}
      <div
        className={`w-24 h-24 rounded-full bg-gradient-to-tr ${member.avatarColor} text-white flex items-center justify-center mb-4 shadow-md border-2 border-white relative overflow-hidden`}
        role="img"
        aria-label={`Illustration avatar for ${member.name}`}
      >
        <svg
          className="w-14 h-14 text-teal-100/70"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 mb-2">
        {member.specialty}
      </span>

      <h3 className="text-lg font-bold text-slate-900 mb-1">
        {member.name}
      </h3>

      <p className="text-sm text-slate-600">
        {member.role}
      </p>

      <span className="text-[10px] text-slate-400 mt-3 font-medium italic">
        Demo Clinical Profile
      </span>
    </div>
  );
}

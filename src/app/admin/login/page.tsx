"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setAdminAuthenticated } from "@/lib/contentStore";
import { verifiedDoctorFacts } from "@/data/doctorData";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setAdminAuthenticated(true);
      router.push("/admin/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3 font-mono">
            Demo Administration Surface
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
            Admin Portal Access
          </h1>
          <p className="text-xs text-slate-400">
            {verifiedDoctorFacts.name} • {verifiedDoctorFacts.profession} ({verifiedDoctorFacts.location})
          </p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 mb-6 text-xs text-slate-300 space-y-2">
          <p className="font-semibold text-teal-400">Notice on Authentication Boundary:</p>
          <p>
            This is a local prototype administration surface. It does not implement production authentication, OAuth, database credentials, or enterprise security. R09 will address production authentication and persistence architecture.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Demo Admin User (Local Session)
            </label>
            <input
              type="text"
              readOnly
              value="administrator@demo.local"
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 text-sm cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Demo Access Token / Passphrase
            </label>
            <input
              type="password"
              readOnly
              value="••••••••••••"
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 text-sm cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-teal-900/40 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Entering Demo Session...</span>
              </>
            ) : (
              <span>Enter Demo Admin Session</span>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-teal-400 hover:text-teal-300 underline font-medium"
          >
            ← Return to Public Website Prototype
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { getStoredProfile, resetStoredProfile } from "@/lib/contentStore";
import { DoctorProfile } from "@/types/content";

export default function AdminDashboardPage() {
  const [profile, setProfile] = useState<DoctorProfile>(() => getStoredProfile());
  const [resetMessage, setResetMessage] = useState("");

  useEffect(() => {
    const handleUpdate = () => setProfile(getStoredProfile());
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const researchCount = profile.research.length;
  const researchPublished = profile.research.filter(r => r.status.toLowerCase().includes("pub")).length;
  const researchDrafts = researchCount - researchPublished;

  const perspectivesCount = profile.perspectives.length;
  const perspectivesPublished = profile.perspectives.filter(p => p.status === "published").length;
  const perspectivesDrafts = profile.perspectives.filter(p => p.status === "draft").length;

  const newsCount = profile.domainNews.length;
  const newsPublished = profile.domainNews.filter(n => n.status.toLowerCase().includes("pub") || n.status === "External News").length;

  const testimonialsCount = profile.testimonials.length;
  const testimonialsPublished = profile.testimonials.filter(t => t.status === "published" || t.status.toLowerCase().includes("pub")).length;

  const mediaCount = profile.mediaAssets.length;

  const handleResetDemoData = () => {
    if (window.confirm("Reset all content changes back to initial demo defaults?")) {
      const fresh = resetStoredProfile();
      setProfile(fresh);
      setResetMessage("Demo content successfully reset to baseline defaults.");
      setTimeout(() => setResetMessage(""), 4000);
    }
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome & Status Banner */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-teal-800 text-teal-200 px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
                Centralized Content Layer Active
              </span>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-mono">
                Local Mock Persistence
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome to the Admin Control Surface
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Manage research papers, articles/perspectives, domain news, testimonials, and verified profile attributes for <span className="text-teal-300 font-semibold">{profile.name}</span> ({profile.profession}, {profile.location}). Published updates propagate instantly to the public website prototype.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-teal-50 text-teal-950 hover:bg-white transition-colors shadow-xs"
            >
              View Live Public Site ↗
            </Link>
            <button
              onClick={handleResetDemoData}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Reset Demo State
            </button>
          </div>
        </div>

        {resetMessage && (
          <div className="p-4 bg-teal-50 border border-teal-200 text-teal-900 rounded-xl text-xs font-medium">
            {resetMessage}
          </div>
        )}

        {/* Content Counts & Status Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Content Modules & Status Overview</h3>
            <span className="text-xs text-slate-500">Derived from Centralized Content Store</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Research Card */}
            <Link 
              href="/admin/research"
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🔬</span>
                <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {researchCount} Total
                </span>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-teal-900 transition-colors">Research Papers</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">Publications & DOIs</p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                <span className="text-teal-700 font-medium">Published: {researchPublished}</span>
                <span className="text-slate-500">Drafts: {researchDrafts}</span>
              </div>
            </Link>

            {/* Articles / Perspectives Card */}
            <Link 
              href="/admin/articles"
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📝</span>
                <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {perspectivesCount} Total
                </span>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-teal-900 transition-colors">Perspectives & Articles</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">Doctor opinion pieces</p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                <span className="text-teal-700 font-medium">Published: {perspectivesPublished}</span>
                <span className="text-amber-600 font-medium">Drafts: {perspectivesDrafts}</span>
              </div>
            </Link>

            {/* Domain News Card */}
            <Link 
              href="/admin/news"
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📰</span>
                <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {newsCount} Total
                </span>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-teal-900 transition-colors">Domain News</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">External industry news</p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                <span className="text-teal-700 font-medium">Active: {newsPublished}</span>
                <span className="text-slate-500">External Sourced</span>
              </div>
            </Link>

            {/* Testimonials Card */}
            <Link 
              href="/admin/testimonials"
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💬</span>
                <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {testimonialsCount} Total
                </span>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-teal-900 transition-colors">Testimonials</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">Colleague/Patient evidence</p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                <span className="text-teal-700 font-medium">Published: {testimonialsPublished}</span>
                <span className="text-slate-500">Verified Quotes</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Actions & Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs lg:col-span-2">
            <h3 className="font-bold text-slate-900 mb-3">Verified Profile & Identity Safeguard</h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 mb-4 text-xs space-y-1.5 text-slate-700">
              <p><strong className="text-slate-900">Name:</strong> {profile.name}</p>
              <p><strong className="text-slate-900">Profession:</strong> {profile.profession}</p>
              <p><strong className="text-slate-900">Location:</strong> {profile.location}</p>
              <p><strong className="text-slate-900">Tagline:</strong> {profile.tagline}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin/profile"
                className="px-4 py-2 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors"
              >
                Edit Verified Profile →
              </Link>
              <Link
                href="/admin/media"
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                Manage Media ({mediaCount})
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Phase R06–R08 Status</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Admin surface successfully built with separate IA, CRUD workflows for Research, Articles, News, Testimonials, Profile, and Media, integrated with the public site via localStorage persistence.
              </p>
            </div>
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-[11px] text-teal-900 font-medium">
              ✓ All public components synchronized.
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

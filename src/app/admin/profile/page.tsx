"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { getStoredProfile, saveStoredProfile } from "@/lib/contentStore";
import { DoctorProfile } from "@/types/content";

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<DoctorProfile>(() => getStoredProfile());
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.name || !profile.profession || !profile.location) {
      setErrorMsg("Name, profession, and location are required fields.");
      return;
    }
    setErrorMsg("");
    saveStoredProfile(profile);
    setSuccessMsg("Verified profile successfully updated! Changes propagated to public site.");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <AdminLayout title="Verified Profile">
      <div className="max-w-4xl space-y-6">
        {/* Boundary Notice */}
        <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs space-y-1">
          <p className="font-semibold">Verified Identity Boundary Notice:</p>
          <p>
            Per project constraints, the verified core facts are strictly restricted to Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata. Do not add unverified institutional affiliations, academic degrees, awards, or clinical credentials.
          </p>
        </div>

        {successMsg && (
          <div className="p-4 bg-teal-50 border border-teal-200 text-teal-900 rounded-xl text-xs font-medium">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            Verified Doctor Facts & Profile Content
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Profession <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.profession}
                onChange={(e) => setProfile({ ...profile, profession: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Location <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tagline
            </label>
            <input
              type="text"
              value={profile.tagline}
              onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Short Biography
            </label>
            <textarea
              rows={3}
              value={profile.shortBio}
              onChange={(e) => setProfile({ ...profile, shortBio: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              About Quote
            </label>
            <textarea
              rows={2}
              value={profile.aboutQuote}
              onChange={(e) => setProfile({ ...profile, aboutQuote: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
            />
          </div>

          <h4 className="text-md font-bold text-slate-900 border-t border-slate-100 pt-4">
            Contact Details (Footer & Contact Section)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label>
              <input
                type="text"
                value={profile.demoContact.phone}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    demoContact: { ...profile.demoContact, phone: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
              <input
                type="text"
                value={profile.demoContact.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    demoContact: { ...profile.demoContact, email: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Address / Kolkata Office</label>
              <input
                type="text"
                value={profile.demoContact.address}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    demoContact: { ...profile.demoContact, address: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
            >
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

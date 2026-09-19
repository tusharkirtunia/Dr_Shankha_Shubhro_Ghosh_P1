"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  getTestimonialItems, 
  saveTestimonialItem, 
  deleteTestimonialItem 
} from "@/lib/contentStore";
import { TestimonialItem } from "@/types/content";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => getTestimonialItems());
  const [editingItem, setEditingItem] = useState<TestimonialItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleUpdate = () => setTestimonials(getTestimonialItems());
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const handleNew = () => {
    setEditingItem({
      id: `test-${Date.now()}`,
      text: "",
      attribution: "Referring Clinician, Kolkata (Demo Attribution)",
      status: "published",
    });
    setIsCreating(true);
    setErrorMsg("");
  };

  const handleEdit = (item: TestimonialItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
    setErrorMsg("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    if (!editingItem.text.trim() || !editingItem.attribution.trim()) {
      setErrorMsg("Testimonial text and attribution are required fields.");
      return;
    }
    setErrorMsg("");
    saveTestimonialItem(editingItem);
    setSuccessMsg(isCreating ? "Testimonial created successfully." : "Testimonial updated successfully.");
    setEditingItem(null);
    setIsCreating(false);
    setTestimonials(getTestimonialItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      deleteTestimonialItem(id);
      setSuccessMsg("Testimonial deleted.");
      setTestimonials(getTestimonialItems());
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  const handleTogglePublish = (item: TestimonialItem) => {
    const isPub = item.status === "published";
    const newStatus = isPub ? "draft" : "published";
    const updated = { ...item, status: newStatus };
    saveTestimonialItem(updated);
    setSuccessMsg(`Testimonial status changed to: ${newStatus}`);
    setTestimonials(getTestimonialItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <AdminLayout title="Testimonials">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Professional Trust Quotes & Testimonials</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage colleague and referring clinician reviews. Published testimonials appear in the public section.
            </p>
          </div>
          <button
            onClick={handleNew}
            className="px-4 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
          >
            + Add Testimonial
          </button>
        </div>

        {successMsg && (
          <div className="p-4 bg-teal-50 border border-teal-200 text-teal-900 rounded-xl text-xs font-medium">
            {successMsg}
          </div>
        )}

        {editingItem && (
          <div className="bg-white rounded-2xl border border-teal-300 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-md">
                {isCreating ? "Create Testimonial" : "Edit Testimonial"}
              </h4>
              <button onClick={() => setEditingItem(null)} className="text-xs text-slate-500 hover:text-slate-900">
                ✕ Cancel
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs mb-4">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Testimonial Quote / Text <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.text}
                  onChange={(e) => setEditingItem({ ...editingItem, text: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attribution / Author <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.attribution}
                    onChange={(e) => setEditingItem({ ...editingItem, attribution: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={editingItem.status}
                    onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden bg-white"
                  >
                    <option value="published">Published (Public)</option>
                    <option value="draft">Draft (Private)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
                >
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">All Testimonials ({testimonials.length})</h4>
            <span className="text-xs text-slate-500">Public sync: Active</span>
          </div>

          {testimonials.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-500 mb-2">No testimonials found.</p>
              <button onClick={handleNew} className="text-xs font-semibold text-teal-800 hover:underline">
                Create your first testimonial →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {testimonials.map((item) => {
                const isPub = item.status === "published";
                return (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          isPub ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-slate-800 italic">“{item.text}”</p>
                      <p className="text-xs text-slate-500 font-semibold">— {item.attribution}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => handleTogglePublish(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                          isPub
                            ? "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200"
                            : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
                        }`}
                      >
                        {isPub ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

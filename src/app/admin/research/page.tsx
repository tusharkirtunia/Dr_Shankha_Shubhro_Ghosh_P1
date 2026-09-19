"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  getResearchItems, 
  saveResearchItem, 
  deleteResearchItem 
} from "@/lib/contentStore";
import { ResearchItem } from "@/types/content";

export default function AdminResearchPage() {
  const [researchList, setResearchList] = useState<ResearchItem[]>(() => getResearchItems());
  const [editingItem, setEditingItem] = useState<ResearchItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleUpdate = () => setResearchList(getResearchItems());
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const handleNew = () => {
    setEditingItem({
      id: `res-${Date.now()}`,
      title: "",
      authors: ["Dr. Shankha Shubhro Ghosh"],
      journal: "Journal of Clinical Radiology & Diagnostic Imaging (Demo)",
      date: "2026 (Demo)",
      abstract: "",
      researchArea: "Cross-Sectional Imaging",
      doi: "10.1000/demo.doi.2026.new",
      externalUrl: "#",
      pdfUrl: "#",
      status: "Published (Demo)",
    });
    setIsCreating(true);
    setErrorMsg("");
  };

  const handleEdit = (item: ResearchItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
    setErrorMsg("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    if (!editingItem.title.trim() || !editingItem.abstract.trim()) {
      setErrorMsg("Title and abstract are required fields.");
      return;
    }
    setErrorMsg("");
    saveResearchItem(editingItem);
    setSuccessMsg(isCreating ? "Research paper created successfully." : "Research paper updated successfully.");
    setEditingItem(null);
    setIsCreating(false);
    setResearchList(getResearchItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this research item?")) {
      deleteResearchItem(id);
      setSuccessMsg("Research item deleted.");
      setResearchList(getResearchItems());
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  const handleTogglePublish = (item: ResearchItem) => {
    const isPublished = item.status.toLowerCase().includes("pub");
    const newStatus = isPublished ? "Draft (Demo)" : "Published (Demo)";
    const updated = { ...item, status: newStatus };
    saveResearchItem(updated);
    setSuccessMsg(`Research status changed to: ${newStatus}`);
    setResearchList(getResearchItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <AdminLayout title="Research Management">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Research Publications & Preprints</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Create, edit, draft, and publish academic research items appearing on the public site.
            </p>
          </div>
          <button
            onClick={handleNew}
            className="px-4 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
          >
            + Add New Research
          </button>
        </div>

        {successMsg && (
          <div className="p-4 bg-teal-50 border border-teal-200 text-teal-900 rounded-xl text-xs font-medium">
            {successMsg}
          </div>
        )}

        {/* Create / Edit Modal / Form */}
        {editingItem && (
          <div className="bg-white rounded-2xl border border-teal-300 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-md">
                {isCreating ? "Create New Research Item" : "Edit Research Item"}
              </h4>
              <button
                onClick={() => setEditingItem(null)}
                className="text-xs text-slate-500 hover:text-slate-900"
              >
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
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Authors (comma separated)
                  </label>
                  <input
                    type="text"
                    value={editingItem.authors.join(", ")}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        authors: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Journal</label>
                  <input
                    type="text"
                    value={editingItem.journal}
                    onChange={(e) => setEditingItem({ ...editingItem, journal: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Research Area</label>
                  <input
                    type="text"
                    value={editingItem.researchArea}
                    onChange={(e) => setEditingItem({ ...editingItem, researchArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date / Year</label>
                  <input
                    type="text"
                    value={editingItem.date}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
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
                    <option value="Published (Demo)">Published (Demo)</option>
                    <option value="In Review (Demo)">In Review (Demo)</option>
                    <option value="Draft (Demo)">Draft (Demo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Abstract <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.abstract}
                  onChange={(e) => setEditingItem({ ...editingItem, abstract: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">DOI</label>
                  <input
                    type="text"
                    value={editingItem.doi}
                    onChange={(e) => setEditingItem({ ...editingItem, doi: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">External URL</label>
                  <input
                    type="text"
                    value={editingItem.externalUrl}
                    onChange={(e) => setEditingItem({ ...editingItem, externalUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">PDF URL</label>
                  <input
                    type="text"
                    value={editingItem.pdfUrl || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, pdfUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden font-mono text-xs"
                  />
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
                  Save Research Item
                </button>
              </div>
            </form>
          </div>
        )}

        {/* List of Research Items */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">All Research Items ({researchList.length})</h4>
            <span className="text-xs text-slate-500">Public sync: Active</span>
          </div>

          {researchList.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-500 mb-2">No research items found.</p>
              <button
                onClick={handleNew}
                className="text-xs font-semibold text-teal-800 hover:underline"
              >
                Create your first research item →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {researchList.map((item) => {
                const isPub = item.status.toLowerCase().includes("pub");
                return (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/60">
                          {item.researchArea}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          isPub ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs text-slate-500 italic">{item.journal} • Authors: {item.authors.join(", ")}</p>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1">{item.abstract}</p>
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
                        {isPub ? "Unpublish / Draft" : "Publish"}
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

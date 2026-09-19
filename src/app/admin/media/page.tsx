"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  getMediaAssets, 
  saveMediaAsset, 
  deleteMediaAsset 
} from "@/lib/contentStore";
import { MediaAsset } from "@/types/content";

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<MediaAsset[]>(() => getMediaAssets());
  const [editingItem, setEditingItem] = useState<MediaAsset | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleUpdate = () => setMediaList(getMediaAssets());
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const handleNew = () => {
    setEditingItem({
      id: `media-${Date.now()}`,
      type: "image",
      url: "#",
      alt: "Diagnostic Imaging Asset (Demo)",
      caption: "Placeholder asset representation.",
    });
    setIsCreating(true);
    setErrorMsg("");
  };

  const handleEdit = (item: MediaAsset) => {
    setEditingItem({ ...item });
    setIsCreating(false);
    setErrorMsg("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    if (!editingItem.alt.trim()) {
      setErrorMsg("Alternative text (alt) is required.");
      return;
    }
    setErrorMsg("");
    saveMediaAsset(editingItem);
    setSuccessMsg(isCreating ? "Media asset added." : "Media asset updated.");
    setEditingItem(null);
    setIsCreating(false);
    setMediaList(getMediaAssets());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this media asset?")) {
      deleteMediaAsset(id);
      setSuccessMsg("Media asset deleted.");
      setMediaList(getMediaAssets());
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  return (
    <AdminLayout title="Media Assets">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Minimal Media Asset Model</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Practical management for imaging modality assets and document links (Minimal prototype surface).
            </p>
          </div>
          <button
            onClick={handleNew}
            className="px-4 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
          >
            + Add Media Asset
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
                {isCreating ? "Add Media Asset" : "Edit Media Asset"}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Asset Type</label>
                  <select
                    value={editingItem.type}
                    onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value as "image" | "document" | "icon" })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden bg-white"
                  >
                    <option value="image">Image</option>
                    <option value="document">Document</option>
                    <option value="icon">Icon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">URL / Source</label>
                  <input
                    type="text"
                    value={editingItem.url}
                    onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alternative Text (Alt) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.alt}
                  onChange={(e) => setEditingItem({ ...editingItem, alt: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Caption</label>
                <input
                  type="text"
                  value={editingItem.caption || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, caption: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
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
                  Save Asset
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Media Assets ({mediaList.length})</h4>
            <span className="text-xs text-slate-500">Minimal repository</span>
          </div>

          {mediaList.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-500 mb-2">No media assets found.</p>
              <button onClick={handleNew} className="text-xs font-semibold text-teal-800 hover:underline">
                Add your first media asset →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {mediaList.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/60 font-mono">
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{item.id}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.alt}</h4>
                    {item.caption && <p className="text-xs text-slate-500">{item.caption}</p>}
                  </div>

                  <div className="flex items-center gap-2">
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
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

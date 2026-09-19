"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  getDomainNewsItems, 
  saveDomainNewsItem, 
  deleteDomainNewsItem 
} from "@/lib/contentStore";
import { DomainNewsItem } from "@/types/content";

export default function AdminNewsPage() {
  const [newsList, setNewsList] = useState<DomainNewsItem[]>(() => getDomainNewsItems());
  const [editingItem, setEditingItem] = useState<DomainNewsItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleUpdate = () => setNewsList(getDomainNewsItems());
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => window.removeEventListener("contentStoreUpdated", handleUpdate);
  }, []);

  const handleNew = () => {
    setEditingItem({
      id: `news-${Date.now()}`,
      title: "",
      summary: "",
      source: "Radiology Industry Bulletin (Demo Source)",
      sourceUrl: "#",
      date: "March 2026",
      category: "Radiology Standards",
      status: "External News",
    });
    setIsCreating(true);
    setErrorMsg("");
  };

  const handleEdit = (item: DomainNewsItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
    setErrorMsg("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    if (!editingItem.title.trim() || !editingItem.summary.trim()) {
      setErrorMsg("Title and summary are required fields.");
      return;
    }
    setErrorMsg("");
    saveDomainNewsItem(editingItem);
    setSuccessMsg(isCreating ? "Domain news item created successfully." : "Domain news item updated successfully.");
    setEditingItem(null);
    setIsCreating(false);
    setNewsList(getDomainNewsItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      deleteDomainNewsItem(id);
      setSuccessMsg("News item deleted.");
      setNewsList(getDomainNewsItems());
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  const handleTogglePublish = (item: DomainNewsItem) => {
    const isPub = item.status.toLowerCase().includes("pub") || item.status === "External News";
    const newStatus = isPub ? "Draft" : "External News";
    const updated = { ...item, status: newStatus };
    saveDomainNewsItem(updated);
    setSuccessMsg(`News status changed to: ${newStatus}`);
    setNewsList(getDomainNewsItems());
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <AdminLayout title="Domain News">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-slate-900">External Domain News</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage curated industry updates and radiology domain bulletins.
            </p>
          </div>
          <button
            onClick={handleNew}
            className="px-4 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
          >
            + Add Domain News
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
                {isCreating ? "Create Domain News Item" : "Edit Domain News Item"}
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Source Name</label>
                  <input
                    type="text"
                    value={editingItem.source}
                    onChange={(e) => setEditingItem({ ...editingItem, source: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
                  <input
                    type="text"
                    value={editingItem.date}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Summary <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingItem.summary}
                  onChange={(e) => setEditingItem({ ...editingItem, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Source URL</label>
                  <input
                    type="text"
                    value={editingItem.sourceUrl}
                    onChange={(e) => setEditingItem({ ...editingItem, sourceUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={editingItem.status}
                    onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden bg-white"
                  >
                    <option value="External News">External News (Published)</option>
                    <option value="Draft">Draft (Private)</option>
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
                  Save News Item
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">All Domain News ({newsList.length})</h4>
            <span className="text-xs text-slate-500">Public sync: Active</span>
          </div>

          {newsList.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-500 mb-2">No news items found.</p>
              <button onClick={handleNew} className="text-xs font-semibold text-teal-800 hover:underline">
                Create your first news item →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {newsList.map((item) => {
                const isPub = item.status.toLowerCase().includes("pub") || item.status === "External News";
                return (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/60">
                          {item.category}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          isPub ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs text-slate-500 italic">Source: {item.source}</p>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.summary}</p>
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

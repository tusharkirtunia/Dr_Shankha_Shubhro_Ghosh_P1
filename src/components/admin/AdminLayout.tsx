"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  isAdminAuthenticated, 
  setAdminAuthenticated, 
  getStoredProfile 
} from "@/lib/contentStore";
import { DoctorProfile } from "@/types/content";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState<DoctorProfile>(() => getStoredProfile());

  useEffect(() => {
    const isAuth = isAdminAuthenticated();
    if (!isAuth && pathname !== "/admin/login") {
      router.push("/admin/login");
    }

    const handleUpdate = () => {
      setProfile(getStoredProfile());
    };
    window.addEventListener("contentStoreUpdated", handleUpdate);
    return () => {
      window.removeEventListener("contentStoreUpdated", handleUpdate);
    };
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-slate-900">{children}</div>;
  }

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
    { label: "Verified Profile", href: "/admin/profile", icon: "👤" },
    { label: "Research Papers", href: "/admin/research", icon: "🔬" },
    { label: "Articles / Perspectives", href: "/admin/articles", icon: "📝" },
    { label: "Domain News", href: "/admin/news", icon: "📰" },
    { label: "Testimonials", href: "/admin/testimonials", icon: "💬" },
    { label: "Media Assets", href: "/admin/media", icon: "📁" },
  ];

  const handleLogout = () => {
    setAdminAuthenticated(false);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-teal-950 text-white px-4 py-3 flex items-center justify-between border-b border-teal-900">
        <div className="flex items-center gap-2">
          <span className="text-teal-400 font-bold">Dr. Ghosh Admin</span>
          <span className="text-[10px] bg-teal-800 text-teal-200 px-2 py-0.5 rounded font-mono">Demo</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-teal-200 hover:bg-teal-900 focus:outline-hidden focus:ring-2 focus:ring-teal-400"
          aria-label="Toggle admin menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-teal-950 text-white flex flex-col justify-between transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Brand / Title */}
          <div className="p-6 border-b border-teal-900/80">
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-bold text-lg text-white tracking-tight">Admin Management</h1>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Demo Mode
              </span>
            </div>
            <p className="text-xs text-teal-300/80 mt-1 truncate">
              {profile?.name || "Dr. Shankha Shubhro Ghosh"}
            </p>
            <p className="text-[11px] text-teal-400/60">
              {profile?.profession} • {profile?.location}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 py-6 space-y-1.5">
            <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-teal-400/60">
              Content Management
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-teal-800 text-white shadow-xs"
                      : "text-teal-100 hover:bg-teal-900/60 hover:text-white"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer & Public Link */}
        <div className="p-4 border-t border-teal-900/80 space-y-3 bg-teal-950/80">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium bg-teal-900/50 text-teal-200 hover:bg-teal-900 hover:text-white transition-colors"
          >
            <span>View Public Website</span>
            <span>↗</span>
          </Link>
          <div className="flex items-center justify-between pt-2 text-xs text-teal-400/60 px-1">
            <span>Demo Persistence</span>
            <button
              onClick={handleLogout}
              className="text-amber-400 hover:underline font-medium"
            >
              Exit Session
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <span className="text-xs bg-teal-50 text-teal-800 px-2 py-0.5 rounded-full border border-teal-200/60 font-medium">
                Centralized Content Layer
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Admin-managed updates propagate directly to the public website prototype.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-800">Admin User (Demo)</p>
              <p className="text-[11px] text-slate-500">Local Mock Session</p>
            </div>
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200 hover:bg-teal-100 transition-colors"
            >
              View Public Site ↗
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

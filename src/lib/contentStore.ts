import { doctorProfile as initialDoctorProfile } from "@/data/doctorData";
import { DoctorProfile, ResearchItem, PerspectiveItem, DomainNewsItem, TestimonialItem, MediaAsset } from "@/types/content";

const STORAGE_KEY = "dr_ghosh_admin_content_v1";
const ADMIN_AUTH_KEY = "dr_ghosh_admin_auth_v1";

export function getStoredProfile(): DoctorProfile {
  if (typeof window === "undefined") {
    return initialDoctorProfile;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initialDoctorProfile;
    }
    const parsed = JSON.parse(raw);
    return { ...initialDoctorProfile, ...parsed };
  } catch (e) {
    console.error("Failed to load stored profile:", e);
    return initialDoctorProfile;
  }
}

export function saveStoredProfile(profile: DoctorProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new Event("contentStoreUpdated"));
  } catch (e) {
    console.error("Failed to save stored profile:", e);
  }
}

export function resetStoredProfile(): DoctorProfile {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("contentStoreUpdated"));
  }
  return initialDoctorProfile;
}

// Auth helpers for demo admin
export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function setAdminAuthenticated(val: boolean): void {
  if (typeof window === "undefined") return;
  if (val) {
    localStorage.setItem(ADMIN_AUTH_KEY, "true");
  } else {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  }
}

// Research CRUD
export function getResearchItems(): ResearchItem[] {
  return getStoredProfile().research;
}

export function saveResearchItem(item: ResearchItem): void {
  const profile = getStoredProfile();
  const index = profile.research.findIndex((r) => r.id === item.id);
  let updatedResearch: ResearchItem[];
  if (index >= 0) {
    updatedResearch = [...profile.research];
    updatedResearch[index] = item;
  } else {
    updatedResearch = [item, ...profile.research];
  }
  saveStoredProfile({ ...profile, research: updatedResearch });
}

export function deleteResearchItem(id: string): void {
  const profile = getStoredProfile();
  const updatedResearch = profile.research.filter((r) => r.id !== id);
  saveStoredProfile({ ...profile, research: updatedResearch });
}

// Perspectives / Articles CRUD
export function getPerspectiveItems(): PerspectiveItem[] {
  return getStoredProfile().perspectives;
}

export function savePerspectiveItem(item: PerspectiveItem): void {
  const profile = getStoredProfile();
  const index = profile.perspectives.findIndex((p) => p.id === item.id);
  let updatedPerspectives: PerspectiveItem[];
  if (index >= 0) {
    updatedPerspectives = [...profile.perspectives];
    updatedPerspectives[index] = item;
  } else {
    updatedPerspectives = [item, ...profile.perspectives];
  }
  saveStoredProfile({ ...profile, perspectives: updatedPerspectives });
}

export function deletePerspectiveItem(id: string): void {
  const profile = getStoredProfile();
  const updatedPerspectives = profile.perspectives.filter((p) => p.id !== id);
  saveStoredProfile({ ...profile, perspectives: updatedPerspectives });
}

// Domain News CRUD
export function getDomainNewsItems(): DomainNewsItem[] {
  return getStoredProfile().domainNews;
}

export function saveDomainNewsItem(item: DomainNewsItem): void {
  const profile = getStoredProfile();
  const index = profile.domainNews.findIndex((n) => n.id === item.id);
  let updatedNews: DomainNewsItem[];
  if (index >= 0) {
    updatedNews = [...profile.domainNews];
    updatedNews[index] = item;
  } else {
    updatedNews = [item, ...profile.domainNews];
  }
  saveStoredProfile({ ...profile, domainNews: updatedNews });
}

export function deleteDomainNewsItem(id: string): void {
  const profile = getStoredProfile();
  const updatedNews = profile.domainNews.filter((n) => n.id !== id);
  saveStoredProfile({ ...profile, domainNews: updatedNews });
}

// Testimonials CRUD
export function getTestimonialItems(): TestimonialItem[] {
  return getStoredProfile().testimonials;
}

export function saveTestimonialItem(item: TestimonialItem): void {
  const profile = getStoredProfile();
  const index = profile.testimonials.findIndex((t) => t.id === item.id);
  let updatedTestimonials: TestimonialItem[];
  if (index >= 0) {
    updatedTestimonials = [...profile.testimonials];
    updatedTestimonials[index] = item;
  } else {
    updatedTestimonials = [item, ...profile.testimonials];
  }
  saveStoredProfile({ ...profile, testimonials: updatedTestimonials });
}

export function deleteTestimonialItem(id: string): void {
  const profile = getStoredProfile();
  const updatedTestimonials = profile.testimonials.filter((t) => t.id !== id);
  saveStoredProfile({ ...profile, testimonials: updatedTestimonials });
}

// Media Assets CRUD
export function getMediaAssets(): MediaAsset[] {
  return getStoredProfile().mediaAssets;
}

export function saveMediaAsset(item: MediaAsset): void {
  const profile = getStoredProfile();
  const index = profile.mediaAssets.findIndex((m) => m.id === item.id);
  let updatedMedia: MediaAsset[];
  if (index >= 0) {
    updatedMedia = [...profile.mediaAssets];
    updatedMedia[index] = item;
  } else {
    updatedMedia = [item, ...profile.mediaAssets];
  }
  saveStoredProfile({ ...profile, mediaAssets: updatedMedia });
}

export function deleteMediaAsset(id: string): void {
  const profile = getStoredProfile();
  const updatedMedia = profile.mediaAssets.filter((m) => m.id !== id);
  saveStoredProfile({ ...profile, mediaAssets: updatedMedia });
}

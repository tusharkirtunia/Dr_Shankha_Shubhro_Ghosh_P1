export interface VerifiedDoctorFacts {
  name: string;
  profession: string;
  location: string;
}

export interface MediaAsset {
  id: string;
  type: "image" | "document" | "icon";
  url: string;
  alt: string;
  caption?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  authors: string[];
  journal: string; // publication/journal
  date: string;
  abstract: string;
  researchArea: string; // research area
  doi: string;
  externalUrl: string;
  pdfUrl?: string; // optional PDF/link
  status: string;
}

export interface PerspectiveItem {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  coverImage?: string;
  publicationDate: string;
  status: "draft" | "published";
}

export interface DomainNewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: string;
  status: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  attribution: string;
  image?: string;
  status: string;
}

export interface DemoService {
  id: string;
  title: string;
  category: string;
  description: string;
  iconType: "ct" | "mri" | "ultrasound" | "xray" | "consultation" | "intervention";
}

export interface DemoArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

export interface DemoTeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatarColor: string;
}

export interface DemoTestimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  rating: number;
  content: string;
}

export interface DemoFeature {
  id: string;
  title: string;
  description: string;
  iconType: "accuracy" | "communication" | "collaboration" | "standards";
}

export interface DemoTimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
}

export interface DemoFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface DemoContact {
  phone: string;
  email: string;
  address: string;
}

export interface DoctorProfile extends VerifiedDoctorFacts {
  tagline: string;
  shortBio: string;
  aboutQuote: string;
  demoServices: DemoService[];
  demoArticles: DemoArticle[];
  demoTeam: DemoTeamMember[];
  demoTestimonials: DemoTestimonial[];
  demoFeatures: DemoFeature[];
  demoTimeline: DemoTimelineItem[];
  demoFAQs: DemoFAQ[];
  demoContact: DemoContact;
  research: ResearchItem[];
  perspectives: PerspectiveItem[];
  domainNews: DomainNewsItem[];
  testimonials: TestimonialItem[];
  mediaAssets: MediaAsset[];
}

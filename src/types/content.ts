export interface VerifiedDoctorFacts {
  name: string;
  profession: string;
  location: string;
}

export interface DemoService {
  id: string;
  title: string;
  category: string;
  description: string;
  iconType: "ct" | "mri" | "ultrasound" | "xray" | "consultation" | "intervention";
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

export interface DemoArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
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
  demoFeatures: DemoFeature[];
  demoTimeline: DemoTimelineItem[];
  demoTeam: DemoTeamMember[];
  demoTestimonials: DemoTestimonial[];
  demoArticles: DemoArticle[];
  demoFAQs: DemoFAQ[];
  demoContact: DemoContact;
}

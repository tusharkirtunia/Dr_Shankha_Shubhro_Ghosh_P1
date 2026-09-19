import { VerifiedDoctorFacts, DoctorProfile } from "@/types/content";

/**
 * PROJECT FACTS CONSTRAINT:
 * The only verified real client facts are:
 * - Name: Dr. Shankha Shubhro Ghosh
 * - Profession: Radiologist
 * - Location: Kolkata
 *
 * Everything else below is demonstrative/placeholder content
 * intended for prototype visual structure and layout fidelity.
 */

export const verifiedDoctorFacts: VerifiedDoctorFacts = {
  name: "Dr. Shankha Shubhro Ghosh",
  profession: "Radiologist",
  location: "Kolkata",
};

export const doctorProfile: DoctorProfile = {
  ...verifiedDoctorFacts,

  tagline: "Dedicated to Excellence in Diagnostic Radiology",
  shortBio:
    "Providing patient-focused medical imaging interpretation and diagnostic radiology consultations in Kolkata. Focused on precise scan reviews and clear communication with referring medical professionals.",
  aboutQuote:
    "Accurate diagnostic imaging is the foundation of timely and effective medical treatment, guiding clinical decisions with clarity and precision.",

  demoServices: [
    {
      id: "computed-tomography",
      title: "Computed Tomography (CT)",
      category: "Cross-Sectional Imaging",
      description:
        "Comprehensive CT scan evaluation for thoracic, abdominal, musculoskeletal, and neurological diagnostics (Demo Category).",
      iconType: "ct",
    },
    {
      id: "magnetic-resonance",
      title: "Magnetic Resonance Imaging (MRI)",
      category: "High-Resolution Scans",
      description:
        "Detailed MRI interpretations focusing on neuroimaging, spine, soft-tissue, and musculoskeletal examinations (Demo Category).",
      iconType: "mri",
    },
    {
      id: "ultrasonography",
      title: "Diagnostic Ultrasound",
      category: "Non-Invasive Imaging",
      description:
        "High-resolution ultrasound reporting for abdominal, vascular, thyroid, and small-parts examinations (Demo Category).",
      iconType: "ultrasound",
    },
    {
      id: "digital-radiography",
      title: "Digital Radiography (X-Ray)",
      category: "General Radiology",
      description:
        "Systematic plain radiograph analysis for skeletal, pulmonary, and general clinical assessments (Demo Category).",
      iconType: "xray",
    },
    {
      id: "second-opinion",
      title: "Imaging Consultation & Review",
      category: "Clinical Reporting",
      description:
        "Expert secondary reviews and detailed radiologic case consultations for patients and clinicians (Demo Category).",
      iconType: "consultation",
    },
    {
      id: "interventional-guidance",
      title: "Image-Guided Consultation",
      category: "Specialized Radiology",
      description:
        "Consultative planning for diagnostic image-guided procedures and clinical pathway reviews (Demo Category).",
      iconType: "intervention",
    },
  ],

  demoArticles: [
    {
      id: "article-1",
      title: "Understanding Diagnostic Imaging: A Patient Guide",
      category: "Patient Education",
      date: "Demo Date • 2026",
      readTime: "4 min read",
      summary:
        "An overview of common medical imaging modalities—such as CT, MRI, and Ultrasound—and how they help physicians pinpoint diagnoses accurately.",
    },
    {
      id: "article-2",
      title: "How to Prepare for a Medical Imaging Scan",
      category: "Clinical Preparation",
      date: "Demo Date • 2026",
      readTime: "5 min read",
      summary:
        "Essential patient guidelines regarding fasting, prior medical records, and clothing when attending diagnostic radiological examinations.",
    },
    {
      id: "article-3",
      title: "The Importance of Second-Opinion Imaging Reviews",
      category: "Diagnostic Insights",
      date: "Demo Date • 2026",
      readTime: "3 min read",
      summary:
        "Why expert radiological secondary reviews provide peace of mind and clarity for complex diagnostic cases and surgical planning.",
    },
  ],

  demoTeam: [
    {
      id: "team-1",
      name: "Demo Specialist A",
      role: "Diagnostic Imaging Associate",
      specialty: "Cross-Sectional CT/MRI (Demo)",
      avatarColor: "from-teal-800 to-teal-950",
    },
    {
      id: "team-2",
      name: "Demo Specialist B",
      role: "Ultrasonography Associate",
      specialty: "Diagnostic Ultrasound (Demo)",
      avatarColor: "from-slate-800 to-slate-950",
    },
    {
      id: "team-3",
      name: "Demo Specialist C",
      role: "Clinical Radiology Fellow",
      specialty: "Radiographic Review (Demo)",
      avatarColor: "from-teal-900 to-slate-900",
    },
  ],

  demoTestimonials: [
    {
      id: "test-demo-1",
      author: "Demo Patient A",
      location: "Kolkata",
      role: "Diagnostic Imaging Patient",
      rating: 5,
      content:
        "The diagnostic review was conducted with clarity and efficiency. The findings were documented in a structured report that my treating physician found very helpful. (Demo Feedback)",
    },
    {
      id: "test-demo-2",
      author: "Referring Physician (Demo)",
      location: "Kolkata",
      role: "Consultant Physician",
      rating: 5,
      content:
        "Dr. Ghosh provides clear, timely, and detailed radiological impressions that significantly support our clinical decision-making. (Demo Feedback)",
    },
    {
      id: "test-demo-3",
      author: "Demo Patient B",
      location: "West Bengal",
      role: "Ultrasound & CT Review",
      rating: 5,
      content:
        "Professional and prompt diagnostic consultation. Clear communication regarding what the imaging procedures entailed. (Demo Feedback)",
    },
  ],

  demoFeatures: [
    {
      id: "precision-imaging",
      title: "Diagnostic Precision",
      description:
        "Meticulous analysis of cross-sectional and conventional imaging modalities following established clinical standards.",
      iconType: "accuracy",
    },
    {
      id: "clear-reporting",
      title: "Clear Clinical Reports",
      description:
        "Structured, legible radiology reports structured to assist physicians and inform patients effectively.",
      iconType: "communication",
    },
    {
      id: "collaborative-care",
      title: "Physician Collaboration",
      description:
        "Close consultative coordination with treating physicians and surgeons across Kolkata medical centers.",
      iconType: "collaboration",
    },
    {
      id: "modern-protocols",
      title: "Quality Diagnostic Focus",
      description:
        "Adherence to evidence-based imaging protocols, radiation safety, and patient-centered diagnostic workflows.",
      iconType: "standards",
    },
  ],

  demoTimeline: [
    {
      id: "timeline-1",
      period: "Milestone 01 (Demo)",
      title: "Clinical Radiology Specialization",
      institution: "Medical Training Institution (To be provided)",
      description:
        "Comprehensive postgraduate residency and specialized clinical training in diagnostic medical imaging.",
    },
    {
      id: "timeline-2",
      period: "Milestone 02 (Demo)",
      title: "Cross-Sectional Imaging Practice",
      institution: "Diagnostic Imaging Center (To be provided)",
      description:
        "Advanced clinical rotations in CT, MRI, and ultrasonography diagnostic reporting workflows.",
    },
    {
      id: "timeline-3",
      period: "Milestone 03 (Demo)",
      title: "Consultative Diagnostic Practice",
      institution: "Clinical Radiology Center, Kolkata",
      description:
        "Practicing diagnostic radiologist offering structured scan interpretations and physician consultations in Kolkata.",
    },
  ],

  demoFAQs: [
    {
      id: "faq-1",
      question: "What should I bring to an imaging consultation?",
      answer:
        "Patients should typically bring previous scan films/discs, previous radiology reports, referral notes from their physician, and relevant clinical history documents. (Demo Information)",
    },
    {
      id: "faq-2",
      question: "How are diagnostic reports communicated?",
      answer:
        "Radiology reports are structured electronically and shared with referring doctors and patients, summarizing primary findings, comparative notes, and impressions. (Demo Information)",
    },
    {
      id: "faq-3",
      question: "What is the role of a Diagnostic Radiologist?",
      answer:
        "A radiologist is a specialized medical doctor who interprets medical imaging scans (such as X-rays, CT, MRI, and Ultrasound) to diagnose conditions and guide treatment. (Demo Information)",
    },
    {
      id: "faq-4",
      question: "Can I schedule a scan consultation or review?",
      answer:
        "Yes, consultation inquiries and second-opinion imaging reviews can be requested via the appointment and contact options available on this prototype. (Demo Information)",
    },
  ],

  demoContact: {
    phone: "+91 00000 00000 (Placeholder)",
    email: "contact@example.com (Placeholder)",
    address: "Diagnostic Center / Clinic Address, Kolkata",
  },

  research: [
    {
      id: "res-1",
      title: "Standardized Reporting Metrics in Cross-Sectional CT & MRI: A Retrospective Evaluation (Demo)",
      authors: ["Dr. Shankha Shubhro Ghosh", "Department Research Group (Demo)"],
      journal: "Journal of Clinical Radiology & Diagnostic Imaging (Demo)",
      date: "2025 (Demo)",
      abstract: "An evaluation of structured diagnostic reporting frameworks in cross-sectional CT and MRI examinations to enhance clarity for referring physicians. (Demo Placeholder Content)",
      researchArea: "Cross-Sectional Imaging & Reporting Standards",
      doi: "10.1000/demo.doi.2025.01",
      externalUrl: "#",
      pdfUrl: "#",
      status: "Published (Demo)",
    },
    {
      id: "res-2",
      title: "Optimizing Diagnostic Protocols in Non-Invasive Ultrasonography (Demo)",
      authors: ["Dr. Shankha Shubhro Ghosh"],
      journal: "Indian Radiological Review (Demo)",
      date: "2024 (Demo)",
      abstract: "Examining workflow efficiencies and scan protocol standards in high-resolution ultrasound imaging across regional clinical settings. (Demo Placeholder Content)",
      researchArea: "Ultrasonography Methodology",
      doi: "10.1000/demo.doi.2024.02",
      externalUrl: "#",
      pdfUrl: "#",
      status: "Published (Demo)",
    },
    {
      id: "res-3",
      title: "Collaborative Tele-Radiology Consultations in Regional Healthcare (Demo)",
      authors: ["Dr. Shankha Shubhro Ghosh", "Clinical Informatics Team (Demo)"],
      journal: "Medical Imaging Practice Forum (Demo)",
      date: "2026 (Demo)",
      abstract: "Exploring secure consultative channels for secondary opinion imaging reviews between diagnostic centers and regional practitioners. (Demo Placeholder Content)",
      researchArea: "Clinical Consultation & Tele-Radiology",
      doi: "10.1000/demo.doi.2026.03",
      externalUrl: "#",
      pdfUrl: "#",
      status: "In Review (Demo)",
    },
  ],

  perspectives: [
    {
      id: "persp-1",
      title: "The Critical Role of Clarity in Radiology Reporting (Demo)",
      excerpt: "Why structured impressions and unambiguous terminology are vital when communicating complex scan findings to treating physicians.",
      body: "In diagnostic radiology, the final report is the primary bridge between raw imaging data and clinical patient care. When reporting cross-sectional scans such as CT or MRI, avoiding ambiguous terminology ensures that referring physicians can immediately assess key findings. This editorial perspective explores best practices in structuring radiology reports for maximum clinical utility. (Demo Perspective)",
      category: "Clinical Communication",
      tags: ["Radiology", "Reporting", "Clinical Practice"],
      publicationDate: "February 2026",
      status: "published",
    },
    {
      id: "persp-2",
      title: "Preparing Patients for Advanced Diagnostic Imaging (Demo)",
      excerpt: "Bridging the information gap so patients feel informed and comfortable before undergoing CT, MRI, or ultrasound examinations.",
      body: "Medical imaging procedures can often cause apprehension for patients unfamiliar with scanner environments. Clear pre-scan preparation guidelines—covering fasting protocols, metallic safety checklists, and scan duration expectations—significantly improve patient comfort and scan quality. (Demo Perspective)",
      category: "Patient Care",
      tags: ["Patient Education", "Diagnostic Prep", "Care Standards"],
      publicationDate: "January 2026",
      status: "published",
    },
    {
      id: "persp-3",
      title: "Unpublished Draft Note on Advanced AI Assistive Tools (Draft Demo)",
      excerpt: "Draft notes on emerging computational aids in radiology workflow management.",
      body: "This is a draft perspective note regarding future assistive technologies in radiology workflows. (Demo Draft - Not Publicly Exposed)",
      category: "Technology",
      tags: ["AI", "Workflow"],
      publicationDate: "March 2026",
      status: "draft",
    },
  ],

  domainNews: [
    {
      id: "news-1",
      title: "Global Updates in Radiation Safety and Protocol Standardization (Demo Source)",
      summary: "International radiological bodies release updated guidelines focusing on dose optimization and patient safety metrics in routine CT imaging.",
      source: "International Radiological Bulletin (Demo Source)",
      sourceUrl: "#",
      date: "March 2026",
      category: "Radiology Standards",
      status: "External News",
    },
    {
      id: "news-2",
      title: "Advancements in High-Resolution MRI Sequences for Neurological Review (Demo Source)",
      summary: "Recent technological briefings highlight improvements in sequence acquisition times and structural resolution for soft-tissue diagnostics.",
      source: "Medical Imaging Association Journal (Demo Source)",
      sourceUrl: "#",
      date: "February 2026",
      category: "Imaging Technology",
      status: "External News",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      text: "Dr. Ghosh's radiological reports are exceptionally structured and rigorous. The clarity of findings consistently supports our surgical and medical decision-making in clinical practice.",
      attribution: "Referring Clinician, Kolkata Medical Center (Demo Attribution)",
      status: "published",
    },
    {
      id: "test-2",
      text: "Professional and methodical approach to diagnostic scan interpretations. The emphasis on clear communication and protocol adherence represents high professional standards.",
      attribution: "Colleague Radiologist, Academic Department (Demo Attribution)",
      status: "published",
    },
    {
      id: "test-3",
      text: "Rigorous attention to detail during second-opinion imaging reviews provides vital peace of mind and clarity for complex diagnostic cases.",
      attribution: "Clinical Colleague & Referring Practitioner (Demo Attribution)",
      status: "published",
    },
  ],

  mediaAssets: [
    {
      id: "media-1",
      type: "icon",
      url: "#",
      alt: "Diagnostic Modality Icon Placeholder",
      caption: "Placeholder asset for imaging modality representation.",
    },
  ],
};

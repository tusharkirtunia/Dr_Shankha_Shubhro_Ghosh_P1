# Redesign Baseline: Clinical Portfolio to Research-Oriented Academic & Lab Hub

## 1. Current State Baseline
- **Application Type**: Clinical frontend portfolio prototype for **Dr. Shankha Shubhro Ghosh**, Radiologist in **Kolkata**.
- **Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Architecture & Structure**:
  - Global Header with sticky glassmorphism and mobile drawer.
  - Hero section with split layout, specialty pill, headline with serif accent, trust badges, and floating booking card.
  - Core Clinical Sections: About Section (metadata grid), 6 Diagnostic Radiology Modalities (CT, MRI, Ultrasound, X-Ray, Second Opinion, Image-Guided Planning), Practice Philosophy Features.
  - Secondary Content: Experience Timeline, Expert Associate Team, Patient Voices Testimonials, Patient Education Articles, and FAQ Accordion.
  - Interactive Forms: Appointment Booking form and General Contact form with client-side validation and simulated demo states.
  - Deep Navy Footer with newsletter subscription demo.
- **Design System**: Plus Jakarta Sans (sans-serif), Playfair Display (serif italic accents), warm medical cream background (`#fbfbf9`), teal primary branding (`#0f766e`), deep navy (`#091522`).

---

## 2. Target State (Research-Oriented Direction)
- **Core Pivot**: Transforming the clinical practice portfolio into an **Academic, Clinical Research, & Imaging Informatics Hub** for Dr. Shankha Shubhro Ghosh, highlighting diagnostic radiology research, AI/informatics applications, clinical trials, academic publications, preprints, research grants, and collaborative laboratory initiatives.
- **Identity Retention**: Strictly preserves verified core facts (Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata) while elevating academic and research contributions.
- **Key Target Features**:
  - Research-focused hero and editorial branding.
  - Structured research publications & preprint repository browser.
  - Clinical trials & imaging AI research modalities.
  - Academic career timeline (research fellowships, grants, conference presentations).
  - Research lab team & academic collaborators roster.
  - Peer citations & academic endorsements in place of patient testimonials.
  - Research inquiry & collaboration partnership form (replacing standard appointment booking).
  - Academic FAQ addressing data access, IRB compliance, and research collaboration.

---

## 3. Section Mapping: Current vs. Target

| Current Section | Action | Target / Transformed Section | Rationale |
| --- | --- | --- | --- |
| **Header** | Keep & Adapt | Sticky header with research-focused navigation links (Research, Publications, Trials, Lab, Collaborations, Contact) | Maintain accessible mobile drawer and branding while updating navigation items for academic audience. |
| **Hero** | Transform | Academic & Research Hero: Focus on diagnostic imaging research, AI informatics, and clinical academic leadership | Pivot value proposition from clinical appointments to research excellence and innovation in radiology. |
| **About Section** | Transform | Academic Profile & Research Focus: Credentials, lab directorship, research interests, and academic affiliations | Highlight scholarly background, research philosophy, and diagnostic imaging methodology. |
| **Services Section** | Transform | Research Areas & Clinical Trials: Imaging AI, Advanced CT/MRI Protocols, Quantitative Radiology, Second Opinion Research | Reframe clinical modalities into active diagnostic research domains and clinical trials. |
| **Trust Features** | Transform | Research Ethics & Governance: IRB compliance, data security, reproducible diagnostic standards, open science | Emphasize research integrity, patient data privacy, and scientific rigor. |
| **Experience Timeline** | Transform | Academic & Research Timeline: Research milestones, fellowships, editorial board service, key grants | Showcase academic progression rather than clinical employment history. |
| **Team Section** | Transform | Research Lab & Collaborators: Post-docs, research radiologic technologists, data scientists, clinical fellows | Represent academic lab structure and research partnerships. |
| **Testimonials Section** | Transform / Replace | Peer Citations & Academic Endorsements: Quotes from research collaborators, symposium chairs, journal reviewers | Shift from patient reviews to professional academic validation. |
| **Articles Section** | Transform | Publications & Preprints Explorer: Peer-reviewed journal papers, conference abstracts, whitepapers, category filters | Provide a robust research publication hub. |
| **FAQ Section** | Transform | Collaboration & Research FAQ: Data sharing protocols, collaborative research inquiries, IRB guidelines | Address academic and institutional partnership queries. |
| **Appointment Section** | Transform | Research Collaboration / Partnership Inquiry Form: Proposal submission, collaborative study sign-up, demo inquiry | Replace patient booking with academic collaboration and consultation request workflow. |
| **Contact Section** | Keep & Adapt | Academic Office & Lab Contact: Department location in Kolkata, institutional email, office hours, map placeholder | Maintain Kolkata location verification while updating contact metadata for lab/office. |
| **Footer** | Keep & Adapt | Academic Footer: Institutional disclaimer, research newsletter, publication feeds, copyright | Match dark navy footer styling with academic link architecture. |

---

## 4. Reusable Components & Data Assets
- **Reusable UI Primitives**:
  - `src/components/ui/Button.tsx` (Pill buttons with focus rings)
  - `src/components/ui/Container.tsx` (Responsive max-width container)
  - `src/components/ui/SectionHeading.tsx` (Heading block with badge and serif accent)
  - `src/components/layout/Header.tsx` & `src/components/layout/Footer.tsx` (Global shells)
- **Data & Types Refactoring**:
  - `src/types/content.ts`: Extend types to support publications (`PublicationItem`), research areas (`ResearchDomain`), lab members (`LabMember`), and collaboration inquiries.
  - `src/data/doctorData.ts`: Replace clinical mock data with structured research mock data while preserving verified client facts (Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata).

---

## 5. Content Risks & Mitigations
- **Risk 1: Unverified Academic Claims**: Introducing fabricated high-impact journal publications, specific academic degrees, or real university affiliations.
  - *Mitigation*: Explicitly tag all publications, research grants, trials, and lab members as demonstrative prototype placeholders with clear UI banners.
- **Risk 2: Medical/Clinical Confusion**: Users confusing the research hub with a live clinical booking portal.
  - *Mitigation*: Prominent disclaimer notices on collaboration forms and footer stating that the site is a research portfolio prototype.

---

## 6. Technical Risks & Mitigations
- **Risk 1: Build Failures & TypeScript Errors**: Schema drift between old clinical data structures and new research data structures.
  - *Mitigation*: Maintain strict TypeScript type definitions in `src/types/content.ts` and run full `npm run build` and `npm run lint` verification at every phase.
- **Risk 2: Responsive Regression**: Layout breakage when replacing card grids with publication list views or lab member grids.
  - *Mitigation*: Rigorously test across 7 viewports (360px, 390px, 430px, 768px, 1024px, 1280px, 1440px) ensuring zero horizontal overflow.

---

## 7. Implementation Plan (Phased Roadmap)
- **Phase R01**: Data Models & Types (`src/types/content.ts`, `src/data/doctorData.ts`) — Define research structures, publications, research areas, and lab data.
- **Phase R02**: Global Shell & Navigation Updates (`src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/data/navigation.ts`).
- **Phase R03**: Core Research Sections (`Hero`, `AboutSection`, `ResearchAreasSection`, `ResearchTimeline`).
- **Phase R04**: Advanced Research Components (`PublicationsSection`, `LabTeamSection`, `PeerEndorsements`, `ResearchFAQ`, `CollaborationForm`).
- **Phase R05**: Verification, Linting, Build Check, and QA Documentation (`docs/QA_CHECKLIST.md`, `docs/AUDIT_REPORT.md`, `docs/BUILD_STATE.md`).

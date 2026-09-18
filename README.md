# Dr. Shankha Shubhro Ghosh — Clinical Portfolio & Diagnostic Radiology Prototype

Official frontend prototype and clinical portfolio for **Dr. Shankha Shubhro Ghosh**, Radiologist based in **Kolkata**, built on Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

---

## Verified Facts Constraint
The only verified real client facts for this prototype are:
- **Name**: Dr. Shankha Shubhro Ghosh
- **Profession**: Radiologist
- **Location**: Kolkata

All clinical services, timeline milestones, team members, testimonials, articles, FAQs, and contact details are demonstrative prototype placeholders and are explicitly marked as demo content in the UI.

---

## Key Features & Architecture
- **Global Shell**: Sticky glassmorphism header with active section tracking (`IntersectionObserver`), accessible mobile drawer, and deep navy footer with demo newsletter subscription.
- **Hero & Visual Composition**: 12-column split layout with specialty pill, heading with italic serif accent, floating inquiry cards, and vector illustration.
- **Core Clinical Sections**: About Section with metadata grid, 6 diagnostic radiology modalities (CT, MRI, Ultrasound, X-Ray, Second Opinion, Image-Guided Planning), and practice philosophy features.
- **Secondary Content Sections**: Experience timeline, expert associate team, patient voices testimonials, patient education articles, and fully accessible interactive FAQ accordion.
- **Interactive Forms**: Appointment booking and general contact forms featuring client-side validation, inline error messaging, simulated loading states, success notices, and explicit demo disclaimers.
- **Accessibility & Responsiveness**: Tested across 360px, 390px, 430px, 768px, 1024px, 1280px, and 1440px viewports with zero horizontal overflow, visible focus rings (`focus-visible:ring-2`), and `prefers-reduced-motion` compliance.

---

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Linting & Typecheck**:
   ```bash
   npm run lint
   ```

---

## Project Documentation
Detailed engineering and QA documentation are available under `docs/`:
- [`PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md)
- [`REFERENCE_AUDIT.md`](docs/REFERENCE_AUDIT.md)
- [`REFERENCE_QA.md`](docs/REFERENCE_QA.md)
- [`DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)
- [`ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`AUDIT_REPORT.md`](docs/AUDIT_REPORT.md)
- [`BUILD_STATE.md`](docs/BUILD_STATE.md)
- [`QA_CHECKLIST.md`](docs/QA_CHECKLIST.md)
- [`CHANGELOG.md`](docs/CHANGELOG.md)

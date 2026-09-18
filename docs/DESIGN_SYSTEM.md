# Design System & Visual Foundation

## 1. Status & Overview

- Phase P02 implemented the design system tokens, typography foundations, container primitives, button and heading primitives, and global shell (Header + Footer).
- Phase P03 implemented the Hero / First-Viewport composition, doctor visual presentation, floating trust elements, and CTA hierarchy.
- Phase P04 implemented the core content sections: About The Specialist (`#about`), Core Diagnostic Services (`#services`), and Trust & Practice Philosophy feature blocks.
- Phase P05 implemented the secondary content sections: Clinical Timeline (`#experience`), Expert Associates (`#team`), Patient Voices (`#testimonials`), Radiology Articles (`#articles`), and FAQ Accordion (`#faq`).

---

## 2. Implemented Design Tokens

### Typography (IMPLEMENTED)
- **Primary Sans-Serif**: `Plus Jakarta Sans` (`--font-sans`), loaded via `next/font/google`. Applied globally to body, navigation, labels, and standard text.
- **Accent / Editorial Serif**: `Playfair Display` (`--font-serif`), loaded with normal and italic styles. Used specifically for the signature italic accent words in section and hero headings.
- **Hierarchy**:
  - Display / Hero Headings: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]`
  - Section Headings: `text-2xl sm:text-3xl lg:text-4xl font-bold` with `font-serif italic text-teal-800` accent words
  - Card Titles: `text-lg font-bold text-slate-900`
  - Body Text: `text-base text-slate-600 leading-relaxed`
  - Small / Micro-labels: `text-xs font-semibold tracking-wider uppercase`
  - Navigation Text: `text-sm font-medium`

### Colors (IMPLEMENTED)
Centralized in `src/app/globals.css` via `@theme` definitions:
- **Brand Teal Primary**: `#0f766e` (`--color-teal-brand`)
- **Brand Teal Dark**: `#042f2e` (`--color-teal-dark`)
- **Brand Teal Hover**: `#115e59` (`--color-teal-hover`)
- **Brand Teal Light**: `#f0fdfa` (`--color-teal-light`)
- **Brand Teal Accent**: `#0d9488` (`--color-teal-accent`)
- **Surface Background**: `#fbfbf9` (`--color-surface-bg` — warm medical cream)
- **Surface Card**: `#ffffff` (`--color-surface-card`)
- **Surface Muted**: `#f4f4f2` (`--color-surface-muted`)
- **Navy Dark (Footer)**: `#091522` (`--color-navy-dark`)
- **Navy Surface (Footer Cards)**: `#112235` (`--color-navy-card`)
- **Text Main / Headings**: `#0f172a` (`--color-text-dark` — Slate 900)
- **Text Body**: `#334155` (`--color-text-body` — Slate 700)
- **Text Muted**: `#64748b` (`--color-text-muted` — Slate 500)
- **Borders**: `#e5e7eb` / `#e2e8f0` (`--color-border-subtle`)

### Geometry & Shape (IMPLEMENTED)
- **Pill / Badges**: `rounded-full`
- **Buttons**: `rounded-full` (curved pill geometry matching reference CTA style)
- **Cards & Banners**: `rounded-2xl` / `rounded-3xl`
- **Navigation Targets**: `rounded-lg`

### Elevation & Shadows (IMPLEMENTED)
- Minimal elevation strategy: `shadow-xs` for sticky header, `shadow-sm` for primary buttons, `shadow-xl` for floating cards/banners, `shadow-2xl` for hero & visual cards.

### Container & Layout System (IMPLEMENTED)
- Reusable `Container` component (`src/components/ui/Container.tsx`):
  - Default `xl`: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Options: `sm` (`max-w-3xl`), `md` (`max-w-5xl`), `lg` (`max-w-6xl`), `full` (`max-w-full`)
- Responsive Breakpoints:
  - Mobile: `< 768px` (drawer navigation, single-column stacking)
  - Tablet: `768px - 1023px` (desktop horizontal navigation, 2-column grids)
  - Desktop: `1024px+` (3-column service grid, 4-column feature grid, full container margins)

---

## 3. Implemented UI Primitives & Sections

1. **`Button` (`src/components/ui/Button.tsx`)**:
   - `primary`, `secondary`, `outline`, `ghost`, `dark` with visible focus rings.

2. **`SectionHeading` (`src/components/ui/SectionHeading.tsx`)**:
   - Reusable heading block supporting optional `id`, badge pill, title, italic serif accent word, and descriptive subtitle.

3. **`Header` (`src/components/layout/Header.tsx`)**:
   - Sticky navigation bar with verified brand logo, desktop nav, appointment CTA, and accessible mobile drawer.

4. **`Hero` (`src/components/home/Hero.tsx`)**:
   - 12-column split layout with specialty pill, headline with signature italic serif accent, verified facts, dual CTA group, and floating inquiry card.

5. **`AboutSection` (`src/components/home/AboutSection.tsx`)**:
   - Stable anchor `#about`.
   - 12-column composition with `AboutDoctorVisual` illustration, quote callout with teal border, metadata grid (Identity, Profession, Practice Location, Scope), specialty demo pills, and dual CTA group.

6. **`ServicesSection` (`src/components/home/ServicesSection.tsx`) & `ServiceCard` (`src/components/home/ServiceCard.tsx`)**:
   - Stable anchor `#services`.
   - Data-driven 3-column responsive grid displaying 6 diagnostic radiology modalities with category tags, custom SVG icons, and consultation actions.

7. **`TrustFeaturesSection` (`src/components/home/TrustFeaturesSection.tsx`)**:
   - 4-column practice philosophy grid highlighting diagnostic precision, structured reporting, clinical collaboration, and diagnostic standards.

8. **`ExperienceTimeline` (`src/components/home/ExperienceTimeline.tsx`)**:
   - Stable anchor `#experience`.
   - Timeline cards with step badges, node indicators, and neutral non-fabricated milestones.

9. **`TeamSection` (`src/components/home/TeamSection.tsx`) & `TeamCard` (`src/components/home/TeamCard.tsx`)**:
   - Stable anchor `#team`.
   - 3-column grid of collaborative diagnostic associate cards with neutral demo identities and custom avatar graphics.

10. **`TestimonialsSection` (`src/components/home/TestimonialsSection.tsx`) & `TestimonialCard` (`src/components/home/TestimonialCard.tsx`)**:
    - Stable anchor `#testimonials`.
    - 3-column testimonial cards featuring 5-star visual presentation, quote icons, and anonymous demo patient/clinician reviews.

11. **`ArticlesSection` (`src/components/home/ArticlesSection.tsx`) & `ArticleCard` (`src/components/home/ArticleCard.tsx`)**:
    - Stable anchor `#articles` / `#blog`.
    - 3-column educational medical imaging articles with reading times, category pills, and guide summaries.

12. **`FAQSection` (`src/components/home/FAQSection.tsx`)**:
    - Stable anchor `#faq`.
    - Fully accessible interactive accordion with `aria-expanded`, `aria-controls`, and smooth toggle indicators.

13. **`Footer` (`src/components/layout/Footer.tsx`)**:
    - Deep navy footer with demo newsletter, navigation links, and prototype disclaimer.

---

## 4. Architectural & Content Decisions

- **Shop Section Decision**: The template reference includes an optional e-commerce shop section. As this is a specialized medical portfolio prototype for a practicing radiologist, commercial merchandise is clinically irrelevant; the shop was intentionally excluded to preserve medical professionalism.
- **Fact Constraints**: All clinical milestones, team members, testimonials, articles, and FAQs are clearly designated as demo/prototype content in UI and code, strictly preserving the fact boundary (only Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata are verified facts).

---

## 5. Planned for Later Phases (P06+)

- **P06**: Appointment interface banner & contact inquiry form with client-side state handling.
- **P07**: Motion transitions, reveal animations, scroll effects.
- **P08**: Full responsive visual audit and breakpoint tuning.

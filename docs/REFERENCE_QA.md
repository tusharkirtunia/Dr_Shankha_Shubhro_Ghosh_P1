# Reference Quality Assurance (Reference QA)

This document records the visual, structural, and editorial comparison between the Ayra reference template design system, the approved research-oriented direction, and the current Dr. Shankha Shubhro Ghosh clinical portfolio prototype and admin surface.

## Reference Comparison Table

| Section | Reference / Direction | Current State | Difference | Action |
| --- | --- | --- | --- | --- |
| **Header & Navigation** | White header, thin top market strip, brand on left, phone affordance, hamburger menu, teal mobile drawer, Book Appointment CTA | Sticky white header (`bg-white/95`), brand title with verified profession/location, editorial anchor navigation (Identity, Professional Work, Knowledge, Contact), mobile hamburger (`min-w-[44px] min-h-[44px]`), teal collapsible drawer with scroll lock & escape handling | Top market strip omitted; navigation aligned to 3-stage scholarly IA | P3: Acceptable portfolio streamlining without loss of navigation fidelity |
| **Hero / Stage 1: Identity** | Split composition, large doctor image on right, teal visual backdrop, floating booking card, badge pill, headline with italic serif accent, dual CTAs | 12-column grid (`grid-cols-1 lg:grid-cols-12`), specialty pill badge, headline with italic serif accent (`Diagnostic Radiologist`), dual CTAs ("Explore Scholarly Work", "Contact & Consultation"), `HeroDoctorVisual` | Restrained scholarly tone replacing commercial booking funnels | P3: No further action required |
| **About / Professional Scope** | Image composition, profile text, experience badge, italic/accent heading treatment, quote callout, metadata grid | Editorial key-value list with clean horizontal borders, bio lead, quote callout with teal border | Commercial cards replaced with clean editorial metadata grid | P3: Aligned with research direction |
| **Research Section** | Commercial services grid | Dedicated research publications listing with tags, authors, journal, date, DOI, external links, and draft/published status linked to admin CRUD | Tailored specifically for academic radiology research output | P3: Fully verified |
| **Perspectives & News** | Generic blog cards | Separated into Doctor Perspectives and External Domain & Radiology News with safe placeholders and centralized store integration | Scholarly and educational focus | P3: Fully verified |
| **Testimonials / Professional Trust** | Star-rating patient review cards | Professional trust and human evidence without star-rating advertising or fabricated review metrics | Clinical professionalism and medical ethics prioritized | P3: Fully verified |
| **Admin Surface** | None in reference | Full admin product (`/admin`, `/admin/login`, `/admin/dashboard`, `/admin/profile`, `/admin/research`, `/admin/articles`, `/admin/news`, `/admin/testimonials`, `/admin/media`) with CRUD workflows and `localStorage` persistence | Added administrative management layer for prototype demonstration | P3: Fully verified |
| **Footer** | Dark/navy footer, newsletter subscription, quick links | Deep navy footer (`#091522`), demo newsletter subscription, identity, quick navigation links, factual disclaimer | Extremely faithful to Ayra footer structure and design tokens | P3: No action required |

## Summary of QA Findings
- **P0 (Broken/Missing Sections)**: 0
- **P1 (Major Layout Mismatches)**: 0
- **P2 (Significant Spacing/Typography Mismatches)**: 0
- **P3 (Minor Polish / Intentional Omissions)**: Minor omissions (top market strip, commercial booking funnels) are intentional, clinically appropriate for a specialized doctor/researcher portfolio, and strictly adhere to fact boundaries.

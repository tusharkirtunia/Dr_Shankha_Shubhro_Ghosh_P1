# System Architecture

## Architecture Overview

This project is a client-facing frontend website prototype built on the Next.js App Router ecosystem. It follows a modular structure separating configuration, data models, presentation, and utilities.

### Core Stack (IMPLEMENTED)
- **Framework**: Next.js 16.3.5 (App Router with Turbopack)
- **UI Library**: React 19.2.8 / React-DOM 19.2.8
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS 4 (@tailwindcss/postcss)

---

## Directory Structure & Responsibilities

```
Dr_Shankha_Shubhro_Ghosh_P1/
├── docs/                      # Project brief, audits, build state, changelog & architectural docs
├── public/                    # Static assets & icons
├── src/
│   ├── app/                   # App Router routing, layout, and global CSS
│   │   ├── favicon.ico
│   │   ├── globals.css        # Minimal CSS baseline and Tailwind 4 theme hooks
│   │   ├── layout.tsx         # Root layout with fonts, SEO metadata, and html/body tags
│   │   └── page.tsx           # Home page assembling all home components
│   ├── components/            # Reusable UI & section components
│   │   ├── home/              # Hero, About, Services, Team, Timeline, Testimonials, Articles, FAQ, Appointment, Contact, Map
│   │   ├── layout/            # Header and Footer
│   │   └── ui/                # Button, Container, SectionHeading
│   ├── data/                  # Content and structured mock data
│   │   ├── doctorData.ts      # Client facts & centralized placeholder mock data
│   │   └── navigation.ts      # Centralized navigation schema
│   ├── lib/                   # Utility and helper functions
│   │   └── utils.ts           # General utility helpers
│   └── types/                 # TypeScript interfaces and type definitions
│       └── content.ts         # Types distinguishing verified doctor facts from demo data
├── eslint.config.mjs          # ESLint flat configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration with Tailwind 4 plugin
└── tsconfig.json              # TypeScript compiler configuration with `@/*` path alias
```

### Module Responsibilities

1. **`src/app/`**:
   - Manages top-level application routing and global layout shells.
   - `layout.tsx` defines metadata (Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata), canonical links, Open Graph tags, and font definitions.
   - `globals.css` provides CSS custom properties, smooth scrolling, and reduced-motion overrides.
   - `page.tsx` renders the complete landing page.

2. **`src/components/`**:
   - **`ui/`**: Reusable primitive components (`Button`, `Container`, `SectionHeading`).
   - **`layout/`**: Global `Header` (with sticky backdrop and accessible mobile drawer) and `Footer` (with newsletter demo and links).
   - **`home/`**: Modular section components (`Hero`, `AboutSection`, `ServicesSection`, `TrustFeaturesSection`, `ExperienceTimeline`, `TeamSection`, `TestimonialsSection`, `ArticlesSection`, `FAQSection`, `AppointmentSection`, `ContactSection`).

3. **`src/data/`**:
   - Centralizes mock data and navigation schemas (`doctorData.ts`, `navigation.ts`), making it easy for future developers to replace demo content.

4. **`src/types/`**:
   - Houses TypeScript schemas and data interfaces (`content.ts`) with strict boundaries separating verified client facts from placeholder data.

---

## Architectural Boundaries

- **Frontend Prototype Only**: The system contains no server-side database, no authentication layer, no CMS integration, no external payment gateway, and no live appointment booking backend.
- **Fact Boundary**: Only three facts are verified: Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata. All clinical claims, credentials, testimonials, and contact points remain clearly designated as placeholder/demo content.

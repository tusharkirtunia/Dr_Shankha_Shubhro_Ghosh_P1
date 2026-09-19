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
│   │   ├── admin/             # Separate admin surface routes (/admin, /login, /dashboard, /profile, /research, /articles, /news, /testimonials, /media)
│   │   ├── favicon.ico
│   │   ├── globals.css        # Minimal CSS baseline and Tailwind 4 theme hooks
│   │   ├── layout.tsx         # Root layout with fonts, SEO metadata, and html/body tags
│   │   └── page.tsx           # Home page assembling all home components
│   ├── components/            # Reusable UI & section components
│   │   ├── admin/             # Admin shell & layout components
│   │   ├── home/              # Hero, AboutSection, ResearchSection, PerspectivesNewsSection, TestimonialsSection, ContactSection, MapPlaceholder
│   │   ├── layout/            # Header and Footer
│   │   └── ui/                # Button, Container, SectionHeading
│   ├── data/                  # Content and structured mock data
│   │   ├── doctorData.ts      # Client facts & centralized mock data layer
│   │   └── navigation.ts      # Centralized navigation schema
│   ├── lib/                   # Utility and helper functions
│   │   ├── contentStore.ts    # Centralized content store with localStorage persistence & event sync
│   │   └── utils.ts           # General utility helpers
│   └── types/                 # TypeScript interfaces and type definitions
│       └── content.ts         # Strongly typed structures for Profile, Research, Perspective, DomainNews, Testimonial, Media
```

### Module Responsibilities

1. **`src/app/`**:
   - Manages top-level application routing and global layout shells.
   - `admin/`: Separate administrative surface with dedicated routes for dashboard, profile, research, articles, news, testimonials, and media.
   - `layout.tsx` defines metadata, canonical links, Open Graph tags, and font definitions.
   - `globals.css` provides CSS custom properties, smooth scrolling, and reduced-motion overrides.
   - `page.tsx` renders the complete landing page.

2. **`src/components/`**:
   - **`ui/`**: Reusable primitive components (`Button`, `Container`, `SectionHeading`).
   - **`layout/`**: Global `Header` (with sticky backdrop and accessible mobile drawer) and `Footer` (with newsletter demo and links).
   - **`home/`**: Modular section components (`Hero`, `AboutSection`, `ResearchSection`, `PerspectivesNewsSection`, `TestimonialsSection`, `ContactSection`).
   - **`admin/`**: `AdminLayout` shell with responsive navigation sidebar and mobile drawer.

3. **`src/lib/`**:
   - `contentStore.ts`: Centralized data store managing profile, research, articles, domain news, testimonials, and media assets with browser `localStorage` persistence and custom event synchronization (`contentStoreUpdated`).

4. **`src/data/`**:
   - Centralizes structured mock data and navigation schemas (`doctorData.ts`, `navigation.ts`).

5. **`src/types/`**:
   - Houses TypeScript schemas and data interfaces (`content.ts`).

---

## Centralized Content & Data Layer Architecture

- **Separation of Concerns**: UI components consume centralized typed entities.
- **Persistence Model**: Local mock persistence via `localStorage` in the browser, with fallback to initial static mock data (`doctorData.ts`). Fully replaceable with a future API/database backend in R09.
- **Content Safety & Fact Boundaries**: Verified facts (Dr. Shankha Shubhro Ghosh, Radiologist, Kolkata) are strictly isolated from demo placeholder content. Draft items (`status === "draft"`) are filtered out and never exposed publicly.
- **Public/Admin Integration**: Admin create, edit, draft, publish, unpublish, and profile updates propagate immediately to the public site via storage and event synchronization.

---

## Admin Information Architecture & Routes

- `/admin` (Entry router)
- `/admin/login` (Demo administration surface & authentication boundary)
- `/admin/dashboard` (Counts, status indicators, reset controls)
- `/admin/profile` (Verified profile facts editing)
- `/admin/research` (Research papers CRUD, draft/publish)
- `/admin/articles` (Perspectives & articles CRUD, draft/publish)
- `/admin/news` (Domain news CRUD, publish/draft)
- `/admin/testimonials` (Testimonials CRUD, publish/unpublish)
- `/admin/media` (Media asset model management)

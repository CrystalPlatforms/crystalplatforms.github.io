# Crystal Studio Website Premium Rebuild - Agent GLM Guidelines

## Document Purpose
This document provides comprehensive guidelines for Agent GLM to understand, design, and implement the premium rebuild of crystal-studio.dev using React + Vite. It defines what premium means, what technologies to use, what to avoid, and how to ensure SEO and AI search visibility.

---

## Overview

**Project**: Rebuild crystal-studio.dev from basic React+Vite to a premium, modern, high-performance website.

**Target Audience**: Developers, programmers, CTOs, and IT professionals.

**Primary Goals**:
1. Achieve premium visual design that does NOT look AI-generated
2. Improve SEO rankings significantly
3. Ensure visibility in AI search engines (Perplexity, Google AI Overview, ChatGPT with browsing)
4. Maintain zero budget (use only free/open-source tools)

**Constraints**:
- Cannot use: Next.js
- Must use: React + Vite
- Budget: 0 PLN
- Collaboration: User tests, deploys, and occasionally makes direct changes

---

## What "Premium" Means for This Project

### Visual Design Principles

#### DO
- Typography: Inter, Manrope, Satoshi with proper hierarchy
- Color Palette: Consistent, limited to 2-3 primary colors + neutrals (grays, whites, blacks)
- Layout: Clean grid system (12-column preferred), proper spacing (4px, 8px, 16px, 24px, 32px, 48px scale)
- Components: Professional, reusable UI components with consistent styling
- Animations: Subtle, purposeful animations using Framer Motion (hover effects, scroll triggers)
- Dark Mode: Mandatory for developer audience
- Imagery: Real photographs (Unsplash, Pexels, Pixabay) - NO AI-generated images
- Icons: Consistent icon set (Lucide React, Tabler Icons, or Heroicons)
- Whitespace: Generous, intentional whitespace for readability

#### DON'T
- Rainbow or overly complex gradients
- Excessive animations (auto-scrolling, floating elements, distracting effects)
- AI-generated stock images (Midjourney, DALL-E style)
- Too many colors (limit to 2-3 primary + neutrals)
- Inconsistent spacing or typography
- Overly "glossy" or "plastic" visual styles
- Generic, template-like layouts
- Low contrast text (minimum 4.5:1 ratio, WCAG AA)

### Technical Quality Principles

#### DO
- Clean, semantic HTML structure
- Proper accessibility (WCAG AA minimum)
- Performance optimization (lazy loading, code splitting)
- Mobile-first responsive design
- Touch targets minimum 48x48px
- Proper error handling and loading states
- TypeScript for type safety

#### DON'T
- Client-side only rendering without SEO considerations
- Large, unoptimized bundles
- Poorly structured, unmaintainable code
- Missing alt text on images
- Broken links or poor navigation

---

## User Stories

### Design and Visual Experience

1. As a developer visitor, I want a clean, professional design with consistent typography and spacing, so that I can focus on content without visual distractions.

2. As a CTO evaluating tools, I want to see a modern, enterprise-grade visual presentation, so that I trust the technical competence behind the products.

3. As a user browsing on mobile, I want a responsive design that works perfectly on my device, so that I have the same experience as on desktop.

4. As a night-mode preferring developer, I want a dark mode option, so that I can browse comfortably in low-light conditions.

5. As a visitor with accessibility needs, I want proper contrast ratios and keyboard navigation, so that I can use the site without barriers.

### Content and Information Architecture

6. As a first-time visitor, I want to immediately understand what Crystal Studio does and what products they offer, so that I can quickly assess relevance.

7. As a potential customer, I want detailed product descriptions with clear value propositions, so that I can make an informed decision.

8. As someone seeking validation, I want testimonials, case studies, or usage examples, so that I can trust the quality.

9. As a curious visitor, I want an FAQ section that answers common questions, so that I don't need to contact support for basic information.

### SEO and Discoverability

10. As a search engine crawler, I want properly structured meta tags, sitemap, and robots.txt, so that I can effectively index the site.

11. As a Google user, I want the site to rank high for relevant keywords, so that I can find it easily.

12. As an AI search engine (Perplexity, Google AI Overview), I want structured, fact-dense content with proper schema markup, so that I can extract and cite information accurately.

### Performance and Technical

13. As a user on slow connection, I want fast-loading pages with optimized assets, so that I don't abandon the site due to waiting.

14. As a developer inspecting the code, I want clean, well-structured, and documented code, so that I can understand and potentially contribute.

15. As a maintainer, I want a modular architecture with reusable components, so that I can easily add new features or modify existing ones.

---

## Technical Stack Requirements

### Mandatory Technologies

| Category | Technology | Purpose |
|----------|------------|---------|
| Framework | React 19 | Core UI library |
| Build Tool | Vite 6 | Fast builds and HMR |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS v4 | Utility-first styling |
| UI Components | shadcn/ui | Accessible, customizable components |
| Icons | Lucide React | Consistent icon set |
| Animations | Framer Motion | Subtle animations |
| Fonts | Inter | Modern typography |

### Recommended Templates

**Primary Choice: Horizon UI (Tailwind CSS Version)**
- Repository: https://github.com/horizon-ui/horizon-tailwind-react
- License: MIT (free for commercial use)
- Features: 70+ pre-built components, dark/light mode, RTL support, Figma files

**Alternative: shadcn/ui Templates**
- Repository: https://www.shadcn.io/template/category/vite
- License: MIT
- Features: 23+ professional Vite templates, CLI for adding components

### SEO Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Meta Tags | react-helmet-async | Dynamic meta tag management |
| Sitemap | vite-plugin-sitemap | Automatic sitemap generation |
| Structured Data | @power-seo/schema | JSON-LD schema markup |
| Analytics | Google Search Console | SEO monitoring |

---

## Required Files and Configuration

### robots.txt (Root Directory)

```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

# AI Search Bots - Explicitly allowed
User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://crystal-studio.dev/sitemap.xml
```

### llms.txt (Root Directory)

```txt
# AI Crawler Configuration
User-agent: *
Allow: /
Crawl-delay: 2
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemap } from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://crystal-studio.dev',
      dynamicRoutes: [
        '/',
        '/products',
        '/products/schools-out',
        '/products/coin-collector',
        '/products/exsize',
        '/about',
        '/contact',
        '/faq'
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### Tailwind Configuration

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#10b981',
          600: '#059669',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## Design System Specifications

### Color Palette

| Name | Hex Code | Usage |
|------|----------|-------|
| Primary 500 | #3B82F6 | Primary actions, links |
| Primary 600 | #2563EB | Hover states |
| Primary 700 | #1D4ED8 | Active states |
| Secondary 500 | #10B981 | Success states, accents |
| Neutral 50 | #F9FAFB | Backgrounds |
| Neutral 100 | #F3F4F6 | Cards, surfaces |
| Neutral 900 | #111827 | Text, headings |
| Neutral 700 | #374151 | Secondary text |

### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | Inter | 32px | 700 | 1.25 |
| H2 | Inter | 24px | 600 | 1.33 |
| H3 | Inter | 20px | 600 | 1.4 |
| Body | Inter | 16px | 400 | 1.6 |
| Body Small | Inter | 14px | 400 | 1.5 |

### Spacing System

Use Tailwind spacing scale: p-1 (4px), p-2 (8px), p-3 (12px), p-4 (16px), p-6 (24px), p-8 (32px), p-12 (48px).

### Component Examples

**Primary Button**

```tsx
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
  Primary Action
</button>
```

**Product Card**

```tsx
<div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="mb-4">
    <Icon className="h-8 w-8 text-primary-500" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Product Name</h3>
  <p className="text-neutral-600 dark:text-neutral-300 mb-4">Description</p>
  <button className="text-primary-600 hover:text-primary-700 font-medium">
    Learn More
  </button>
</div>
```

---

## SEO Implementation Guide

### Meta Tags (Using react-helmet-async)

```tsx
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>Crystal Studio - Innovative Web Games and Applications</title>
        <meta name="description" content="Crystal Studio creates innovative web-based games and modern desktop applications with clean design and real usefulness." />
        <meta name="keywords" content="web games, desktop apps, React, Vite, Crystal Studio, School's Out, Coin Collector" />
        <link rel="canonical" href="https://crystal-studio.dev" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Crystal Studio - Innovative Web Games and Applications" />
        <meta property="og:description" content="Crystal Studio creates innovative web-based games and modern desktop applications." />
        <meta property="og:url" content="https://crystal-studio.dev" />
        <meta property="og:image" content="https://crystal-studio.dev/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crystal Studio" />
        <meta name="twitter:description" content="Innovative web games and applications" />
        <meta name="twitter:image" content="https://crystal-studio.dev/twitter-image.jpg" />
      </Helmet>

      {/* Page content */}
    </>
  );
}
```

### Structured Data (JSON-LD)

**Organization Schema**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Crystal Studio",
  "url": "https://crystal-studio.dev",
  "logo": "https://crystal-studio.dev/logo.png",
  "description": "Creators of innovative web games and modern desktop applications",
  "sameAs": [
    "https://twitter.com/crystalstudio",
    "https://github.com/crystal-studio"
  ],
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PL"
  }
}
```

**SoftwareApplication Schema (for each product)**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "School's Out!",
  "operatingSystem": "Web Browser",
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "url": "https://crystal-studio.dev/products/schools-out"
  },
  "description": "Addictively fun arcade game with unique mechanics",
  "author": {
    "@type": "Organization",
    "name": "Crystal Studio"
  }
}
```

**FAQPage Schema**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Crystal Studio games free?",
      "acceptedAnswer": {
        "@type": "
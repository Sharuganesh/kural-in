# Kural Innovations — Website Performance & SEO Optimization Agent Prompt

**Site:** https://www.kural-innovations.in  
**Tech Stack:** React (CRA or Vite) + Tailwind CSS, deployed on Vercel  
**Owner:** Kural Innovations, Tirunelveli, Tamil Nadu — a student-founded tech studio offering web development, IoT/embedded systems, AI/ML, PCB design, and student project guidance  
**Goal:** Fix mobile performance (NO_LCP issue), achieve Google Page 1 rankings for local + student startup keywords, and implement full technical + on-page SEO

---

## PART 1 — PERFORMANCE FIXES (PageSpeed / Core Web Vitals)

### Critical Issue: Mobile LCP = NO_LCP Error
The mobile Lighthouse run shows LCP as `NO_LCP` — meaning no Largest Contentful Paint element was detected within the timeout. This is a blocking performance failure. Fix this first.

**Task 1.1 — Fix the LCP element**
- Identify the hero section of the homepage (`src/components/Hero.jsx` or equivalent)
- The LCP element must be a visible text or image that loads within 2.5 seconds on mobile
- If the hero uses a background image via CSS, convert it to an `<img>` tag with explicit `width` and `height` attributes — CSS background images are NOT eligible for LCP
- Add `fetchpriority="high"` and `loading="eager"` to the hero image
- If the hero is text-only, ensure it is not hidden behind a JS-rendered loader or animation delay
- Remove any `setTimeout`, `useEffect` fade-in, or intersection observer that delays hero text from painting

**Task 1.2 — Fix Render-Blocking Resources**
- Audit `public/index.html` for any `<link rel="stylesheet">` or `<script>` tags in `<head>` without `defer` or `async`
- Move all non-critical CSS to load after initial paint using `<link rel="preload" as="style" onload="this.rel='stylesheet'">`
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` if using Google Fonts
- Defer all third-party scripts (analytics, chat widgets, etc.)

**Task 1.3 — Image Optimization (Est. savings: 978–979 KiB)**
This is the biggest win. Do all of the following:
- Convert ALL images in `src/assets/` and `public/` from PNG/JPG to WebP format using sharp or imagemin
- Add responsive `srcset` with at least 3 sizes: 480w, 768w, 1200w
- Add `loading="lazy"` to all images below the fold
- Add explicit `width` and `height` attributes to every `<img>` to prevent CLS
- If using a logo in the navbar, preload it: `<link rel="preload" as="image" href="/logo.webp">`
- Maximum image size: hero ≤ 150 KB, other images ≤ 80 KB each

Install and configure in build pipeline:
```bash
npm install --save-dev imagemin imagemin-webp
```

Or if using Vite, add to `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  }
})
```

**Task 1.4 — Reduce Unused JavaScript (Est. savings: 35 KiB)**
- Run `npm run build -- --analyze` or install `source-map-explorer` to identify large bundles
- Implement React lazy loading for all page components except the homepage:
```jsx
const About = React.lazy(() => import('./pages/About'))
const Services = React.lazy(() => import('./pages/Services'))
const Contact = React.lazy(() => import('./pages/Contact'))
```
- Wrap with `<Suspense fallback={<div>Loading...</div>}>`
- Remove unused npm packages: audit with `npx depcheck`

**Task 1.5 — Fix Non-Composited Animations (2 elements)**
- Find all CSS animations using `top`, `left`, `width`, `height`, `margin`, `padding` to animate
- Replace with `transform` and `opacity` only (GPU-composited, no layout reflow)
- Example fix:
```css
/* BAD — causes reflow */
@keyframes slideIn { from { margin-left: -100px } to { margin-left: 0 } }

/* GOOD — composited */
@keyframes slideIn { from { transform: translateX(-100px) } to { transform: translateX(0) } }
```
- Add `will-change: transform` only to elements that animate on load (remove after animation ends)

**Task 1.6 — Speed Index (Mobile: 6.4s is too slow)**
- Enable Vercel Edge Network caching — add `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*).webp",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```
- Enable Brotli/gzip compression (Vercel does this by default, but verify in response headers)
- Inline critical CSS for above-the-fold content using `critters` or manually extract and add to `<style>` in `<head>`

---

## PART 2 — TECHNICAL SEO FIXES

### Task 2.1 — Meta Tags on Every Page
In `public/index.html` AND via React Helmet (install if not present: `npm install react-helmet-async`), set on EVERY page:

```jsx
import { Helmet } from 'react-helmet-async'

// Homepage
<Helmet>
  <title>Kural Innovations | Web Development, IoT & AI Company in Tirunelveli</title>
  <meta name="description" content="Kural Innovations is a student-founded tech studio in Tirunelveli offering professional web development, IoT solutions, AI/ML projects, PCB design, and student project guidance in Tamil Nadu." />
  <meta name="keywords" content="web development company tirunelveli, website developers tirunelveli, IoT company tirunelveli, student startup tirunelveli, project centre tirunelveli, digital marketing tirunelveli, AI ML company tirunelveli, embedded systems tirunelveli" />
  <link rel="canonical" href="https://www.kural-innovations.in/" />
  
  {/* Open Graph */}
  <meta property="og:title" content="Kural Innovations | Tech Studio in Tirunelveli" />
  <meta property="og:description" content="Student-founded tech company in Tirunelveli offering web development, IoT, AI/ML, and project guidance." />
  <meta property="og:url" content="https://www.kural-innovations.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.kural-innovations.in/og-image.webp" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kural Innovations | Tech Studio in Tirunelveli" />
  <meta name="twitter:description" content="Student-founded tech company in Tirunelveli — web dev, IoT, AI/ML, project guidance." />
</Helmet>
```

### Task 2.2 — Schema.org Structured Data
Add these JSON-LD scripts to `public/index.html` inside `<head>`. This is critical for local SEO and Google rich results.

**LocalBusiness Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kural Innovations",
  "description": "Student-founded tech studio in Tirunelveli offering web development, IoT/embedded systems, AI/ML solutions, PCB design, and student project guidance.",
  "url": "https://www.kural-innovations.in",
  "logo": "https://www.kural-innovations.in/logo.webp",
  "image": "https://www.kural-innovations.in/og-image.webp",
  "telephone": "+91-XXXXXXXXXX",
  "email": "contact@kural-innovations.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Your Street Address]",
    "addressLocality": "Tirunelveli",
    "addressRegion": "Tamil Nadu",
    "postalCode": "627XXX",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.7139,
    "longitude": 77.7567
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/kuraltech",
    "https://www.linkedin.com/company/kural-innovations",
    "https://github.com/kuraltech"
  ],
  "priceRange": "₹₹",
  "areaServed": ["Tirunelveli","Tamil Nadu","India"],
  "knowsAbout": ["Web Development","IoT","AI/ML","Embedded Systems","PCB Design","Student Projects"]
}
</script>
```

**Organization + WebSite Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kural Innovations",
  "alternateName": "Kural Tech",
  "url": "https://www.kural-innovations.in",
  "foundingDate": "2023",
  "founders": [{"@type": "Person", "name": "Sharunandhaganesh S."}],
  "description": "Student startup and tech studio from Tirunelveli, Tamil Nadu. Specializing in web development, IoT, AI/ML, and student project support.",
  "slogan": "Innovating from the classroom to the world"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.kural-innovations.in",
  "name": "Kural Innovations",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.kural-innovations.in/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### Task 2.3 — Sitemap & Robots.txt
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.kural-innovations.in/</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.kural-innovations.in/services</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.kural-innovations.in/about</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.kural-innovations.in/portfolio</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.kural-innovations.in/contact</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.kural-innovations.in/student-projects</loc>
    <lastmod>2026-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.kural-innovations.in/sitemap.xml

Disallow: /api/
Disallow: /*.json$
```

After deploying, submit sitemap URL in Google Search Console → Sitemaps → `https://www.kural-innovations.in/sitemap.xml`

### Task 2.4 — Security Headers (Best Practices already 100, maintain it)
In `vercel.json`, ensure these headers exist:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

---

## PART 3 — ON-PAGE SEO CONTENT STRATEGY

### Task 3.1 — Homepage H1, H2, H3 Heading Structure
The homepage MUST have exactly ONE `<h1>` tag containing the primary keyword. Structure it as:

```
H1: "Web Development & Tech Solutions Company in Tirunelveli | Kural Innovations"

H2: "Our Services" 
  H3: "Website Development in Tirunelveli"
  H3: "IoT & Embedded Systems Solutions"
  H3: "AI & Machine Learning Projects"
  H3: "PCB Design Services"
  H3: "Student Project Guidance & Final Year Project Centre in Tirunelveli"

H2: "Why Choose Kural Innovations?"
  H3: "Student-Founded Startup from Tirunelveli"
  H3: "Affordable Tech Solutions for Tamil Nadu Businesses"

H2: "Our Portfolio"

H2: "Contact Us — Tirunelveli's Trusted Tech Studio"
```

### Task 3.2 — Create Dedicated SEO Landing Pages (MOST IMPORTANT for ranking)
Create separate pages/routes for each service. Each page must be individually indexable:

**Page: `/services/web-development-tirunelveli`**
- Title: `Professional Website Development in Tirunelveli | Kural Innovations`
- H1: `Website Development Company in Tirunelveli`
- Content: 500+ words describing web development services, mentioning "Tirunelveli" naturally 8–12 times, including client results, pricing range, and a CTA

**Page: `/services/student-projects-tirunelveli`**
- Title: `Final Year Project Centre & Student Project Guidance in Tirunelveli`
- H1: `Student Project Centre in Tirunelveli — IoT, AI/ML, Embedded Systems`
- Content: Describe project domains (IoT, ECE, CSE, AI/ML), mention FXEC and local engineering colleges, include testimonials from students

**Page: `/services/iot-embedded-systems`**
- Title: `IoT & Embedded Systems Solutions in Tirunelveli | Kural Innovations`
- H1: `IoT and Embedded Systems Company in Tirunelveli`

**Page: `/about`**
- Title: `About Kural Innovations — Student Startup from Tirunelveli, Tamil Nadu`
- H1: `About Kural Innovations — Student-Founded Tech Startup in Tirunelveli`
- Content: Tell the founding story, mention "student startup Tirunelveli", "tech company Tirunelveli", founders' background, Thirukkural brand origin, and the 4-founder team

**Page: `/blog` (Recommended — highest SEO ROI)**
Create a blog section with these exact articles (each 800+ words):
1. `"Top 10 Final Year Project Ideas for ECE Students in Tirunelveli 2026"`
2. `"How to Build a Website for Your Small Business in Tirunelveli (Step-by-Step)"`
3. `"Best Student Startups from Tirunelveli — 2025 Edition"`
4. `"IoT Projects for Engineering Students — Complete Guide by Kural Innovations"`
5. `"Digital Marketing for Local Businesses in Tirunelveli"`

### Task 3.3 — Alt Text on ALL Images
Every `<img>` tag must have descriptive alt text including location keywords:
```jsx
// BAD
<img src="/team.webp" alt="team" />

// GOOD
<img src="/team.webp" alt="Kural Innovations founding team — student startup in Tirunelveli, Tamil Nadu" />

<img src="/web-dev.webp" alt="Web development project by Kural Innovations, website company in Tirunelveli" />
```

### Task 3.4 — Internal Linking Strategy
Every page must link to at least 3 other internal pages using keyword-rich anchor text:
```jsx
// In Services section, link to contact:
<a href="/contact">Get a free website quote in Tirunelveli</a>

// In About page, link to services:
<a href="/services/web-development-tirunelveli">web development services</a>

// In homepage hero:
<a href="/services/student-projects-tirunelveli">student project guidance in Tirunelveli</a>
```

---

## PART 4 — LOCAL SEO ACTIONS (Do These Outside the Codebase)

These are equally critical and must be done manually:

### 4.1 — Google Business Profile (HIGHEST PRIORITY)
1. Go to https://business.google.com and create/claim "Kural Innovations" listing
2. Set category: "Software Company" + "Web Design Company" + "Internet Marketing Service"
3. Add address (even if home-based, use the Tirunelveli pin)
4. Add phone, website, working hours, and 10+ photos (office, team, project screenshots)
5. Write business description using these words: "web development Tirunelveli", "student startup", "IoT company Tamil Nadu"
6. Add all services with individual descriptions
7. Post weekly updates (project completions, blog links, offers)
8. Get 10+ genuine Google reviews from clients and college peers → ask each one to mention "Tirunelveli" in their review

### 4.2 — Local Citation Building
Submit Kural Innovations to these directories with consistent Name/Address/Phone:
- Justdial.com
- Sulekha.com
- IndiaMART.com
- Clutch.co
- LinkedIn Company Page (kuraltech)
- AngelList / Wellfound (as a startup)
- Crunchbase

### 4.3 — Backlink Building
- Write a guest article on your college (FXEC) website or student portal
- Submit to "student startup" listicles — search "student startups Tamil Nadu" and contact those bloggers
- Get listed on Tamil Nadu startup ecosystem directories
- Post project case studies on LinkedIn with a link back to your website
- Answer questions on Quora about "web development in Tirunelveli" and link to your site

---

## PART 5 — KEYWORD STRATEGY

### Primary Keywords (Target These First — Tirunelveli Local)
| Keyword | Monthly Searches (Est.) | Difficulty | Priority |
|---|---|---|---|
| website developers in tirunelveli | Medium | Medium | 🔴 P1 |
| web development company tirunelveli | Medium | Medium | 🔴 P1 |
| website development tirunelveli | Medium | Low-Medium | 🔴 P1 |
| digital marketing company tirunelveli | Low-Medium | Low | 🔴 P1 |
| project centre tirunelveli | Medium | Low | 🔴 P1 |
| student project guidance tirunelveli | Low | Very Low | 🟢 Easy Win |
| final year project tirunelveli | Low-Medium | Low | 🟢 Easy Win |
| IoT company tirunelveli | Low | Very Low | 🟢 Easy Win |
| embedded systems tirunelveli | Low | Very Low | 🟢 Easy Win |
| student startup tirunelveli | Very Low | Very Low | 🟢 Easy Win |
| tech startup tirunelveli | Low | Very Low | 🟢 Easy Win |

### Secondary Keywords (Tamil Nadu + India Level)
- web development company tamil nadu
- affordable website development india
- student startup company india
- IoT solutions company india
- AI ML projects engineering students
- ECE project guidance online

### Long-Tail Keywords (Blog Content Targets)
- "how to get a website for small business tirunelveli"
- "best final year projects for ECE students 2026"
- "affordable web development tirunelveli"
- "student tech company founded tirunelveli"
- "IoT project ideas for engineering students tamil nadu"
- "website cost tirunelveli small business"

---

## PART 6 — CHECKLIST FOR AGENT TO VERIFY AFTER ALL CHANGES

Run through each item and confirm ✅:

**Performance:**
- [ ] Mobile LCP is under 2.5 seconds (no NO_LCP error)
- [ ] All images converted to WebP and have width/height attributes
- [ ] Hero image has `fetchpriority="high"` and `loading="eager"`
- [ ] No render-blocking scripts in `<head>`
- [ ] Lazy loading enabled for below-fold images and non-home routes
- [ ] Animations use only `transform` and `opacity`
- [ ] `vercel.json` has cache-control headers for static assets
- [ ] Mobile PageSpeed score ≥ 80, Desktop ≥ 95

**Technical SEO:**
- [ ] `<title>` and `<meta name="description">` present on EVERY route/page
- [ ] Canonical URL set on every page
- [ ] Open Graph tags on every page
- [ ] LocalBusiness + Organization + WebSite JSON-LD in `<head>`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Sitemap submitted in Google Search Console

**On-Page SEO:**
- [ ] One unique `<h1>` per page containing target keyword
- [ ] All images have descriptive, keyword-rich alt text
- [ ] Internal links between all main pages using keyword anchor text
- [ ] Dedicated service pages created for each offering
- [ ] About page mentions "student startup Tirunelveli" and founding story
- [ ] Contact page has full address in text (not just image)

---

## PART 7 — EXPECTED RANKING TIMELINE

| Action | Estimated Time to Rank |
|---|---|
| "kural innovations" (brand) | Already ranking — maintain |
| student startup tirunelveli (low competition) | 2–4 weeks after content + GMB |
| project centre tirunelveli | 4–8 weeks |
| IoT company tirunelveli | 4–8 weeks |
| website developers tirunelveli | 8–16 weeks (competitive) |
| web development company tirunelveli | 12–20 weeks (very competitive) |
| digital marketing company tirunelveli | 12–20 weeks |

**Note:** The student startup and project centre keywords are your fastest path to Page 1 because competitors haven't targeted them. Win those first, build domain authority, then chase the more competitive web development keywords.

---

*Generated for Kural Innovations — kural-innovations.in — June 2026*
*Implement all items in order: Performance first, then Technical SEO, then Content*

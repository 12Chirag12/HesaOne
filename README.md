# HESAONE LLP — Multi-Page Enterprise Industrial HSE Website

A premium, responsive, multi-page website for **HESAONE LLP** (Health, Safety & Environment Solutions). Built with **Next.js 15 App Router**, **TypeScript**, **Lucide Icons**, and custom, ultra-optimized CSS designed for enterprise authority, speed, and client conversion.

---

## 1. Architecture & Pages Overview

This website has been architected as an authoritative multi-page portal tailored to high-hazard industrial sectors (Chemical, Manufacturing, Infrastructure, Logistics, and Energy):

| Route | Page | Purpose & Capabilities |
|---|---|---|
| `/` | **Homepage** | High-impact industrial hero, key metrics, services preview, interactive safety diagnostic tool, industry spotlight, approach teaser, and case study highlight. |
| `/about` | **About Us** | The HESAONE mission, vision, Three Pillars (*People. Process. Planet.*), operating values, and international accreditation alignment (ISO 45001, ISO 14001, OSHA, NFPA, CCPS). |
| `/services` | **Services Catalog** | Comprehensive overview of 6 core HSE disciplines with key deliverables, governing standards, and an interactive **Service Selection Decision Matrix**. |
| `/services/[slug]` | **Service Detail Pages** | Dedicated deep-dive static pages for all 6 disciplines with step-by-step 4-stage methodology, deliverables checklist, business benefits, and direct consultation request. |
| `/industries` | **Industries We Serve** | Detailed hazard profiles, regulatory compliance frameworks, tailored solutions, and measurable safety track records across 5 primary industrial sectors. |
| `/approach` | **Our Approach** | In-depth breakdown of the 4-stage lifecycle (*01. Understand & Scope → 02. Assess & Quantify → 03. Engineer & Recommend → 04. Strengthen & Sustain*) and the **Industrial Safety Maturity Curve**. |
| `/case-studies` | **Case Studies & Impact** | Real-world engineering case studies showcasing quantified metrics (LTIFR reduction, safe man-hours, insurance premium savings, zero containment losses). |
| `/contact` | **Contact & Consultation** | Interactive consultation booking form with auto-fill query params, urgent regulatory triage pathway, direct channels, NDA security guarantee, and interactive **FAQ Accordion**. |

### Dedicated Service Detail Pages (`/services/[slug]`):
1. `/services/process-safety-risk-studies` (HAZOP, HAZID, QRA, LOPA, SIL Allocation, Dispersion Modeling)
2. `/services/safety-management-systems` (ISO 45001 / 14001 OHSMS, Gap Audits, CAPA Governance)
3. `/services/fire-emergency-safety` (NFPA Audits, Hydraulic Verification, Evacuation Computer Simulations)
4. `/services/environment-sustainability` (EIA, Industrial Effluent / ETP, Zero Liquid Discharge, ESG)
5. `/services/technical-safety-services` (Machine Guarding, ATEX/IECEx Hazardous Area Classification, LOTO)
6. `/services/training-awareness` (Behavior-Based Safety, Stop-Work Authority, Executive Safety Leadership)

---

## 2. Interactive Features Added

- **Interactive HSE Risk & Readiness Diagnostic Tool**: Enables plant managers and safety leaders to select their facility sector, primary hazard exposure, audit history, and pressing priority to calculate an instant diagnostic exposure level with tailored recommendations.
- **Pre-filled Consultation Flow**: The diagnostic tool and service detail pages pass context directly to `/contact`, automatically populating the inquiry form.
- **Client-Side Form Triage & Confirmation**: Realistic submission simulation generating a unique reference ID (e.g. `HES-84920`) with next steps and direct mailto links for P&ID attachments.
- **Sticky Glassmorphic Header & Navigation**: Features active link detection, service dropdown megamenu, and a mobile drawer.
- **GDPR & Privacy Cookie Consent Banner**: Bottom toast banner with preference memory via `localStorage`.
- **Search Engine Optimization & JSON-LD Structured Data**: Semantic Schema.org `ProfessionalService` metadata, OpenGraph tags, and Twitter Card schemas.

---

## 3. Local Development

1. Check requirements in PowerShell:
   ```powershell
   node -v
   npm -v
   ```

2. Run development server:
   ```powershell
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Production Build

To verify and run the production build:

```powershell
npm run build
npm run start
```

All 16 routes are pre-rendered statically (SSG) for 100/100 performance and zero backend latency.

---

## 5. Troubleshooting & Clean Server Restart

If your browser console displays `404 Not Found` for chunks like `_next/static/chunks/main-app.js` or `favicon.ico`:
1. **Stop any existing server** running in your terminal by pressing `Ctrl + C`.
2. **Clear stale cache (optional)**:
   ```powershell
   Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
   ```
3. **Start the development server**:
   ```powershell
   npm run dev
   ```
   *Or to run the pre-compiled high-performance production build:*
   ```powershell
   npm run start
   ```
4. **Hard-refresh your browser**: Press `Ctrl + Shift + R` (or `Ctrl + F5`) on `http://localhost:3000` to ensure the browser clears any cached stale chunk hashes.

---

## 6. Customization & Brand Details

- **Company Data & Content**: Edit `lib/siteData.ts` to adjust service descriptions, deliverables, standards, industries, case studies, or FAQs.
- **Colors & Tokens**: Edit CSS variables in `app/globals.css`:
  - Primary Background: Midnight Aerospace Navy (`#070C14` / `#0D1522`)
  - Content Background: Arctic Pure White (`#FFFFFF` / `#F8FAFC`)
  - Accent Color: Luminous Solar Gold/Amber (`#F59E0B` → `#D97706`)
  - Typography: Inter / Clean modern sans-serif
- **Hero Photograph**: Replace `public/images/hesaone-industrial-hero.jpg` with an approved high-resolution facility image.
- **Official Contact**: Configured for `hesaonellp@gmail.com`.

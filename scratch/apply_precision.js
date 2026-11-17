const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

// 1. Ensure --font-sans and --font-mono are declared in :root
if (!css.includes('--font-sans:')) {
  css = css.replace(/:root\s*\{/, `:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --bg-canvas: #F8FAFC;
  --border-strong: #CBD5E1;`);
}

// 2. Ensure body uses var(--font-sans)
css = css.replace(/font-family:\s*'Plus Jakarta Sans'[^;]+;/, 'font-family: var(--font-sans);');

// 3. Remove font-style: italic from the legacy em rule
css = css.replace(
  /font-style:\s*italic;/g,
  'font-style: normal; font-weight: 800; font-family: inherit;'
);

// 4. In .hero, replace padding with clean vertical padding (0 horizontal, let .section-wrap handle it)
css = css.replace(
  /padding:\s*60px\s+max\(24px,\s*calc\(\(100vw\s*-\s*1200px\)\s*\/\s*2\)\)\s*80px;/g,
  'padding: 80px 0 90px;'
);

// 5. In legacy .hero-content, remove width: min(640px, 58%) constraint
css = css.replace(
  /\.hero-content\s*\{\s*position:\s*relative;\s*z-index:\s*2;\s*width:\s*min\(640px,\s*58%\);/g,
  '.hero-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 680px;'
);

// 6. In legacy .hero-bottom, remove horizontal max() padding
css = css.replace(
  /padding:\s*0\s+max\(24px,\s*calc\(\(100vw\s*-\s*1200px\)\s*\/\s*2\)\);/g,
  'padding: 0;'
);

// 7. Fix .hero-bottom > div so it does not conflict with .hero-bottom-inner
css = css.replace(
  /\.hero-bottom\s*>\s*div\s*\{/g,
  '.hero-bottom-legacy-col {'
);

// 8. Precision rules for pillar items, hero responsive layout, and standards banner
const precisionRules = `
/* ==========================================================================
   SENIOR ARCHITECT PRECISION ALIGNMENTS
   ========================================================================== */

/* Universal Heading & Font Consistency */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  letter-spacing: -0.025em;
}

h1 em, h2 em, h3 em, h4 em,
.hero h1 em,
.hero-heading em,
.page-hero-header h1 em,
.intro h2 em,
.section-heading h2 em,
.industries h2 em,
.approach h2 em,
.cta-banner-content h2 em,
.section-center-heading h2 em,
em {
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
  color: var(--brand-cobalt);
  letter-spacing: inherit;
}

.hero h1 em,
.hero-heading em,
.dark-bg em,
.cta-section em,
.industries em,
.cta-banner-content h2 em {
  color: #93C5FD;
}

/* Precision alignment for Pillar items */
.pillar-mini-item {
  display: flex !important;
  align-items: flex-start !important;
  gap: 14px !important;
  padding: 14px 18px !important;
  background: var(--bg-subtle) !important;
  border-radius: var(--radius-sm) !important;
  border: 1px solid var(--border-hairline) !important;
}

.pillar-mini-item strong {
  display: block !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  color: var(--text-primary) !important;
  margin-bottom: 3px !important;
  line-height: 1.3 !important;
}

.pillar-mini-item span {
  display: block !important;
  font-size: 13px !important;
  color: var(--text-secondary) !important;
  line-height: 1.5 !important;
}

.pillar-icon {
  color: var(--brand-cobalt) !important;
  flex-shrink: 0 !important;
  margin-top: 2px !important;
}

/* Hero Section Precision */
.hero-photo {
  position: absolute;
  inset: 0;
  background-image: url('/images/hesaone-industrial-hero.jpg');
  background-size: cover;
  background-position: center 38%;
  filter: brightness(0.68) contrast(1.18) saturate(0.9);
  transform: scale(1.02);
  z-index: 1;
}

.hero-wash {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg,
      rgba(8, 13, 26, 0.96) 0%,
      rgba(8, 13, 26, 0.90) 38%,
      rgba(8, 13, 26, 0.65) 68%,
      rgba(8, 13, 26, 0.45) 100%),
    linear-gradient(0deg,
      rgba(8, 13, 26, 0.95) 0%,
      transparent 40%);
  z-index: 2;
  pointer-events: none;
}

.hero-body {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 56px;
  align-items: center;
  width: 100%;
}

.hero-standards-strip .std-pill {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  color: #F1F5F9 !important;
  font-family: var(--font-mono) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  padding: 4px 10px !important;
  border-radius: var(--radius-xs) !important;
}

.hero-standards-strip .strip-title {
  font-size: 10.5px !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  color: #94A3B8 !important;
  display: block;
  margin-bottom: 8px;
}

.industry-arrow {
  flex-shrink: 0 !important;
  margin-left: auto !important;
}

@media (max-width: 960px) {
  .hero-body {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
  }
  .hero-sidebar {
    justify-content: flex-start !important;
  }
  .hero-spec-card {
    max-width: 100% !important;
  }
  .hero-bottom {
    position: static !important;
    padding: 16px 0 !important;
    overflow-x: auto !important;
  }
  .hero-bottom-inner {
    justify-content: flex-start !important;
    min-width: 760px !important;
  }
  .standards-banner-inner {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }
  .standards-divider {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .hero-heading {
    font-size: 32px !important;
  }
  .hero-actions {
    flex-direction: column !important;
    align-items: stretch !important;
  }
  .hero-actions .button {
    width: 100% !important;
    justify-content: center !important;
  }
}
`;

css += precisionRules;

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('Successfully updated app/globals.css with precision alignments.');

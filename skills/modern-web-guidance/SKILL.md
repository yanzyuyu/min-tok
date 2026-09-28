---
name: modern-web-guidance
description: >-
  Human-grade modern web architecture & UI/UX guidance. Enforces zero-slop design, native HTML/CSS/JS capabilities, soft drop shadow depth over heavy strokes (stroke max 1px), sharp border-radius, context-aware typography, and zero-comment code.
---

# Modern Web Guidance (Human-Grade Web & Zero-Slop Architecture)

This skill guides the agent to build clean, modern, high-performance web applications using native Web Platform standards and senior human-grade UI/UX principles—eliminating AI slop, heavy strokes, and redundant third-party package dependencies.

---

## 1. Visual Elevation: Ambient Drop Shadows over Heavy Strokes

### A. The Hierarchy of Depth: Shadow > Stroke
Real modern UI achieves depth, contrast, and visual hierarchy through **diffuse, ambient lighting and soft drop shadows**, rather than boxing every element in harsh borders.

* **PREFERRED (Ambient Soft Drop Shadows):**
  * Use subtle, natural shadows for card elevation, floating navigation, popovers, and containers.
  * Tailwind examples: `shadow-sm`, `shadow`, `shadow-md` (with gentle diffuse blurs).
  * Vanilla CSS: `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03);`
  * Elevate interactive elements on hover: transition smoothly to `shadow-md` or `shadow-lg`.

* **RESTRICTED: Stroke & Border Limit (1px Maximum):**
  * Avoid heavy borders (`border-2`, `border-4`) or high-contrast dark outlines that trap content.
  * If a stroke is necessary for boundary definition, **it MUST be 1px maximum** (`border` / `border-[1px]`).
  * Always use soft, low-contrast, harmonious border colors: `border-zinc-200/70`, `border-stone-200/80`, or `border-zinc-800/60` in dark mode.

* **Sharp Border Radius (1px to 3px / `rounded-sm`):**
  * In accordance with sharp-edge design standards, maximum border-radius is 1px to 3px (`rounded-sm`).
  * **STRICTLY BANNED:** Never use pill shapes (`rounded-full`) for containers, cards, buttons, or eyebrow divs.

---

## 2. Anti-AI Design Slop (Strict UI Standards)

### A. Absolute Ban on the "Floating Pill Badge" Div
AI models habitually dump a colored pill capsule above every hero heading:
* **BANNED:** `<div class="rounded-full border border-red-200 bg-red-50 text-red-700 px-3 py-1 text-xs mb-4">...</div>`
* **THE HUMAN WAY:**
  * **Option 1 (Typographic Lead):** Start directly with the `<h1>` with strong visual hierarchy and proportional line height.
  * **Option 2 (Unboxed Editorial Kicker):** If a category is needed, use plain text with letter-spacing: `<p class="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 mb-4">CATEGORY &middot; STATUS</p>`.

### B. Clean Inline Vector SVGs Only (Zero Emojis & Zero Script Icons)
* **BANNED:**
  * Emojis in buttons and headers (`🚀 Mulai`, `⚡ Fitur`, `🔥 Populer`).
  * Script-injected runtime icons (`<i data-lucide="send"></i>`).
* **HUMAN STANDARD:** Always use crisp inline vector `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ...>` with `aria-hidden="true"`.

### C. Context-Aware Typography
Never blindly default to generic `Inter` for every use case:
* **Editorial / Literary / Heritage:** `Playfair Display`, `Instrument Serif`, or `Fraunces` (Headings) + `Lora` or `Source Serif 4` (Body).
* **SaaS / Tech / Dev Tools:** `Plus Jakarta Sans`, `Cabinet Grotesk`, or `Satoshi` (Headings) + `DM Sans` (Body) + `JetBrains Mono` (Data/Tables).
* **Creative Studio / Modern Agency:** `Bricolage Grotesque` or `Syne` (Headings) + `Outfit` (Body).

### D. Zero-Comment Markup
* **BANNED:** `<!-- ================= NAVBAR ================= -->`, `<!-- Hero Section -->`, `/* Modern card styling */`.
* **HUMAN STANDARD:** Zero HTML and CSS comments. Semantic tags (`<nav>`, `<header>`, `<main>`, `<section id="hero">`, `<footer>`) speak for themselves.

---

## 3. Modern Web Platform Standards (Native First)

Eliminate heavy JavaScript dependencies by utilizing modern, native Web Platform features:

### A. Modals & Dialogs
Use the native HTML `<dialog>` element instead of custom overlay libraries:
```html
<dialog id="confirm-modal" class="rounded-sm shadow-xl border border-zinc-200/80 p-6 backdrop:bg-zinc-950/40 backdrop:backdrop-blur-sm">
  <form method="dialog">
    <h3 class="text-lg font-semibold text-zinc-900">Konfirmasi Tindakan</h3>
    <p class="text-sm text-zinc-600 mt-2">Apakah Anda yakin ingin melanjutkan proses ini?</p>
    <div class="mt-6 flex justify-end gap-3">
      <button value="cancel" class="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 rounded-sm">Batal</button>
      <button value="confirm" class="px-4 py-2 text-sm bg-zinc-900 text-white rounded-sm shadow-sm">Lanjutkan</button>
    </div>
  </form>
</dialog>
```

### B. Modern CSS Layout & Selectors
* **CSS Grid & Bento Layouts:** Prefer asymmetric, intentional grid layouts over repetitive 3-column identical cards.
* **Parent & State Selection with `:has()`:** Target parent cards based on child states without extra JS event listeners:
  ```css
  .card:has(input:checked) {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: rgb(39 39 42 / 0.8);
  }
  ```
* **Container Queries (`@container`):** Style components based on container width rather than viewport width.
* **Form Validation State with `:user-valid` / `:user-invalid`:** Provide immediate, non-annoying validation styling that only triggers after user interaction.

### C. Performance & Core Web Vitals (CWV)
* **LCP Image Prioritization:** Always add `fetchpriority="high"` and omit `loading="lazy"` on above-the-fold hero images.
* **Offscreen Content Optimization:** Use `content-visibility: auto; contain-intrinsic-size: 1px 500px;` on long scrollable sections to drastically reduce initial rendering work.
* **Smooth Native Transitions:** Use native View Transitions API (`document.startViewTransition`) where applicable for seamless state changes.

---

## 4. Execution Interlock

Whenever working on Web, UI components, HTML, CSS, or frontend layouts:
1. Prioritize **ambient drop shadow depth** over heavy strokes (borders maximum 1px).
2. Maintain sharp border radius (1px - 3px / `rounded-sm`).
3. Ensure zero comments in generated markup and styles.
4. Deliver 100% working, responsive, self-documenting code.

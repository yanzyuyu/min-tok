---
name: design-no-slop
description: >-
  Eliminate AI slop from Web, GUI, and TUI designs. Enforces strict human-coding standards (zero HTML comments <!-- ... -->, zero CSS comments /* ... */), human-grade typography, absolute elimination of the floating pill badge div, ban on cyber/neon cliches, mandate for vector SVGs over emojis, and domain-matched fonts. Always load alongside human-coding.
---

# Human-Grade UI/UX & Design Standards (desainnoslop.md)

This skill enforces authentic, human-grade design principles across **Web, GUI, and TUI (Terminal)** interfaces—eradicating the repetitive, formulaic, and soulless patterns typical of AI-generated designs ("AI design slop").

---

## 1. RULE ZERO: ABSOLUTE BAN ON THE "FLOATING PILL BADGE" DIV

AI models have an automatic reflex to inject a rounded pill capsule above every headline:
```html
<!-- BANNED AI SLOP DIV (Even in non-tech contexts like publishing/nature): -->
<div class="rounded-full border border-red-200 bg-red-50 text-red-700 px-3 py-1 text-xs mb-4">
  ● PENERBIT BUKU YOGYAKARTA & MITRA AKADEMISI
</div>
<div class="rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1 text-xs mb-4">
  Etnobotani & Konservasi
</div>
<div class="rounded-full border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 font-mono text-xs mb-4">
  ● Available for senior backend / lead roles
</div>
```

### The Human Standard: How Real Designers Open a Section
1. **Option A: Pure Typographic Lead (Preferred & Most Elegant):**
   No eyebrow div at all. Start with raw typographic confidence directly on the `<h1>`:
   ```html
   <h1 class="text-4xl sm:text-6xl font-serif tracking-tight text-stone-900 leading-[1.15]">
     Mendedikasikan Gagasan, Mengabadikan Karya Penulis Indonesia.
   </h1>
   ```
2. **Option B: Plain Unboxed Editorial Kicker (No Pill, No Border):**
   If categorical context is genuinely required, write it as clean, unboxed semantic text:
   ```html
   <p class="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-4">
     Penerbit Buku Yogyakarta &middot; Mitra Akademisi
   </p>
   ```
3. **Option C: Integrated Header Metadata:**
   Place institutional affiliation, status, or role inside the top navigation bar or author profile row, never floating awkwardly in the hero whitespace.

---

## 2. Context-Aware Typographic Pairing Matrix (Research-Backed)

Never default blindly to `Inter` or `Geist` for every project. A human designer selects typefaces that echo the **cultural, emotional, and functional tone** of the user's prompt:

### A. Penerbit Buku / Sastra / Humaniora / Budaya / Esai / Heritage
*Tone: Bermartabat, hangat, terpercaya, berwibawa, mencerminkan literatur.*
* **Primary Headline (Display Serif):**
  * `Playfair Display` (Classic, elegant high-contrast transition)
  * `Instrument Serif` (Modern editorial, expressive curves)
  * `Cormorant Garamond` (Sophisticated, literary, humanist)
  * `Fraunces` (Warm, organic, variable optical sizes)
* **Body Text (High Readability):**
  * `Lora` (Contemporary serif with brushed curves)
  * `Newsreader` (Designed specifically for long-form screen reading)
  * `Plus Jakarta Sans` / `Source Serif 4`
* *Pairing Example:* `Playfair Display` (Heading) + `Lora` or `Plus Jakarta Sans` (Body).

### B. SaaS / Fintech / Data Infrastructure / Developer Platforms
*Tone: Presisi, cepat, reliabel, modern, arsitektural.*
* **Primary Headline:**
  * `Plus Jakarta Sans` (Clean geometric grotesque with subtle personality)
  * `Cabinet Grotesk` / `General Sans` (Fontshare, sharp & architectural)
  * `Satoshi` (Crisp neo-grotesque, startup standard)
  * `Space Grotesk` (Technical, subtle brutalist flair)
* **Body Text:**
  * `DM Sans` / `Inter` / `Work Sans`
* **Numbers & Code (Strictly Restricted to Data/Tables):**
  * `JetBrains Mono` / `Space Mono` / `IBM Plex Mono`
* *Pairing Example:* `Plus Jakarta Sans` (Heading) + `DM Sans` (Body) + `JetBrains Mono` (Data).

### C. Creative Studio / Desain Modern / Showcase / Agency
*Tone: Berani, asimetris, progresif, dinamis.*
* **Primary Headline:**
  * `Bricolage Grotesque` (Expressive variable grotesque, trending 2026)
  * `Syne` (Artistic, wide, bold)
  * `Clash Display` (Distinctive geometric display)
* **Body Text:**
  * `Outfit` / `DM Sans` / `Plus Jakarta Sans`
* *Pairing Example:* `Bricolage Grotesque` (Heading) + `Outfit` (Body).

### D. Sains / Medis / Akademisi / Jurnal / Riset
*Tone: Obyektif, netral, kredibel, formal.*
* **Primary Headline:** `Libre Baskerville` / `Source Serif 4` / `Merriweather`
* **Body Text:** `Source Sans 3` / `Libre Franklin` / `Inter`

---

## 3. Iconography: Clean Inline Vector SVGs Only (Zero Emojis & Zero Runtime Script Icons)

* **BANNED (AI Slop & Legacy Anti-Patterns):**
  * Emojis in UI elements (`🚀`, `💡`, `⚡`, `🛠️`, `✨`, `🔥`, `🎉`). They render inconsistently and look like hobbyist AI slop.
  * Script-injected traditional attribute icons (e.g., `<i data-lucide="send"></i>`). Relying on client-side JS to parse the DOM and inject SVGs causes layout shifts and is a massive AI giveaway.
  * Legacy icon font classes (e.g., `<i class="fas fa-check-circle"></i>`).
* **HUMAN STANDARD:** ALWAYS use pre-rendered inline vector SVGs (or explicit server/bundler components like `<svg>` or `<IconName />` in React/Vue/Blade components):
  * `viewBox="0 0 24 24"`
  * `fill="none" stroke="currentColor"`
  * `stroke-width="1.5"` or `"2"`
  * Explicit `aria-hidden="true"` on decorative icons

```html
<!-- BAD (AI Slop): -->
<button class="btn">🚀 Beli Buku Sekarang ⚡</button>
<i data-lucide="send"></i> <!-- Script-injected attribute icon -->

<!-- GOOD (Human Engineer): -->
<button class="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 rounded-lg text-sm font-medium hover:bg-stone-800 transition">
  <span>Beli Buku Sekarang</span>
  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>
```

---

## 4. Color, Layout & Framework Defaults: Zero Generic Tailwind Slop

AI models habitually rely on the same generic Tailwind utility structures and color combinations regardless of context.

* **BANNED (AI Slop Tailwind Defaults):**
  * Mindlessly defaulting to `slate` (for backgrounds/text) and `emerald` or `indigo` (for accents) without specific domain reasoning.
  * Copy-pasting the exact generic boilerplate container everywhere: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12`. While structurally sound, using this exact string universally is a dead giveaway of AI slop.
  * Pitch-black `#000000` backgrounds with glowing `#00FF66` acid green, glowing purple, or cyan borders.
  * Glowing drop-shadows on buttons or cards (`box-shadow: 0 0 20px rgba(...)`).
  * Splitting every feature section into 3 mathematical cards with identical 2-sentence lengths and colored top borders.
* **HUMAN STANDARD:**
  * **Intentional Palettes:** Select colors based on the domain (e.g., warm `stone/amber` for heritage, crisp `zinc/blue` for SaaS, high-contrast `neutral` for editorial).
  * **Bespoke Layouts:** Design intentional structures (CSS Grid, Bento layouts, dynamic sidebars) rather than always dumping content into a centered `max-w-4xl` column.
  * Shadows must be natural and ambient (`shadow-sm`, `shadow-md`), never neon glowing.

---

## 6. TUI (Terminal User Interface) Standards

* **BANNED:** `🚀 Starting...`, `✨ Compiling...`, `══════` double box-drawings, harsh 16-color ANSI neon that burns retinas.
* **HUMAN STANDARD:**
  * Clean text badges: `[OK]`, `[FAIL]`, `[DIFF]`, `[WARN]`.
  * Muted 256-color / truecolor palettes.
  * Clear hotkey hints in footer: `[q] Keluar  [r] Muat Ulang  [Enter] Pilih`.

---

## 7. Zero-Comment Markup: Absolute Ban on `<!-- ... -->` and `/* ... */`

* **THE PROBLEM:**
  AI models litter HTML and CSS with redundant signposts:
  `<!-- ================= NAVBAR ================= -->`
  `<!-- Font Tipografi: Plus Jakarta Sans & JetBrains Mono -->`
  `<!-- Hero Section -->`
  `<!-- Sun Icon (Tampil saat Dark Mode) -->`
  `/* Styling scrollbar modern */`
  This is a glaring hallmark of AI generation. Real human frontend engineers never do this.

* **THE STANDARD:**
  * **ZERO HTML comments (`<!-- ... -->`):** Let semantic tags (`<nav>`, `<header>`, `<main>`, `<section id="hero">`, `<article>`, `<footer>`), descriptive class names, and standard attributes (`id`, `aria-label`) speak for themselves.
  * **ZERO CSS/JS comments (`/* ... */`, `// ...`):** Write clean, concise declarations without editorializing.
  * **Mandatory Skill Pairing:** Whenever writing web or frontend markup, `human-coding` is strictly in effect alongside `design-no-slop`.

---

## 8. Desktop GUI Standards (Tkinter, PyQt, PySide, Electron)

A major tell of AI-generated desktop GUIs is treating desktop native frames like a copy-pasted web marketing landing page.

### A. Anti-Theme Schizophrenia (Design Coherence)
* **BANNED:**
  * Chopping a pitch-black header (`#0f172a`) onto an otherwise light application window (`#f8fafc`).
  * Inconsistent mixing of dark and light panels without structural purpose.
* **HUMAN STANDARD:**
  * Maintain complete tonal coherence. Commit to a cohesive Full Light Mode (e.g. Slate/Zinc light with subtle borders) or a coherent Full Dark Mode across the entire window frame, header, navigation, content panels, and control buttons.

### B. Centralized Theme Token Dictionary (Zero Floating Hex Strings)
* **BANNED:**
  * Inlining random Tailwind hex codes (`bg="#f8fafc"`, `fg="#2563eb"`, `bg="#cbd5e1"`) across dozens of widget instantiation lines.
* **HUMAN STANDARD:**
  * Define a single, centralized `THEME` dictionary, dataclass, or style object at the top of the GUI module:
    ```python
    THEME = {
        "bg": "#f8fafc",
        "surface": "#ffffff",
        "border": "#e2e8f0",
        "text": "#0f172a",
        "muted": "#64748b",
        "accent": "#2563eb",
        "accent_hover": "#1d4ed8",
        "font_family": "Segoe UI" if sys.platform == "win32" else "Inter",
    }
    ```

### C. Data Typography & Table Alignment (UX Huruf & Angka)
* **BANNED:**
  * Centering numerical values in tables, Treeviews, or grids:
    `self.tree.column("conc", anchor="center")`  # AMATEUR AI SLOP
    `self.tree.column("aqi", anchor="center")`   # AMATEUR AI SLOP
* **HUMAN STANDARD:**
  * **NUMBERS MUST BE RIGHT-ALIGNED (`anchor="e"` / `text-align: right` / tabular nums)**:
    All integers, floating-point decimals, currency values, and quantities must be right-aligned so decimal points and digit magnitudes align vertically for rapid visual scanning.
  * **TEXT / LABELS**: Left-aligned (`anchor="w"` / `text-align: left`).
  * **STATUS BADGES / CODES / SHORT ICONS**: Centered (`anchor="center"`).

### D. Metrics, Units & Contextual Thresholds
* **BANNED:**
  * Presenting raw naked integers without units or reference scales (e.g. showing "45" without saying if it's PM2.5 in µg/m³ or an overall index).
* **HUMAN STANDARD:**
  * Always label metrics with explicit SI/domain units (`µg/m³`, `ppm`, `ms`, `MB`).
  * Provide qualitative status indicators (e.g. Good, Moderate, Unhealthy) with standardized, accessible color tints alongside raw numbers.

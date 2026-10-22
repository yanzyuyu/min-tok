---
name: design-no-slop
description: >-
  Eliminate AI slop from Web, GUI, and TUI designs. Enforces pre-design theme discovery ("tugas ini cocoknya tema apa?"), dynamic inline SVG icon matching, mobile-first responsiveness (CSS anchor positioning, container queries Level 1 & 2 scroll-state stuck/snapped/scrollable/scrolled, style queries, 100dvh dynamic viewport height, clamp fluid typography, text-box-trim, appearance: base-select & select::picker(), native carousels ::scroll-marker & ::scroll-button, advanced attr() data types, text-wrap balance/pretty, touch-action manipulation, WCAG 2.2 touch targets 44x44px/48x48px, interactive-widget=resizes-content, field-sizing: content, interpolate-size: allow-keywords, calc-size, corner-shape squircle, @starting-style discrete transitions, light-dark() CSS color schemes, cross-document view transitions @view-transition, element-scoped nested view transitions, zero-JS compositor scroll-driven animations animation-timeline: scroll()/view(), Display P3 wide color gamut, AVIF/WebP picture architecture, contrast-color() automated accessible contrast, reading-flow & reading-order focus sync, shape() geometric clipping, :open pseudo-class, declarative focusgroup keyboard navigation, zero-JS CSS text-fit, CSS custom functions @function, border-shape geometric contours, interesttarget & interestaction popovers), 60 domain-adapted border-radii archetypes, contour bias psychology, trending font pairings (Google Fonts & Fontshare), 200 prohibited AI slop tropes, and zero-comment code. Always load alongside human-coding.
---

# Human-Grade UI/UX & Design Standards (desainnoslop.md)

This skill enforces authentic, human-grade design principles across Web, GUI, and TUI (Terminal) interfaces—eradicating the repetitive, formulaic, and soulless patterns typical of AI-generated designs ("AI design slop").

---

## 1. RULE ZERO: ABSOLUTE BAN ON THE "FLOATING PILL BADGE" DIV

AI models have an automatic reflex to inject a rounded pill capsule above every headline:
```html
<div class="rounded-full border border-red-200 bg-red-50 text-red-700 px-3 py-1 text-xs mb-4">
  PENERBIT BUKU YOGYAKARTA & MITRA AKADEMISI
</div>
<div class="rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1 text-xs mb-4">
  Etnobotani & Konservasi
</div>
<div class="rounded-full border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 font-mono text-xs mb-4">
  Available for senior backend / lead roles
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

## 2. Context-Aware Typographic Pairing Matrix (Google Fonts & Fontshare)

Never default blindly to `Inter` or `Geist` for every project. A human designer selects typefaces that echo the cultural, emotional, and functional tone of the user's prompt:

### A. Penerbit Buku / Sastra / Humaniora / Budaya / Esai / Heritage / Quiet Luxury
*Tone: Bermartabat, hangat, terpercaya, berwibawa, mencerminkan literatur dan kemewahan tenang.*
* **Primary Headline (Display Serif):**
  * `Instrument Serif` (Google Fonts - Modern editorial, expressive delicate curves, quiet luxury)
  * `Sentient` (Fontshare - Transitional reading serif with robust warmth and literary authority)
  * `DM Serif Display` (Google Fonts - Classic humanist warmth, high structural elegance)
  * `Playfair Display` (Google Fonts - Classic, high-contrast transitional serif)
  * `Cormorant Garamond` (Google Fonts - Sophisticated, literary, humanist)
  * `Fraunces` (Google Fonts - Warm, organic, variable optical sizes)
  * `Boska` (Fontshare - Expressive, sharp contrast, boutique high-fashion editorial)
  * `Zodiak` (Fontshare - Timeless, balanced editorial serif with modern digital cut)
  * `Gambetta` (Fontshare - Sharp, high-contrast transitional serif with contemporary poise)
  * `Author` (Fontshare - Traditional refined proportions with intellectual print-like cadence)
  * `Bespoke Serif` (Fontshare - Contemporary transitional serif with organic elegance)
  * `Rosaline` (Fontshare - High-contrast editorial display serif with luxury fashion presence)
* **Body Text (High Readability):**
  * `Sentient Regular` (Fontshare - Robust, highly readable organic serif for continuous screen reading)
  * `Lora` (Google Fonts - Contemporary serif with brushed curves)
  * `Newsreader` (Google Fonts - Designed specifically for continuous long-form screen reading)
  * `DM Sans` (Google Fonts - Geometric sans with humanist warmth and clean legibility)
  * `Instrument Sans` (Google Fonts - Swiss-engineered, ultra-crisp editorial sans)
  * `Inter Tight` / `Inter` (Google Fonts - Neutral, crisp legibility)
  * `General Sans` (Fontshare - Neutral, contemporary, balanced)
  * `Satoshi` (Fontshare - Crisp neo-grotesque, calm reading rhythm)
  * `Erode` (Fontshare - Contemporary sharp editorial serif)
  * `Schibsted Grotesk` (Google Fonts - Digital-first Scandinavian grotesque with crisp editorial grounding)
* *Verified High-Impact Pairings:*
  * `Rosaline Regular` (Heading) + `Satoshi Regular` (Body) - Sophisticated contemporary fashion & curatorial portfolio
  * `Cormorant Garamond` (Heading) + `Schibsted Grotesk` (Body) - Scandinavian journalistic precision meets high-contrast humanist serif
  * `Instrument Serif` (Heading) + `Bricolage Grotesque` (Subhead/Body) - The Editorial Powerhouse (delicate razor-sharp curves contrasted with industrial ink-trap grotesk)
  * `Bricolage Grotesque Bold` (Heading) + `Newsreader` (Body) - The Modern Thought-Leadership Journal (punchy startup character grounded by literary long-form screen serif)
  * `Instrument Serif` (Heading) + `Satoshi` (Body) - Boutique editorial digital minimalism
  * `Instrument Serif` (Heading) + `Inter Tight` (Body) - Modern editorial quiet luxury
  * `Instrument Serif` (Heading) + `Instrument Sans` or `Newsreader` (Body) - Chic neo-editorial publication
  * `Sentient Bold` (Heading) + `Sentient Regular` (Body) - Pure monofamily literary publishing & heritage monographs
  * `Sentient` (Heading) + `Satoshi` or `General Sans` (Body) - Warm organic editorial serif grounded by clean geometric sans
  * `Switzer` (Heading) + `Boska` (Editorial/Accent) - Razor-sharp Swiss precision meets high-fashion drama
  * `Satoshi Bold/Medium` (Heading) + `Erode Regular` (Body/Accent) - Contemporary sharp editorial contrast
  * `DM Serif Display` (Heading) + `DM Sans` (Body) - Perfect superfamily DNA harmony
  * `General Sans Semibold` (Heading) + `Gambetta Regular` (Body/Editorial) - Contemporary structural clarity with transitional elegance
  * `Fraunces` (Heading) + `Outfit` (Body) - Artisan boutique studio aesthetic
  * `Boska` (Heading) + `Satoshi` (Body) - Luxury fashion & high-end architecture
  * `Zodiak` (Heading) + `General Sans` (Body) - Timeless long-form literature
  * `Zodiak` (Heading) + `Switzer` (Body) - Soft luxury & timeless editorial warmth with contemporary Swiss reading ease
  * `Zodiak` (Heading) + `Inter Tight` (Body) - High-contrast quiet luxury editorial
  * `Gambetta` (Heading) + `Inter Tight` (Body) - Sharp editorial elegance with modern neutral balance
  * `Author` (Heading) + `Outfit` or `Inter` (Body) - Digital publication & boutique portfolio
  * `Zodiak` (Heading) + `Satoshi` (Body) - Sharp contemporary high-fashion editorial
  * `Sentient` (Heading) + `Figtree` (Body) - Organic literary warmth paired with open-aperture clarity
  * `Tanker` (Heading) + `Bespoke Serif` (Body/Editorial) - Bold heavyweight display anchored by literary editorial elegance (Fontshare)
  * `Playfair Display` (Heading) + `Source Sans 3` or `Lora` (Body) - Content-heavy digital magazine
  * `Sentient` (Heading) + `Plus Jakarta Sans` (Body) - Warm organic editorial serif grounded by friendly open-aperture sans
  * `Instrument Serif` (Heading) + `Instrument Sans` (Body) - The pure Instrument superfamily indie editorial & boutique digital product standard
  * `Gambetta` (Heading) + `Questrial` (Body) - High-contrast luxury fashion editorial balanced by open geometric sans
  * `Zodiak` (Heading) + `Bespoke Serif` (Body/Editorial) - Sturdy editorial serif posture with refined long-form reading cadence
  * `Cormorant Garamond` (Heading) + `Proza Libre` (Body) - Refined humanist luxury editorial meets humanist sans clarity
  * `Fraunces Soft` (Heading) + `DM Sans` (Body) - Artisanal organic studio & boutique craft
  * `Playfair Display` (Heading) + `Inter` (Body) - Opulent digital magazine & high-fashion editorial standard

### B. SaaS / Fintech / Data Infrastructure / Developer Platforms
*Tone: Presisi, cepat, reliabel, modern, arsitektural.*
* **Primary Headline:**
  * `Plus Jakarta Sans` (Google Fonts - Clean geometric grotesque with subtle personality)
  * `Cabinet Grotesk` (Fontshare - Sharp, structural, high-tech architectural grotesque with ink-traps)
  * `Switzer` (Fontshare - Razor-sharp Swiss neo-grotesque, high-end objective engineering)
  * `Figtree` (Google Fonts - Clean geometric grotesque with friendly open apertures)
  * `Instrument Serif` (Google Fonts - Trending editorial-tech headline juxtaposition)
  * `General Sans` (Fontshare - Neutral, contemporary, balanced neo-grotesque)
  * `Satoshi` (Fontshare - Crisp neo-grotesque, startup standard)
  * `Space Grotesk` (Google Fonts - Technical, cyber-forward flair)
  * `Manrope` (Google Fonts - Modern semi-geometric sans with open aperture)
  * `Bricolage Grotesque` (Google Fonts - Variable grotesque with industrial ink-traps)
  * `Chillax` (Fontshare - Retro-futuristic geometric display with distinct angled cuts)
  * `Excon` (Fontshare - Squared industrial geometric display with high impact)
  * `Clash Grotesk` (Fontshare - Compact neo-grotesque with tight apertures and punchy character)
  * `Alpino` (Fontshare - Approachable geometric-humanist display)
  * `Schibsted Grotesk` (Google Fonts - Authoritative digital-first Scandinavian media & data grotesque)
  * `Albert Sans` (Google Fonts - Clean Scandinavian geometric sans with airy modern proportions)
  * `Onest` (Google Fonts - High-density screen reading grotesque engineered for complex dashboards)
  * `Trench Slab` (Fontshare - Geometric slab-serif with distinct structural character)
  * `Supreme` (Fontshare - Refined geometric-humanist sans with pristine horizontal rhythm)
* **Body Text:**
  * `Instrument Sans` (Google Fonts - Swiss precision, immaculate small-scale readability)
  * `Plus Jakarta Sans` (Google Fonts - Friendly, highly legible open apertures)
  * `Figtree` (Google Fonts - Friendly, ergonomic open-aperture reading flow)
  * `Switzer` (Fontshare - Contemporary Swiss neo-grotesque neutrality)
  * `Ranade` (Fontshare - Contemporary geometric-humanist sans with open flowing cadence)
  * `DM Sans` / `Inter` / `Source Sans 3` (Google Fonts)
  * `General Sans` / `Satoshi` (Fontshare)
  * `Schibsted Grotesk` / `Albert Sans` / `Onest` (Google Fonts)
  * `Supreme` (Fontshare)
* **Numbers & Code (Strictly Restricted to Data/Tables):**
  * `JetBrains Mono` / `Space Mono` / `IBM Plex Mono`
* *Verified High-Impact Pairings:*
  * `Schibsted Grotesk` (Heading) + `Public Sans` (Body) - Authoritative digital journalism, civic transparency, and enterprise data
  * `Albert Sans` (Heading) + `DM Sans` (Body) - Clean Scandinavian fintech & minimalist product startup
  * `Onest` (Heading) + `Inter` (Body) - High-density UI analytics & enterprise dashboard standard
  * `Trench Slab Medium` (Heading) + `General Sans Regular` (Body) - Structural slab character with neutral reading ease
  * `Supreme Semibold` (Heading) + `Supreme Regular` (Body) - Cohesive geometric-humanist monofamily for high-volume SaaS
  * `Instrument Serif` (Heading) + `Plus Jakarta Sans` (Body) - The trending editorial-tech standard (premium intellectual warmth with readable UI)
  * `Instrument Serif` (Heading) + `Figtree` (Body) - Warm editorial tech contrast (intellectual heading with friendly, readable body)
  * `Switzer Semibold` (Heading) + `Instrument Sans` (Body) + `IBM Plex Mono` (Data) - Objective Swiss devtools & infrastructure standard
  * `Switzer` (Heading) + `Satoshi` (Body) - The contemporary Swiss tech branding powerhouse
  * `Switzer` (Heading) + `Newsreader` (Body/Editorial) - High-end Swiss precision meets digital literature
  * `Chillax` (Heading) + `Satoshi` or `Switzer` (Body) - Retro-futuristic tech startup with disciplined reading flow
  * `Chillax` (Heading) + `Sentient` (Body/Editorial) - Retro-futuristic developer journal
  * `Excon Bold` (Heading) + `Ranade Regular` (Body) - Squared industrial display with friendly, flowing humanist body
  * `Clash Grotesk` (Heading) + `Plus Jakarta Sans` or `General Sans` (Body) - Compact punchy neo-grotesque tech startup
  * `Clash Display` (Heading) + `Clash Grotesk` (Subhead/UI) + `General Sans` (Body) - Cohesive Clash superfamily hierarchy
  * `Alpino Bold` (Heading) + `Nunito` or `Inter` (Body) - Friendly product-led growth & accessible SaaS
  * `Satoshi` (Heading) + `Plus Jakarta Sans` (Body) - Ultra-clean SaaS interface standard
  * `Figtree Bold` (Heading) + `Inter` or `Source Sans 3` (Body) - Friendly, accessible modern tech standard
  * `Plus Jakarta Sans` (Heading) + `DM Sans` (Body) + `JetBrains Mono` (Data)
  * `Cabinet Grotesk Extrabold` (Heading) + `Satoshi Medium` (Body) - Heavy architectural grotesque with clean geometric rhythm
  * `Cabinet Grotesk` (Heading) + `Erode Regular` (Body) - Contemporary sharp architectural tech-editorial
  * `Bricolage Grotesque` (Heading) + `Plus Jakarta Sans` or `DM Sans` (Body) - Dynamic high-character digital startup
  * `General Sans` (Heading) + `Instrument Sans` (Body) - Clean contemporary engineering standard
  * `Satoshi` (Heading) + `Inter` (Body) - Clean digital product standard
  * `Manrope` (Heading) + `Inter` (Body) - Low-friction, high-productivity fintech & admin standard
  * `Pally` (Heading) + `General Sans` (Body) - Grooved semi-casual display with utilitarian neo-grotesque
  * `General Sans` (Semibold Heading) + `General Sans` (Regular Body) - Unified corporate standard
  * `Space Grotesk` (Heading) + `Space Mono` (Data/Body) - Cyber-forward Web3 & dev tools
  * `Space Grotesk` (Heading) + `General Sans` (Body) - Tech-forward programmatic clarity with modern neutral sans
  * `Clash Display` (Heading) + `Satoshi` or `Inter` (Body) - High-impact geometric startup & SaaS powerhouse
  * `Clash Display` (Heading) + `General Sans` (Body) - High-impact neo-grotesque startup powerhouse
  * `Cabinet Grotesk` (Heading) + `Ranade` (Body) - Architectural display with flowing humanist rhythm
  * `Manrope` (Heading) + `Outfit` (Body) - Polished humanist tech interface
  * `Space Grotesk` (Heading) + `Inter` (Body) - Industrial tech-forward clarity with neutral reading body
  * `Mona Sans` (Heading) + `Hubot Sans` (Body) - Industrial variable superfamily engineering standard (GitHub Open Source)
  * `Geist Bold/Semibold` (Heading) + `Geist Regular` (Body) - Monochromatic developer ecosystem standard with tight tracking (`letter-spacing: -0.02em`)
  * `Cabinet Grotesk` (Heading) + `General Sans` (Body) - Structural architectural power meets Swiss objective engineering
  * `Chillax` (Heading) + `Plus Jakarta Sans` (Body) - Retro-futuristic startup with open-aperture warmth
  * `Switzer` (Heading) + `Geist Mono` (Data/Body) - Objective Swiss devtools with modern monochromatic data tracking

### C. Creative Studio / Desain Modern / Showcase / Agency
*Tone: Berani, asimetris, progresif, dinamis.*
* **Primary Headline:**
  * `Bricolage Grotesque` (Google Fonts - Expressive variable grotesque with optical ink-traps)
  * `Syne` (Google Fonts - Artistic, wide, avant-garde display)
  * `Clash Display` (Fontshare - Distinctive, geometric, heavy impact)
  * `Panchang` (Fontshare - Wide futuristic high-impact display with sharp structural angles)
  * `Amulya Bold` (Fontshare - Stylized, high-contrast display with sculpted terminals)
  * `Abril Fatface` (Google Fonts - Dramatic high-contrast fat-face display)
  * `Gambarino` / `Melodrama` (Fontshare - Whimsical, eccentric, memorable display)
  * `Stardom` (Fontshare - High-impact, stylistic retro-futuristic display for oversized hero statements)
* **Body Text:**
  * `Instrument Sans` (Google Fonts - Neutral Swiss counter-balance to expressive display faces)
  * `Outfit` / `DM Sans` / `Plus Jakarta Sans` / `Mona Sans` (Google Fonts)
  * `Synonym Regular` (Fontshare - Sleek structural companion for high-contrast display)
  * `Karla` (Google Fonts - Quirky, grotesque sans with eccentric energy)
  * `Satoshi` / `General Sans` (Fontshare)
* *Verified High-Impact Pairings:*
  * `Panchang Bold` (Heading) + `General Sans` (Body) - Wide futuristic poster & high-impact cyber display
  * `Bricolage Grotesque` (Heading) + `Instrument Serif` (Italic Accent/Subhead) + `Instrument Sans` (Body) - Maximalist-meets-minimalist juxtaposition
  * `Bricolage Grotesque` (Heading) + `Outfit` or `Mona Sans` (Body) - Modern dynamic digital agency
  * `Amulya Bold` (Heading) + `Synonym Regular` (Body) - Statement graphic display with clean structural reading flow
  * `Stardom` (Heading) + `Satoshi` or `General Sans` (Body) - Bold stylistic display with neutral workhorse clarity
  * `Clash Grotesk` (Heading) + `Bespoke Serif` or `Lora` (Body/Editorial) - Unexpected rebel tech meets editorial print
  * `Syne` (Heading) + `Sentient` (Body) - Unconventional avant-garde display with literary warmth
  * `Syne Bold` (Heading) + `Plus Jakarta Sans` (Body) - High-energy creative startup
  * `Clash Display` (Heading) + `Satoshi` or `General Sans` (Body) - Maximum graphic impact
  * `Abril Fatface` (Heading) + `Karla` (Body) - Bold editorial statement
  * `Syne` (Heading) + `Space Mono` (Body/Data) - Avant-garde cybernetic poster standard
  * `Tanker` (Heading) + `Satoshi` (Body) - Heavyweight industrial punch grounded by minimalist neo-grotesque legibility
  * `Panchang` (Heading) + `Switzer` (Body) - Wide futuristic display with Swiss body rhythm
  * `Schibsted Grotesk` (Heading) + `Fraunces` (Body/Editorial) - Nordic media precision juxtaposed with warm expressive serif

### D. Sains / Medis / Akademisi / Jurnal / Riset
*Tone: Obyektif, netral, kredibel, formal.*
* **Primary Headline:** `Source Serif 4` / `Libre Baskerville` / `Merriweather`
* **Body Text:** `Source Sans 3` / `Libre Franklin` / `Inter`
* *Verified High-Impact Pairings:*
  * `Source Serif 4` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono` (Data)
  * `Libre Baskerville` (Heading) + `Poppins` or `Inter` (Body)
  * `Space Grotesk` (Heading) + `Inter` (Body) + `IBM Plex Mono` (Data)

### E. Consumer Apps, EdTech & Accessible Platforms
*Tone: Ramah, inklusif, ergonomis, bebas ketegangan mata.*
* **Primary Headline:**
  * `Figtree` (Google Fonts - Clean, friendly geometric curves with high open apertures)
  * `Outfit` (Google Fonts - Geometric sans with soft rounded terminals)
  * `DM Sans` (Google Fonts - Warm geometric sans)
  * `Plus Jakarta Sans` (Google Fonts - Friendly, highly legible open apertures)
  * `Albert Sans` (Google Fonts - Clean Scandinavian geometric sans with open, airy friendliness)
  * `Onest` (Google Fonts - High-density screen reading grotesque with humanist touch)
  * `Lexend Deca` / `Lexend` (Google Fonts - Scientifically designed to reduce visual stress and accelerate reading speed)
* **Body Text:**
  * `Figtree` (Google Fonts - Effortless reading cadence, highly legible numerals)
  * `Lexend` (Google Fonts - Scientifically designed to reduce visual stress and improve reading speed)
  * `Inclusive Sans` (Google Fonts - Engineered specifically for neurodiverse, dyslexic, and low-vision accessibility)
  * `Albert Sans` / `Onest` (Google Fonts)
  * `Inter` / `DM Sans` / `Plus Jakarta Sans`
* *Verified High-Impact Pairings:*
  * `Albert Sans` (Heading) + `Nunito Sans` (Body) - Friendly consumer SaaS & mobile onboarding
  * `Onest` (Heading) + `Lora` (Body) - Modern content hub & accessible educational journal
  * `Onest` (Heading) + `Zilla Slab` (Body/Heading) - Tactile approachable consumer platform
  * `Figtree Bold` (Heading) + `Figtree Regular` (Body) - Friendly, approachable, zero-clutter monofamily
  * `Outfit` (Heading) + `Lexend` (Body) - Scientifically optimized for reading flow and high accessibility
  * `Lexend Deca/Bold` (Heading) + `Inclusive Sans` (Body) - Maximum cognitive accessibility standard for EdTech, public institutions, and neurodiverse users
  * `DM Sans Medium/Bold` (Heading) + `DM Sans Regular` (Body) - Low-contrast, friendly, zero-clutter monofamily
  * `Plus Jakarta Sans` (Heading) + `Inter` (Body) - The global conversion workhorse
  * `Fraunces` (Heading) + `Outfit` (Body) - Warm soft-serif display paired with contemporary open geometric sans
  * `Bricolage Grotesque` (Heading) + `Inclusive Sans` (Body) - Dynamic variable grotesque paired with maximum cognitive accessibility

### F. Disiplin Bobot Font & Performa (Variable Fonts First)
* **The Contrast Rule:** Jangan memasangkan dua font sans-serif atau dua font serif secara acak kecuali berasal dari superfamily yang sama (contoh: famili DM atau IBM Plex) atau memiliki kontras bobot ekstrem yang disengaja (Ultra-Bold Display Grotesque + Light UI Sans).
* Maksimal **dua keluarga font** (1 headline/display + 1 body UI). Tambahan mono font hanya diizinkan untuk blok kode atau kolom angka tabular.
* Maksimal **3 bobot per keluarga font** (Regular 400, Medium 500, Semibold/Bold 600/700).
* Gunakan **Variable Font** jika tersedia (`.woff2`) untuk kontrol granular bobot dan efisiensi Core Web Vitals (satu file menggantikan banyak request static weight).
* Terapkan `font-display: swap` untuk mencegah Flash of Invisible Text (FOIT).
* **Modern Line-Breaking & Anti-Orphan Standard:**
  * Wajib gunakan `text-wrap: balance` pada semua elemen judul (`h1`, `h2`, `h3`, `.display-title`) agar browser mendistribusikan kata secara simetris, melenyapkan bentuk patah tangga yang canggung.
  * Wajib gunakan `text-wrap: pretty` pada semua blok teks paragraf (`p`, `article`, `li`) untuk melenyapkan *orphan word* (satu kata kesepian yang menggantung di baris terakhir).
* **Wide Open Apertures:** Untuk body text di layar mobile, pilih font dengan bukaan huruf lebar (aperture terbuka pada karakter c, e, s) dan x-height proporsional (seperti *Instrument Sans*, *Satoshi*, atau *Plus Jakarta Sans*) agar tetap terbaca tajam pada ukuran kecil.
* **Superfamily Cohesion:** Utamakan keluarga font dengan varian serif/sans yang serasi untuk harmoni visual otomatis.
* **Oversized Hero Text + Quiet Body:** Kontras ukuran yang tajam antara headline utama yang tegas dan body copy yang bersih serta mudah dibaca meningkatkan kecepatan pemindaian visual pembaca.

---

## 3. Iconography: Clean Inline Vector SVGs Only (Zero Emojis & Zero Runtime Script Icons)

* **BANNED (AI Slop & Legacy Anti-Patterns):**
  * Emojis in UI elements (rocket, sparkles, fire, tools, lightning, warning, party). They render inconsistently across operating systems and look like hobbyist AI slop.
  * Client-side script-injected icon tags (e.g., `<i data-lucide="send"></i>` or calling `lucide.createIcons()` at runtime). Relying on client-side JS to parse the DOM and swap elements causes severe Cumulative Layout Shift (CLS), visual flicker (FOUC), and is a glaring hallmark of lazy AI generation.
  * Legacy icon font classes (e.g., `<i class="fas fa-check-circle"></i>`).
* **HUMAN STANDARD:** ALWAYS use pre-rendered inline vector SVGs (or explicit bundler components like `<svg>` or `<IconName />` in React/Vue/Blade templates):
  * `viewBox="0 0 24 24"`
  * `fill="none" stroke="currentColor"`
  * `stroke-width="1.5"` or `"2"`
  * `stroke-linecap="round" stroke-linejoin="round"`
  * Explicit `aria-hidden="true"` on decorative icons

### Dynamic Inline SVG Matching Protocol
Whenever this skill is triggered, dynamically match visual concepts to these clean, human-grade vector paths:

| Action / Concept | Inline SVG Vector Snippet (`viewBox="0 0 24 24" fill="none" stroke="currentColor"`) |
| :--- | :--- |
| **Search / Inspect** | `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>` |
| **Check / Success** | `<polyline points="20 6 9 17 4 12"></polyline>` |
| **Close / Error / Remove** | `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>` |
| **Arrow Right / Next** | `<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>` |
| **Arrow Up-Right (External)** | `<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>` |
| **Filter / Refine** | `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>` |
| **Sort / Order** | `<path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path>` |
| **Database / Store** | `<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>` |
| **Terminal / CLI** | `<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>` |
| **Code / Syntax** | `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>` |
| **User / Profile** | `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>` |
| **Settings / Config** | `<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>` |
| **Shield / Security** | `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>` |
| **Copy / Duplicate** | `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>` |
| **Refresh / Sync** | `<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>` |
| **Download / Export** | `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>` |

```html
<button class="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 rounded-md text-sm font-medium hover:bg-stone-800 transition">
  <span>Beli Buku Sekarang</span>
  <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
  * **Intentional Palettes:** Select colors based on domain (e.g., warm `stone/amber` for heritage, crisp `zinc/blue` for SaaS, high-contrast `neutral` for editorial).
  * **Bespoke Layouts:** Design intentional structures (CSS Grid, Bento layouts with asymmetric priorities, dynamic sidebars) rather than dumping content into a centered `max-w-4xl` column.
  * Shadows must be natural and ambient (`shadow-sm`, `shadow-md`), never neon glowing.

---

## 5. Visual Elevation & Depth: Drop Shadows over Heavy Strokes

* **DROP SHADOW > STROKE (The Human Depth Hierarchy):**
  * Modern, refined UI creates visual separation through **soft, diffuse ambient drop shadows** (`shadow-sm`, `shadow-md`), not by enclosing every card and section in harsh thick strokes.
  * For cards, containers, dialogs, and popovers: prioritize natural layered shadows over dark boundary borders.
* **STROKE RESTRICTION (1px Maximum):**
  * Never use thick strokes (`border-2`, `border-4`).
  * If a stroke or border is needed for structural contrast, **it MUST be 1px maximum** (`border` / `border-[1px]`).
  * Always use soft, low-contrast, harmonious border colors: `border-zinc-200/70`, `border-stone-200/80`, or `border-zinc-800/60` in dark mode.

---

## 6. Domain Aesthetic Archetypes & Border-Radius Harmonies

The curvature of UI components (buttons, cards, inputs, and modals) triggers immediate psychological responses (*contour bias*). Sharp angles signal physical precision, formal rigor, or threat, while smooth curves feel safe, tactile, and organic. The agent must consciously assign an archetype and radius harmony based on prompt context ("tugas ini cocoknya tema apa?"):

### A. The 60 Core Aesthetic Archetypes

| Archetype | Domain & Mood | Border Radius Scale | Elevation & Borders | Primary Typography |
| :--- | :--- | :--- | :--- | :--- |
| **1. Editorial & Heritage / Quiet Luxury** | Sastra, humaniora, esai, luxury publishing, kurasi budaya | `rounded-none` to `rounded-sm` (0px - 4px) | Hairline 1px border tone kertas (`stone-200`), bayangan ambient tipis | `Instrument Serif` / `Sentient` / `Zodiak` / `Boska` / `Gambetta` + `Instrument Sans` / `Newsreader` / `Satoshi` |
| **2. Modern Enterprise SaaS / Corporate** | Cloud infrastructure, B2B platforms, enterprise APIs, fintech | `rounded-md` to `rounded-lg` (6px - 8px) | Border netral 1px (`zinc-200`), layered soft `shadow-sm` | `Plus Jakarta Sans` / `General Sans` / `Cabinet Grotesk` / `Switzer` + `Instrument Sans` / `DM Sans` |
| **3. DevTools & Financial Ledgers** | High-density tables, terminal CLI, broker dashboards, metrics | `rounded-none` to `rounded-xs` (0px - 3px) | Garis struktural tajam, padding padat, tabular numbers (`font-variant-numeric: tabular-nums`) | `Space Grotesk` + `JetBrains Mono` / `Space Mono` / `IBM Plex Mono` |
| **4. Consumer, Community & Lifestyle** | Social platforms, direct-to-consumer apps, community hubs, wellness | `rounded-xl` to `rounded-2xl` (12px - 16px) | Permukaan berkontur taktil, card lembut, kontras tinggi | `Outfit` / `DM Sans` + `Plus Jakarta Sans` / `Satoshi` |
| **5. Creative Studio & Avant-Garde** | Agency portfolios, art direction, boutique showcases, fashion | `rounded-none` (0px) atau kontras asimetris | Garis 1px tegas, bayangan offset terukur (`shadow-[3px_3px_0px_#000]`) | `Syne` / `Clash Display` / `Bricolage Grotesque` / `Amulya` + `Instrument Sans` / `Synonym` |
| **6. Neobrutalism & Anti-Design** | Indie hackers, retro-modern dev tools, rebellious tech | `rounded-none` (0px) strictly | Stroke hitam tegas 1px-2px, hard offset drop shadow tanpa blur (`3px 3px 0px #000`) | `Space Grotesk` / `IBM Plex Mono` |
| **7. High-Density Scientific & Research Systems** | Bioinformatika, rekam medis, jurnal riset, visualisasi data lab | `rounded-xs` to `rounded-sm` (2px - 4px) | Grid garis netral presisi, kontras tinggi, penataan data tabular bersih | `Source Serif 4` / `Libre Baskerville` + `Source Sans 3` / `Inter` |
| **8. Scandinavian, Barely-There UI & Warm Minimalism** | Portofolio arsitek, studio kuratorial, e-commerce minimalis, jurnal zen | `rounded-sm` to `rounded-md` (4px - 6px) | Garis hairline ultra-ringan (`stone-200/60`), palet hangat organik, whitespace lapang | `Newsreader` / `Lora` + `Instrument Sans` / `Satoshi` |
| **9. Industrial, Hardware & Cyber-Physical** | Audio synthesizers, telemetry instruments, IoT controllers, precision hardware (Teenage Engineering / Dieter Rams) | `rounded-xs` to `rounded-sm` (2px - 4px) | Matte anodized surface, knurled textures, recessed bevels (`box-shadow: inset 0 1px 2px rgba(0,0,0,0.4)`), tactile indicator LEDs | `Cabinet Grotesk` / `Chivo` / `Space Grotesk` + `IBM Plex Mono` / `JetBrains Mono` / `Instrument Sans` |
| **10. Civic Tech, GovTech & Universal Public Services** | Layanan publik, portal kependudukan, instansi regulasi, jaminan sosial (UK GDS / USWDS standard) | `rounded-none` to `rounded-xs` (0px - 2px) | Nol bayangan kosmetik, batas 1px solid tegas (`border-zinc-300`), focus ring 3px solid kontras tinggi, WCAG AAA 7:1 | `Plus Jakarta Sans` / `Libre Franklin` / `Source Sans 3` + `Inter` |
| **11. Spatial & Tactile Neu-Physical (The Tactile Instrument)** | Synthesizers, Eurorack controllers, pro audio consoles, precision hardware controllers | `rounded-xs` to `rounded-sm` (3px - 5px) | Recessed inner bevels (`box-shadow: inset 0 1px 2px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.06)`), knurled rotary textures, tactile mechanical toggle switches | `Cabinet Grotesk` / `Chivo` + `IBM Plex Mono` / `JetBrains Mono` |
| **12. Clinical & Diagnostic Healthcare Systems** | Rekam medis elektronik (EMR), vital telemetry, radiologi/patologi, dashboard monitoring uji klinis | `rounded-xs` to `rounded-sm` (2px - 4px) | Batas 1px solid tegas (`border-slate-300`), palet clinical slate/navy/white, status alert triase berstandar medis, tabular numbers strictly aligned | `Source Serif 4` / `Inter` + `Source Sans 3` / `IBM Plex Sans` + tabular `JetBrains Mono` |
| **13. High-Frequency Trading, Crypto & Liquidity Terminals** | Order books, crypto exchanges, execution algorithms, quantitative finance | `rounded-none` to `rounded-xs` (0px - 2px) | Background dark obsidian (`#0c0e12`), hairline grid 1px solid (`border-zinc-800`), bi-color indicators (`emerald-500` bid / `rose-500` ask), zero cosmetic margin, tabular right-aligned numbers | `Space Grotesk` / `Geist Mono` + `JetBrains Mono` / `IBM Plex Mono` (strictly tabular) |
| **14. Luxury Hospitality, Architecture & Haute Horlogerie** | Boutique hotels, architectural studios, fine watchmaking, luxury real estate | `rounded-none` to `rounded-sm` (0px - 4px) | Whitespace lapang (65%+ negative space), border 1px champagne/warm stone (`border-stone-200/50`), bayangan ambient tak kasat mata, fotografi monokrom bertekstur | `Boska` / `Instrument Serif` / `Zodiak` + `Instrument Sans` / `Satoshi` |
| **15. EdTech, Gamified Learning & Interactive Play** | Platform edukasi interaktif, kids apps, quiz engines, language learning | `rounded-2xl` to `rounded-3xl` (16px - 24px) via `corner-shape: squircle` | Permukaan 3D tactile pressable (`border-b-4 active:border-b-0 active:translate-y-1`), warna cerah berstandar aksesibilitas tinggi, kontras WCAG AAA | `Outfit` / `DM Sans` + `Lexend` / `Inclusive Sans` |
| **16. Tactical HUD, Geospatial & Mission Control (C2 Systems)** | Telemetri satelit, pertahanan maritim, command & control (C2), sensor drone, peta GIS | `rounded-none` (0px strictly) | Border struktural 1px (`border-emerald-900/60` atau `border-amber-900/50`), corner notch crosshair markers (`border-t-2 border-l-2`), indikator status heksadesimal, nol kurvatur | `Space Grotesk` / `Chivo` + `JetBrains Mono` / `IBM Plex Mono` |
| **17. Autonomous AI Workbench & Agent Orchestration Canvas** | Multi-agent execution traces, DAG flow inspectors, streaming token telemetry, human-in-the-loop checkpoints | `rounded-xs` to `rounded-sm` (2px - 4px) | Border hairline 1px (`border-zinc-800/80` atau `border-zinc-200/80`), token stream monospace, step execution badges, nol glowing purple neon blobs | `Geist` / `Instrument Sans` + tabular `JetBrains Mono` / `Space Mono` |
| **18. Climate Tech, Renewable Energy & Grid Telemetry** | Megawatt power distribution, solar/wind array SCADA, carbon offset accounting, microgrid telemetry | `rounded-xs` to `rounded-sm` (2px - 4px) | Border solid 1px (`border-slate-700` atau `border-emerald-900/50`), dark slate ground, high-contrast tabular numeric readout, phase status indicators | `Space Grotesk` / `Chivo` + `IBM Plex Mono` / `Source Sans 3` |
| **19. Spatial Computing, VisionOS Glass & Depth Tactility (Physical Glass)** | Volumetric UI panels, spatial dashboards, translucent depth surfaces dengan refraksi cahaya optik | `rounded-2xl` to `rounded-3xl` (20px - 28px) via `corner-shape: squircle` | Refractive specular border 1px (`border-white/20`), layered depth backplate, WCAG AAA text protection backing shield, zero unreadable text | `Outfit` / `DM Sans` + `Plus Jakarta Sans` |
| **20. B2B Logistics, Fleet Dispatch & Warehouse Yard Management** | Real-time freight tracking, bill of lading (BOL), dock scheduling, cross-dock matrix, SKU batch sorting | `rounded-none` to `rounded-xs` (0px - 3px) | High-contrast structural grid, dense tabular rows, warning amber/slate status indicators, zero cosmetic whitespace waste | `Inter` / `Source Sans 3` + tabular `JetBrains Mono` |
| **21. Defense, Avionics & Critical Mission Systems (DO-178C)** | Fly-by-wire telemetri, cockpit MFD, drone payload telemetry, radar track displays | `rounded-none` (0px strictly) | Border hairline 1px solid (`border-emerald-800/80` / `border-amber-700/80`), phosphor green / tactical amber monokromatik, high contrast symbology, zero rounded corners | `Chivo` / `Space Grotesk` + `IBM Plex Mono` / `JetBrains Mono` |
| **22. AgriTech, Forestry & Soil Telemetry** | IoT sensor tanah NPK, irigasi presisi, kanopi multispektral NDVI, armada drone pertanian | `rounded-sm` to `rounded-md` (4px - 8px) | Border tone tanah organik 1px (`stone-300` / `emerald-900/40`), daylight readability mode kontras tinggi (outdoor sunlight > 10:1), status moisture/humidity gauges | `Plus Jakarta Sans` / `Outfit` + `DM Sans` / `IBM Plex Mono` |
| **23. LegalTech, Compliance & Regulatory Audit Chambers** | Penelusuran yurisprudensi, audit AML/KYC, analisis klausal kontrak komparatif, e-discovery | `rounded-none` to `rounded-xs` (0px - 2px) | Border netral solid 1px (`border-stone-300`), dual-column statutory cross-reference viewer, line-numbering gutter margin, zero cosmetic decoration | `Source Serif 4` / `Libre Baskerville` + `Source Sans 3` / `Inter` |
| **24. Audio Production, DSP & Virtual Studio Instruments (DAW / VST)** | Digital Audio Workstations, parametrik EQ, synth modular virtual, peak loudness metering | `rounded-xs` to `rounded-sm` (2px - 4px) | Matte dark rack-mount surface (`#18181b`), recessed rotary potentiometer notches, VU/Peak loudness LED bars (`-inf to +6dB`), frequency curve grids | `Cabinet Grotesk` / `Chivo` + `JetBrains Mono` / `Space Mono` |
| **25. Automotive In-Vehicle Infotainment (IVI) & Telematics** | Layar konsol mobil pintar, manajemen daya baterai EV, navigasi rute dinamis, ADAS alerts | `rounded-md` to `rounded-xl` (8px - 14px) via `corner-shape: squircle` | High-glanceability tactile cards (waktu pengenalan < 2 detik), touch target ekstra lega (min 56x56px), auto-switching ambient day/night contrast, zero micro-copy | `Plus Jakarta Sans` / `Outfit` + `Inter` |
| **26. Cybersecurity Operations Center (SOC) & Threat Intelligence** | SIEM triage, packet capture, CVE vulnerability scanners, malware analysis, zero-trust network perimeter | `rounded-none` to `rounded-xs` (0px - 2px) | Hairline 1px grid solid (`border-slate-800`), midnight slate ground (`#090d16`), status alert levels (`amber-500` elevated / `crimson-500` critical), zero decorative blur | `Chivo` / `Space Grotesk` + `JetBrains Mono` / `IBM Plex Mono` (strictly tabular) |
| **27. Biotech, Genomic Sequencing & Wet Lab LIMS** | Penjajaran sekuens DNA/RNA, matriks plat 96-well PCR, CRISPR assay logs, inventaris reagen, spektrometri | `rounded-xs` to `rounded-sm` (2px - 4px) | Sterile cleanroom ice-slate (`#f8fafc` / `#0f172a`), border presisi 1px (`border-sky-200/60` / `border-sky-900/50`), indikator fluorofor, zero mesh gradient noise | `Source Serif 4` / `Instrument Sans` + tabular `JetBrains Mono` |
| **28. Solarpunk, Circular Economy & Ecological Restoration** | Registri permakultur, kredit karbon regeneratif, rantai pasok daur ulang, koperasi energi mikro | `rounded-lg` to `rounded-xl` (10px - 14px) via `corner-shape: squircle` | Palet living loam hangat (`#fbf8f3`), aksen klorofil & terracotta (`stone-300/80`), elevasi taktil organik alami, ambient daylight shadow | `Sentient` / `Fraunces` + `Figtree` / `Plus Jakarta Sans` |
| **29. Robotics, Autonomous Fleet & Drone Teleoperation** | Visualizer node ROS 2, LiDAR 3D point cloud, kinematika sudut sendi, telemetri suhu aktuator | `rounded-none` to `rounded-xs` (0px - 3px) | Titanium slate industrial (`#111318`), aksen hazard amber & safety orange, card telemetri tersembunyi, retikel HUD kontras tinggi | `Cabinet Grotesk` / `Chivo` + tabular `IBM Plex Mono` |
| **30. Fintech Wealth Management, Family Office & Private Banking** | Alokasi portofolio multi-aset, trust estat, obligasi daerah high-yield, matriks tax-loss harvesting | `rounded-xs` to `rounded-sm` (2px - 4px) | Deep hunter green (`#0a1813`) atau warm alabaster, border hairline 1px champagne (`stone-300/60`), ambient depth tenang, angka tabular wajib rata kanan | `Zodiak` / `DM Serif Display` + `Instrument Sans` / `General Sans` + tabular `JetBrains Mono` |
| **31. SpaceTech, Orbital Mechanics & Satellite Constellation Operations** | Telemetri orbit satelit, pemantauan konstelasi LEO, analisis spektrum RF, peluncuran roket | `rounded-none` to `rounded-xs` (0px - 2px) | Midnight void deep space background (`#050811`), hairline 1px grid (`border-cyan-950/60`), radar coordinate reticles, telemetry data tables strictly aligned | `Space Grotesk` / `Chivo` + tabular `JetBrains Mono` / `Space Mono` |
| **32. Urban Planning, Smart Cities & Transportation SCADA** | Manajemen lampu lalu lintas dinamis, sensor IoT polusi udara kota, GIS zonasi tata ruang wilayah, pemantauan jaringan transit MRT/LRT | `rounded-xs` to `rounded-sm` (2px - 4px) | Concrete slate ground (`#1e293b` / `#f1f5f9`), hairline 1px neutral borders (`border-slate-300` / `border-slate-700`), status flow indicators (greenway / congestion amber / transit alert red), high-density spatial readouts | `Plus Jakarta Sans` / `General Sans` + `IBM Plex Mono` / `Inter` |
| **33. Maritime Navigation, Port Logistics & Oceanic Telemetry** | AIS tracking kapal kargo, manajemen dermaga kontainer pelabuhan, sensor batimetri laut, pasang surut air laut | `rounded-none` to `rounded-xs` (0px - 2px) | Deep nautical navy (`#0a192f` / `#0f2b48`), border 1px nautical bronze/slate (`border-cyan-900/40`), high-contrast daylight mode untuk layar jembatan kapal (> 10:1), tabular coordinates (Lat/Long knots) | `Chivo` / `Space Grotesk` + tabular `IBM Plex Mono` / `Source Sans 3` |
| **34. Neurodivergent-First, Cognitive Accessibility & Sensory Calm UI** | Antarmuka ramah ADHD, autisme, disleksia, dan hipersensitivitas sensorik. Zero visual noise, predictable layouts, low-contrast soothing palettes | `rounded-lg` to `rounded-xl` (10px - 14px) via `corner-shape: squircle` | Soft muted sage/sand tones (`#f4f6f0` / `#232724`), nol animasi otomatis (strictly `prefers-reduced-motion`), border lembut 1px tanpa bayangan kontras tinggi, spacing lega anti-claustrophobia | `Lexend` / `Inclusive Sans` + `DM Sans` / `Outfit` |
| **35. Mining, Heavy Machinery & Industrial Geophysics** | Telemetri alat berat tambang (excavator/haul truck), seismologi geofisika, kestabilan lereng tambang, kadar bijih mineral | `rounded-none` to `rounded-xs` (0px - 3px) | Industrial basalt ground (`#18181b`), safety hazard yellow/amber 1px structural borders (`border-amber-500/80`), high-visibility rugged buttons (min 52px), zero decorative blur | `Cabinet Grotesk` / `Chivo` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **36. Philanthropy, NGO Foundations & Global Humanitarian Relief** | Yayasan amal kemanusiaan, alokasi bantuan bencana darurat, transparansi audit donasi publik, LSM lingkungan | `rounded-sm` to `rounded-md` (4px - 8px) | Warm humanitarian earth & sky tones (`#faf9f5`, deep terracotta `#9c4221`, ocean blue), border hairline 1px hangat, kartu donasi transparan dengan metrik terverifikasi, whitespace bermartabat | `Source Serif 4` / `Sentient` + `Plus Jakarta Sans` / `Source Sans 3` |
| **37. Quantum Computing, Supercomputing & Quantum Optics Chambers** | Qubit coherence telemetry, cryogenics, quantum circuit schematics, Bloch sphere state vectors, laser interferometry | `rounded-none` to `rounded-xs` (0px - 2px) | Deep obsidian/cryo-indigo (`#07090e`), laser-etched hairline borders (`border-cyan-500/30`), tabular monospaced phase angles, zero soft gradient noise | `Space Grotesk` / `Cabinet Grotesk` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **38. Sports Science, Athletic Biomechanics & High-Performance Kinesiology** | Force plates, VO2 max telemetry, surface EMG muscle activation, GPS sprint velocity, 3D joint kinematic vectors | `rounded-md` to `rounded-lg` (6px - 10px) via `corner-shape: squircle` | Dark titanium ground (`#121417`), high-visibility safety lime (`#a3e635`) & infrared accents, tactile data cards, high-glanceability numeric readouts | `Plus Jakarta Sans` / `Outfit` + `Instrument Sans` + tabular `JetBrains Mono` |
| **39. Culinary Arts, Gastronomy & High-End Winery Cellars** | Sommelier wine pairing, vintage terroir catalogs, sensory tasting notes, seasonal degustation menus, fermentation temp curves | `rounded-xs` to `rounded-sm` (2px - 6px) | Deep burgundy (`#2c0c16`), rich olive, warm parchment ground (`#faf7f2`), hairline 1px bronze borders, generous negative space | `Playfair Display` / `Boska` / `Sentient` + `Lora` / `Satoshi` / `Instrument Sans` |
| **40. Geological Hazard, Volcanology & Seismic Early Warning Systems** | Real-time seismographs, Richter/P-wave acceleration, tiltmeter deformation, volcanic ash plume lidar telemetry | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Basalt dark mode (`#111215`), hazard crimson/amber real-time waveform traces, millisecond timestamp telemetry, zero decorative blur | `Chivo` / `Space Grotesk` + tabular `IBM Plex Mono` / `JetBrains Mono` |
| **41. Nuclear Engineering, Particle Physics & Fusion SCADA** | Tokamak plasma confinement, magnetic coil telemetry, neutron flux sensors, radiation dosimetry, ultra-high vacuum pressure | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Deep reactor navy/black (`#080b12`), warning cadmium yellow (`#f59e0b`) & hazard orange accents, high-contrast tabular readouts, zero decorative drop shadows | `Cabinet Grotesk` / `Chivo` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **42. Film Production, Cinematography & Color Grading Suites** | LUT management, waveform monitors, vectorscopes, ACES color pipelines, shot list breakdowns, camera lens metadata | `rounded-xs` to `rounded-sm` (2px - 4px) | Neutral 18% gray / D65 darkroom studio ground (`#121212`), color-neutral chrome, precise timeline scrubbing, tabular timecode (SMPTE `01:24:35:12`) | `Space Grotesk` / `Instrument Sans` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **43. Embedded IoT, Microcontroller & Hardware Flashing Portals** | ESP32/STM32 WebSerial & WebUSB firmware flashers, logic analyzers, bus monitors | `rounded-none` to `rounded-xs` (0px - 2px) | Machined dark anodized ground (`#13151a`), hairline 1px zinc/amber borders, hex dump monospace tabular streams, tactile flash buttons | `Chivo` / `Space Grotesk` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **44. Emergency Dispatch, 911 & Incident Command Systems (CAD / FirstNet)** | Computer-aided dispatch, fire & EMS call routing, disaster response coordination, tactical triage | `rounded-none` to `rounded-xs` (0px - 2px) | High-contrast situational dark mode (`#0b0f19`), emergency beacon status amber/crimson/emerald, 1px high-visibility structural borders, rapid unit dispatch tables | `Public Sans` / `Libre Franklin` + `Source Sans 3` + tabular `IBM Plex Mono` |
| **45. Scientific Observatories, Radio Astronomy & Deep-Sky Astrophysics** | Interferometer arrays, radio telescope spectrometers (ALMA, JWST), gravitational wave detectors, ephemeris | `rounded-none` to `rounded-xs` (0px - 2px) | Pitch-black stellar field (`#020408`), spectral emission lines (hydrogen alpha crimson, oxygen III cyan), laser-calibrated 1px hairline grids (`border-cyan-950/70`), right-aligned RA/Dec celestial coordinates | `Space Grotesk` / `Cabinet Grotesk` + tabular `JetBrains Mono` / `Space Mono` |
| **46. Civic Archival, Rare Manuscripts & Digital Humanities Paleography** | Digital manuscript transcriptions, archival codicology, parchment multispectral imaging, epigraphic registers | `rounded-xs` to `rounded-sm` (2px - 4px) | Warm parchment / linen ground (`#f7f4ec` / `#1c1917`), hairline 1px bronze/stone borders, side-by-side manuscript facsimile viewer with zoom gutter | `Cormorant Garamond` / `Sentient` / `Source Serif 4` + `Lora` / `Instrument Sans` + `IBM Plex Mono` |
| **47. Forensic Accounting, Fraud Investigation & AML Anti-Corruption Audit** | Shell company graph tracing, wire transfer reconciliation, forensic ledger audits, whistleblower evidence vaults | `rounded-none` to `rounded-xs` (0px - 2px) | Neutral bone slate ground (`#f8fafc` / `#0f172a`), 1px strict ledger borders, red-flag risk severity indicators, tabular currency and transaction hash matrices with strict right-alignment | `Source Serif 4` / `Inter Tight` + `Source Sans 3` + tabular `JetBrains Mono` |
| **48. Clinical Pharmacokinetics & Pharmaceutical Discovery Assays** | In-vitro binding assays, ADME profiling, IC50 titration curves, dose-escalation telemetry, molecular property tables | `rounded-xs` to `rounded-sm` (2px - 4px) | Sterile clinical white/cool slate (`#ffffff` / `#0a1120`), crisp 1px borders (`border-sky-200` / `border-sky-900`), log-scale concentration curves, tabular nanomolar readouts | `Source Serif 4` / `Instrument Sans` + tabular `JetBrains Mono` |
| **49. Battery Energy Storage Systems (BESS) & Virtual Power Plants (VPP)** | Megawatt battery telemetry, state of charge (SoC/SoH), cell temperature thermals, grid frequency regulation, peak shaving dispatch | `rounded-xs` to `rounded-sm` (2px - 4px) | Dark industrial ground (`#0b0e14`), high-voltage amber (`#f59e0b`) & grid cyan (`#06b6d4`) 1px structural borders, real-time kilowatt-hour telemetry readouts | `Space Grotesk` / `Chivo` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **50. Micro-Mobility, EV Fleet Dispatch & Charging Infrastructure (OCPP / ChargePoint SCADA)** | EV charger status (AC Level 2 / DC Fast), OCPP 2.0.1 transaction telemetry, charging curves, fleet state-of-charge, peak demand tariff matrix | `rounded-md` to `rounded-lg` (6px - 8px) via `corner-shape: squircle` | High-contrast daylight readable slate (`#f8fafc` / `#0f172a`), 1px solid green/blue status borders (`border-emerald-500/60`), glanceable charging metrics | `Plus Jakarta Sans` / `Outfit` + tabular `JetBrains Mono` / `Inter` |
| **51. Semiconductor Fabrication & Cleanroom Lithography Telemetry (SECS/GEM Standard)** | Silicon wafer stepper alignment, nanometer overlay error, extreme ultraviolet (EUV) dose telemetry, vacuum chamber particles, wafer map yields | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Sterile cleanroom obsidian (`#070a0f`), ultra-fine 1px laser borders (`border-cyan-500/30` / `border-amber-400/40`), sub-nanometer tabular metrics, zero decorative blur | `Space Grotesk` / `Cabinet Grotesk` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **52. Autonomous Oceanic Submersibles & Deep-Sea ROV Telemetry** | Hydrostatic pressure, sonar multibeam bathymetry, manipulator arm joint telemetry, thruster vectoring, acoustic modem uplink | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Abyssal deep navy (`#030712`), bioluminescent cyan (`#22d3ee`) & caution hazard amber 1px borders, high-contrast sonar waterfall displays | `Chivo` / `Space Grotesk` + tabular `IBM Plex Mono` / `JetBrains Mono` |
| **53. Precision Aquaculture & Marine Ecosystem Bio-Telemetry** | Dissolved oxygen (DO), water salinity, turbidity, automated feed dispersal, acoustic fish biomass estimation, algal bloom alerts | `rounded-sm` to `rounded-md` (4px - 6px) via `corner-shape: squircle` | Deep ocean teal (`#042f2e` / `#f0fdfa`), organic hairline borders (`border-teal-500/30`), daylight-readable high-contrast gauges | `Plus Jakarta Sans` / `Sentient` + `DM Sans` / tabular `JetBrains Mono` |
| **54. Disaster Relief Drone Swarm & Tactical Search and Rescue (SAR)** | Thermal infrared human detection, swarm waypoint routing, GPS breadcrumbs, radio beacon signal strength, emergency air-drop payload status | `rounded-none` to `rounded-xs` (0px - 2px strictly) | High-visibility field dark mode (`#0c0f17`), emergency beacon crimson (`#ef4444`) & tactical rescue amber (`#f59e0b`) 1px borders, high-contrast map overlays | `Public Sans` / `Chivo` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **55. Geospatial Satellite SAR & Planetary Earth Observation (InSAR / Multispectral LEO)** | Synthetic Aperture Radar (SAR), interferometri InSAR, konstelasi observasi bumi multispektral LEO, telemetri optik orbital, raster vektor geospasial | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Pitch-black void (`#030712`), false-color interferometric phase palette (cyan/magenta/amber phase fringes), hairline 1px solid grids (`border-cyan-900/40`), corner reticle brackets, tabular lat/long coordinates | `Space Grotesk` / `Cabinet Grotesk` + tabular `JetBrains Mono` / `Space Mono` |
| **56. High-Performance Computing (HPC), AI Cluster & GPU Fabric SCADA (Slurm / InfiniBand)** | GPU node cluster telemetry (H100/B200/TPU v6), InfiniBand RoCE non-blocking fabric, Slurm job queues, liquid cooling manifold thermals (supply/return water temps), NVLink bandwidth | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Basalt server-chassis slate (`#0d1117`), status LED rail (emerald healthy / amber throttle / crimson link-down), 1px chassis borders (`border-slate-800`), dense tabular throughput readouts (TB/s, PFLOPS, watts per node) | `Chivo` / `Space Grotesk` + tabular `JetBrains Mono` / `IBM Plex Mono` |
| **57. Synthetic Biology, Precision Fermentation & Bioreactor Telemetry (Biofoundry / Chemostat)** | Industrial bioreactor SCADA, precision microbial fermentation, dissolved oxygen DO curves, off-gas mass spectrometry (RQ/CER), automated feed dosing pumps, strain genomics | `rounded-xs` to `rounded-sm` (2px - 4px) | Stainless steel sterile slate (`#f8fafc` / `#0f172a`), hairline 1px sterile borders (`border-emerald-500/30` / `border-teal-900/40`), real-time batch fermentation graphs, tabular pH/agitation RPM readouts | `Source Serif 4` / `Instrument Sans` + tabular `JetBrains Mono` / `Source Sans 3` |
| **58. Carbon Capture, Geothermal & Deep Borehole SCADA (Direct Air Capture / EGS)** | Direct Air Capture (DAC) adsorption cycles, geologic CO2 sequestration injection pressure, enhanced geothermal systems (EGS) downhole seismic and thermal gradient telemetry | `rounded-none` to `rounded-xs` (0px - 3px) | Deep geological terra/slate (`#121417`), subterranean hazard amber (`#d97706`) & mineral rust accents, 1px structural casing borders (`border-stone-800`), dense tabular mega-pascals (MPa) and metric tons CO2/hr readouts | `Cabinet Grotesk` / `Chivo` + tabular `IBM Plex Mono` / `JetBrains Mono` |
| **59. Neuromorphic Computing & Brain-Computer Interface (BCI / Neural Telemetry)** | High-density microelectrode arrays (Utah array / Neuropixels), spike sorting raster plots, raw microvolt EEG telemetry, real-time closed-loop neural decoding, BCI prosthetic motor intents | `rounded-none` to `rounded-xs` (0px - 2px strictly) | Deep synaptic midnight (`#06080e`), neural axon phosphor teal (`#14b8a6`) & microvolt violet waveforms, 1px laser-etched borders (`border-teal-950/60`), millisecond-interval action potential event tables | `Space Grotesk` / `Chivo` + tabular `JetBrains Mono` / `Space Mono` |
| **60. Circular Economy, Digital Product Passports & Supply-Chain Traceability (DPP / Provenance)** | EU Digital Product Passport (DPP), textile recyclability certificates, cradle-to-cradle material passports, battery lifecycle passports, cryptographic supply chain provenance | `rounded-sm` to `rounded-md` (4px - 6px) via `corner-shape: squircle` | Raw unbleached linen ground (`#faf8f5` / `#1a1917`), tactile 1px organic borders (`border-stone-300` / `border-stone-800`), verified QR/DID verification badges, clean provenance timeline milestones, zero neon fluff | `Sentient` / `Plus Jakarta Sans` + `DM Sans` / tabular `IBM Plex Mono` |

### B. The Brand vs. Product Surface Register
Sebuah kesalahan fatal AI adalah mencampuradukkan kebutuhan estetika permukaan publik (*brand surfaces*) dengan permukaan kerja (*product surfaces*):
* **Brand Surfaces (Landing Pages, Hero, Portfolio, Editorial Showcase):**
  * Prioritas: Diferensiasi emosional, karakter tipografi display berani, whitespace lapang, pencahayaan alami terukur.
  * Formula: Heading ekspresif (`Instrument Serif` / `Bricolage Grotesque` / `Clash Display` / `Sentient`) + body UI tenang (`Instrument Sans` / `Satoshi`), tata letak asimetris dinamis, drop-shadow ambient lembut.
* **Product Surfaces (Dashboards, Konsol Data, Settings, Tabel Transaksi, Modal Kerja):**
  * Prioritas: Kerapatan informasi (*information density*), prediktabilitas visual, kecepatan pemindaian (*glanceability*), dan nol distraksi kosmetik.
  * Formula: Radius kompak (`rounded-sm` atau `rounded-md`), tipografi grotesk netral (`Instrument Sans` / `General Sans` / `Inter`), angka tabular `tabular-nums` yang rata kanan, border struktural 1px netral, dan larangan keras terhadap font display berbobot besar atau mesh gradient di latar belakang kerja.

### C. Psychology of Border Radius, Contour Bias & Native Squircles
Riset kognitif neurosains (*Bar & Neta 2006; Universal Principles of Design*) membuktikan bahwa amigdala manusia mengevaluasi sudut tajam sebagai potensi bahaya fisik (*contour bias*). Sebaliknya, kurvatur halus diproses secara bawah sadar sebagai objek aman, organik, dan ramah sentuhan.

* **0px - 2px (Sharp & Angular):** Formal, objektif, teknikal, institusional, dan tidak kompromi. Mengaktifkan kewaspadaan kognitif (*heightened focus*). Sangat krusial untuk alert bahaya, audit finansial, telemetri medis, dan akuntabilitas sektor publik di mana ilusi keramahan kosmetik justru menurunkan persepsi ketelitian.
* **Neo-Brutalism 2.0 & Human Counter-Rebellion:** Ketika AI code generator membanjiri web dengan kartu pastel yang seragam dan melengkung mulus, desainer senior secara sengaja menggunakan sudut tegas `0px` (`rounded-none`), border hitam 1px-2px solid, dan offset shadow terukur sebagai deklarasi keaslian manusia (*human authenticity statement*) yang menolak homogenitas korporat AI.
* **4px - 8px (Subtly Rounded):** Standar enterprise modern. Menyeimbangkan kredibilitas dan ketegasan bisnis dengan kenyamanan visual antarmuka perangkat lunak kontemporer.
* **12px - 16px (Medium to High Curve):** Hangat, ramah konsumen, mudah didekati, dan santai (*approachable*). Menurunkan friksi interaksi pada aplikasi sosial, onboarding, dan checkout konsumen.
* **Native Continuous Curvature: `corner-shape: squircle` (CSS Borders and Backgrounds Module Level 4):**
  Standar CSS klasik `border-radius` memotong sudut menggunakan busur lingkaran matematika biasa (*circular arc*), yang memicu lonjakan tangen tajam di titik pertemuan antara garis lurus dan kurva. Mata manusia menangkap diskontinuitas ini sebagai sudut yang sedikit terjepit (*pinched optical corners*).
  Standar modern memperkenalkan `corner-shape: squircle;` (atau `superellipse(n)`):
  ```css
  .modern-card {
    border-radius: 24px;
    corner-shape: squircle;
  }
  ```
  Ini menghasilkan kelengkungan kontinyu kelas G2 (*smooth curvature continuity*), identik dengan kurva hardware iOS/macOS, melenyapkan distorsi optik pada kartu dan modal besar.
* **Pill / 9999px (Full Rounded):** Khusus untuk badge status kecil, tombol CTA primer aksi tunggal, atau avatar. **DILARANG KERAS** untuk container atau kartu konten utama.
* **The Over-Rounding Danger (Soap-Bar Trap):** Membulatkan seluruh kontainer dan card secara berlebihan (`rounded-3xl` / `rounded-full` pada kartu lebar) merusak kredibilitas profesional, membuang ruang padding internal, dan membuat antarmuka tampak seperti sabun batangan atau mainan anak-anak (*infantile design trap*).

### D. Design System Radius Token Scale
Gunakan skala token terstandarisasi daripada nilai sembarangan:
* `radius-none`: `0px` (Brutalist, grid tabel finansial/sains)
* `radius-xs`: `2px` (Elemen input dan tag padat pada dashboard data)
* `radius-sm`: `4px` (Button kecil, tooltip, container editorial)
* `radius-md`: `8px` (Standard card, modal dialog SaaS)
* `radius-lg`: `16px` (Floating panel atau mobile sheet consumer)
* `radius-full`: `9999px` (Status badges kecil, avatars)

### E. Concentric Border-Radius Nesting Law (Anti-Pinched-Corner Syndrome)
Ketika container yang melengkung membungkus elemen anak (gambar, sub-card, atau banner), memberikan border-radius yang identik antara parent dan child menghasilkan sudut terdistorsi dan visual terjepit (*pinched corners*).

Desainer senior menerapkan hukum sarang konsentris (*concentric harmony*):
$$\text{Radius}_{\text{inner}} = \max(0, \text{Radius}_{\text{outer}} - \text{Padding})$$
$$\text{Radius}_{\text{outer}} = \text{Radius}_{\text{inner}} + \text{Padding}$$

* *Contoh Praktis:* Jika container luar memiliki `rounded-2xl` (16px) dengan padding internal `p-3` (12px), maka child element di dalamnya WAJIB menggunakan `rounded-sm` ($16 - 12 = 4\text{px}$).
* Jangan pernah memberikan `rounded-2xl` baik pada pembungkus luar maupun pada elemen di dalamnya secara bersamaan.

### F. Typography & Geometry Pairing
Harmoni visual menuntut sinkronisasi antara sudut kurvatur UI dengan anatomi tipografi:
* **Tipografi Geometris / Tajam** (*Space Grotesk*, *Cabinet Grotesk*, *JetBrains Mono*) berpasangan harmonis dengan radius tajam (`0px` hingga `4px`).
* **Tipografi Humanis / Rounded** (*Outfit*, *Plus Jakarta Sans*, *DM Sans*, *Instrument Sans*) membutuhkan kontur kartu yang lebih lembut (`6px` hingga `16px`) agar senada dengan lengkungan hurufnya.

### G. Motion Easing Physics (Anti-Jello Easing Standard)
* **BANNED:** Animasi membal berlebihan (*jello bouncy springs*), overshoot liar saat hover, atau transisi linear tanpa perlambatan alami.
* **HUMAN STANDARD:** Gunakan kurva deselerasi presisi modern (*out-cubic* atau *out-expo*) berdurasi ringkas:
  ```css
  /* Deceleration curve untuk UI transitions */
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 150ms;
  ```
  Elemen interaktif harus merespons sentuhan/kursor pengguna secara instan dan menetap tanpa getaran atau goyangan kosmetik yang memperlambat alur kerja.

---

## 7. Prohibited AI Slop Design Cliches (Newly Emerging Tropes Catalog)

AI code generators suffer from distributional convergence and model collapse, producing identical startup websites that degrade buyer trust ("The AI Starter Pack"). The following design tropes are strictly prohibited:

### 1. The Border Beam / Spinning Conic Gradient
* **BANNED:** A thin, hyper-active neon line or conic gradient (usually electric purple, cyan, or acid green) tracking continuously around card borders or inputs to scream *"Look how futuristic our tech stack is!"*.
* **HUMAN STANDARD:** Clean, static hairline borders (`border border-zinc-200/80` or `border-zinc-800/60`) paired with subtle ambient drop shadows. Movement should only occur as an immediate, purposeful response to user input (focus-visible rings).

### 2. The Shimmer Button / Pulsing Glare CTA
* **BANNED:** A call-to-action button featuring a fast-moving diagonal white glare, light sweep, or traveling sheen across the button text.
* **HUMAN STANDARD:** High-contrast solid or understated outline buttons with crisp typography and standard hover/active opacity or background shifts (150ms ease).

### 3. Button Sparkle Infestation (The AI Magic Wand)
* **BANNED:** Four-pointed SVG stars, sparkles, or magic wand icons floating inside or next to every CTA, button, card header, and input field.
* **HUMAN STANDARD:** Clear, descriptive action labels stating exact operations ("Beli Buku", "Deploy Pipeline", "Export CSV") without decorative magic symbols.

### 4. The Fake Infinite Marquee (Logo Cloud & Testimonial Scroll)
* **BANNED:** Endless CSS-scrolling strips of grayscale fictional logos (`Acme Corp`, `Quotient`, `Layers`) or dummy review cards sliding infinitely with CSS gradient masks on both edges.
* **HUMAN STANDARD:** Static, curated logo rows of verifiable partners or authentic customer case studies with specific operational outcomes.

### 5. Pitch-Black Background with CSS Dot-Grid / Crosshair Matrix
* **BANNED:** Pitch-black obsidian (`#030712`) backgrounds overlaid with absolute-positioned CSS dot grids or faint coordinate crosshair lines to cosmetically fake a "developer/matrix" vibe.
* **HUMAN STANDARD:** Grounded surfaces: natural stone/zinc tones, subtle grain, or clean architectural white/slate with functional visual hierarchy.

### 6. Vague Nebula / Mesh Gradient Blob
* **BANNED:** Blurry, heavily animated pastel or neon gradient blobs (`radial-gradient(ellipse at top, #7c3aed, transparent)`) floating aimlessly behind hero text, pretending to be a neural network thinking deep thoughts.
* **HUMAN STANDARD:** Purposeful lighting or deliberate contrast between crisp foreground typography and clean solid/subtly tinted structural backgrounds.

### 7. The Floating Eyebrow Pill / Badge
* **BANNED:** Injecting `<div class="rounded-full border border-violet-200 ...">` with generic tags (`INTRODUCING V2.0`, `POWERED BY LLM`) above hero headlines.
* **HUMAN STANDARD:** Start directly with an authoritative `<h1>` or use an unboxed, clean editorial kicker (`<p class="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">`).

### 8. The Em Dash Addiction in Headlines and CTAs
* **BANNED:** Obsessive injection of the em dash (`—`) across titles, subtitles, and buttons (`Built for engineers — powered by AI`, `Deploy faster — with zero friction`).
* **HUMAN STANDARD:** Use natural sentence syntax, colons, commas, or separate sentences without gratuitous punctuation crutches.

### 9. Arbitrary Bento Grid Monoculture ("The Cardocalypse")
* **BANNED:** Dividing page bodies into 4-6 random frosted-glass cards with identical 16px radius, filled with arbitrary whitespace, fake interactive toggles, simulated mini terminals, and decorative fluff simply to mimic an Apple bento template.
* **HUMAN STANDARD:** Asymmetric layouts driven by actual content hierarchy: dominant primary showcase panes, compact data tables, or alternating split-feature rows with real code and UI previews.

### 10. Unbounded Glassmorphism & Cards-Inside-Cards Syndrome
* **BANNED:** Stacking multiple translucent panels (`backdrop-blur-md bg-white/10 border border-white/20`) inside other boxed cards (`div.card > div.card-item > div.badge`).
* **HUMAN STANDARD:** Flat typographic grouping. Rely on negative space, subtle tint shifts, and font weight variations to delineate hierarchy instead of nesting boxes within boxes.

### 11. Formulaic 3-Step Feature Columns ("Connect, Automate, Scale")
* **BANNED:** Three identical columns containing a line icon inside a colored rounded square, a 3-word title, and a formulaic 2-sentence description.
* **HUMAN STANDARD:** Showcase real technical interfaces, interactive demos, code snippets, or structured comparison grids.

### 12. Vapid Buzzword AI Copywriting
* **BANNED:** Fluffy AI buzzwords (*Revolutionize, Unleash, Supercharge, Seamless, Next-Gen, Frictionless, Paradigm, Magic, Effortless, All-In-One*) and formulaic hero subtitle structures (*"The all-in-one platform to [verb] your [noun] without [pain point]"*).
* **HUMAN STANDARD:** Grounded, domain-specific language stating exact utility and technical truth with clean, natural punctuation.

### 13. Unsolicited Bouncy Hover Springs & Infinite Motion Loops
* **BANNED:** Cards that spring or scale up aggressively (`scale-105`) the instant a cursor nears them, or background elements that pulse and shift forever, burning CPU cycles.
* **HUMAN STANDARD:** Subtle, purposeful micro-interactions (150ms-200ms ease transitions) adhering strictly to `prefers-reduced-motion`.

### 14. Fake Hero Metric Stat Blocks
* **BANNED:** Slapping giant glowing numbers with generic labels (`99.9% Uptime`, `10x Faster`, `10M+ Users`) without real product context.
* **HUMAN STANDARD:** Present actual operational benchmarks with verifiable units and methodology (e.g., `217.000 baris/detik pada dataset 50.000 transaksi`).

### 15. The Infinite Stock Avatar Testimonial Stack
* **BANNED:** A row of 4 overlapping stock headshot circles next to the text `Trusted by 2,000+ forward-thinking teams` and 5 yellow star SVGs.
* **HUMAN STANDARD:** Real customer case studies with specific operational outcomes, authentic logos, or direct technical quotes.

### 16. Script-Injected Icon Lag (Runtime FOUC)
* **BANNED:** Using client-side scripts to parse and swap icon tags (such as `lucide.createIcons()` or icon font stylesheets), causing layout jumps and delays.
* **HUMAN STANDARD:** Pre-rendered inline vector SVGs bundled directly into the markup.

### 17. Exaggerated Italic Serif Headers on Technical B2B Products
* **BANNED:** Slapping an oversized italic serif typeface onto an unglamorous backend database or DevOps landing page purely as a cosmetic shortcut to fake "luxury".
* **HUMAN STANDARD:** Match typography to technical utility: crisp grotesques, neo-grotesques, or monospace accents.

### 18. Low-Contrast Dark Mode Traps
* **BANNED:** Muted grey text (`#64748b` / `text-slate-500`) on dark charcoal backgrounds failing WCAG AA (4.5:1) legibility standards.
* **HUMAN STANDARD:** Verify text contrast ratios against WCAG AA/AAA. Use crisp high-contrast foreground tokens (`#f8fafc` on `#09090b`).

### 19. The Glowing Cursor Spotlight
* **BANNED:** Attaching dynamic JavaScript mouse listeners that drag a radial gradient flashlight (`radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 80%)`) across feature cards, burning GPU draw calls and distracting from core content.
* **HUMAN STANDARD:** Clean CSS `:hover` states with localized subtle border/background transition (150ms ease) without tracking cursor coordinates across parent grids.

### 20. The Fake Hero Prompt Input
* **BANNED:** Placing a cosmetic mockup of an AI chat input bar in the hero section ("Ask anything..." or "Type a prompt to build...") that does not actually work or just acts as a deceptive trigger opening a signup modal.
* **HUMAN STANDARD:** If an interactive demo exists, make it genuinely functional in a live sandboxed widget; otherwise, use authentic UI screenshots, code snippets, or explicit action buttons.

### 21. Monochromatic Pastel Icon Squircles
* **BANNED:** Prepending every headline or card with an identical rounded squircle container in pastel lavender (`bg-purple-100 text-purple-700`) or light teal, creating repetitive visual clutter.
* **HUMAN STANDARD:** Let typography and structural layout lead. When icons are needed, render them unboxed or integrated cleanly with monochrome foreground colors matching the text hierarchy.

### 22. The Breathing Siri Orb / Pulsing AI Plasma Ball
* **BANNED:** Centering a multi-colored animated canvas or SVG mesh sphere pulsing continuously in the hero background to symbolize "artificial intelligence".
* **HUMAN STANDARD:** Concrete product artifacts: real application screens, clean code blocks, performance data graphs, or authentic workflow diagrams.

### 23. Symmetrical Hero Trap with Floating Isometric Glass Mockups
* **BANNED:** Symmetrical hero sections framed by floating 3D glass tiles, cards tilted at 45 degrees, or abstract frosted rectangles suspended in empty space.
* **HUMAN STANDARD:** Grounded, realistic viewport previews: crisp desktop/mobile browser chrome framing actual responsive product interfaces.

### 24. Single-Weight Sans Monoculture ("Inter Everywhere")
* **BANNED:** Using a single generic sans font (Inter, Roboto, or Arial) at the same weight and spacing across page titles, subtitles, card headers, and body paragraphs.
* **HUMAN STANDARD:** Deliberate typographic contrast: pairing an expressive display face with a disciplined neutral body font, or utilizing distinct optical weights and letter-spacing tracking on a single high-grade variable superfamily.

### 25. The Tokenistic Italicized Accent Word in Sans Headlines
* **BANNED:** Arbitrarily wrapping exactly *one* buzzword in a sans-serif headline with a serif italic font (`Transform your workflow into a <span class="font-serif italic font-normal text-violet-400">seamless</span> experience`) as a cheap, formulaic shortcut to mimic "editorial taste".
* **HUMAN STANDARD:** Typographic confidence. Choose either a unified, strong display headline or pair distinct styles with deliberate semantic purpose across full sentences, not gimmicky mid-sentence word styling.

### 26. Redundant Step Numbering Overload ("01, 02, 03")
* **BANNED:** Slapping giant decorative numerals (`01`, `02`, `03`) above feature cards or process lists when the section header already states "Tiga Langkah" or "How It Works".
* **HUMAN STANDARD:** Clear semantic hierarchy. Let descriptive action titles and functional diagrams explain the workflow without oversized decorative number clutter.

### 27. The Faux Mockup Terminal with Non-Functional Controls
* **BANNED:** Dropping a static fake terminal window with macOS traffic-light buttons (`red/yellow/green`) or non-clickable tab headers containing fabricated, color-coded toy JSON/CLI commands that do not execute or represent the real project.
* **HUMAN STANDARD:** Genuine terminal output blocks with standard `$` prompts, verified runnable commands, or authentic SVG snapshots generated from real system runs.

### 28. Generic Colored Initial-Square Avatars for Fake Social Proof
* **BANNED:** Fabricating customer reviews using square or circular pastel badges containing two letters (`JD`, `SM`, `AK`) alongside 5 yellow SVG stars and vague praise like *"This completely revolutionized our workflow!"*.
* **HUMAN STANDARD:** Verifiable user quotes, authentic company logos, case studies with concrete operational metrics (e.g., latency reduction, cost savings), or omit testimonials entirely until real data exists.

### 29. Surface Register Confusion (Slop Contamination between Brand vs Product)
* **BANNED:** Injecting marketing hero fluff—such as oversized display serifs, floating decorative cards, and low-density empty space—into internal productivity tools, admin panels, or complex data dashboards; or conversely, dumping unformatted raw database dumps onto a brand landing page.
* **HUMAN STANDARD:** Strictly separate Brand Surfaces (expressive, spacious, distinct) from Product Surfaces (high density, clean neutral grotesques, tabular alignment, zero decorative noise).

### 30. Gray-on-Color Contrast Collapse (Muted Text Traps)
* **BANNED:** Layering muted gray or slate text (`text-slate-400`, `text-zinc-500`) over tinted or dark-colored backgrounds (deep navy, emerald-950, violet-950), resulting in severe WCAG AA accessibility contrast failure (< 4.5:1).
* **HUMAN STANDARD:** Use mathematically verified contrast ratios. On tinted dark surfaces, use high-contrast tint-aware text tokens (`text-slate-100` or `text-zinc-200`) with explicit minimum 4.5:1 contrast for body copy and 3:1 for large headlines.

### 31. Generic Filler Openers & False Dichotomies
* **BANNED:** Opening landing pages, cards, or hero paragraphs with formulaic cliches: *"In today's fast-paced digital world..."*, *"Whether you're a scrappy startup or an enterprise giant..."*, or *"Everything you need to succeed, all in one place."*.
* **HUMAN STANDARD:** State the exact operational pain and direct technical solution in the very first sentence. Eliminate throat-clearing fluff.

### 32. Jarring Jello Spring Easing Curves
* **BANNED:** Applying exaggerated spring/bounce animation curves that cause cards, dropdowns, or modals to wobble, jiggle, or overshoot violently when hovering or opening.
* **HUMAN STANDARD:** Crisp, professional deceleration physics: `cubic-bezier(0.16, 1, 0.3, 1)` with durations strictly between 150ms-250ms, adhering to `prefers-reduced-motion`.

### 33. The Ambient Particle Canvas / 60fps Starfield Void
* **BANNED:** Running a full-screen WebGL, tsParticles, or Three.js canvas of floating dust motes, swirling constellations, or connective starfield nodes behind landing pages that burns mobile battery and GPU draw calls while conveying zero functional meaning.
* **HUMAN STANDARD:** Clean CSS background foundations: grounded neutral surfaces, intentional CSS radial lighting accents, subtle architectural grid lines, or high-fidelity static SVG illustrations that load instantly with zero runtime thread contention.

### 34. The Sticky Hover Mobile Trap
* **BANNED:** Writing unconditional CSS `:hover` states on cards, buttons, or list items without pointer media query guards (`@media (hover: hover) and (pointer: fine)`), causing buttons and cards to permanently stick in their hover state when tapped on mobile touchscreens.
* **HUMAN STANDARD:** Guard all desktop hover transformations behind `@media (hover: hover) and (pointer: fine)`. For touchscreen devices, use brief `:active` press states (`transform: scale(0.98)`) or clear state indicators that reset immediately on touch release.

### 35. The Unresponsive Double-Tap Delay
* **BANNED:** Omitting `touch-action: manipulation` on buttons, interactive cards, custom toggles, and navigation links, forcing mobile browsers to wait 300ms after every tap to check for an unintended double-tap zoom gesture.
* **HUMAN STANDARD:** Declare `touch-action: manipulation;` globally or on all interactive targets to eliminate touch input latency and deliver instant native-speed response.

### 36. The Orphan Word Headline Staircase
* **BANNED:** Letting multi-line headlines and paragraph text break randomly into awkward staircases or leaving a single lonely word dangling on the final line ("typographic orphan").
* **HUMAN STANDARD:** Apply `text-wrap: balance;` on all headings (`h1`, `h2`, `h3`, `.display-title`) for balanced symmetrical lines, and `text-wrap: pretty;` on body copy (`p`, `article`, `li`) to mathematically eliminate dangling orphan words.

### 37. The Copy-Paste Template Leak (Un-styled UI Library Residue)
* **BANNED:** Dumping raw, un-adapted default components directly from generic UI blocks (e.g. un-themed shadcn/ui or stock Tailwind templates) featuring mismatched border radiuses, boilerplate gray palettes, and generic placeholder labels that do not fit the project domain.
* **HUMAN STANDARD:** Audit and skin every component to match the specific domain archetype, border-radius token scale, custom color harmony, and brand typography established during pre-design theme discovery.

### 38. The Fake Pricing Slider / Non-Functional Tier Calculator
* **BANNED:** Dropping an interactive range slider, tier stepper, or billing toggle in pricing sections that does not actually recalculate feature allowances or costs, or displays static hardcoded numbers regardless of user interaction.
* **HUMAN STANDARD:** Real pricing cards with clear, static feature tiers or fully functional reactive calculators computing exact cost mathematics and live feature breakdowns with zero deceptive UI dead ends.

### 39. The Arbitrary Noise Texture Overlay
* **BANNED:** Injecting an absolute-positioned grainy SVG/PNG noise texture with `mix-blend-mode: overlay` over every container or card regardless of domain, pretending to look "indie" while ruining subpixel text anti-aliasing and causing rendering artifacts on high-DPI mobile screens.
* **HUMAN STANDARD:** Reserve grain strictly for creative agency portfolios or retro editorial surfaces where it serves a concrete art direction goal; keep corporate, SaaS, and scientific interfaces clean, solid, and crisp.

### 40. The Neglected Edge & Empty State ("Happy Path Only" Syndrome)
* **BANNED:** Designing only the pristine, perfect-state UI with pre-filled mock data while completely neglecting zero-data empty states (`0 items found`), skeleton loading states, truncated text overflows, multi-line error badges, and offline/network failure states.
* **HUMAN STANDARD:** Senior defensive UI engineering. Every list, card grid, and data table must have a thoughtful empty state graphic/copy, explicit skeleton loaders, text truncation (`truncate` or `line-clamp-2`), and accessible error recovery paths.

### 41. The Fake Warm Editorial / "Claude Core" Slop (Oatmeal & Terracotta Monoculture)
* **BANNED:** Overcorrecting from dark-mode neon by reflexively dumping beige/oatmeal paper backgrounds (`#fbf8f3`, `#f5f0e8`), terracotta buttons, and muted olive accents on every project regardless of domain (such as cloud DevOps tools, high-frequency trading dashboards, or database CLIs) to manufacture an unearned "warm intellectual" persona.
* **HUMAN STANDARD:** Select palettes anchored in the verified domain archetype: crisp zinc/slate for cloud devops, clinical white/navy for medical research, high-contrast dark mode for code terminals, and reserve warm oatmeal palettes strictly for humanistic essays, literature, or boutique curation.

### 42. The Soft Highlighter / Marker-Pen Span Gimmick
* **BANNED:** Wrapping exactly one buzzword in a headline with a pastel yellow or peach highlighter box (`<span class="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">effortless</span>`) or hand-drawn squiggly SVG line to simulate quirky human craft.
* **HUMAN STANDARD:** Typographic confidence. Rely on natural sentence structure, font weight contrast, or distinct color hierarchy across full semantic clauses without gimmicky mid-sentence highlighter stunts.

### 43. The Cable-News / Ticker-Tape Marquee Banner
* **BANNED:** Inexplicably plastering an animated scrolling ticker bar across the hero or header (`⚡ LIVE UPDATES ⚡ 50,000+ COMMITS ⚡ 99.9% UPTIME ⚡`), mimicking 24-hour cable news or stock exchanges on casual consumer apps or static landing pages.
* **HUMAN STANDARD:** Clean, quiet static status indicators in header metadata or omit ticker gimmicks entirely.

### 44. The Brittle Accordion & Auto-Grow JavaScript Layout Thrasher
* **BANNED:** Writing 20 lines of brittle JS calculating `element.scrollHeight` or listening to `input` events to resize textareas and animate collapsible FAQ sections, causing layout thrashing and jank.
* **HUMAN STANDARD:** Modern native CSS standards: `:root { interpolate-size: allow-keywords; }` for smooth `<details>` accordion animations to `height: auto`, and `field-sizing: content` on `<textarea>` and `<input>` for native auto-expansion without JS loops.

### 45. Deceptive "Vibe-Coded" Monoculture Feature Cards
* **BANNED:** Generating 3 to 6 identical cards with a pastel squircle icon, bold heading, and 2 lines of generic filler copy that describe nothing specific or technically truthful about the real product.
* **HUMAN STANDARD:** Asymmetric bento grids or detailed feature deep-dives featuring real code snippets, tabular metrics, interactive demo components, or genuine product UI previews.

### 46. The Side-Stripe Accent Card (Fake Alert Syndrome)
* **BANNED:** Slapping a thick vertical border stripe (e.g. `border-l-4 border-indigo-500` or `border-l-4 border-emerald-500`) onto generic, neutral content cards, list items, or pricing cards to artificially simulate "status", "importance", or "alert" without any functional semantic meaning.
* **HUMAN STANDARD:** Reserve left/top accent stripes strictly for semantic callout banners (`[WARN]`, `[ERROR]`, `[INFO]`). For standard cards, rely on subtle background tints, 1px neutral borders, or soft ambient elevation (`shadow-sm`).

### 47. Box-Within-A-Box Grid Overload (The Border Cage)
* **BANNED:** Drawing explicit 1px borders around every single layout node and nesting them endlessly (`div.card > div.card-header > div.sub-box > div.badge > div.border`), creating a claustrophobic cage of lines that visually suffocates text content.
* **HUMAN STANDARD:** Structural grouping through whitespace and typography. Use negative space (gutters, padding) and subtle background tonal shifts (`bg-zinc-50` vs `bg-white`) to group related elements instead of encasing every atom in a bordered container.

### 48. The Fake Sparkline / Axis-Free Chart Gimmick
* **BANNED:** Dropping decorative jagged SVG zig-zag lines or mini bar charts with zero labeled X/Y axes, no units, and no verifiable data points into feature cards simply to cosplay as an "analytics dashboard".
* **HUMAN STANDARD:** If presenting metrics, provide verifiable datasets with labeled axes, explicit units (e.g., `ms`, `ops/sec`, `GB`), and clear reference scales; otherwise, use clean tabular data or concrete UI workflow previews.

### 49. The Linear/Raycast Dark Mode Clone Reflex (Obsidian & Purple Glow Misplacement)
* **BANNED:** Reflexively applying `#09090b` pitch-black obsidian backgrounds, faint purple gradient halos, and fake keyboard shortcut badges (`⌘K`) across everyday consumer websites, educational portals, or editorial publishers where a crisp light theme or warm tactile palette is far more appropriate.
* **HUMAN STANDARD:** Execute the Pre-Design Theme Discovery Protocol ("tugas ini cocoknya tema apa?"). Select palettes that authentically honor the user's domain (e.g., warm stone for literature, crisp clinical white for science, high-contrast light mode for general consumer tools).

### 50. The Unsolicited Fake Notification Toast / Social Proof Pop-up
* **BANNED:** Injecting simulated toast notification banners ("Sarah from Berlin just signed up!") or cosmetic cookie consent modals into demo apps and sandboxes that block screen space and scream deceptive growth hacking.
* **HUMAN STANDARD:** Keep interfaces clean, silent, and respectful of user attention. Only trigger notifications in response to real user-initiated actions (e.g., successful form submission, file export completion).

### 51. The Bottom Floating Island / Meaningless Mobile Dock Trap
* **BANNED:** Slapping a detached, floating macOS-style pill dock with 4-5 arbitrary icon glyphs over the bottom of a mobile web viewport, obscuring critical content, eating thumb reachability, and colliding with virtual on-screen keyboards.
* **HUMAN STANDARD:** Use grounded, edge-to-edge bottom navigation bars integrated with `env(safe-area-inset-bottom)` and `interactive-widget=resizes-content`, or keep primary actions contextual within the main scroll flow.

### 52. The Endless Pulsing Status Dot / Fake Live Heartbeat
* **BANNED:** Plastering an animated green pulsing circle (`span.animate-ping bg-emerald-400` or CSS keyframe pulse) next to static titles, logos, or hero badges ("System Operational", "Available for work") when nothing is live-streaming or changing state, burning render frames and creating nervous visual distraction.
* **HUMAN STANDARD:** Clean, quiet static status indicators with clear semantic text; reserve pulsing animations strictly for live active WebSocket connections, active audio streams, or in-flight background worker jobs.

### 53. The Scroll-Jacking & Pinned Section Hijack
* **BANNED:** Hijacking natural browser scroll wheel events with complex JavaScript/CSS triggers to freeze vertical scroll and force horizontal sliding or stepped slide-overs on simple content sections that could be read naturally.
* **HUMAN STANDARD:** Respect native browser scrolling physics. If a multi-pane or horizontal view is genuinely needed, use native CSS scroll snap (`scroll-snap-type: x mandatory`) without hijacking the main window scroll.

### 54. The Oversized Icon Tile Above Every Heading
* **BANNED:** Centering a massive rounded square (48x48px or 64x64px) with a pastel background and an icon glyph directly above every single section title or feature heading, turning decorative icons into the dominant visual element rather than the content itself.
* **HUMAN STANDARD:** Let typography lead. Render icons unboxed, inline, or integrated beside headings at matching proportional scale (16-20px), never dominating the section.

### 55. The Lazy Scroll-Fade Stagger Cascade
* **BANNED:** Slapping CSS/JS intersection-observer fade-in-up transforms with arbitrary 100ms staggered delays onto every single paragraph, badge, and card on scroll, forcing users to wait for content to appear and causing perceived lag.
* **HUMAN STANDARD:** Critical content must be immediately visible upon scroll; reserve subtle animations for interactive state changes or progressive disclosure, never delaying core reading.

### 56. The Fake Dashboard / "Cardocalypse" Hero Mockup
* **BANNED:** Dropping an abstract, non-interactive "dashboard preview" in the hero consisting of layered translucent cards with dummy line graphs, fake profile avatars, and arbitrary toggle switches with no real backend or data model.
* **HUMAN STANDARD:** Grounded, authentic screenshots of the real working interface, verified live interactive demo components, or clean code blocks that represent actual product capabilities.

### 57. The Monospaced Micro-Text Credibility Crutch
* **BANNED:** Reflexively styling all subheaders, tags, version numbers, dates, and metadata in a monospace font (`font-mono text-[10px] uppercase tracking-widest text-zinc-500`) to falsely cosplay as an engineering/hacker tool, even on non-technical consumer websites.
* **HUMAN STANDARD:** Reserve monospace strictly for code blocks, terminal sessions, and tabular numeric columns (`font-variant-numeric: tabular-nums`). Use clean, proportional sans-serif or serif for labels and metadata.

### 58. Redundant Explanatory Microcopy / Multi-Paragraph Form Over-Explaining
* **BANNED:** Surrounding simple form fields with multiple conflicting or redundant explanations: a floating label, a placeholder saying the same thing, a helper paragraph below, and a tooltip icon, creating massive cognitive clutter.
* **HUMAN STANDARD:** Concise, self-explanatory form labels with crisp placeholders; let clear labeling and browser-native validation eliminate the need for redundant explanatory crutches.

### 59. The Clipped Modal & Dialog Navigation Abyss
* **BANNED:** Stuffing complex, multi-tab settings or deep multi-step workflows into small fixed-dimension popup modals with nested internal scrollbars, clipping dropdowns and creating a claustrophobic user experience.
* **HUMAN STANDARD:** Use dedicated, clean full-page views or responsive drawer sheets (`<dialog>` with full mobile-adapted height) with proper viewport-aware scrolling and unconstrained popovers.

### 60. The Un-Themed Default Palette Reflex ("Indigo-500 / Violet-600 Syndrome")
* **BANNED:** Defaulting to standard Tailwind `bg-indigo-600` or `bg-violet-600` for primary CTA buttons and accent borders regardless of brand identity or domain context, simply because it is the statistical median in AI training data.
* **HUMAN STANDARD:** Deliberate, domain-specific color harmony selected during the Pre-Design Theme Discovery Protocol (e.g. deep forest moss for nature/forestry, warm terracotta/stone for publishing, crisp slate/cobalt for cloud devops, international Klein blue for high-fashion art direction).

### 61. The 3D Glass Torus & Floating Metallic Blob in the Hero
* **BANNED:** Centering or scattering shiny chrome doughnuts, iridescent glass toruses, or abstract 3D metallic liquid blobs floating in the hero section that convey zero functional purpose other than filling empty screen space.
* **HUMAN STANDARD:** Authentic product artifacts: real application screens, live interactive demos, verifiable performance benchmarks, or domain-adapted technical architecture diagrams.

### 62. The "⌘K to Search" Ghost Palette on Static Pages
* **BANNED:** Sticking a faux keyboard shortcut badge (`⌘K` or `Ctrl+K`) onto navigation bars or search inputs on static portfolios, blogs, or landing pages where pressing it does nothing, triggers a raw `alert()`, or opens an empty cosmetic modal.
* **HUMAN STANDARD:** Only display keyboard accelerator hints if a fully functional, indexed command palette is genuinely wired and accessible via keyboard navigation; otherwise, provide a standard semantic search input or clean text link.

### 63. The Simulated Activity Stream / Fake Vector Embedding Terminal
* **BANNED:** Rendering a dark faux terminal box that continuously spits out looped fake log messages (`[✓] Syncing vector embeddings... [✓] Fine-tuning model weights... [✓] 99.8% precision achieved`) to cosmetically masquerade as an active AI engine or real-time infrastructure.
* **HUMAN STANDARD:** Real-time data streams must connect to real WebSockets, worker queues, or genuine telemetry; for static showcases, use static code blocks with real runnable syntax and honest documentation.

### 64. The Gradient Text Contrast Collapse (Unreadable Masked Headlines)
* **BANNED:** Applying `bg-clip-text text-transparent bg-gradient-to-r` to multi-line headlines where the gradient fades into pale lavender, pastel cyan, or murky dark tones that fail WCAG AA contrast (4.5:1) against the underlying background, causing the final words of the title to literally disappear.
* **HUMAN STANDARD:** Solid, authoritative foreground colors (`text-stone-900` on light, `text-zinc-50` on dark) with verified mathematical contrast ratios (> 7:1 for AAA). If gradient accents are used, ensure every color stop meets minimum contrast standards across all display calibrations.

### 65. The Unclickable Interactive Bento Mockup (Faux Functional Controls)
* **BANNED:** Populating Bento cards with simulated form controls—such as fake toggle switches, faux range sliders, dummy radio buttons, and inactive dropdowns—that look interactive but are completely inert when clicked, frustrating user mental models.
* **HUMAN STANDARD:** If a UI control appears on a card, it must either be fully interactive and functional or presented clearly as a static, labeled preview with appropriate `pointer-events-none` and `aria-hidden="true"` attributes to prevent deceptive affordances.

### 66. The Continuous Avatar Orbiting Ring (Visual Motion Sickness)
* **BANNED:** Placing a central logo or graphic surrounded by multiple client avatars or integration icons orbiting in continuous, rotating CSS/SVG circular paths, causing visual distraction, motion sickness, and continuous thread overhead.
* **HUMAN STANDARD:** Static, organized grid or inline flex row of verified partner logos or customer case studies, respecting `prefers-reduced-motion` and eliminating gratuitous rotational animations.

### 67. The Gratuitous Confetti Burst on Simple Inputs
* **BANNED:** Triggering full-screen particle or confetti canvas explosions (`canvas-confetti`) upon mundane interactions like typing into a newsletter email field, clicking a generic button, or closing a dialog, treating ordinary UI tasks like a carnival game.
* **HUMAN STANDARD:** Quiet, professional confirmation states: an inline checkmark transition (150ms ease), a clean toast notification, or a subtle status change that respects user attention.

### 68. The Soap-Bar Card / Giant Pill Container Monoculture
* **BANNED:** Applying `rounded-full` (9999px) or extreme 32px-48px border-radius to massive full-width cards, modals, or form wrappers, transforming structural content containers into awkwardly distorted giant soap bars that waste internal padding and pinch typography.
* **HUMAN STANDARD:** Adhere strictly to the Concentric Border-Radius Nesting Law and the 12 Domain Archetypes. Standard cards use `rounded-md` (8px) to `rounded-xl` (12px-16px); reserve `rounded-full` strictly for small status badges, avatars, and single-action CTA pill buttons.

### 69. The Deceptive "Pro - Most Popular" Scaled-Up Pricing Trap
* **BANNED:** Reflexively scaling up the middle card in a 3-tier pricing table (`scale-105`), wrapping it in a glowing neon gradient border, and stamping "Most Popular" or "Best Value" onto simple open-source tools, single-utility libraries, or projects where tiering is completely fabricated.
* **HUMAN STANDARD:** Grounded, honest pricing presentation. If tiers exist, align cards symmetrically with equal visual dignity, highlighting genuine feature differentiators rather than using manipulative optical distortion.

### 70. The Non-Semantic Glow Focus Ring (Blurry Box-Shadow Rings)
* **BANNED:** Removing browser default focus rings (`outline: none` without replacement) and substituting a diffuse, multi-colored neon glowing drop shadow (`box-shadow: 0 0 25px rgba(168, 85, 247, 0.6)`) that vanishes under Windows High Contrast Mode and fails accessibility criteria.
* **HUMAN STANDARD:** Crisp, high-contrast `:focus-visible` outlines: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px;` with at least 3:1 contrast against adjacent background colors, ensuring unambiguous keyboard navigation.

### 71. The Infinite Rhetorical FAQ Accordion Monoculture
* **BANNED:** Slapping 4 to 6 identical, rhetorical questions into an accordion at the bottom of every page (*"Is there a free trial?"*, *"Can I cancel anytime?"*, *"How does the AI work?"*, *"Is my data secure?"*) even for internal dev tools, open-source libraries, or portfolio sites where these questions are completely irrelevant or fabricated.
* **HUMAN STANDARD:** Address user questions contextually within the actual product documentation or UI workflows. If an FAQ is genuinely required, answer real operational questions (e.g. licensing, data retention, self-hosting limits) with clear, concise answers.

### 72. The Looping Auto-Typewriter Hero Headline
* **BANNED:** Using JavaScript intervals to continuously delete and cycle through words in the hero title (`Build [apps | pipelines | agents | workflows] with speed`) with a blinking cursor pipe (`|`), causing continuous layout reflows, visual distraction, and accessibility screen-reader chaos.
* **HUMAN STANDARD:** Authoritative, confident static typography. State the single most important purpose of the product in a clear, complete headline without relying on gimmicky rotating word slots.

### 73. The Cosmetic Cookie Consent / GDPR Banner on Local Sandboxes & Demos
* **BANNED:** Injecting fixed bottom cookie banners or privacy modals (*"We value your privacy — Accept all cookies"*) into local development sandboxes, internal tools, or prototypes that store zero third-party tracking cookies, consuming 20% of the mobile viewport.
* **HUMAN STANDARD:** Keep interfaces uncluttered and clean. Only introduce privacy notices when deploying to production with actual third-party analytics or tracking storage that legally requires consent.

### 74. The Unconstrained Mobile Horizontal Scroll Trap (Missing Scroll-Snap & Affordance)
* **BANNED:** Laying out feature cards or tables in a loose `overflow-x-auto` container on mobile without CSS scroll-snap, with cards clipped midway without visual affordance or pagination indicators, trapping horizontal swipe gestures and confusing page scrolling.
* **HUMAN STANDARD:** If horizontal scrolling is necessary, apply native CSS scroll-snap (`scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;`), ensure subsequent cards visually peek into the viewport to signal scrollability, and pair with scroll-state container queries (`@container scroll-state(snapped: x)`).

### 75. The Missing Discrete Transition Snap (Flickering Drawer / Dialog)
* **BANNED:** Toggling mobile drawers, navigation flyouts, or modal dialogs by abruptly toggling `display: none` and `display: block` via JavaScript without entry/exit interpolation, causing jarring visual flickering, layout pops, and broken closing animations.
* **HUMAN STANDARD:** Utilize modern native CSS discrete transitions: declare `@starting-style` for smooth entry animations and `transition-behavior: allow-discrete` (along with `display: 300ms allow-discrete`) on native `<dialog>` and drawer panels for flawless zero-JS animations.

### 76. The Negative Parallelism Copywriting Crutch ("It's not X — it's Y")
* **BANNED:** Manufacturing artificial profundity and theatrical suspense by opening titles, value propositions, or feature lists with negative contrasts (*"It’s not just a workspace — it’s your cognitive copilot"*, *"It’s not code — it’s pure momentum"*, *"It’s not a database — it’s a living neural brain"*), almost invariably accompanied by an em dash.
* **HUMAN STANDARD:** Direct, grounded declarative statements explaining the concrete tool, system architecture, or exact problem solved (*"Sistem manajemen inventaris berbasis SQLite dengan zero-dependency audit logging"*).

### 77. The Compulsive Tricolon / Rule-of-Three Abuse
* **BANNED:** Rigidly forcing every value proposition, hero subtitle, and section headline into formulaic triads of punchy 1-word verbs or nouns (*"Plan. Build. Scale."*, *"Connect, Automate, Ship"*, *"Fast. Secure. Scalable."*), producing an artificial nursery-rhyme rhythm.
* **HUMAN STANDARD:** Natural, variable technical prose explaining concrete operational outcomes (*"Memvalidasi konsistensi 50.000 transaksi lintas PostgreSQL dan BigQuery dalam 0.23 detik tanpa mengunci tabel produksi"*).

### 78. The Perpetual Waitlist & Phantom Early-Access Counter
* **BANNED:** Slapping an email capture box with a fake live user counter (*"Join 18,421 developers on the exclusive waitlist"*) or artificial scarcity badges (*"Batch 4 closing in 3 hours"*) on small open-source tools, scripts, or non-existent vapourware.
* **HUMAN STANDARD:** If software is available, provide runnable commands (`npm install`, `docker pull`, `git clone`) or a functional sandboxed playground. If in private development, invite genuine contributors honestly without deceptive scarcity mechanics.

### 79. The Performative Streaming Token / Faux LLM Typing Loop (`TokenStream`)
* **BANNED:** Using JavaScript character-by-character typewriter loops with a blinking cursor block (`|`) on static marketing headlines, hero titles, or feature cards to simulate a "live neural network streaming output in real-time".
* **HUMAN STANDARD:** Authoritative, instant static typography. Render text completely upon paint so users can read and scan at their own cognitive rhythm without waiting for cosmetic character streams.

### 80. The Dual-CTA Paradox (False Urgency Gridlock)
* **BANNED:** Placing two action buttons side-by-side in the hero section with identical heavy visual weight (e.g., two dark solid pill buttons: *"Get Started Free"* next to *"Book a 15-Min Demo"*), destroying visual hierarchy and triggering decision paralysis.
* **HUMAN STANDARD:** Establish one unmistakable primary CTA (`bg-stone-900 text-stone-50 hover:bg-stone-800`) paired with an understated secondary link or ghost button (`text-stone-600 hover:text-stone-900 font-medium`).

### 81. The Deceptive Video Play Button (Static Screenshot Facade)
* **BANNED:** Displaying a product screenshot overlaid with a centered white SVG play-triangle button that is completely unclickable, opens a non-video modal, or redirects users to a generic signup form.
* **HUMAN STANDARD:** If a demo video exists, embed a native HTML5 `<video controls playsinline preload="metadata">`; otherwise, present crisp, high-resolution static screenshots with clear, factual captions. Never fake a media player affordance.

### 82. Opaque Social Proof & Ghost Logo Cosplay
* **BANNED:** Plastering a row of grayscale Fortune 500 or FAANG logos (*Google, Stripe, Meta, OpenAI*) under the text *"Trusted by teams at"* when the author merely completed an internship there, has an acquaintance, or someone registered with a free personal email address.
* **HUMAN STANDARD:** Feature real, verifiable customer case studies with specific operational metrics, direct attribution, or linkable GitHub pull requests; otherwise, omit social proof strips entirely until authentic institutional adoption exists.

### 83. The Faux Agent "Thinking" Skeleton Loop
* **BANNED:** Displaying an infinite shimmering skeleton wireframe or spinning brain glyph captioned *"Autonomous AI Agent analyzing your repository..."* when no backend worker thread or model inference is actively running.
* **HUMAN STANDARD:** Accurate, deterministic progress reporting: display actual terminal output lines, real WebSocket streaming logs, or honest bounded progress indicators tied to verifiable task state.

### 84. The Inert Bento Slider / Fake Interactive Control
* **BANNED:** Populating Bento cards with simulated sliders, non-functional drag handles, or fake interactive toggles that look live but do not recalculate any state or respond to user clicks.
* **HUMAN STANDARD:** If a control appears in a card, it must either be fully interactive and wired to live reactive state, or styled as a static, non-interactive visual preview with `aria-hidden="true"` and `pointer-events-none`.

### 85. The "Backdrop-Filter: Ambition" Glass Overload
* **BANNED:** Stacking multiple heavy `backdrop-blur-xl bg-white/5` layers over busy animated or patterned backgrounds where body text contrast falls below 3:1, sacrificing readability for a cheap "futuristic glass" illusion.
* **HUMAN STANDARD:** Solid, grounded surfaces with verified WCAG AAA (7:1) contrast against body copy. Restrict backdrop blur strictly to subtle sticky navigation headers or modal overlays.

### 86. The Tailing Negation Bullet Habit ("...no code, no bloat, no guessing")
* **BANNED:** Compulsively appending negative triplet slogans (*"...no setup, no config, no headache"*) to the tail of every feature bullet or list item, turning technical capability documentation into repetitive marketing jingles.
* **HUMAN STANDARD:** State positive, explicit architectural truths (e.g., *"Uses native Web Streams API and standard Fetch with zero external dependencies"*).

### 87. The Over-Engineered Ambient Grain / CPU-Killing `feTurbulence`
* **BANNED:** Applying full-screen SVG filter noise (`<feTurbulence type="fractalNoise">`) with CSS `mix-blend-mode` over large layout containers, causing heavy GPU re-rasterization, battery drain on mobile, and blurry subpixel font rendering.
* **HUMAN STANDARD:** Clean CSS solid or subtle linear gradient backgrounds; if tactile grain is genuinely required by an editorial art direction, use a lightweight, static base64 PNG tile pattern.

### 88. The Fake Command-Palette (`⌘K`) Ghost on Static Sites
* **BANNED:** Affixing a decorative `⌘K` or `Ctrl+K` search capsule to the navigation bar of static 1-page portfolios or marketing sandboxes where pressing the shortcut does nothing, triggers a dummy `alert()`, or opens an empty cosmetic modal.
* **HUMAN STANDARD:** Only display keyboard shortcuts if a fully functional indexed command palette (e.g. native `<dialog>` with keyboard arrow traversal) is genuinely wired and accessible.

### 89. The Unsolicited Fake Testimonial Avatar Carousel
* **BANNED:** Rendering an auto-scrolling carousel of stock photo headshots paired with fabricated names (*"Alex R. - VP of Growth"*) and vague praise (*"This completely transformed our business overnight!"*).
* **HUMAN STANDARD:** Real user feedback with verifiable GitHub usernames, verified customer quotes with company domain links, or omit testimonials entirely.

### 90. The CSS Anchor-Positioning Fallback Neglect
* **BANNED:** Implementing modern CSS `position-anchor` or `position-area` for mission-critical navigation dropdowns or form tooltips without checking `@supports (anchor-name: --test)` or providing an accessible static CSS fallback, leaving floating menus completely detached or hidden on non-supporting browser engines.
* **HUMAN STANDARD:** Progressive enhancement. Always wrap cutting-edge anchor positioning in `@supports (anchor-name: --anchor)` while providing a resilient Flexbox/Grid or native `<dialog>`/`<popover>` fallback.

### 91. The Simulated Multi-User Floating Cursor Flock (Fake Realtime Collaboration)
* **BANNED:** Scattering animated pastel cursor arrows labeled with fake user names ("Sarah", "Alex", "Devin") hovering or clicking aimlessly across a static hero mockup to falsely project multiplayer real-time collaboration.
* **HUMAN STANDARD:** Grounded, verifiable UI demonstrations. Showcase real multi-tenant audit logs or link to genuine video screencasts of live collaborative sessions; never animate fake cursor swarms.

### 92. The "Workflow Node Graph / React-Flow" Hero Gimmick
* **BANNED:** Dropping a non-functional cosmetic node-based workflow diagram in the hero with curved SVG bezier wires connecting 3 glowing boxes ("Input" -> "AI Core" -> "Deploy") on tools that are simply basic CRUD apps or static libraries.
* **HUMAN STANDARD:** If the product is an actual visual workflow builder, showcase the genuine interactive canvas with real node inspectors; otherwise, use structured technical architecture diagrams, clean code blocks, or data tables.

### 93. The Omnipresent Sparkle Icon On Ordinary CRUD Controls ("Feature AI-Washing")
* **BANNED:** Prepending four-pointed star sparkles (`✨`) to completely standard, non-AI features—such as "✨ Smart Search", "✨ Auto Filter", "✨ Intelligent Export", or "✨ Magic Sort"—to falsely imply machine intelligence on basic SQL `WHERE` queries and `Array.sort()`.
* **HUMAN STANDARD:** Call features by their honest, functional technical names: "Search", "Filter by Category", "Export CSV", "Sort by Date" with standard semantic icons.

### 94. The Ghost Audio Waveform / Fake Voice Assistant Bar
* **BANNED:** Embedding an animated sinusoidal soundwave SVG or CSS bar equalizer pulsing in the navigation bar or floating dock when no audio input, microphone stream, or TTS engine is connected.
* **HUMAN STANDARD:** Static, clear audio controls with explicit permission requests and active visualizer states tied directly to the browser Web Audio API `AudioContext` and `AnalyserNode`.

### 95. The Faux Multi-LLM Model Switcher Dropdown in Hero
* **BANNED:** Displaying a mock dropdown or segmented toggle in the hero section allowing visitors to select between "Claude 3.7", "GPT-4.5", and "Gemini 2.5" when the underlying product is a hardcoded static demo or does not support model switching at all.
* **HUMAN STANDARD:** If multi-model routing exists, wire it to actual functional API endpoints in a live playground; otherwise, state model compatibility factually in documentation without deceptive cosmetic selectors.

### 96. The Uncalibrated Half-Leading Alignment Hack (Ignoring `text-box-trim`)
* **BANNED:** Applying negative margins (`-mt-1`), arbitrary transform hacks (`translate-y-[-2px]`), or asymmetric padding (`pt-1.5 pb-2.5`) to visually center typography inside buttons, tags, and badges due to font half-leading space.
* **HUMAN STANDARD:** Use modern CSS `text-box-trim: both; text-box-edge: cap alphabetic;` (or `text-box: trim-both cap alphabetic`) to strip font leading cleanly at the browser engine level for pixel-perfect vertical centering.

### 97. The Brittle Dropdown `<select>` Re-Implementation (Ignoring `appearance: base-select`)
* **BANNED:** Writing 80 lines of brittle JavaScript, floating `<div>` elements, and manual keyboard listeners to replace native `<select>` dropdowns just to add icons or custom styling, breaking mobile accessibility, form autofill, and screen readers.
* **HUMAN STANDARD:** Use modern CSS `appearance: base-select` on native `<select>` elements, enabling rich HTML inside `<option>` tags, custom arrows via `::picker(select)`, and full styling while retaining 100% native accessibility and keyboard handling.

### 98. The Deceptive "Auto-Completing Prompt" Placeholder Loop
* **BANNED:** Cycling through pre-typed prompts inside a hero search bar ("Summarize 500 pages...", "Analyze revenue Q3...", "Generate fullstack app...") that disappear the moment the user focuses the field, offering no functional auto-complete or template value.
* **HUMAN STANDARD:** Provide honest, static clickable suggestion pills below the input or clear, functional placeholder text describing expected input syntax.

### 99. The Deceptive Fake Code-Diff Cosplay
* **BANNED:** Displaying a synthetic split-screen code diff widget where the "Before" side is artificially crippled, bloated code and the "After" side is an impossible one-line magic function with green background highlights, misrepresenting real-world software engineering complexity.
* **HUMAN STANDARD:** Present verifiable, real-world refactorings with genuine performance benchmarks and explicit trade-offs.

### 100. The Floating "Ask AI" FAB Suffocation on Mobile
* **BANNED:** Pinning a permanent floating action button (FAB) labeled "Ask AI ✨" with a pulsing radial glow at the bottom-right of every mobile screen, blocking bottom sheet drag handles, hiding submit buttons, and intercepting edge thumb navigation.
* **HUMAN STANDARD:** Integrate AI assistance contextually inline within specific toolbars or accessible command bars, preserving critical mobile thumb zones and uncluttered viewports.

### 101. The Purple-to-Cyan/Blue Glow Wash Hero Reflex (The "Default Tailwind Indigo" Wash)
* **BANNED:** Flooding the entire hero background with a radial purple-to-indigo gradient wash (`from-indigo-950 via-purple-900 to-slate-950`) accented with cyan text highlights on every project regardless of whether it's an accounting tool, local bakery, or government portal.
* **HUMAN STANDARD:** Execute the Pre-Design Theme Discovery Protocol ("tugas ini cocoknya tema apa?"). Select palettes that authentically honor the user's domain: warm stone/amber for literature, clinical white/navy for medical research, high-contrast dark slate for code terminals, and natural earth tones for consumer goods.

### 102. The Intrusive Floating AI Chatbot Avatar Interrupter
* **BANNED:** Pinning an animated bouncing bot avatar or glowing chat bubble in the bottom right corner that bounces or pops open unsolicited after 3 seconds asking *"Hi! How can I help you today?"*, intercepting mobile navigation and destroying user focus.
* **HUMAN STANDARD:** If AI assistance exists, integrate it contextually inline within dedicated workflow tools or accessible command palettes; never interrupt users with unsolicited floating popups or jumping chat bubbles.

### 103. The Symmetrical 3-Card Mirror & Identical Pitch Formula
* **BANNED:** Rigidly forcing feature sections into three identical symmetrical cards, each with an icon in a colored pastel rounded box, an 8-word bold title, and exactly two lines of generic text, creating mathematical predictability with zero content-driven hierarchy.
* **HUMAN STANDARD:** Design intentional asymmetric layouts (Bento grids with dominant focal panes, alternating split-row feature showcases, interactive sandboxes, or dense comparison matrices) driven by actual content priority.

### 104. The "Glassy-Eyed Certainty" Buzzword Typography
* **BANNED:** Writing marketing copy in an unyielding, hyper-optimistic, listicle-heavy cadence ("10 revolutionary ways to supercharge your seamless workflow...") that completely fails to state what the software technically does or how it works.
* **HUMAN STANDARD:** Direct, technical, and domain-grounded prose. State the exact operational pain, system architecture, verified metrics, and technical capability in clear, confident language.

### 105. The Unsolicited Bouncing Scroll Indicator / Flashing Down-Arrow
* **BANNED:** Placing an animated bouncing chevron (`animate-bounce`) or pulsing mouse icon at the bottom of the hero section on short single-scroll pages or desktop views where content is already in plain sight, treating users like they don't know how to scroll.
* **HUMAN STANDARD:** Let natural content hierarchy and visual overflow provide intuitive scroll affordance. If content extends below the fold, let the peek of the next section naturally invite scrolling without patronizing animated arrows.

### 106. The Pseudo-Scientific "Neural Synapse / Glowing Brain" Hero Art
* **BANNED:** Embedding glowing vector brain wireframes, floating synapse networks, or 3D chrome heads in the hero section to symbolically cosplay "artificial intelligence" for simple database, spreadsheet, or CRUD tools.
* **HUMAN STANDARD:** Concrete product artifacts: real application screens, clean code blocks, performance data graphs, or authentic workflow diagrams.

### 107. The Anonymous Gray Logo Bar (Cosplay Social Proof)
* **BANNED:** Rendering a row of 5-6 flat gray fictional or unverified corporate logos ("ACME", "VERTEX", "NEXUS") with zero linkable case study references or verifiable quotes.
* **HUMAN STANDARD:** Feature real, verifiable customer case studies with specific operational metrics, direct attribution, or linkable GitHub pull requests; otherwise, omit social proof strips entirely until authentic institutional adoption exists.

### 108. The Deceptive "Interactive Demo" Screen Recording GIF Masquerade
* **BANNED:** Embedding an autoplaying, looping GIF or low-res WebM video of a mouse clicking things inside a fake macOS browser window, labeled as "Interactive Sandbox" but completely unclickable and inaccessible.
* **HUMAN STANDARD:** If an interactive demo exists, embed a live, functioning sandbox widget or native interactive controls; otherwise, present clean, high-resolution static screenshots with clear, factual captions and runnable code commands.

### 109. The Unresponsive Horizontal Card Carousel (Missing Touch Affordance)
* **BANNED:** Laying out cards in a horizontal `overflow-x-auto` strip on mobile that clips halfway off-screen without pagination dots, visible peeking edges, or swipe snap, creating a "dead zone" where users try to scroll vertically but get trapped in an unrecognized horizontal swipe.
* **HUMAN STANDARD:** Apply native CSS scroll-snap (`scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;`), ensure subsequent cards visually peek by at least 15-20% into the viewport to signal scrollability, and pair with scroll-state container queries (`@container scroll-state(snapped: x)`).

### 110. The Hallucinated Benchmark / Non-Existent Telemetry Cosplay
* **BANNED:** Showing cards with labels like "99.999% Reliability", "100x Faster than traditional tools", or "0.001ms Latency" with zero methodology, zero test harness, and zero benchmark code to back it up.
* **HUMAN STANDARD:** Present actual operational benchmarks with verifiable units, workload sizes, and reproducible benchmark commands (e.g., `217.000 baris/detik pada dataset 50.000 transaksi`).

### 111. The Indiscriminate `transition: all` Global Reset (Layout Thrashing & Jank Trigger)
* **BANNED:** Applying blanket `* { transition: all 0.3s ease; }` or slapping `transition-all` onto every card, container, and input, forcing the browser compositor to animate costly geometric properties (`width`, `height`, `padding`, `margin`, `top`) during page resize, mobile viewport reorientation, virtual keyboard display, or DOM updates, causing severe frame drops.
* **HUMAN STANDARD:** Transition strictly composite-friendly properties (`opacity`, `transform`, `filter`) and discrete visual tokens (`background-color`, `border-color`, `box-shadow`) with targeted transition declarations: `transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 150ms ease;`.

### 112. The Faux Multi-Modal Camera Viewport (Cosplay Vision AI)
* **BANNED:** Overlaying tactical corner crop brackets, target reticle crosshairs, and synthetic telemetry labels (`[4K NEURAL SCAN - 99.4% CONFIDENCE]`, `OBJECT_ID: #0829`) onto static stock photography or product screenshots to cosmetically cosplay spatial intelligence or computer vision.
* **HUMAN STANDARD:** Present authentic video streams, live sandboxed canvas processing, or clean screenshots with honest descriptive captions. Never fake a machine vision targeting overlay.

### 113. The Faux Vector Embedding Heatmap / Cosplay Cosine Matrix
* **BANNED:** Embedding colorful grid heatmaps, multidimensional vector scatter plots, or mock cosine distance clusters into basic search and filtering features to pretend simple SQL `LIKE` queries or `Array.filter()` are advanced RAG vector pipelines.
* **HUMAN STANDARD:** Clear, truthful architectural representations. If vector search exists, expose the real query latency and verifiable similarity scores; otherwise, label standard search inputs clearly as keyword filters.

### 114. The Simulated "Pull Request Merged / Commit Streak" Activity Cosplay
* **BANNED:** Dropping synthetic GitHub commit streaks, mock pull request merged badges (`PR #142 Merged by dev-bot 2m ago`), or fake merge conflict cards into marketing blocks for products completely unrelated to git or developer tooling.
* **HUMAN STANDARD:** Authentic operational proof: link directly to verifiable public repositories, show real terminal CLI sessions, or present customer case studies with concrete operational metrics.

### 115. The Unresponsive Full-Bleed Table with Clipped Actions (Missing Mobile Card Transformation)
* **BANNED:** Allowing wide multi-column data tables to overflow horizontally on mobile screens without sticky key columns, column priority hiding, or transforming each row into a readable stacked card layout, forcing users into awkward two-finger panning.
* **HUMAN STANDARD:** Mobile-first responsive table architecture: transform tabular rows into stacked cards on narrow viewports (`@container (max-width: 640px)`) using semantic `data-label` pseudo-elements or freeze key identifier columns with native sticky horizontal scrolling.

### 116. The Fake Interactive ROI / Token Savings Calculator Paywall Trap
* **BANNED:** Dropping an interactive range slider or calculator that moves smoothly until 1 millimeter of interaction, then abruptly locks the entire viewport with an unclosable "Enter your work email to see results" lead-gen capture modal.
* **HUMAN STANDARD:** If an interactive ROI or cost calculator is presented, let it calculate complete, transparent figures immediately with verifiable mathematical formulas; provide optional export or sharing actions rather than bait-and-switch paywalls.

### 117. The Incessant Hover Wiggle & Jitter (Attention-Hijacking Micro-Interactions)
* **BANNED:** Applying `@keyframes wiggle` or continuous CSS shake/jitter to CTA buttons, badges, or notification icons, treating professional user interfaces like spam banner ads.
* **HUMAN STANDARD:** Calm, purposeful micro-interactions: subtle 150ms opacity or elevation shifts (`translate-y-[-1px]`) on direct user hover or focus, maintaining respectful visual silence when idle.

### 118. The Gratuitous Holographic Foil / Iridescent CSS Border Animation
* **BANNED:** Applying a rapid rainbow spectrum conic/linear gradient border animation to buttons and cards, creating severe visual noise and looking like a casino gambling machine.
* **HUMAN STANDARD:** Clean, static hairline borders (`border border-zinc-200/80` or `border-zinc-800/60`) paired with subtle ambient drop shadows. Movement should only occur as an immediate, purposeful response to user input (focus-visible rings).

### 119. The Pseudo-Scientific Trendline Without Axes, Scale, or Baseline
* **BANNED:** Dropping an upward-curving line graph with zero X/Y axis labels, no units, no baseline, and a vague label like "Your Output with AI", conveying zero verifiable information.
* **HUMAN STANDARD:** If presenting performance or metrics, provide fully labeled axes, baseline comparisons, units of measurement, and verifiable test methodologies.

### 120. The Unsolicited Audio Waveform Equalizer on Static Pages
* **BANNED:** Placing an animated CSS bar equalizer or pulsing sinusoidal waveform in header bars when no audio stream, voice recording, or microphone input is active.
* **HUMAN STANDARD:** Reserve audio visualizers strictly for live, active Web Audio API streams, voice recording sessions, or in-flight speech synthesis playback.

### 121. The Infinite "Live Viewer / Just Purchased" Ghost Badge Flood
* **BANNED:** Simulating real-time visitor counters like "🔥 38 people from London are viewing this right now" or popping up fake purchase notifications in the viewport corner.
* **HUMAN STANDARD:** Grounded, honest social proof. Link directly to verifiable public customer case studies, GitHub stars, or real transparent metrics; eliminate fake real-time activity popups.

### 122. The Faux Multi-Provider LLM Selector on Hardcoded Demos
* **BANNED:** Rendering a faux dropdown in the hero allowing visitors to select between "GPT-4o", "Claude 3.7", and "Gemini 2.5" when the page is a static mock that doesn't call any LLM.
* **HUMAN STANDARD:** If multi-model routing exists, connect it to live working endpoints in an interactive sandbox; otherwise, document supported model architectures factually in static technical specifications.

### 123. The Neglected Offline & Network Disconnect State ("Happy-Path Only" Connectivity)
* **BANNED:** Building web applications that fail silently or crash into an unrecoverable blank white screen when network connectivity drops, showing zero user feedback.
* **HUMAN STANDARD:** Senior defensive engineering: implement offline event listeners (`navigator.onLine`), visual non-intrusive status indicators, optimistic UI updates with rollback, and queued retries.

### 124. The Faux "Zero-Latency / Instantaneous" Micro-Claim (Cosplay Speed)
* **BANNED:** Plastering "0ms latency" or "instantaneous sub-millisecond sync" next to a glowing lightning bolt icon on ordinary REST endpoints with normal 200ms TTFB.
* **HUMAN STANDARD:** Publish verified, reproducible benchmark measurements with workload distributions, P50/P99 latency percentiles, and explicit testing environments.

### 125. The Compulsive Bento "Tear-Out / Cut-Corner" Gimmick (Asymmetric Notch Slop)
* **BANNED:** Cutting arbitrary 45-degree angled notches or faux circuit-board indentations into card corners without functional grid purpose, breaking internal padding symmetry and pinching text.
* **HUMAN STANDARD:** Clean geometric discipline: adhere to standard rectangular or squircle geometry with continuous concentric padding nesting, allowing typography and content to breathe naturally.

### 126. The "Paper Plate Interface" / Disposable UI Fragility Syndrome
* **BANNED:** Generating ultra-thin wireframes with microscopic desktop Electron-app glyphs, floaty low-contrast text, and zero tactile elevation that feel like disposable mockups rather than solid software.
* **HUMAN STANDARD:** Grounded tactile surfaces: solid typographic scale, intentional border tokens (1px max), ambient elevation shadows (`shadow-sm`, `shadow-md`), and distinct semantic contrast.

### 127. The Default "De-Claude / Oatmeal & Terracotta" Monoculture Reflex
* **BANNED:** Overcorrecting from dark-mode neon by reflexively dumping warm beige `#fbf8f3`, serif headers, and terracotta pill buttons onto high-throughput databases, cybersecurity consoles, or Kubernetes managers where clinical clarity or dark terminal contrast is technically required.
* **HUMAN STANDARD:** Execute the Pre-Design Theme Discovery Protocol ("tugas ini cocoknya tema apa?"). Select palettes that authentically honor the user's domain: crisp zinc/slate for cloud devops, clinical white/navy for medical research, high-contrast dark slate for code terminals, and reserve warm oatmeal palettes strictly for humanistic essays, literature, or boutique curation.

### 128. The Faux Multi-Agent Discussion Log / Synthetic Debate Widget
* **BANNED:** Rendering a chat container where two simulated AI bots named "Planner Bot" and "Critic Bot" argue with pre-canned dialogue to fake multi-agent consensus on simple static pages.
* **HUMAN STANDARD:** If multi-agent execution exists, expose verifiable streaming execution traces, DAG flow inspectors, or real terminal log outputs; otherwise, document architecture with clean diagrams.

### 129. The Cosmetic "Token Usage / Cost Counter" on Static Marketing Sites
* **BANNED:** Displaying a fake floating counter saying "$0.0004 per query saved" or "Tokens consumed: 1.4M" that ticks up randomly via `setInterval()` with no LLM inference attached.
* **HUMAN STANDARD:** Present actual operational billing metrics or clear reproducible pricing models; eliminate simulated ticking counters.

### 130. The Faux Prompt Injection "Sandbox Terminal"
* **BANNED:** A toy terminal in the hero inviting visitors to "try breaking our jailbreak shield" that simply returns hardcoded canned responses or regex `if (input.includes('ignore'))` statements.
* **HUMAN STANDARD:** Connect interactive demos to real isolated sandboxes or present verifiable benchmark evaluation matrices with reproducible red-teaming datasets.

### 131. The Ghost Multi-Language / Internationalization (i18n) Flag Dropdown
* **BANNED:** A prominent language dropdown with 15 country flags that, when clicked, does nothing or only translates the hero headline using broken Google Translate API calls.
* **HUMAN STANDARD:** Only include language selectors when comprehensive localized dictionary bundles (`l10n`/`i18n`) exist and are actively loaded by the application.

### 132. The "Confidence Score Bar" on Deterministic Data
* **BANNED:** Appending a cosmetic "98.7% AI Confidence" badge or green progress bar next to basic database records or deterministic calculations like arithmetic totals or date differences.
* **HUMAN STANDARD:** Reserve probabilistic metrics strictly for statistical models and ML classifiers with transparent calibration curves; never AI-wash deterministic records.

### 133. The Auto-Playing Hero Audio Ambience / Sci-Fi Synth Drone
* **BANNED:** Unsolicited Web Audio hum or synthesized sci-fi background noise playing on page load to pretend the tool is an immersive virtual world.
* **HUMAN STANDARD:** Total audio silence on page load. Audio playback must strictly require explicit, intentional user initiation.

### 134. The Deceptive "Select Model Reasoning Effort" Slider
* **BANNED:** A slider allowing users to adjust "Reasoning: Low / Medium / High" or "Extended Thinking: 64k tokens" on an app that has no reasoning model integration and just adds a 2-second `setTimeout`.
* **HUMAN STANDARD:** If reasoning parameters are configurable, bind them directly to the underlying model inference API parameters; otherwise, omit deceptive mock controls.

### 135. The Unbounded SVG Curved Bezier Wire Web (Node Graph Cosplay)
* **BANNED:** Drawing tangled SVG bezier curves across background cards to cosplay a neural DAG when the product is just a linear 3-step form.
* **HUMAN STANDARD:** Grounded layout hierarchy: use clean flex/grid structures, clear numbered steps, or genuine interactive canvas node graphs when node inspection is core to the workflow.

### 136. The Faux Realtime Collaboration Cursor Ghosting on Single-Player Apps
* **BANNED:** Simulated ghost cursors leaving trailing pastel paths on a personal note-taking or spreadsheet app to simulate multiplayer activity.
* **HUMAN STANDARD:** Real-time presence must be backed by live WebSocket channels and genuine active user sessions; keep single-player interfaces calm and uncluttered.

### 137. The Missing Carousel Fallback / Heavy Swiper.js Bundle Injection (Ignoring Native CSS `::scroll-button()` & `::scroll-marker`)
* **BANNED:** Importing 40KB external carousel JavaScript packages (Swiper, Slick) for simple mobile horizontal scroll lists instead of using native CSS scroll-snap and modern Chrome 135 `::scroll-marker` primitives.
* **HUMAN STANDARD:** Use native CSS scroll-snap with modern `::scroll-button()` and `::scroll-marker` pseudo-elements for zero-JS, 60fps hardware-accelerated carousels.

### 138. The `attr()` Neglect Hack (Generating Hundreds of Inline CSS Variables for Dynamic Data)
* **BANNED:** Injecting messy inline style attributes `style="--progress: 75%"` or hundreds of utility classes instead of using Chrome 133+ advanced `attr(data-value type(<percentage>))` directly in stylesheets.
* **HUMAN STANDARD:** Use modern typed CSS `attr(data-progress type(<percentage>), 0%)` or `attr(data-size type(<length>))` to read data attributes directly into CSS properties without inline style clutter.

### 139. The Non-Semantic Micro-Badge Cluster (Tag Soup Overload)
* **BANNED:** Decorating every card with 5 tiny badges like `[LLM]`, `[GPT-4]`, `[Fast]`, `[V2]`, `[Free]` taking up 40% of card height and creating severe visual noise.
* **HUMAN STANDARD:** Typographic discipline: let clear, informative headlines and one functional category label convey status; eliminate badge soup clutter.

### 140. The Faux "AI Hallucination Guardrail Active" Shield Gimmick
* **BANNED:** A glowing green shield icon declaring "100% Zero-Hallucination Guaranteed" stamped across user interfaces with zero formal verification or retrieval grounding.
* **HUMAN STANDARD:** Honest, verifiable accuracy reporting: provide citation links to source documents, retrieval provenance metadata, and confidence thresholds.

### 141. The Centered Cardboard Box / Sad Empty Folder Illustration ("Empty State Slop")
* **BANNED:** Dropping a generic, centered vector graphic of an open empty cardboard box, a sad folder, or a magnifying glass with canned filler copy (*"No items found"* or *"Nothing here yet"*) when a search, filter, or data table yields zero results, abandoning the user with zero contextual suggestions, proactive scaffolding, or quick-recovery actions.
* **HUMAN STANDARD:** Actionable, instructive empty states: provide immediate one-click clear filters, contextual sample dataset seeders, or a prominent primary action button to create the first record with helpful documentation links.

### 142. The "Powered by AI / Copilot" Subtitle Suffix Addiction
* **BANNED:** Tacking an unearned *"Powered by AI"*, *"AI-First"*, or *"Autonomous Copilot"* subtitle onto standard, deterministic CRUD forms, note-taking apps, calculators, or inventory loggers that have no machine learning backend whatsoever.
* **HUMAN STANDARD:** Grounded, functional technical labeling. Name the actual architectural mechanism (*"SQLite FTS5 full-text indexing"*, *"Deterministic rule engine"*, *"In-memory data store"*).

### 143. The Fake "Prompt-to-App" Code Generation Streamer in Hero
* **BANNED:** Showing a split-screen animation in the hero where a simulated user prompt (*"Create an Airbnb clone"*) triggers an auto-typing stream of colored CSS/HTML that magically morphs into a pristine UI, giving a deceptive impression of instant zero-effort production software.
* **HUMAN STANDARD:** Grounded, realistic showcase: display actual developer interfaces, documented step-by-step CLI workflows, real commit histories, or genuine production case studies with real engineering trade-offs.

### 144. The Deceptive "AI Agent Token Pricing Tier" on Free/Open-Source Tools
* **BANNED:** Slapping pricing tables with mock tiers like *"Free: 10,000 tokens/mo"*, *"Pro: 1,000,000 tokens/mo ($29/mo)"*, *"Enterprise: Custom SLA"* on simple client-side utility tools, browser extensions, or local bash scripts that have zero server costs or model inference pipelines.
* **HUMAN STANDARD:** Clear, authentic licensing: transparent open-source terms (MIT, Apache 2.0), straightforward one-time pricing, or clean sponsorship links (GitHub Sponsors) without cosmetic SaaS tier posturing.

### 145. The Floating "Chat with Document" PDF Overlay on Static Articles
* **BANNED:** Pinning a non-functional floating bottom sheet or modal pill labeled *"Chat with this article ✨"* or *"Ask AI about this page"* on short 3-paragraph blog posts or documentation pages where all text is already visible on a single screen.
* **HUMAN STANDARD:** Deliver dense, scannable, well-structured prose with clear section headers, anchor links, and summaries. Avoid cluttering readable reading experiences with redundant conversational chatbot wrappers.

### 146. The Synthetic "Verified Human / Built Without AI" Badge Posturing
* **BANNED:** Slapping a cynical, decorative stamp or badge declaring *"100% Handcrafted by Humans — No AI Used"* onto a site that is blatantly an un-customized template or AI-generated boilerplate, using counter-culture cynicism as a cheap marketing disguise.
* **HUMAN STANDARD:** Let genuine engineering craft and authentic visual design speak for itself: intentional domain-adapted typography, custom color palettes, thoughtful error states, accessible semantic markup, and zero-comment code.

### 147. The Fake "AI Model Latency / Speedometer" Gauge
* **BANNED:** Displaying a radial speedometer or tachometer gauge in the hero section titled *"Inference Speed: 1,200 tokens/sec"* with an animated needle revving to maximum on a tool that doesn't benchmark or run inference models.
* **HUMAN STANDARD:** Authentic quantitative benchmarks: publish reproducible benchmarking scripts, P50/P90/P99 latency tables with explicit hardware specifications and dataset sizes.

### 148. The Misplaced "Linear/Raycast Monochromatic Dark Theme" on Everyday Consumer Apps
* **BANNED:** Reflexively forcing pitch-black `#09090b` obsidian backgrounds, microscopic 11px gray fonts, and `⌘K` command palettes onto public elementary school portals, local bakery menus, or kindergarten registration apps simply because the AI saw it in developer tools.
* **HUMAN STANDARD:** Pre-Design Theme Discovery Protocol ("tugas ini cocoknya tema apa?"). Match the design archetype to the end user: warm, high-contrast, welcoming light modes with legible typography for public and consumer services.

### 149. The Deceptive "AI Safety & Guardrail Compliance Matrix" on Static Apps
* **BANNED:** Adding a grid of fake security checkmarks like *"OWASP Top 10 for LLMs Compliant"*, *"Prompt Injection Shield Active"*, *"Differential Privacy Verified"* on a simple static portfolio or portfolio site with zero data storage or model execution.
* **HUMAN STANDARD:** Real security audits and documentation: provide actual vulnerability scan reports (such as `tyw-audit`), cryptographic verification hashes, and honest data privacy statements.

### 150. The Generic Floating Particle Mesh / Constellation Canvas Background
* **BANNED:** Loading a full-screen canvas running animated interconnected geometric nodes or floating particles that drain 30% CPU and burn mobile battery while adding zero informational value.
* **HUMAN STANDARD:** Grounded CSS surfaces: solid colors, subtle architectural gridlines, intentional typography, and crisp static vector art that renders instantly without consuming thread cycles.

### 151. The "Punchy Fragmented AI Rhythm" Copywriting Slop ("Same scene. Same instant. No X. No Y. Just Z.")
* **BANNED:** Generating staccato sentence fragments without predicates or grammar ("One platform. Zero limits. Same instant. A different atmosphere. No friction. Just velocity.") to mimic superficial profundity.
* **HUMAN STANDARD:** Complete, coherent grammatical sentences describing actual technical operations, system architectures, or concrete business problem solutions.

### 152. The Faux 3D Spline / Heavy Rotating Torus Hero Gimmick
* **BANNED:** Loading an interactive 4MB Three.js/Spline 3D canvas of an iridescent rotating metallic doughnut, chrome knot, or floating marble sphere in the hero that locks mobile touch scrolling, drains 40% CPU, and contributes zero product utility.
* **HUMAN STANDARD:** Clean CSS background foundations, grounded typography, responsive SVG technical diagrams, or authentic interactive UI components that load with zero main-thread contention.

### 153. The "Empower Your Digital Journey" Buzzword Salad
* **BANNED:** Packing headers and value propositions with generic corporate filler ("empowering seamless transformation across your digital enterprise", "unlocking transformative synergies for high-velocity teams").
* **HUMAN STANDARD:** Concrete domain utility: state the exact problem, dataset size, runtime environment, or specific operational outcome in straightforward language.

### 154. The Suspiciously Perfect Corporate Persona Testimonials
* **BANNED:** Fabricating testimonials with fictional stock headshots attributed to robotic generic personas like "Alex M., VP of Revenue Growth at Nexus Labs" raving: "This has completely transformed our workflow in ways we never imagined."
* **HUMAN STANDARD:** Real user case studies with verifiable names, concrete operational metrics (e.g. latency, error rates, throughput), or omit testimonials entirely until genuine customer evidence exists.

### 155. The Misplaced Glassmorphic Island Stack on Simple Forms
* **BANNED:** Wrapping simple 2-input login or contact forms inside multiple layers of nested translucent glassmorphism (`backdrop-blur-xl bg-white/5 border border-white/10`) with glowing border beams, making input text completely unreadable on lower-brightness displays.
* **HUMAN STANDARD:** Clean, solid surfaces with accessible contrast: high-contrast form fields on grounded backgrounds with clear focus-visible outlines.

### 156. The Fake LLM Context Window / Token Capacity Gauge
* **BANNED:** Dropping a cosmetic radial gauge or progress bar titled "2,000,000 Token Context Window" or "Infinite Retrieval Capacity" on simple client-side calculators, bookmark managers, or static markdown viewers.
* **HUMAN STANDARD:** Only present context capacity or token telemetry if backed by actual model API integration and verifiable query parameters; otherwise, describe tool capabilities factually.

### 157. The "Anti-AI AI Posturing" Cynicism
* **BANNED:** Slapping cynical decorative stickers or badges saying "100% Anti-AI / Handcrafted by Real Humans" onto a site that is blatantly an un-customized default Tailwind or shadcn template.
* **HUMAN STANDARD:** Let genuine engineering craft and authentic design speak for itself: thoughtful error states, custom domain palettes, accessible semantic markup, and zero-comment code.

### 158. The Compulsive Triadic Feature Slogan ("Think. Code. Ship.")
* **BANNED:** Rigidly forcing every subhead, card title, and value proposition into formulaic triads of punchy 1-word verbs ("Plan. Build. Scale.", "Think. Code. Ship.", "Track. Analyze. Automate.").
* **HUMAN STANDARD:** Natural, descriptive sentences stating concrete workflows and functional outcomes.

### 159. The Deceptive "Calculated In Real-Time" Micro-Badge on Hardcoded Stats
* **BANNED:** Appending a blinking green badge claiming "Calculated from 1.2M events in real-time" or "Live data feed" next to a hardcoded number `42` in static HTML.
* **HUMAN STANDARD:** Grounded, verifiable metrics: link to real WebSocket streams or state data calculation methodology and update schedules honestly.

### 160. The Disconnected Floating Chat Bubble Colliding with Virtual Keyboards
* **BANNED:** Pinning a floating chatbot circle (`fixed bottom-4 right-4 z-50`) that ignores `interactive-widget=resizes-content` and safe area insets, pinning itself directly over input forms and mobile keyboard submit buttons.
* **HUMAN STANDARD:** Integrate conversational helpers contextually inline within workflow toolbars, command palettes, or ensure floating elements auto-hide when mobile virtual keyboards or bottom sheets are active.

### 161. The Compulsive Em Dash (—) Syntax Stamp
* **BANNED:** Obsessively sprinkling em dashes (`—`) across every button label, subheader, and feature bullet point ("Deploy — anywhere — instantly", "Ship faster — with zero friction", "Search — verify — succeed") to synthetically fake editorial gravitas.
* **HUMAN STANDARD:** Clean, natural punctuation. Real human copywriters use standard sentence grammar, commas, or clean line breaks rather than repetitive em dash ticks.

### 162. The Bento Grid Monoculture & Layout Smuggling (Bento Fatigue)
* **BANNED:** Reflexively cramming every product feature into an assembly-line 3x3 Bento grid filled with disconnected filler widgets—a faux toggle switch, a non-functional world map with glowing dots, a random avatar pile, and a meaningless circular progress gauge—purely because it mimics Linear or Apple templates.
* **HUMAN STANDARD:** Reserve Bento layouts strictly for displaying genuinely interrelated multidimensional data facets. When features are sequential or narrative, use purposeful asymmetric editorial sections, structured lists, or interactive sandboxes.

### 163. The Conic "Border Beam" / Infinite Spinning Gradient Border Addiction
* **BANNED:** Wrapping every card, container, and CTA button in a continuous rotating conic gradient border beam animation (`animation: border-beam 4s infinite linear`), converting professional software into a visual casino slot machine and wasting GPU cycles.
* **HUMAN STANDARD:** Clean static hairline borders (`border border-zinc-200/80` or `border-zinc-800/60`) paired with subtle ambient drop shadows. Dynamic border movement must only occur as an immediate, functional response to user keyboard focus (`:focus-visible`).

### 164. The Faux "Vibe Coding" Command Bar / Hallucinated `⌘K` Palette on Static Sites
* **BANNED:** Placing a prominent `⌘K` command palette trigger or search input in the header of simple 2-page portfolios, blogs, or brochure websites that either does nothing or opens a modal containing the exact same 3 navigation links already visible on the navbar.
* **HUMAN STANDARD:** Only implement command palettes on high-density applications with complex multi-view navigation or extensive search indexes; keep static and editorial site navigation clean, direct, and distraction-free.

### 165. The Synthetic "Agent Reasoning Trace / CoT" Animation on Instant Lookups
* **BANNED:** Simulating a staged 5-step thinking animation with pulsing checkmarks ("1. Parsing intent... 2. Querying knowledge graph... 3. Synthesizing insights...") on an instant deterministic SQL query or static client-side filter to artificially cosplay deep LLM chain-of-thought reasoning.
* **HUMAN STANDARD:** Return instant data instantly (sub-50ms). If asynchronous long-running background tasks actually exist, expose genuine streaming server-sent events (SSE) or verifiable progress telemetry without manufactured cosmetic delays.

### 166. The Non-Semantic "Status Dot with Compulsive Pulse Ping" (`animate-ping`)
* **BANNED:** Affixing an emerald pulsating radar ping (`relative flex h-2 w-2` with `animate-ping`) next to completely static, offline, or historical database records (such as "Created: 2023-04-12" or "Status: Archived") to deceptively fake a real-time WebSocket connection.
* **HUMAN STANDARD:** Reserve animated pulse states exclusively for live, in-flight streaming connections, active audio recording sessions, or real-time distributed node heartbeats; render historical or offline states with calm, static indicators.

### 167. The Compulsive "Oatmeal Beige & Italic Serif" Overcorrection on DevTools
* **BANNED:** Overcorrecting from neon dark mode by reflexively dumping warm beige `#fbf8f3`, delicate italic `Instrument Serif`, and terracotta buttons onto network packet sniffers, Kubernetes cluster managers, or low-level firmware debuggers where high-contrast terminal legibility is functionally necessary.
* **HUMAN STANDARD:** Execute the Pre-Design Theme Discovery Protocol ("tugas ini cocoknya tema apa?"). Select palettes that authentically honor the user's domain: crisp zinc/slate for cloud devops, dark basalt for firmware consoles, and reserve warm oatmeal palettes strictly for humanistic essays, literature, or boutique curation.

### 168. The Fake Interactive Slider / Draggable Bezier Node Snapping to Canned State
* **BANNED:** Embedding an interactive canvas with bezier curve drag handles or weight sliders that allows the user to drag for 20 pixels before snapping rigidly back to a hardcoded preset position because no physics or calculation engine exists behind it.
* **HUMAN STANDARD:** Real interactive controls must bind directly to functional state or Web Audio/Canvas math engines; otherwise, present clean, high-resolution annotated static diagrams.

### 169. The Redundant Floating "Summarize Page with AI ✨" Banner on Single-Screen Dashboards
* **BANNED:** Affixing a sticky header or bottom banner prompting the user to "Summarize this page with AI" on an interface that only displays three numbers and a 5-row table that can already be understood at a single glance in 0.5 seconds.
* **HUMAN STANDARD:** Respect user cognitive autonomy. Provide high-density scannable information architecture without condescending automated summary popups over obvious, minimal data.

### 170. The Anonymous "Infinite Marquee of Duplicated Monochrome Logos" (Mirror Hall)
* **BANNED:** Rendering an endlessly scrolling CSS marquee containing 4 fictitious company logos duplicated 5 times over (`animation: marquee 20s linear infinite`), creating an artificial dizzying carousel that obscures the lack of actual customer traction.
* **HUMAN STANDARD:** Showcase real, verifiable customer case studies with specific operational metrics, direct attribution, or linkable GitHub pull requests; otherwise, omit social proof strips entirely until authentic institutional adoption exists.

### 171. The Faux "Hallucination-Free RAG Pipeline" Diagram on Basic String Matchers
* **BANNED:** Drawing an elaborate 4-stage diagram with vector embeddings, chunking nodes, and re-ranking arrows to describe a simple JavaScript `.includes()` search or SQL `LIKE %query%` operation.
* **HUMAN STANDARD:** Honest, transparent technical labeling: label keyword filters as keyword filters, and reserve vector architecture diagrams strictly for genuine embedding pipelines.

### 172. The "Everything is an Assistant" Conversational Input Fallback
* **BANNED:** Replacing clear, fast, and structured form fields (date pickers, dropdown selects, range sliders) with a single generic text input that says "Tell AI what you want to book...", forcing users to awkwardly type full sentences instead of clicking two intuitive controls.
* **HUMAN STANDARD:** Deliver purposeful, direct manipulation UI: native date pickers, accessible selects, and structured radio groups that can be completed in seconds without conversational friction.

### 173. The Misplaced "Glassmorphic Dock" on Mobile Web
* **BANNED:** Pinning a macOS-style floating dock (`rounded-full backdrop-blur-md px-6 py-3 border border-white/20`) at the bottom of a mobile viewport, floating directly above native mobile gesture home-bars, blocking footer content, and wasting 80px of vertical reading space.
* **HUMAN STANDARD:** Standard mobile ergonomics: utilize docked bottom app bars with explicit safe-area padding (`env(safe-area-inset-bottom)`) or clean top headers, leaving the viewport open for reading and touch navigation.

### 174. The Ghost Telemetry "Active Nodes / 99.9% Uptime" Badge on Shared Hosting
* **BANNED:** Slapping a status widget claiming "Global Edge Nodes: 280+ | Uptime: 99.99%" onto a static client-side tool hosted on standard GitHub Pages or a single free-tier container.
* **HUMAN STANDARD:** Publish real operational infrastructure metrics tied to verifiable status pages (e.g., statuspage or uptime feeds), or describe application deployment architecture factually without synthetic server telemetry.

### 175. The Deceptive "Token Cost Optimizer" Comparison Bar
* **BANNED:** Showing a split bar chart comparing "Cost with Legacy LLMs: $14,000/mo" vs "Cost with Us: $12/mo" with zero token volume methodology, zero prompt breakdown, and no verifiable billing calculation harness.
* **HUMAN STANDARD:** Provide transparent, reproducible pricing models and interactive cost estimators with configurable input/output token volume parameters and verifiable API pricing rates.

### 176. The "Generated in 0.X seconds" Performance Theater Stamp
* **BANNED:** Appending a prominent cosmetic badge saying "✨ Generated in 0.34s" or "Response formulated in 412ms with 99.8% precision" below every single card, form input, or static page title to cosplay sub-second LLM execution speed.
* **HUMAN STANDARD:** Only display latency metrics on dedicated developer benchmark harnesses or transparent API diagnostics panels with verifiable timestamp origins; never clutter consumer UI with vanity execution badges.

### 177. The Faux "Autonomous Agent Mode" / "Copilot vs Autonomous" Segmented Switch
* **BANNED:** Placing an interactive segmented switch at the top of an app ("⚡ Copilot" vs "🤖 Autonomous Agent") where toggling it simply runs the exact same synchronous API request or merely adds a 2-second fake loading spinner.
* **HUMAN STANDARD:** If autonomous agent execution exists, bind the switch to an actual asynchronous background worker queue with explicit checkpoint pauses, task cancellation controls, and human-in-the-loop review state.

### 178. The Compulsive "✨ Copy Prompt / ✨ Magic Edit" Sparkle-Washing on Basic Utility Buttons
* **BANNED:** Prepending four-point sparkles (`✨`) to ordinary clipboard copying, text formatting, or standard search buttons ("✨ Copy to Clipboard", "✨ Magic Format", "✨ Smart Refresh") to falsely claim generative AI capabilities on deterministic browser operations.
* **HUMAN STANDARD:** Call standard utilities by their honest, functional labels: "Copy", "Format Text", "Refresh" with clean semantic SVG icons.

### 179. The Synthetic "Context Window" / "Memory Buffer" Capacity Gauge on Simple Forms
* **BANNED:** Embedding a circular progress ring or colored bar labeled "Context Memory: 14% used (18k / 128k tokens)" on standard multi-step forms or CRUD dashboards that maintain zero LLM conversation context.
* **HUMAN STANDARD:** Show honest form progression indicators (e.g. "Step 2 of 4" or character limit counters for bounded database fields `maxlength="255"`).

### 180. The Deceptive "Dynamic Island" / Floating Morphing Pill Header on Desktop Web
* **BANNED:** Forcing a black floating pill container into the top-center of a desktop webpage that morphs, bounces, and pulses with fake background music or active task animations, intercepting navigation and wasting valuable header space.
* **HUMAN STANDARD:** Clean, semantic desktop navigation (`<nav class="sticky top-0 ...">`) respecting natural horizontal screen real estate, clear typographic links, and predictable focus order.

### 181. The Compulsive "Markdown Summary Accordion" Under Plain Relational Tables
* **BANNED:** Automatically appending a collapsed `<details>` accordion captioned "✨ AI Key Takeaways & Summary" below a concise 5-row SQL table, simply repeating the exact same table rows in bulleted AI prose.
* **HUMAN STANDARD:** Let structured data speak for itself. Concise summary statistics (sums, averages, counts) belong in clean tabular header/footer summary rows or compact metric cards, not redundant AI paragraphs.

### 182. The Fake "Multi-Model Consensus" Percentage Breakdown on Deterministic Results
* **BANNED:** Displaying a mock progress breakdown ("Claude 92% | GPT-4o 94% | Gemini 96% Consensus") next to exact arithmetic calculations, database query counts, or verified financial totals.
* **HUMAN STANDARD:** Never apply probabilistic consensus framing to deterministic computations; reserve consensus metrics strictly for ensemble machine learning classifiers with published cross-validation datasets.

### 183. The Faux "Vector Database Latency" Radar / Spider Chart with Fabricated Axes
* **BANNED:** Dropping a multi-axis polygon radar chart titled "Vector Pipeline Efficiency" with arbitrary unlabeled axes (e.g., "Semantic Depth", "Neural Flow", "Cognitive Speed") on tools that use basic SQL `ILIKE` filters.
* **HUMAN STANDARD:** Present real system performance telemetry: P50/P99 latency histograms, memory consumption, throughput in rows/sec, and reproducible load-testing benchmarks.

### 184. The Incessant "Infinite Shimmer Glass" / Conic Border Ray Beam on Every Card Hover
* **BANNED:** Wrapping every card in an animation where hovering causes a blinding 360-degree laser beam or metallic holographic ray to rotate around the border, causing massive GPU compositing lag and visual distraction.
* **HUMAN STANDARD:** Quiet, professional hover states: subtle 150ms ambient drop-shadow elevation (`shadow-sm` -> `shadow-md`) or crisp 1px border color transitions (`border-zinc-200` -> `border-zinc-300`).

### 185. The Faux "Real-Time Agent Hierarchy / Live DAG Tree" on Single-Threaded CRUD Apps
* **BANNED:** Rendering an animated SVG node tree in the sidebar labeled "Agent Swarm Orchestrator: 5 Sub-Agents Active" with pulsing nodes on an app that executes a single synchronous HTTP GET request.
* **HUMAN STANDARD:** Real-time multi-agent execution must connect to real distributed worker channels (WebSockets, SSE) exposing verifiable event IDs, run statuses, and execution timestamps.

### 186. The Faux "Hallucination Defense Shield Active" Radar Sweep Animation
* **BANNED:** Displaying a green circular radar sweep graphic labeled "Active Guardrail: 0% Hallucination Intercepted" over ungrounded generative text outputs that have no retrieval verification.
* **HUMAN STANDARD:** Honest provenance: provide direct clickable markdown hyperlinks to ground-truth citation sources and display exact retrieved context snippets.

### 187. The Misplaced "Prompt Suggestion Carousel" Flooding Page Footers
* **BANNED:** Stuffing 8-12 horizontal sliding prompt pills ("Try: 'Draft an investment memo'", "Try: 'Explain quantum entanglement'") into the global footer of a website regardless of page context.
* **HUMAN STANDARD:** Contextual input assistance: place relevant search templates or filter shortcuts directly beneath the active input field where users are focused.

### 188. The Synthetic "Model Reasoning Token Burn Rate" Live Sparkline
* **BANNED:** Placing a fluctuating green SVG sparkline graph claiming to measure "Real-Time Cognitive Burn: 42 tokens/sec" that actually runs on a client-side `Math.random()` interval.
* **HUMAN STANDARD:** Display actual billing metrics or API token counters tied directly to verifiable API usage payloads (`usage.prompt_tokens` / `usage.completion_tokens`), or omit token metering entirely.

### 189. The Faux "Agent Swarm / Multi-Agent Canvas" with Floating Bouncing Nodes
* **BANNED:** Injecting an unprompted HTML5 Canvas or SVG container filled with floating circles labeled "Agent 1: Orchestrator", "Agent 2: Researcher", "Agent 3: Synthesizer" drifting aimlessly with animated curved bezier lines, serving zero functional utility.
* **HUMAN STANDARD:** Clear tabular task queues, chronological event logs, or explicit linear pipeline step views with real status tags.

### 190. The Deceptive "AI Token ROI / Cost Savings" Hyperbolic Slider
* **BANNED:** An interactive slider ("How many hours do you spend per week?") that automatically computes fabricated metrics like *"You will save $142,500/year and 840 hours with our AI"*.
* **HUMAN STANDARD:** Realistic pricing calculators based on concrete verifiable unit costs (e.g., storage per GB, API calls per thousand, seats per month) without hyperbolic multiplier formulas.

### 191. The Compulsive "Auto-Detecting Intent..." Pulsing Skeleton in Search Bars
* **BANNED:** A simple search input field or query box that displays animated gradient shimmer text claiming "AI is analyzing your context..." before the user has even finished typing.
* **HUMAN STANDARD:** Instant, zero-latency local client-side filtering or standard debounce queries with a clean, static search input and clear keyboard shortcuts (`/` or `Cmd+K`).

### 192. The Faux "Autonomous Threat Defense / AI Guardrail" 3D Shield Graphic
* **BANNED:** A dark-mode hero graphic featuring a glowing, spinning 3D wireframe shield, cube, or concentric rings with floating text "Zero Hallucination Guarantee" or "Guardrails v4.2 Active".
* **HUMAN STANDARD:** Verifiable compliance badges (SOC2 Type II, ISO 27001, HIPAA), cryptographic checksums, explicit SLA guarantees, or omit the decorative security theater.

### 193. The "Model Router Selector" Tab Strip on Static CRUD Apps
* **BANNED:** Injecting a prominent tab bar or dropdown allowing users to "Switch Model: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.1" on apps that are fundamentally basic relational CRUD forms or static websites.
* **HUMAN STANDARD:** Present the interface controls relevant to the actual product domain. Do not turn every application into an AI model playground wrapper.

### 194. The Synthetic "Hallucination Rate: 0.00%" False-Precision Metric Stamp
* **BANNED:** A prominent stat card claiming mathematical impossibility ("0.000% Hallucination Rate" or "100% Deterministic AI Output") to deceive non-technical buyers.
* **HUMAN STANDARD:** Transparent confidence scores, verifiable deterministic testing benchmarks with documented sample sizes and error margins, or honest operational SLAs.

### 195. The Fake "Prompt-to-Product" Live Typing Code Simulator with Artificial Pauses
* **BANNED:** A hero section video or CSS animation showing fake human typing in an input, followed by a simulated "Thinking..." spinner, followed by a sudden mock UI popping into existence.
* **HUMAN STANDARD:** Immediate, high-resolution product demo video, interactive sandboxed component preview, or real before-and-after case study screenshots.

### 196. The Compulsive "✨ AI Summary" Accordion on Short 2-Paragraph Articles
* **BANNED:** Injecting an "AI Key Takeaways (3 Bullet Points)" expandable banner at the top of a short 150-word note or blog post, where reading the summary takes longer than reading the original text.
* **HUMAN STANDARD:** Write concise, high-density original copy. If a summary is genuinely needed for a 5,000-word whitepaper, write a human-crafted abstract or executive summary.

### 197. The Deceptive "Synthetic User Sentiment" Gauge or Radar Chart
* **BANNED:** A circular gauge or spider chart on landing pages displaying "Customer Sentiment: 99.4% Positive" or "Tone: Empathetic & Authoritative" without any linked survey data, methodology, or source corpus.
* **HUMAN STANDARD:** Verifiable customer NPS benchmarks, direct named case studies with verified attribution, or real customer satisfaction ratings from trusted platforms (G2, Capterra).

### 198. The Omnipresent Floating "Chat with this Page / Ask Copilot" Drawer Covering UI Controls
* **BANNED:** Sticking a fixed bottom-right circular chat bubble or drawer on every screen that intercepts click events, obscures submit buttons or pagination, and provides useless canned responses to questions easily answered by the page text.
* **HUMAN STANDARD:** Clean semantic search, clear in-page headings, accessible documentation navigation, and unobtrusive contextual help links.

### 199. The "Self-Healing Architecture" Rotating Gear & Sparkle Banner
* **BANNED:** A banner claiming "Autonomous Self-Healing Infrastructure" with an animated rotating gear emitting pastel sparkles, plastered over standard Kubernetes or cloud hosting setups.
* **HUMAN STANDARD:** Technical architecture diagrams, documented health-check probes (`livenessProbe` / `readinessProbe`), failover metrics, and automated cluster recovery specifications.

### 200. The Faux "Continuous Adaptive Interface" Marketing Claim on Rigid Static Templates
* **BANNED:** A landing page claiming "The UI that morphs and adapts to your thought process in real-time" when the actual website is a completely static, unyielding Tailwind template.
* **HUMAN STANDARD:** Accurate product capability descriptions. Describe exactly what the application does without metaphysical promises of cognitive adaptation.

---

## 8. Mobile-First Responsiveness Architecture (Intrinsic Web Standards)

Mobile web design must operate on intrinsic component responsiveness, fluid typography, and touch ergonomics rather than desktop-shrunk layouts:

### A. Mobile-First CSS Foundation & Architectural Reset
Tulis gaya dasar (*base styles*) untuk layar terkecil terlebih dahulu, kemudian lakukan *progressive enhancement* ke layar yang lebih besar menggunakan query `min-width` atau container queries:
* **Keuntungan Performa:** Perangkat mobile memproses aturan layout yang jauh lebih sederhana pada tahap awal rendering, meminimalkan recalculation gaya, dan melenyapkan Cumulative Layout Shift (CLS).
* **Reset Fondasi Mobile-First:**
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
  }
  
  body {
    margin: 0;
    min-height: 100dvh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  ```

### B. Intrinsic Component Layouts with CSS Container Queries
Alih-alih hanya mengandalkan viewport global media query (`@media (min-width: ...)`), buat komponen mandiri yang merespons lebar pembungkus induknya (*parent container*) menggunakan CSS Container Queries:
```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@container card (min-width: 420px) {
  .card {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 1.5rem;
  }
}
```
* **Container Query Units:** Manfaatkan unit `cqi` (1% of container inline size) dan `cqw` untuk tipografi atau jarak yang proporsional langsung terhadap kontainer, bukan lebar layar browser.
* **Tailwind CSS Implementation:** Gunakan `@container` pada parent dan `@variant` pada child (misal: `@container`, `@[400px]:grid-cols-2`, `@container/sidebar (min-width: 320px)`).

### C. Dynamic Viewport Units (`100dvh` over `100vh`)
* **THE PROBLEM:** Nilai klasik `100vh` mengabaikan tinggi address bar dan toolbar navigasi dinamis browser mobile (Chrome Android, Safari iOS). Ketika pengguna mulai menggulir layar dan address bar menyusut/hilang, terjadi reflow mendadak (*layout jump*) yang mendorong tombol aksi utama (CTA) keluar dari layar.
* **SPESIFIKASI UNIT MODERN:**
  * `100vh`: Viewport statis (sering overflow terpotong toolbar mobile).
  * `100svh` (*Small Viewport Height*): Mengasumsikan toolbar browser sedang terbuka penuh (skenario ruang paling sempit).
  * `100lvh` (*Large Viewport Height*): Mengasumsikan toolbar browser sedang tersembunyi/menyusut penuh.
  * `100dvh` (*Dynamic Viewport Height*): **Menyesuaikan diri secara dinamis real-time** mengikuti muncul-hilangnya toolbar browser saat pengguna scroll.
* **STANDAR MUTLAK:** Terapkan `min-h-[100dvh]` pada hero full-screen, splash screen, drawer overlay, dan app shells mobile.

### D. Virtual Keyboard Handling & Safe Viewport Meta (`viewport-fit=cover`)
Ketika pengguna mengetuk field input formulir di perangkat touchscreen, virtual keyboard akan muncul ke atas dan kerap menutupi tombol submit sticky atau bottom floating action bar. Selain itu, inset safe area (`env(safe-area-inset-*)`) hanya aktif jika `viewport-fit=cover` dideklarasikan.

Deklarasikan arahan `interactive-widget` dan `viewport-fit` secara eksplisit pada meta tag viewport di `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content">
```
* **`resizes-content`:** Memaksa visual viewport sekaligus layout viewport menyusut bersamaan saat keyboard muncul, sehingga tombol konfirmasi, bar navigasi bawah, dan kolom input chat otomatis terangkat ke atas keyboard tanpa tertutup.
* **`viewport-fit=cover`:** Mengaktifkan pemanfaatan penuh area layar tepi-ke-tepi (*edge-to-edge*) sehingga variabel `env(safe-area-inset-*)` dapat dibaca oleh browser engine mobile.

### E. Mobile Form Ergonomics: 16px Font Baseline
Pada browser mobile (khususnya Safari iOS dan Chrome Android), field input formulir dengan ukuran font di bawah `16px` memicu auto-zoom paksa ke layar input, memotong navigasi halaman dan memaksa pengguna melakukan pinch-to-zoom manual untuk mengembalikan tata letak.

* **STANDAR MUTLAK:** Semua elemen `<input>`, `<select>`, dan `<textarea>` WAJIB memiliki ukuran font minimal `16px` (atau `1rem` berbasis base 16px) pada tampilan mobile:
  ```css
  input, select, textarea {
    font-size: 1rem;
  }
  ```

### F. Fluid Typography & Spacing via CSS `clamp()`
Hentikan pembuatan belasan breakpoint media query patah-patah (*stepped staircases*). Gunakan interpolasi linier halus CSS `clamp()`:

```css
:root {
  --fluid-h1: clamp(2rem, 1.25rem + 2.5vw, 3.5rem);
  --fluid-h2: clamp(1.5rem, 1.15rem + 1.25vw, 2.25rem);
  --fluid-body: clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem);
  --fluid-gap: clamp(1rem, 0.5rem + 2vw, 2.5rem);
  --fluid-line-height: clamp(1.15, 1.1 + 0.5vw, 1.35);
}

h1 {
  font-size: var(--fluid-h1);
  line-height: var(--fluid-line-height);
  letter-spacing: -0.02em;
}

.component-title {
  font-size: clamp(1.25rem, 0.75rem + 2cqi, 2rem);
}
```
* **Kepatuhan Aksesibilitas WCAG 1.4.4 (Resize Text):** Karena fungsi `clamp()` menggabungkan unit relatif (`rem`) dengan unit dinamis (`vw` atau `cqi`), teks tetap berskala proporsional ketika pengguna memperbesar ukuran font bawaan browser hingga 200%.

### G. Touch Targets & WCAG 2.2 Ergonomics
* **WCAG 2.2 Target Size (SC 2.5.8 & SC 2.5.5):**
  * **WCAG 2.5.8 Target Size (Minimum - Level AA):** Target interaktif (tombol, tautan navigasi, ikon toggle, form control) harus memenuhi batas minimal **24x24 CSS pixels**, kecuali jika terdapat jarak pemisah (*spacing exception*) di mana lingkaran berdiameter 24px yang berpusat pada target tidak bersinggungan dengan target lain di sekitarnya.
  * **WCAG 2.5.5 Target Size (Enhanced - Level AAA) & Mobile Standard:** Standar ergonomi sentuhan jari manusia mewajibkan **44x44 CSS pixels** (Apple Human Interface Guidelines) hingga **48x48 CSS pixels** (Google Material Design 3) untuk mencegah salah ketuk (*mis-taps*).
  * **Automotive IVI & Industrial Telemetry Standard:** Untuk antarmuka konsol kendaraan dan instrumen lapangan, target sentuh dinaikkan ke minimal **56x56 CSS pixels** demi glanceability tinggi saat bergerak.
  * **Mandatory 8px Touch Spacing Gap:** Target sentuh yang berdekatan wajib dipisahkan dengan jarak minimal **8px gap** di antara batas sentuhnya untuk mencegah sentuhan ganda tak sengaja (*accidental adjacent mis-taps*).
* **Tiga Metode Implementasi Area Sentuh Tanpa Merusak Visual:**
  * **Metode A: Padding Ekspansi (`box-sizing: content-box`):**
    ```css
    .icon-button {
      width: 24px;
      height: 24px;
      padding: 10px;
      box-sizing: content-box;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    ```
  * **Metode B: Pseudo-Element Overlay (`::after`):**
    ```css
    .compact-link {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
    }
    
    .compact-link::after {
      content: '';
      position: absolute;
      top: -12px;
      bottom: -12px;
      left: -12px;
      right: -12px;
    }
    ```
  * **Metode C: Dimensi Minimum Eksplisit untuk Tombol Standard:**
    ```css
    .mobile-touch-btn {
      min-width: 44px;
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    ```
* **Safe Area Insets:**
  Akomodasikan area poni layar (*notch*), kamera tembus, dan gesture bar bawah iPhone/Android:
  ```css
  .bottom-bar {
    padding-bottom: max(1rem, env(safe-area-inset-bottom));
    padding-left: max(1rem, env(safe-area-inset-left));
    padding-right: max(1rem, env(safe-area-inset-right));
  }
  ```
* **Touch Trap & Pull-to-Refresh Prevention:**
  Terapkan `overscroll-behavior-y: contain` pada modal dialog, bottom sheet, dan slide-over menu untuk mencegah efek rantai gulir (*scroll chaining*) yang tidak sengaja memicu reload halaman pada browser mobile.

### H. Line-Breaking Ergonomics: `text-wrap: balance` & `text-wrap: pretty`
* **Headline Symmetry (`text-wrap: balance`):**
  Deklarasikan `text-wrap: balance;` pada semua elemen judul (`h1`, `h2`, `h3`, `.display-title`). Browser akan menyeimbangkan pembagian kata di setiap baris secara matematis sehingga headline tidak membentuk pola gergaji atau patahan baris yang janggal.
* **Paragraph Orphan Elimination (`text-wrap: pretty`):**
  Deklarasikan `text-wrap: pretty;` pada body text (`p`, `article`, `li`). Mesin perender teks browser akan menyesuaikan pembagian baris paragraf agar tidak ada satu kata yang tertinggal sendirian di baris paling akhir (*widow/orphan prevention*).
  ```css
  h1, h2, h3, .display-title {
    text-wrap: balance;
  }
  
  p, article, li {
    text-wrap: pretty;
    max-width: 65ch;
  }
  ```

### I. Touch Latency Elimination: `touch-action: manipulation`
* **THE PROBLEM:** Browser mobile secara default menunggu ~300ms setelah pengguna mengetuk layar untuk membedakan apakah ketukan tersebut adalah klik tunggal atau permulaan dari gestur *double-tap to zoom*. Keterlambatan 300ms ini membuat web app terasa lambat dan tidak responsif dibandingkan aplikasi native.
* **HUMAN STANDARD:** Deklarasikan `touch-action: manipulation;` pada semua target interaktif:
  ```css
  button, 
  a, 
  input, 
  select, 
  .interactive-target {
    touch-action: manipulation;
  }
  ```
  Aturan ini menonaktifkan deteksi *double-tap to zoom* pada elemen tombol dan navigasi, seketika melenyapkan jeda 300ms dan membuat respons sentuhan terasa instan (*native-app snappiness*).

### J. Sticky Hover Elimination on Touchscreens (`@media (hover: hover)`)
* **THE BUG:** Pada perangkat layar sentuh (iOS dan Android), browser tidak memiliki kursor *mouse pointer*. Ketika pengguna mengetuk elemen yang memiliki selektor `:hover`, browser mobile sering mempertahankan status `:hover` tersebut secara permanen sampai pengguna mengetuk elemen lain di luar area tersebut. Ini menyebabkan efek hover warna atau bayangan "menempel" (*sticky hover trap*).
* **HUMAN STANDARD:** Batasi transisi hover berbasis mouse hanya untuk perangkat yang benar-benar memiliki hardware penunjuk presisi:
  ```css
  /* Transisi hover HANYA aktif jika perangkat mendukung kursor mouse/trackpad */
  @media (hover: hover) and (pointer: fine) {
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    .btn-primary:hover {
      background-color: var(--color-primary-hover);
    }
  }

  /* Umpan balik sentuhan untuk perangkat mobile / touchscreen */
  @media (hover: none) or (pointer: coarse) {
    .btn-primary:active,
    .card:active {
      transform: scale(0.98);
      transition-duration: 75ms;
    }
  }
  ```

### K. CSS Subgrid for Flawless Card Alignments
* Alih-alih membuat card terisolasi dengan tinggi footer atau tombol aksi yang tidak sejajar antar-kolom di dalam CSS Grid, gunakan CSS Subgrid:
  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .card-item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
  }
  ```
  Ini memastikan judul, konten teks, dan tombol aksi bawah selalu sejajar secara horizontal di semua kolom grid tanpa perlu menyuntikkan JavaScript perhitungan tinggi kartu.

### L. Intrinsic Content-Driven Form Controls: `field-sizing: content`
* **THE PROBLEM:** Elemen `<textarea>` dan input formulir secara tradisional memerlukan tinggi/lebar statis atau script JavaScript kalkulasi `scrollHeight` yang berat saat pengguna mengetik multi-line copy, memicu layout thrashing dan penurunan frame rate mobile.
* **STANDAR MODERN:** Deklarasikan `field-sizing: content;` bersama batas pelindung `min-height` dan `max-height` agar kontrol formulir mengembang dan menyusut secara native mengikuti panjang teks:
  ```css
  textarea {
    field-sizing: content;
    min-height: 3rem;
    max-height: 15rem;
    resize: none;
  }

  input[type="text"] {
    field-sizing: content;
    min-width: 8rem;
    max-width: 100%;
  }
  ```

### M. Native Smooth Keyword Animations: `interpolate-size: allow-keywords`
* **THE PROBLEM:** CSS historis tidak dapat menganimasikan transisi ke atau dari keyword ukuran intrinsik (`height: auto`, `max-content`), memaksa developer membuat hack JavaScript `scrollHeight` yang rapuh untuk accordion, FAQ `<details>`, dan drawer menu.
* **STANDAR MODERN:** Aktifkan `interpolate-size: allow-keywords;` pada `:root`. Browser modern akan mengeksekusi transisi halus ke `height: auto` tanpa library eksternal atau JavaScript kalkulasi:
  ```css
  :root {
    interpolate-size: allow-keywords;
  }

  details {
    height: 2.5rem;
    overflow: hidden;
    transition: height 200ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  details[open] {
    height: auto;
  }
  ```

### N. Scroll-State Container Queries (Chrome 133+ CSS Container Queries Level 2)
* **THE PROBLEM:** Menambahkan bayangan pada sticky header saat scroll, mendeteksi kartu aktif pada carousel mobile, atau menampilkan indikator "scroll-more" sebelumnya membutuhkan JavaScript `IntersectionObserver` atau event listener `window.onscroll` yang rawan memicu reflow dan layout thrashing di mobile.
* **STANDAR MODERN (Zero-JS Scroll Reactivity):** Deklarasikan `container-type: scroll-state;` pada elemen pembungkus scroll. CSS engine browser akan mengevaluasi status scroll secara real-time di thread kompositor:
  ```css
  /* 1. Deklarasikan kontainer scroll-state */
  .sticky-nav-wrapper {
    container-type: scroll-state;
    position: sticky;
    top: 0;
    z-index: 40;
  }

  /* 2. Style anak otomatis saat elemen menempel di tepi viewport */
  @container scroll-state(stuck: top) {
    .nav-bar {
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);
      border-bottom: 1px solid rgba(228, 228, 231, 0.8);
    }
  }

  /* 3. Indikator aktif pada mobile horizontal scroll snap carousel */
  @container scroll-state(snapped: x) {
    .carousel-card {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* 4. Tampilkan bayangan batas overflow hanya jika masih ada konten yang dapat discroll */
  @container scroll-state(scrollable: bottom) {
    .scroll-container {
      mask-image: linear-gradient(to bottom, black calc(100% - 2rem), transparent 100%);
    }
  }

  /* 5. Pure Zero-JS Hidey-Bar (Chrome 144+): Auto-hide header saat scroll ke bawah, tampilkan saat scroll ke atas */
  html {
    container-type: scroll-state;
  }

  .auto-hiding-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 50;
  }

  @container scroll-state(scrolled: bottom) {
    .auto-hiding-header {
      transform: translateY(-100%);
    }
  }

  @container scroll-state(scrolled: top) {
    .auto-hiding-header {
      transform: translateY(0);
    }
  }
  ```
* **Scroll-State Query Keys (Chrome 133+ core, Chrome 144+ directional):**
  * `stuck: top | bottom | left | right` : Aktif saat elemen sticky menempel pada batas viewport.
  * `snapped: x | y` : Aktif saat child element ter-snap pada container `scroll-snap`.
  * `scrollable: top | bottom | left | right` : Aktif jika container masih memiliki overflow konten ke arah tersebut (misal untuk indikator scroll dinamis).
  * `scrolled: top | bottom | left | right` : Merespons arah pergeseran scroll relatif secara real-time di thread kompositor GPU tanpa JavaScript scroll listener (Chrome 144+).

### O. Style Container Queries: `@container style(...)`
* **THE PROBLEM:** Menyesuaikan style elemen turunan berdasarkan varian tema atau state komponen seringkali memaksa pembuatan selector CSS bertingkat yang rapuh (`.dark .card .title`, `.card--featured .title`) atau prop drilling di React/Blade.
* **STANDAR MODERN:** Definisikan custom property pada kontainer, lalu query nilai komputasinya secara deklaratif pada elemen turunan:
  ```css
  .card-container {
    container-type: normal;
    --card-surface: elevated;
  }

  @container style(--card-surface: elevated) {
    .card-title {
      font-weight: 600;
      color: var(--color-brand-primary);
    }
    
    .card-action {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
  }
  ```
  Ini mengisolasi komponen UI secara modular sehingga dapat dipindahkan ke container mana pun tanpa merusak hirarki cascading global.

### P. Zero-JS Discrete Entry & Exit Animations: `@starting-style` & `transition-behavior: allow-discrete`
* **THE PROBLEM:** Animasi elemen yang berpindah dari atau ke `display: none` (seperti modal `<dialog>`, slide-out drawer navigasi mobile, atau popover) secara historis langsung tersentak (*snap*) tanpa transisi karena browser mengevaluasi `display: none` seketika. Banyak developer keliru mengimpor library JavaScript animasi berat (Framer Motion, GSAP) atau menulis hack `setTimeout` rapuh hanya untuk menunda pelepasan elemen dari layar.
* **STANDAR MODERN (Pure CSS Native Discrete Transitions):**
  Deklarasikan `@starting-style` untuk mendefinisikan status transisi masuk (*entry state*), dan sertakan `transition-behavior: allow-discrete` (atau kata kunci `allow-discrete` pada shorthand `transition`) agar properti diskrit seperti `display` dan `overlay` menunggu hingga durasi animasi tuntas sebelum menutup (*exit state*):
  ```css
  /* 1. Modal Dialog Native (<dialog>) Entry & Exit Animation */
  dialog {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
    transition: 
      opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
      display 200ms cubic-bezier(0.16, 1, 0.3, 1) allow-discrete;
    transition-behavior: allow-discrete;
  }

  /* Status Terbuka saat dialog.showModal() dipanggil */
  dialog[open] {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  /* State Awal saat pertama kali render (Entry State) */
  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: scale(0.96) translateY(8px);
    }
  }

  /* Animasi Halus Backdrop Dialog */
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 200ms ease;
  }

  dialog[open]::backdrop {
    background-color: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(4px);
  }

  @starting-style {
    dialog[open]::backdrop {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  /* 2. Slide-out Mobile Side Drawer */
  .mobile-drawer {
    display: none;
    transform: translateX(100%);
    transition: 
      transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
      display 250ms cubic-bezier(0.16, 1, 0.3, 1) allow-discrete;
    transition-behavior: allow-discrete;
  }

  .mobile-drawer.is-open {
    display: block;
    transform: translateX(0);
  }

  @starting-style {
    .mobile-drawer.is-open {
      transform: translateX(100%);
    }
  }
  ```
* **Kaidah Spesifisitas:** Blok `@starting-style` wajib diletakkan *setelah* aturan state aktif (`dialog[open]` atau `.is-open`) di file CSS agar kaskade browser membaca urutan transisi dengan benar.

### Q. Native Mobile Scroll-Snap & Gestural Containment (`overscroll-behavior: contain`)
* **Horizontal Carousel & Tab Strips:** Jangan gunakan library slider pihak ketiga (Swiper, Slick) yang menambah bundle size puluhan kilobyte. Gunakan CSS native scroll snap:
  ```css
  .carousel-snap {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 1rem;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    scrollbar-width: none;
  }

  .carousel-snap::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    scroll-snap-align: start;
    flex: 0 0 calc(85% - 0.5rem);
  }
  ```
* **Pull-to-Refresh & Scroll Chaining Trap:** Selalu deklarasikan `overscroll-behavior-y: contain;` pada modal dialog, bottom sheets, dan panel drawer yang dapat digulir untuk mencegah gestur swipe memicu reload halaman paksa atau menggeser halaman utama di belakangnya.

### R. Native CSS Anchor Positioning (Zero-JS Floating UI)
* **THE PROBLEM:** Menempatkan elemen melayang (*floating UI*) seperti tooltip, menu konteks, dropdown, atau popover di atas elemen pemicu secara historis membutuhkan library JavaScript berat (seperti Popper.js atau Floating UI) yang menghitung koordinat `getBoundingClientRect()`, memicu reflow terus-menerus saat pengguna scroll di mobile.
* **STANDAR MODERN (Pure CSS Anchor Positioning):** Hubungkan elemen popover ke anchor secara deklaratif di CSS. Browser engine akan menghitung koordinat penempatan, deteksi tepi viewport, dan auto-flip secara native di thread kompositor:
  ```css
  /* 1. Deklarasikan anchor pada tombol trigger */
  .menu-trigger {
    anchor-name: --nav-anchor;
  }

  /* 2. Posisikan floating menu relatif terhadap anchor */
  .floating-menu {
    position: fixed;
    position-anchor: --nav-anchor;
    position-area: bottom span-right;
    position-try-fallbacks: flip-block, flip-inline;
    min-width: anchor-size(width);
    margin-top: 0.5rem;
  }
  ```
* **Progressive Enhancement Guard:**
  ```css
  @supports not (anchor-name: --test) {
    .floating-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.5rem;
    }
  }
  ```

### S. Modern CSS Math & Intrinsic Dynamic Sizing (`calc-size()`)
* **THE PROBLEM:** Fungsi kalkulasi bawaan CSS klasik `calc()` menolak kata kunci ukuran intrinsik (`auto`, `max-content`, `min-content`), memaksa developer mengandalkan JavaScript untuk menghitung dimensi turunan dari konten dinamis.
* **STANDAR MODERN:** Manfaatkan fungsi `calc-size()` yang memungkinkan operasi matematika pada ukuran intrinsik:
  ```css
  :root {
    interpolate-size: allow-keywords;
  }

  /* Tambahkan offset padding terukur di atas tinggi intrinsik auto */
  .adaptive-sheet {
    max-height: calc-size(auto, size + 2rem);
    transition: max-height 250ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  ```
  Ini mengizinkan animasi akordeon, panel detail, dan expandable cards transisi mulus dari `height: 0` ke `calc-size(auto, size)` tanpa satu baris pun kode JavaScript.

### T. Touch Target Geometry & Thumb-Zone Ergonomics (WCAG 2.2 AA & AAA)
* **Dual-Tier Touch Standards:**
  * **WCAG 2.2 SC 2.5.8 (Target Size Minimum - Level AA):** Ambang batas mutlak **24x24 CSS pixels**. Target yang lebih kecil dari 24px hanya lolos jika terdapat jarak pemisah (*spacing buffer*) di mana lingkaran berdiameter 24px tidak tumpang tindih dengan target interaktif di sekitarnya.
  * **WCAG 2.2 SC 2.5.5 (Target Size Enhanced - Level AAA & Mobile OS Benchmark):** Standar industri emas (Apple HIG & Material 3) mewajibkan area interaktif minimal **44x44px hingga 48x48px** untuk tombol navigasi primer, FAB, dan form submit.
* **Mobile Thumb-Zone Hierarchy:**
  * **Zona Alami Ibu Jari (Lower 40% Viewport):** Letakkan tombol aksi primer (CTA), bottom navigation sheet, dan kontrol swipe di area bawah layar tempat ibu jari bersandar secara alami tanpa regangan fisik (*thumb strain*).
  * **Zona Regang (Upper 60% Viewport):** Batasi untuk elemen tampilan pasif (judul artikel, metadata visual, breadcrumbs) atau tombol sekunder destruktif yang memang sengaja memerlukan intensi ekstra untuk ditekan.

### U. Zero-Hack Optical Vertical Centering: Text Box Trim (Chrome 133+ `text-box-trim` & `text-box-edge`)
* **THE PROBLEM:** Semua file font digital secara historis menyertakan ruang kosong bawaan (*font half-leading*) di atas tinggi huruf kapital (*cap-height*) dan di bawah garis dasar (*baseline*). Hal ini menyebabkan teks di dalam tombol, pill badge, tab label, dan baris berdampingan dengan ikon SVG tampak melorot atau tidak simetris secara optik, memaksa developer menggunakan hack rapuh seperti margin negatif (`-mt-0.5`), padding asimetris (`pt-2 pb-2.5`), atau pergeseran manual (`translate-y-[-1px]`).
* **STANDAR MODERN (Pure CSS Text Box Trim):**
  Pangkas spasi *half-leading* font secara matematis di level rendering browser engine:
  ```css
  /* Pangkas spasi bawaan font agar teks simetris sempurna di tengah tombol/badge */
  button, 
  .badge, 
  .chip, 
  .tab-item, 
  .metric-label {
    text-box-trim: both;
    text-box-edge: cap alphabetic;
  }
  
  /* Shorthand resmi modern */
  .button-text {
    text-box: trim-both cap alphabetic;
  }
  ```
  Ini menjamin teks dan ikon inline selalu sejajar sempurna di garis tengah optik tanpa hack padding atau kompensasi margin satu pixel pun.

### V. Native Accessible Dropdown Styling: `appearance: base-select` (Chrome 134+)
* **THE PROBLEM:** Pengembang web seringkali membuang elemen native `<select>` dan menulis puluhan baris JavaScript rapuh dengan tumpukan `<div>` mengambang hanya untuk menambahkan ikon, avatar, atau deskripsi mini pada opsi dropdown. Pola ini menghancurkan aksesibilitas pembaca layar (screen reader), menghilangkan dukungan navigasi tombol panah keyboard native, merusak autofill browser, dan memicu bug posisi mengambang di layar mobile.
* **STANDAR MODERN (Native Customizable Select):**
  Gunakan standar CSS native `appearance: base-select` untuk menata elemen `<select>` asli:
  ```css
  /* Aktifkan mode styling penuh untuk native select */
  select, 
  ::picker(select) {
    appearance: base-select;
  }

  select {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.85rem;
    border: 1px solid var(--border-neutral, #e2e8f0);
    border-radius: 6px;
    background-color: var(--bg-surface, #ffffff);
    font-size: 1rem;
    color: var(--text-primary, #0f172a);
    cursor: pointer;
  }

  /* Kustomisasi panel popup dropdown native */
  ::picker(select) {
    border: 1px solid var(--border-neutral, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 0.25rem;
    margin-top: 0.25rem;
  }

  /* Kustomisasi item option dengan tata letak flex/grid */
  option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.65rem;
    border-radius: 4px;
  }

  option:checked {
    background-color: var(--accent-subtle, #f1f5f9);
    font-weight: 500;
  }
  ```
  Ini memungkinkan opsi dropdown memuat elemen HTML kaya (ikon SVG, deskripsi teks dua baris, avatar gambar) sekaligus mempertahankan 100% ergonomi keyboard dan aksesibilitas native OS mobile.

### W. Native Light/Dark Mode Architecture: `light-dark()` Function & `color-scheme`
* **THE PROBLEM:**
  Developer secara historis menduplikasi aturan CSS di dalam `@media (prefers-color-scheme: dark)` atau mengandalkan class JavaScript `.dark` bertingkat (`.dark .card`, `.dark .card-title`) yang memicu pembengkakan CSS stylesheet, flash of incorrect theme (FOIT) saat render awal di mobile, dan layout recalculation berat.
* **STANDAR MODERN (Zero-Duplication Dual-Theme Architecture):**
  CSS Color Module Level 5 menghadirkan fungsi native `light-dark(light_value, dark_value)`. Deklarasikan dukungan tema pada root dan tentukan token warna dinamis secara deklaratif:
  ```css
  :root {
    color-scheme: light dark;
    --bg-canvas: light-dark(#f8fafc, #09090b);
    --bg-surface: light-dark(#ffffff, #121215);
    --border-neutral: light-dark(rgba(228, 228, 231, 0.8), rgba(39, 39, 42, 0.8));
    --text-primary: light-dark(#09090b, #fafafa);
    --text-secondary: light-dark(#71717a, #a1a1aa);
    --accent: light-dark(#2563eb, #3b82f6);
    --accent-hover: light-dark(
      color-mix(in srgb, var(--accent) 85%, black),
      color-mix(in srgb, var(--accent) 85%, white)
    );
  }

  body {
    background-color: var(--bg-canvas);
    color: var(--text-primary);
  }

  .card {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-neutral);
    box-shadow: light-dark(0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.4));
  }
  ```
* **Manual Override & Flash-Free LocalStorage Sync:**
  Untuk toggle manual pengguna tanpa merusak sistem `light-dark()`, atur atribut `data-theme` pada root dokumen:
  ```css
  :root[data-theme="light"] {
    color-scheme: light;
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
  }
  ```
  Suntikkan script sinkronisasi minimalis non-blocking di `<head>` untuk mencegah visual flash:
  ```html
  <script>
    const theme = localStorage.getItem('theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
  </script>
  ```

### X. Native Cross-Document View Transitions: `@view-transition { navigation: auto; }`
* **THE PROBLEM:**
  Transisi animasi antar-halaman (*page transitions*) secara historis menuntut Single Page Application (SPA) monolitik dengan client-side router yang membengkakkan bundle JavaScript hingga ratusan kilobyte dan memperlambat First Contentful Paint (FCP) di mobile.
* **STANDAR MODERN (App-Like Multi-Page Navigation):**
  Aktifkan transisi dokumen lintas-halaman native pada arsitektur MPA (Multi-Page Application) biasa (seperti Laravel, Django, Astro, static HTML) cukup dengan satu deklarasi CSS:
  ```css
  @view-transition {
    navigation: auto;
  }
  ```
* **Shared Element Morphing Tanpa JavaScript:**
  Tautkan elemen yang persisten antar-halaman (seperti avatar pengguna, cover buku, atau judul hero) menggunakan properti `view-transition-name`:
  ```css
  .book-cover {
    view-transition-name: active-book-cover;
  }

  .hero-title {
    view-transition-name: main-title;
  }
  ```
  Browser engine (Chromium 126+, Safari 18.2+) akan melakukan snapshot otomatis pada halaman asal dan tujuan, menganimasikan morphing elemen secara hardware-accelerated di compositor thread tanpa jeda putih dan tanpa runtime library eksternal.

### Y. 60fps Mobile Performance & Layout Thrashing Elimination: Larangan Blanket `transition: all`
* **THE PROBLEM:**
  Menulis `* { transition: all 0.3s ease; }` atau membubuhkan `transition-all` secara serampangan pada setiap container memaksa browser engine menghitung ulang properti geometris (`width`, `height`, `padding`, `margin`, `top`, `left`) pada setiap frame animasi, memicu layout thrashing parah saat orientasi layar berganti atau keyboard virtual muncul.
* **HUMAN STANDARD:**
  Batasi transisi HANYA pada properti yang dapat diproses langsung oleh GPU compositor (`transform`, `opacity`, `filter`) atau token warna diskrit:
  ```css
  .interactive-card {
    transition: 
      transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 150ms ease,
      background-color 150ms ease,
      border-color 150ms ease;
    will-change: transform;
  }

  .interactive-card:active {
    transform: scale(0.98);
  }
  ```
  Jangan pernah menganimasikan properti ukuran layout fisik (`width`, `height`, `padding`, `top`, `bottom`) kecuali menggunakan `field-sizing: content` atau `interpolate-size: allow-keywords` yang dioptimasi oleh engine native browser.

### Z. Responsive Tabular Data Architecture: Mobile Card Transformation & Priority Freezing
* **THE PROBLEM:**
  Tabel data finansial, log sistem, atau katalog inventaris dengan 6+ kolom seringkali rusak dan meluap (*overflow*) saat dibuka di layar smartphone 375px, memaksa pengguna melakukan cubit layar (*pinch-to-zoom*) atau pan horizontal tak terarah.
* **HUMAN STANDARD (Dua Pola Adaptasi Layar Kecil):**
  * **Metode 1: Transformasi Baris Menjadi Kartu Mandiri (Card Transformation):**
    Di layar mobile, ubah elemen tabel menjadi flex/block dengan label kolom yang dirender otomatis via pseudo-element:
    ```css
    @container (max-width: 640px) {
      table, thead, tbody, th, td, tr {
        display: block;
      }
      
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
      
      tr {
        margin-bottom: 0.75rem;
        border: 1px solid var(--border-neutral);
        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        background-color: var(--bg-surface);
      }
      
      td {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.35rem 0;
        border: none;
        border-bottom: 1px solid rgba(228, 228, 231, 0.4);
      }
      
      td:last-child {
        border-bottom: none;
      }
      
      td::before {
        content: attr(data-label);
        font-weight: 500;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-secondary);
      }
    }
    ```
  * **Metode 2: Locked Column Matrix (Sticky Primary Column):**
    Jika struktur baris harus dipertahankan, kunci kolom pengidentifikasi utama (seperti ID atau Nama Produk) di posisi sticky kiri, sementara kolom angka sisanya dapat digulir horizontal dengan indikator bayangan scroll-state:
    ```css
    .table-responsive-wrapper {
      container-type: scroll-state;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .table-sticky th:first-child,
    .table-sticky td:first-child {
      position: sticky;
      left: 0;
      background-color: var(--bg-surface);
      z-index: 2;
      box-shadow: 2px 0 4px rgba(0, 0, 0, 0.04);
    }
    ```

### AA. Native Zero-JS CSS Carousels & Paged Scrolling: `::scroll-button()` & `::scroll-marker` (Chrome 135+)
* **THE PROBLEM:**
  Developer secara historis mengimpor pustaka carousel pihak ketiga yang membengkakkan bundle JavaScript (Swiper.js, Slick, Embla) hingga 40-60KB hanya untuk merender baris kartu horizontal yang dapat digeser di mobile. Pustaka ini memicu layout thrashing, mengganggu touch gesture native browser, dan seringkali merusak navigasi keyboard serta aksesibilitas screen reader.
* **STANDAR MODERN (Pure CSS Carousels & Native Pagination):**
  CSS Overflow Module Level 3 (Chrome 135+) memperkenalkan pseudo-element bawaan browser yang mengelola tombol navigasi dan indikator halaman secara native di thread kompositor:
  ```css
  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1rem;
    scroll-marker-group: after;
    scrollbar-width: none;
  }

  .carousel > .carousel-slide {
    scroll-snap-align: center;
    flex: 0 0 calc(100% - 2rem);
  }

  .carousel > .carousel-slide::scroll-marker {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background-color: var(--border-neutral, #e2e8f0);
    display: block;
    cursor: pointer;
    transition: background-color 150ms ease, transform 150ms ease;
  }

  .carousel > .carousel-slide::scroll-marker:target-current {
    background-color: var(--text-primary, #09090b);
    transform: scale(1.25);
  }

  .carousel::scroll-button(inline-start) {
    content: '←';
    cursor: pointer;
  }

  .carousel::scroll-button(inline-end) {
    content: '→';
    cursor: pointer;
  }

  .carousel::scroll-button(*):disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
  ```
* **Keuntungan Arsitektural:**
  * **Zero JavaScript:** Pelacakan scroll, status aktif indikator halaman (`:target-current`), deaktivasi otomatis tombol panah di batas akhir scroll, dan trap focus keyboard dikelola 100% oleh engine native browser.
  * **Aksesibilitas Sempurna:** Browser secara otomatis membangun pohon aksesibilitas dengan ARIA roles yang valid tanpa perlu deklarasi manual.

### BB. Advanced Typed CSS `attr()` for Dynamic Data (Chrome 133+)
* **THE PROBLEM:**
  Menyuntikkan nilai dinamis dari data atribut HTML (seperti persentase progres, ukuran padding, atau warna status) sebelumnya memaksa developer menulis attribute inline style (`style="--progress: 75%;"`) atau men-generate ratusan utility classes, menghasilkan markup yang kotor dan layout recalculation berulang.
* **STANDAR MODERN (Type-Casting in CSS `attr()`):**
  CSS Values and Units Module Level 5 (Chrome 133+) memperluas fungsi `attr()` dengan kemampuan type-casting ke semua tipe nilai CSS (`<length>`, `<percentage>`, `<color>`, `<number>`):
  ```css
  .progress-bar-fill {
    width: attr(data-progress type(<percentage>), 0%);
    background-color: attr(data-status-color type(<color>), #2563eb);
    transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .metric-badge {
    font-size: attr(data-font-size type(<length>), 0.875rem);
    opacity: attr(data-confidence type(<number>), 1);
  }
  ```
  Ini mengizinkan elemen HTML langsung meneruskan nilai semantik melalui data atribut tanpa perantara inline CSS variables atau script JavaScript tambahan.

### CC. Zero-JS Compositor Scroll-Driven Animations: `animation-timeline: scroll()` & `view()`
* **THE PROBLEM:**
  Mengimplementasikan indikator progres baca (*reading scroll progress*), animasi kemunculan card (*scroll reveal*), atau efek parallax secara historis memaksa developer menulis JavaScript scroll event listener (`window.addEventListener('scroll')`) atau mengimpor library eksternal berat (Framer Motion, AOS, ScrollMagic, GSAP) berukuran 30-80KB. Di perangkat mobile, script ini berjalan di main thread dan memicu layout recalculation pada setiap tick scroll, menyebabkan frame rate drop parah (jank), boros baterai, dan merusak skor Core Web Vitals **Interaction to Next Paint (INP)**.
* **STANDAR MODERN (Pure CSS Scroll Timelines):**
  CSS Scroll-Driven Animations Module Level 1 memindahkan kalkulasi animasi scroll langsung ke thread GPU kompositor, menjamin eksekusi 60fps/120fps yang mulus tanpa satu baris pun kode JavaScript di main thread:
  ```css
  /* 1. Global Reading Progress Bar (Terkait Dokumen Scroll) */
  .reading-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--color-brand-primary, #2563eb);
    transform-origin: 0 50%;
    animation: scale-progress linear;
    animation-timeline: scroll();
    z-index: 50;
  }

  @keyframes scale-progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  /* 2. View Progress Timeline (Card Reveal saat Masuk Viewport Mobile) */
  .scroll-reveal-card {
    animation: card-reveal linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }

  @keyframes card-reveal {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```
* **Disiplin Optimasi & Aksesibilitas:**
  * **Hanya Animasikan Properti GPU:** Batasi keyframes secara ketat pada `transform` dan `opacity`. Jangan pernah menganimasikan `width`, `height`, atau `margin` pada scroll timeline.
  * **Wajib Override Aksesibilitas:**
    ```css
    @media (prefers-reduced-motion: reduce) {
      .reading-progress-bar,
      .scroll-reveal-card {
        animation: none !important;
      }
    }
    ```
  * **Progressive Enhancement:** Bungkus fitur dalam `@supports (animation-timeline: scroll())` agar peramban non-pendukung tetap menampilkan elemen secara statis tanpa patah tampilan.

### DD. Responsive Native Media Architecture: AVIF/WebP Picture Elements & Fetch Priority
* **THE PROBLEM:**
  Menyajikan satu file gambar desktop resolusi tinggi (PNG/JPEG 2MB+) ke layar smartphone sempit membuang kuota data seluler pengguna, menghabiskan memori RAM GPU mobile, dan menjadi penyebab utama kegagalan metrik Core Web Vitals Largest Contentful Paint (LCP) di jaringan 4G/5G.
* **STANDAR MODERN (Adaptive Next-Gen Responsive Media):**
  Manfaatkan elemen native `<picture>` dengan format generasi terbaru (`image/avif`, `image/webp`) dan deklarasi `srcset` multi-resolusi berbasis lebar kontainer:
  ```html
  <!-- Hero LCP Image: Prioritas Tinggi Tanpa Lazy-Load -->
  <picture>
    <source type="image/avif" srcset="/images/hero-400.avif 400w, /images/hero-800.avif 800w, /images/hero-1200.avif 1200w" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px">
    <source type="image/webp" srcset="/images/hero-400.webp 400w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px">
    <img src="/images/hero-800.jpg" alt="Antarmuka Sistem" width="1200" height="675" fetchpriority="high" decoding="async" class="w-full h-auto object-cover rounded-md">
  </picture>

  <!-- Below-The-Fold Media: Lazy Load & Asynchronous Decoding -->
  <picture>
    <source type="image/avif" srcset="/images/feature-400.avif 400w, /images/feature-800.avif 800w" sizes="(max-width: 640px) 100vw, 400px">
    <img src="/images/feature-400.jpg" alt="Diagram Fitur" width="800" height="450" loading="lazy" decoding="async" class="w-full h-auto object-cover rounded-md">
  </picture>
  ```
* **Kaidah Kritis LCP:**
  * Elemen visual paling penting di atas lipatan layar (*above-the-fold hero*) WAJIB menggunakan `fetchpriority="high"` dan DILARANG KERAS menggunakan `loading="lazy"`.
  * Seluruh gambar di bawah lipatan (*below-the-fold*) WAJIB mendeklarasikan `loading="lazy"` dan `decoding="async"`.
  * Selalu cantumkan atribut dimensi eksplisit `width` dan `height` (atau rasio aspek CSS `aspect-ratio: 16 / 9`) untuk memesan ruang layout browser dan melenyapkan Cumulative Layout Shift (CLS).

### EE. Wide Color Gamut & Modern CSS Color Spaces: Display P3 & `oklch()`
* **THE PROBLEM:**
  Model warna web tradisional (sRGB hex `#2563eb`, `rgb()`, `hsl()`) terkurung dalam gamut warna sempit era monitor CRT 1990-an, memotong hingga ~25-30% spektrum warna kaya yang mampu ditampilkan oleh layar OLED dan Liquid Retina pada smartphone modern (iPhone, Samsung Galaxy, Pixel). Selain itu, ruang warna HSL tidak seragam secara persepsi optik (*perceptual non-uniformity*): dua warna dengan nilai lightness yang sama (misal kuning dan biru pada lightness 50%) tampak sangat berbeda kecerahannya di mata manusia.
* **STANDAR MODERN (Perceptually Uniform Display P3):**
  Gunakan ruang warna `oklch(L C H)` untuk penataan palet desain yang konsisten secara persepsi manusia dan manfaatkan media query `@media (color-gamut: p3)` untuk aksen warna berdaya hidup tinggi:
  ```css
  :root {
    /* Baseline sRGB fallback */
    --color-accent: #2563eb;
    --color-accent-subtle: #eff6ff;
    
    /* Modern oklch: Lightness, Chroma, Hue (Perceptually uniform) */
    --color-accent-oklch: oklch(58% 0.22 255);
    --color-accent-hover: oklch(from var(--color-accent-oklch) calc(l - 0.08) c h);
  }

  /* Wide Color Gamut Enhancement untuk Layar Mobile Modern */
  @media (color-gamut: p3) {
    :root {
      /* Display P3 color space menghadirkan warna yang lebih hidup tanpa neon murahan */
      --color-accent: color(display-p3 0.15 0.42 0.98);
      --color-success: color(display-p3 0.12 0.72 0.45);
    }
  }

  .accent-button {
    background-color: var(--color-accent);
    color: #ffffff;
  }
  ```
* **Keuntungan:** Gradasi warna, turunan status hover (`calc(l - 0.08)`), dan variasi tema gelap/terang mempertahankan kontras keterbacaan yang stabil di seluruh spektrum warna.

### FF. Automated Accessible Contrast Computation: CSS `contrast-color()`
* **THE PROBLEM:**
  Ketika latar belakang tombol, badge, atau kartu dikonfigurasi secara dinamis oleh pengguna atau berubah mengikuti variabel palet sistem, teks di atasnya seringkali mengalami kegagalan kontras fatal (misalnya teks abu-abu di atas latar biru dongker atau teks putih di atas kuning cerah), melanggar kriteria WCAG 2.2 AA (4.5:1) dan AAA (7:1).
* **STANDAR MODERN (Native Dynamic Contrast Calculation):**
  CSS Color Module Level 5 memperkenalkan fungsi native `contrast-color()`. Browser secara otomatis mengevaluasi nilai luminansi latar belakang dan memilih warna teks (hitam atau putih, atau dari daftar kandidat yang ditentukan) yang menghasilkan kontras tertinggi:
  ```css
  .dynamic-badge {
    background-color: var(--badge-bg);
    color: contrast-color(var(--badge-bg));
  }

  .custom-theme-button {
    background-color: var(--user-brand-color, #f59e0b);
    color: contrast-color(var(--user-brand-color, #f59e0b));
  }
  ```
  Ini mengeliminasi script JavaScript kalkulasi luminansi RGB/HSL dan menjamin keterbacaan teks 100% aman dari contrast collapse pada semua kombinasi warna dinamis.

### GG. Native Sequential Focus & Screen-Reader Synchronization: CSS `reading-flow` & `reading-order` (Chrome 137+)
* **THE PROBLEM:**
  Pada tata letak CSS Flexbox dan CSS Grid modern, sangat umum mengatur urutan tampilan visual menggunakan properti `order`, `grid-template-areas`, atau `flex-direction: row-reverse`. Namun, urutan fokus keyboard (tombol `Tab`) dan urutan pembacaan teknologi asistif (screen reader) secara tradisional terpaku mati pada urutan kode sumber DOM (*source order*). Mismatch antara urutan visual dan urutan DOM ini memicu pengalaman navigasi yang melompat-lompat secara membingungkan (*jumpy focus trap*).
* **STANDAR MODERN (Visual & DOM Flow Synchronization):**
  Deklarasikan properti `reading-flow` pada kontainer layout:
  ```css
  .interactive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    reading-flow: grid-order;
  }

  .adaptive-flex-row {
    display: flex;
    flex-direction: row-reverse;
    reading-flow: flex-visual;
  }
  ```
  Nilai `reading-flow: grid-order` dan `flex-visual` secara otomatis menyelaraskan urutan navigasi fokus keyboard dan pembacaan screen reader agar identik persis dengan urutan visual di layar tanpa perlu merestrukturisasi pohon DOM.

### HH. Native Responsive Geometric Clipping: The CSS `shape()` Function
* **THE PROBLEM:**
  Membuat potongan bentuk geometris asimetris yang responsif pada gambar, banner hero, atau card layout sebelumnya memaksa desainer mengandalkan string koordinat SVG path kaku atau fungsi `polygon()` yang tidak mendukung unit dinamis campuran (`rem`, `%`, `calc()`).
* **STANDAR MODERN (Pure CSS Unit-Aware Geometry):**
  Fungsi CSS `shape()` mengizinkan pendefinisian kurva dan segmen garis menggunakan sintaks berbasis unit CSS standar di dalam `clip-path`:
  ```css
  .hero-banner-mask {
    clip-path: shape(from 0 0, h-line by 100%, v-line by calc(100% - 3rem), smooth curve to 0 100% with calc(50% - 2rem) 100%, close);
  }
  ```
  Bentuk geometris ini beradaptasi secara mulus dan proporsional terhadap ukuran kontainer responsive tanpa memerlukan file SVG eksternal atau JavaScript kalkulasi koordinat.

### II. Native Interactive State Pseudo-Class: `:open` for `<dialog>` and `<details>`
* **THE PROBLEM:**
  Menata gaya modal dialog, popover, dan panel accordion `<details>` saat berada dalam status terbuka sebelumnya memaksa developer memeriksa atribut spesifik seperti `details[open]` atau menambahkan class JavaScript manual (`.is-open`), menciptakan inkonsistensi styling antar-elemen interaktif.
* **STANDAR MODERN (Universal `:open` Selector):**
  CSS Selectors Level 4 memperkenalkan pseudo-class `:open` yang berlaku universal untuk semua elemen interaktif berkondisi terbuka:
  ```css
  details:open {
    border-color: var(--border-active);
  }

  details:open summary {
    font-weight: 600;
  }

  dialog:open {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
  ```
  Ini menyeragamkan penulisan aturan CSS status interaktif native tanpa ketergantungan pada class toggle JavaScript manual.

### JJ. Declarative Keyboard Navigation: Native `focusgroup` (Chrome 150+ / Web Platform Standard)
Melenyapkan kebutuhan JavaScript event listener manual (`keydown`, `keyup`, `ArrowRight`, `ArrowLeft`) untuk navigasi keyboard pada toolbars, tabs, menus, dan pagination:
* **Mekanisme Native:** Atribut `focusgroup` memberitahu browser untuk menangani navigasi tombol panah secara otomatis, melompat antar-elemen interaktif anak secara melingkar (*wrap*) atau linier:
  ```html
  <div focusgroup="horizontal wrap" role="toolbar" aria-label="Editor formatting">
    <button type="button" aria-pressed="false">Bold</button>
    <button type="button" aria-pressed="false">Italic</button>
    <button type="button" aria-pressed="false">Underline</button>
  </div>
  ```
* **Keuntungan Aksesibilitas & Performa:** Navigasi keyboard berjalan instan pada thread compositor tanpa memblokir main thread, mematuhi pola WAI-ARIA Toolbar/Tablist tanpa overhead script pihak ketiga.

### KK. Zero-JS Responsive Text Fitting: The CSS `text-fit` Property (Chrome 152+)
Melenyapkan pustaka JavaScript usang seperti `fitty.js` atau `FitText` yang memicu layout thrashing untuk mencocokkan ukuran teks dengan lebar container:
* **Mekanisme Native:** Properti CSS `text-fit` secara otomatis menghitung `font-size` optimal sehingga teks mengisi satu baris atau area multi-baris secara pas tanpa overflow:
  ```css
  .hero-headline {
    text-fit: single-line;
    max-font-size: 5rem;
    min-font-size: 1.5rem;
  }

  .bento-card-title {
    text-fit: multi-line;
    line-clamp: 2;
  }
  ```
* **Keuntungan:** Penyesuaian ukuran font terjadi langsung di tahap layout browser, menghilangkan FOUC (*Flash of Unstyled Content*) dan pergeseran tata letak (CLS).

### LL. Element-Scoped Nested View Transitions (Chrome 147+ / View Transitions Level 2)
Memungkinkan animasi transisi DOM lokal yang mulus dan independen pada elemen-elemen spesifik (seperti tab switcher, filter list, atau expandable card) tanpa mengunci seluruh halaman (*global transition locking*):
* **Sintaks Elemen Mandiri:**
  ```css
  .tab-panel {
    view-transition-name: match-element;
    view-transition-scope: nearest;
  }
  ```
  ```javascript
  cardElement.startViewTransition({
    update: () => updateCardContent(cardElement),
    types: ['card-expand']
  });
  ```
* **Keuntungan Mobile:** Pengguna mobile dapat berinteraksi dengan widget lain di layar saat animasi lokal sedang berjalan tanpa lag atau stutter.

### MM. Native CSS Custom Functions & Reusable Computational Formulas (`@function` Rule)
Mengenkapsulasi formula matematika CSS yang kompleks (seperti kurva fluid typography, modular scale, atau padding berbasis Golden Ratio) langsung di dalam CSS tanpa preprocessing (Sass/Less):
```css
@function --fluid-font(--min, --max, --min-w: 375px, --max-w: 1280px) {
  result: clamp(
    var(--min),
    calc(var(--min) + (val(var(--max)) - val(var(--min))) * ((100vw - var(--min-w)) / (val(var(--max-w)) - val(var(--min-w))))),
    var(--max)
  );
}

h1 {
  font-size: --fluid-font(1.5rem, 3.5rem);
}
```
* **Keuntungan:** Kode CSS menjadi sangat modular, DRY (*Don't Repeat Yourself*), dan dapat diaudit secara mandiri tanpa build-step tambahan.

### NN. Declarative Non-Rectangular Contours: The CSS `border-shape` Property (Chrome 147+)
Membuat garis batas geometris non-persegi (polygon, chamfer, notch, pill, hexagonal) secara native tanpa bergantung pada SVG masking atau pseudoelemen hack:
```css
.tactical-hud-panel {
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-shape: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));
}
```
* **Keuntungan:** Anti-aliasing GPU perangkat keras yang tajam, responsif terhadap perubahan ukuran container, dan tetap menghormati border-box layout normal.

### OO. Declarative Hover & Interest Triggers: `interesttarget` & `interestaction` (Chrome 138+)
Menghubungkan tombol pemicu dengan popover, tooltip, atau card preview secara deklaratif pada HTML murni tanpa event listener JavaScript `mouseenter` / `mouseleave` / `focus`:
```html
<button type="button" interesttarget="user-card-preview" interestaction="show">
  @johndoe
</button>

<div id="user-card-preview" popover="interest" class="popover-surface">
  <p class="font-semibold text-stone-900">John Doe</p>
  <p class="text-xs text-stone-500">Core Systems Architect</p>
</div>
```
* **Keuntungan:** Menghilangkan bug hilangnya tooltip saat kursor bergerak cepat (*race condition*), otomatis terintegrasi dengan aksesibilitas keyboard dan pembaca layar.

---

## 9. Zero-Comment Markup: Absolute Ban on `<!-- ... -->` and `/* ... */`

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

## 10. TUI (Terminal User Interface) Standards

* **BANNED:** Starting icons, compiling spinners, double box-drawings, harsh 16-color ANSI neon that burns retinas.
* **HUMAN STANDARD:**
  * Clean text badges: `[OK]`, `[FAIL]`, `[DIFF]`, `[WARN]`.
  * Muted 256-color / truecolor palettes.
  * Clear hotkey hints in footer: `[q] Keluar  [r] Muat Ulang  [Enter] Pilih`.

---

## 11. Desktop GUI Standards (Tkinter, PyQt, PySide, Electron)

A major tell of AI-generated desktop GUIs is treating desktop native frames like a copy-pasted web marketing landing page.

### A. Anti-Theme Schizophrenia (Design Coherence)
* **BANNED:** Chopping a pitch-black header (`#0f172a`) onto an otherwise light application window (`#f8fafc`).
* **HUMAN STANDARD:** Maintain complete tonal coherence. Commit to a cohesive Full Light Mode or a coherent Full Dark Mode across the entire window frame, header, navigation, content panels, and control buttons.

### B. Centralized Theme Token Dictionary (Zero Floating Hex Strings)
* **BANNED:** Inlining random hex codes across dozens of widget instantiation lines.
* **HUMAN STANDARD:** Define a centralized theme token dictionary or style object at the top of the GUI module:
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

### C. Data Typography & Table Alignment
* **BANNED:** Centering numerical values in tables, Treeviews, or grids (`anchor="center"` on numbers).
* **HUMAN STANDARD:**
  * **NUMBERS MUST BE RIGHT-ALIGNED (`anchor="e"` / `text-align: right` / tabular nums)**: All integers, floating-point decimals, currency values, and quantities must be right-aligned so decimal points and digit magnitudes align vertically for rapid visual scanning.
  * **TEXT / LABELS**: Left-aligned (`anchor="w"` / `text-align: left`).
  * **STATUS BADGES / CODES / SHORT ICONS**: Centered (`anchor="center"`).

### D. Metrics, Units & Contextual Thresholds
* **BANNED:** Presenting raw naked integers without units or reference scales (e.g. showing "45" without specifying if it is PM2.5 in ug/m3 or an AQI index).
* **HUMAN STANDARD:** Always label metrics with explicit SI/domain units (`ug/m3`, `ppm`, `ms`, `MB`). Provide qualitative status indicators with standardized accessible tints alongside raw numbers.

---

## 12. Copywriting & Microcopy Slop Elimination

* **BANNED (AI Copywriting Slop):**
  * Fluffy AI buzzwords: *Revolutionize, Unleash, Supercharge, Seamless, Next-Gen, Frictionless, Paradigm, Magic, Effortless, All-In-One*.
  * Formulaic hero subtitle structure: *"The all-in-one platform to [verb] your [noun] without [pain point]."*
* **HUMAN STANDARD:** Grounded, domain-specific language stating exact utility and technical truth with clean, natural punctuation.

---

## 13. Pre-Design Theme Discovery Protocol ("Tugas Ini Cocoknya Tema Apa?")

Before writing ANY HTML, CSS, or component code, the agent MUST run this thematic classification to ensure the design matches the domain rather than falling back on rigid, repetitive defaults:

```
[Mulai Desain UI]
       │
       ▼
┌──────────────────────────────────────────────┐
│ Evaluasi Domain & Tone:                      │
│ "Tugas ini cocoknya tema & estetika apa?"    │
└──────────────────────────────────────────────┘
       │
       ├─► 1. Editorial, Publishing, Heritage, Luxury
       ├─► 2. Modern Cloud SaaS, Infrastructure, APIs
       ├─► 3. DevTools, Financial Ledgers, Data Systems
       ├─► 4. Consumer, Community, Lifestyle, Mobile App
       ├─► 5. Creative Studio, Avant-Garde, Digital Agency
       ├─► 6. Neobrutalism, Anti-Design, Indie Hacker
       ├─► 7. Scientific, Research & Medical Data Systems
       ├─► 8. Scandinavian, Barely-There UI & Warm Minimalism
       ├─► 9. Industrial, Hardware & Cyber-Physical
       ├─► 10. Civic Tech, GovTech & Universal Public Services
       ├─► 11. Spatial & Tactile Neu-Physical (The Tactile Instrument)
       ├─► 12. Clinical & Diagnostic Healthcare Systems
       ├─► 13. High-Frequency Trading, Crypto & Liquidity Terminals
       ├─► 14. Luxury Hospitality, Architecture & Haute Horlogerie
       ├─► 15. EdTech, Gamified Learning & Interactive Play
       ├─► 16. Tactical HUD, Geospatial & Mission Control (C2 Systems)
       ├─► 17. Autonomous AI Workbench & Agent Orchestration Canvas
       ├─► 18. Climate Tech, Renewable Energy & Grid Telemetry
       ├─► 19. Spatial Computing, VisionOS Glass & Depth Tactility (Physical Glass)
       ├─► 20. B2B Logistics, Fleet Dispatch & Warehouse Yard Management
       ├─► 21. Defense, Avionics & Critical Mission Systems (DO-178C)
       ├─► 22. AgriTech, Forestry & Soil Telemetry
       ├─► 23. LegalTech, Compliance & Regulatory Audit Chambers
       ├─► 24. Audio Production, DSP & Virtual Studio Instruments (DAW / VST)
       ├─► 25. Automotive In-Vehicle Infotainment (IVI) & Telematics
       ├─► 26. Cybersecurity Operations Center (SOC) & Threat Intelligence
       ├─► 27. Biotech, Genomic Sequencing & Wet Lab LIMS
       ├─► 28. Solarpunk, Circular Economy & Ecological Restoration
       ├─► 29. Robotics, Autonomous Fleet & Drone Teleoperation
       ├─► 30. Fintech Wealth Management, Family Office & Private Banking
       ├─► 31. SpaceTech, Orbital Mechanics & Satellite Constellation Operations
       ├─► 32. Urban Planning, Smart Cities & Transportation SCADA
       ├─► 33. Maritime Navigation, Port Logistics & Oceanic Telemetry
       ├─► 34. Neurodivergent-First, Cognitive Accessibility & Sensory Calm UI
       ├─► 35. Mining, Heavy Machinery & Industrial Geophysics
       ├─► 36. Philanthropy, NGO Foundations & Global Humanitarian Relief
       ├─► 37. Quantum Computing, Supercomputing & Quantum Optics Chambers
       ├─► 38. Sports Science, Athletic Biomechanics & High-Performance Kinesiology
       ├─► 39. Culinary Arts, Gastronomy & High-End Winery Cellars
       ├─► 40. Geological Hazard, Volcanology & Seismic Early Warning Systems
       ├─► 41. Nuclear Engineering, Particle Physics & Fusion SCADA
       ├─► 42. Film Production, Cinematography & Color Grading Suites
       ├─► 43. Embedded IoT, Microcontroller & Hardware Flashing Portals
       ├─► 44. Emergency Dispatch, 911 & Incident Command Systems (CAD / FirstNet)
       ├─► 45. Scientific Observatories, Radio Astronomy & Deep-Sky Astrophysics
       ├─► 46. Civic Archival, Rare Manuscripts & Digital Humanities Paleography
       ├─► 47. Forensic Accounting, Fraud Investigation & AML Anti-Corruption Audit
       ├─► 48. Clinical Pharmacokinetics & Pharmaceutical Discovery Assays
       ├─► 49. Battery Energy Storage Systems (BESS) & Virtual Power Plants (VPP)
       ├─► 50. Micro-Mobility, EV Fleet Dispatch & Charging Infrastructure (OCPP SCADA)
       ├─► 51. Semiconductor Fabrication & Cleanroom Lithography Telemetry (SECS/GEM)
       ├─► 52. Autonomous Oceanic Submersibles & Deep-Sea ROV Telemetry
       ├─► 53. Precision Aquaculture & Marine Ecosystem Bio-Telemetry
       ├─► 54. Disaster Relief Drone Swarm & Tactical Search and Rescue (SAR)
       ├─► 55. Geospatial Satellite SAR & Planetary Earth Observation (InSAR / Multispectral LEO)
       ├─► 56. High-Performance Computing (HPC), AI Cluster & GPU Fabric SCADA (Slurm / InfiniBand)
       ├─► 57. Synthetic Biology, Precision Fermentation & Bioreactor Telemetry (Biofoundry / Chemostat)
       ├─► 58. Carbon Capture, Geothermal & Deep Borehole SCADA (Direct Air Capture / EGS)
       ├─► 59. Neuromorphic Computing & Brain-Computer Interface (BCI / Neural Telemetry)
       └─► 60. Circular Economy, Digital Product Passports & Supply-Chain Traceability (DPP / Provenance)
```

---

## 14. Curated Trending Hot Fonts Matrix (Google Fonts & Fontshare)

Verified combinations for high-impact typography:

1. **Modern Editorial & Quiet Luxury:**
   * The Editorial Powerhouse: `Instrument Serif` (Google Fonts - delicate razor-sharp curves) + `Bricolage Grotesque` (Google Fonts - industrial ink-trapped grotesque body/subhead)
   * The Modern Thought-Leadership Journal: `Bricolage Grotesque Bold` (Google Fonts) + `Newsreader` (Google Fonts - punchy startup character grounded by literary long-form screen reading)
   * Boutique Editorial Minimal: `Instrument Serif` (Google Fonts - refined, editorial high contrast) + `Satoshi` (Fontshare - geometric legibility)
   * Quiet Luxury Editorial: `Instrument Serif` (Google Fonts) + `Inter Tight` (Google Fonts - sleek high-fashion precision)
   * Chic Neo-Editorial: `Instrument Serif` (Google Fonts) + `Instrument Sans` (Google Fonts) or `Newsreader` (Google Fonts)
   * Monofamily Publishing: `Sentient Bold` + `Sentient Regular` (Fontshare - pure literary authority and balanced reading cadence)
   * Warm Organic Editorial: `Sentient` (Fontshare) + `Satoshi` or `General Sans` (Fontshare - organic warmth grounded by clean geometric sans)
   * Heavyweight Literary Contrast: `Tanker` (Fontshare - bold heavyweight display) + `Bespoke Serif` (Fontshare - refined literary reading)
   * Razor-Sharp Swiss Editorial: `Switzer` (Fontshare - contemporary Swiss neo-grotesk) + `Newsreader` (Google Fonts - long-form literary screen serif)
   * Objective Swiss Meets High-Fashion: `Switzer` (Fontshare) + `Boska` (Fontshare - sharp precision juxtaposed with boutique drama)
   * Sharp Architectural Editorial: `Cabinet Grotesk` (Fontshare) + `Erode Regular` (Fontshare - ink-trapped chunky sans with transitional serif body)
   * Contemporary Sharp Editorial: `Satoshi Bold/Medium` (Fontshare - geometric sans) + `Erode Regular` (Fontshare - sharp digital transitional serif)
   * Superfamily DNA: `DM Serif Display` + `DM Sans` (Google Fonts - effortless warmth & structural balance)
   * Contemporary Structural Poise: `General Sans Semibold` (Fontshare) + `Gambetta Regular` (Fontshare - transitional serif elegance)
   * High-Fashion Boutique: `Boska` (Fontshare - sharp contrast serif) + `Satoshi` (Fontshare - geometric legibility)
   * Timeless Long-Form: `Zodiak` (Fontshare - balanced digital serif) + `General Sans` (Fontshare - clean neutral reading)
   * Soft Luxury Curatorial: `Zodiak` (Fontshare) + `Switzer` (Fontshare - literary warmth paired with contemporary Swiss clarity)
   * Timeless High-Contrast Luxury: `Zodiak` (Fontshare) + `Inter Tight` (Google Fonts - sleek high-fashion quiet luxury)
   * Transitional Editorial Poise: `Gambetta` (Fontshare) + `Inter Tight` (Google Fonts - sharp editorial elegance with contemporary neutral balance)
   * Digital Publication & Boutique Portfolio: `Author` (Fontshare) + `Outfit` or `Inter` (Google Fonts - refined literary publishing & upscale digital storefront)
   * High-Contrast Curatorial Monograph: `Rosaline Regular` (Fontshare) + `Satoshi Regular` (Fontshare - luxury fashion & curatorial portfolio)
   * Scandinavian Journalistic Humanity: `Cormorant Garamond` (Google Fonts) + `Schibsted Grotesk` (Google Fonts - refined humanist display with digital-first news clarity)
   * Pure Superfamily Indie Editorial: `Instrument Serif` (Google Fonts) + `Instrument Sans` (Google Fonts - razor-sharp display paired with Swiss-engineered body)
   * High-End Dramatic Fashion: `Gambetta` (Fontshare) + `Questrial` (Google Fonts - dramatic high-contrast editorial serif meets airy geometric sans)
   * Sturdy Editorial Architecture: `Zodiak` (Fontshare) + `Bespoke Serif` (Fontshare - strong editorial serif posture with refined literary reading cadence)
   * Humanist Luxury Editorial: `Cormorant Garamond` (Google Fonts) + `Proza Libre` (Google Fonts - classic humanist display with contemporary open humanist sans)
2. **Modern Enterprise SaaS & Cloud Platforms:**
   * Civic Transparency & Authoritative Data: `Schibsted Grotesk` (Google Fonts) + `Public Sans` (Google Fonts - digital journalism, civic transparency, and enterprise data)
   * Nordic Minimalist Fintech: `Albert Sans` (Google Fonts) + `DM Sans` (Google Fonts - airy Scandinavian geometry with soft reading body)
   * High-Density UI Analytics: `Onest` (Google Fonts) + `Inter` (Google Fonts - screen-optimized grotesque for complex data tables and metrics)
   * Structural Slab Authority: `Trench Slab Medium` (Fontshare) + `General Sans Regular` (Fontshare - architectural slab header with neutral workhorse clarity)
   * High-Velocity Monofamily SaaS: `Supreme Semibold` + `Supreme Regular` (Fontshare - geometric-humanist monofamily for high-volume SaaS)
   * Modern Editorial-Tech Standard: `Instrument Serif` (Google Fonts) + `Plus Jakarta Sans` (Google Fonts - premium literary authority on headings, friendly open-aperture UI body)
   * Warm Editorial Tech: `Instrument Serif` (Google Fonts) + `Figtree` (Google Fonts - intellectual display headline paired with approachable open-aperture body)
   * Modern Tech Sans-to-Sans: `Manrope` (Google Fonts - punchy semi-geometric display) + `Outfit` (Google Fonts - friendly open geometric body)
   * Contemporary Swiss Tech Standard: `Switzer` (Fontshare) + `Satoshi` (Fontshare - modern high-precision branding powerhouse)
   * Compact Neo-Grotesque Tech: `Clash Grotesk` (Fontshare) + `Plus Jakarta Sans` or `General Sans` (Google Fonts / Fontshare - compact punchy neo-grotesque tech startup)
   * Superfamily Clash Hierarchy: `Clash Display` (Fontshare) + `Clash Grotesk` (Fontshare - UI/Subhead) + `General Sans` (Fontshare)
   * Product-Led Growth SaaS: `Alpino Bold` (Fontshare) + `Nunito` or `Inter` (Google Fonts - friendly product-led growth & accessible SaaS)
   * Ultra-Clean SaaS Standard: `Satoshi` (Fontshare) + `Plus Jakarta Sans` (Google Fonts - crisp geometric standard)
   * Friendly Modern Tech Standard: `Figtree Bold` (Google Fonts) + `Inter` or `Source Sans 3` (Google Fonts)
   * Modern Enterprise Standard: `Plus Jakarta Sans` (Google Fonts) + `DM Sans` (Google Fonts) + `JetBrains Mono` (Data)
   * Architectural Neo-Grotesque: `Cabinet Grotesk Extrabold` (Fontshare - ink-trapped chunky display) + `Satoshi Medium` (Fontshare - geometric balance)
   * Swiss-Engineered SaaS: `General Sans` (Fontshare) + `Instrument Sans` (Google Fonts - clean contemporary engineering)
   * Dynamic High-Character Startup: `Bricolage Grotesque` (Google Fonts) + `Plus Jakarta Sans` or `DM Sans` (Google Fonts)
   * Clean Digital Product: `Satoshi` (Fontshare) + `Inter` (Google Fonts)
   * Low-Friction Admin & Fintech: `Manrope` (Google Fonts) + `Inter` (Google Fonts)
   * Grooved Semi-Casual Tech: `Pally` (Fontshare) + `General Sans` (Fontshare)
   * Razor-Sharp Corporate: `General Sans` (Semibold Heading) + `General Sans` (Regular Body)
   * High-Impact Startup Powerhouse: `Clash Display` (Fontshare) + `Satoshi` or `Inter` (Fontshare / Google Fonts)
3. **DevTools, Financial Ledgers & Technical Infrastructure:**
   * Objective Swiss DevTools: `Switzer Semibold` (Fontshare) + `Instrument Sans` (Google Fonts) + `IBM Plex Mono` (Data)
   * Industrial Tech-Forward: `Space Grotesk` (Google Fonts) + `Inter` (Google Fonts - technical clarity with neutral reading body)
   * Industrial Variable Superfamily: `Mona Sans` (Heading) + `Hubot Sans` (Body) (GitHub Open Source)
   * Retro-Futuristic Tech Startup: `Chillax` (Fontshare - quirky angled display) + `Satoshi` or `Switzer` (Fontshare - disciplined neutral reading body)
   * Retro-Futuristic Dev Journal: `Chillax` (Fontshare) + `Sentient` (Fontshare - retro-futurism meets literary depth)
   * Squared Industrial Tech: `Excon Bold` (Fontshare) + `Ranade Regular` (Fontshare - punchy squared display with friendly flowing humanist body)
   * Cyber-Forward Web3 & CLI: `Space Grotesk` (Google Fonts) + `Space Mono` (Google Fonts)
   * Tech-Forward Programmatic: `Space Grotesk` (Google Fonts) + `General Sans` (Fontshare - code-like clarity with neutral reading body)
   * Monochromatic Developer Ecosystem: `Geist Bold/Semibold` (Heading) + `Geist Regular` (Body) with tight tracking (`-0.02em`)
4. **Consumer, Community & Lifestyle:**
   * Friendly Approachable Monofamily: `Figtree Bold` (Google Fonts) + `Figtree Regular` (Google Fonts - ergonomic open apertures, zero visual clutter)
   * Low-Contrast Friendly Monofamily: `DM Sans Medium/Bold` (Google Fonts) + `DM Sans Regular` (Google Fonts)
   * Global Conversion Standard: `Plus Jakarta Sans` (Google Fonts) + `Inter` (Google Fonts)
   * Soft Consumer Aesthetic: `Outfit` (Google Fonts) + `Satoshi` (Fontshare)
   * Approachable Scandinavian Consumer SaaS: `Albert Sans` (Google Fonts) + `Nunito Sans` (Google Fonts)
   * Modern Screen-Optimized Content Hub: `Onest` (Google Fonts) + `Lora` (Google Fonts)
   * Tactile Humanist Consumer: `Onest` (Google Fonts) + `Zilla Slab` (Google Fonts)
5. **Creative Studio & Avant-Garde:**
   * Maximalist-Meets-Minimalist: `Bricolage Grotesque` (Google Fonts - optical ink-traps) + `Instrument Serif` (Italic Accent/Subhead) + `Instrument Sans` (Body)
   * Nordic Media Precision Meets Expressive Serif: `Schibsted Grotesk` (Google Fonts) + `Fraunces` (Google Fonts - crisp data grotesque contrasted with warm expressive serif)
   * Avant-Garde Literary: `Syne` (Google Fonts - wide artistic display) + `Sentient` (Fontshare - warm transitional serif)
   * Statement Graphic Display: `Amulya Bold` (Fontshare - stylized sculpted display) + `Synonym Regular` (Fontshare - sleek structural body)
   * High-Impact Retro-Futuristic Display: `Stardom` (Fontshare) + `Satoshi` or `General Sans` (Fontshare - bold stylistic display with neutral workhorse clarity)
   * Rebel Tech Meets Editorial Print: `Clash Grotesk` (Fontshare) + `Bespoke Serif` (Fontshare) or `Lora` (Google Fonts)
   * Wide Artistic Statement: `Syne` (Google Fonts - wide artistic display) + `Plus Jakarta Sans` (Google Fonts - functional geometric body)
   * Heavy Geometric Impact: `Clash Display` (Fontshare - wide punchy display) + `Satoshi` or `General Sans` (Fontshare)
   * Expressive Ink-Traps: `Bricolage Grotesque` (Google Fonts) + `Outfit` or `Mona Sans` (Google Fonts)
   * High-Contrast Fat Face: `Abril Fatface` (Google Fonts) + `Karla` (Google Fonts)
6. **Neobrutalism & Anti-Design:**
   * Bold Heavyweight Monospace: `Space Grotesk Bold` (Google Fonts) + `Space Mono` (Google Fonts)
   * Rebellious Indie Hacker: `Cabinet Grotesk Extrabold` (Fontshare) + `JetBrains Mono` (Google Fonts)
   * Raw Brutalist Print: `Tanker` (Fontshare) + `IBM Plex Mono` (Google Fonts)
7. **High-Density Scientific & Research Systems:**
   * Research & Medical Journal: `Source Serif 4` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono`
   * Academic Research Monograph: `Libre Baskerville` (Heading) + `Inter` (Body) + `IBM Plex Mono` (Data)
   * Technical Ledger: `Space Grotesk` (Heading) + `Inter` (Body) + `IBM Plex Mono` (Data)
8. **Scandinavian, Barely-There UI & Warm Minimalism:**
   * Zen Curatorial: `Newsreader` (Google Fonts - long-form screen reading) + `Instrument Sans` (Google Fonts)
   * Quiet Tactile: `Lora` (Google Fonts) + `Satoshi` (Fontshare)
   * Pure Nordic Simplicity: `Fraunces` (Google Fonts - soft variable serif) + `Outfit` (Google Fonts)
9. **Industrial, Hardware & Cyber-Physical:**
   * Precision Hardware Instrument: `Cabinet Grotesk` (Heading) + `Instrument Sans` (Body) + `IBM Plex Mono` (Data/Readout)
   * Telemetry Utilitarian: `Space Grotesk` or `Chivo` (Heading) + `JetBrains Mono` (Data) + `Inter` (Body)
10. **Civic Tech, GovTech & Universal Public Services:**
    * Authoritative Public Infrastructure: `Plus Jakarta Sans Semibold` (Heading) + `Plus Jakarta Sans Regular` or `Source Sans 3` (Body)
    * High-Legibility Civic Standard: `Libre Franklin` (Heading) + `Inter` (Body)
11. **Spatial & Tactile Neu-Physical (The Tactile Instrument):**
    * Hardware Eurorack Audio: `Cabinet Grotesk` (Heading) + `Instrument Sans` (Body) + `IBM Plex Mono` (Data/Readout)
    * Tactile Controller Console: `Chivo Bold` (Heading) + `JetBrains Mono` (Data) + `General Sans` (Controls)
12. **Clinical & Diagnostic Healthcare Systems:**
    * High-Precision Clinical EMR: `Source Serif 4 Semibold` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono` (Vital Telemetry)
    * Diagnostic Laboratory Portal: `Inter Tight Semibold` (Heading) + `Inter` (Body) + tabular `IBM Plex Mono` (Lab Assays)
13. **High-Frequency Trading, Crypto & Liquidity Terminals:**
    * High-Velocity Orderbook: `Space Grotesk` (Heading) + tabular `JetBrains Mono` (Data/Orderbook) + `Inter Tight` (UI Controls)
    * Monochromatic Crypto Terminal: `Geist Mono` (Heading/Data) + `Geist` (UI Body) with tight tracking
14. **Luxury Hospitality, Architecture & Haute Horlogerie:**
    * Haute Horlogerie Editorial: `Boska` (Fontshare) + `Instrument Sans` (Google Fonts)
    * Architectural Quiet Luxury: `Instrument Serif` (Google Fonts) + `Satoshi` (Fontshare)
    * Timeless Horology Monograph: `Zodiak` (Fontshare) + `Switzer` (Fontshare)
15. **EdTech, Gamified Learning & Interactive Play:**
    * Neurodiverse Cognitive Flow: `Lexend Deca` (Heading) + `Inclusive Sans` (Body)
    * Approachable Interactive Learning: `Outfit Bold` (Heading) + `Lexend Regular` (Body)
    * Scientifically Accessible Flow: `Outfit` (Google Fonts) + `Lexend` (Google Fonts)
16. **Tactical HUD, Geospatial & Mission Control (C2 Systems):**
    * Tactical Telemetry C2: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Telemetry/Coords) + `Inter` (Controls)
    * Radar & Sensor Matrix: `Space Grotesk` (Heading) + `JetBrains Mono` (Hex Data/Targeting)
17. **Autonomous AI Workbench & Agent Orchestration Canvas:**
    * Monochromatic Agent Workbench: `Geist Bold/Semibold` (Heading) + `Instrument Sans` (UI Body) + tabular `JetBrains Mono` (Streaming Token Traces)
    * Minimalist AI Workspace: `Plus Jakarta Sans` (Heading) + `Inter` (Body) + `Space Mono` (Inspection Telemetry)
18. **Climate Tech, Renewable Energy & Grid Telemetry:**
    * Grid Telemetry SCADA: `Space Grotesk Bold` (Heading) + `Source Sans 3` (Body) + tabular `IBM Plex Mono` (Megawatt / Frequency Meters)
    * Cleantech Systems: `Chivo` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (Sensor Feeds)
19. **Spatial Computing, VisionOS Glass & Depth Tactility (Physical Glass):**
    * Volumetric Spatial Glass: `Outfit` (Heading) + `Plus Jakarta Sans` (Body) with subtle ambient text drop-shadow backing
    * Tactile Depth Minimal: `DM Sans Medium/Bold` (Heading) + `DM Sans Regular` (Body)
20. **B2B Logistics, Fleet Dispatch & Warehouse Yard Management:**
    * High-Density Fleet Dispatch: `Source Sans 3 Semibold` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (BOL / SKU Ledger)
    * Utilitarian Logistics Grid: `Space Grotesk` (Heading) + `IBM Plex Sans` (Body) + tabular `IBM Plex Mono` (Waybill Tracking)
21. **Defense, Avionics & Critical Mission Systems (DO-178C):**
    * Tactical Flight Telemetry: `Chivo Bold` (Heading) + `IBM Plex Mono` (Data/HUD) + `Space Grotesk` (Controls)
    * High-Contrast Radar Matrix: `Space Grotesk` (Heading) + tabular `JetBrains Mono` (Target Coordinates)
22. **AgriTech, Forestry & Soil Telemetry:**
    * Sunlight High-Contrast Canopy: `Plus Jakarta Sans Semibold` (Heading) + `DM Sans` (Body) + tabular `IBM Plex Mono` (NPK / Soil Moisture Sensor Telemetry)
    * Precision Agriculture Dispatch: `Outfit Bold` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (Multispectral Yield Metrics)
23. **LegalTech, Compliance & Regulatory Audit Chambers:**
    * Jurisprudential Statutory Reader: `Source Serif 4 Semibold` (Heading) + `Source Sans 3` (Body) + `IBM Plex Mono` (Section Line Numbers & Case Citations)
    * Regulatory Compliance Audit: `Libre Baskerville` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (AML/KYC Risk Scores)
24. **Audio Production, DSP & Virtual Studio Instruments (DAW / VST):**
    * Rack-Mount Hardware Synthesizer: `Cabinet Grotesk Extrabold` (Heading) + `Instrument Sans` (Controls) + tabular `IBM Plex Mono` (dBFS Peak Metering)
    * Parametric Studio Console: `Chivo Bold` (Heading) + `General Sans` (Knob Labels) + tabular `JetBrains Mono` (Hertz / Q-Factor Telemetry)
25. **Automotive In-Vehicle Infotainment (IVI) & Telematics:**
    * High-Glanceability Cockpit IVI: `Plus Jakarta Sans Bold` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (Battery SoC / Speedometer Readout)
    * Tactile EV Dashboard: `Outfit Semibold` (Heading) + `Plus Jakarta Sans Regular` (Body) with minimum 56px touch target padding
26. **Cybersecurity Operations Center (SOC) & Threat Intelligence:**
    * Threat Triage Matrix: `Chivo Bold` (Heading) + tabular `JetBrains Mono` (Data/CVE) + `Inter` (UI Controls)
    * Tactical Zero-Trust Perimeter: `Space Grotesk` (Heading) + tabular `IBM Plex Mono` (Packet Telemetry)
27. **Biotech, Genomic Sequencing & Wet Lab LIMS:**
    * High-Precision Cleanroom LIMS: `Source Serif 4 Semibold` (Heading) + `Instrument Sans` (Body) + tabular `JetBrains Mono` (96-Well Plate Assays)
    * Genomic Sequence Browser: `Inter Tight` (Heading) + `Source Sans 3` (Body) + `Space Mono` (Nucleotide Alignments)
28. **Solarpunk, Circular Economy & Ecological Restoration:**
    * Warm Living Loam Registry: `Sentient` (Heading) + `Figtree` (Body)
    * Regenerative Community Cooperative: `Fraunces Variable` (Heading) + `Plus Jakarta Sans` (Body)
29. **Robotics, Autonomous Fleet & Drone Teleoperation:**
    * Industrial ROS Teleoperation: `Cabinet Grotesk Extrabold` (Heading) + tabular `IBM Plex Mono` (Kinematics / Telemetry) + `Instrument Sans` (Controls)
    * Autonomous Drone Dispatch: `Chivo Bold` (Heading) + tabular `JetBrains Mono` (LiDAR / Battery Telemetry)
30. **Fintech Wealth Management, Family Office & Private Banking:**
    * Private Banking Monograph: `Zodiak` (Heading) + `Instrument Sans` (Body) + tabular `JetBrains Mono` (Portfolio Ledgers)
    * High-Net-Worth Advisory Standard: `DM Serif Display` (Heading) + `General Sans` (Body) + tabular `JetBrains Mono`
31. **SpaceTech, Orbital Mechanics & Satellite Constellation Operations:**
    * Orbital Telemetry C2: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Ephemeris / Keplers) + `Space Mono` (Telemetry Downlink)
    * Satellite Constellation Operations: `Chivo Bold` (Heading) + `Inter` (UI Body) + tabular `IBM Plex Mono` (RF Spectrum Readout)
32. **Urban Planning, Smart Cities & Transportation SCADA:**
    * Smart City Infrastructure: `Plus Jakarta Sans Semibold` (Heading) + `Inter` (Body) + tabular `IBM Plex Mono` (Traffic / Air Quality Sensor Readouts)
    * Metropolitan Transit SCADA: `General Sans` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono` (Signal Status & Headway Timers)
33. **Maritime Navigation, Port Logistics & Oceanic Telemetry:**
    * Nautical Bridge Telemetry: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Bathymetry / Lat-Long Knots) + `Source Sans 3` (Navigation Controls)
    * Container Port Logistics: `Space Grotesk` (Heading) + `Inter` (Body) + tabular `JetBrains Mono` (TEU Stacking & Crane Matrix)
34. **Neurodivergent-First, Cognitive Accessibility & Sensory Calm UI:**
    * Sensory Calm Reading: `Lexend` (Heading) + `Inclusive Sans` (Body) - Scientifically engineered to reduce cognitive strain and visual crowding
    * Predictable Inclusive Workspace: `DM Sans Medium` (Heading) + `Outfit` (Body) with generous letter-spacing and calm reading cadence
35. **Mining, Heavy Machinery & Industrial Geophysics:**
    * Heavy Excavation Telemetry: `Cabinet Grotesk Extrabold` (Heading) + tabular `JetBrains Mono` (Engine Payload / Hydraulic PSI) + `IBM Plex Sans` (Controls)
    * Geoscientific Assay Console: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Mineral Grade / Slope Inclinometer)
36. **Philanthropy, NGO Foundations & Global Humanitarian Relief:**
    * Humanitarian Relief Portal: `Source Serif 4 Semibold` (Heading) + `Plus Jakarta Sans` (Body) + tabular `JetBrains Mono` (Aid Transparency Ledger)
    * Global Foundation Monograph: `Sentient` (Heading) + `Source Sans 3` (Body) - Warm dignified editorial authority with approachable public clarity
37. **Quantum Computing, Supercomputing & Quantum Optics Chambers:**
    * Cryogenic Quantum Telemetry: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Bloch Vectors / Phase Qubits) + `Cabinet Grotesk` (Controls)
    * Laser Interferometry Matrix: `Cabinet Grotesk` (Heading) + tabular `IBM Plex Mono` (Wavelength Calibration)
38. **Sports Science, Athletic Biomechanics & High-Performance Kinesiology:**
    * High-Performance Biomechanics: `Plus Jakarta Sans Bold` (Heading) + `Instrument Sans` (Body) + tabular `JetBrains Mono` (Ground Reaction Force / VO2 Max)
    * Athletic Kinematic Telemetry: `Outfit Bold` (Heading) + `Inter` (Body) + tabular `IBM Plex Mono` (Sprint Acceleration)
39. **Culinary Arts, Gastronomy & High-End Winery Cellars:**
    * Degustation & Terroir Monograph: `Playfair Display` or `Boska` (Heading) + `Lora` (Body) + `Instrument Sans` (Menu Metadata)
    * Artisanal Cellar Archive: `Sentient` (Heading) + `Satoshi` (Body) - Quiet culinary warmth with contemporary Swiss legibility
40. **Geological Hazard, Volcanology & Seismic Early Warning Systems:**
    * Real-Time Seismograph C2: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Richter / P-Wave Acceleration) + `Space Grotesk` (Station Controls)
    * Volcanic Plume Lidar Telemetry: `Space Grotesk` (Heading) + tabular `JetBrains Mono` (Deformation Tiltmeters)
41. **Nuclear Engineering, Particle Physics & Fusion SCADA:**
    * Tokamak Confinement SCADA: `Cabinet Grotesk Extrabold` (Heading) + tabular `JetBrains Mono` (Plasma Toroidal Field / Neutron Flux) + `IBM Plex Sans` (Controls)
    * Reactor Core Dosimetry: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Radiation Sieverts)
42. **Film Production, Cinematography & Color Grading Suites:**
    * Studio Grading Console: `Space Grotesk` (Heading) + `Instrument Sans` (Body) + tabular `JetBrains Mono` (SMPTE Timecode / ACES Metadata)
    * Cinematographic Slate Reader: `Cabinet Grotesk` (Heading) + tabular `IBM Plex Mono` (Focal Length / Shutter Angle)
43. **Embedded IoT, Microcontroller & Hardware Flashing Portals:**
    * Machined Firmware Console: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Serial / Hex Stream) + `Space Grotesk` (Controls)
    * Hardware Logic Analyzer: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Waveform Bus Timing)
44. **Emergency Dispatch, 911 & Incident Command Systems (CAD / FirstNet):**
    * Rapid Situational CAD: `Public Sans Bold` (Heading) + `Source Sans 3` (Body) + tabular `IBM Plex Mono` (Unit GPS / Incident Timers)
    * Tactical Public Safety Dispatch: `Libre Franklin Semibold` (Heading) + `Inter` (Body) + tabular `JetBrains Mono`
45. **Scientific Observatories, Radio Astronomy & Deep-Sky Astrophysics:**
    * Radio Interferometry Spectrum: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Gigahertz / Spectral Lines) + `Cabinet Grotesk` (Controls)
    * Deep-Sky Ephemeris Console: `Cabinet Grotesk` (Heading) + tabular `Space Mono` (RA / Dec Celestial Coordinates)
46. **Civic Archival, Rare Manuscripts & Digital Humanities Paleography:**
    * Codicological Facsimile Reader: `Cormorant Garamond Semibold` (Heading) + `Lora` (Body) + `IBM Plex Mono` (Folio / Shelfmark Identifiers)
    * Epigraphic Archival Monograph: `Sentient` (Heading) + `Instrument Sans` (Metadata) + `Source Serif 4` (Transcriptions)
47. **Forensic Accounting, Fraud Investigation & AML Anti-Corruption Audit:**
    * Forensic Transaction Graph: `Source Serif 4 Semibold` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono` (Wire Traces & Currency Ledgers)
    * Anti-Corruption Audit Chamber: `Inter Tight Semibold` (Heading) + `Inter` (Body) + tabular `IBM Plex Mono` (Red-Flag Severity Scoring)
48. **Clinical Pharmacokinetics & Pharmaceutical Discovery Assays:**
    * Pharmacokinetic Titration Console: `Source Serif 4 Semibold` (Heading) + `Instrument Sans` (UI Body) + tabular `JetBrains Mono` (IC50 / Nanomolar Assays)
    * ADME Assay Ledger: `Inter Tight` (Heading) + `Source Sans 3` (Body) + tabular `Space Mono` (Molecular Clearance Metrics)
49. **Battery Energy Storage Systems (BESS) & Virtual Power Plants (VPP):**
    * Grid Telemetry SCADA: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Megawatt / State of Charge Telemetry) + `Chivo` (Inverter Controls)
    * Real-Time BESS Operations: `Chivo Bold` (Heading) + `Instrument Sans` (UI Body) + tabular `IBM Plex Mono` (Cell Thermals & Frequency Regulation)
50. **Micro-Mobility, EV Fleet Dispatch & Charging Infrastructure (OCPP / ChargePoint SCADA):**
    * Rapid Charger Telemetry: `Plus Jakarta Sans Bold` (Heading) + tabular `JetBrains Mono` (Kilowatt-Hour Readout & State-of-Charge) + `Inter` (UI Controls)
    * EV Dispatch Matrix: `Outfit Semibold` (Heading) + `DM Sans` (Body) + tabular `IBM Plex Mono` (Fleet Telemetry) with minimum 56px touch target padding
51. **Semiconductor Fabrication & Cleanroom Lithography Telemetry (SECS/GEM Standard):**
    * Sub-Nanometer Stepper Metrology: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Overlay Error nm / EUV Dose) + `Cabinet Grotesk` (Wafer Controls)
    * Cleanroom Vacuum Chamber Telemetry: `Cabinet Grotesk Extrabold` (Heading) + tabular `IBM Plex Mono` (Particle Defect Density & Pressure Pascal)
52. **Autonomous Oceanic Submersibles & Deep-Sea ROV Telemetry:**
    * Abyssal Submersible Teleoperation: `Chivo Bold` (Heading) + tabular `IBM Plex Mono` (Hydrostatic Depth Bar / Thruster Vectoring) + `Space Grotesk` (Manipulator Controls)
    * Multibeam Bathymetry Sonar: `Space Grotesk` (Heading) + tabular `JetBrains Mono` (Acoustic Modems & Sonar Waterfalls)
53. **Precision Aquaculture & Marine Ecosystem Bio-Telemetry:**
    * Marine Biomass Telemetry: `Plus Jakarta Sans Semibold` (Heading) + `DM Sans` (Body) + tabular `JetBrains Mono` (Dissolved Oxygen mg/L & Turbidity Gauges)
    * Coastal Aquaculture Registry: `Sentient` (Heading) + `Instrument Sans` (Metadata) + tabular `IBM Plex Mono` (Salinity PSU Curves)
54. **Disaster Relief Drone Swarm & Tactical Search and Rescue (SAR):**
    * Tactical Swarm SAR Dispatch: `Public Sans Bold` (Heading) + tabular `JetBrains Mono` (Thermal IR Target GPS & Drone Telemetry) + `Chivo` (Waypoint Controls)
    * Humanitarian Emergency Air-Drop: `Chivo Bold` (Heading) + `Source Sans 3` (Body) + tabular `IBM Plex Mono` (Beacon RSSI & Payload Status)
55. **Geospatial Satellite SAR & Planetary Earth Observation (InSAR / Multispectral LEO):**
    * Radar Orbit Telemetry: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Phase Interferometry Angles) + `Cabinet Grotesk` (UI Controls)
    * Multispectral LEO Sensor Array: `Cabinet Grotesk` (Heading) + tabular `Space Mono` (Lat/Long Geo-Coordinates) + `Inter` (Data Readout)
56. **High-Performance Computing (HPC), AI Cluster & GPU Fabric SCADA (Slurm / InfiniBand):**
    * GPU Fabric Telemetry: `Chivo Bold` (Heading) + tabular `JetBrains Mono` (TFLOPS / NVLink Bandwidth) + `Space Grotesk` (Node Controls)
    * Supercomputing Slurm Queue: `Space Grotesk` (Heading) + tabular `IBM Plex Mono` (Job Latency & GPU Wattage) + `Source Sans 3` (Body)
57. **Synthetic Biology, Precision Fermentation & Bioreactor Telemetry (Biofoundry / Chemostat):**
    * Sterile Bioreactor SCADA: `Source Serif 4 Semibold` (Heading) + `Instrument Sans` (UI Body) + tabular `JetBrains Mono` (DO / pH Agitation RPM)
    * Microbial Strain Chemostat: `Inter Tight` (Heading) + `Source Sans 3` (Body) + tabular `IBM Plex Mono` (Off-Gas Mass Spec RQ/CER)
58. **Carbon Capture, Geothermal & Deep Borehole SCADA (Direct Air Capture / EGS):**
    * Direct Air Capture Telemetry: `Cabinet Grotesk Extrabold` (Heading) + tabular `IBM Plex Mono` (Metric Tons CO2/hr & Adsorption Cycles) + `Chivo` (Valves)
    * Subterranean Borehole SCADA: `Chivo Bold` (Heading) + tabular `JetBrains Mono` (Downhole MPa Pressure & Thermal Gradient) + `Inter` (Wellhead Controls)
59. **Neuromorphic Computing & Brain-Computer Interface (BCI / Neural Telemetry):**
    * Synaptic Raster Telemetry: `Space Grotesk Bold` (Heading) + tabular `JetBrains Mono` (Microvolt Action Potentials & Spike Sorting) + `Chivo` (Electrode Controls)
    * Closed-Loop Decoding Matrix: `Chivo Bold` (Heading) + tabular `Space Mono` (Neural Latency ms) + `Instrument Sans` (Telemetry Body)
60. **Circular Economy, Digital Product Passports & Supply-Chain Traceability (DPP / Provenance):**
    * Textile Material Passport: `Sentient` (Heading) + `DM Sans` (Body) + tabular `IBM Plex Mono` (Cryptographic DID / Recyclability Score)
    * Cradle-to-Cradle Registry: `Plus Jakarta Sans Semibold` (Heading) + `Source Sans 3` (Body) + tabular `JetBrains Mono` (Lifecycle Carbon Milestones)

### Performance, Ergonomics & Core Web Vitals Rules:
* **Maksimal 2 Keluarga Font:** 1 display/heading + 1 body UI. Tambahan font monospace hanya untuk blok kode atau kolom angka data.
* **Maksimal 3 Bobot:** Regular 400, Medium 500, Semibold/Bold 600/700.
* **Variable Font First:** Muat 1 file variable font (`.woff2`) untuk menghemat roundtrip jaringan dan melenyapkan Cumulative Layout Shift (CLS).
* **Font-Display Swap:** Wajib sertakan `font-display: swap` untuk mencegah Flash of Invisible Text (FOIT).
* **Text-Wrap Symmetrical Balance:** Wajib terapkan `text-wrap: balance` pada semua elemen judul (`h1`, `h2`, `h3`) dan `text-wrap: pretty` pada paragraf (`p`, `article`) untuk mencegah baris patah tangga dan orphan words.
* **Wide Open Apertures:** Utamakan font body dengan bukaan huruf lebar (aperture terbuka pada c, e, s) dan x-height tinggi agar tetap terbaca tajam pada resolusi layar mobile.

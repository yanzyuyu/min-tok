---
name: modern-stack-horizon
description: >-
  Memaksa standar web dan software engineering generasi terbaru (React 19+, Next.js 15+, Tailwind v4+, Vite 6+, TypeScript 5+, Native Web Platform APIs).
  Melarang keras pola kodingan usang/legacy 2016-2023 (seperti useEffect data fetching, legacy tailwind.config.js, axios saat fetch tersedia, dll).
  Secara otonom memicu pencarian dokumentasi resmi terbaru saat mendeteksi library yang berubah cepat.
---

# Modern Stack Horizon (Anti-Legacy & Next-Gen Web Standards)

Skill ini memaksa agen untuk selalu memprogram menggunakan arsitektur termodern, melarang keras pola kode usang hasil statistical bias model AI lama, dan memastikan kode selalu kompatibel dengan rilis rujukan terkini.

---

## 1. Matrix Larangan Pola Kuno vs Standar Modern

| Area / Framework | ❌ BANNED (Pola Jadul 2016-2023) | ✅ MODERN STANDARD (Generasi Terkini) |
| :--- | :--- | :--- |
| **Tailwind CSS** | Membuat `tailwind.config.js` berbasis JavaScript, mengimpor `@tailwind base;` di CSS. | **Tailwind v4 (CSS-First):** Gunakan `@import "tailwindcss";` langsung di CSS utama. Variabel tema dikonfigurasi via `@theme { ... }`. |
| **React Data Fetching** | `useEffect` + `useState` + manual loading flag untuk fetch data saat mount. | **React 19 / Server Components:** Server Components langsung `await data`, atau gunakan TanStack Query / React 19 `use(promise)`. |
| **React Forms & Actions** | Manual `onSubmit`, `e.preventDefault()`, tracking `isSubmitting` di 5 state terpisah. | **Server Actions & Action State:** Gunakan `action={formAction}` dan `useActionState()` atau `useFormStatus()`. |
| **React Refs** | Membungkus komponen dengan `forwardRef((props, ref) => ...)`. | **React 19 Plain Ref:** `ref` sekarang merupakan prop biasa (`function Button({ ref, ...props })`). `forwardRef` sudah deprecated. |
| **HTTP Client** | Menginstal `axios` atau `node-fetch` untuk fetch JSON sederhana. | **Native Fetch:** `fetch()` bawaan runtime + `AbortSignal.timeout(5000)` + `res.json()`. Zero dependencies. |
| **CSS Layout & UI** | Memakai hack JavaScript untuk modal dialog, tooltip, atau popover. | **Native HTML5 + Modern CSS:** `<dialog>`, Popover API (`popover="auto"`), CSS `:has()`, `@starting-style` untuk animasi buka/tutup, dan CSS Subgrid. |
| **JavaScript Async** | Menggunakan polyfill atau callback hack untuk deferred promises. | `Promise.withResolvers()` bawaan ECMAScript modern. |
| **Next.js Routing & Caching** | Pola Pages Router lama (`getServerSideProps`, `pages/api`), asumsi fetch selalu dicache selamanya. | **App Router (Next.js 15+):** `fetch` tidak dicache secara default di v15. Gunakan `connection()` atau `unstable_cache` eksplisit. |

---

## 2. Autonomous Epistemic Trigger (Pencarian Web Sebelum Menulis Kode)

Jika tugas kamu menyentuh framework yang mengalami perubahan besar (major breaking changes):
1. **Dilarang Menebak-nebak:** Jangan berasumsi argumen atau nama method masih sama dengan data latih lama.
2. **Autonomous Trigger:** Jalankan `search_web` dengan kueri berdensitas tinggi:
   - Contoh: `"tailwindcss 4" "theme config" "css-first"`
   - Contoh: `"nextjs 15" "server actions" "caching changes"`
   - Contoh: `"react 19" "useActionState" "official documentation"`
3. **Ingest Docs via `read_url_content`:** Baca dokumentasi resmi, ekstrak API signature yang tepat, lalu terapkan ke kode.

---

## 3. Native Platform Supremacy (Web Platform First)

Sebelum menginstal package npm baru untuk kebutuhan interaksi UI:
- **Modal / Dialog:** Gunakan elemen native `<dialog>` dan method `.showModal()`.
- **Dropdown / Popover:** Gunakan atribut `popover="auto"` dan `popovertarget`.
- **State Styling:** Gunakan CSS `:has()` untuk mendeteksi status elemen anak tanpa perlu mengangkat state ke React.
- **Scroll Animations:** Gunakan `animation-timeline: scroll()` atau `@media (prefers-reduced-motion)` native CSS daripada library animasi berat berukuran ratusan KB.

---

## 4. Verification Gate
Sebelum menyerahkan kode ke pengguna:
- Pastikan tidak ada fungsi yang berstatus `@deprecated` di runtime saat ini.
- Pastikan bundler/build (misal: `vite build` atau `npm run build`) berjalan bersih tanpa warning deprecation.

---
name: react-ui-architect
description: Merancang dan memodifikasi komponen antarmuka React/Next.js/Vite. Gunakan saat membangun UI, memperbaiki CSS, atau menyesuaikan layout responsif.
---

# React UI Architect (Anti-Slop SOP)

## Tujuan
Menghasilkan komponen React fungsional, bersih, dan 100% responsif dengan standar tipografi dan tata letak "Anti-Ugly" tingkat industri.

## Workflow Eksekusi
1. **Component Decomposition:** Pecah desain UI kompleks menjadi komponen atomik fungsional (SRP).
2. **Tailwind First:** Gunakan kelas utilitas Tailwind secara eksklusif. JANGAN membuat file `.css` terpisah kecuali untuk variabel dasar global.
3. **Mobile-First Validation:** Mulai desain struktur dari viewport `sm:`, lalu tingkatkan ke `md:` dan `lg:`.

## Aturan Absolut (Guardrails)
- **Sharp Typography:** Teks harus solid. DILARANG menggunakan `text-shadow` (kecuali efek neon spesifik) atau tulisan dua nada yang tidak kontras. Gunakan `text-slate-500` atau `text-gray-400` untuk teks sekunder.
- **Micro-interactions:** Border radius maksimum adalah `rounded-sm` atau `rounded` (1px - 4px). JANGAN membuat tombol berbentuk pil (`rounded-full`) kecuali diminta spesifik. Gunakan shadow yang tajam dan minimal (`shadow-sm` atau border tipis `border border-zinc-200`).
- **Layout Safety:** WAJIB menerapkan `flex-wrap` dan `gap-*` pada container berbasis baris untuk menghindari bentrokan elemen di layar kecil.
- **Zero HTML Comments:** Dilarang menggunakan komentar JSX `{/* ... */}` yang tidak penting di dalam block render. Kodenya harus mendeskripsikan dirinya sendiri (self-documenting).

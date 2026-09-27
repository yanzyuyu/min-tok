---
name: deep-researcher
description: >-
  Investigasi mendalam multi-sumber, triangulasi data faktual (Rule of 3), pembongkaran release notes/changelog resmi,
  dan verifikasi silang (cross-verification) sebelum mengambil keputusan teknis, arsitektural, atau akademis.
  Mengekstrak informasi berdensitas tinggi dari dokumentasi resmi, RFC, paper ilmiah, dan repositori open-source.
---

# Deep Researcher (Triangulasi Fakta & Investigasi Multi-Sumber)

Skill ini memandu agen untuk melakukan riset komprehensif, kritis, dan berbasis data faktual—menghilangkan ketergantungan pada artikel opini dangkal, forum usang, atau halusinasi token AI.

---

## 1. Hukum Triangulasi Fakta (The Rule of 3)

Sebelum menyatakan sebuah fakta teknis baru, statistik, atau kesimpulan analitis sebagai kebenaran mutlak:
* **Wajib Diverifikasi oleh Minimal 3 Sumber Independen Berbeda:**
  1. *Sumber Primer 1:* Dokumentasi resmi, RFC, spesifikasi standar, atau rilis repositori resmi (GitHub Releases).
  2. *Sumber Primer 2:* Artikel teknis dari insinyur utama, benchmark resmi, atau commit log upstream.
  3. *Sumber Pendukung:* Artikel peer-reviewed, diskusi issue tracker terverifikasi, atau panduan arsitektur kredibel.
* Jika ketiga sumber memberikan data yang bertentangan, paparkan kontradiksi tersebut secara transparan (*"Sumber A menyatakan X karena pertimbangan Y, sedangkan Sumber B menyatakan Z"*).

---

## 2. Alur Investigasi Dokumen & Repository

Ketika menyelidiki masalah kompleks atau update teknologi:

### Langkah 1: Penelusuran Hulu (Upstream Source Tracing)
- Jangan hanya membaca tutorial sekunder di Medium atau dev.to.
- Lacak langsung repositori resminya di GitHub.
- Periksa `CHANGELOG.md`, `releases`, atau `issue tracker` untuk melihat *breaking changes* dan *migration guides* yang sebenarnya.

### Langkah 2: Ekstraksi Dokumen Padat (High-Density Extraction)
- Gunakan `search_web` untuk menemukan URL dokumentasi resmi yang paling relevan.
- Gunakan `read_url_content` untuk menyedot konten mentah tanpa markup iklan atau noise UI.
- Ekstrak bagian spesifik: nama fungsi, parameter, tipe data return, dan contoh implementasi minimum.

### Langkah 3: Sintesis & Verifikasi Kausal (Causal Synthesis)
- Pahami **mengapa** teknologi atau metode tersebut diubah (*causal rationale*).
- Jelaskan keuntungan performa, implikasi keamanan, dan potensi *breaking changes* bagi sistem yang ada.

---

## 3. Gaya Laporan Riset (Zero Marketing Fluff)

Laporan riset harus to-the-point, padat data, dan bebas basa-basi:
- **Tabel Perbandingan Obyektif:** Membandingkan metrik kuantitatif (latensi, bundle size, footprint memori, dukungan runtime).
- **Kutipan & Tautan Sumber:** Setiap klaim teknis penting wajib menyertakan link sumber rujukan resmi.
- **Rekomendasi Aksi Konkret:** Berikan rekomendasi langkah demi langkah (*actionable steps*) berdasarkan hasil temuan.

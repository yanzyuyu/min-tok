# min-tok

**Zero-Dependency Anti-Over-Engineering Engine, Token Shield & Agent Skills Suite**

`min-tok` adalah perangkat bantu baris perintah (CLI) dan bundel agen skill mandiri untuk mendeteksi dependensi berlebih (*bloat libraries*), mengaudit rasio over-engineering arsitektur, membersihkan pustaka usang/redundant secara otomatis, memasang bundel skill AI otonom, serta menegakkan format unified diff yang hemat kuota limit token AI hingga 80%.

---

## Karakteristik Inti

1. **Strict Zero External Dependencies:** 100% dibangun menggunakan Node.js Standard Library (`node:fs`, `node:path`, `node:util`, `node:child_process`, `node:test`).
2. **Instant Execution:** Membaca manifest dan memindai kode sumber dalam hitungan milidetik tanpa mengunduh ratusan megabyte `node_modules`.
3. **Multi-Ecosystem:** Mendukung ekosistem **Node.js / TypeScript** (`package.json`), **Python pip** (`requirements.txt`), dan **Python modern** (`pyproject.toml`).
4. **Auto-Purge Refactoring:** Secara otomatis merefaktor impor dan sintaksis kode dari paket eksternal (seperti `uuid`, `rimraf`, `mkdirp`) menjadi padanan native standar bahasa.
5. **Token Guard:** Menyediakan format unified diff ringkas untuk memangkas konsumsi token context window AI hingga 70-80%.
6. **Built-in Agent Skills Suite:** Membawa 8 bundel skill AI berstandar manusia senior yang dapat dipasang secara otomatis ke sistem agen Anda.

---

## Instalasi & Penggunaan

### 1. Jalankan via `npx` (Langsung tanpa instalasi lokal):
```bash
# Pindai repositori untuk mendeteksi bloat
npx min-tok scan .

# Pasang semua 8 skills AI otomatis ke direktori agen Anda
npx min-tok install-skills
```

### 2. Jalankan secara Lokal:
```bash
# Pindai dependensi bloat
node ./bin/min-tok.js scan .

# Audit kompleksitas arsitektur & rasio abstraksi
node ./bin/min-tok.js audit .

# Bersihkan pustaka bloat dan refaktor kode otomatis ke native
node ./bin/min-tok.js purge uuid .

# Buat unified diff ringkas antara dua file (hemat limit token)
node ./bin/min-tok.js diff file_lama.js file_baru.js

# Pasang seluruh bundel 8 skills AI secara otomatis
node ./bin/min-tok.js install-skills
```

---

## Daftar Perintah CLI

| Perintah | Fungsi | Contoh |
| :--- | :--- | :--- |
| `scan [path] [--strict]` | Memindai manifest untuk mendeteksi paket bloat dan menyarankan padanan native | `min-tok scan . --strict` |
| `audit [path] [--strict]` | Menghitung Over-Engineering Score berdasarkan LOC, layer abstraksi, dan jumlah dependensi | `min-tok audit ./src` |
| `purge <pkg> [path]` | Mengubah pemanggilan kode secara otomatis ke native dan menghapus paket dari manifest | `min-tok purge uuid .` |
| `diff <f1> <f2>` | Menghasilkan unified diff padat tanpa pemborosan token | `min-tok diff old.js new.js` |
| `install-skills [path]` | Memasang 8 bundel skills AI secara otomatis ke direktori konfigurasi agen | `min-tok install-skills` |

---

## Bundel AI Agent Skills yang Disertakan

Repositori ini memuat 8 skill AI otonom tingkat lanjut di dalam direktori `skills/`:

1. **`anti-overengineering`**: Menegakkan bias zero-dependency, standard library first, eliminasi arsitektur berlebih, dan penghematan limit token.
2. **`human-coding`**: Standar pemrograman senior manusia (100% comment-free, zero-trust API security, anti-BOLA/IDOR).
3. **`git-craft`**: Git hygiene pragmatis, penulisan commit human-style, dan pencegahan kebocoran kredensial/token agen.
4. **`design-no-slop`**: Menghilangkan AI design slop dari Web, GUI, dan TUI (anti-pill badge, tipografi domain-matched).
5. **`markdown-doc`**: Dokumentasi teknis visual berdampak tinggi tanpa emoji atau marketing buzzwords klise.
6. **`tyw-audit`**: Autonomous Software Quality, Resilience & Security auditor.
7. **`data-verify`**: Rekonsiliasi data lintas database dan push-down cryptographic hashing.
8. **`perf-benchmark`**: Benchmarking throughput tinggi tanpa dependensi eksternal.

### Cara Memasang Skills:
* **Otomatis (Direkomendasikan):** Jalankan `npx min-tok install-skills`. Tool akan mendeteksi `~/.gemini/config/skills` atau `~/.agents/skills` dan menyinkronkan semuanya secara instan.
* **Manual:** Salin folder dari direktori `skills/` langsung ke folder konfigurasi agen AI Anda.

---

## Lisensi

Didistribusikan di bawah lisensi [Apache-2.0](LICENSE). Lihat file [`LICENSE`](LICENSE) untuk informasi hak cipta dan ketentuan hukum selengkapnya.

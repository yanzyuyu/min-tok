---
name: anti-overengineering
description: >-
  Enforces zero-dependency bias, native standard library utilization, anti-over-engineering, anti-YAGNI, and token-efficient lean architecture across all software projects and AI coding workflows.
  Trigger whenever proposing or installing third-party packages, designing architecture, creating helper utilities, refactoring, or generating code solutions.
  Mandates the 3-Gate Dependency Audit (Search before Import), Native Standard Library Replacement Matrix (Node/JS/TS, Python, Go, Web APIs), elimination of speculative enterprise abstractions (factories, excessive DTOs/interfaces for simple tasks), strict token conservation (diff-only output protocol), and proactive dependency de-bloating using the nobloat CLI engine.
---

# Anti-Over-Engineering & Lean Software Craft (The Perfect Zero-Bloat Standard)

This skill forces the AI agent to operate with radical dependency restraint, architectural minimalism, and maximum token efficiency. It eliminates the reflexive AI habit of installing third-party packages for trivial tasks, building speculative enterprise abstractions, and exhausting context limits with verbose boilerplate dumps.

---

## 1. The Core Philosophy: Lean Engineering vs AI Bloat

AI models suffer from a statistical bias toward bloated open-source patterns—recommending outdated npm/pip packages from 2016 and wrapping 5-line functions inside multi-tier abstractions.

| Dimensi | AI Bloat Pattern (Over-Engineering) | Lean Engineering Standard |
| :--- | :--- | :--- |
| **Ketergantungan Paket** | Menginstal paket eksternal untuk fungsi 2 baris (misal: `uuid`, `axios`, `rimraf`, `is-number`). | **Native Standard Library First**: Menggunakan pustaka standar dan runtime modern. |
| **Rantai Pasok (Supply Chain)** | Mengabaikan beban transitive dependencies (1 paket menarik 40 sub-packages). | **Transitive Blast-Radius Rule**: Veto paket yang menarik $>3$ sub-dependencies untuk tugas sepele. |
| **Arsitektur Solusi** | Membuat 5 lapis abstraksi (*Controller, Service, Repository, DTO, Factory*) untuk CRUD sederhana. | **KISS & Anti-YAGNI**: Modularitas pragmatis, fungsi murni, dan struktur datar. |
| **Konsumsi Token & Limit** | Mencetak ulang seluruh file 500 baris hanya untuk mengubah 3 baris kode. | **Diff-Only Output Protocol**: Hanya keluarkan patch padat / targeted edit, hemat 80% kuota token. |
| **Sikap Konsultasi** | Mengiyakan tumpukan teknologi raksasa (Kubernetes, Kafka) untuk app kecil. | **Tech-Stack Reality Check**: Menantang over-engineering dan menawarkan solusi ramping. |

---

## 2. The 3-Gate Dependency Audit (Search & Verify Before Import)

Sebelum mengusulkan `npm install`, `pip install`, atau menambah dependensi baru, AI **WAJIB** mengevaluasi 3 Gerbang Verifikasi:

```
[Kebutuhan Fungsional]
          │
          ▼
┌────────────────────────────────────────┐
│ Gerbang 1: The Native Capability Gate  │
│ Bisa diselesaikan bawaan bahasa dalam  │ ──(YA)──► GUNAKAN STANDARD LIBRARY / NATIVE
│ <= 25 baris kode?                      │           (DILARANG install paket baru)
└────────────────────────────────────────┘
          │ (TIDAK)
          ▼
┌────────────────────────────────────────┐
│ Gerbang 2: The Existing Project Gate   │
│ Apakah dependency sejenis SUDAH ADA di │ ──(YA)──► REUSE DEPENDENCY YANG SUDAH ADA
│ package.json / pyproject / go.mod?     │           (DILARANG install pustaka tandingan)
└────────────────────────────────────────┘
          │ (TIDAK)
          ▼
┌────────────────────────────────────────┐
│ Gerbang 3: The True Complexity Gate    │
│ Apakah ini masalah tingkat lanjut?     │ ──(TIDAK)─► TULIS LEAN HELPER FUNCTION MANDIRI
│ (Kriptografi berat, Parser AST, ML, DB)│
└────────────────────────────────────────┘
          │ (YA)
          ▼
[IZINKAN DEPENDENCY EKSTERNAL DENGAN JUSTIFIKASI SINGKAT]
```

### Kriteria Larangan Keras (Strict Banned Packages):
1. **Helper Trivial:** `is-odd`, `left-pad`, `is-number`, `lodash`, `underscore`, `ramda` jika hanya butuh manipulasi array/objek standar.
2. **Duplikasi HTTP Client:** `axios`, `got`, `superagent`, `node-fetch` jika runtime mendukung `fetch()`.
3. **Pustaka UUID / Crypto Ringan:** `uuid`, `nanoid` jika platform menyediakan `crypto.randomUUID()`.
4. **File System Utilities Jadul:** `rimraf`, `mkdirp`, `ncp` di Node.js modern.

---

## 3. The 5 Pillars of Perfection

### Pillar 1: Proactive De-Bloater (Auto-Purging Legacy Repos)
Bukan hanya mencegah paket baru, AI aktif membersihkan repositori lama yang sudah telanjur gemuk.
* Jalankan atau manfaatkan tool `nobloat scan` dan `nobloat purge <package>`.
* Ganti pemanggilan library bloat dengan fungsi bawaan modern, jalankan test suite untuk memvalidasi zero-breakage, lalu hapus dari manifest.

### Pillar 2: The Transitive Blast-Radius Rule
Jangan menilai paket hanya dari ukurannya yang tampak kecil.
* Sebelum merekomendasikan sebuah pustaka, periksa *transitive dependencies*.
* Jika sebuah pustaka untuk tugas sepele menarik $>3$ sub-dependencies pihak ketiga, pustaka tersebut **wajib ditolak** dan digantikan dengan solusi native mandiri.

### Pillar 3: Diff-Only Output Protocol (Token & Context Limit Shield)
Untuk menghemat token context window dan kuota pengguna:
* **DILARANG KERAS** memuntahkan ulang seluruh file kode jika perubahan $\le 30$ baris.
* Gunakan tool penyuntingan targeted (`replace_file_content`) atau tampilkan cuplikan unified diff ringkas.
* Hindari basa-basi pembuka dan penutup ("Tentu, saya akan membantu...", "Semoga bermanfaat!").

### Pillar 4: Tech-Stack Reality Check (Anti-Framework Bloat)
* Bertindak sebagai *Pragmatic Lead Engineer*: jika kebutuhan hanya sistem internal dengan pengguna terbatas, tolak arsitektur multi-service terdistribusi yang rumit.
* Prioritaskan kesederhanaan operasional: SQLite dengan mode WAL (*Write-Ahead Logging*) atau single-node PostgreSQL jauh lebih efisien daripada tumpukan 10 microservices cloud.

### Pillar 5: Runtime Compatibility Matrix (Zero-Breakage Guard)
Sebelum menerapkan API native modern, selalu verifikasi target runtime proyek:
* **Node 18+:** `fetch()`, `crypto.randomUUID()` aman digunakan.
* **Node 20+:** `process.loadEnvFile()` dan flag `--env-file` tersedia.
* **Node 22+:** `fs.promises.glob()` tersedia.
* **Python 3.10+:** Pattern matching (`match-case`), `dataclasses` bawaan stabil.

---

## 4. Native Standard Library Replacement Matrix

### A. JavaScript / TypeScript & Node.js

| Jangan Install (Bloat) | Gunakan Native / Standard Library | Contoh Kode Lean |
| :--- | :--- | :--- |
| `uuid` | `crypto.randomUUID()` | `const id = crypto.randomUUID();` |
| `axios` / `node-fetch` | Native `fetch()` + `AbortSignal.timeout()` | `const res = await fetch(url, { signal: AbortSignal.timeout(5000) });` |
| `lodash.get` / `lodash.set` | Optional Chaining & Nullish Coalescing | `const val = obj?.user?.profile?.name ?? "Guest";` |
| `lodash.cloneDeep` | `structuredClone()` | `const copy = structuredClone(original);` |
| `lodash.flatten` | `Array.prototype.flat()` | `const flat = arr.flat(Infinity);` |
| `rimraf` | `fs.promises.rm` | `await fs.promises.rm(dir, { recursive: true, force: true });` |
| `mkdirp` | `fs.promises.mkdir` | `await fs.promises.mkdir(dir, { recursive: true });` |
| `dotenv` (Node 20+) | `process.loadEnvFile()` atau CLI `--env-file` | `process.loadEnvFile();` |
| `chalk` / `colorette` | ANSI escape codes atau `util.styleText` | `\x1b[32m%s\x1b[0m` |
| `moment` / `dayjs` | `Intl.DateTimeFormat` | `new Intl.DateTimeFormat('id-ID').format(new Date());` |

### B. Python (Python 3.10+)

| Jangan Install (Bloat) | Gunakan Standard Library | Keuntungan |
| :--- | :--- | :--- |
| `requests` (mikro/webhook) | `urllib.request` + `json` | Zero-dependency, langsung jalan tanpa `pip install`. |
| `pydantic` (internal container) | `dataclasses.dataclass` / `NamedTuple` | Zero runtime parsing overhead, memory footprint minimal. |
| `tabulate` (tabel CLI) | Format strings / f-strings | `print(f"{name:<20} | {status:>10}")` |
| `python-dotenv` | `os.environ` + parser sederhana | Menghemat ketergantungan external environment. |
| `pytest` (unit test mikro) | `unittest` & `unittest.mock` | Standard library bawaan Python. |
| `pandas` (hanya parse CSV kecil) | `csv.DictReader` | Menghemat download binary 50MB+ dan kompilasi C. |

---

## 5. Tool Pendamping: min-tok CLI (Zero-Bloat Engine)

AI dan pengguna dapat memanfaatkan engine zero-dependency `min-tok` yang berlokasi di `C:\Users\MSI\.gemini\antigravity\scratch\nobloat` atau dari repositori [min-tok](https://github.com/yanzyuyu/min-tok):

* `node bin/min-tok.js scan [dir] [--strict]` : Pindai `package.json`, `requirements.txt`, dan `pyproject.toml` untuk menemukan bloat libraries.
* `node bin/min-tok.js audit [dir] [--strict]` : Audit rasio over-engineering, tingkat abstraksi, dan densitas dependensi.
* `node bin/min-tok.js purge <package> [dir]` : Refaktor kode otomatis mengganti pustaka bloat ke native standar.
* `node bin/min-tok.js diff <file1> <file2>` : Buat unified diff ringkas dan hemat token.

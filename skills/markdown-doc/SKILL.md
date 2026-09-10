---
name: markdown-doc
description: >-
  MANDATORY: Execute FIRST before writing or editing ANY Markdown file (README.md, docs, artifacts).
  Create high-impact, visual Markdown documentation and READMEs without AI slop.
  Use this skill to enforce human-grade anti-AI-slop writing standards (zero emojis, zero marketing fluff, no "revolutionary/modern" buzzwords), snapshot terminal runs, and generate clean project structure trees.
---

# Markdown Documentation & Visual Showcase (Markdown.md)

This skill combines automated workspace detection, terminal & project tree snapshotting with the **human-coding** standard to produce sharp, authentic, and visual Markdown documentation without a single trace of AI slop.

---

## Step 0: Cek & Verifikasi Workspace Aktif Terlebih Dahulu

Sebelum mengeksekusi script snapshot atau menulis dokumentasi:
1. **Identifikasi Root Workspace:** Cari penanda repository/proyek seperti `.git/`, `AGENTS.md`, `README.md`, `pyproject.toml`, atau `package.json`.
2. **Jangan Asal Tebak Direktori:** Jangan pernah mengeksekusi tree generator di folder sembarangan (seperti parent folder atau temporary directory).
3. **Auto-Detection Bawaan:** Script `project_tree.py` sekarang memiliki logika pendeteksi root otomatis (menelusuri ke atas hingga menemukan `.git` atau `AGENTS.md`), sehingga selalu menghasilkan pohon struktur yang akurat dari root proyek.

---

## Core Principles (Inherited from `human-coding`)

1. **Zero Emoji Spam (ABSOLUTE BAN):** No emojis in headers, bullet points, or anywhere in the document. 
   * **BANNED:** `🏠 Web Desa`, `✨ Fitur Utama`, `🌐 Portal Publik`, `🔒 Panel Admin`.
   * **HUMAN STANDARD:** `Web Desa - Sistem Informasi`, `Fitur Utama`, `Portal Publik (Frontend)`, `Panel Admin`.
2. **Lead with the Operational Pain:** Never start with abstract praise or marketing fluff ("Sistem Informasi Desa modern yang dirancang khusus dengan antarmuka yang sangat ramah pengguna..."). Start with the exact technical headache the project solves (e.g., "Sistem manajemen data penduduk dan APBDes berbasis Laravel 11 untuk menggantikan rekapitulasi Excel manual di balai desa.").
3. **Real Proof in the First 2 Scrolls:** Put runnable commands and real terminal/UI output at the top.
4. **Natural Tech-Bilingual Tone:** Keep the voice conversational, blending natural Indonesian with authentic technical terms (*pipeline, drift, prod, staging, OOM*).
5. **Direct Root Assets (No Folder Clutter):** Save terminal snapshot images directly at the root level alongside `README.md` (e.g., `terminal_demo.svg`), not hidden in separate `docs/` or subfolders.

---

## 1. Project Structure Snapshotting

Never manually type trees or include junk folders (`.git`, `__pycache__`, `.venv`, `.db`).

Jalankan script generator pohon proyek yang otomatis mendeteksi workspace:
```bash
python scripts/project_tree.py --depth 3
```

Annotate the generated output with functional, one-line descriptions:
````markdown
```
crosscheckdb/
├── crosscheck/
│   ├── config.py              # Konfigurasi tabel & driver
│   ├── cli.py                 # Interface terminal CLI (Rich formatting)
│   ├── adapters/
│   │   ├── base.py            # Kontrak adapter database
│   │   ├── sqlite.py          # SQLite adapter (buat tes lokal)
│   │   ├── postgres.py        # PostgreSQL adapter (push-down md5/string_agg)
│   │   └── bigquery.py        # BigQuery adapter (DIV/TO_HEX/MD5)
│   └── engine/
│       ├── bucket.py          # Logika rentang bucket
│       └── reconciler.py      # Divide-and-conquer reconciliation engine
├── tests/
│   └── test_reconciliation.py # Unit test otomatis
├── terminal_demo.svg          # Snapshot visual eksekusi terminal (root level)
├── demo.py                    # Script simulasi data drift
└── requirements.txt           # Dependensi minimal
```
````

---

## 2. Terminal Snapshotting (Visual Proof of Execution)

Never use fabricated pseudocode when you can show real execution.

### Method A: Automated SVG Screenshot (Visual Embed at Root)
Generate a high-resolution, dark-mode terminal window SVG directly in the root directory:

```bash
python scripts/capture_terminal.py --svg terminal_demo.svg --title "Terminal" <command>
```

Embed directly in `README.md`:
```markdown
![Terminal Run](terminal_demo.svg)
```

> **Why Root Level?** It avoids creating extra folder noise (like `docs/`), keeps image paths simple, and ensures GitHub renders the image reliably on the repository homepage.

### Method B: Clean ASCII Terminal Block (Universal Text)
If embedding SVG is not desired, format terminal outputs cleanly in standard codeblocks with prompt `$`:

````markdown
```bash
$ python demo.py
[OK] Connected to database
[DIFF] DATA DRIFT DETECTED: 3 discrepancies found in 0.23s
```
````

---

## 3. Core Results & Diff Showcase

Highlight the project's primary outcome using compact Markdown tables:

````markdown
### Hasil Deteksi Selisih

| Key ID | Field | Nilai di Source | Nilai di Target | Keterangan |
|---|---|---|---|---|
| `12450` | *Seluruh Baris* | Ada (Rp50.000) | **Hilang** | Dropped packet saat ETL sync |
| `50001` | *Seluruh Baris* | **Tidak Ada** | Ada | Phantom write di warehouse |
| `41820` | `amount` | `220940.0` | `85001.0` | Pembulatan desimal beda |

**Performa:** `~217.000 baris/detik` (50.000 transaksi selesai dalam `0.23 detik`).
````

---

## 4. Standard Document Skeleton (The Anti-AI-Slop README)

Every README generated using this skill should follow this 5-part layout:

1. **Title & 1-Sentence Punchy Summary:** What it literally does.
2. **The Real Problem (Kenapa Ini Dibuat):** 2-3 sentences on the real-world operational mess it prevents.
3. **How It Works (Under the Hood):** Clear numbered bullet points explaining the core mechanism/algorithm.
4. **Quickstart & Terminal Snapshot:** 2 commands to clone and run, followed immediately by the root SVG visual snapshot.
5. **Clean Annotated Project Structure:** The tree generated by `project_tree.py` from verified workspace root.

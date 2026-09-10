---
name: min-tok
description: >-
  Enforces zero-dependency bias, native standard library utilization, anti-over-engineering, anti-YAGNI, and token-efficient lean architecture across all software projects and AI coding workflows.
  Trigger whenever proposing or installing third-party packages, designing architecture, creating helper utilities, refactoring, or generating code solutions.
  Mandates the 3-Gate Dependency Audit (Search before Import), Native Standard Library Replacement Matrix (Node/JS/TS, Python, Go, Web APIs), elimination of speculative enterprise abstractions (factories, excessive DTOs/interfaces for simple tasks), strict token conservation (diff-only output protocol), and proactive dependency de-bloating using the min-tok CLI engine.
---

# min-tok: Anti-Over-Engineering & Zero-Bloat Agent Skill

`min-tok` is an autonomous AI agent skill and developer CLI designed to enforce radical dependency restraint, architectural minimalism, and maximum token efficiency. It stops the reflexive AI habit of installing third-party packages for trivial tasks, building speculative enterprise abstractions, and exhausting context limits with verbose boilerplate dumps.

---

## 1. The Core Philosophy: Lean Engineering vs AI Bloat

AI models suffer from a statistical bias toward bloated open-source patterns—recommending outdated npm/pip packages from 2016 and wrapping 5-line functions inside multi-tier abstractions.

| Dimensi | AI Bloat Pattern (Over-Engineering) | min-tok Lean Engineering Standard |
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

---

## 3. The 5 Pillars of Perfection

### Pillar 1: Proactive De-Bloater (Auto-Purging Legacy Repos)
Bukan hanya mencegah paket baru, AI aktif membersihkan repositori lama yang sudah telanjur gemuk.
* Jalankan `min-tok scan .` untuk memindai manifest (`package.json`, `requirements.txt`, `pyproject.toml`).
* Jalankan `min-tok purge <package>` untuk merefaktor pemanggilan pustaka bloat ke native standar dan menghapus dependensi dari manifest.

### Pillar 2: The Transitive Blast-Radius Rule
* Jika sebuah pustaka untuk tugas sepele menarik $>3$ sub-dependencies pihak ketiga, pustaka tersebut **wajib ditolak** dan digantikan dengan solusi native mandiri.

### Pillar 3: Diff-Only Output Protocol (Token & Context Limit Shield)
* **DILARANG KERAS** memuntahkan ulang seluruh file kode jika perubahan $\le 30$ baris.
* Gunakan tool targeted replacement atau `min-tok diff <file1> <file2>` untuk menyajikan unified diff padat.

### Pillar 4: Tech-Stack Reality Check (Anti-Framework Bloat)
* Tolak arsitektur terdistribusi rumit jika kebutuhan sistem dapat diselesaikan dengan SQLite (mode WAL) atau single-node database.

### Pillar 5: Runtime Compatibility Matrix (Zero-Breakage Guard)
* Selalu pastikan fitur native kompatibel dengan versi runtime yang ditargetkan (`engines` di `package.json` atau versi Python).

---

## 4. CLI Commands Reference

```bash
# Scan manifests for bloat dependencies (supports package.json, requirements.txt, pyproject.toml)
node bin/min-tok.js scan . [--strict]

# Audit over-engineering score & abstraction density
node bin/min-tok.js audit . [--strict]

# Automatically purge and refactor bloat package to standard library
node bin/min-tok.js purge uuid .

# Generate compact unified diff (saves LLM tokens)
node bin/min-tok.js diff old.js new.js
```

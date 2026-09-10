# min-tok

**Zero-Dependency Anti-Over-Engineering Engine & Token Cost Shield**

`min-tok` adalah perangkat bantu baris perintah (CLI) dan agen skill mandiri untuk mendeteksi dependensi berlebih (*bloat libraries*), mengaudit rasio over-engineering arsitektur, membersihkan pustaka usang/redundant secara otomatis, serta menegakkan format unified diff yang hemat kuota limit token AI.

---

## Karakteristik Inti

1. **Strict Zero External Dependencies:** 100% dibangun menggunakan Node.js Standard Library (`node:fs`, `node:path`, `node:util`, `node:child_process`, `node:test`).
2. **Instant Execution:** Membaca manifest dan memindai kode sumber dalam hitungan milidetik tanpa mengunduh ratusan megabyte `node_modules`.
3. **Multi-Ecosystem:** Mendukung ekosistem **Node.js / TypeScript** (`package.json`) dan **Python** (`requirements.txt`).
4. **Auto-Purge Refactoring:** Secara otomatis merefaktor impor dan sintaksis kode dari paket eksternal (seperti `uuid`, `rimraf`, `mkdirp`) menjadi padanan native standar bahasa.
5. **Token Guard:** Menyediakan format unified diff ringkas untuk memangkas konsumsi token context window AI hingga 70-80%.

---

## Instalasi & Penggunaan

Dapat dijalankan langsung dengan Node.js (v18+):

```bash
# Pindai dependensi bloat di direktori saat ini
node ./bin/min-tok.js scan .

# Audit kompleksitas arsitektur & rasio abstraksi
node ./bin/min-tok.js audit .

# Bersihkan pustaka bloat dan refaktor kode otomatis ke native
node ./bin/min-tok.js purge uuid .

# Buat unified diff ringkas antara dua file (hemat limit token)
node ./bin/min-tok.js diff file_lama.js file_baru.js
```

---

## Daftar Perintah

| Perintah | Fungsi | Contoh |
| :--- | :--- | :--- |
| `scan [path]` | Memindai manifest untuk mendeteksi paket bloat dan menyarankan padanan native | `min-tok scan .` |
| `audit [path]` | Menghitung Over-Engineering Score berdasarkan LOC, layer abstraksi, dan jumlah dependensi | `min-tok audit ./src` |
| `purge <pkg> [path]` | Mengubah pemanggilan kode secara otomatis ke native dan menghapus paket dari manifest | `min-tok purge uuid .` |
| `diff <f1> <f2>` | Menghasilkan unified diff padat tanpa pemborosan token | `min-tok diff old.js new.js` |

---

## Agent Skill Usage

Repositori ini juga berfungsi sebagai AI Agent Skill. Letakkan file `SKILL.md` ke direktori konfigurasi skill agen Anda untuk mengaktifkan audit otonom anti-over-engineering.

---

## Lisensi

Didistribusikan di bawah lisensi [Apache-2.0](LICENSE). Lihat file [`LICENSE`](LICENSE) untuk informasi hak cipta dan ketentuan hukum selengkapnya.

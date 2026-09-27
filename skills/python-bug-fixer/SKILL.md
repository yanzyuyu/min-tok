---
name: python-bug-fixer
description: Menganalisis dan memperbaiki bug pada proyek Python secara deterministik. Gunakan ketika pengguna melaporkan error, traceback, atau test yang gagal.
---

# Python Bug Fixer (Elite SOP)

## Tujuan
Menemukan akar masalah (Root Cause) dan menerapkan perbaikan struktural (bukan sekadar patch) dengan mutasi token sekecil mungkin tanpa merusak perilaku lain.

## Workflow Eksekusi
1. **Traceback Analysis:** Baca stack trace dari bawah ke atas. Identifikasi file penyebab utama.
2. **Context Gathering:** Gunakan `grep_search` atau `view_file` untuk membaca fungsi yang gagal dan file terkait. JANGAN menebak isi file.
3. **Hypothesis Generation:** Buat 2 hipotesis mengapa variabel/tipe data tersebut gagal (contoh: NoneType operation, Index Out of Bounds).
4. **Surgical Fix:** Gunakan alat `replace_file_content` untuk memutasi blok kode secara persis. JANGAN menulis ulang seluruh file besar.
5. **Regression & Run:** Wajib jalankan kode via terminal (`run_command`) untuk memastikan bug hilang dan tidak ada modul lain yang pecah.
6. **Knowledge Sync:** Jika bug bersifat struktural, log ke `KNOWLEDGE_BASE.md`.

## Aturan Absolut (Guardrails)
- **Zero Empty Catches:** Dilarang menggunakan `except Exception: pass` untuk menyembunyikan error.
- **No Dependency Hallucination:** Jika modul eksternal dicurigai, baca dokumentasi `.d.ts` atau `README.md` lokal sebelum mengganti sintaks.
- **Type Safety:** Selalu tambahkan type hints (`-> int`, `: str`) pada fungsi yang diperbaiki.

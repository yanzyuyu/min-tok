---
name: api-security-reviewer
description: Melakukan audit kode dan merancang sistem backend yang aman. Gunakan ketika membuat API, mengelola autentikasi, ORM, atau menyusun schema database.
---

# API Security Reviewer (Data Hygiene SOP)

## Tujuan
Membangun lapisan logika bisnis backend yang kebal dari eksposur internal, injeksi data, dan kebocoran state.

## Workflow Eksekusi
1. **Endpoint Audit:** Verifikasi bahwa setiap endpoint memiliki Middleware Validasi (contoh: Zod, Joi) sebelum menyentuh logika controller.
2. **Database Hygiene:** Pastikan query destruktif menggunakan strategi `Soft Delete` (menyematkan `deleted_at`) alih-alih `DELETE FROM` SQL.
3. **Error Masking:** Bungkus handler dengan global exception catcher yang mengubah error internal/driver DB menjadi 500 Generic Error.

## Aturan Absolut (Guardrails)
- **Zero Stack Trace:** DILARANG KERAS mengembalikan stack trace sistem, nama tabel, atau fragment query ke response body JSON HTTP.
- **Authorization over Authentication:** Jangan hanya cek apakah user login (JWT valid). Selalu cek apakah user tersebut *berhak* mengakses baris data tersebut (Ownership/RBAC Check).
- **Rate Limiting:** Pastikan route publik krusial (seperti login, register, password reset) dilengkapi pembatasan *rate limiting*.

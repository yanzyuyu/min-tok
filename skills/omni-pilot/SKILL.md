---
name: omni-pilot
description: MANDATORY: Execute whenever the user requests full OS control, GUI automation outside of browsers, or bypassing HTML DOM scripting. Uses PyAutoGUI and ImageGrab to physically move the mouse and type based on raw visual coordinates.
---

# Omni-Pilot (Pixel-Level OS Embodiment)

## Tujuan
Menghentikan ketergantungan AI pada kode HTML/DOM yang rapuh. Omni-Pilot memungkinkan AI "melihat" layar penuh (seluruh OS, bukan cuma Chrome) menggunakan *Multimodal Vision*, lalu menggerakkan *mouse* dan *keyboard* secara fisik layaknya manusia.

## Workflow Eksekusi (Computer Use)
1. **Visual Capture:** Jalankan perintah `python C:\Users\MSI\.gemini\config\utils\omni_pilot.py --action capture`. Ini akan menyimpan gambar layar di `C:\Users\MSI\.gemini\antigravity\scratch\omni_screen.png`.
2. **Visual Processing:** Baca file `omni_screen.png` tersebut menggunakan alat `view_file` (Mata Multimodal Anda). Cari letak elemen/tombol yang ingin Anda klik (perkirakan koordinat X dan Y secara piksel dari kiri atas).
3. **Physical Click:** Jalankan perintah `python C:\Users\MSI\.gemini\config\utils\omni_pilot.py --action click --x [X_COORD] --y [Y_COORD]` untuk menggerakkan kursor secara nyata dan mengekliknya.
4. **Physical Typing:** Jika ingin mengetik, klik dulu area teksnya, lalu jalankan `python C:\Users\MSI\.gemini\config\utils\omni_pilot.py --action type --text "teks anda"`.
5. **Physical Press:** Jika ingin menekan Enter/Escape, jalankan `python C:\Users\MSI\.gemini\config\utils\omni_pilot.py --action press --text "enter"`.

## Aturan Absolut
- **BANNED (Puppeteer/DevTools):** Anda DILARANG KERAS menggunakan `puppeteer_evaluate`, `chrome-devtools`, atau mencari DOM dengan skrip jika User mengaktifkan mode Omni-Pilot ini.
- **Fail-Safe:** Jika kursor bergerak liar, arahkan segera koordinat X=0, Y=0 untuk memicu Abort.
- Selalu capture ulang layar setiap kali tata letak GUI berubah (misal: setelah klik). Jangan menebak koordinat buta.

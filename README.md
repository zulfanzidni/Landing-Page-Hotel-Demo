# Hotel Demo Resort Malang - CRO Landing Page

Landing page berkinerja tinggi yang dirancang dengan prinsip **Conversion Rate Optimization (CRO)** untuk resort keluarga fiktif *"Hotel Demo"* di kawasan sejuk Malang, Jawa Timur.

Situs ini menggunakan arsitektur web statis murni (*clean static*) berkecepatan tinggi tanpa dependensi build, siap di-deploy secara instan ke **GitHub Pages**.

---

## Fitur Unggulan CRO
1. **Direct Room Selection (Zero Friction):** Pengunjung langsung disajikan opsi kamar keluarga unggulan dengan tombol WhatsApp yang memuat teks pesan reservasi otomatis (*pre-filled message*) spesifik untuk tipe kamar tersebut.
2. **Pilar Jaminan Bebas Khawatir (*Objection Reducer*):**
   * *Best Direct Price Guarantee* (hemat hingga 20% tanpa biaya komisi OTA).
   * *Bebas Biaya Reschedule s/d H-3* (menghilangkan kecemasan keluarga).
   * *Respon Staf Asli < 5 Menit* via WhatsApp Concierge.
   * *Pembayaran Aman & E-Invoice Resmi*.
3. **Mobile-First & Sticky Thumb-Zone Bar:** Pada perangkat mobile (layar ≤ 768px), muncul bilah aksi melayang (*sticky action bar*) di bagian bawah layar dengan tombol WhatsApp kontras tinggi beranimasi pulse halus.
4. **Performa & Aksesibilitas WCAG AA:**
   * Bebas CLS (*Cumulative Layout Shift*).
   * Rasio kontras teks tombol CTA WhatsApp > 10:1 (standar AAA).
   * Touch target tombol ≥ 48px.

---

## Panduan Deploy ke GitHub Pages (1 Menit)

### Opsi A: Menggunakan GitHub CLI / Git Push
1. Buat repository baru di akun GitHub Anda (misal: `landing-page-hotel-demo`).
2. Hubungkan remote repository lokal:
   ```bash
   git remote add origin https://github.com/<USERNAME>/landing-page-hotel-demo.git
   git branch -M main
   git push -u origin main
   ```
3. Buka repository Anda di GitHub:
   * Klik tab **Settings** > **Pages** (di sidebar kiri).
   * Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   * Pilih Branch: `main` dan folder: `/ (root)`.
   * Klik tombol **Save**.
4. Website Anda akan aktif dalam hitungan detik di `https://<USERNAME>.github.io/landing-page-hotel-demo/`.

---

## Kustomisasi Nomor WhatsApp & Kamar

Seluruh data hotel, nomor telepon WhatsApp, dan katalog kamar tersentralisasi di dalam satu file: [`js/config.js`](file:///e:/Project/Landing%20Page%20Hotel%20Demo/js/config.js).

### Mengganti Nomor WhatsApp & Promo
Buka `js/config.js` dan ubah variabel:
```javascript
export const HOTEL_CONFIG = {
  name: 'Hotel Demo Resort',
  whatsappNumber: '6281234567890', // Format: 628xxxxxxxx (tanpa tanda + atau spasi)
  defaultPromoCode: 'BEBASKHAWATIR',
  ...
};
```

### Mengubah Tipe Kamar & Harga
Cukup sesuaikan array `rooms` di `js/config.js`:
```javascript
{
  id: 'deluxe-family',
  name: 'Deluxe Family Haven',
  priceOta: 'Rp 1.150.000',
  priceDirect: 'Rp 890.000',
  ...
}
```

---

## Menjalankan Secara Lokal
Karena proyek ini berbasis static HTML/CSS/JS, Anda dapat membukanya langsung di browser atau menjalankan server lokal:

```bash
# Menggunakan Python
python -m http.server 8080

# Atau menggunakan Node.js
npx serve .
```
Akses di browser melalui `http://localhost:8080`.

---

## Pengujian Otomatis
Unit test untuk konfigurasi dan generator URL WhatsApp:
```bash
node --test tests/config.test.js
```

/**
 * Hotel Demo - Konfigurasi Terpusat & Data Mock
 * Lokasi: Malang, Jawa Timur
 */

export const HOTEL_CONFIG = {
  name: 'Hotel Demo Resort',
  tagline: 'Family & Leisure Sanctuary in Malang',
  location: 'Malang, Jawa Timur',
  address: 'Jl. Pinus Sejuk No. 88, Bumiaji, Kawasan Wisata Malang - Batu, Jawa Timur',
  whatsappNumber: '6285859708014',
  defaultPromoCode: 'BEBASKHAWATIR',
  stats: {
    rating: '4.9/5',
    reviewCount: '1,280+ Ulasan Keluarga',
    csResponseTime: '< 5 Menit'
  },
  guarantees: [
    {
      id: 'best-price',
      title: 'Garansi Harga Langsung Termurah',
      description: 'Hemat hingga 20% dibandingkan platform OTA pihak ketiga. Tanpa biaya komisi tersembunyi.'
    },
    {
      id: 'free-reschedule',
      title: 'Bebas Reschedule s/d H-3',
      description: 'Agenda keluarga mendadak bergeser atau si kecil sakit? Pindah tanggal menginap tanpa biaya penalti.'
    },
    {
      id: 'fast-response',
      title: 'Respon Cepat Staf Asli < 5 Menit',
      description: 'Dilayani langsung oleh tim Concierge Hotel Demo di Malang untuk cek ketersediaan kamar secara real-time.'
    },
    {
      id: 'safe-transparent',
      title: 'Pembayaran Aman & E-Invoice Resmi',
      description: 'Terima rincian tagihan resmi dan voucher reservasi instan sebelum transfer bank/QRIS.'
    }
  ],
  rooms: [
    {
      id: 'deluxe-family',
      name: 'Deluxe Family Haven',
      badge: 'Paling Hemat untuk Keluarga Muda',
      capacity: '2 Dewasa + 1 Anak (di bawah 10 thn)',
      bed: '1 King Bed + 1 Daybed Luas',
      size: '38 m²',
      view: 'Pemandangan Kebun Pinus Sejuk',
      image: './assets/images/room-deluxe.jpg',
      priceOta: 'Rp 1.150.000',
      priceDirect: 'Rp 890.000',
      savings: 'Hemat Rp 260.000/malam',
      highlights: [
        'Free sarapan prasmanan keluarga (termasuk anak)',
        'Welcome drink hangat khas apel Malang',
        'Akses sepuasnya kolam renang air hangat',
        'Smart TV 50" dengan Disney+ & YouTube Kids'
      ]
    },
    {
      id: 'grand-pine-suite',
      name: 'Grand Pine Suite',
      badge: 'Pilihan Favorit Keluarga',
      capacity: '2 Dewasa + 2 Anak / 3 Dewasa',
      bed: '2 Queen Beds + Ruang Santai Keluarga',
      size: '54 m²',
      view: 'Balkon Pribadi Panorama Lembah Malang',
      image: './assets/images/room-suite.jpg',
      priceOta: 'Rp 1.850.000',
      priceDirect: 'Rp 1.450.000',
      savings: 'Hemat Rp 400.000/malam',
      highlights: [
        'Free sarapan prasmanan keluarga lengkap',
        'Balkon pribadi luas dengan hammock santai',
        'Bathtub keluarga dengan air hangat alami',
        'Free 1x Family Afternoon Tea & Snack',
        'Akses prioritas Kids Playground & Game Zone'
      ]
    },
    {
      id: 'private-garden-villa',
      name: 'Private Garden Family Villa',
      badge: 'Eksklusif & Private Plunge Pool',
      capacity: '4 – 6 Tamu Keluarga',
      bed: '2 Kamar Tidur (1 King + 2 Single) + Pantry',
      size: '95 m²',
      view: 'Taman Privat & Gazebo Api Unggun',
      image: './assets/images/room-villa.jpg',
      priceOta: 'Rp 3.200.000',
      priceDirect: 'Rp 2.490.000',
      savings: 'Hemat Rp 710.000/malam',
      highlights: [
        'Private heated plunge pool suhu 32°C di teras villa',
        'Free paket BBQ set keluarga di halaman privat',
        'Living room & pantry lengkap dengan microwave & kulkas',
        'Floating breakfast & sarapan prasmanan istimewa',
        'Dedicated WhatsApp concierge 24 jam'
      ]
    }
  ],
  amenities: [
    {
      title: 'Kolam Renang Air Hangat (Heated Pool)',
      description: 'Suhu air hangat terjaga 30-32°C, aman dan menyenangkan untuk anak-anak bermain di udara sejuk Malang.'
    },
    {
      title: 'Kids Creative Club & Playground',
      description: 'Area bermain indoor & outdoor yang bersih, aman, dan didampingi staf ramah anak.'
    },
    {
      title: 'Restoran Keluarga "Pinus & Rasa"',
      description: 'Menu kuliner khas Nusantara dan menu khusus anak (Kids friendly food, no MSG berlebih).'
    },
    {
      title: 'Family Campfire & Stargazing',
      description: 'Spot api unggun hangat di malam hari dengan sajian jagung manis bakar & teh serai hangat.'
    }
  ],
  faqs: [
    {
      q: 'Apakah pemesanan lewat WhatsApp aman dan resmi?',
      a: 'Sangat aman. Anda akan terhubung langsung dengan tim Concierge resmi Hotel Demo Malang. Kami akan menerbitkan format reservasi lengkap dan e-invoice resmi sebelum Anda melakukan pembayaran via transfer bank atau QRIS.'
    },
    {
      q: 'Bagaimana jika anak mendadak sakit atau kami harus reschedule?',
      a: 'Sesuai Jaminan Bebas Khawatir kami, Anda bebas memindahkan tanggal menginap hingga H-3 sebelum check-in tanpa dikenakan denda atau biaya penalti.'
    },
    {
      q: 'Apakah harga kamar via WhatsApp sudah termasuk sarapan untuk anak?',
      a: 'Ya! Semua paket keluarga pemesanan langsung sudah termasuk sarapan prasmanan untuk dewasa dan anak-anak sesuai kapasitas masing-masing tipe kamar.'
    },
    {
      q: 'Bagaimana cara konfirmasi ketersediaan kamar untuk tanggal liburan kami?',
      a: 'Cukup klik tombol "Pesan via WhatsApp" pada kamar yang Anda inginkan. Pesan otomatis sudah disiapkan, Anda tinggal mengirimkan tanggal rencana menginap Anda dan tim kami akan merespons dalam < 5 menit.'
    }
  ]
};

/**
 * Menghasilkan link WhatsApp lengkap dengan nomor dan teks pesan yang telah ter-encode.
 * @param {string} [roomName] - Nama tipe kamar yang dipilih
 * @param {string} [promoCode] - Kode promo (default: BEBASKHAWATIR)
 * @returns {string} URL WhatsApp (wa.me)
 */
export function generateWhatsAppUrl(roomName, promoCode = HOTEL_CONFIG.defaultPromoCode) {
  let message = '';
  
  if (roomName) {
    message = `Halo Tim Reservasi Hotel Demo Resort Malang,\n\nSaya tertarik untuk memesan kamar: *${roomName}* dengan promo *${promoCode}*.\n\nMohon informasi ketersediaan kamar dan panduan reservasinya untuk liburan keluarga kami. Terima kasih!`;
  } else {
    message = `Halo Tim Reservasi Hotel Demo Resort Malang,\n\nSaya ingin berkonsultasi mengenai paket liburan keluarga dan ketersediaan kamar di Hotel Demo. Mohon informasinya. Terima kasih!`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

// Support browser global window object jika di-load via <script> tag biasa
if (typeof window !== 'undefined') {
  window.HOTEL_CONFIG = HOTEL_CONFIG;
  window.generateWhatsAppUrl = generateWhatsAppUrl;
}

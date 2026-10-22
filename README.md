# HMTI Web Application

Repository resmi platform digital **HMTI** (Himpunan Mahasiswa Teknologi Informasi) Politeknik Semen Indonesia. Dibangun menggunakan **Next.js** dengan koneksi database **MySQL**.

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Teknologi](#-teknologi)
- [Prasyarat](#-prasyarat)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Struktur Proyek](#-struktur-proyek)
- [Variabel Lingkungan](#-variabel-lingkungan)
- [Akun Default](#-akun-default)
- [Kontribusi](#-kontribusi)
- [Keamanan](#-keamanan)
- [Lisensi](#-lisensi)

---

## 📖 Tentang Proyek

Aplikasi web resmi HMTI Polteksi sebagai pusat informasi dan administrasi organisasi. Fitur utama meliputi:

- Portal Berita & Pengumuman
- Galeri Karya Mahasiswa
- Informasi Kegiatan & Event
- Profil Presiden HMTI
- Visi, Misi & Deskripsi Organisasi
- Carousel Hero dinamis
- **Dashboard Admin** dengan manajemen konten lengkap
- **Sistem autentikasi** berbasis role (Admin & Editor)

---

## 🛠 Teknologi

| Teknologi | Keterangan |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React dengan App Router |
| [React 19](https://react.dev/) | Library UI |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS framework |
| [MySQL 2](https://github.com/sidorares/node-mysql2) | Driver database MySQL |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Hash & verifikasi password |
| [jose](https://github.com/panva/jose) | JWT untuk session autentikasi |

---

## ⚙️ Prasyarat

Pastikan sudah terinstal:

- **Node.js** v18+ (LTS disarankan)
- **npm** v9+
- **MySQL** v8+
- **Git**

---

## 🚀 Instalasi & Penggunaan

1. **Clone Repository**
   ```bash
   git clone https://github.com/azmil72/hmti.git
   cd hmti
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**
   ```bash
   cp .env.example .env.local
   ```
   Isi nilai yang sesuai di `.env.local` (lihat [Variabel Lingkungan](#-variabel-lingkungan)).

4. **Setup Database**
   ```bash
   mysql -u root -p < schema.sql
   ```

5. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Aplikasi berjalan di `http://localhost:3000`.

6. **Build untuk Produksi**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Struktur Proyek

```
hmti/
├── app/
│   ├── admin/          # Dashboard admin (protected)
│   ├── api/            # API Routes (auth, CRUD)
│   ├── galeri/         # Halaman galeri publik
│   ├── login/          # Halaman login
│   └── page.js         # Halaman beranda
├── components/
│   ├── admin/          # Komponen khusus dashboard
│   └── ...             # Komponen publik
├── lib/
│   ├── data/           # Fungsi query database
│   ├── db.js           # Koneksi MySQL pool
│   └── session.js      # Helper JWT session
├── public/
│   ├── assets/         # Aset statis
│   └── uploads/        # File upload (di-ignore git)
├── styles/
│   └── globals.css
├── proxy.js            # Route protection & auth middleware
└── schema.sql          # Skema & seed data database
```

---

## 🔧 Variabel Lingkungan

Buat file `.env.local` di root proyek:

```env
# Database MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=hmti

# JWT Session — ganti dengan string acak yang panjang
SESSION_SECRET=ganti-dengan-string-acak-yang-aman
```

> ⚠️ **Jangan pernah commit file `.env.local`** ke repository.

---

## 👤 Akun Default

Setelah menjalankan `schema.sql`, tersedia dua akun default (password: `admin123`):

| Email | Role | Akses |
|---|---|---|
| `admin@hmti.ac.id` | Admin | Semua menu dashboard |
| `editor@hmti.ac.id` | Editor | Semua menu kecuali Manage Users |

> ⚠️ Segera ganti password setelah pertama kali login.

---

## 🤝 Kontribusi

Kami terbuka untuk kontribusi! Baca dokumen berikut sebelum memulai:

- 📘 [CONTRIBUTING.md](CONTRIBUTING.md) — Panduan kontribusi & workflow
- 📜 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — Standar perilaku komunitas
- 🔐 [SECURITY.md](SECURITY.md) — Prosedur pelaporan kerentanan

---

## 🔐 Keamanan

Jika menemukan kerentanan keamanan, **JANGAN** buka issue publik. Baca [SECURITY.md](SECURITY.md) untuk instruksi pelaporan yang aman.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**. Lihat file [LICENSE](LICENSE) untuk detail selengkapnya.

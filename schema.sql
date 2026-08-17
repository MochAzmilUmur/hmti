  -- Jalankan script ini di MySQL untuk membuat database dan tabel

  CREATE DATABASE IF NOT EXISTS hmti CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  USE hmti;

  CREATE TABLE IF NOT EXISTS galeri (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    year VARCHAR(4) NOT NULL,
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS kegiatan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    location VARCHAR(255),
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS pengumuman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    image VARCHAR(500),
    status ENUM('aktif', 'arsip') DEFAULT 'aktif',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Seed data galeri
  INSERT INTO galeri (title, description, category, year, image) VALUES
  ('Sistem Informasi Akademik', 'Aplikasi web untuk mengelola data akademik mahasiswa dan dosen', 'Web Development', '2023', 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Web+App'),
  ('Mobile Learning App', 'Aplikasi mobile untuk pembelajaran online interaktif', 'Mobile Development', '2023', 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Mobile+App'),
  ('IoT Smart Campus', 'Sistem monitoring dan kontrol perangkat kampus berbasis IoT', 'IoT', '2023', 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=IoT+System'),
  ('AI Chatbot Assistant', 'Chatbot cerdas untuk membantu mahasiswa dalam pembelajaran', 'Artificial Intelligence', '2023', 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=AI+Bot'),
  ('E-Commerce Platform', 'Platform jual beli online dengan fitur lengkap', 'Web Development', '2022', 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=E-Commerce'),
  ('Game Edukasi AR', 'Game pembelajaran menggunakan teknologi Augmented Reality', 'Game Development', '2022', 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=AR+Game');

  -- Seed data kegiatan
  INSERT INTO kegiatan (title, description, date, location, image) VALUES
  ('IT Class Discuss', 'Mengadakan kegiatan "IT Class Discuss" yang dihadiri oleh praktisi ahli di dunia industri Teknologi Informasi.', '2024-03-15', 'Aula Politeknik Semen Indonesia', '/assets/diskusi.webp'),
  ('Seminar Teknologi', 'Menyelenggarakan seminar dengan menghadirkan praktisi dan ahli di bidang teknologi.', '2024-04-20', 'Gedung Serbaguna Polteksi', '/assets/semin.webp'),
  ('Praktikum & Lab', 'Menyediakan fasilitas laboratorium dan praktikum untuk mendukung pembelajaran praktis mahasiswa.', '2024-05-10', 'Laboratorium TI Polteksi', '/assets/ti24prak.webp'),
  ('Kegiatan Sosial - IT Goes To School', 'Mengadakan kegiatan sosial dan pengabdian masyarakat untuk menerapkan ilmu teknologi informasi.', '2024-06-05', 'SMA Negeri 1 Gresik', '/assets/itgoestoschool.webp'),
  ('Kunjungan Industri', 'Membangun jaringan dengan industri dan institusi lain untuk membuka peluang magang dan karir.', '2024-07-12', 'PT Petrokimia Gresik', '/assets/kunjunganpetro.webp');

  -- Seed data pengumuman
  INSERT INTO pengumuman (title, content, date, status) VALUES
  ('Pendaftaran Anggota Baru HMTI 2024', 'Dibuka pendaftaran anggota baru HMTI Polteksi periode 2024-2025. Segera daftarkan diri Anda dan jadilah bagian dari keluarga besar HMTI.', '2024-08-01', 'aktif'),
  ('Webinar Keamanan Jaringan', 'HMTI Polteksi mengadakan webinar bertema Keamanan Jaringan bersama praktisi industri. Terbuka untuk seluruh mahasiswa Teknologi Informasi.', '2024-08-15', 'aktif'),
  ('Hasil Pemilihan Presiden HMTI 2025', 'Selamat kepada Bagas Satria Aribowo yang terpilih sebagai Presiden HMTI Polteksi periode 2025-2026.', '2024-12-20', 'arsip');

  -- Tabel president
  CREATE TABLE IF NOT EXISTS president (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    gelar_jabatan VARCHAR(100),
    masa_jabatan VARCHAR(50),
    foto VARCHAR(500),
    motto TEXT,
    visi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );



-- Tabel visi_misi
CREATE TABLE IF NOT EXISTS visi_misi (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipe ENUM('visi', 'misi') NOT NULL,
  konten TEXT NOT NULL,
  urutan INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel tentang (deskripsi HMTI)
CREATE TABLE IF NOT EXISTS tentang (
  id INT AUTO_INCREMENT PRIMARY KEY,
  paragraf TEXT NOT NULL,
  foto VARCHAR(500),
  urutan INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel carousel
CREATE TABLE IF NOT EXISTS carousel (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image VARCHAR(500) NOT NULL,
  judul VARCHAR(255),
  subjudul VARCHAR(255),
  urutan INT DEFAULT 0,
  aktif TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data tentang
INSERT INTO tentang (paragraf, foto, urutan) VALUES
('HMTI Polteksi (Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia) didirikan pada 2024 untuk mewakili suara mahasiswa di bidang teknologi informasi. Organisasi ini bertujuan memperkuat peran mahasiswa dalam kebijakan akademik dan sosial, menggali potensi akademik dan non-akademik, serta membangun jaringan dengan dunia industri.', '/assets/seminar.webp', 1),
('Dengan visi menjadi program studi unggulan, HMTI Polteksi berkomitmen untuk menghasilkan lulusan yang kompeten, berintegritas, dan siap berkontribusi pada pengembangan teknologi berkelanjutan demi kemajuan masyarakat.', NULL, 2);

-- Seed data carousel
INSERT INTO carousel (image, judul, subjudul, urutan, aktif) VALUES
('/assets/seminar.webp', 'Himpunan Mahasiswa Teknologi Informasi', 'Bersama, Berkarya, Bersinergi Membangun Teknologi', 1, 1),
('/assets/diskusi.webp', 'IT Class Discuss', 'Menghubungkan Mahasiswa dengan Praktisi Industri', 2, 1),
('/assets/HMTI.webp', 'HMTI Polteksi 2024', 'Politeknik Semen Indonesia', 3, 1);

-- Seed data visi_misi
INSERT INTO visi_misi (tipe, konten, urutan) VALUES
('visi', 'Menjadi program studi unggulan di bidang Teknologi Informasi yang berkontribusi pada pengembangan teknologi berkelanjutan, serta menghasilkan lulusan yang berkompeten, berintegritas, dan mampu memanfaatkan teknologi untuk kemajuan sosial dan ekonomi masyarakat.', 1),
('misi', 'Bermanfaat untuk memecahkan masalah sosial, ekonomi, dan lingkungan menggunakan teknologi informasi.', 1),
('misi', 'Menyediakan pendidikan berkualitas yang berfokus pada penguasaan teknologi informasi, dengan penekanan pada pengembangan soft skill dan hard skill mahasiswa.', 2),
('misi', 'Membangun kemitraan dengan industri untuk menghubungkan mahasiswa dengan peluang magang, kerja sama proyek, dan peluang karir di dunia industri.', 3),
('misi', 'Mengembangkan budaya belajar seumur hidup yang mendorong mahasiswa untuk terus meningkatkan keterampilan dan adaptasi terhadap perkembangan teknologi yang cepat.', 4);

-- Tabel users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor') DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data users (password: admin123)
INSERT INTO users (nama, email, password, role) VALUES
('Super Admin', 'admin@hmti.ac.id', '$2b$10$WmspiVHJAi5dkCeZ/S27JujsbzLAvsTur2K3Rw05wkgrEP7RO0IIK', 'admin'),
('Editor HMTI', 'editor@hmti.ac.id', '$2b$10$WmspiVHJAi5dkCeZ/S27JujsbzLAvsTur2K3Rw05wkgrEP7RO0IIK', 'editor');

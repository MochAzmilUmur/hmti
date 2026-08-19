-- ============================================================
-- HMTI Polteksi — Database Schema
-- Engine  : MariaDB / MySQL 8+
-- Charset : utf8mb4_unicode_ci
-- Jalankan: mysql -u root -p < schema.sql
-- ============================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

CREATE DATABASE IF NOT EXISTS `hmti`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `hmti`;

-- ------------------------------------------------------------
-- Tabel: carousel
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `carousel` (
  `id`         int(11)      NOT NULL AUTO_INCREMENT,
  `image`      varchar(500) NOT NULL,
  `judul`      varchar(255) DEFAULT NULL,
  `subjudul`   varchar(255) DEFAULT NULL,
  `urutan`     int(11)      DEFAULT 0,
  `aktif`      tinyint(1)   DEFAULT 1,
  `created_at` timestamp    NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: galeri
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `galeri` (
  `id`          int(11)      NOT NULL AUTO_INCREMENT,
  `title`       varchar(255) NOT NULL,
  `description` text         DEFAULT NULL,
  `category`    varchar(100) NOT NULL,
  `year`        varchar(4)   NOT NULL,
  `image`       varchar(500) DEFAULT NULL,
  `created_at`  timestamp    NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: kegiatan
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `kegiatan` (
  `id`          int(11)      NOT NULL AUTO_INCREMENT,
  `title`       varchar(255) NOT NULL,
  `description` text         DEFAULT NULL,
  `date`        date         NOT NULL,
  `location`    varchar(255) DEFAULT NULL,
  `image`       varchar(500) DEFAULT NULL,
  `created_at`  timestamp    NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: pengumuman
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `pengumuman` (
  `id`         int(11)               NOT NULL AUTO_INCREMENT,
  `title`      varchar(255)          NOT NULL,
  `content`    text                  NOT NULL,
  `date`       date                  NOT NULL,
  `image`      varchar(500)          DEFAULT NULL,
  `status`     enum('aktif','arsip') DEFAULT 'aktif',
  `created_at` timestamp             NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: president
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `president` (
  `id`            int(11)      NOT NULL AUTO_INCREMENT,
  `nama`          varchar(255) NOT NULL,
  `gelar_jabatan` varchar(100) DEFAULT NULL,
  `masa_jabatan`  varchar(50)  DEFAULT NULL,
  `foto`          varchar(500) DEFAULT NULL,
  `motto`         text         DEFAULT NULL,
  `visi`          text         DEFAULT NULL,
  `created_at`    timestamp    NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: tentang
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `tentang` (
  `id`         int(11)   NOT NULL AUTO_INCREMENT,
  `paragraf`   text      NOT NULL,
  `foto`       varchar(500) DEFAULT NULL,
  `urutan`     int(11)   DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: visi_misi
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `visi_misi` (
  `id`         int(11)              NOT NULL AUTO_INCREMENT,
  `tipe`       enum('visi','misi')  NOT NULL,
  `konten`     text                 NOT NULL,
  `urutan`     int(11)              DEFAULT 0,
  `created_at` timestamp            NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Tabel: users
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id`         int(11)               NOT NULL AUTO_INCREMENT,
  `nama`       varchar(255)          NOT NULL,
  `email`      varchar(255)          NOT NULL,
  `password`   varchar(255)          NOT NULL,
  `role`       enum('admin','editor') DEFAULT 'editor',
  `created_at` timestamp             NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Seed Data
-- ============================================================

-- Carousel
INSERT INTO `carousel` (`image`, `judul`, `subjudul`, `urutan`, `aktif`) VALUES
('/uploads/hero-1.webp', 'Himpunan Mahasiswa Teknologi Informasi POLTEKSI', 'Berkarya Dengan Teknologi', 1, 1),
('/uploads/hero-2.webp', 'Ayo, Berinovasi Bersama HMTI', 'Bangun relasi, kembangkan potensi, dan ciptakan kontribusi nyata bersama.', 2, 1);

-- Galeri
INSERT INTO `galeri` (`title`, `description`, `category`, `year`, `image`) VALUES
('Mobile Learning App', 'Aplikasi mobile untuk pembelajaran online interaktif', 'Mobile Development', '2024', '/uploads/galeri-1.webp');

-- Kegiatan
INSERT INTO `kegiatan` (`title`, `description`, `date`, `location`, `image`) VALUES
('IT Class Discuss',   'Mengadakan kegiatan diskusi santai yang dihadiri oleh praktisi ahli di dunia industri Teknologi Informasi.', '2025-07-09', 'Dalem Lahan',              '/uploads/kegiatan-1.webp'),
('Seminar Teknologi',  'Menyelenggarakan seminar dengan menghadirkan praktisi dan ahli di bidang teknologi untuk berbagi pengalaman dan wawasan.', '2024-12-17', 'Star Coffee', '/uploads/kegiatan-2.webp'),
('Praktikum & Lab',    'Menyediakan fasilitas laboratorium dan praktikum untuk mendukung pembelajaran praktis mahasiswa.', '2024-04-11', 'Lab Teknologi Informasi',  '/uploads/kegiatan-3.webp'),
('Kegiatan Sosial',    'Mengadakan kegiatan sosial dan pengabdian masyarakat untuk menerapkan ilmu teknologi informasi dalam membantu masyarakat.', '2023-09-19', 'SMA Negeri 1 Lamongan', '/uploads/kegiatan-4.webp'),
('Kunjungan Industri', 'Membangun jaringan dengan industri dan institusi lain untuk membuka peluang magang dan karir bagi mahasiswa.', '2026-02-12', 'Petrokimia Gresik',        '/uploads/kegiatan-5.webp');

-- Pengumuman
INSERT INTO `pengumuman` (`title`, `content`, `date`, `image`, `status`) VALUES
('Pendaftaran Anggota Baru', 'Kesempatan untuk menjadi bagian dari keluarga besar HMTI akan segera dibuka!\nSiapkan diri kamu dan jangan sampai ketinggalan informasi pendaftarannya.', '2026-08-15', '/uploads/pengumuman-1.webp', 'aktif');

-- President
INSERT INTO `president` (`nama`, `gelar_jabatan`, `masa_jabatan`, `foto`, `motto`, `visi`) VALUES
(
  'Muhammad Brillian Mujahid Kamal', 'Ketua HMTI', '2024-2025', '/uploads/president-1.webp',
  'Berkomitmen untuk terus memberikan kontribusi positif di dunia pendidikan dan teknologi. Tujuan saya adalah menciptakan generasi mahasiswa yang aware terhadap perkembangan teknologi dan siap berkontribusi dengan penuh tanggung jawab dalam dunia digital, membentuk mereka menjadi pemimpin masa depan yang inovatif.',
  'Selama menjabat sebagai Ketua HMTI Polteksi, saya memimpin program-program seperti ITGoesToSchool untuk edukasi teknologi, Webinar Keamanan Jaringan untuk meningkatkan kesadaran siber, Class Discuss tentang tren IT, dan Seminar Media Sosial untuk penggunaan bijak media sosial.'
),
(
  'Bagas Satria Aribowo', 'Ketua HMTI', '2025-2026', '/uploads/president-2.webp',
  'Membangun komunitas tempat mahasiswa TI bisa berkembang, berinovasi, dan saling mendukung dalam mencapai potensi terbaik mereka.',
  'Terciptanya lingkungan belajar yang nyaman dan kolaboratif, di mana mahasiswa TI tidak hanya memperoleh pengetahuan teknis, tetapi juga mampu mengasah keterampilan berpikir kritis, bekerja sama dalam tim.'
);

-- Tentang
INSERT INTO `tentang` (`paragraf`, `foto`, `urutan`) VALUES
(
  'HMTI Polteksi (Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia) didirikan pada 2024 untuk mewakili suara mahasiswa di bidang teknologi informasi. Organisasi ini bertujuan memperkuat peran mahasiswa dalam kebijakan akademik dan sosial, menggali potensi akademik dan non-akademik, serta membangun jaringan dengan dunia industri.\n\nDengan visi menjadi program studi unggulan, HMTI Polteksi berkomitmen untuk menghasilkan lulusan yang kompeten, berintegritas, dan siap berkontribusi pada pengembangan teknologi berkelanjutan demi kemajuan masyarakat.',
  '/uploads/tentang-1.webp',
  1
);

-- Visi & Misi
INSERT INTO `visi_misi` (`tipe`, `konten`, `urutan`) VALUES
('visi', 'Menjadi program studi unggulan di bidang Teknologi Informasi yang berkontribusi pada pengembangan teknologi berkelanjutan, serta menghasilkan lulusan yang berkompeten, berintegritas, dan mampu memanfaatkan teknologi untuk kemajuan sosial dan ekonomi masyarakat.', 1),
('misi', 'Bermanfaat untuk memecahkan masalah sosial, ekonomi, dan lingkungan menggunakan teknologi informasi.', 1),
('misi', 'Menyediakan pendidikan berkualitas yang berfokus pada penguasaan teknologi informasi, dengan penekanan pada pengembangan soft skill dan hard skill mahasiswa.', 2),
('misi', 'Membangun kemitraan dengan industri untuk menghubungkan mahasiswa dengan peluang magang, kerja sama proyek, dan peluang karir di dunia industri.', 3),
('misi', 'Mengembangkan budaya belajar seumur hidup yang mendorong mahasiswa untuk terus meningkatkan keterampilan dan adaptasi terhadap perkembangan teknologi yang cepat.', 4);

-- Users (password default: admin123 — segera ganti setelah login pertama)
INSERT INTO `users` (`nama`, `email`, `password`, `role`) VALUES
('Admin HMTI',   'admin@gmail.com',  '$2b$10$WmspiVHJAi5dkCeZ/S27JujsbzLAvsTur2K3Rw05wkgrEP7RO0IIK', 'admin'),
('Editor HMTI',  'editor@gmail.com', '$2b$10$WmspiVHJAi5dkCeZ/S27JujsbzLAvsTur2K3Rw05wkgrEP7RO0IIK', 'editor');

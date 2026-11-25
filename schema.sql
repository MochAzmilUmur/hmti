
-- ------------------------------------------------------------
-- Tabel: carousel
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS carousel (
  id         SERIAL PRIMARY KEY,
  image      VARCHAR(500) NOT NULL,
  judul      VARCHAR(255),
  subjudul   VARCHAR(255),
  urutan     INTEGER DEFAULT 0,
  aktif      SMALLINT DEFAULT 1 CHECK (aktif IN (0, 1)),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: galeri
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS galeri (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  description TEXT,
  category    VARCHAR(100) NOT NULL,
  year        VARCHAR(4) NOT NULL,
  image       VARCHAR(500),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: kegiatan
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS kegiatan (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  description TEXT,
  date        DATE NOT NULL,
  location    VARCHAR(255),
  image       VARCHAR(500),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: pengumuman
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pengumuman (
  id         SERIAL PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  content    TEXT NOT NULL,
  date       DATE NOT NULL,
  image      VARCHAR(500),
  status     TEXT DEFAULT 'aktif' CHECK (status IN ('aktif', 'arsip')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: president
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS president (
  id            SERIAL PRIMARY KEY,
  nama          VARCHAR(255) NOT NULL,
  gelar_jabatan VARCHAR(100),
  masa_jabatan  VARCHAR(50),
  foto          VARCHAR(500),
  motto         TEXT,
  visi          TEXT,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: tentang
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tentang (
  id         SERIAL PRIMARY KEY,
  paragraf   TEXT NOT NULL,
  foto       VARCHAR(500),
  urutan     INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: visi_misi
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS visi_misi (
  id         SERIAL PRIMARY KEY,
  tipe       TEXT NOT NULL CHECK (tipe IN ('visi', 'misi')),
  konten     TEXT NOT NULL,
  urutan     INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Tabel: users
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  nama       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  role       TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

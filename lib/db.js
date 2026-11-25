import postgres from 'postgres';

let client;
let ready;

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS carousel (
    id SERIAL PRIMARY KEY,
    image VARCHAR(500) NOT NULL,
    judul VARCHAR(255),
    subjudul VARCHAR(255),
    urutan INTEGER DEFAULT 0,
    aktif SMALLINT DEFAULT 1 CHECK (aktif IN (0, 1)),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS galeri (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    year VARCHAR(4) NOT NULL,
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS kegiatan (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    location VARCHAR(255),
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS pengumuman (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    image VARCHAR(500),
    status TEXT DEFAULT 'aktif' CHECK (status IN ('aktif', 'arsip')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS president (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    gelar_jabatan VARCHAR(100),
    masa_jabatan VARCHAR(50),
    foto VARCHAR(500),
    motto TEXT,
    visi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS tentang (
    id SERIAL PRIMARY KEY,
    paragraf TEXT NOT NULL,
    foto VARCHAR(500),
    urutan INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS visi_misi (
    id SERIAL PRIMARY KEY,
    tipe TEXT NOT NULL CHECK (tipe IN ('visi', 'misi')),
    konten TEXT NOT NULL,
    urutan INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
];

const SEED = {
  carousel: {
    columns: ['image', 'judul', 'subjudul', 'urutan', 'aktif'],
    rows: [
      ['/uploads/hero-1.webp', 'Himpunan Mahasiswa Teknologi Informasi POLTEKSI', 'Berkarya Dengan Teknologi', 1, 1],
      ['/uploads/hero-2.webp', 'Ayo, Berinovasi Bersama HMTI', 'Bangun relasi, kembangkan potensi, dan ciptakan kontribusi nyata bersama.', 2, 1],
    ],
  },
  galeri: {
    columns: ['title', 'description', 'category', 'year', 'image'],
    rows: [
      ['Mobile Learning App', 'Aplikasi mobile untuk pembelajaran online interaktif', 'Mobile Development', '2024', '/uploads/galeri-1.webp'],
    ],
  },
  kegiatan: {
    columns: ['title', 'description', 'date', 'location', 'image'],
    rows: [
      ['IT Class Discuss', 'Mengadakan kegiatan diskusi santai yang dihadiri oleh praktisi ahli di dunia industri Teknologi Informasi.', '2025-07-09', 'Dalem Lahan', '/uploads/kegiatan-1.webp'],
      ['Seminar Teknologi', 'Menyelenggarakan seminar dengan menghadirkan praktisi dan ahli di bidang teknologi untuk berbagi pengalaman dan wawasan.', '2024-12-17', 'Star Coffee', '/uploads/kegiatan-2.webp'],
      ['Praktikum & Lab', 'Menyediakan fasilitas laboratorium dan praktikum untuk mendukung pembelajaran praktis mahasiswa.', '2024-04-11', 'Lab Teknologi Informasi', '/uploads/kegiatan-3.webp'],
      ['Kegiatan Sosial', 'Mengadakan kegiatan sosial dan pengabdian masyarakat untuk menerapkan ilmu teknologi informasi dalam membantu masyarakat.', '2023-09-19', 'SMA Negeri 1 Lamongan', '/uploads/kegiatan-4.webp'],
      ['Kunjungan Industri', 'Membangun jaringan dengan industri dan institusi lain untuk membuka peluang magang dan karir bagi mahasiswa.', '2026-02-12', 'Petrokimia Gresik', '/uploads/kegiatan-5.webp'],
    ],
  },
  pengumuman: {
    columns: ['title', 'content', 'date', 'image', 'status'],
    rows: [
      ['Pendaftaran Anggota Baru', 'Kesempatan untuk menjadi bagian dari keluarga besar HMTI akan segera dibuka!\nSiapkan diri kamu dan jangan sampai ketinggalan informasi pendaftarannya.', '2026-08-15', '/uploads/pengumuman-1.webp', 'aktif'],
    ],
  },
  president: {
    columns: ['nama', 'gelar_jabatan', 'masa_jabatan', 'foto', 'motto', 'visi'],
    rows: [
      [
        'Muhammad Brillian Mujahid Kamal', 'Ketua HMTI', '2024-2025', '/uploads/president-1.webp',
        'Berkomitmen untuk terus memberikan kontribusi positif di dunia pendidikan dan teknologi. Tujuan saya adalah menciptakan generasi mahasiswa yang aware terhadap perkembangan teknologi dan siap berkontribusi dengan penuh tanggung jawab dalam dunia digital, membentuk mereka menjadi pemimpin masa depan yang inovatif.',
        'Selama menjabat sebagai Ketua HMTI Polteksi, saya memimpin program-program seperti ITGoesToSchool untuk edukasi teknologi, Webinar Keamanan Jaringan untuk meningkatkan kesadaran siber, Class Discuss tentang tren IT, dan Seminar Media Sosial untuk penggunaan bijak media sosial.',
      ],
      [
        'Bagas Satria Aribowo', 'Ketua HMTI', '2025-2026', '/uploads/president-2.webp',
        'Membangun komunitas tempat mahasiswa TI bisa berkembang, berinovasi, dan saling mendukung dalam mencapai potensi terbaik mereka.',
        'Terciptanya lingkungan belajar yang nyaman dan kolaboratif, di mana mahasiswa TI tidak hanya memperoleh pengetahuan teknis, tetapi juga mampu mengasah keterampilan berpikir kritis, bekerja sama dalam tim.',
      ],
    ],
  },
  tentang: {
    columns: ['paragraf', 'foto', 'urutan'],
    rows: [
      [
        'HMTI Polteksi (Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia) didirikan pada 2024 untuk mewakili suara mahasiswa di bidang teknologi informasi. Organisasi ini bertujuan memperkuat peran mahasiswa dalam kebijakan akademik dan sosial, menggali potensi akademik dan non-akademik, serta membangun jaringan dengan dunia industri.\n\nDengan visi menjadi program studi unggulan, HMTI Polteksi berkomitmen untuk menghasilkan lulusan yang kompeten, berintegritas, dan siap berkontribusi pada pengembangan teknologi berkelanjutan demi kemajuan masyarakat.',
        '/uploads/tentang-1.webp',
        1,
      ],
    ],
  },
  visi_misi: {
    columns: ['tipe', 'konten', 'urutan'],
    rows: [
      ['visi', 'Menjadi program studi unggulan di bidang Teknologi Informasi yang berkontribusi pada pengembangan teknologi berkelanjutan, serta menghasilkan lulusan yang berkompeten, berintegritas, dan mampu memanfaatkan teknologi untuk kemajuan sosial dan ekonomi masyarakat.', 1],
      ['misi', 'Bermanfaat untuk memecahkan masalah sosial, ekonomi, dan lingkungan menggunakan teknologi informasi.', 1],
      ['misi', 'Menyediakan pendidikan berkualitas yang berfokus pada penguasaan teknologi informasi, dengan penekanan pada pengembangan soft skill dan hard skill mahasiswa.', 2],
      ['misi', 'Membangun kemitraan dengan industri untuk menghubungkan mahasiswa dengan peluang magang, kerja sama proyek, dan peluang karir di dunia industri.', 3],
      ['misi', 'Mengembangkan budaya belajar seumur hidup yang mendorong mahasiswa untuk terus meningkatkan keterampilan dan adaptasi terhadap perkembangan teknologi yang cepat.', 4],
    ],
  },
};

async function migrate(db) {
  await db.begin(async (tx) => {
    // Kunci agar beberapa instance serverless tidak membuat tabel/mengisi seed bersamaan.
    await tx`SELECT pg_advisory_xact_lock(727274)`;

    for (const statement of SCHEMA) {
      await tx.unsafe(statement);
    }

    for (const [table, { columns, rows }] of Object.entries(SEED)) {
      const [{ count }] = await tx.unsafe(`SELECT COUNT(*)::int AS count FROM ${table}`);
      if (count > 0) continue;
      for (const values of rows) {
        const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        await tx.unsafe(
          `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`,
          values
        );
      }
    }
  });

  return db;
}

function getClient() {
  if (!client) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL belum diset');
    }
    // prepare: false agar kompatibel dengan transaction pooler Supabase.
    client = postgres(process.env.DATABASE_URL, { ssl: 'require', prepare: false });
  }
  return client;
}

export async function query(strings, ...values) {
  if (!ready) {
    ready = migrate(getClient()).catch((error) => {
      ready = undefined;
      throw error;
    });
  }
  const db = await ready;
  return db(strings, ...values.map((value) => (value === undefined ? null : value)));
}

import pool from '../db';

export async function getCarouselData() {
  const [rows] = await pool.query('SELECT * FROM carousel ORDER BY urutan ASC');
  return rows;
}

export async function getCarouselById(id) {
  const [rows] = await pool.query('SELECT * FROM carousel WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createCarousel({ image, judul, subjudul, urutan = 0, aktif = 1 }) {
  const [result] = await pool.query(
    'INSERT INTO carousel (image, judul, subjudul, urutan, aktif) VALUES (?, ?, ?, ?, ?)',
    [image, judul, subjudul, urutan, aktif]
  );
  return { id: result.insertId, image, judul, subjudul, urutan, aktif };
}

export async function updateCarousel(id, { image, judul, subjudul, urutan, aktif }) {
  const [result] = await pool.query(
    'UPDATE carousel SET image=?, judul=?, subjudul=?, urutan=?, aktif=? WHERE id=?',
    [image, judul, subjudul, urutan, aktif, id]
  );
  if (result.affectedRows === 0) return null;
  return getCarouselById(id);
}

export async function deleteCarousel(id) {
  const [result] = await pool.query('DELETE FROM carousel WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

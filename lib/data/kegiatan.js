import pool from '../db';

export async function getKegiatanData() {
  const [rows] = await pool.query('SELECT * FROM kegiatan ORDER BY date DESC');
  return rows;
}

export async function getKegiatanById(id) {
  const [rows] = await pool.query('SELECT * FROM kegiatan WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createKegiatan({ title, description, date, location, image }) {
  const [result] = await pool.query(
    'INSERT INTO kegiatan (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)',
    [title, description, date, location, image]
  );
  return { id: result.insertId, title, description, date, location, image };
}

export async function updateKegiatan(id, { title, description, date, location, image }) {
  const [result] = await pool.query(
    'UPDATE kegiatan SET title=?, description=?, date=?, location=?, image=? WHERE id=?',
    [title, description, date, location, image, id]
  );
  if (result.affectedRows === 0) return null;
  return getKegiatanById(id);
}

export async function deleteKegiatan(id) {
  const [result] = await pool.query('DELETE FROM kegiatan WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

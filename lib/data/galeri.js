import pool from '../db';

export async function getGaleriData() {
  const [rows] = await pool.query('SELECT * FROM galeri ORDER BY created_at DESC');
  return rows;
}

export async function getGaleriById(id) {
  const [rows] = await pool.query('SELECT * FROM galeri WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createGaleri({ title, description, category, year, image }) {
  const [result] = await pool.query(
    'INSERT INTO galeri (title, description, category, year, image) VALUES (?, ?, ?, ?, ?)',
    [title, description, category, year, image]
  );
  return { id: result.insertId, title, description, category, year, image };
}

export async function updateGaleri(id, { title, description, category, year, image }) {
  const [result] = await pool.query(
    'UPDATE galeri SET title=?, description=?, category=?, year=?, image=? WHERE id=?',
    [title, description, category, year, image, id]
  );
  if (result.affectedRows === 0) return null;
  return getGaleriById(id);
}

export async function deleteGaleri(id) {
  const [result] = await pool.query('DELETE FROM galeri WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

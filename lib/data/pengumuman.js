import pool from '../db';

export async function getPengumumanData() {
  const [rows] = await pool.query('SELECT * FROM pengumuman ORDER BY date DESC');
  return rows;
}

export async function getPengumumanById(id) {
  const [rows] = await pool.query('SELECT * FROM pengumuman WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createPengumuman({ title, content, date, image, status = 'aktif' }) {
  const [result] = await pool.query(
    'INSERT INTO pengumuman (title, content, date, image, status) VALUES (?, ?, ?, ?, ?)',
    [title, content, date, image, status]
  );
  return { id: result.insertId, title, content, date, image, status };
}

export async function updatePengumuman(id, { title, content, date, image, status }) {
  const [result] = await pool.query(
    'UPDATE pengumuman SET title=?, content=?, date=?, image=?, status=? WHERE id=?',
    [title, content, date, image, status, id]
  );
  if (result.affectedRows === 0) return null;
  return getPengumumanById(id);
}

export async function deletePengumuman(id) {
  const [result] = await pool.query('DELETE FROM pengumuman WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

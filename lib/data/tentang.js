import pool from '../db';

export async function getTentangData() {
  const [rows] = await pool.query('SELECT * FROM tentang ORDER BY urutan ASC');
  return rows;
}

export async function getTentangById(id) {
  const [rows] = await pool.query('SELECT * FROM tentang WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createTentang({ paragraf, foto }) {
  const [result] = await pool.query(
    'INSERT INTO tentang (paragraf, foto) VALUES (?, ?)',
    [paragraf, foto]
  );
  return { id: result.insertId, paragraf, foto };
}

export async function updateTentang(id, { paragraf, foto }) {
  const [result] = await pool.query(
    'UPDATE tentang SET paragraf=?, foto=? WHERE id=?',
    [paragraf, foto, id]
  );
  if (result.affectedRows === 0) return null;
  return getTentangById(id);
}

export async function deleteTentang(id) {
  const [result] = await pool.query('DELETE FROM tentang WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

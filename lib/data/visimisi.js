import pool from '../db';

export async function getVisiMisiData() {
  const [rows] = await pool.query('SELECT * FROM visi_misi ORDER BY tipe, urutan ASC');
  return rows;
}

export async function getVisiMisiById(id) {
  const [rows] = await pool.query('SELECT * FROM visi_misi WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createVisiMisi({ tipe, konten, urutan = 0 }) {
  const [result] = await pool.query(
    'INSERT INTO visi_misi (tipe, konten, urutan) VALUES (?, ?, ?)',
    [tipe, konten, urutan]
  );
  return { id: result.insertId, tipe, konten, urutan };
}

export async function updateVisiMisi(id, { tipe, konten, urutan }) {
  const [result] = await pool.query(
    'UPDATE visi_misi SET tipe=?, konten=?, urutan=? WHERE id=?',
    [tipe, konten, urutan, id]
  );
  if (result.affectedRows === 0) return null;
  return getVisiMisiById(id);
}

export async function deleteVisiMisi(id) {
  const [result] = await pool.query('DELETE FROM visi_misi WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

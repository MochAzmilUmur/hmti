import pool from '../db';

export async function getPresidentData() {
  const [rows] = await pool.query('SELECT * FROM president ORDER BY created_at DESC');
  return rows;
}

export async function getPresidentById(id) {
  const [rows] = await pool.query('SELECT * FROM president WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createPresident({ nama, gelar_jabatan, masa_jabatan, foto, motto, visi }) {
  const [result] = await pool.query(
    'INSERT INTO president (nama, gelar_jabatan, masa_jabatan, foto, motto, visi) VALUES (?, ?, ?, ?, ?, ?)',
    [nama, gelar_jabatan, masa_jabatan, foto, motto, visi]
  );
  return { id: result.insertId, nama, gelar_jabatan, masa_jabatan, foto, motto, visi };
}

export async function updatePresident(id, { nama, gelar_jabatan, masa_jabatan, foto, motto, visi }) {
  const [result] = await pool.query(
    'UPDATE president SET nama=?, gelar_jabatan=?, masa_jabatan=?, foto=?, motto=?, visi=? WHERE id=?',
    [nama, gelar_jabatan, masa_jabatan, foto, motto, visi, id]
  );
  if (result.affectedRows === 0) return null;
  return getPresidentById(id);
}

export async function deletePresident(id) {
  const [result] = await pool.query('DELETE FROM president WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

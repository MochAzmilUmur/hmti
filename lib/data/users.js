import pool from '../db';

export async function getUsersData() {
  const [rows] = await pool.query('SELECT id, nama, email, role, created_at FROM users ORDER BY created_at DESC');
  return rows;
}

export async function getUserById(id) {
  const [rows] = await pool.query('SELECT id, nama, email, role, created_at FROM users WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function getUserByEmail(email) {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
}

export async function createUser({ nama, email, password, role = 'editor' }) {
  const [result] = await pool.query(
    'INSERT INTO users (nama, email, password, role) VALUES (?, ?, ?, ?)',
    [nama, email, password, role]
  );
  return { id: result.insertId, nama, email, role };
}

export async function updateUser(id, { nama, email, role }) {
  const [result] = await pool.query(
    'UPDATE users SET nama=?, email=?, role=? WHERE id=?',
    [nama, email, role, id]
  );
  if (result.affectedRows === 0) return null;
  return getUserById(id);
}

export async function deleteUser(id) {
  const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

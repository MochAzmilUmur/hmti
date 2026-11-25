import { query } from '../db';

export async function getUsersData() {
  return query`SELECT id, nama, email, role, created_at FROM users ORDER BY created_at DESC`;
}

export async function getUserById(id) {
  const rows = await query`SELECT id, nama, email, role, created_at FROM users WHERE id = ${id}`;
  return rows[0] || null;
}

export async function getUserByEmail(email) {
  const rows = await query`SELECT * FROM users WHERE email = ${email}`;
  return rows[0] || null;
}

export async function createUser({ nama, email, password, role = 'editor' }) {
  const [row] = await query`
    INSERT INTO users (nama, email, password, role)
    VALUES (${nama}, ${email}, ${password}, ${role})
    RETURNING id, nama, email, role`;
  return row;
}

export async function updateUser(id, { nama, email, role }) {
  const [row] = await query`
    UPDATE users SET nama=${nama}, email=${email}, role=${role}
    WHERE id=${id}
    RETURNING id, nama, email, role`;
  return row || null;
}

export async function deleteUser(id) {
  const rows = await query`DELETE FROM users WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

import { query } from '../db';

export async function getPengumumanData() {
  return query`SELECT * FROM pengumuman ORDER BY date DESC`;
}

export async function getPengumumanById(id) {
  const rows = await query`SELECT * FROM pengumuman WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createPengumuman({ title, content, date, image, status = 'aktif' }) {
  const [row] = await query`
    INSERT INTO pengumuman (title, content, date, image, status)
    VALUES (${title}, ${content}, ${date}, ${image}, ${status})
    RETURNING *`;
  return row;
}

export async function updatePengumuman(id, { title, content, date, image, status }) {
  const [row] = await query`
    UPDATE pengumuman SET title=${title}, content=${content}, date=${date}, image=${image}, status=${status}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deletePengumuman(id) {
  const rows = await query`DELETE FROM pengumuman WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

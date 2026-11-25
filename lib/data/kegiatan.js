import { query } from '../db';

export async function getKegiatanData() {
  return query`SELECT * FROM kegiatan ORDER BY date DESC`;
}

export async function getKegiatanById(id) {
  const rows = await query`SELECT * FROM kegiatan WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createKegiatan({ title, description, date, location, image }) {
  const [row] = await query`
    INSERT INTO kegiatan (title, description, date, location, image)
    VALUES (${title}, ${description}, ${date}, ${location}, ${image})
    RETURNING *`;
  return row;
}

export async function updateKegiatan(id, { title, description, date, location, image }) {
  const [row] = await query`
    UPDATE kegiatan SET title=${title}, description=${description}, date=${date}, location=${location}, image=${image}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deleteKegiatan(id) {
  const rows = await query`DELETE FROM kegiatan WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

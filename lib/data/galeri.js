import { query } from '../db';

export async function getGaleriData() {
  return query`SELECT * FROM galeri ORDER BY created_at DESC`;
}

export async function getGaleriById(id) {
  const rows = await query`SELECT * FROM galeri WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createGaleri({ title, description, category, year, image }) {
  const [row] = await query`
    INSERT INTO galeri (title, description, category, year, image)
    VALUES (${title}, ${description}, ${category}, ${year}, ${image})
    RETURNING *`;
  return row;
}

export async function updateGaleri(id, { title, description, category, year, image }) {
  const [row] = await query`
    UPDATE galeri SET title=${title}, description=${description}, category=${category}, year=${year}, image=${image}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deleteGaleri(id) {
  const rows = await query`DELETE FROM galeri WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

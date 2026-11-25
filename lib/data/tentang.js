import { query } from '../db';

export async function getTentangData() {
  return query`SELECT * FROM tentang ORDER BY urutan ASC`;
}

export async function getTentangById(id) {
  const rows = await query`SELECT * FROM tentang WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createTentang({ paragraf, foto }) {
  const [row] = await query`
    INSERT INTO tentang (paragraf, foto)
    VALUES (${paragraf}, ${foto})
    RETURNING *`;
  return row;
}

export async function updateTentang(id, { paragraf, foto }) {
  const [row] = await query`
    UPDATE tentang SET paragraf=${paragraf}, foto=${foto}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deleteTentang(id) {
  const rows = await query`DELETE FROM tentang WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

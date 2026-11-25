import { query } from '../db';

export async function getVisiMisiData() {
  return query`SELECT * FROM visi_misi ORDER BY tipe, urutan ASC`;
}

export async function getVisiMisiById(id) {
  const rows = await query`SELECT * FROM visi_misi WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createVisiMisi({ tipe, konten, urutan = 0 }) {
  const [row] = await query`
    INSERT INTO visi_misi (tipe, konten, urutan)
    VALUES (${tipe}, ${konten}, ${urutan === '' ? 0 : urutan})
    RETURNING *`;
  return row;
}

export async function updateVisiMisi(id, { tipe, konten, urutan }) {
  const [row] = await query`
    UPDATE visi_misi SET tipe=${tipe}, konten=${konten}, urutan=${urutan === '' ? 0 : urutan}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deleteVisiMisi(id) {
  const rows = await query`DELETE FROM visi_misi WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

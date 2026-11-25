import { query } from '../db';

export async function getPresidentData() {
  return query`SELECT * FROM president ORDER BY created_at DESC`;
}

export async function getPresidentById(id) {
  const rows = await query`SELECT * FROM president WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createPresident({ nama, gelar_jabatan, masa_jabatan, foto, motto, visi }) {
  const [row] = await query`
    INSERT INTO president (nama, gelar_jabatan, masa_jabatan, foto, motto, visi)
    VALUES (${nama}, ${gelar_jabatan}, ${masa_jabatan}, ${foto}, ${motto}, ${visi})
    RETURNING *`;
  return row;
}

export async function updatePresident(id, { nama, gelar_jabatan, masa_jabatan, foto, motto, visi }) {
  const [row] = await query`
    UPDATE president SET nama=${nama}, gelar_jabatan=${gelar_jabatan}, masa_jabatan=${masa_jabatan},
      foto=${foto}, motto=${motto}, visi=${visi}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deletePresident(id) {
  const rows = await query`DELETE FROM president WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

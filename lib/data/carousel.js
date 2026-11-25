import { query } from '../db';

export async function getCarouselData() {
  return query`SELECT * FROM carousel ORDER BY urutan ASC`;
}

export async function getCarouselById(id) {
  const rows = await query`SELECT * FROM carousel WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createCarousel({ image, judul, subjudul, urutan = 0, aktif = 1 }) {
  const [row] = await query`
    INSERT INTO carousel (image, judul, subjudul, urutan, aktif)
    VALUES (${image}, ${judul}, ${subjudul}, ${urutan === '' ? 0 : urutan}, ${aktif === '' ? 1 : aktif})
    RETURNING *`;
  return row;
}

export async function updateCarousel(id, { image, judul, subjudul, urutan, aktif }) {
  const [row] = await query`
    UPDATE carousel SET image=${image}, judul=${judul}, subjudul=${subjudul},
      urutan=${urutan === '' ? 0 : urutan}, aktif=${aktif === '' ? 1 : aktif}
    WHERE id=${id}
    RETURNING *`;
  return row || null;
}

export async function deleteCarousel(id) {
  const rows = await query`DELETE FROM carousel WHERE id = ${id} RETURNING id`;
  return rows.length > 0;
}

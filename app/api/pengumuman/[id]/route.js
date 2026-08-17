import { unlink } from 'fs/promises';
import { join } from 'path';
import { getPengumumanById, updatePengumuman, deletePengumuman } from '../../../../lib/data/pengumuman';

async function deleteFile(filePath) {
  if (filePath?.startsWith('/uploads/')) {
    await unlink(join(process.cwd(), 'public', filePath)).catch(() => {});
  }
}

export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getPengumumanById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const existing = await getPengumumanById(id);
  if (!existing) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });

  if (existing.image && existing.image !== body.image) {
    await deleteFile(existing.image);
  }

  const updated = await updatePengumuman(id, body);
  return Response.json(updated);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const item = await getPengumumanById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });

  await deleteFile(item.image);

  const success = await deletePengumuman(id);
  if (!success) return Response.json({ message: 'Gagal menghapus' }, { status: 500 });
  return Response.json({ message: 'Berhasil dihapus' });
}

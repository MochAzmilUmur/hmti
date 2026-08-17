import { unlink } from 'fs/promises';
import { join } from 'path';
import { getTentangById, updateTentang, deleteTentang } from '../../../../lib/data/tentang';

async function deleteFile(filePath) {
  if (filePath?.startsWith('/uploads/')) {
    await unlink(join(process.cwd(), 'public', filePath)).catch(() => {});
  }
}

export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getTentangById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const existing = await getTentangById(id);
  if (!existing) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  if (existing.foto && existing.foto !== body.foto) await deleteFile(existing.foto);
  const updated = await updateTentang(id, body);
  return Response.json(updated);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const item = await getTentangById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  await deleteFile(item.foto);
  const success = await deleteTentang(id);
  if (!success) return Response.json({ message: 'Gagal menghapus' }, { status: 500 });
  return Response.json({ message: 'Berhasil dihapus' });
}

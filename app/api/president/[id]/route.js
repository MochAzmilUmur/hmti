import { unlink } from 'fs/promises';
import { join } from 'path';
import { getPresidentById, updatePresident, deletePresident } from '../../../../lib/data/president';

async function deleteFile(filePath) {
  if (filePath?.startsWith('/uploads/')) {
    await unlink(join(process.cwd(), 'public', filePath)).catch(() => {});
  }
}

export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getPresidentById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const existing = await getPresidentById(id);
  if (!existing) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });

  if (existing.foto && existing.foto !== body.foto) {
    await deleteFile(existing.foto);
  }

  const updated = await updatePresident(id, body);
  return Response.json(updated);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const item = await getPresidentById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });

  await deleteFile(item.foto);

  const success = await deletePresident(id);
  if (!success) return Response.json({ message: 'Gagal menghapus' }, { status: 500 });
  return Response.json({ message: 'Berhasil dihapus' });
}

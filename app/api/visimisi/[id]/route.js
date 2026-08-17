import { getVisiMisiById, updateVisiMisi, deleteVisiMisi } from '../../../../lib/data/visimisi';

export async function GET(request, { params }) {
  const { id } = await params;
  const item = await getVisiMisiById(id);
  if (!item) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const updated = await updateVisiMisi(id, body);
  if (!updated) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json(updated);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const success = await deleteVisiMisi(id);
  if (!success) return Response.json({ message: 'Tidak ditemukan' }, { status: 404 });
  return Response.json({ message: 'Berhasil dihapus' });
}

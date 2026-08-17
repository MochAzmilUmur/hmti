import { getVisiMisiData, createVisiMisi } from '../../../lib/data/visimisi';

export async function GET() {
  return Response.json(await getVisiMisiData());
}

export async function POST(request) {
  const { tipe, konten, urutan } = await request.json();
  if (!tipe || !konten) return Response.json({ message: 'Tipe dan konten wajib diisi' }, { status: 400 });
  const item = await createVisiMisi({ tipe, konten, urutan });
  return Response.json(item, { status: 201 });
}

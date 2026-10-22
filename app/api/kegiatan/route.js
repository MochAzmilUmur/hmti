import { getKegiatanData, createKegiatan } from '../../../lib/data/kegiatan';

export async function GET() {
  const data = await getKegiatanData();
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const { title, description, date, location, image } = body;

  if (!title || !date) {
    return Response.json({ message: 'Field wajib tidak lengkap' }, { status: 400 });
  }

  const item = await createKegiatan({ title, description, date, location, image });
  return Response.json(item, { status: 201 });
}

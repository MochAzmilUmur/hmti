import { getPengumumanData, createPengumuman } from '../../../lib/data/pengumuman';

export async function GET() {
  const data = await getPengumumanData();
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const { title, content, date, image, status } = body;

  if (!title || !content || !date) {
    return Response.json({ message: 'Field wajib tidak lengkap' }, { status: 400 });
  }

  const item = await createPengumuman({ title, content, date, image, status: status || 'aktif' });
  return Response.json(item, { status: 201 });
}

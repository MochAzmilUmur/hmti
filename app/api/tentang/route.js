import { getTentangData, createTentang } from '../../../lib/data/tentang';

export async function GET() {
  return Response.json(await getTentangData());
}

export async function POST(request) {
  const { paragraf, foto } = await request.json();
  if (!paragraf) return Response.json({ message: 'Paragraf wajib diisi' }, { status: 400 });
  const item = await createTentang({ paragraf, foto });
  return Response.json(item, { status: 201 });
}

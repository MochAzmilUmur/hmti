import { getGaleriData, createGaleri } from '../../../lib/data/galeri';

export async function GET() {
  const data = await getGaleriData();
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const { title, description, category, year, image } = body;

  if (!title || !category || !year) {
    return Response.json({ message: 'Field wajib tidak lengkap' }, { status: 400 });
  }

  const item = await createGaleri({ title, description, category, year, image });
  return Response.json(item, { status: 201 });
}

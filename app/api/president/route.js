import { getPresidentData, createPresident } from '../../../lib/data/president';

export async function GET() {
  const data = await getPresidentData();
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const { nama, gelar_jabatan, masa_jabatan, foto, motto, visi } = body;

  if (!nama) {
    return Response.json({ message: 'Nama wajib diisi' }, { status: 400 });
  }

  const item = await createPresident({ nama, gelar_jabatan, masa_jabatan, foto, motto, visi });
  return Response.json(item, { status: 201 });
}

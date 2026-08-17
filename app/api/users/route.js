import { getUsersData, createUser } from '../../../lib/data/users';

export async function GET() {
  return Response.json(await getUsersData());
}

export async function POST(request) {
  const { nama, email, password, role } = await request.json();
  if (!nama || !email || !password) return Response.json({ message: 'Nama, email, dan password wajib diisi' }, { status: 400 });
  const item = await createUser({ nama, email, password, role });
  return Response.json(item, { status: 201 });
}

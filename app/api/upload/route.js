import { writeFile } from 'fs/promises';
import { join } from 'path';

export const config = { api: { bodyParser: false } };

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return Response.json({ message: 'File tidak ditemukan' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return Response.json({ message: 'Format file tidak didukung. Gunakan JPG, PNG, WebP, atau GIF' }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return Response.json({ message: 'Ukuran file melebihi 2MB' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const uploadPath = join(process.cwd(), 'public', 'uploads', filename);

  await writeFile(uploadPath, buffer);

  return Response.json({ url: `/uploads/${filename}` });
}

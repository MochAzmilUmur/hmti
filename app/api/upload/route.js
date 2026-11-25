import { createClient } from '@supabase/supabase-js';

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

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from('uploads')
    .upload(filename, buffer, { contentType: file.type, cacheControl: '3600' });

  if (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from('uploads').getPublicUrl(filename);
  return Response.json({ url: data.publicUrl });
}

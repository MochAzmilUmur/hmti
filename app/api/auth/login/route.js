import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '../../../../lib/data/users';

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'hmti-secret-key');

export async function POST(request) {
  const { email, password } = await request.json();

  const user = await getUserByEmail(email);
  if (!user) {
    return Response.json({ message: 'Email atau password salah' }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return Response.json({ message: 'Email atau password salah' }, { status: 401 });
  }

  const token = await new SignJWT({ id: user.id, nama: user.nama, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8,
    path: '/',
  });

  return Response.json({ message: 'Login berhasil', role: user.role });
}

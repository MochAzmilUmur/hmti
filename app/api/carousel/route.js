import { getCarouselData, createCarousel } from '../../../lib/data/carousel';

export async function GET() {
  return Response.json(await getCarouselData());
}

export async function POST(request) {
  const { image, judul, subjudul, urutan, aktif } = await request.json();
  if (!image) return Response.json({ message: 'Gambar wajib diisi' }, { status: 400 });
  const item = await createCarousel({ image, judul, subjudul, urutan, aktif });
  return Response.json(item, { status: 201 });
}

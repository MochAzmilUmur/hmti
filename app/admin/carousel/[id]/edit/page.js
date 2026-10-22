import { notFound } from 'next/navigation';
import { getCarouselById } from '../../../../../lib/data/carousel';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit Slide - Admin HMTI' };

const fields = [
  { name: 'image', label: 'Gambar', type: 'image', required: true },
  { name: 'judul', label: 'Judul', placeholder: 'Himpunan Mahasiswa Teknologi Informasi' },
  { name: 'subjudul', label: 'Subjudul', placeholder: 'Bersama, Berkarya, Bersinergi' },
  { name: 'urutan', label: 'Urutan', type: 'number', placeholder: '0' },
  {
    name: 'aktif', label: 'Status', type: 'select', required: true,
    options: [{ value: '1', label: 'Aktif' }, { value: '0', label: 'Nonaktif' }],
  },
];

export default async function EditCarouselPage({ params }) {
  const { id } = await params;
  const item = await getCarouselById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Slide Carousel</h1>
        <p className="text-sm text-gray-500 mt-1">{item.judul || 'Slide ' + id}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          initialData={{ ...item, urutan: String(item.urutan), aktif: String(item.aktif) }}
          apiEndpoint={`/api/carousel/${id}`}
          method="PUT"
          redirectTo="/admin/carousel"
        />
      </div>
    </div>
  );
}

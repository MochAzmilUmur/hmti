import { notFound } from 'next/navigation';
import { getKegiatanById } from '../../../../../lib/data/kegiatan';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit Kegiatan - Admin HMTI' };

const fields = [
  { name: 'title', label: 'Judul Kegiatan', required: true, placeholder: 'IT Class Discuss' },
  { name: 'description', label: 'Deskripsi', type: 'textarea', required: true, placeholder: 'Deskripsi kegiatan...' },
  { name: 'date', label: 'Tanggal', type: 'date', required: true },
  { name: 'location', label: 'Lokasi', placeholder: 'Aula Polteksi' },
  { name: 'image', label: 'Gambar', type: 'image' },
];

export default async function EditKegiatanPage({ params }) {
  const { id } = await params;
  const item = await getKegiatanById(id);
  if (!item) notFound();

  const initialData = {
    ...item,
    date: item.date ? new Date(item.date).toISOString().slice(0, 10) : '',
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Kegiatan</h1>
        <p className="text-sm text-gray-500 mt-1">{item.title}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          initialData={initialData}
          apiEndpoint={`/api/kegiatan/${id}`}
          method="PUT"
          redirectTo="/admin/kegiatan"
        />
      </div>
    </div>
  );
}

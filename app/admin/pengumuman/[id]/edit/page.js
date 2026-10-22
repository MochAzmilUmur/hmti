import { notFound } from 'next/navigation';
import { getPengumumanById } from '../../../../../lib/data/pengumuman';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit Pengumuman - Admin HMTI' };

const fields = [
  { name: 'title', label: 'Judul Pengumuman', required: true, placeholder: 'Pendaftaran Anggota Baru...' },
  { name: 'content', label: 'Isi Pengumuman', type: 'textarea', required: true, placeholder: 'Isi pengumuman...' },
  { name: 'date', label: 'Tanggal', type: 'date', required: true },
  { name: 'image', label: 'Gambar', type: 'image' },
  {
    name: 'status', label: 'Status', type: 'select', required: true,
    options: [
      { value: 'aktif', label: 'Aktif' },
      { value: 'arsip', label: 'Arsip' },
    ],
  },
];

export default async function EditPengumumanPage({ params }) {
  const { id } = await params;
  const item = await getPengumumanById(id);
  if (!item) notFound();

  const initialData = {
    ...item,
    date: item.date ? new Date(item.date).toISOString().slice(0, 10) : '',
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Pengumuman</h1>
        <p className="text-sm text-gray-500 mt-1">{item.title}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          initialData={initialData}
          apiEndpoint={`/api/pengumuman/${id}`}
          method="PUT"
          redirectTo="/admin/pengumuman"
        />
      </div>
    </div>
  );
}

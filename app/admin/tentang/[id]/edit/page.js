import { notFound } from 'next/navigation';
import { getTentangById } from '../../../../../lib/data/tentang';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit Deskripsi - Admin HMTI' };

const fields = [
  { name: 'paragraf', label: 'Paragraf', type: 'textarea', required: true, placeholder: 'Isi deskripsi HMTI...' },
  { name: 'foto', label: 'Foto', type: 'image' },
];

export default async function EditTentangPage({ params }) {
  const { id } = await params;
  const item = await getTentangById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Edit Deskripsi HMTI</h1></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} initialData={{ ...item, urutan: String(item.urutan) }} apiEndpoint={`/api/tentang/${id}`} method="PUT" redirectTo="/admin/tentang" />
      </div>
    </div>
  );
}

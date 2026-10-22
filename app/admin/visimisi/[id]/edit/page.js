import { notFound } from 'next/navigation';
import { getVisiMisiById } from '../../../../../lib/data/visimisi';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit Visi & Misi - Admin HMTI' };

const fields = [
  {
    name: 'tipe', label: 'Tipe', type: 'select', required: true,
    options: [{ value: 'visi', label: 'Visi' }, { value: 'misi', label: 'Misi' }],
  },
  { name: 'konten', label: 'Konten', type: 'textarea', required: true, placeholder: 'Isi visi atau misi...' },
  { name: 'urutan', label: 'Urutan', type: 'number', placeholder: '0' },
];

export default async function EditVisiMisiPage({ params }) {
  const { id } = await params;
  const item = await getVisiMisiById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Visi & Misi</h1>
        <p className="text-sm text-gray-500 mt-1 capitalize">{item.tipe}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} initialData={{ ...item, urutan: String(item.urutan) }} apiEndpoint={`/api/visimisi/${id}`} method="PUT" redirectTo="/admin/visimisi" />
      </div>
    </div>
  );
}

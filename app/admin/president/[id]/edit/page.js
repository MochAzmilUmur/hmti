import { notFound } from 'next/navigation';
import { getPresidentById } from '../../../../../lib/data/president';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit President - Admin HMTI' };

const fields = [
  { name: 'gelar_jabatan', label: 'Gelar Jabatan', placeholder: 'Presiden HMTI Polteksi' },
  { name: 'nama', label: 'Nama Lengkap', required: true, placeholder: 'Bagas Satria Aribowo' },
  { name: 'masa_jabatan', label: 'Masa Jabatan', placeholder: '2025-2026' },
  { name: 'foto', label: 'Foto', type: 'image' },
  { name: 'motto', label: 'Motto / Kutipan', type: 'textarea', placeholder: '"membangun komunitas tempat mahasiswa TI bisa berkembang..."' },
  { name: 'visi', label: 'Visi', type: 'textarea', placeholder: 'Terciptanya lingkungan belajar yang nyaman dan kolaboratif...' },
];

export default async function EditPresidentPage({ params }) {
  const { id } = await params;
  const item = await getPresidentById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit President</h1>
        <p className="text-sm text-gray-500 mt-1">{item.nama}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          initialData={item}
          apiEndpoint={`/api/president/${id}`}
          method="PUT"
          redirectTo="/admin/president"
        />
      </div>
    </div>
  );
}

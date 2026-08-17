import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah Deskripsi - Admin HMTI' };

const fields = [
  { name: 'paragraf', label: 'Paragraf', type: 'textarea', required: true, placeholder: 'Isi deskripsi HMTI...' },
  { name: 'foto', label: 'Foto', type: 'image' },
];

export default function TambahTentangPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Tambah Deskripsi HMTI</h1></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} apiEndpoint="/api/tentang" method="POST" redirectTo="/admin/tentang" />
      </div>
    </div>
  );
}

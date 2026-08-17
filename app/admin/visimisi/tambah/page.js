import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah Visi & Misi - Admin HMTI' };

const fields = [
  {
    name: 'tipe', label: 'Tipe', type: 'select', required: true,
    options: [{ value: 'visi', label: 'Visi' }, { value: 'misi', label: 'Misi' }],
  },
  { name: 'konten', label: 'Konten', type: 'textarea', required: true, placeholder: 'Isi visi atau misi...' },
  { name: 'urutan', label: 'Urutan', type: 'number', placeholder: '0' },
];

export default function TambahVisiMisiPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tambah Visi & Misi</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} apiEndpoint="/api/visimisi" method="POST" redirectTo="/admin/visimisi" />
      </div>
    </div>
  );
}

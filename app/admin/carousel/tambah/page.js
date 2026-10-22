import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah Slide - Admin HMTI' };

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

export default function TambahCarouselPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Tambah Slide Carousel</h1></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} apiEndpoint="/api/carousel" method="POST" redirectTo="/admin/carousel" />
      </div>
    </div>
  );
}

import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah Kegiatan - Admin HMTI' };

const fields = [
  { name: 'title', label: 'Judul Kegiatan', required: true, placeholder: 'IT Class Discuss' },
  { name: 'description', label: 'Deskripsi', type: 'textarea', required: true, placeholder: 'Deskripsi kegiatan...' },
  { name: 'date', label: 'Tanggal', type: 'date', required: true },
  { name: 'location', label: 'Lokasi', placeholder: 'Aula Polteksi' },
  { name: 'image', label: 'Gambar', type: 'image' },
];

export default function TambahKegiatanPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tambah Kegiatan</h1>
        <p className="text-sm text-gray-500 mt-1">Tambahkan kegiatan baru</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          apiEndpoint="/api/kegiatan"
          method="POST"
          redirectTo="/admin/kegiatan"
        />
      </div>
    </div>
  );
}

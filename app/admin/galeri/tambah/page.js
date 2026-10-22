import GaleriForm from '../../../../components/admin/GaleriForm';

export const metadata = { title: 'Tambah Karya - Admin HMTI' };

export default function TambahGaleriPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tambah Karya</h1>
        <p className="text-sm text-gray-500 mt-1">Tambahkan karya baru ke galeri</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <GaleriForm
          apiEndpoint="/api/galeri"
          method="POST"
          redirectTo="/admin/galeri"
        />
      </div>
    </div>
  );
}

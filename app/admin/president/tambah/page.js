import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah President - Admin HMTI' };

const fields = [
  { name: 'gelar_jabatan', label: 'Gelar Jabatan', placeholder: 'Presiden HMTI Polteksi' },
  { name: 'nama', label: 'Nama Lengkap', required: true, placeholder: 'Bagas Satria Aribowo' },
  { name: 'masa_jabatan', label: 'Masa Jabatan', placeholder: '2025-2026' },
  { name: 'foto', label: 'Foto', type: 'image' },
  { name: 'motto', label: 'Motto / Kutipan', type: 'textarea', placeholder: '"membangun komunitas tempat mahasiswa TI bisa berkembang..."' },
  { name: 'visi', label: 'Visi', type: 'textarea', placeholder: 'Terciptanya lingkungan belajar yang nyaman dan kolaboratif...' },
];

export default function TambahPresidentPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tambah President</h1>
        <p className="text-sm text-gray-500 mt-1">Daftarkan president baru HMTI</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm
          fields={fields}
          apiEndpoint="/api/president"
          method="POST"
          redirectTo="/admin/president"
        />
      </div>
    </div>
  );
}

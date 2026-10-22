import AdminForm from '../../../../components/admin/AdminForm';

export const metadata = { title: 'Tambah User - Admin HMTI' };

const fields = [
  { name: 'nama', label: 'Nama Lengkap', required: true, placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'admin@hmti.ac.id' },
  { name: 'password', label: 'Password', type: 'password', required: true, placeholder: '••••••••' },
  {
    name: 'role', label: 'Role', type: 'select', required: true,
    options: [{ value: 'admin', label: 'Admin' }, { value: 'editor', label: 'Editor' }],
  },
];

export default function TambahUserPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Tambah User</h1></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} apiEndpoint="/api/users" method="POST" redirectTo="/admin/users" />
      </div>
    </div>
  );
}

import { notFound } from 'next/navigation';
import { getUserById } from '../../../../../lib/data/users';
import AdminForm from '../../../../../components/admin/AdminForm';

export const metadata = { title: 'Edit User - Admin HMTI' };

const fields = [
  { name: 'nama', label: 'Nama Lengkap', required: true, placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'admin@hmti.ac.id' },
  {
    name: 'role', label: 'Role', type: 'select', required: true,
    options: [{ value: 'admin', label: 'Admin' }, { value: 'editor', label: 'Editor' }],
  },
];

export default async function EditUserPage({ params }) {
  const { id } = await params;
  const item = await getUserById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit User</h1>
        <p className="text-sm text-gray-500 mt-1">{item.nama}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <AdminForm fields={fields} initialData={item} apiEndpoint={`/api/users/${id}`} method="PUT" redirectTo="/admin/users" />
      </div>
    </div>
  );
}

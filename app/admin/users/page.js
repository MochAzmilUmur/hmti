import Link from 'next/link';
import { getUsersData } from '../../../lib/data/users';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Manage User - Admin HMTI' };

export default async function AdminUsersPage() {
  const data = await getUsersData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage User</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} user terdaftar</p>
        </div>
        <Link href="/admin/users/tambah" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tambah User
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-500 border-b border-gray-100">
              <th className="px-6 py-3 font-medium">No</th>
              <th className="px-6 py-3 font-medium">Nama</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Role</th>
              <th className="px-6 py-3 font-medium">Dibuat</th>
              <th className="px-6 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 && (
              <tr><td colSpan={6} className="px-6 py-10 text-center text-gray-400">Belum ada user</td></tr>
            )}
            {data.map((item, i) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.nama}</td>
                <td className="px-6 py-4 text-gray-500">{item.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    item.role === 'admin' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {item.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-xs">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString('id-ID') : '-'}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link href={`/admin/users/${item.id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium">Edit</Link>
                    <DeleteButton id={item.id} apiPath="/api/users" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { getTentangData } from '../../../lib/data/tentang';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Deskripsi HMTI - Admin HMTI' };

export default async function AdminTentangPage() {
  const data = await getTentangData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deskripsi HMTI</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} paragraf terdaftar</p>
        </div>
        <Link href="/admin/tentang/tambah" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tambah Paragraf
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-500 border-b border-gray-100">
              <th className="px-6 py-3 font-medium">No</th>
              <th className="px-6 py-3 font-medium">Foto</th>
              <th className="px-6 py-3 font-medium">Paragraf</th>              
              <th className="px-6 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 && (
              <tr><td colSpan={4} className="px-6 py-10 text-center text-gray-400">Belum ada data</td></tr>
            )}
            {data.map((item, i) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                <td className="px-6 py-4">
                  {item.foto ? (
                    <img src={item.foto} alt="foto" className="w-12 h-12 object-cover rounded-lg" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700 max-w-sm line-clamp-2">{item.paragraf}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link href={`/admin/tentang/${item.id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium">Edit</Link>
                    <DeleteButton id={item.id} apiPath="/api/tentang" />
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

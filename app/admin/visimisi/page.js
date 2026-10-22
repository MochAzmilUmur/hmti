import Link from 'next/link';
import { getVisiMisiData } from '../../../lib/data/visimisi';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Visi & Misi - Admin HMTI' };

export default async function AdminVisiMisiPage() {
  const data = await getVisiMisiData();
  const visi = data.filter((d) => d.tipe === 'visi');
  const misi = data.filter((d) => d.tipe === 'misi');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Visi & Misi</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} item terdaftar</p>
        </div>
        <Link href="/admin/visimisi/tambah" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tambah
        </Link>
      </div>

      {['visi', 'misi'].map((tipe) => (
        <div key={tipe} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700 capitalize">{tipe}</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-6 py-3 font-medium">No</th>
                <th className="px-6 py-3 font-medium">Konten</th>
                <th className="px-6 py-3 font-medium">Urutan</th>
                <th className="px-6 py-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(tipe === 'visi' ? visi : misi).length === 0 && (
                <tr><td colSpan={4} className="px-6 py-6 text-center text-gray-400">Belum ada data</td></tr>
              )}
              {(tipe === 'visi' ? visi : misi).map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                  <td className="px-6 py-4 text-gray-700 max-w-md line-clamp-2">{item.konten}</td>
                  <td className="px-6 py-4 text-gray-500">{item.urutan}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/visimisi/${item.id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium">Edit</Link>
                      <DeleteButton id={item.id} apiPath="/api/visimisi" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

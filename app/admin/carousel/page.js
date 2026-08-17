import Link from 'next/link';
import { getCarouselData } from '../../../lib/data/carousel';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Carousel - Admin HMTI' };

export default async function AdminCarouselPage() {
  const data = await getCarouselData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Carousel</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} slide terdaftar</p>
        </div>
        <Link href="/admin/carousel/tambah" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tambah Slide
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-500 border-b border-gray-100">
                <th className="px-6 py-3 font-medium">No</th>
                <th className="px-6 py-3 font-medium">Gambar</th>
                <th className="px-6 py-3 font-medium">Judul</th>
                <th className="px-6 py-3 font-medium">Subjudul</th>
                <th className="px-6 py-3 font-medium">Urutan</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.length === 0 && (
                <tr><td colSpan={7} className="px-6 py-10 text-center text-gray-400">Belum ada slide</td></tr>
              )}
              {data.map((item, i) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                  <td className="px-6 py-4">
                    <img src={item.image} alt={item.judul} className="w-20 h-12 object-cover rounded-lg" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{item.judul || '-'}</td>
                  <td className="px-6 py-4 text-gray-500 max-w-xs line-clamp-1">{item.subjudul || '-'}</td>
                  <td className="px-6 py-4 text-gray-500">{item.urutan}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.aktif ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {item.aktif ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/carousel/${item.id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium">Edit</Link>
                      <DeleteButton id={item.id} apiPath="/api/carousel" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

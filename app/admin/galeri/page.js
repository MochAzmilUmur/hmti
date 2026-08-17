import Link from 'next/link';
import { getGaleriData } from '../../../lib/data/galeri';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Kelola Galeri - Admin HMTI' };

export default async function AdminGaleriPage() {
  const works = await getGaleriData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Galeri Karya</h1>
          <p className="text-sm text-gray-500 mt-1">{works.length} karya terdaftar</p>
        </div>
        <Link
          href="/admin/galeri/tambah"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Karya
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
                <th className="px-6 py-3 font-medium">Kategori</th>
                <th className="px-6 py-3 font-medium">Tahun</th>
                <th className="px-6 py-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {works.map((work, index) => (
                <tr key={work.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{work.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{work.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {work.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{work.year}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/galeri/${work.id}/edit`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <DeleteButton id={work.id} />
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



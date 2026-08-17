import Link from 'next/link';
import { getGaleriData } from '../../lib/data/galeri';
import { getKegiatanData } from '../../lib/data/kegiatan';
import { getPengumumanData } from '../../lib/data/pengumuman';
import { getPresidentData } from '../../lib/data/president';

const quickLinks = [
  { label: 'Tambah Karya', href: '/admin/galeri/tambah' },
  { label: 'Kelola Kegiatan', href: '/admin/kegiatan' },
  { label: 'Tambah Kegiatan', href: '/admin/kegiatan/tambah' },
  { label: 'President', href: '/admin/president' },
  { label: 'Pengumuman', href: '/admin/pengumuman' },
  { label: 'Tambah Pengumuman', href: '/admin/pengumuman/tambah' },
];

export default async function AdminDashboard() {
  const [works, kegiatan, pengumuman, presidents] = await Promise.all([
    getGaleriData(),
    getKegiatanData(),
    getPengumumanData(),
    getPresidentData(),
  ]);

  const categoryCount = works.reduce((acc, w) => {
    acc[w.category] = (acc[w.category] || 0) + 1;
    return acc;
  }, {});

  const pengumumanAktif = pengumuman.filter((p) => p.status === 'aktif').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Selamat datang di panel admin HMTI Polteksi</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{works.length}</p>
            <p className="text-sm text-gray-500">Total Karya</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{Object.keys(categoryCount).length}</p>
            <p className="text-sm text-gray-500">Kategori Karya</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{kegiatan.length}</p>
            <p className="text-sm text-gray-500">Total Kegiatan</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{presidents.length}</p>
            <p className="text-sm text-gray-500">Total President</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Works Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Karya Terbaru</h2>
            <Link href="/admin/galeri" className="text-sm text-blue-600 hover:underline">
              Lihat semua
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-6 py-3 font-medium">Judul</th>
                  <th className="px-6 py-3 font-medium">Kategori</th>
                  <th className="px-6 py-3 font-medium">Tahun</th>
                  <th className="px-6 py-3 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {works.slice(0, 5).map((work) => (
                  <tr key={work.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-800">{work.title}</td>
                    <td className="px-6 py-3">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                        {work.category}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-500">{work.year}</td>
                    <td className="px-6 py-3">
                      <Link href={`/admin/galeri/${work.id}/edit`} className="text-blue-600 hover:underline text-xs">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-gray-800 mb-4">Aksi Cepat</h2>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-sm font-medium transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pengumuman Terbaru */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Pengumuman Terbaru</h2>
              <Link href="/admin/pengumuman" className="text-xs text-blue-600 hover:underline">
                Lihat semua
              </Link>
            </div>
            <div className="space-y-3">
              {pengumuman.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${item.status === 'aktif' ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <div>
                    <p className="text-sm text-gray-800 font-medium line-clamp-1">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.date?.toString().slice(0, 10)}</p>
                  </div>
                </div>
              ))}
              {pengumuman.length === 0 && (
                <p className="text-sm text-gray-400">Belum ada pengumuman</p>
              )}
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-gray-800 mb-4">Karya per Kategori</h2>
            <div className="space-y-3">
              {Object.entries(categoryCount).map(([cat, count]) => (
                <div key={cat}>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span className="truncate">{cat}</span>
                    <span className="font-medium ml-2">{count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${(count / works.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              {works.length === 0 && (
                <p className="text-sm text-gray-400">Belum ada karya</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

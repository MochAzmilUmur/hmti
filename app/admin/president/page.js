import Link from 'next/link';
import Image from 'next/image';
import { getPresidentData } from '../../../lib/data/president';
import DeleteButton from '../../../components/admin/DeleteButton';

export const metadata = { title: 'Kelola President - Admin HMTI' };

export default async function AdminPresidentPage() {
  const presidents = await getPresidentData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">President</h1>
          <p className="text-sm text-gray-500 mt-1">{presidents.length} president terdaftar</p>
        </div>
        <Link
          href="/admin/president/tambah"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah President
        </Link>
      </div>

      <div className="space-y-4">
        {presidents.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-100 px-6 py-10 text-center text-gray-400">
            Belum ada data president
          </div>
        )}
        {presidents.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-6">
            {/* Foto */}
            <div className="flex-shrink-0">
              {item.foto ? (
                <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-gray-200">
                  <Image src={item.foto} alt={item.nama} fill className="object-cover" unoptimized />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  {item.nama?.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {item.gelar_jabatan && (
                <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-0.5">{item.gelar_jabatan}</p>
              )}
              <h2 className="text-lg font-bold text-gray-900">{item.nama}</h2>
              {item.masa_jabatan && (
                <p className="text-sm text-gray-500 mt-0.5">Masa Jabatan {item.masa_jabatan}</p>
              )}
              {item.motto && (
                <p className="text-sm text-gray-600 italic mt-2 line-clamp-2">"{item.motto}"</p>
              )}
              {item.visi && (
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.visi}</p>
              )}
            </div>

            {/* Aksi */}
            <div className="flex flex-col gap-2 flex-shrink-0">
              <Link
                href={`/admin/president/${item.id}/edit`}
                className="px-4 py-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Edit
              </Link>
              <DeleteButton id={item.id} apiPath="/api/president" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

const PER_PAGE = 8;

function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
            page === current
              ? 'bg-blue-600 text-white border border-blue-600'
              : 'border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function PengumumanSection({ pengumuman }) {
  const [page, setPage] = useState(1);
  const aktif = pengumuman.filter((p) => p.status === 'aktif');
  const totalPages = Math.ceil(aktif.length / PER_PAGE);
  const items = aktif.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      {aktif.length === 0 && (
        <p className="text-center text-gray-400">Belum ada pengumuman.</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="w-full" style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#f3f4f6' }}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '3/4' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300" style={{ aspectRatio: '3/4' }}>
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1">
              <p className="text-xs text-gray-400">
                {item.date ? new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
              </p>
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mt-1">{item.content}</p>
            </div>
          </article>
        ))}
      </div>
      <Pagination current={page} total={totalPages} onChange={setPage} />
    </>
  );
}

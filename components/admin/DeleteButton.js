'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ id, apiPath = '/api/galeri' }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('Yakin ingin menghapus data ini?')) return;

    const res = await fetch(`${apiPath}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      alert(data.message || 'Gagal menghapus');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 font-medium transition-colors"
    >
      Hapus
    </button>
  );
}

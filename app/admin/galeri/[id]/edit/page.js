import { notFound } from 'next/navigation';
import { getGaleriById } from '../../../../../lib/data/galeri';
import GaleriForm from '../../../../../components/admin/GaleriForm';

export const metadata = { title: 'Edit Karya - Admin HMTI' };

export default async function EditGaleriPage({ params }) {
  const { id } = await params;
  const item = await getGaleriById(id);
  if (!item) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Karya</h1>
        <p className="text-sm text-gray-500 mt-1">{item.title}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <GaleriForm
          initialData={item}
          apiEndpoint={`/api/galeri/${id}`}
          method="PUT"
          redirectTo="/admin/galeri"
        />
      </div>
    </div>
  );
}

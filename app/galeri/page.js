import { getGaleriData } from '../../lib/data/galeri';
import GaleriClient from './GaleriClient';

export const metadata = {
  title: 'Galeri Karya - HMTI',
  description: 'Galeri karya mahasiswa Teknologi Informasi Politeknik Semen Indonesia',
};

export default async function GaleriPage() {
  const works = await getGaleriData();
  return <GaleriClient works={works} />;
}

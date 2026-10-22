import '../styles/globals.css';

export const metadata = {
  title: 'HMTI Polteksi - Himpunan Mahasiswa Teknologi Informasi',
  description:
    'Website resmi Himpunan Mahasiswa Teknologi Informasi (HMTI) Polteksi. Dapatkan informasi terbaru seputar kegiatan, galeri karya, dan program studi IT di Polteksi.',
  keywords: 'hmti polteksi, teknologi informasi polteksi, himpunan mahasiswa IT, polteksi',
  openGraph: {
    title: 'HMTI Polteksi - Teknologi Informasi',
    description: 'Portal resmi mahasiswa Teknologi Informasi Polteksi.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" href="/HMTI.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

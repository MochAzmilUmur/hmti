import Navbar from '../components/Navbar';
import { getPresidentData } from '../lib/data/president';
import { getKegiatanData } from '../lib/data/kegiatan';
import { getPengumumanData } from '../lib/data/pengumuman';
import { getTentangData } from '../lib/data/tentang';
import { getVisiMisiData } from '../lib/data/visimisi';
import { getCarouselData } from '../lib/data/carousel';
import KegiatanSection from '../components/KegiatanSection';
import PengumumanSection from '../components/PengumumanSection';
import CarouselSection from '../components/CarouselSection';

export default async function Home() {
  const [presidents, kegiatan, pengumuman, tentangList, visimisiList, carouselList] = await Promise.all([
    getPresidentData(),
    getKegiatanData(),
    getPengumumanData(),
    getTentangData(),
    getVisiMisiData(),
    getCarouselData(),
  ]);

  const visi = visimisiList.filter((v) => v.tipe === 'visi');
  const misi = visimisiList.filter((v) => v.tipe === 'misi');
  const slides = carouselList.filter((c) => c.aktif);
  const tentangFoto = tentangList.find((t) => t.foto);
  return (
    <div className="App">
      <Navbar />

      <CarouselSection slides={slides} />

      <main>
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Himpunan Mahasiswa Teknologi Informasi
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                {tentangList.length > 0 ? (
                  tentangList.map((t) => (
                    <p key={t.id} className="text-gray-600 mb-6 leading-relaxed text-justify">
                      {t.paragraf}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400">Belum ada deskripsi.</p>
                )}
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={tentangFoto?.foto || '/assets/seminar.webp'}
                    alt="Laboratorium Teknologi Informasi"
                    className="w-full h-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 text-sm">
                    Teknologi Informasi Politeknik Semen Indonesia
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="vision" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Visi dan Misi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visi</h3>
                {visi.length > 0 ? (
                  visi.map((v) => (
                    <p key={v.id} className="text-gray-600 text-justify mb-2">{v.konten}</p>
                  ))
                ) : (
                  <p className="text-gray-400">Belum ada data visi.</p>
                )}
              </article>
              <article className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h3>
                {misi.length > 0 ? (
                  <ul className="space-y-3">
                    {misi.map((m) => (
                      <li key={m.id} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-600 text-justify">{m.konten}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">Belum ada data misi.</p>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* President Section */}
        <section id="president" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Presiden HMTI
            </h2>
            {presidents.length === 0 && (
              <p className="text-center text-gray-400">Belum ada data presiden.</p>
            )}
            {presidents.map((president) => (
              <div key={president.id} className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
                <figure className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {president.foto ? (
                      <img src={president.foto} alt={`Presiden ${president.nama}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 text-5xl font-bold">
                        {president.nama?.charAt(0)}
                      </div>
                    )}
                  </div>
                </figure>
                <div className="w-full md:w-2/3">
                  {president.gelar_jabatan && (
                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-widest mb-1">{president.gelar_jabatan}</p>
                  )}
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{president.nama}</h3>
                  {president.masa_jabatan && (
                    <p className="text-lg text-gray-600 mb-4">Masa Jabatan {president.masa_jabatan}</p>
                  )}
                  {president.motto && (
                    <blockquote className="text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 text-justify">
                      &ldquo;{president.motto}&rdquo;
                    </blockquote>
                  )}
                  {president.visi && (
                    <p className="text-gray-600 text-justify">{president.visi}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lambang Section */}
        <section id="lambang" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Lambang HMTI
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md h-auto rounded-xl shadow-lg">
                  <img src="/assets/HMTI.webp" alt="Lambang Teknologi Informasi" className="w-full h-full object-cover" />
                  <figcaption className="mt-4 text-center text-gray-600">Lambang HMTI Polteksi</figcaption>
                </figure>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Makna Dan arti Lambang</h3>
                <div className="space-y-6">
                  {[
                    { img: '/assets/teratai.png', title: 'Bunga Teratai Merah yang Mekar', desc: 'Bunga teratai melambangkan kemurnian, pencerahan, dan kelahiran kembali. Warna merah mewakili semangat, kekuatan, dan tekad.' },
                    { img: '/assets/bintang.png', title: 'Tiga Bintang', desc: 'Melambangkan cita-cita tinggi, prestasi, dan kualitas unggul. Mewakili tiga pilar utama HMTI: pendidikan, pengabdian, penelitian.' },
                    { img: '/assets/circuit.png', title: 'Rangkaian Sirkuit & Chip', desc: 'Elemen inti jurusan Teknologi Informasi. Melambangkan keahlian, logika pemrograman, dan fokus HMTI pada inovasi teknologi.' },
                    { img: '/assets/lingkaranDaun.png', title: 'Lingkaran Daun Emas', desc: 'Menandakan kesatuan, keabadian, dan prestasi. Melambangkan semangat kolektif mahasiswa Teknologi Informasi.' },
                    { img: '/assets/2024.png', title: 'Angka 2024', desc: 'Tahun Berdirinya Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia, yaitu pada tahun 2024 ' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Kegiatan Kami
            </h2>
            <KegiatanSection kegiatan={kegiatan} />
          </div>
        </section>
        {/* Pengumuman Section */}
        <section id="pengumuman" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Pengumuman
            </h2>
            <PengumumanSection pengumuman={pengumuman} />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HMTI Polteksi</h3>
              <p className="text-gray-400 text-sm">Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Informasi Dan Media Sosial</h3>
              <a href="https://www.instagram.com/hmti_polteksi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span>hmti_polteksi</span>
              </a>
              <div className="mt-2">
                <a href="mailto:hmtipolteksi@gmail.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-sm">hmtipolteksi@gmail.com</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">Telp: (0343) 123456</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Alamat</h3>
              <p className="text-gray-400 text-sm">
                Politeknik Semen Indonesia<br />
                Jl. Kartini No.25 C, Kesemen, Sukorame, Kec. Gresik, Kabupaten Gresik, Jawa Timur
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 HMTI Polteksi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

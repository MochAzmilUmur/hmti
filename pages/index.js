import Head from 'next/head';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="App">
      <Head>
        <title>HMTI</title>
      </Head>
      
      <Navbar currentPath="/" />

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Himpunan Mahasiswa Teknologi Informasi
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-orange-300 animate-fade-in-delay">
            Politeknik Semen Indonesia
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-2">
            Membentuk Generasi Digital Berjiwa pemimpin dan inovatif
          </p>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="shape shape-1 absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
          <div className="shape shape-2 absolute top-2/3 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-float animation-delay-1000"></div>
          <div className="shape shape-3 absolute top-1/3 right-1/3 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          <div className="shape shape-4 absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float animation-delay-3000"></div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Himpunan Mahasiswa Teknologi Informasi
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
HMTI Polteksi (Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia) didirikan pada 2024 untuk mewakili suara mahasiswa di bidang teknologi informasi. Organisasi ini bertujuan memperkuat peran mahasiswa dalam kebijakan akademik dan sosial, menggali potensi akademik dan non-akademik, serta membangun jaringan dengan dunia industri. 
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
Dengan visi menjadi program studi unggulan, HMTI Polteksi berkomitmen untuk menghasilkan lulusan yang kompeten, berintegritas, dan siap berkontribusi pada pengembangan teknologi berkelanjutan demi kemajuan masyarakat.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="/assets/seminar.webp" 
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
                <p className="text-gray-600 text-justify">
                  Menjadi program studi unggulan di bidang Teknologi Informasi yang berkontribusi pada
                  pengembangan teknologi berkelanjutan, serta menghasilkan lulusan yang berkompeten,
                  berintegritas, dan mampu memanfaatkan teknologi untuk kemajuan sosial dan ekonomi
                  masyarakat
                </p>
              </article>
              <article className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Bermanfaat untuk memecahkan masalah sosial, ekonomi, dan lingkungan menggunakan teknologi informasi.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Menyediakan pendidikan berkualitas yang berfokus pada penguasaan teknologi informasi, dengan penekanan pada pengembangan soft skill dan hard skill mahasiswa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Membangun kemitraan dengan industri untuk menghubungkan mahasiswa dengan peluang magang, kerja sama proyek, dan peluang karir di dunia industri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Mengembangkan budaya belajar seumur hidup yang mendorong mahasiswa untuk terus meningkatkan keterampilan dan adaptasi terhadap perkembangan teknologi yang cepat.</span>
                  </li>
                </ul>
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <figure className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/assets/bagas.webp" 
                    alt="Presiden Himpunan Mahasiswa Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="w-full md:w-2/3 mb-10">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Bagas Satria Aribowo</h3>
                <p className="text-lg text-gray-600 mb-4">Masa Jabatan 2025-2026</p>
                <blockquote className="text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 text-justify">
                  "membangun komunitas tempat mahasiswa TI bisa berkembang, berinovasi, dan saling mendukung dalam mencapai potensi terbaik mereka."
                </blockquote>
                <p className="text-gray-600 text-justify">
                  Terciptanya lingkungan belajar yang nyaman dan kolaboratif, di mana mahasiswa TI tidak hanya memperoleh pengetahuan teknis, tetapi juga mampu mengasah keterampilan berpikir kritis, bekerja sama dalam tim.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <figure className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/assets/bily.webp" 
                    alt="Presiden Himpunan Mahasiswa Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="w-full md:w-2/3 mb-10">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Muhammad Brillian Mujahid Kamal</h3>
                <p className="text-lg text-gray-600 mb-4">Masa Jabatan 2024-2025</p>
                <blockquote className="text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 text-justify">
                  "Berkomitmen untuk terus memberikan kontribusi positif di dunia pendidikan dan teknologi. Tujuan saya adalah menciptakan generasi mahasiswa yang aware terhadap perkembangan teknologi dan siap berkontribusi dengan penuh tanggung jawab dalam dunia digital, membentuk mereka menjadi pemimpin masa depan yang inovatif."
                </blockquote>
                <p className="text-gray-600 text-justify">
                  Selama menjabat sebagai Ketua HMTI Polteksi, saya memimpin program-program seperti TIGoesToSchool untuk edukasi teknologi, Webinar Keamanan Jaringan untuk meningkatkan kesadaran siber, Class Discuss tentang tren IT, dan Seminar Media Sosial untuk penggunaan bijak media sosial. Semua program ini bertujuan untuk memperluas pengetahuan dan membentuk mahasiswa yang siap menghadapi dunia digital.
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/diskusi.webp" 
                    alt="Workshop & Pelatihan" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Workshop & Pelatihan</h3>
                  <p className="text-gray-600 text-justify">
                    Mengadakan workshop dan pelatihan rutin untuk meningkatkan keterampilan teknis mahasiswa dalam berbagai bidang teknologi informasi.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/semin.webp" 
                    alt="Seminar Teknologi" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Seminar Teknologi</h3>
                  <p className="text-gray-600 text-justify">
                    Menyelenggarakan seminar dengan menghadirkan praktisi dan ahli di bidang teknologi untuk berbagi pengalaman dan wawasan.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/ti24.webp" 
                    alt="Praktikum & Lab" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Praktikum & Lab</h3>
                  <p className="text-gray-600 text-justify">
                    Menyediakan fasilitas laboratorium dan praktikum untuk mendukung pembelajaran praktis mahasiswa.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/itgoestoschool.webp" 
                    alt="Kegiatan Sosial" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Kegiatan Sosial</h3>
                  <p className="text-gray-600 text-justify">
                    Mengadakan kegiatan sosial dan pengabdian masyarakat untuk menerapkan ilmu teknologi informasi dalam membantu masyarakat.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/HMTI.webp" 
                    alt="Kompetisi & Lomba" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Kompetisi & Lomba</h3>
                  <p className="text-gray-600 text-justify">
                    Memfasilitasi mahasiswa untuk mengikuti berbagai kompetisi dan lomba di bidang teknologi informasi tingkat regional maupun nasional.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/seminar.webp" 
                    alt="Networking" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Networking</h3>
                  <p className="text-gray-600 text-justify">
                    Membangun jaringan dengan industri, alumni, dan institusi lain untuk membuka peluang magang dan karir bagi mahasiswa.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HMTI Polteksi</h3>
              <p className="text-gray-400 text-sm">
                Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontak</h3>
              <p className="text-gray-400 text-sm mb-2">Email: hmti@polteksi.ac.id</p>
              <p className="text-gray-400 text-sm">Telp: (0343) 123456</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Alamat</h3>
              <p className="text-gray-400 text-sm">
                Politeknik Semen Indonesia<br />
                Jl. Veteran, Gresik, Jawa Timur
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

export default Home;

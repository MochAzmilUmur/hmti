import Head from 'next/head';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="App">
      <Head>
        <title>HMTI Polteksi - Himpunan Mahasiswa Teknologi Informasi</title>
        <meta 
          name="description" 
          content="Website resmi Himpunan Mahasiswa Teknologi Informasi (HMTI) Polteksi. Dapatkan informasi terbaru seputar kegiatan, galeri karya, dan program studi IT di Polteksi." 
        />
        <meta name="keywords" content="hmti polteksi, teknologi informasi polteksi, himpunan mahasiswa IT, polteksi" />
        <meta property="og:title" content="HMTI Polteksi - Teknologi Informasi" />
        <meta property="og:description" content="Portal resmi mahasiswa Teknologi Informasi Polteksi." />
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

        {/* Lambang Himpunan Mahasiswa Teknologi Informasi */}
        <section id="lambang" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6"> 
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Lambang HMTI
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-start">
              
              {/* Bagian Kiri: Gambar Lambang */}
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md h-auto rounded-xl shadow-lg">
                  <img 
                    src="/assets/HMTI.webp" 
                    alt="Lambang Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                  <figcaption className="mt-4 text-center text-gray-600">
                    Lambang HMTI Polteksi
                  </figcaption>
                </figure>
              </div>
              
              {/* Bagian Kanan: Penjelasan */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Makna Dan arti Lambang
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M51314 4L19-7"></path>
                      </svg>
                    </div>
                    {/* Kontainer List Penjelasan */}
          <div className="space-y-8">
                      {/* 1. Bunga Teratai Merah */}
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-red-50 p-4 rounded-2xl mr-5 group-hover:bg-red-500 transition-colors duration-300 shadow-sm">
              <svg className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Ikon Sparkles/Api/Bunga */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Bunga Teratai Merah yang Mekar</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Bunga teratai melambangkan kemurnian, pencerahan, dan kelahiran kembali. Warna merah mewakili semangat, kekuatan, dan tekad. Teratai mekar adalah simbol perkembangan yang sejalan dengan visi misi HMTI untuk terus maju di bidang teknologi informasi.
              </p>
            </div>
          </div>

          {/* 2. Tiga Bintang */}
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-yellow-50 p-4 rounded-2xl mr-5 group-hover:bg-yellow-400 transition-colors duration-300 shadow-sm">
              <svg className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Ikon Bintang */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Tiga Bintang</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Melambangkan cita-cita tinggi, prestasi, dan kualitas unggul. Mewakili tiga pilar utama HMTI (pendidikan, pengabdian, penelitian) serta tiga tahap perkembangan mahasiswa: belajar, berkarya, dan berkontribusi.
              </p>
            </div>
          </div>

          {/* 3. Rangkaian Sirkuit */}
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
              <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Ikon CPU Chip */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Rangkaian Sirkuit & Chip</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Elemen inti jurusan Teknologi Informasi. Rangkaian sirkuit melambangkan keahlian, logika pemrograman, dan fokus HMTI pada inovasi teknologi serta keterampilan mumpuni di dunia digital.
              </p>
            </div>
          </div>

          {/* 4. Lingkaran Daun Emas */}
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-green-50 p-4 rounded-2xl mr-5 group-hover:bg-green-600 transition-colors duration-300 shadow-sm">
              <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Ikon Check Badge / Laurel Stand-in */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Lingkaran Daun Emas</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Menandakan kesatuan, keabadian, dan prestasi. Melambangkan semangat kolektif dan tekad bulat mahasiswa Teknologi Informasi untuk terus maju mencapai prestasi setinggi mungkin.
              </p>
            </div>
          </div>

          {/* 5. Identitas HMTI */}
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-gray-100 p-4 rounded-2xl mr-5 group-hover:bg-gray-800 transition-colors duration-300 shadow-sm">
              <svg className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Ikon Bangunan/Kampus */}
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6M12 14l-9-5m9 5l9-5" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors"> Tulisan HMTI & Politeknik Semen Indonesia</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Identitas mutlak organisasi dan institusi pendidikan. Penegasan nama ini menunjukkan kebanggaan yang mengakar kuat pada almamater kampus Politeknik Semen Indonesia.
              </p>
            </div>
          </div>
          </div>
                  </div>
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

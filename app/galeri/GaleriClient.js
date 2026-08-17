'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import WorkCard from '../../components/WorkCard';

const CATEGORIES = ['Semua', 'Web Development', 'Mobile Development', 'IoT', 'Artificial Intelligence', 'Game Development'];

export default function GaleriClient({ works }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredWorks = selectedCategory === 'Semua'
    ? works
    : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Galeri Karya</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-delay">
            Karya mahasiswa Teknologi Informasi Politeknik Semen Indonesia
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          {filteredWorks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Tidak ada karya dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center opacity-70">
          <p>&copy; 2024 Teknologi Informasi - Politeknik Semen Indonesia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

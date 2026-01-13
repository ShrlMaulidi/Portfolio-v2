import React, { useState } from 'react';
import { galleryPhotos } from '../../data'; // Import data foto

export default function Gallery({ isDark }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState(null); // Untuk Modal Lightbox

  // Ambil daftar kategori unik dari data
  const categories = ['Semua', ...new Set(galleryPhotos.map(photo => photo.category))];

  // Filter foto berdasarkan kategori
  const filteredPhotos = selectedCategory === 'Semua' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="mb-10 animate-fade-in-up transition-colors duration-500 ease-in-out">
        
        {/* === HEADER === */}
        <div className="mb-8">
             <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
                Galeri
            </h1>
            <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
                Koleksi momen, kegiatan, dan kenangan visual saya.
            </p>
        </div>

        <div className={`h-px w-full my-8 border-dashed border-b transition-colors duration-500 ease-in-out ${isDark ? 'border-[#27272a]' : 'border-gray-300'}`}></div>

        {/* === FILTER BUTTONS === */}
        <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedCategory === cat 
                        ? (isDark ? 'bg-white text-black' : 'bg-black text-white')
                        : (isDark ? 'bg-[#27272a] text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* === PHOTO GRID (MASONRY STYLE) === */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {filteredPhotos.map((photo) => (
                <div 
                    key={photo.id}
                    onClick={() => setSelectedImage(photo)}
                    className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer mb-4"
                >
                    {/* Image */}
                    <img 
                        src={photo.src} 
                        alt={photo.caption} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {photo.caption}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Jika tidak ada foto */}
        {filteredPhotos.length === 0 && (
            <div className="text-center py-20 opacity-50">
                <p>Tidak ada foto di kategori ini.</p>
            </div>
        )}

        {/* === LIGHTBOX MODAL (POPUP) === */}
        {selectedImage && (
            <div 
                className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedImage(null)} // Tutup jika klik area kosong
            >
                {/* Tombol Close */}
                <button 
                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    onClick={() => setSelectedImage(null)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <div 
                    className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()} // Mencegah tutup jika klik gambar
                >
                    <img 
                        src={selectedImage.src} 
                        alt={selectedImage.caption} 
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                    <div className="mt-4 text-center">
                        <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full mb-2 inline-block backdrop-blur-md">
                            {selectedImage.category}
                        </span>
                        <p className="text-white text-lg font-medium">
                            {selectedImage.caption}
                        </p>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
}
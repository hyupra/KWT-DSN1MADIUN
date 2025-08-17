import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import gambar lokal dari folder ./gallery
import img1 from "./gallery/1.jpg";
import img2 from "./gallery/2.jpg";
import img3 from "./gallery/3.jpg";
import img4 from "./gallery/4.jpg";
import img5 from "./gallery/5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Pakai gambar lokal
  const galleryImages = [
    { src: img1, title: "Sesi Pelatihan Hidroponik", category: "Pelatihan" },
    { src: img2, title: "Panen Sayuran Segar", category: "Panen" },
    { src: img3, title: "Workshop Komunitas", category: "Kegiatan" },
    { src: img4, title: "Operasional Rumah Kaca", category: "Kegiatan" },
    { src: img5, title: "Rapat Kepemimpinan", category: "Pelatihan" },
  ];

  const categories = ["Semua", "Pelatihan", "Panen", "Kegiatan"];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredImages =
    activeCategory === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-[#A5D6A7]/20 to-[#81C784]/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Judul */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6">
              Galeri Foto
            </h2>
            <div className="w-24 h-1 bg-[#81C784] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Jelajahi perjalanan kami melalui gambar yang menampilkan kegiatan
              kami, panen yang sukses, sesi pelatihan, dan komunitas yang hidup
              yang telah kami bangun bersama.
            </p>

            {/* Filter Kategori */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#2E7D32] text-white shadow-lg"
                      : "bg-white text-[#2E7D32] hover:bg-[#A5D6A7]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Foto */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-[#A5D6A7]">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-[#A5D6A7] transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Prev Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#A5D6A7] transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#A5D6A7] transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Gambar di Modal */}
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {/* Caption */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-[#A5D6A7]">
                    {filteredImages[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

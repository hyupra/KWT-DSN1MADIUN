import React from 'react';
import { Droplets, Fish, Maximize } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Pertanian Hidroponik',
      icon: Droplets,
      image: 'https://images.pexels.com/photos/4022103/pexels-photo-4022103.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Metode budidaya modern tanpa tanah menggunakan larutan air kaya nutrisi.',
      method: 'Kami menggunakan sistem NFT (Nutrient Film Technique) dan Deep Water Culture untuk menanam sayuran tanpa tanah, memastikan pengiriman nutrisi optimal ke akar tanaman.',
      advantages: [
        'Menggunakan 90% lebih sedikit air dibanding pertanian tradisional',
        'Menghasilkan 30-50% lebih tinggi per meter persegi',
        'Menghilangkan penyakit dan hama yang berasal dari tanah',
        'Produksi sepanjang tahun tanpa tergantung cuaca',
        'Mengurangi kerja fisik dan beban punggung'
      ],
      results: 'Sistem hidroponik kami telah menghasilkan lebih dari 2.500kg sayuran segar setiap tahun, termasuk selada, tomat, dan rempah-rempah, menghasilkan pendapatan berkelanjutan untuk 45+ anggota wanita.'
    },
    {
      title: 'Budidaya Lele dengan Irigasi yang Tepat',
      icon: Fish,
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Budidaya perairan berkelanjutan dengan sistem manajemen air canggih.',
      method: 'Kami menerapkan sistem budidaya perairan resirkulasi (RAS) dengan biofilter dan pemantauan kualitas air otomatis untuk menjaga kesehatan ikan dan kondisi pertumbuhan optimal.',
      advantages: [
        'Penggunaan air efisien dengan sistem daur ulang',
        'Tingkat kelangsungan hidup ikan lebih tinggi (95%+)',
        'Siklus pertumbuhan lebih cepat (4-6 bulan)',
        'Dampak lingkungan yang berkurang',
        'Sumber protein konsisten untuk komunitas'
      ],
      results: 'Berhasil membudidayakan lebih dari 5.000 lele setiap tahun dengan berat rata-rata 800g-1,2kg, memberikan keamanan nutrisi dan aliran pendapatan tambahan untuk anggota kami.'
    },
    {
      title: 'Optimalisasi Lahan Kecil',
      icon: Maximize,
      image: 'https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Memaksimalkan produktivitas pertanian melalui teknik pertanian intensif.',
      method: 'Kami menggunakan metode pertanian vertikal, penanaman bergilir, dan tumpang sari yang dikombinasikan dengan teknik pertanian presisi untuk mencapai kepadatan tanaman maksimum.',
      advantages: [
        'Meningkatkan hasil per meter persegi sebesar 200-300%',
        'Memanfaatkan ruang vertikal secara efisien',
        'Mengurangi kebutuhan ekspansi lahan',
        'Biaya input lebih rendah per unit produksi',
        'Menciptakan aliran pendapatan yang beragam'
      ],
      results: 'Mengubah lahan 0,5 hektar untuk menghasilkan hasil setara dengan pertanian tradisional 2 hektar, menanam 15+ varietas tanaman termasuk sayuran, rempah, dan tanaman obat secara bersamaan.'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6">
              Program Unggulan Kami
            </h2>
            <div className="w-24 h-1 bg-[#81C784] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan program pertanian inovatif kami yang menggabungkan teknologi modern 
              dengan praktik berkelanjutan untuk memaksimalkan produktivitas dan pengelolaan lingkungan.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6 bg-[#2E7D32] p-4 rounded-xl">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#2E7D32] mb-4">{program.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Metode & Pendekatan</h4>
                    <p className="text-gray-600 mb-4">{program.method}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Keunggulan Utama</h4>
                    <ul className="space-y-2 mb-4">
                      {program.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-[#81C784] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#A5D6A7]/20 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-[#2E7D32] mb-3">Hasil yang Dicapai</h4>
                    <p className="text-gray-700">{program.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
import React from "react";
import { Users, Heart, Sprout, Award } from "lucide-react";

// Import foto lokal
import aboutPhoto from "./gallery/IMG-20250817-WA0013.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "150+", label: "Anggota Wanita" },
    { icon: Sprout, number: "5", label: "Tahun Pengalaman" },
    { icon: Heart, number: "12", label: "Komunitas Desa" },
    { icon: Award, number: "25+", label: "Kisah Sukses" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6">
              Tentang Komunitas Kami
            </h2>
            <div className="w-24 h-1 bg-[#81C784] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Didirikan pada Tahun 2019
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kelompok Tani Wanita didirikan dengan visi untuk memberdayakan
                wanita desa melalui praktik pertanian berkelanjutan dan
                inovatif. Organisasi kami dikelola sepenuhnya oleh wanita desa
                yang berdedikasi dan memahami tantangan serta peluang unik dari
                kehidupan pertanian pedesaan.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami percaya pada kekuatan{" "}
                <strong className="text-[#2E7D32]">kebersamaan</strong>, memupuk{" "}
                <strong className="text-[#2E7D32]">gotong royong</strong>, dan
                menciptakan peluang bagi wanita untuk mengambil peran
                kepemimpinan dalam pertanian. Melalui teknik pertanian modern
                yang ramah lingkungan, kami tidak hanya menanam tanaman – kami
                membangun komunitas yang lebih kuat dan masa depan yang lebih
                cerah.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pendekatan kami menggabungkan kebijaksanaan tradisional dengan
                inovasi pertanian terdepan, memastikan bahwa setiap wanita dalam
                kelompok kami memiliki pengetahuan, sumber daya, dan dukungan
                yang diperlukan untuk berhasil dalam pertanian berkelanjutan
                sambil melestarikan lingkungan untuk generasi mendatang.
              </p>
            </div>

            <div className="relative">
              <img
                src={aboutPhoto}
                alt="Petani wanita bekerja bersama"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2E7D32] text-white p-6 rounded-xl shadow-xl">
                <p className="font-bold text-lg">Memberdayakan Wanita</p>
                <p className="text-sm opacity-90">Sejak 2019</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#A5D6A7]/20 p-6 rounded-2xl mb-4 group-hover:bg-[#2E7D32] transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-[#2E7D32] mx-auto group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-[#2E7D32] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

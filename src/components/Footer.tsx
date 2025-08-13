import React from "react";
import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <Leaf className="w-6 h-6 text-[#2E7D32]" />
                </div>
                <span className="text-xl font-bold">Kelompok Tani Wanita</span>
              </div>
              <p className="text-[#A5D6A7] mb-4 max-w-md">
                Memberdayakan wanita desa melalui pertanian berkelanjutan,
                teknik pertanian inovatif, dan kolaborasi komunitas sejak 2019.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>Dibuat dengan</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>untuk pertanian berkelanjutan</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2 text-[#A5D6A7]">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#management"
                    className="hover:text-white transition-colors"
                  >
                    Kepengurusan
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-white transition-colors"
                  >
                    Program
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    Galeri
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Program Kami</h3>
              <ul className="space-y-2 text-[#A5D6A7]">
                <li>Pertanian Hidroponik</li>
                <li>Budidaya Lele</li>
                <li>Optimalisasi Lahan</li>
                <li>Pelatihan & Workshop</li>
                <li>Pengembangan Komunitas</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#81C784]/30 pt-8 text-center">
            <p className="text-[#A5D6A7]">
              © 2025 Wahyu Prayoga. Hak cipta dilindungi. | Membangun masa depan
              berkelanjutan bersama.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

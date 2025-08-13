import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1 bg-[#81C784] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siap bergabung dengan misi kami atau ingin tahu lebih banyak
              tentang program kami? Kami ingin mendengar dari Anda dan menyambut
              anggota baru ke komunitas kami yang berkembang.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A5D6A7]/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Brawijaya
                        <br />
                        Dsn 1 Madiun Desa Rengas,Kec. Bekri, Kab. Lampung Tengah
                        <br />
                        Lampung, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A5D6A7]/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telepon</h4>
                      <p className="text-gray-600">+62 857-8393-1695</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A5D6A7]/20 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600">+62 857-8393-1695</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A5D6A7]/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">kwtdsn1madiun@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-[#2E7D32] mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#A5D6A7]/20 p-3 rounded-lg hover:bg-[#2E7D32] hover:text-white transition-all duration-300 group"
                  >
                    <Facebook className="w-6 h-6 text-[#2E7D32] group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#A5D6A7]/20 p-3 rounded-lg hover:bg-[#2E7D32] hover:text-white transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-[#2E7D32] group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#A5D6A7]/20 p-3 rounded-lg hover:bg-[#2E7D32] hover:text-white transition-all duration-300 group"
                  >
                    <Twitter className="w-6 h-6 text-[#2E7D32] group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#A5D6A7]/20 to-[#81C784]/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#2E7D32] mb-6">
                Kirim Pesan kepada Kami
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                      placeholder="Nama depan Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                      placeholder="Nama belakang Anda"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                    placeholder="email@anda.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Ceritakan tentang minat Anda bergabung dengan kelompok kami atau ajukan pertanyaan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B5E20] transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

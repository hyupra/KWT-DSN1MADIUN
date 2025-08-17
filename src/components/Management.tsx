import React from "react";
import { Crown, Users, FileText, DollarSign, Star } from "lucide-react";

// Import foto lokal
import photo1 from "./gallery/office-worker.png";
import women from "./gallery/women.png";

const Management = () => {
  const managementTeam = [
    {
      name: "Kepala Kampung Rengas",
      position: "Pembina",
      icon: Crown,
      photo: photo1,
      description:
        "Memimpin perencanaan strategis dan program penjangkauan komunitas. Dengan 8 tahun pengalaman pertanian, beliau memandu visi kami tentang pertanian berkelanjutan dan pemberdayaan wanita.",
    },
    {
      name: "Ibu Rifi Agustina",
      position: "Penasehat",
      icon: Crown,
      photo: women,
      description:
        "Memimpin perencanaan strategis dan program penjangkauan komunitas. Dengan 8 tahun pengalaman pertanian, beliau memandu visi kami tentang pertanian berkelanjutan dan pemberdayaan wanita.",
    },
    {
      name: "Mudatul Hikmah",
      position: "Ketua",
      icon: Crown,
      photo: women,
      description:
        "Memimpin perencanaan strategis dan program penjangkauan komunitas. Dengan 8 tahun pengalaman pertanian, beliau memandu visi kami tentang pertanian berkelanjutan dan pemberdayaan wanita.",
    },
    {
      name: "Laila Trisnawati",
      position: "Sekretaris",
      icon: Users,
      photo: women,
      description:
        "Mengawasi operasional harian dan koordinasi anggota. Spesialis dalam sistem hidroponik dan telah melatih lebih dari 100 wanita dalam teknik pertanian modern.",
    },
    {
      name: "Ma'rifatun",
      position: "Sekretaris",
      icon: FileText,
      photo: women,
      description:
        "Mengelola dokumentasi, catatan rapat, dan komunikasi dengan mitra eksternal. Memastikan transparansi dan pencatatan yang tepat untuk semua kegiatan kelompok.",
    },
  ];

  return (
    <section
      id="management"
      className="py-20 bg-gradient-to-br from-[#A5D6A7]/20 to-[#81C784]/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6">
              Tim Kepemimpinan Kami
            </h2>
            <div className="w-24 h-1 bg-[#81C784] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kenali para wanita berdedikasi yang memimpin organisasi kami
              dengan semangat, keahlian, dan komitmen yang tak tergoyahkan untuk
              memberdayakan komunitas pedesaan melalui pertanian berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#2E7D32] p-3 rounded-full">
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#2E7D32] font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
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

export default Management;

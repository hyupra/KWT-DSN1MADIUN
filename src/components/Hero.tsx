import React from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E7D32] to-[#81C784] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <TypeAnimation
              sequence={[
                "Tumbuh Bersama",
                1000,
                "Sejahtera Bersama",
                1000,
                "Tani Wanita",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Melalui pertanian berkelanjutan, inovasi, dan kolaborasi komunitas,
            kami membangun masa depan yang lebih cerah untuk masyarakat desa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToAbout}
              className="bg-white text-[#2E7D32] px-8 py-4 rounded-full font-semibold hover:bg-[#A5D6A7] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Pelajari Misi Kami
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2E7D32] transition-all duration-300"
            >
              Lihat Program Kami
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 right-8 animate-bounce text-white"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

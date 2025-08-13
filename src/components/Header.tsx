import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-[#2E7D32] p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-[#2E7D32]" : "text-white"
              }`}
            >
              KWT DSN 1 MADIUN RENGAS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: "about", label: "Tentang Kami" },
              { id: "management", label: "Kepengurusan" },
              { id: "programs", label: "Program" },
              { id: "gallery", label: "Galeri" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-[#2E7D32] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-[#2E7D32]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col py-4">
              {[
                { id: "about", label: "Tentang Kami" },
                { id: "management", label: "Kepengurusan" },
                { id: "programs", label: "Program" },
                { id: "gallery", label: "Galeri" },
                { id: "contact", label: "Kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium py-3 px-4 text-gray-700 hover:text-[#2E7D32] hover:bg-[#A5D6A7]/20 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { Menu, Waves, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full z-50 bg-white/90 backdrop-blur-md shadow-sm top-0 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <a href="#hero">
              <Waves className="h-12 w-12 text-cyan-600 bg-cyan-300 rounded-full p-2" />
            </a>
            <a href="#hero">
              {" "}
              <span className="ml-2 font-merriweather font-bold text-2xl text-slate-900">
                DeepBlue
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#latest"
              className="text-slate-600 hover:text-cyan-600 font-inter font-medium transition-colors"
            >
              Articles
            </a>
            <a
              href="#marine-life"
              className="text-slate-600 hover:text-cyan-600 font-inter font-medium transition-colors"
            >
              Marine Life
            </a>
            <a
              href="#expeditions"
              className="text-slate-600 hover:text-cyan-600 font-inter font-medium transition-colors"
            >
              Expeditions
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-cyan-600 font-inter font-medium transition-colors"
            >
              About Us
            </a>
            <a href="#newsletter">
              <button className="bg-cyan-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-cyan-700 transition-colors">
                Subscribe
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a
              href="#latest"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md"
            >
              Articles
            </a>
            <a
              href="#marine-life"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md"
            >
              Marine Life
            </a>
            <a
              href="#expeditions"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md"
            >
              Expeditions
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md"
            >
              About Us
            </a>
            <a href="#newsletter" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-4 bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-700 transition-colors">
                Subscribe
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

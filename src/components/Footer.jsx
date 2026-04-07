import React from "react";
import { Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Waves className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 font-merriweather font-bold text-2xl text-white">
                DeepBlue
              </span>
            </div>
            <p className="font-inter text-slate-400 max-w-sm mb-6">
              Dedicated to exploring and protecting the wonders of our oceans.
              Join our community of ocean lovers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Explore
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <a
                  href="#latest"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#marine-life"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Marine Life
                </a>
              </li>
              <li>
                <a
                  href="#expeditions"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Expeditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm font-inter text-slate-500">
          <p>
            © {new Date().getFullYear()} DeepBlue Ocean Blog. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Twitter</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

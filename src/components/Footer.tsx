import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const whatsappLink = "https://wa.me/918305036847?text=Hi%2C%20I%20want%20to%20book%20my%20website%20for%20%E2%82%B9599";

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                UM
              </div>
              <span className="text-2xl font-bold">
                UM <span className="text-blue-400">Studio</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating stunning websites that transform businesses and drive real results. Your success is our mission.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="block text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              <a href="#pricing" className="block text-gray-400 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#portfolio" className="block text-gray-400 hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:malviyayash1205@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">malviyayash1205@gmail.com</span>
              </a>
              <a
                href="tel:+918305036847"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 83050 36847</span>
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Utkarsh Malviya</span>. All rights reserved.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
            >
              Book Your Website Now
            </a>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Crafting digital experiences that drive business growth across India.
          </p>
        </div>
      </div>
    </footer>
  );
}

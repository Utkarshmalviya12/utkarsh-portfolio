import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const whatsappLink = "https://wa.me/918305036847?text=Hi%2C%20I%20want%20to%20book%20my%20website%20for%20%E2%82%B9599";

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-8 hover:shadow-xl transition-shadow">
          <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
          <span className="text-sm font-bold text-gray-800">Lightning Fast - Loads in under 2 seconds</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
          Websites That Bring You<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Customers, Not Just Visitors
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your business with a stunning, high-performance website that converts visitors into loyal customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center transform hover:scale-105 text-lg"
          >
            Book Your Website – Just ₹599 to Start
            <ArrowRight className="w-6 h-6" />
          </a>

          <button
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all border-2 border-gray-300 w-full sm:w-auto transform hover:scale-105 text-lg"
          >
            Get Started Free
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-sm text-gray-700 font-medium">Happy Clients</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2s</div>
            <div className="text-sm text-gray-700 font-medium">Load Time</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-700 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

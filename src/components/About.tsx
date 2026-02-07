export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            WHO I AM
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Your Partner in Digital Success
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl font-bold text-white">UM</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Utkarsh Malviya
              </h3>
              <p className="text-blue-600 font-semibold mb-4">Frontend Developer & Web Designer</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Modern UI/UX Design Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Performance Optimization Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>SEO & Conversion Focused</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate frontend developer who specializes in creating websites that don't just look beautiful – they drive real business results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in modern web technologies and a deep understanding of user behavior, I help small businesses, restaurants, and local brands establish a powerful online presence that converts visitors into loyal customers.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600 mt-6">
                <p className="text-gray-800 font-medium italic">
                  "Every website I build is mobile-first, lightning-fast, SEO-optimized, and designed with one goal: to grow your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

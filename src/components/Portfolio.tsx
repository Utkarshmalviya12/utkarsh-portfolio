import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Restaurant Website",
      type: "Food & Dining",
      description: "Modern restaurant site with menu, online ordering, and table reservations",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Fitness Gym",
      type: "Health & Wellness",
      description: "Dynamic gym website with class schedules, membership plans, and trainer profiles",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Local Shop",
      type: "Retail & Commerce",
      description: "E-commerce site for local business with product catalog and online ordering",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Portfolio Samples
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Examples of websites I've built for businesses like yours
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/40 transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Details <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Before vs After Transformation
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-600 font-bold mb-3 text-lg">Before</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Outdated design that looks unprofessional</li>
                <li>• Slow loading times losing customers</li>
                <li>• Not mobile-friendly, hard to navigate</li>
                <li>• Invisible on Google searches</li>
                <li>• No clear call-to-action</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-500">
              <div className="text-green-600 font-bold mb-3 text-lg">After</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern, professional design that builds trust</li>
                <li>• Lightning-fast performance under 2 seconds</li>
                <li>• Perfect on all devices and screen sizes</li>
                <li>• SEO optimized for better Google ranking</li>
                <li>• Clear paths to contact and convert visitors</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Transform Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

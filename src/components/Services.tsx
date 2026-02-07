import { Code, Smartphone, Search, Globe, Headphones, UtensilsCrossed } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Website from Scratch",
      description: "Unique, tailor-made websites built specifically for your business needs"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Responsive Design",
      description: "Perfect experience on all devices – phones, tablets, and desktops"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Get found on Google with proper SEO implementation from day one"
    },
    {
      icon: Globe,
      title: "Deployment & Hosting",
      description: "Complete setup on your custom domain with reliable hosting"
    },
    {
      icon: Headphones,
      title: "1 Month Free Updates & Support",
      description: "Full support and unlimited changes for the first month after launch"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Delivery Integration",
      description: "Seamless integration with Zomato, Uber Eats, and Swiggy for restaurants"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            WHAT YOU GET
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Services Included
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a professional online presence that drives results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              All-Inclusive Package
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              No hidden fees, no surprises. Everything you see here is included in your website package.
              One price, complete solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

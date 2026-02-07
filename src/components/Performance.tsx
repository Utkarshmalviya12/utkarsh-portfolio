import { Zap, Gauge, Smartphone, Shield } from 'lucide-react';

export default function Performance() {
  const features = [
    {
      icon: Zap,
      value: "< 2s",
      label: "Load Time"
    },
    {
      icon: Gauge,
      value: "90+",
      label: "Performance Score"
    },
    {
      icon: Smartphone,
      value: "100%",
      label: "Mobile Optimized"
    },
    {
      icon: Shield,
      value: "Secure",
      label: "HTTPS & Protected"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full mb-4">
            <Zap className="w-5 h-5 text-yellow-900 fill-yellow-900" />
            <span className="text-sm font-bold text-yellow-900">PERFORMANCE GUARANTEED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Optimized for Speed & Results
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your website will load in under 2 seconds. Fast websites mean better Google rankings,
            happier visitors, and more customers for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{feature.value}</div>
              <div className="text-sm text-gray-600 font-medium">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

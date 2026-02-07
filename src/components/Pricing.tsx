import { IndianRupee, CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Simple, Transparent Pricing
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <IndianRupee className="w-8 h-8 text-blue-600" />
            <span className="text-5xl font-bold text-gray-900">599</span>
            <span className="text-xl text-gray-600">to start</span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">
                <strong>₹599 booking fee</strong> secures your spot and gets us started
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">
                <strong>Final cost up to ₹20,000</strong> depending on features and complexity
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">
                <strong>Advanced features cost extra</strong> – custom integrations, e-commerce, etc.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">
                <strong>Free consultation before starting</strong> – no surprises, clear quotes upfront
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 italic">
            Perfect for small businesses, restaurants, and local brands looking for quality without breaking the bank.
          </p>
        </div>
      </div>
    </section>
  );
}

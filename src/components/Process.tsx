import { MessageCircle, FileText, Palette, RefreshCw, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "We discuss your business, goals, and what you need from your website"
    },
    {
      icon: FileText,
      title: "Requirements",
      description: "I gather all details, content, and preferences to create your perfect site"
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "I build your custom website with modern design and clean code"
    },
    {
      icon: RefreshCw,
      title: "Revisions",
      description: "You review and request changes until you're 100% satisfied"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Your website goes live with full support for the first month"
    }
  ];

  return (
    <section id="process" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Simple Process, Great Results
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From first chat to launch, I make it easy every step of the way
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

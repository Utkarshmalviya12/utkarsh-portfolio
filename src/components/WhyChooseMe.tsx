import { Zap, TrendingUp, Users, Wallet } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Your website ready in days, not months. Quick turnaround without compromising quality."
    },
    {
      icon: TrendingUp,
      title: "Business-Focused Design",
      description: "Every design decision is made to help your business grow and convert visitors."
    },
    {
      icon: Users,
      title: "Beginner-Friendly Support",
      description: "I speak your language, not tech jargon. Easy to work with and always available."
    },
    {
      icon: Wallet,
      title: "Affordable for Small Businesses",
      description: "Premium quality at prices that make sense for local businesses and startups."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose Me?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-blue-100">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

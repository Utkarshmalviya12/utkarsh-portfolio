import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar's Restaurant",
      location: "Mumbai",
      text: "Our online orders increased by 40% after the new website launch. The food delivery integration works perfectly and customers love how easy it is to browse our menu.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "FitZone Gym",
      location: "Pune",
      text: "Fast, professional, and exactly what we needed. New members can now book classes online and our gym looks so much more professional. Worth every rupee!",
      rating: 5
    },
    {
      name: "Amit Patel",
      business: "Patel Electronics",
      location: "Ahmedabad",
      text: "I had no idea where to start with a website. Yash made it so simple and explained everything clearly. Now customers can see our products online before visiting the shop.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      business: "Bloom Boutique",
      location: "Bangalore",
      text: "Beautiful design and super fast delivery! My boutique now has an online presence that matches the quality of my products. Getting inquiries from all over the city now.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      business: "Singh Dental Clinic",
      location: "Delhi",
      text: "Professional website at an affordable price. Patients can now book appointments online and we get more inquiries through the website. Highly recommended for small businesses!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          What My Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Real feedback from real business owners across India
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
                <div className="text-sm text-blue-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

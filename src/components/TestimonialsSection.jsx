import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samantha K.",
    role: "Nursing Student, U.S.",
    feedback:
      "Online Tutors Hub saved my semester. I was falling behind in my online classes and they stepped in with expert help and timely updates. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    role: "Business Major, UK",
    feedback:
      "Their tutors handled my assignments professionally and communicated with me throughout. I loved the 24/7 support and flexible payments.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Engineering Student, Canada",
    feedback:
      "Got help with my online exam — not only did I pass, I scored better than expected. They deliver what they promise. Totally stress-free!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-gray-500">
          Real feedback from learners who’ve trusted Online Tutors Hub with
          their success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4 italic">
              "{testimonial.feedback}"
            </p>

            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

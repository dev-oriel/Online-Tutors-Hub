import React from "react";
import { Star } from "lucide-react";

const reviewsData = [
  {
    name: "Sarah T.",
    country: "USA",
    review:
      "Smartwave Tutors Hub truly transformed my online learning experience. Their tailored approach to each class helped me stay on track, and I saw a significant improvement in my grades. Highly recommend their services for anyone juggling coursework and tight deadlines!",
    rating: 5,
  },
  {
    name: "James L.",
    country: "Canada",
    review:
      "I was struggling with a particularly tough math course, but Smartwave Tutors Hub helped me break down the concepts and understand the material better. Their tutors are real experts, and the personalized academic plan was incredibly useful.",
    rating: 5,
  },
  {
    name: "Emily R.",
    country: "UK",
    review:
      "The tutors at Smartwave Tutors Hub are phenomenal. They helped me with a variety of subjects, from programming to business management. I always felt supported and confident in my work. Their timely submissions and progress updates were a huge plus.",
    rating: 4,
  },
  {
    name: "Michael B.",
    country: "Australia",
    review:
      "I needed urgent help with my final exams, and Smartwave Tutors Hub delivered. They’re fast, reliable, and ensure the work is top quality. I’m glad I found them when I was stuck. Will definitely come back for future courses!",
    rating: 5,
  },
  {
    name: "Olivia C.",
    country: "India",
    review:
      "The team at Smartwave Tutors Hub went above and beyond to help me complete my research project on time. Their in-depth knowledge and attention to detail were amazing. I couldn't have asked for better support during such a stressful time.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#f9f9f9] py-20 px-4 sm:px-10 lg:px-20">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0A66C2] mb-4 tracking-tight">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Students from around the world trust Smartwave Tutors Hub to help them
          succeed. Read what they have to say.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                {review.name[0]}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#0A66C2]">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.country}</p>
              </div>
            </div>

            <div className="flex items-center mb-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < review.rating ? "#facc15" : "none"}
                />
              ))}
            </div>

            <p className="text-gray-700 text-base leading-relaxed mt-auto">
              “{review.review}”
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A66C2] mb-4">
          Ready to Experience the Difference?
        </h3>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Whether you're tackling assignments, preparing for exams, or
          navigating a full course—Smartwave Tutors Hub has your back.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#0A66C2] hover:bg-[#084b98] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
};

export default Reviews;

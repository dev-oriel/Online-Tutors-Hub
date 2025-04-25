import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const reviewsData = [
  {
    name: "John D.",
    review:
      "TakeMyClass provided me with excellent support during my online courses. The tutors were knowledgeable and always available to help me understand complex topics. Thanks to them, I passed all my classes with flying colors!",
    rating: 5,
  },
  {
    name: "Maria W.",
    review:
      "I was struggling to keep up with my workload, but TakeMyClass helped me stay on track. The tutors are amazing, and they always made sure I was on top of my assignments. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "David P.",
    review:
      "The tutors at TakeMyClass really know their stuff. They helped me with everything from simple assignments to complex projects. Their attention to detail and support was invaluable throughout the semester.",
    rating: 4,
  },
  {
    name: "Sophia G.",
    review:
      "I needed help with a few tough courses, and TakeMyClass came to the rescue. The tutors are patient and ensure that all my questions were answered. I’m more confident about my studies thanks to them.",
    rating: 5,
  },
  {
    name: "Liam S.",
    review:
      "TakeMyClass provided top-notch tutoring services, especially for my math and physics courses. Their flexible schedule and personalized approach were exactly what I needed to succeed in my studies.",
    rating: 5,
  },
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const TakeMyClassReviews = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              What Our Clients Are Saying
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">TakeMyClass</span>,
              we help students excel in their online courses by providing expert
              tutoring. Here’s what our clients have to say about their
              experience.
            </p>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {reviewsData.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#0A66C2] font-semibold text-xl">
                    {review.name}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Take Your Classes to the Next Level?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Join the hundreds of students who have successfully completed
              their online courses with the help of TakeMyClass. Get started
              today and experience personalized tutoring at its best.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TakeMyClassReviews;

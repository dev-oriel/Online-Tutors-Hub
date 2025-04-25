import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Comprehensive assistance with math coursework and assignments",
  "Expert guidance in topics like algebra, calculus, geometry, and more",
  "Help with preparing for math exams and quizzes",
  "Personalized tutoring sessions tailored to your needs",
  "Timely support for urgent deadlines and projects",
  "Confidential service with no hidden fees or surprises",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const MathClassHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Math Class Help - Expert Tutoring for Success
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we offer expert assistance for your math studies. Whether you
              need help with algebra, calculus, or geometry, our skilled tutors
              are ready to guide you through your coursework and exams.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Math Class Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Master Your Math Class?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t let math homework overwhelm you. Book a free consultation
              today and see how our tutors can help you ace your math class!
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default MathClassHelp;

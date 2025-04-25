import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Full course assistance from start to finish",
  "Expert tutoring in various subjects",
  "Support for urgent deadlines and exams",
  "Customizable study schedules tailored to your needs",
  "Progress tracking and regular updates",
  "Confidential and professional service with no hidden fees",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const TakeMyClass = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Take My Class - Full Course Assistance
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we offer complete assistance for your classes. Whether you need
              full-course support, personalized tutoring, or help with
              deadlines, we’re here to make your learning experience as smooth
              as possible.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Take My Class Services Include:
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
              Ready to Get Started with Your Class Assistance?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t let your coursework overwhelm you. Book a free consultation
              now and learn how our experts can help you excel in your studies.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TakeMyClass;

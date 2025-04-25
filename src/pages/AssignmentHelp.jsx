import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Custom assignment writing tailored to your needs",
  "Help with understanding difficult topics",
  "Timely submission for urgent assignments",
  "Subject-specific assistance for a variety of disciplines",
  "Plagiarism-free and original work",
  "Detailed explanations for better learning",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const AssignmentHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Expert Assignment Help
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we specialize in providing comprehensive assignment help across
              various subjects. Whether you're stuck with a tricky assignment or
              need help understanding the material, our tutors are here to
              assist you in acing your coursework.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Assignment Help Services Include:
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
              Ready to Get Your Assignment Help?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t let assignments overwhelm you. Book a free consultation
              today to discuss how our experts can assist you in achieving
              better results.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AssignmentHelp;

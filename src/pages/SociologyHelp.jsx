import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Expert help with sociology assignments and essays",
  "Guidance on sociological theories and concepts",
  "Research and analysis support",
  "Case study assistance",
  "Timely help for urgent deadlines",
  "Confidential, high-quality work with no plagiarism",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const SociologyHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Sociology Assistance for Students
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we provide expert help to sociology students. Whether you're
              struggling with theory, research methods, or writing assignments,
              our team of specialists can help you succeed in your sociology
              studies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Sociology Help Services Include:
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
              Need Help with Sociology?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t let sociology assignments overwhelm you. Book a free
              consultation today to discover how our experts can help you
              achieve academic success.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SociologyHelp;

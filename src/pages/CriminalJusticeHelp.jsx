import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Expert help with criminal law assignments",
  "Guidance on understanding legal principles",
  "Assistance with case studies and legal analysis",
  "Help with research and legal writing",
  "Timely help for urgent deadlines",
  "Confidential and plagiarism-free support",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const CriminalJusticeHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Criminal Justice Assistance
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we offer expert guidance and support for students studying
              criminal justice. Whether you need help with case analysis, legal
              principles, or assignments, our experienced tutors are here to
              guide you.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Criminal Justice Help Services Include:
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
              Ready to Get Help with Criminal Justice?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Struggling with criminal justice topics or assignments? Book a
              free consultation today to see how our experts can help you
              succeed.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CriminalJusticeHelp;

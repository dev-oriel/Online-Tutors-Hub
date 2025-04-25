import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Help with marketing strategies, digital marketing, and advertising campaigns",
  "Support for marketing research, consumer behavior analysis, and market segmentation",
  "Expert guidance on branding, positioning, and market analysis",
  "Time management and support for tight deadlines",
  "Confidential and secure academic support",
  "Preparation for marketing certification exams and practical marketing projects",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const MarketingClassHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Smartwave Tutors Hub – Expert Help for Marketing Classes, Exams &
              Assignments
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Welcome to Smartwave Tutors Hub, where we specialize in providing
              expert help for marketing-related coursework, including marketing
              classes, exams, assignments, and research projects. Whether you're
              working on digital marketing campaigns or preparing for a
              marketing certification, our experienced professionals are here to
              support your academic success.
            </p>
          </div>

          {/* Marketing Class Help Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Marketing Class Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Why Hire Smartwave Tutors Hub for Marketing Class Help */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Hire Smartwave Tutors Hub for Marketing Class Help?
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <ListItem text="Expertise in digital marketing, advertising, and market research." />
              <ListItem text="Academic support tailored to your individual marketing course syllabus." />
              <ListItem text="Help with assignments, exams, and marketing projects." />
              <ListItem text="Improved grades and deeper understanding of marketing principles." />
              <ListItem text="Confidentiality and security for your personal and academic information." />
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Get Expert Help with Your Marketing Class?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you're tackling marketing research, preparing for exams,
              or need help with a project, we're here to provide the expert
              assistance you need.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default MarketingClassHelp;

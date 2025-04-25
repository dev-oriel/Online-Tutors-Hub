import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Help with financial accounting, management accounting, and corporate finance",
  "Support for finance-related assignments and research papers",
  "Expert guidance on investment analysis, portfolio management, and financial planning",
  "Time management and support for tight deadlines",
  "Confidential and secure academic support",
  "Preparation for finance certification exams (e.g., CFA, FRM)",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const FinanceClassHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Smartwave Tutors Hub – Expert Help for Finance Classes, Exams &
              Assignments
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Welcome to Smartwave Tutors Hub, where we specialize in providing
              expert help for finance-related coursework, including finance
              classes, exams, assignments, and research projects. Whether you
              need help with accounting, investment analysis, or preparing for
              finance certification exams, our dedicated professionals are here
              to support your academic success.
            </p>
          </div>

          {/* Finance Class Help Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Finance Class Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Why Hire Smartwave Tutors Hub for Finance Class Help */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Hire Smartwave Tutors Hub for Finance Class Help?
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <ListItem text="Expertise in financial accounting, corporate finance, and investment analysis." />
              <ListItem text="Academic support tailored to your individual finance course syllabus." />
              <ListItem text="Help with assignments, exams, and certification exam preparation (CFA, FRM, etc.)." />
              <ListItem text="Improved grades and better understanding of complex finance concepts." />
              <ListItem text="Confidentiality and security for your personal and academic information." />
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Get Expert Help with Your Finance Class?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you're tackling financial accounting, preparing for the
              CFA, or need help with a finance assignment, we're here to support
              you.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FinanceClassHelp;

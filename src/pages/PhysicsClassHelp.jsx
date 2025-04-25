import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Help with physics concepts, equations, and problem-solving techniques",
  "Guidance on physics assignments, quizzes, and exams",
  "Support for topics in mechanics, electromagnetism, thermodynamics, and more",
  "Expert help with lab reports and physics experiments",
  "Confidential academic support with a focus on understanding key principles",
  "Preparation for physics certification exams and related tests",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const PhysicsClassHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Smartwave Tutors Hub – Expert Help for Physics Classes, Exams &
              Assignments
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Welcome to Smartwave Tutors Hub, your trusted academic partner for
              mastering physics. Our expert tutors specialize in providing
              high-quality support for physics classes, assignments, quizzes,
              and exams. Whether you’re struggling with complex formulas or need
              help preparing for your next physics exam, we’ve got you covered.
            </p>
          </div>

          {/* Physics Class Help Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Physics Class Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Why Hire Smartwave Tutors Hub for Physics Class Help */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Hire Smartwave Tutors Hub for Physics Class Help?
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <ListItem text="Expert knowledge in various physics fields: mechanics, optics, thermodynamics, etc." />
              <ListItem text="Support with challenging physics assignments and understanding complex theories." />
              <ListItem text="Help with preparing for exams, quizzes, and lab reports." />
              <ListItem text="Improved academic performance with personalized tutoring." />
              <ListItem text="Guaranteed confidentiality and secure handling of your academic information." />
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Master Your Physics Course?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you need help with assignments, exam preparation, or
              mastering key physics principles, Smartwave Tutors Hub is here to
              guide you to success.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PhysicsClassHelp;

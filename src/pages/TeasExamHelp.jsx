import React from "react";
import CallToActionButton from "../components/CallToActionButton";
import PageWrapper from "../components/PageWrapper";

const services = [
  "Comprehensive support for TEAS exam preparation",
  "Help with mastering the TEAS test sections: Reading, Math, Science, and English",
  "Practice questions and study materials for each subject area",
  "Time management strategies to efficiently tackle the exam",
  "Personalized study plans aligned with your strengths and weaknesses",
  "Expert guidance to boost your chances of passing with a high score",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const TeasExamHelp = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Smartwave Tutors Hub – Expert Help for TEAS Exam Preparation
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Welcome to Smartwave Tutors Hub, your trusted academic partner for
              TEAS exam preparation. Our expert tutors specialize in helping
              students prepare for the TEAS exam with comprehensive support.
              Whether you're looking to master each subject area or need help
              with test-taking strategies, we've got you covered.
            </p>
          </div>

          {/* TEAS Exam Help Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our TEAS Exam Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Why Hire Smartwave Tutors Hub for TEAS Exam Help */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Hire Smartwave Tutors Hub for TEAS Exam Help?
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <ListItem text="Expert tutors with experience in TEAS exam content and strategies" />
              <ListItem text="Personalized study plans tailored to your specific needs and weaknesses" />
              <ListItem text="In-depth preparation for all four TEAS exam sections" />
              <ListItem text="Help with practice exams to simulate real testing conditions" />
              <ListItem text="Boost your confidence and improve your exam scores" />
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Ace Your TEAS Exam?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you're preparing for the TEAS exam for the first time or
              need a refresher, Smartwave Tutors Hub is here to provide the
              expert help you need to succeed.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TeasExamHelp;

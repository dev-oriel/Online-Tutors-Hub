import React from "react";
import { CheckCircle2 } from "lucide-react";
import CallToActionButton from "../components/CallToActionButton";
import PageWrapper from "../components/PageWrapper";
import SectionDivider from "../components/SectionDivider";

const services = [
  "Completion of entire online classes",
  "Weekly quizzes and assignment help",
  "Urgent deadline assistance",
  "Subject-specific tutoring in Math, Science, and more",
  "Real-time updates on course progress",
  "Confidentiality and security of your personal information",
];

const subjects = [
  "Mathematics (Algebra, Calculus, Geometry, Statistics)",
  "Science (Biology, Chemistry, Physics, Environmental Science)",
  "Computer Science (Programming, Networking, Web Development)",
  "Languages (English, Spanish, French, Mandarin)",
  "Business & Finance (Economics, Accounting, Business Management)",
  "Social Sciences (Psychology, Sociology, Philosophy, History)",
];

const reasons = [
  "Academic excellence with expert tutors from various fields",
  "Timely delivery of all assignments and coursework",
  "Reduced stress and better time management",
  "Improved grades with personalized assistance",
  "Confidential and secure service with no hidden fees",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <CheckCircle2 className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0" />
    <span>{text}</span>
  </li>
);

const OnlineClass = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Complete Online Class Assistance
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>
              , we offer expert guidance and support for your online classes.
              Whether you're facing tight deadlines or need full-course support,
              we’re here to help you succeed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Online Class Help Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Subjects We Cover:
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Our qualified tutors cover a wide array of subjects. No matter
              your course, we've got someone to help:
            </p>
            <ul className="space-y-3">
              {subjects.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Students trust{" "}
              <span className="font-semibold text-[#0A66C2]">
                Smartwave Tutors Hub
              </span>{" "}
              for these top reasons:
            </p>
            <ul className="space-y-3">
              {reasons.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          <SectionDivider />

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Don’t let online classes overwhelm you. Book a free consultation
              to explore how we can support your academic journey.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default OnlineClass;

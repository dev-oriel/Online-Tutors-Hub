import React from "react";
import CallToActionButton from "../components/CallToActionButton"; // Reuse your CTA Button
import PageWrapper from "../components/PageWrapper"; // Reuse your Page Wrapper

const services = [
  "Proctored online exam services for academic institutions",
  "Customizable exam formats (MCQs, essays, short answers)",
  "Secure, reliable online exam hosting with real-time monitoring",
  "Instant feedback and grading for students",
  "Support for various exam subjects and academic levels",
  "Comprehensive analytics for exam results and student performance",
];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
    <span className="text-yellow-400 w-5 h-5 mt-1 flex-shrink-0">✔</span>
    <span>{text}</span>
  </li>
);

const OnlineExams = () => {
  return (
    <PageWrapper>
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2]">
              Smartwave Tutors Hub – Expert Help for Online Classes, Exams,
              Assignments & More
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Welcome to Smartwave Tutors Hub – your trusted academic partner in
              navigating the challenges of online learning. We specialize in
              providing expert support for online classes, exams, assignments,
              research projects, quizzes, discussion boards, posts, and replies.
              Whether you're overwhelmed with coursework or simply seeking
              reliable academic support, our dedicated professionals are here to
              help you succeed.
            </p>
          </div>

          {/* Online Exam Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Our Online Exam Services Include:
            </h2>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </ul>
          </div>

          {/* Online Class Help */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Online Class Help Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              At Smartwave Tutors Hub, we provide comprehensive online class
              assistance across a wide range of subjects and learning platforms.
              From completing entire courses to managing weekly quizzes or
              urgent deadlines, our academic experts ensure top-quality support
              with guaranteed confidentiality.
            </p>
            <h3 className="text-xl font-semibold text-[#0A66C2] mt-4">
              How Our Online Class Support Works:
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <ListItem text="Free Initial Consultation: Discuss your course needs, deadlines, and academic goals." />
              <ListItem text="Tailored Academic Plan: We design a personalized support roadmap aligned with your syllabus." />
              <ListItem text="Assigned Subject-Matter Experts: Only qualified tutors handle your work." />
              <ListItem text="Real-Time Updates: Stay informed with ongoing progress reports." />
              <ListItem text="Timely Deliverables: All work is submitted within agreed timelines." />
            </ul>
          </div>

          {/* Why Hire Smartwave Tutors Hub */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">
              Why Hire Smartwave Tutors Hub for Online Class Help?
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <ListItem text="Time Management: Balance work, life, and school without stress." />
              <ListItem text="Academic Excellence: Get help from graduates, postgraduates, and subject-matter experts." />
              <ListItem text="Improved Grades: Boost your academic performance through expert-led guidance." />
              <ListItem text="Reduced Stress: Let us handle the pressure while you focus on what matters most." />
              <ListItem text="Confidentiality Guaranteed: Your identity and login credentials are 100% secure with us." />
            </ul>
            <p className="text-gray-600 text-sm sm:text-base mt-4">
              We’re not just another "take my class for me" website. We are a
              trusted academic solution provider with a long-standing reputation
              for excellence.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to Take Your Exams Online?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Make your exams hassle-free and secure. Book a free consultation
              to explore how our online exam platform can support your
              institution’s testing needs.
            </p>
            <CallToActionButton />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default OnlineExams;

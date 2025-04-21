import React from "react";
import { FaChalkboardTeacher, FaGlobe, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import onlineClass from "../assets/images/online-class.jpg";
import studySupport from "../assets/images/study-support.jpg";
import orderHelp from "../assets/images/order-help.jpg";

const features = [
  {
    icon: <FaChalkboardTeacher size={40} className="text-[#0c5192]" />,
    title: "Qualified Experts",
    description:
      "Our team consists of subject-matter experts with years of experience helping students excel in exams, classes, and academic projects.",
  },
  {
    icon: <FaGlobe size={40} className="text-[#0c5192]" />,
    title: "Available 24/7",
    description:
      "We offer round-the-clock support to students across the globe. No matter your time zone, we’re here whenever you need us.",
  },
  {
    icon: <FaBookOpen size={40} className="text-[#0c5192]" />,
    title: "Guaranteed Results",
    description:
      "We stand by our promise of academic success, offering guaranteed grades, confidentiality, and progressive payments for your peace of mind.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-20">
      {/* Title and Intro */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#0c5192] mb-6"
        >
          About Us
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Discover how Online Tutors Hub supports students around the world with
          expert-led, personalized academic services.
        </p>
      </div>

      {/* Block 1: About Us */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
            Begin Your Academic Success Story with Online Tutors Hub
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Online Tutors Hub, we’re not just here to help — we’re here to
            elevate your entire learning experience. As a trusted leader in
            academic support, we specialize in a wide range of services designed
            to meet the evolving needs of students worldwide. Whether you're
            juggling online classes, facing tight exam deadlines, or managing
            heavy assignments, our expert tutors are by your side every step of
            the way.
            <br />
            <br />
            We believe in more than just tutoring — we provide personalized
            guidance that empowers you to take charge of your education with
            confidence. Our mission is simple: deliver dependable, high-quality
            academic assistance that drives real results.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={onlineClass}
            alt="Online Class Help"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Block 2: What We Offer */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 mb-20">
        <div className="flex justify-center order-1 md:order-none">
          <img
            src={studySupport}
            alt="Study Support"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
            What We Offer
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced tutors are ready to assist with{" "}
            <strong>essay writing</strong>,{" "}
            <strong>homework and assignments</strong>,{" "}
            <strong>online classes</strong>, and{" "}
            <strong>exam preparation</strong>. We ensure complete
            confidentiality, timely delivery, and academic excellence tailored
            to your exact needs. With 24/7 availability, we’re ready to assist
            whenever you need help.
          </p>
        </div>
      </div>

      {/* Block 3: How Should I Place an Order? */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
            How Should I Place an Order?
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Placing an order with us is quick, easy, and stress-free. Whether
            you need help with an online exam, assignment, or full course, we’ve
            streamlined the process so you can focus on what matters — your
            success.
            <br />
            <br />
            Just click the <strong>live chat button</strong> on this page to
            connect with one of our friendly support agents. Tell us what you
            need — from deadlines to subjects — and we’ll handle the rest.
            <br />
            <br />
            After confirming the details, we’ll assign your dedicated tutor who
            matches your academic level and subject. We stay connected with you
            every step of the way — delivering updates, progress, and full
            support until completion.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={orderHelp}
            alt="How to Order Help"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#0c5192] mb-6">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-semibold text-[#0c5192] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

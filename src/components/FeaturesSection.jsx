import React from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaClock,
  FaCertificate,
  FaChalkboardTeacher,
  FaGlobe,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaChalkboardTeacher size={36} className="text-[#ffd816]" />,
    title: "Qualified Experts",
    description:
      "Our team consists of subject-matter experts with years of experience helping students excel in exams, classes, and academic projects.",
  },
  {
    icon: <FaGlobe size={36} className="text-[#ffd816]" />,
    title: "Available 24/7",
    description:
      "We offer round-the-clock support to students across the globe. No matter your time zone, we’re here whenever you need us.",
  },
  {
    icon: <FaBookOpen size={36} className="text-[#ffd816]" />,
    title: "Guaranteed Results",
    description:
      "We stand by our promise of academic success, offering guaranteed grades, confidentiality, and progressive payments for your peace of mind.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold font-bold text-[#0c5192] mb-6"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Explore the powerful features that make{" "}
          <span className="text-[#ffd816] font-semibold">
            Smartwave Tutors Hub
          </span>{" "}
          your ideal learning companion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#0c5192] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

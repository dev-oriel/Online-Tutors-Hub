import React from "react";
import { motion } from "framer-motion";

const Introductory = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c5192] mb-6 leading-snug"
          >
            Trusted Online Class & Exam Help Services
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional academic support tailored for busy students — wherever
            you are, whenever you need it.
          </p>
        </div>

        <div className="space-y-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed px-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Balancing coursework, work commitments, and personal life can feel
            overwhelming. That’s why OnlineTutorsHub is here — to provide
            dedicated online class help that fits seamlessly into your schedule.
            Each year, we support thousands of students across universities and
            colleges in the U.S. Our platform connects you with skilled academic
            experts who can handle your assignments, classes, tests, and exams —
            all at student-friendly prices with complete privacy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our qualified team includes subject specialists in English,
            Accounting, Math, Statistics, and many more fields. Whether it’s a
            one-time test or an entire course, we ensure top-quality results and
            timely delivery — with 24/7 support at your fingertips. We’re proud
            to offer affordable, flexible payment plans designed to accommodate
            every budget. And yes — you can absolutely pay someone to take your
            online class, quiz, or exam. That’s what we’re here for. Our
            commitment is simple: make your academic journey easier and more
            successful. Let us handle the pressure while you focus on what
            matters most.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Introductory;

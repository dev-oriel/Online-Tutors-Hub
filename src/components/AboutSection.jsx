import React from "react";
import { motion } from "framer-motion";
import onlineClass from "../assets/images/online-class.jpg";
import studySupport from "../assets/images/study-support.jpg";
import orderHelp from "../assets/images/order-help.jpg";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f9f9f9] py-20 px-4 sm:px-8 lg:px-20">
      {/* Title and Intro */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0c5192] mb-6 tracking-tight"
        >
          About Us
        </motion.h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover how Smartwave Tutors Hub supports students around the world
          with expert-led, personalized academic services.
        </p>
      </div>

      {/* Content Blocks */}
      <div className="space-y-28">
        {/* Block 1 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0c5192] mb-4">
              Begin Your Academic Success Story with Smartwave Tutors Hub
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-8">
              At Smartwave Tutors Hub, we’re not just here to help — we’re here
              to elevate your entire learning experience. As a trusted leader in
              academic support, we specialize in a wide range of services
              designed to meet the evolving needs of students worldwide. Whether
              you're juggling online classes, facing tight exam deadlines, or
              managing heavy assignments, our expert tutors are by your side
              every step of the way.
              <br />
              <br />
              We believe in more than just tutoring — we provide personalized
              guidance that empowers you to take charge of your education with
              confidence. Our mission is simple: deliver dependable,
              high-quality academic assistance that drives real results.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={onlineClass}
              alt="Online Class Help"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <img
              src={studySupport}
              alt="Study Support"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0c5192] mb-4">
              What We Offer
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-8">
              Our experienced tutors are ready to assist with essay writing,
              homework and assignments, online classes, and exam preparation. We
              ensure complete confidentiality, timely delivery, and academic
              excellence tailored to your exact needs. With 24/7 availability,
              we’re ready to assist whenever you need help.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0c5192] mb-4">
              How Should I Place an Order?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-8">
              Placing an order with us is quick, easy, and stress-free. Whether
              you need help with an online exam, assignment, or full course,
              we’ve streamlined the process so you can focus on what matters —
              your success.
              <br />
              <br />
              Just click the <strong>live chat button</strong> on this page to
              connect with one of our friendly support agents. Tell us what you
              need — from deadlines to subjects — and we’ll handle the rest.
              <br />
              <br />
              After confirming the details, we’ll assign your dedicated tutor
              who matches your academic level and subject. We stay connected
              with you every step of the way — delivering updates, progress, and
              full support until completion.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={orderHelp}
              alt="How to Order Help"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

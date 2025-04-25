import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide expert assignment help across a variety of subjects, including custom assignment writing, subject-specific assistance, and detailed explanations to help you understand the material better.",
  },
  {
    question: "How quickly will I receive help?",
    answer:
      "We strive to deliver prompt responses. Most of our tutors are available to assist you as soon as possible, especially for urgent assignments.",
  },
  {
    question: "Can I get plagiarism-free work?",
    answer:
      "Absolutely! We guarantee 100% original and plagiarism-free work. Each assignment is written from scratch and thoroughly checked for any potential plagiarism.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. Your privacy is our priority. All your personal and academic information is kept strictly confidential and secure.",
  },
  {
    question: "How do I pay for your services?",
    answer:
      "We offer flexible payment options including PayPal, debit/credit cards, and other secure online payment gateways. Payment plans can be arranged upon request.",
  },
];

const FAQItem = ({ faq, index, isOpen, toggleOpen }) => (
  <div
    className={`bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 ${
      isOpen ? "shadow-lg" : ""
    }`}
  >
    <button
      className="w-full px-6 py-5 flex items-center justify-between text-left text-[#0c5192] font-semibold text-lg sm:text-xl focus:outline-none"
      onClick={() => toggleOpen(index)}
    >
      {faq.question}
      {isOpen ? (
        <ChevronUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>
    {isOpen && (
      <div className="px-6 pb-5 text-gray-700 text-base sm:text-lg leading-relaxed">
        {faq.answer}
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper>
      <section className="bg-gradient-to-b from-white to-[#f9f9f9] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0c5192] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services. Need
            more help? Feel free to contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;

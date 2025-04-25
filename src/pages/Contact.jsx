import React from "react";
import { Helmet } from "react-helmet"; // 👈 for SEO meta tags
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Smartwave Tutors Hub</title>
        <meta
          name="description"
          content="Get in touch with Smartwave Tutors Hub for any inquiries or support. Reach out via email, social media, or live chat and we'll respond promptly."
        />
        <meta
          name="keywords"
          content="Contact Smartwave Tutors, Tutoring Help, Online Tutoring Support, Smartwave Tutors Hub Contact"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://smartwavetutorshub.com/contact" />
      </Helmet>

      <section className="bg-gradient-to-b from-white to-[#f9f9f9] py-20 px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0c5192] mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or need help? Reach out and we’ll respond as soon as
            possible.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
                Email Us
              </h3>
              <p className="text-gray-700 text-lg">
                For inquiries, email us at:{" "}
                <a
                  href="mailto:smartwavetutorshub@gmail.com"
                  className="text-[#ffd816] font-medium hover:text-[#0c5192] transition-colors"
                >
                  smartwavetutorshub@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4 mt-4">
                {[
                  {
                    href: "https://www.facebook.com/SmartwaveTutorsHub",
                    icon: <Facebook />,
                  },
                  {
                    href: "https://x.com/SmartwaveTutors",
                    icon: <Twitter />,
                  },
                  {
                    href: "https://www.instagram.com/smartwavetutorshub?igsh=MXgwOWhheXZuMzJidA==",
                    icon: <Instagram />,
                  },
                  {
                    href: "https://www.linkedin.com/in/smartwavetutorshub/",
                    icon: <Linkedin />,
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-[#ffd816] text-[#0c5192] rounded-full shadow transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#0c5192] mb-4">
              Send Us a Message
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Fill out the form below and we’ll get back to you shortly.
            </p>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c5192] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c5192] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c5192] focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#0c5192] hover:bg-[#ffd816] text-white hover:text-[#0c5192] font-semibold rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Live Chat CTA */}
        <div className="mt-16 text-center text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          <p>
            Need instant help? Click the{" "}
            <strong className="text-[#0c5192]">live chat button</strong> on the
            page to speak with our support team. We’re ready to assist you 24/7
            with anything you need!
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;

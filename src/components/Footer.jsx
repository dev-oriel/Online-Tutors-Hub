import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Smartwave Tutors Hub
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Personalized academic support that delivers results — anywhere,
            anytime. Join thousands of students excelling with Smartwave Tutors
            Hub.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Academic Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Online Class Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Exam Assistance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Assignment Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
              >
                Essay Writing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4" /> support@Smartwavetutorshub.com
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffd816] visited:text-gray-400 no-underline transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Smartwave Tutors Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

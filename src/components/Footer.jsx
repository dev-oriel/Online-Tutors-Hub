import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

// Import local icons
import AmericanExpress from "../assets/icons/American-Express.png";
import Mastercard from "../assets/icons/mastercard.png";
import PayPal from "../assets/icons/paypal.png";
import Visa from "../assets/icons/visa-logo.png";

const paymentIcons = [
  { name: "PayPal", src: PayPal },
  { name: "Mastercard", src: Mastercard },
  { name: "Visa", src: Visa },
  { name: "American Express", src: AmericanExpress },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Smartwave Tutors Hub</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Personalized academic support that delivers results — anywhere,
            anytime. Join thousands of students excelling with Smartwave Tutors
            Hub.
          </p>
        </div>

        {/* Payment Security */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            100% Safe & Secure Payments
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            We ensure your payment info is encrypted & processed securely.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((method, idx) => (
              <div
                key={idx}
                className="bg-white p-2 rounded shadow-md w-20 h-10 flex items-center justify-center"
              >
                <img
                  src={method.src}
                  alt={method.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/online-class"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Complete Online Class
              </a>
            </li>
            <li>
              <a
                href="/assignment-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Assignment Help
              </a>
            </li>
            <li>
              <a
                href="/exam-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Exams Help
              </a>
            </li>
            <li>
              <a
                href="/math-class-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Math Class Help
              </a>
            </li>
            <li>
              <a
                href="/take-my-class"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Take My Online Class
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ffd816]" />
            smartwavetutorshub@gmail.com
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-[#1877F2] hover:text-[#ffd816]">
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/SmartwaveTutors?t=GjqWA2NIlBGiVK3QFl6JoA&s=09"
              className="text-[#1DA1F2] hover:text-[#ffd816]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/smartwavetutorshub?igsh=MXgwOWhheXZuMzJidA=="
              className="text-[#E1306C] hover:text-[#ffd816]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/smartwavetutorshub/"
              className="text-[#0A66C2] hover:text-[#ffd816]"
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

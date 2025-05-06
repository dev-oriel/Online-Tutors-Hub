import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

// Payment Icons
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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-gray-900 text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Smartwave Tutors Hub</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Personalized academic support that delivers results — anywhere,
            anytime. Join thousands of students excelling with Smartwave Tutors
            Hub.
          </p>
        </div>

        {/* Payment Methods */}
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/online-class"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Complete Online Class
              </Link>
            </li>
            <li>
              <Link
                to="/assignment-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Assignment Help
              </Link>
            </li>
            <li>
              <Link
                to="/exam-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Exams Help
              </Link>
            </li>
            <li>
              <Link
                to="/math-class-help"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Math Class Help
              </Link>
            </li>
            <li>
              <Link
                to="/take-my-class"
                className="text-gray-400 hover:text-[#ffd816] transition-colors duration-200"
              >
                Take My Online Class
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ffd816]" />
            smartwavetutorshub@gmail.com
          </p>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
            <a
              href="https://wa.me/17738122947"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffd816] transition-colors duration-200"
            >
              +1 773-812-2947
            </a>
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
            <a
              href="https://www.snapchat.com/add/smartwavetutors"
              className="text-yellow-400 hover:text-[#ffd816]"
            >
              <FaSnapchatGhost className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Smartwave Tutors Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

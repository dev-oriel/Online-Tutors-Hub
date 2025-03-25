import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-600">
          Online Tutors Hub
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <div className="relative group">
            <button className="hover:text-blue-500">Online Classes ⌄</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                Math
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                Science
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                English
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-500">
            Exams
          </a>
          <a href="#" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#" className="block px-4 py-2 hover:bg-blue-100">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-100">
            Online Classes
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-100">
            Exams
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-100">
            About Us
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

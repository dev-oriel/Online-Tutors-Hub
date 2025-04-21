import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/icons/tutor.png";
import { desktopMenus, mobileLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 150);
  };

  return (
    <nav className="bg-[#ffffff] shadow-md fixed w-full h-20 top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-[#0c5192]">
          <img src={logo} alt="Online Tutors Hub Logo" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium relative w-full justify-center">
          {desktopMenus.map((menu) => (
            <div
              key={menu.key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[#0c5192] hover:text-[#ffd816] font-semibold">
                {menu.label} ▼
              </button>

              {dropdown === menu.key && (
                // Centered dropdown (relative to entire navbar)
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-gray-200 z-50 w-[1100px] p-8 rounded-lg">
                  <div className="grid grid-cols-4 gap-6">
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        className="text-sm text-gray-700 hover:text-[#0c5192] border-b border-dotted border-gray-300 py-1"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0c5192]"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 z-40">
          {mobileLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-[#0c5192] hover:text-[#ffd816]"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

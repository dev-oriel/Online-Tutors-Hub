import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/icons/Smartwave Tutors Hub.png";
import { desktopMenus, mobileLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (key) => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setDropdown(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setDropdown(null), 150);
    }
  };

  const handleDropdownClick = (key) => {
    if (isMobile) {
      setDropdown(dropdown === key ? null : key);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full h-20 top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center w-full justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Smartwave Tutors Hub Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
          />
          <span className="text-lg sm:text-2xl font-extrabold tracking-wide text-[#0c5192] leading-tight">
            Smartwave
            <span className="block text-base sm:text-xl font-semibold text-[#ffd816] -mt-1 tracking-tight">
              Tutors Hub
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium flex-1 justify-center">
          {desktopMenus.map((menu) => (
            <div
              key={menu.key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="bg-transparent text-[#0c5192] hover:text-[#ffd816] font-semibold px-2 py-1">
                {menu.label} ▼
              </button>

              {dropdown === menu.key && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-gray-200 z-50 w-[800px] max-w-[95vw] p-6 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        className="text-sm text-gray-700 hover:text-[#ffd816] border-b border-dotted border-gray-300 py-1"
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

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0c5192] focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6 z-40">
          {desktopMenus.map((menu) => (
            <div key={menu.key} className="mb-3">
              <button
                onClick={() => handleDropdownClick(menu.key)}
                className="w-full text-left text-[#0c5192] font-semibold py-2 hover:text-[#ffd816]"
              >
                {menu.label}
              </button>
              {dropdown === menu.key && (
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  {menu.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.to}
                      className="text-sm text-gray-700 hover:text-[#ffd816]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Extra mobile links */}
          {mobileLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-[#0c5192] font-semibold block py-2 hover:text-[#ffd816]"
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

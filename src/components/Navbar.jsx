import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/icons/Smartwave Tutors Hub.png";
import { desktopMenus } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state
  const [dropdown, setDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (to) => {
    // Close the menu first
    setIsOpen(false);

    // Start the spinner
    setLoading(true);

    // Simulate a short delay for spinner (adjust as needed)
    setTimeout(() => {
      navigate(to); // Navigate after spinner
      setLoading(false); // Stop spinner
    }, 500); // Adjust delay time to control spinner duration
  };

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
    <nav
      ref={navRef}
      className="bg-white shadow-md fixed w-full h-20 top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-none">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Smartwave Tutors Hub Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#0c5192]">
              Smartwave
              <span className="block text-xl font-semibold text-[#ffd816] -mt-1 tracking-tight">
                Tutors Hub
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 font-medium">
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
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-gray-200 z-50 w-[1100px] p-8 rounded-lg">
                  <div className="grid grid-cols-4 gap-6">
                    {menu.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        className="text-sm text-gray-700 hover:text-[#ffd816] border-b border-dotted border-gray-300 py-1"
                        onClick={() => handleLinkClick(link.to)} // Close menu and start loading
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

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setDropdown(null);
            }}
            className="text-[#0c5192] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd816] transition duration-200"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 z-40">
          {desktopMenus.map((menu) => (
            <div key={menu.key} className="w-full px-4">
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
                      onClick={() => handleLinkClick(link.to)} // Close menu and start loading
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Spinner for loading */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="spinner"></div> {/* Custom spinner component */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

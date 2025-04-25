import React from "react";

const CallToActionButton = ({ text = "Get Started", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#ffd816] text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95"
    >
      {text}
    </button>
  );
};

export default CallToActionButton;

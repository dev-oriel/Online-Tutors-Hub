import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    const showTextTemporarily = () => {
      setShowText(true);
      setTimeout(() => setShowText(false), 10000); // show for 10s
    };

    showTextTemporarily(); // initial show
    const interval = setInterval(showTextTemporarily, 1800000); // every 30 mins

    return () => clearInterval(interval);
  }, [show]);

  return show ? (
    <div className="fixed bottom-6 left-4 sm:left-6 z-50 animate-fadeInUp">
      <a
        href="https://wa.me/17738122947"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 pr-3 pl-2 rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl group`}
        style={{ maxWidth: showText ? "220px" : "56px" }}
      >
        <div
          className="w-10 h-10 flex items-center justify-center bg-white text-green-600 rounded-full shadow-md group-hover:rotate-6 transition-transform duration-300"
          style={{ minWidth: "40px" }}
        >
          <FaWhatsapp className="text-xl animate-pulse" />
        </div>
        <span
          className={`ml-2 text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  ) : null;
};

export default WhatsAppButton;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <svg
            className="mx-auto mb-8 w-52 h-52"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0c5192"
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.6 0-372-166.4-372-372S306.4 140 512 140s372 166.4 372 372-166.4 372-372 372z"
              opacity="0.1"
            />
            <path
              d="M512 256a64 64 0 1 1 0 128 64 64 0 0 1 0-128zm0 320c-76.8 0-144 35.2-144 96v32h288v-32c0-60.8-67.2-96-144-96z"
              fill="#0c5192"
            />
          </svg>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0c5192] mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or was moved. Let’s get you
          back on track.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#0c5192] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#083a6c] transition duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;

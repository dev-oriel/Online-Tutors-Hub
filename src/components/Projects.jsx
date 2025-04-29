import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import project7 from "../assets/images/project7.jpg";
import project8 from "../assets/images/project8.jpg";
import project9 from "../assets/images/project9.jpg";
import project10 from "../assets/images/project10.jpg";
import project11 from "../assets/images/project11.jpg";

const imageList = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
];

const Projects = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12 px-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c5192] mb-6 leading-snug"
          >
            Project Showcase
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of our recent works — crafted with precision and
            purpose.
          </p>
        </div>

        {/* Responsive Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
        >
          {imageList.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

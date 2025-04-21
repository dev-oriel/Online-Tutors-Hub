import React from "react";
import snhu from "../assets/logos/snhu.png";
import national from "../assets/logos/national-university.png";
import capella from "../assets/logos/capella.png";
import arizona from "../assets/logos/arizona-global.png";
import liberty from "../assets/logos/liberty.jpg";
import grandCanyon from "../assets/logos/grand-canyon.jpg";
import umgc from "../assets/logos/umgc.png";
import purdue from "../assets/logos/purdue-global.jpg";
import strayer from "../assets/logos/strayer.png";
import chamberlain from "../assets/logos/chamberlain.png";
import ncu from "../assets/logos/ncu.png";
import coursera from "../assets/logos/coursera.svg";
import asu from "../assets/logos/asu.png";
import embryRiddle from "../assets/logos/embry-riddle.png";
import keiser from "../assets/logos/keiser.svg";
import byu from "../assets/logos/byu.png";
import cincinnati from "../assets/logos/cincinnati.png";
import rider from "../assets/logos/rider.png";

const logos = [
  { name: "snhu", src: snhu },
  { name: "National University", src: national },
  { name: "Capella", src: capella },
  { name: "Arizona Global", src: arizona },
  { name: "Liberty", src: liberty },
  { name: "Grand Canyon", src: grandCanyon },
  { name: "UMGC", src: umgc },
  { name: "Purdue Global", src: purdue },
  { name: "Strayer", src: strayer },
  { name: "Chamberlain", src: chamberlain },
  { name: "NCU", src: ncu },
  { name: "Coursera", src: coursera },
  { name: "ASU", src: asu },
  { name: "Embry Riddle", src: embryRiddle },
  { name: "Keiser", src: keiser },
  { name: "BYU", src: byu },
  { name: "Cincinnati", src: cincinnati },
  { name: "Rider", src: rider },
];

const Trusted = () => {
  return (
    <div className="text-center py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold mb-8">
        Thousands of students from top universities Trust us with their exams &
        Online classes
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;

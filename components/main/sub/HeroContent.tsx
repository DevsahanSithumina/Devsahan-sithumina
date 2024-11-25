"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Devsahan Image */}
        <motion.div
          variants={slideInFromTop}
          className="flex justify-center items-center mb-5"
        >
          <Image
            src="/Devsahan.png" // Ensure the image is located in your public folder
            alt="Devsahan"
            height={170}
            width={170}
            className="rounded-full" // Optional: Add styles such as rounded corners
          />
        </motion.div>

        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="welcom-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Devsahan Portfolio</h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
        
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              providing the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;  am Devsahan sithumina. Undergraduate student in SLIIT.  Full Stack Software Developer with
          experiences in websites, mobile, and university projects. Check out my
          projects and skills.
        </motion.p>

        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Work Icon */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

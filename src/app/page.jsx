"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/logo1.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Empowering lives through innovation—one solution at a time
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to the place where dreams come true, where innovation and creativity
            converge, where all your inconveniences vanish. With a keen eye for problem solving and effieciency,
            we&apos;re your Techbuds, we got your back.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View our products
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
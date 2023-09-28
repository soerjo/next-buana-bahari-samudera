'use client'

import React from "react";
import SectionComp from "../SectionComp";
import Image from "next/image";
import { motion } from "framer-motion"

const SectionHome = () => {
  return (
    <SectionComp id="home" classname="bg-gradient-to-b from-blue-400 to-white-100">
      <div className="relative h-full min-h-screen md:pt-[120px] flex flex-col justify-center container p-[20px] mx-auto">
        <div className="flex flex-col justify-center mb-2 z-20">
          <h1 className="text-[#2b1656] text-5xl text-center md:text-left md:w-[600px] sm:text-6xl md:text-6xl lg:w-[600px] xl:text-8xl xl:w-[1000px] font-black mb-8">
            SERVICE CARGO WITH PRIDE AND SAFETY
          </h1>
          <p className="text-[#2b1656] text-sm text-center md:text-left md:text-lg md:w-auto lg:w-[500px] lg:font-medium lg:text-sm xl:font-semibold xl:text-[16pt] xl:w-[800px] xl:leading-snug font-semibold py-0">
            Buana Bahari Samudera takes great pride in providing an unparalleled cargo service that not only ensures swift
            and reliable delivery but also prioritizes the safety of your valuable goods.
          </p>
        </div>
        <div className="sm:p-4 md:p-0 flex justify-center md:justify-start z-20">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-pink-500 hover:to-blue-500 flex text-white hover:scale-105 transition ease-in rounded-full py-4 px-12 font-bold text-lg">
            Booking Now
          </button>
        </div>
        <motion.div
          initial={{ x: "120%", y: "-10%" }}
          animate={{ x: "50%", y: "-10%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",

          }}
          className="absolute pt-[300px] right-[100px] min-[450px]:pt-[200px] md:pt-0 md:right-10 translate-x-[150px]  translate-y-[180px] z-0 w-full h-full"
        >
          <Image src={"/images/Barge.png"} alt="kapal" width={4400} height={4400} className="scale-100 translate-y-[300px] md:translate-y-20 md:scale-100" />
        </motion.div>
      </div>
    </SectionComp>
  );
};

export default SectionHome;

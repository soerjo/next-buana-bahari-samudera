import React from "react";
import SectionComp from "../SectionComp";

const SectionHome = () => {
  return (
    <SectionComp id="home" classname="bg-gradient-to-b from-blue-400 to-white-100">
      <div className="h-full min-h-screen p-[80px] md:pt-[120px] flex flex-col justify-center">
        <div className="container p-[10px] md:p-[40px] flex flex-col justify-center">
          <h1 className="text-[#2b1656] text-5xl text-center md:text-left md:w-[600px] sm:text-6xl md:text-7xl font-black mb-4">
            SERVICE CARGO WITH PRIDE AND SAFETY
          </h1>
          <p className="text-[#2b1656] text-sm text-center md:text-left md:text-lg md:w-auto lg:w-[860px] font-semibold py-0">
          Buana Bahari Samudera takes great pride in providing an unparalleled cargo service that not only ensures swift
          and reliable delivery but also prioritizes the safety of your valuable goods.
          </p>
        </div>
        <div className="sm:p-4 md:p-0 md:px-[40px] flex justify-center md:justify-start">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-pink-500 hover:to-blue-500 flex text-white hover:scale-105 transition ease-in rounded-full py-4 px-12 font-bold text-lg">
            Booking Now
          </button>
        </div>
      </div>
    </SectionComp>
  );
};

export default SectionHome;

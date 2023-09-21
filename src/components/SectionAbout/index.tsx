import React from "react";
import Image from "next/image";
import listdata from "./listdata.json";

import SectionComp from "../SectionComp";
import ContentDescription from "./ContentDescription";

const SectionAbout = () => {
  return (
    <SectionComp id="about" classname="bg-white ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mx-auto flex flex-col justify-center items-center pt-14 md:pt-12 container px-8">
          <h1 className="text-[#2b1656] text-center text-5xl font-black mb-6 ">
            {"Company Value"}
          </h1>
          <ContentDescription listdata={listdata.value} />
        </div>
        {/* <Image
          className="object-cover w-full h-[157px] md:h-[217px] overflow-hidden"
          alt={`image_`}
          src={"/images/pexels-lucas-pezeta-1996162.jpg"}
          height={187}
          width={370}
          priority
        /> */}
        <div className="mx-auto flex flex-col justify-center items-center pt-14 md:pt-12 container px-8">
          <h1 className="text-[#2b1656] text-center text-4xl font-black md:text-5xl mb-6 ">
            Company Goals
          </h1>
          <ContentDescription listdata={listdata.vision} />
        </div>
      </div>
    </SectionComp>
  );
};

export default SectionAbout;

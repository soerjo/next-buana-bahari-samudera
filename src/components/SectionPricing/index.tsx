import React from "react";
import SectionComp from "../SectionComp";
import listimage from "./listimage.json";
import Image from "next/image";
import PersonCard from "./person";

const SectionPricing = () => {
  return (
    <SectionComp id="structure" classname="bg-white">
      <div className="h-full min-h-screen flex flex-col justify-between items-center">
        <div className="max-w-[853px] m-auto flex flex-col justify-center items-center pt-14 md:pt-12 container p-8">
          <h1 className="text-[#2b1656] text-center text-5xl font-bold mb-5 ">
            Company Structure
          </h1>
          <p className="text-[#2b1656] text-center text-1xl font-medium">
            Buana Bahari Samudera (BBS) was established in January 2023 and is
            envisioned to be one of the Best Operating Shipment comapnies in
            Indonesia.
          </p>

          <div className="flex flex-col space-y-10 mt-0 items-center justify-center md:flex-row md:space-x-10">
            <PersonCard
              name="Sonny Apriliano"
              position="Chief Executive Officer"
              image="images\sonny.png" // Ganti dengan path foto CEO
            />
            <PersonCard
              name="Yulianto Kurniawan"
              position="Chief Operating Officer"
              image="images\pakyul.png" // Ganti dengan path foto CEO
            />
          </div>
        </div>
        {/* <div className="w-full flex flex-col md:hidden justify-center items-center">
          <Image
            className="object-cover w-full h-[437px] md:w-1/4 md:h-[437px] overflow-hidden"
            alt={`image_`}
            src={listimage[0]}
            height={287}
            width={370}
            priority
          />
        </div> */}
        {/* <div className="w-full hidden md:flex md:flex-row justify-center items-center">
          {listimage.map((image, index) => {
            return (
              <Image
                className="object-cover w-full h-[237px] md:w-1/4 md:h-[437px] overflow-hidden"
                alt={`image_${index}`}
                src={image}
                key={index}
                height={287}
                width={370}
                priority
              />
            );
          })}
        </div> */}
      </div>
    </SectionComp>
  );
};

export default SectionPricing;

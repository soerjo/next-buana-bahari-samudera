"use client";

import React from "react";
import SectionComp from "../SectionComp";
import listimage from "./listimage.json";
import Image from "next/image";

const SectionProduct = () => {
  const [descriptionSections, setdescriptionSections] =
    React.useState("Show all");

  return (
    <SectionComp id="product" classname="bg-white">
      <div className="h-full min-h-screen flex flex-col justify-between items-center">
        <div className="max-w-[1080px] m-auto flex flex-col justify-center items-center pt-14 md:pt-10 container p-8">
          <h1 className="text-[#2b1656] text-center text-5xl font-black mb-6 ">
            Our Products
          </h1>
          <p className="text-[#2b1656] text-center py-4 font-medium">
            Introducing our five high-quality cargo services meticulously
            designed to cater to your shipping needs, each developed with
            dedicated precision to deliver an unparalleled shipping experience
            tailored to your utmost satisfaction.
          </p>

          {/* <ul className="flex gap-4 md:flex-row ">
                        {["Show all", "Management Operation", "TC/FC", "LTC", "Vessel","Buy & Sale Agency Shipment"].map((sectionMenu, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => setdescriptionSections(sectionMenu)}
                                    className={
                                        descriptionSections === sectionMenu
                                            ? "link active-link flex justify-center items-center font-semibold hover:cursor-pointer p-2 text-black"
                                            : "link flex justify-center items-center font-semibold hover:cursor-pointer p-2"
                                    }
                                >
                                    {sectionMenu}
                                </li>
                            );
                        })}
                    </ul> */}
        </div>
        {/* <div className="w-full flex flex-wrap justify-center items-center">
                    {listimage.map((image, index) => {
                        return (
                            <Image
                                className="object-cover w-1/2 md:w-1/3 h-[320px] md:h-[480px] overflow-hidden "
                                alt={`image_${index}`}
                                src={image}
                                key={index}
                                height={187}
                                width={370}
                                priority
                            />
                        );
                    })}
                </div> */}
        <div className="flex flex-row space-x-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full border-spacing-3"
              src="images/tongkang.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Management Operation</div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full border-spacing-3"
              src="images/tongkang2.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">TC/FC</div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full border-spacing-3"
              src="images/tongkang3.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Buy & Sale Agency</div>
            </div>
          </div>
        </div>
      </div>
    </SectionComp>
  );
};

export default SectionProduct;

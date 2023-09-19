'use client'

import React from "react";
import SectionComp from "../SectionComp";
import listimage from "./listimage.json";
import Image from "next/image";

const SectionProduct = () => {
    const [descriptionSections, setdescriptionSections] = React.useState("Show all")

    return (
        <SectionComp id="product" classname="bg-white">
            <div className="h-full min-h-screen flex flex-col justify-between items-center">
                <div className="max-w-[860px] m-auto flex flex-col justify-center items-center pt-14 md:pt-12 container p-8">
                    <h1 className="text-[#2b1656] text-center text-5xl font-black mb-6 ">
                        Our Products
                    </h1>
                    <p className="text-[#2b1656] text-center py-4 font-medium">
                    Introducing our five high-quality cargo services meticulously designed to cater to your shipping needs,
                    each developed with dedicated precision to deliver an unparalleled shipping experience tailored to your utmost satisfaction.
                    </p>

                    <ul className="flex gap-4 md:flex-row ">
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
                    </ul>
                </div>
                <div className="w-full flex flex-wrap justify-center items-center">
                    {listimage.map((image, index) => {
                        return (
                            <Image
                                className="object-cover w-1/2 md:w-1/3 h-[157px] md:h-[217px] overflow-hidden"
                                alt={`image_${index}`}
                                src={image}
                                key={index}
                                height={187}
                                width={370}
                                priority
                            />
                        );
                    })}
                </div>
            </div>
        </SectionComp>
    );
};

export default SectionProduct;

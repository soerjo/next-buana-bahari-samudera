'use client'

import React from "react";
import SectionComp from "../SectionComp";
import listimage from "./listimage.json";
import Image from "next/image";

const SectionProduct = () => {
    const [descriptionSections, setdescriptionSections] = React.useState("Show all")

    return (
        <SectionComp id="product" classname="bg-[#1D2A49]">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="max-w-[653px] m-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h1 className="text-white text-center text-5xl font-bold mb-6 ">
                        Section Perbuatan gue
                    </h1>
                    <p className="text-white text-center py-4 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
                        reprehenderit quos sed modi! Id harum, incidunt reprehenderit natus.
                    </p>

                    <ul className="flex gap-4 md:flex-row ">
                        {["Show all", "Tugboat", "Barge", "People"].map((sectionMenu, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => setdescriptionSections(sectionMenu)}
                                    className={
                                        descriptionSections === sectionMenu
                                            ? "link active-link flex justify-center items-center font-semibold hover:cursor-pointer p-2"
                                            : "link flex justify-center items-center font-semibold hover:cursor-pointer p-2"
                                    }
                                >
                                    {sectionMenu}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-full bg-red-300 flex flex-wrap justify-center items-center">
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

import React from "react";
import Image from "next/image";
import listdata from "./listdata.json";

import SectionComp from "../SectionComp";
import ContentDescription from "./ContentDescription";

const SectionAbout = () => {
    return (
        <SectionComp id="about" classname="bg-blue-950 ">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="m-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h1 className="text-white text-center text-5xl font-bold mb-6 ">
                        {"Company Value"}
                    </h1>
                    <ContentDescription listdata={listdata.value} />
                </div>
                <Image
                    className="object-cover w-full h-[157px] md:h-[217px] overflow-hidden"
                    alt={`image_`}
                    src={"/images/pexels-lucas-pezeta-1996162.jpg"}
                    height={187}
                    width={370}
                    priority
                />
                <ContentDescription listdata={listdata.vision} />
            </div>
        </SectionComp>
    );
};



export default SectionAbout;

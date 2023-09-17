import React from "react";
import SectionComp from "../SectionComp";

const SectionHome = () => {
    return (
        <SectionComp id="home" classname="bg-[#00001F]">
            <div className="container m-auto w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-center text-8xl font-bold mb-4">
                    Section Perbuatan gue
                </h1>
                <p className="text-white text-center py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
                    reprehenderit quos sed modi! Id harum, incidunt reprehenderit natus
                    minus provident accusamus error minima consequuntur blanditiis
                    libero necessitatibus sapiente fugit.
                </p>

                <button className="bg-white rounded-full py-4 px-12 font-bold text-lg">Booking Now</button>
            </div>
        </SectionComp>
    );
};

export default SectionHome;

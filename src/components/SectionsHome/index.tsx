import React from "react";
import SectionComp from "../SectionComp";

const SectionHome = () => {
    return (
        <SectionComp id="home" classname="bg-[#00001F]">
            <div className="h-full min-h-screen flex flex-col justify-center items-center">
                <div className="container px-8 flex flex-col justify-center items-center">
                    <h1 className="text-white text-center text-6xl md:text-8xl font-bold mb-4">
                        SERVICE CARGO WITH PRIDE AND SAFETY
                    </h1>
                    <p className="text-white text-center py-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
                        reprehenderit quos sed modi! Id harum, incidunt reprehenderit natus
                        minus provident accusamus error minima consequuntur blanditiis
                        libero necessitatibus sapiente fugit.
                    </p>
                    <button className="bg-white rounded-full py-4 px-12 font-bold text-lg mx-auto">Booking Now</button>
                </div>
            </div>
        </SectionComp>
    );
};

export default SectionHome;

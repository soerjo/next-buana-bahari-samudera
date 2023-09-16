import React from "react";
import SectionComp from "../SectionComp";

const SectionHome = () => {
    return (
        <SectionComp id="home">
            <div className="bg-[#00001F] w-full h-full flex justify-center items-center">
                <h1>SectionHome</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure
                    aspernatur eveniet quod temporibus pariatur, architecto similique.
                </p>

                <button>Booking Now</button>
            </div>
        </SectionComp>
    );
};

export default SectionHome;

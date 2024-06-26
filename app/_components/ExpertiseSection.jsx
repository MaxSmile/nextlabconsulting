import React from "react";
import { AreasOfExpertise } from "./constants";

const AreaOfExpertise = ({ imageSrc, title, link }) => {
    return (
        <div
            className="flex mr-2 pr-2 flex-col w-1/2 sm:w-1/3 lg:w-1/4 max-md:w-1/2 max-md:ml-0 max-md:w-full relative"
            style={{
                height: "520px",
                minHeight: "480px",
                minWidth: "180px", // Adjusted width for cards
                width: "100%",
            }}
        >
            <div
                className="bg-cover pr-2 bg-center min-h-[180px] overflow-hidden flex-grow px-7 pb-8 
          text-xl font-medium leading-10 
          text-center text-white rounded-lg max-md:px-5 max-md:pt-10 max-md:mt-6"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
                
                <div className="absolute mr-2 bottom-0 left-0 right-0 p-4 
          bg-black bg-opacity-50 line-clamp-2 rounded-b-lg
          text-white text-center min-h-[80px]">
                    <a href={link}>{title}</a>
                </div>
            </div>
        </div>
    );
};
const ExpertiseSection = () => {
    return (
        <section
            id="expertise"
            className="pt-10 w-full"
        >
            <div className="flex flex-col px-10 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

                <h2 className="text-6xl font-medium tracking-tighter uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
                    Our areas&nbsp;
                    <span className="text-accent ">of expertise</span>
                </h2>
                <div className="mt-10 max-md:max-w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-md:flex-col max-md:gap-0">
                        {AreasOfExpertise.map((area, index) => (
                            <AreaOfExpertise
                                key={index}
                                imageSrc={area.imageSrc}
                                title={area.title}
                                link={area.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;

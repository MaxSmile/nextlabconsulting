// app/_components/ServiceRecord.jsx
"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineAudit, AiOutlineUsergroupAdd, AiOutlineCarryOut,AiOutlineCalculator  } from "react-icons/ai";

const ServiceRecord = ({ title, description, bulletPoints, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const icons = [
    <AiOutlineAudit />,<AiOutlineUsergroupAdd />,<AiOutlineCarryOut />,<AiOutlineCalculator />
  ]

  return (
    <div className="flex flex-col max-md:max-w-full rounded-lg">
      <div className="flex flex-col text-5xl whitespace-nowrap leading-[52.8px] text-secondary max-md:max-w-full">
        <div className="shrink-0 h-px rounded-lg bg-zinc-500 max-md:max-w-full" />
        <div className="flex gap-0 justify-between p-9 bg-white max-md:flex-wrap max-md:px-5" onClick={toggleExpanded}>
          <div className="flex flex-1 gap-4 max-md:flex-wrap">
            {/* <img
              loading="lazy"
              src={imageSrc}
              className="shrink-0 my-auto w-12 aspect-square"
            /> */}
            {icons[index]}
            <div className="flex-1 max-md:max-w-full text-4xl line-clamp-1">
              {title}
            </div>
          </div>
          <FaChevronDown className={`w-8 h-8 transform ${isExpanded ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`} />
        </div>
        <div className="shrink-0 h-px rounded-lg bg-zinc-500 max-md:max-w-full" />
      </div>
      {isExpanded && (
        <div className="p-9 bg-white border-b border-solid border-zinc-500 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="text-lg leading-6 text-gray-900 max-md:mt-10">
              {description}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-md:max-w-full">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex flex-col">
                    <div className="shrink-0 w-3 h-3 bg-blue-700 rounded-lg mt-2" />
                  </div>
                  <div className="text-xl font-bold leading-7 text-gray-900">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceRecord;

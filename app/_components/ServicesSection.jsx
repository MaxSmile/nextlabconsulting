import * as React from "react";
import ServiceRecord from "./ServiceRecord";
import { ServicesData } from "./constants";

export default function ServicesSection () {
    return (
      <section id="services" className="pt-10 w-full">
      <div className="flex flex-col px-10 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl font-medium tracking-tighter uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
          Our&nbsp;
          <span className="text-orange-300 ">Services</span>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          {ServicesData.map((service, index) => (
            <ServiceRecord key={index} {...service} />
          ))}
        </div>
        </div>
      </section>
    );
  };



import * as React from "react";
import { TeamMembers } from "./constants";

function TeamMember({ name, title, bio, imageSrc }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="grow w-full bg-indigo-100 rounded-lg max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-between items-start self-stretch px-3 pt-5 pb-4 text-2xl leading-7 aspect-[0.75] max-md:pr-5 max-md:mt-6">
              <img
                loading="lazy"
                src={imageSrc}
                alt={`${name}'s headshot`}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative justify-center px-3 py-1.5 text-sky-700 uppercase whitespace-nowrap bg-white border border-white border-solid rounded-[1000px]">
                {name}
              </div>
              <div className="relative mt-80 text-white max-md:mt-10">
                {title}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-center self-stretch py-6 text-lg tracking-tight leading-7 text-black max-md:mt-6">
              {bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function TeamSection() {
  return (
    <section id="team" className="flex flex-col px-10 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header>
        <h2 className="text-6xl font-medium tracking-tighter uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
          Our&nbsp; 
          <span className="text-orange-300 ">team</span>
        </h2>
      </header>
      <div className="flex flex-col mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {TeamMembers.slice(0, 2).map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {TeamMembers.slice(2).map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
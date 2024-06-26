import * as React from "react";
import { TeamMembers } from "./constants";
import Image from "next/image";
import { getMemberSlugs, getMemberBySlug } from "./DataManager";

function TeamMember({ name, title, picture, slug, subtitle, keywords, description }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full rounded-lg overflow-hidden">
      <div className="grow w-full bg-indigo-100 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-4 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-between items-start self-stretch px-3 pb-4 
            leading-7 aspect-[0.75] ">
              <a href={"/team/" + slug} className="absolute inset-0" >
                <Image
                  loading="lazy"
                  src={picture}
                  alt={`${name}'s headshot`}
                  className="object-cover absolute inset-0 size-full"
                  style={{ minWidth: "240px", height: "100%" }}
                  width={275}
                  height={484}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-between self-stretch py-6 tracking-tight leading-7 
            text-accent max-md:mt-6 px-3">
              <div><a href={'/team/' + slug + '/'}><h2 className="text-3xl font-medium">{title}</h2></a></div>
              <div className="text-xl text-secondary">{description}</div>
              <div className="text-xl my-5">{subtitle}</div>
              
              {/* Adjust this div to push keywords to the bottom */}
              <div className="flex-grow flex flex-col justify-end mb-5">
                <div className="w-full">{keywords.map((keyword, index) => 
                <div key={index} className="my-3"><span className="bg-secondary p-1 text-white rounded-lg">
                {keyword}</span></div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function TeamSection() {
  const TeamMembers = getMemberSlugs();
  const TeamInfo = [];
  TeamMembers.map((slug) => {
    const obj = getMemberBySlug(slug);
    TeamInfo.push(obj)
  })
  
  return (
    <section id="team" className="pt-10 w-full">
      <div className="flex flex-col px-10 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-6xl font-medium tracking-tighter uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
          Our&nbsp;
          <span className="text-accent ">team</span>
        </h2>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {TeamInfo.slice(0, 2).map((member) => (
                <TeamMember key={member.slug} {...member} />
              ))}
            </div>
          </div>
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {TeamInfo.slice(2).map((member) => (
                <TeamMember key={member.slug} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
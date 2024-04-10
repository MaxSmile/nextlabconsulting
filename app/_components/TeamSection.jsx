import * as React from "react";

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

const teamMembers = [
  {
    name: "Maggie",
    title: "PhD in Radiochemistry",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b92324cb74759a13a5ca321f7d5db86cb63c9d5bba845cca6f8e9a4f111f0db2?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
  },
  {
    name: "John",
    title: "PhD in Biochemistry",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/286e009b089bef0b5fd03f2ef36b353db0a24c992a3ed391ffe0fb900d6adbad?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
  },
  {
    name: "Sarah",
    title: "PhD in Organic Chemistry",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b92324cb74759a13a5ca321f7d5db86cb63c9d5bba845cca6f8e9a4f111f0db2?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
  },
  {
    name: "David",
    title: "PhD in Physical Chemistry",
    bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/286e009b089bef0b5fd03f2ef36b353db0a24c992a3ed391ffe0fb900d6adbad?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
  },
];

function TeamSection() {
  return (
    <section className="flex flex-col px-10 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header>
        <h1 className="text-6xl font-medium tracking-tighter text-orange-300 uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
          <span className="">Our </span>
          <span className="text-orange-300 ">team</span>
        </h1>
      </header>
      <div className="flex flex-col mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {teamMembers.slice(0, 2).map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {teamMembers.slice(2).map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
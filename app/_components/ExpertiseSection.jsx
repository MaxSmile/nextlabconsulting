

const AreaOfExpertise = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="overflow-hidden relative flex-col grow justify-end px-7 pt-96 pb-8 text-3xl font-medium leading-10 text-center text-white rounded aspect-[0.6] max-md:px-5 max-md:pt-10 max-md:mt-6">
        <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
        {title}
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  const areasOfExpertise = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9aa720df0acc118c82c0765f1f15e2139fb30ed91883341f3a746e67d1f5e574?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
      title: "Cyclotrons and Radiochemistry",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/993c59ca6e0280478dc0b000478095de89bbf521702fdb9e1627b8fe65720039?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
      title: "Training and Quality Management System",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca31207714cf35204cdd0bc940dffc7d54617be3af08e4fa260032179f5c4bd0?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
      title: "Quality Control and GMP Compliance",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/52592cce82f9317d41652231d068745c015de15c959142bcac3b8aa0c29f9e63?apiKey=a077d5b1349f48f38f4ae0cc0f777298&",
      title: "Hot Cells and Clean Space Suite",
    },
  ];

  return (
    <section className="flex flex-col px-10 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-6xl font-medium tracking-tighter text-orange-300 uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
        <span className="">Our areas </span>
        <span className="text-orange-300 ">of </span>
        <span className="text-orange-300 ">expertise</span>
      </h2>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {areasOfExpertise.map((area, index) => (
            <AreaOfExpertise key={index} imageSrc={area.imageSrc} title={area.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
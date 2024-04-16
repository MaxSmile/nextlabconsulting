export default function HeroSection() {
  return (
    <div id="top" className="relative flex flex-col justify-center items-center 
       max-w-full font-medium text-[#fff] w-full">
      <div className="hero-background py-10 relative">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl w-full mx-auto overflow-hidden relative z-10">
          <div className="container max-w-xl py-20 px-10">
            <h1 className="lg:text-8xl text-2xl tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-10 text-[#eee]">
              <span className="hero-line2" >We are </span><br/>
              <span className="hero-line1" >NextLab</span><br/><span className="hero-line2" >Consulting</span>
            </h1>
            <p className="mt-10 text-xl leading-8 max-md:max-w-full">

The management advisory team with extensive experience in delivering world-class services in cyclotrons, radiochemistry, GMP compliance, and clean room design.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div id="top" className="relative flex flex-col justify-center items-center 
       max-w-full font-medium text-secondary w-full">
      <div className="hero-background py-20">
        <div className="max-w-7xl w-full mx-auto overflow-hidden">
          <div className="container max-w-xl py-20 px-10">
            <h1 className="text-8xl tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-10">
              <span className="hero-line2" >We are </span><br/>
              <span className="hero-line1" >NextLab</span><br/><span className="hero-line2" >Consulting</span>
            </h1>
            <p className="mt-10 text-xl leading-8 max-md:max-w-full">
              We are an accomplished management advisory team with extensive experience of providing world-class services in cyclotrons, radiochemistry, GMP compliance, and clean space design.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

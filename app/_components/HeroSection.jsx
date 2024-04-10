export default function HeroSection() {
    return (
      <section id="top" className="relative flex flex-col justify-center items-center 
       max-w-full font-medium text-blue-950 w-full">
        <div className="hero-background py-40">
          <div className="container ml-20 max-w-xl py-20">
            <h1 className="text-8xl tracking-tighter leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              NextLab Consulting
            </h1>
            <p className="mt-10 text-xl leading-8 max-md:max-w-full">
              We are an accomplished management advisory team with extensive experience of providing world-class services in cyclotrons, radiochemistry, GMP compliance, and clean space design.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
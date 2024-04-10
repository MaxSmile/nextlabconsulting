import Image from "next/image";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ExpertiseSection from "./_components/ExpertiseSection";
import ServicesSection from "./_components/ServicesSection";
import ContactForm from "./_components/ContactForm";
import TeamSection from "./_components/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex overflow-hidden relative flex-col pt-1 pb-20 w-full min-h-[695px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe621aa40644eb11ac8f3827135e145a3acde57a4011c3a020f8d31945767448?apiKey=a077d5b1349f48f38f4ae0cc0f777298&"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <Header />
        <HeroSection />
        
      </div>
      <ExpertiseSection />
      <ServicesSection />
      <TeamSection />
      <ContactForm />
    </main>
  );
}

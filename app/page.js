// app/page.js
import HeroSection from "./_components/HeroSection";
import ExpertiseSection from "./_components/ExpertiseSection";
import ServicesSection from "./_components/ServicesSection";
import ContactForm from "./_components/ContactFormSection";
import TeamSection from "./_components/TeamSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <TeamSection />
      <ContactForm />
    </main>
  );
}

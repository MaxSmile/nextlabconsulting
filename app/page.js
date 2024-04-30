// app/page.js
import HeroSection from "./_components/HeroSection";
import ExpertiseSection from "./_components/ExpertiseSection";
import ServicesSection from "./_components/ServicesSection";
import ContactForm from "./_components/ContactFormSection";
import TeamSection from "./_components/TeamSection";
import { GoogleAnalytics } from '@next/third-parties/google';


export default function HomePage() {
  return (
    <>
     <GoogleAnalytics gaId="G-ZQVHG5TKH9" />
     <main className="flex min-h-screen flex-col items-center justify-between">
       <HeroSection />
       <ExpertiseSection />
       <ServicesSection />
       <TeamSection />
       <ContactForm />
     </main>
    </>
  );
}

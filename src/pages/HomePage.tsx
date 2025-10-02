import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div aria-hidden="true" className="h-0 w-0" id="top" />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HomePage;




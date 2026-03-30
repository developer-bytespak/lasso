import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandPhilosophyBar from "@/components/BrandPhilosophyBar";
import FeaturedProductsSection from "@/components/AboutSection";
import BrandShowcaseSection from "@/components/ServicesSection";
import BrandStorySection from "@/components/PortfolioSection";
import TrendingScrollSection from "@/components/ProcessSection";
import CampaignSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <BrandPhilosophyBar />
        <BrandStorySection />
        <FeaturedProductsSection />
        <BrandShowcaseSection />
        <TrendingScrollSection />
        <CampaignSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

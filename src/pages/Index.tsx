import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConcertSection from "@/components/ConcertSection";
import GallerySection from "@/components/GallerySection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div id="gallery">
          {<GallerySection />}
        </div>
        <ConcertSection />
        <div id="music">
          {<MusicSection />}
        </div>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Cards from "../components/websiteManagement/HomePage/Cards";
import Footer from "../components/websiteManagement/HomePage/Footer";
import HeroSection from "../components/websiteManagement/HomePage/HeroSection";
import Section2 from "../components/websiteManagement/HomePage/Section2";
import Section6 from "../components/websiteManagement/HomePage/Section6";
import Section7 from "../components/websiteManagement/HomePage/Section7";
import Section7cards from "../components/websiteManagement/HomePage/Section7cards";
import Section8 from "../components/websiteManagement/HomePage/Section8";

function HomePage() {
  return (
    <div className="w-360 h-1585.5">
      <HeroSection />
      <Section2 />
      <Section6 />
      <Cards />
      <Section7 />
      <Section7cards />
      <Section8 />
      <Footer />
    </div>
  );
}

export default HomePage;

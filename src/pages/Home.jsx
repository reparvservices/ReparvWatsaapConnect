import Card from "../components/Card";
import Benefits from "../components/Home/Benifits";
import CTA from "../components/Home/CTA";
import FAQ from "../components/Home/FAQ";
import FeaturesSection from "../components/Home/Features";
import HowItWorks from "../components/Home/Howitwork";
import Pricing from "../components/Home/Pricing";
import ProductShowcase from "../components/Home/ProductShowCase";
import ReparvHeroSection from "../components/Home/ReparvHeroSection";
import Stats from "../components/Home/Stats";
import Testimonials from "../components/Home/Testimonials";

function Home() {
  return (
    <div className="page page-home">
      <ReparvHeroSection />
      <Stats />
      <FeaturesSection />
      <HowItWorks />
      <ProductShowcase />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default Home;

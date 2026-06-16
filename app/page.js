import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import AboutSection from '@/components/AboutSection';
import EcosystemSection from '@/components/EcosystemSection';
import IndustrySection from '@/components/IndustrySection';
import WhySection from '@/components/WhySection';
import DeploymentSection from '@/components/DeploymentSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
        <TrustSection />
     
      <AboutSection />
      <EcosystemSection />
     
      <IndustrySection />
      <WhySection />
      <DeploymentSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}

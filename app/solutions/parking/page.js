'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParkingHeroSection from '@/components/solutions/parking/HeroSection';
import ParkingScenariosSection from '@/components/solutions/parking/ScenariosSection';
import ParkingWhySection from '@/components/solutions/parking/WhyParkingSection';
import ParkingCapabilitiesSection from '@/components/solutions/parking/CapabilitiesSection';
import ParkingEcosystemSection from '@/components/solutions/parking/EcosystemSection';
import ParkingBenefitsSection from '@/components/solutions/parking/BenefitsSection';
import ParkingWhyChooseSection from '@/components/solutions/parking/WhyChooseSection';
import ParkingFaqSection from '@/components/solutions/parking/FaqSection';
import ParkingCtaSection from '@/components/solutions/parking/Ctasection';
import ParkingTaglineStrip from '@/components/solutions/parking/TaglineStrip';

export default function ParkingSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <ParkingHeroSection />

      {/* 2 — Ticketless Entry Banner */}
      <ParkingScenariosSection />

      {/* 3 — Why SmartPay */}
      <ParkingWhySection />

      {/* 4 — SmartPay Solution Features */}
      <ParkingCapabilitiesSection />

      {/* 5 — Industries We Serve */}
      <ParkingEcosystemSection />

      {/* 6 — Benefits */}
      <ParkingBenefitsSection />

      {/* 7 — Why Choose SecureAAi SmartPay */}
      <ParkingWhyChooseSection />

      {/* 8 — FAQ */}
      <ParkingFaqSection />

      {/* 9 — CTA */}
      <ParkingCtaSection />

      {/* 10 — Tagline Strip */}
      <ParkingTaglineStrip />

      <Footer />
    </main>
  );
}

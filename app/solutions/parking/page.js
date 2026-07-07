'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParkingHeroSection from '@/components/solutions/parking/HeroSection';
import ParkingWhySection from '@/components/solutions/parking/WhyParkingSection';
import ParkingScenariosSection from '@/components/solutions/parking/ScenariosSection';
import ParkingCapabilitiesSection from '@/components/solutions/parking/CapabilitiesSection';
import ParkingEcosystemSection from '@/components/solutions/parking/EcosystemSection';
import ParkingFaqSection from '@/components/solutions/parking/FaqSection';
import ParkingCtaSection from '@/components/solutions/parking/Ctasection';

export default function ParkingSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <ParkingHeroSection />

      {/* 2 — Why Smart Parking */}
      <ParkingWhySection />

      {/* 3 — Scenarios */}
      <ParkingScenariosSection />

      {/* 4 — Capabilities */}
      <ParkingCapabilitiesSection />

      {/* 5 — Ecosystem & Industries */}
      <ParkingEcosystemSection />

      {/* 6 — FAQ */}
      <ParkingFaqSection />

      {/* 7 — CTA */}
      <ParkingCtaSection />

      <Footer />
    </main>
  );
}

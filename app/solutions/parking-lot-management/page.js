'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlmHeroSection from '@/components/solutions/parking-lot-management/HeroSection';
import PlmWhySection from '@/components/solutions/parking-lot-management/WhySection';
import PlmCapabilitiesSection from '@/components/solutions/parking-lot-management/CapabilitiesSection';
import PlmEcosystemSection from '@/components/solutions/parking-lot-management/EcosystemSection';
import PlmFaqSection from '@/components/solutions/parking-lot-management/FaqSection';
import PlmCtaSection from '@/components/solutions/parking-lot-management/Ctasection';
import PlmTaglineStrip from '@/components/solutions/parking-lot-management/TaglineStrip';

export default function ParkingLotManagementPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <PlmHeroSection />

      {/* 2 — Why It Matters */}
      <PlmWhySection />

      {/* 3 — Capabilities */}
      <PlmCapabilitiesSection />

      {/* 4 — Ecosystem & Industries */}
      <PlmEcosystemSection />

      {/* 5 — FAQ */}
      <PlmFaqSection />

      {/* 6 — CTA */}
      <PlmCtaSection />

      {/* 7 — Tagline Strip */}
      <PlmTaglineStrip />

      <Footer />
    </main>
  );
}

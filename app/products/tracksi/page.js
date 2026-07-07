'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TracksiHeroSection from '@/components/products/tracksi/HeroSection';
import TracksiSoftwareSection from '@/components/products/tracksi/SoftwareSection';
import TracksiHardwareSection from '@/components/products/tracksi/HardwareSection';
import TracksiFeaturesSection from '@/components/products/tracksi/FeaturesSection';
import TracksiCtaSection from '@/components/products/tracksi/Ctasection';
import TracksiGPSSection from '@/components/products/tracksi/Gpstracking';

export default function TracksiPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <TracksiHeroSection />

      {/* 2 — Hardware */}
      <TracksiHardwareSection />

      {/* 3 — Software Platform */}
      <TracksiSoftwareSection />
<TracksiGPSSection/>


      {/* 4 — Advanced Features */}
      <TracksiFeaturesSection />

      {/* 5 — CTA */}
      <TracksiCtaSection />

      <Footer />
    </main>
  );
}

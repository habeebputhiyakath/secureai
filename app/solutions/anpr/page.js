'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiproHeroSection from '@/components/solutions/anpr/HeroSection';
import SiproWhyAnprSection from '@/components/solutions/anpr/WhyAnprSection';
import SiproCapabilitiesSection from '@/components/solutions/anpr/CapabilitiesSection';
import SiproIntegrationsSection from '@/components/solutions/anpr/IntegrationScenariosSection';
import SiproFaqSection from '@/components/solutions/anpr/FaqSection';
import SiproCtaSection from '@/components/solutions/anpr/Ctasection';

export default function AnprSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <SiproHeroSection />

      {/* 2 — Why ANPR */}
      <SiproWhyAnprSection />

      {/* 3 — Core Capabilities */}
      <SiproCapabilitiesSection />

      {/* 4 — Integrations & Scenarios */}
      <SiproIntegrationsSection />

      {/* 5 — FAQ */}
      <SiproFaqSection />

      {/* 6 — CTA */}
      <SiproCtaSection />

      <Footer />
    </main>
  );
}

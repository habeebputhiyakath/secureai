'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EemHeroSection from '@/components/solutions/entrance-exit-management/HeroSection';
import EemWhySection from '@/components/solutions/entrance-exit-management/WhySection';
import EemHowItWorksSection from '@/components/solutions/entrance-exit-management/HowItWorksSection';
import EemActionBanner from '@/components/solutions/entrance-exit-management/ActionBanner';
import EemCapabilitiesSection from '@/components/solutions/entrance-exit-management/CapabilitiesSection';
import EemCompatibilitySection from '@/components/solutions/entrance-exit-management/CompatibilitySection';
import EemDeploymentTypesSection from '@/components/solutions/entrance-exit-management/DeploymentTypesSection';
import EemRemoteAccessSection from '@/components/solutions/entrance-exit-management/RemoteAccessSection';
import EemTechnicalSpecsSection from '@/components/solutions/entrance-exit-management/TechnicalSpecsSection';
import EemIndustriesSection from '@/components/solutions/entrance-exit-management/IndustriesSection';
import EemFaqSection from '@/components/solutions/entrance-exit-management/FaqSection';
import EemCtaSection from '@/components/solutions/entrance-exit-management/Ctasection';
import EemTaglineStrip from '@/components/solutions/entrance-exit-management/TaglineStrip';

export default function EntranceExitManagementPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <EemHeroSection />

      {/* 3 — Why It Matters */}
      <EemWhySection />

      {/* 4 — How It Works */}
      <EemHowItWorksSection />

      {/* 5 — See It In Action */}
      <EemActionBanner />

      {/* 6 — Capabilities */}
      <EemCapabilitiesSection />

      {/* 7 — Compatibility & Integration */}
      <EemCompatibilitySection />

      {/* 8 — Deployment Types */}
      <EemDeploymentTypesSection />

      {/* 8b — Remote Access Control for Off-Grid Sites */}
      <EemRemoteAccessSection />

      {/* 9 — Technical Specifications */}
      <EemTechnicalSpecsSection />

      {/* 10 — Industries We Serve */}
      <EemIndustriesSection />

      {/* 11 — FAQ */}
      <EemFaqSection />

      {/* 12 — CTA */}
      <EemCtaSection />

      {/* 13 — Tagline Strip */}
      <EemTaglineStrip />

      <Footer />
    </main>
  );
}

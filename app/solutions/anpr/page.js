'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiproHeroSection from '@/components/solutions/anpr/HeroSection';
import SiproStatsSection from '@/components/solutions/anpr/StatsSection';
import SiproConditionsBanner from '@/components/solutions/anpr/ConditionsBanner';
import SiproWhyAnprSection from '@/components/solutions/anpr/WhyAnprSection';
import SiproKeyBenefitsSection from '@/components/solutions/anpr/KeyBenefitsSection';
import SiproCapabilitiesSection from '@/components/solutions/anpr/CapabilitiesSection';
import SiproDeploymentTypesSection from '@/components/solutions/anpr/DeploymentTypesSection';
import SiproHowItWorksSection from '@/components/solutions/anpr/HowItWorksSection';
import SiproIntegrationsSection from '@/components/solutions/anpr/IntegrationScenariosSection';
import SiproIndustriesSection from '@/components/solutions/anpr/IndustriesSection';
import SiproTechnicalSpecsSection from '@/components/solutions/anpr/TechnicalSpecsSection';
import SiproWhyChooseSection from '@/components/solutions/anpr/WhyChooseSection';
import SiproFaqSection from '@/components/solutions/anpr/FaqSection';
import SiproCtaSection from '@/components/solutions/anpr/Ctasection';
import SiproTaglineStrip from '@/components/solutions/anpr/TaglineStrip';

export default function AnprSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <SiproHeroSection />

      {/* 2 — Performance Metrics */}
      <SiproStatsSection />

      {/* 3 — Conditions Banner */}
      <SiproConditionsBanner />

      {/* 4 — Why ANPR */}
      <SiproWhyAnprSection />

      {/* 5 — Key Benefits */}
      <SiproKeyBenefitsSection />

      {/* 6 — Core Capabilities */}
      <SiproCapabilitiesSection />

      {/* 7 — Deployment Types */}
      <SiproDeploymentTypesSection />

      {/* 8 — How It Works */}
      <SiproHowItWorksSection />

      {/* 9 — Application Scenarios */}
      <SiproIntegrationsSection />

      {/* 10 — Industries We Serve */}
      <SiproIndustriesSection />

      {/* 11 — Technical Specifications */}
      <SiproTechnicalSpecsSection />

      {/* 12 — Why Choose SecureAAi Si Pro ANPR */}
      <SiproWhyChooseSection />

      {/* 13 — FAQ */}
      <SiproFaqSection />

      {/* 14 — CTA */}
      <SiproCtaSection />

      {/* 15 — Tagline Strip */}
      <SiproTaglineStrip />

      <Footer />
    </main>
  );
}

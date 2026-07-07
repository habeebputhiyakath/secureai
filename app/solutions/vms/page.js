'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VmsHeroSection from '@/components/solutions/vms/HeroSection';
import VmsWhySection from '@/components/solutions/vms/WhyVmsSection';
import VmsCapabilitiesSection from '@/components/solutions/vms/CapabilitiesSection';
import VmsIntegrationsSection from '@/components/solutions/vms/IntegrationsSection';
import VmsScenariosSection from '@/components/solutions/vms/ScenariosSection';
import VmsFaqSection from '@/components/solutions/vms/FaqSection';
import VmsCtaSection from '@/components/solutions/vms/Ctasection';

export default function VmsSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <VmsHeroSection />

      {/* 2 — Why VMS */}
      <VmsWhySection />

      {/* 3 — Core Capabilities */}
      <VmsCapabilitiesSection />

      {/* 4 — Integrations */}
      <VmsIntegrationsSection />

      {/* 5 — Scenarios */}
      <VmsScenariosSection />

      {/* 6 — FAQ */}
      <VmsFaqSection />

      {/* 7 — CTA */}
      <VmsCtaSection />

      <Footer />
    </main>
  );
}

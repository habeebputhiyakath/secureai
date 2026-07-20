'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VmsHeroSection from '@/components/solutions/vms/HeroSection';
import VmsControlRoomBanner from '@/components/solutions/vms/ControlRoomBanner';
import VmsWhySection from '@/components/solutions/vms/WhyVmsSection';
import VmsKeyBenefitsSection from '@/components/solutions/vms/KeyBenefitsSection';
import VmsCapabilitiesSection from '@/components/solutions/vms/CapabilitiesSection';
import VmsScenariosSection from '@/components/solutions/vms/ScenariosSection';
import VmsIndustriesSection from '@/components/solutions/vms/IndustriesSection';
import VmsWhyChooseSection from '@/components/solutions/vms/WhyChooseSection';
import VmsFaqSection from '@/components/solutions/vms/FaqSection';
import VmsCtaSection from '@/components/solutions/vms/Ctasection';
import VmsTaglineStrip from '@/components/solutions/vms/TaglineStrip';

export default function VmsSolutionsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <VmsHeroSection />

      {/* 2 — Control Room Banner */}
      <VmsControlRoomBanner />

      {/* 3 — Why VMS */}
      <VmsWhySection />

      {/* 4 — Key Benefits */}
      <VmsKeyBenefitsSection />

      {/* 5 — Core Capabilities */}
      <VmsCapabilitiesSection />

      {/* 6 — Application Scenarios */}
      <VmsScenariosSection />

      {/* 7 — Industries We Serve */}
      <VmsIndustriesSection />

      {/* 8 — Why Choose SecureAAi VMS */}
      <VmsWhyChooseSection />

      {/* 9 — FAQ */}
      <VmsFaqSection />

      {/* 10 — CTA */}
      <VmsCtaSection />

      {/* 11 — Tagline Strip */}
      <VmsTaglineStrip />

      <Footer />
    </main>
  );
}

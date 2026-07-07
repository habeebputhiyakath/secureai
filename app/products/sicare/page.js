'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SicareHeroSection from '@/components/products/sicare/HeroSection';
import SicareWhySection from '@/components/products/sicare/WhySupportSection';
import SicareTechnicalSection from '@/components/products/sicare/TechnicalSupportSection';
import SicareSoftwareSection from '@/components/products/sicare/SoftwareRemoteSection';
import SicareLifecycleSection from '@/components/products/sicare/LifecycleSection';
import SicareWhyChooseSection from '@/components/products/sicare/WhyChooseSection';
import SicareCtaSection from '@/components/products/sicare/Ctasection';

export default function SicarePage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <SicareHeroSection />

      {/* 2 — Why Support Services Matter */}
      <SicareWhySection />

      {/* 3 — Technical & Preventive Maintenance */}
      <SicareTechnicalSection />

      {/* 4 — Software, Remote, Performance */}
      <SicareSoftwareSection />

      {/* 5 — Lifecycle Management */}
      <SicareLifecycleSection />

      {/* 6 — Why Choose */}
      <SicareWhyChooseSection />

      {/* 7 — CTA */}
      <SicareCtaSection />

      <Footer />
    </main>
  );
}

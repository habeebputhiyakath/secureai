'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SivmsHeroSection from '@/components/products/sivms/HeroSection';
import SivmsOverviewSection from '@/components/products/sivms/Overviewsection';
import SivmsCoreFeaturesSection from '@/components/products/sivms/Corefeaturessection';
import SivmsApplicationsSection from '@/components/products/sivms/Applicationssection';
import SivmsStatsSection from '@/components/products/sivms/Statssection';
import SivmsCtaSection from '@/components/products/sivms/Ctasection';

export default function SivmsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>

      {/* 1 — Hero (dark full-screen) */}
      <SivmsHeroSection />

      {/* 2 — "This is SiVMS" overview + architecture diagram */}
      <SivmsOverviewSection />

      {/* 3 — Core features (Dahua-style 4-card + 1 wide card grid) */}
      <SivmsCoreFeaturesSection />

     

      {/* 5 — Applications / Industry verticals */}
      <SivmsApplicationsSection />

      {/* 6 — CTA (blue gradient) */}
      <SivmsCtaSection />

    </main>
  );
}

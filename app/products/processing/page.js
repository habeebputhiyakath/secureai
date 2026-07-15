'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessingHeroSection from '@/components/products/processing/HeroSection';
import ProcessingSolutionsSection from '@/components/products/processing/Solutionssection';
import ProcessingBenefitsSection from '@/components/products/processing/Benefitssection';
import ProcessingCtaSection from '@/components/products/processing/Ctasection';

export default function ProcessingUnitsPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero (deep violet) */}
      <ProcessingHeroSection />

      {/* 2 — Solutions: 4 hardware families */}
      <ProcessingSolutionsSection />

      {/* 3 — Benefits: 5 operational advantages */}
      <ProcessingBenefitsSection />

      {/* 4 — CTA */}
      <ProcessingCtaSection />

    </main>
  );
}

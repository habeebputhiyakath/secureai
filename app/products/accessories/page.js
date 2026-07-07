'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessoriesHeroSection from '@/components/products/accessories/HeroSection';
import AccessoriesCategoriesSection from '@/components/products/accessories/Categoriessection';
import AccessoriesCtaSection from '@/components/products/accessories/Ctasection';

export default function AccessoriesPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero (deep teal) */}
      <AccessoriesHeroSection />

      {/* 2 — 5 product categories with sub-items */}
      <AccessoriesCategoriesSection />

      {/* 3 — CTA */}
      <AccessoriesCtaSection />

      <Footer />
    </main>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CamerasHeroSection from '@/components/products/cameras/HeroSection';
import CamerasCategoriesSection from '@/components/products/cameras/Categoriessection';
import CamerasKeyFeaturesSection from '@/components/products/cameras/Keyfeaturessection';
import CamerasCtaSection from '@/components/products/cameras/Ctasection';
import CamerasOverviewSection from '@/components/products/cameras/Camerasoverviewsection';
import CamerasSpecsMountingSection from '@/components/products/cameras/Camerasspecsmountingsection';

export default function IntelligentCamerasPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero (dark full-screen) */}
      <CamerasHeroSection />
      <CamerasOverviewSection />


<CamerasSpecsMountingSection/>
      {/* 2 — Product Categories (5 camera families) */}
      <CamerasCategoriesSection />

      {/* 3 — Key Features (6 engineering pillars) */}
      <CamerasKeyFeaturesSection />

      {/* 4 — CTA */}
      <CamerasCtaSection />

    </main>
  );
}

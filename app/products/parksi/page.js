'use client';

import CtaSection from "@/components/products/parksi/Ctasection";
import FeaturesSection from "@/components/products/parksi/Featuressection";
import HeroSection from "@/components/products/parksi/HeroSection";
import HowItWorksSection from "@/components/products/parksi/Howitworkssection";
import IntegrationSection from "@/components/products/parksi/Integrationsection";
import StatsSection from "@/components/products/parksi/Statssection";
import UseCasesSection from "@/components/products/parksi/Usecasessection";
import HardwareSolutionsSection from "@/components/products/parksi/Hardwaresolutionssection";


/**
 * ParkingPage.jsx
 * ──────────────────────────────────────────────────────────────────
 * Main page component — imports and composes all section components.
 *
 * FONTS  →  Add to your root layout.jsx / _document.jsx:
 *   <link
 *     href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap"
 *     rel="stylesheet"
 *   />
 *
 * GLOBAL CSS →  Add to globals.css:
 *   body, * { font-family: 'DM Sans', sans-serif; }
 *
 * DEPENDENCIES:
 *   npm install framer-motion
 *
 * IMAGES  →  Place these in /public:
 *   parking-hero.png, usecase-mall.png, usecase-office.png,
 *   usecase-hotel.png, usecase-city.png
 * ──────────────────────────────────────────────────────────────────
 */



export default function ParkingPage() {
  return (
    <main
      style={{
        fontFamily: "'DM Sans', sans-serif",
        color: '#0f172a',
        background: '#ffffff',
      }}
    >
      {/* 1 ─ Hero */}
      <HeroSection />

      {/* 2 ─ Features */}
      <FeaturesSection />

      {/* 3 ─ How It Works */}
      <HowItWorksSection />

      {/* 4 ─ Stats (full-width blue strip) */}
      <StatsSection />
      <HardwareSolutionsSection/>


      {/* 5 ─ Use Cases */}
      <UseCasesSection />

      {/* 6 ─ Integration */}
      <IntegrationSection />


      {/* 8 ─ CTA (full-width blue) */}
      <CtaSection />
    </main>
  );
}
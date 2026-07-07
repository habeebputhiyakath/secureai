'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalHeroSection from '@/components/products/professional/HeroSection';
import ProfessionalConsultDesignSection from '@/components/products/professional/ConsultationDesignSection';
import ProfessionalIntegrationSection from '@/components/products/professional/IntegrationDeploymentSection';
import ProfessionalTrainingSection from '@/components/products/professional/TrainingOptimizationSection';
import ProfessionalWhyLifecycleSection from '@/components/products/professional/WhyChooseLifecycleSection';
import ProfessionalCtaSection from '@/components/products/professional/FinalCtaSection';

export default function ProfessionalServicesPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      <Navbar />

      {/* 1 — Hero */}
      <ProfessionalHeroSection />

      {/* 2 — Consult & Design */}
      <ProfessionalConsultDesignSection />

      {/* 3 — Integration & Deployment */}
      <ProfessionalIntegrationSection />

      {/* 4 — Training & Optimization */}
      <ProfessionalTrainingSection />

      {/* 5 — Why Choose & Lifecycle */}
      <ProfessionalWhyLifecycleSection />

      {/* 6 — Final CTA */}
      <ProfessionalCtaSection />

      <Footer />
    </main>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OverviewHero from '@/components/products/overview/Hero';
import Ecosystem from '@/components/products/overview/Ecosystem';
import FeaturedProducts from '@/components/products/overview/FeaturedProducts';
import AIFeatures from '@/components/products/overview/AIFeatures';
import Industries from '@/components/products/overview/Industries';
import Workflow from '@/components/products/overview/Workflow';
import StatsDashboard from '@/components/products/overview/StatsSection';
import CustomerExperience from '@/components/products/overview/CustomerExperience';
import Comparison from '@/components/products/overview/Comparison';
import CTASection from '@/components/products/overview/CTASection';

export const metadata = {
  title: 'Products Overview | SecureAI',
  description: 'Experience the SecureAI Software Suite. A premium AI-powered platform for video management, ANPR, smart parking, and real-time tracking.',
};

export default function ProductsOverviewPage() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <OverviewHero />
        <Ecosystem />
        <FeaturedProducts />
        {/* <AIFeatures /> */}
        <Workflow />
        <StatsDashboard />
        <CustomerExperience />
       
        <CTASection />
      </div>
    </main>
  );
}

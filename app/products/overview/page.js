import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OverviewHero from '@/components/products/overview/Hero';
import ProductCards from '@/components/products/overview/ProductCards';
import KeyBenefits from '@/components/products/overview/KeyBenefits';

export const metadata = {
  title: 'Products Overview | SecureAAI',
  description: 'Transform physical security into a competitive advantage with products that amplify what organizations can achieve with video technology.',
};

export default function ProductsOverviewPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <OverviewHero />
        <ProductCards />
        <KeyBenefits />
      </div>
        
    </main>
  );
}

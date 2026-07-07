'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Siprohero from '@/components/products/sipro/siprohero';
import Siprocapabilities from '@/components/products/sipro/Siprocapabilities';
import Siproattributes from '@/components/products/sipro/Siproattributes';

export default function SiproPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#ffffff' }}>
      

      <Siprohero />
      <Siprocapabilities />
      <Siproattributes />

      
    </main>
  );
}

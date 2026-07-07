'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TechHero() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-hero-badge', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo('.tech-hero-title', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo('.tech-hero-desc', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo('.tech-hero-btn', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-20 pb-24 overflow-hidden bg-[#02061a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#02061a] to-blue-900/20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="tech-hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Technology Partner Program
          </div>
          
          <h1 className="tech-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Team Up, Think Ahead, <span className="text-blue-500">Sensing for Impact</span>
          </h1>
          
          <p className="tech-hero-desc text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            SecureAAI's IoT Ecosystem Partner Program serves as a central hub that unites platform providers and solution providers to deliver competitive, market-ready offerings. By combining our expertise in high-quality hardware with advanced platforms, we tackle a wide range of demands in Smart Building, People Sensing, and the LoRaWAN Ecosystem sectors. Uniting forces, we unlock new opportunities, accelerate growth, and empower businesses to thrive in an interconnected world.
          </p>
          
          <div className="tech-hero-btn flex flex-wrap gap-4">
            <a href="#join" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-600/30 border border-blue-500">
              Become a Partner
            </a>
            <a href="#ecosystem" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
              Explore Ecosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

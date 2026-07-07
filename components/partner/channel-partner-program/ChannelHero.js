'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ChannelHero() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-badge', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-title', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-desc', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-btn', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-20 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-6 border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Channel Partner Program
          </div>
          
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Partner with SecureAAI to <span className="text-blue-600">Scale Faster</span>
          </h1>
          
          <p className="hero-desc text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Grow your business with SecureAAI. Access industry-leading technologies, comprehensive support, and global market opportunities as our channel partner.
          </p>
          
          <div className="hero-btn flex flex-wrap gap-4">
            <a href="#apply" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30">
              Apply Now
            </a>
            <a href="#benefits" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
              View Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

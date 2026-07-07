'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Revenue & Growth',
    desc: 'Sales incentives, performance-based rebates, robust deal registration and pricing protection models, and access to a dedicated channel manager.',
    icon: '📈'
  },
  {
    title: 'Technical Resources',
    desc: 'Direct access to dedicated support teams for pre-sales and post-sales challenges, device management platforms, and deployment tools.',
    icon: '🔧'
  },
  {
    title: 'Sales Enablement',
    desc: 'Vertical solution briefs mapped to customer decision criteria.',
    icon: '💼'
  },
  {
    title: 'Marketing Support',
    desc: 'MDF structured around measurable outcomes, local event support, case study co-authorship, social and PR amplification of partner project wins.',
    icon: '🚀'
  },
  {
    title: 'Training & Certification',
    desc: 'Keep your employees\' knowledge up to date with a wide range of training courses, exclusive webinars, and industry-specific use cases.',
    icon: '🎓'
  }
];

export default function ChannelBenefits() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.benefit-card', 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={containerRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Don't Just Supply. We Empower.</h2>
          <p className="text-lg text-slate-600">SecureAAI works through partners so your success is a direct measure of ours. Our Channel Partner Program is designed to reduce the cost of doing business with us, and increase the value you bring to your customers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

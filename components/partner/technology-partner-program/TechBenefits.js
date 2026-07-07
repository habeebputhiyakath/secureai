'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Empower Your Business Growth',
    desc: 'Leverage joint resources and co-innovation to accelerate your solutions.',
    icon: '📈'
  },
  {
    title: 'Expand Your Market Reach',
    desc: 'Access our global network to extend your offerings into new verticals.',
    icon: '🌍'
  },
  {
    title: 'Unlock Your Technical Enablement',
    desc: 'Direct integration support and early access to SDKs and hardware testing.',
    icon: '🔧'
  },
  {
    title: 'Mutual Support for Growth',
    desc: 'Proactive support and joint industry solution innovation for market expansion.',
    icon: '🤝'
  }
];

export default function TechBenefits() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-benefit-card', 
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
    <section id="ecosystem" ref={containerRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Program Benefits & Requirements</h2>
          <p className="text-lg text-slate-600">Discover how partnering with us can unlock growth and value for your business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="tech-benefit-card flex gap-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-3xl">
                {b.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

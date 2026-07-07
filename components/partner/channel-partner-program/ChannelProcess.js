'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { step: '01', title: 'Apply', desc: 'Submit your partner application online with basic company details.' },
  { step: '02', title: 'Review', desc: 'Our team reviews your application and schedules an introduction call.' },
  { step: '03', title: 'Onboard', desc: 'Sign the partner agreement and get access to the partner portal.' },
  { step: '04', title: 'Grow', desc: 'Start selling with our dedicated support and unlock tier benefits.' }
];

export default function ChannelProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-item', 
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="apply" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Join</h2>
          <p className="text-lg text-slate-600">Become a SecureAAI partner in four simple steps.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="step-item relative pl-6 border-l-2 border-blue-100 pb-8 last:border-0 last:pb-0">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-blue-600" />
              <div className="text-sm font-bold text-blue-600 mb-2">Step {s.step}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all">
            Submit Application
          </a>
        </div>
      </div>
    </section>
  );
}

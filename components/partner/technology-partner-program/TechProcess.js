'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const process = [
  { step: '1', title: 'Register', desc: 'Fill out the online technology partner application.' },
  { step: '2', title: 'Evaluate', desc: 'Our engineers review your technology for integration compatibility.' },
  { step: '3', title: 'Integrate', desc: 'Access APIs and developer tools to build the integration.' },
  { step: '4', title: 'Validate', desc: 'Complete the testing process and receive official certification.' },
  { step: '5', title: 'Launch', desc: 'Joint go-to-market activities and inclusion in our ecosystem directory.' }
];

export default function TechProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-process-item', 
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="join" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Integration Journey</h2>
          <p className="text-lg text-slate-600">A clear path to becoming a certified Technology Partner.</p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <div key={i} className="tech-process-item relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xl mb-6 shadow-[0_0_0_8px_white] ring-1 ring-blue-100">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30">
            Start Integration Process
          </a>
        </div>
      </div>
    </section>
  );
}

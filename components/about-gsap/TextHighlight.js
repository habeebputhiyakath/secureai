'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function TextHighlight() {
  const container = useRef(null);

  useGSAP(() => {
    // Force split type elements to display inline-block
    gsap.set('.word', { display: 'inline-block', marginRight: '0.25em' });
    
    // Split the text
    const text = new SplitType('.highlight-text', { types: 'words' });
    
    // Set initial state
    gsap.set(text.words, { opacity: 0.15 });

    // Animate words opacity on scroll
    gsap.to(text.words, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1, // smooth scrubbing
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-40 px-6 lg:px-10 bg-[#02061a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0161FE]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="relative max-w-[1000px] mx-auto z-10">
        <div className="mb-8">
          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-[#0161FE]" />
             <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7fb1ff]">
               Our Commitment
             </span>
          </span>
        </div>
        
        <h2 className="highlight-text text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.3] tracking-tight">
          At SecureAAi Systems, we believe that security is no longer just about monitoring—it is about intelligence, automation, and actionable insights. Our commitment is to help organizations embrace digital transformation and build resilient, efficient, and future-ready environments through continuous innovation.
        </h2>

        <div className="mt-20">
          <a href="#contact" className="inline-flex items-center gap-3 border-b-2 border-[#0161FE] pb-2 text-white font-bold tracking-[0.1em] uppercase hover:text-[#0161FE] transition-colors duration-300">
            Partner With Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

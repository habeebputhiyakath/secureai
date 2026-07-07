'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const container = useRef(null);

  useGSAP(() => {
    // Force split type elements to display inline-block for transforms to work
    gsap.set('.word, .char', { display: 'inline-block' });
    
    // Split text into words/chars
    const headline = new SplitType('.hero-headline', { types: 'lines,words,chars' });
    const subheadline = new SplitType('.hero-sub', { types: 'lines,words' });

    // Initial entrance animation
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.from('.hero-badge', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(headline.chars, {
      y: 120,
      opacity: 0,
      rotationX: -90,
      stagger: 0.02,
      duration: 1.4,
      ease: 'power4.out',
      transformOrigin: '50% 50% -50px'
    }, "-=0.6")
    .from(subheadline.words, {
      y: 40,
      opacity: 0,
      stagger: 0.015,
      duration: 1.2,
      ease: 'power3.out',
    }, "-=1.0");

    // Scroll parallax effect
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6">
      <div className="hero-bg absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
          alt="Global Network" 
          className="w-full h-full object-cover opacity-30 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] w-full text-center pt-20">
        <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#0161FE]/40 bg-[#0161FE]/10 backdrop-blur-md mb-10">
           <span className="w-2 h-2 rounded-full bg-[#0161FE] animate-pulse" />
           <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0161FE]">
             Awwwards Winning Security
           </span>
        </div>
        
        <h1 className="hero-headline text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-white leading-[1.05] tracking-tight mb-8" style={{ perspective: '1000px' }}>
          Redefining <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0161FE]">Intelligent Security</span>
        </h1>
        
        <p className="hero-sub text-lg md:text-2xl text-slate-400 max-w-[800px] mx-auto font-medium leading-relaxed" style={{ perspective: '1000px' }}>
          We combine Artificial Intelligence, advanced video analytics, and enterprise-grade infrastructure to create complete security ecosystems for modern organizations.
        </p>
      </div>
    </section>
  );
}

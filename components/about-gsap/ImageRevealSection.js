'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageRevealSection() {
  const container = useRef(null);

  useGSAP(() => {
    const images = gsap.utils.toArray('.reveal-image-wrapper');
    
    images.forEach(wrapper => {
      const img = wrapper.querySelector('img');
      const text = wrapper.parentElement.querySelector('.reveal-text');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
      
      tl.fromTo(wrapper, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' // Reveal from bottom
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut'
      })
      .fromTo(img, {
        scale: 1.3
      }, {
        scale: 1,
        duration: 1.5,
        ease: 'power4.inOut'
      }, "<")
      
      if(text) {
        tl.fromTo(text, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=0.8");
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20 text-center max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Visualizing <span className="text-[#0161FE]">Intelligence</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            See how our advanced analytics and camera systems provide unparalleled clarity and actionable insights in mission-critical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          
          <div className="flex flex-col gap-6 mt-0 md:mt-24">
            <div className="reveal-image-wrapper relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Analytics" className="w-full h-full object-cover" />
            </div>
            <div className="reveal-text">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Real-time Analytics</h3>
              <p className="text-slate-500 font-medium">Processing millions of data points instantly at the edge.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="reveal-image-wrapper relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Access Control" className="w-full h-full object-cover" />
            </div>
            <div className="reveal-text">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Biometric Access</h3>
              <p className="text-slate-500 font-medium">Securing critical zones with sub-second authentication.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

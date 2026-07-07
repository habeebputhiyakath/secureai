'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "Who We Are",
    desc: "SecureAAi Systems is a technology-driven company specializing in AI-powered security and surveillance solutions.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "bg-slate-50"
  },
  {
    title: "Our Mission",
    desc: "To deliver innovative and intelligent security technologies that help organizations protect assets and optimize operations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "bg-[#0161FE]/5"
  },
  {
    title: "Our Vision",
    desc: "To become a globally recognized leader in AI-powered security and intelligent infrastructure solutions.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    color: "bg-slate-50"
  },
  {
    title: "What We Do",
    desc: "We provide end-to-end security solutions combining software, hardware, and services into a unified ecosystem.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    color: "bg-[#0161FE]/5"
  }
];

export default function HorizontalStory() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const getScrollAmount = () => {
      let containerWidth = containerRef.current.scrollWidth;
      return -(containerWidth - window.innerWidth);
    };

    const tween = gsap.to(containerRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${getScrollAmount() * -1}`,
        invalidateOnRefresh: true,
      }
    });

    // Animate inner elements inside each panel when they enter viewport
    const innerPanels = gsap.utils.toArray('.horizontal-panel');
    innerPanels.forEach((panel, i) => {
      const textWrap = panel.querySelector('.panel-text');
      const imgWrap = panel.querySelector('.panel-img');
      
      gsap.fromTo(textWrap, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: tween,
          start: "left center",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.fromTo(imgWrap, { scale: 0.8, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          containerAnimation: tween,
          start: "left 70%",
          toggleActions: "play none none reverse"
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden bg-white">
      <div ref={containerRef} className="flex h-full w-max">
        {panels.map((panel, i) => (
          <div key={i} className={`horizontal-panel w-screen h-screen flex items-center justify-center p-6 md:p-20 shrink-0 ${panel.color}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[1280px] items-center">
              <div className="panel-text">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0161FE] mb-6 block">
                  Chapter 0{i + 1}
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                  {panel.title}
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                  {panel.desc}
                </p>
              </div>
              
              <div className="panel-img relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <img src={panel.image} alt={panel.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

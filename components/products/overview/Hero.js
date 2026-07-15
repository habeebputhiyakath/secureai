'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function OverviewHero() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ov-vis'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.ov-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .ov-section { font-family: 'DM Sans', sans-serif; }
        .ov-mono { font-family: 'JetBrains Mono', monospace; }

        .ov-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .ov-rev.ov-vis { opacity: 1; transform: none; }
        .ov-d0 { transition-delay: 0.00s; }
        .ov-d1 { transition-delay: 0.08s; }
        .ov-d2 { transition-delay: 0.16s; }
        .ov-d3 { transition-delay: 0.24s; }

        @keyframes ovBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .ov-blink { animation: ovBlink 1.4s ease-in-out infinite; }

        .ov-btn-primary { transition: background 0.22s, transform 0.22s, box-shadow 0.22s; }
        .ov-btn-primary:hover { background: #0052d6; transform: translateY(-2px); box-shadow: 0 10px 24px -8px rgba(1,97,254,0.5); }
        .ov-btn-primary:hover svg { transform: translateX(3px); }

        .ov-btn-secondary { transition: background 0.22s, border-color 0.22s, transform 0.22s; }
        .ov-btn-secondary:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); transform: translateY(-2px); }

        .ov-btn-primary svg, .ov-btn-secondary svg { transition: transform 0.2s; }
      `}</style>

      <section
        ref={ref}
        className="ov-section relative min-h-[80vh] flex items-center pt-[72px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/products/overview/hero.png')" }}
      >
       

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="ov-rev ov-d0 inline-flex items-center gap-[7px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-[14px] py-[6px] text-[0.72rem] font-semibold tracking-[0.08em] text-white uppercase mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-[#3B82F6] ov-blink" />
              AI Security Software Ecosystem
            </div>

            {/* Heading */}
            <h1 className="ov-rev ov-d1 text-[clamp(2.4rem,4.2vw,3.6rem)] font-extrabold leading-[1.12] tracking-tight text-white mb-6">
              Intelligent Security <span className="text-[#3B82F6]">Software</span>
              <br />
              for Modern Operations
            </h1>

           
            {/* Buttons */}
            <div className="ov-rev ov-d2 flex flex-wrap gap-4 mb-10">
              <Link
                href="#products"
                className="ov-btn-primary inline-flex items-center gap-2 bg-[#0161FE] text-white font-semibold text-[0.9rem] px-7 py-[14px] rounded-full"
              >
                Explore Products <ArrowIcon />
              </Link>

              <Link
                href="/contact"
                className="ov-btn-secondary inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-[0.9rem] px-7 py-[14px] rounded-full"
              >
                Request Demo
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="ov-rev ov-d3 flex flex-wrap gap-x-6 gap-y-3">
              {['SIRA Approved', 'ISO 27001 Certified', 'GDPR Compliant'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#0161FE] flex items-center justify-center text-white shrink-0">
                    <CheckIcon />
                  </div>
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
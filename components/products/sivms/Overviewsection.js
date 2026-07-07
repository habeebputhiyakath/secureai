'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SivmsOverviewSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('svo-vis');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.svo-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);



  return (
    <>
      <style>{`
        .svo-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .svo-rev.svo-vis { opacity: 1; transform: none; }
        .svo-d0{transition-delay:0s} .svo-d1{transition-delay:0.08s}
        .svo-d2{transition-delay:0.16s} .svo-d3{transition-delay:0.24s}

        .svo-arch-card {
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .svo-arch-card:hover {
          border-color: #93c5fd !important;
          box-shadow: 0 6px 28px rgba(1,97,254,0.1);
          transform: translateY(-3px);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.8,
          }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="svo-rev svo-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Platform Overview
            </div>
            <h2 className="svo-rev svo-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
              This is <span style={{ color: '#0161FE' }}>SiVMS™</span>
            </h2>
            <p className="svo-rev svo-d2 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              SiVMS™ is a centralized video management platform designed for enterprise and industrial-scale deployments. It delivers live monitoring, secure recording, AI-powered analytics, event management, and multi-site control through a single unified interface — enabling organisations to convert video data into actionable security intelligence.
            </p>
          </div>

         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-16"
>
  <Image
    src="/sivms-overview.png"
    alt="SiVMS Architecture"
    width={2000}
    height={1000}
    priority
    className="w-full max-w-7xl mx-auto h-auto object-contain"
  />
</motion.div>
        </div>
      </section>
    </>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomerExperience() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cx-vis'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.cx-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .cx-section { font-family: 'DM Sans', sans-serif; }

        .cx-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .cx-rev.cx-vis { opacity: 1; transform: none; }
        .cx-d0 { transition-delay: 0.00s; }
        .cx-d1 { transition-delay: 0.08s; }
        .cx-d2 { transition-delay: 0.16s; }
        .cx-d3 { transition-delay: 0.24s; }

        .cx-quote { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .cx-quote:hover { transform: translateY(-3px); border-color: rgba(1,97,254,0.25); box-shadow: 0 12px 32px -12px rgba(1,97,254,0.18); }
      `}</style>

      <section ref={ref} className="cx-section relative overflow-hidden bg-white py-24 lg:py-28 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT — Image */}
            <motion.div
              initial={{ scale: 1.06, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px]"
              style={{ boxShadow: '0 20px 60px rgba(2,6,26,0.12)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Control Room Operator"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

              {/* Floating stat */}
              <div className="absolute top-6 left-6 bg-white rounded-2xl px-5 py-4"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <p className="text-xs text-slate-500 mb-0.5">Response Time Improvement</p>
                <h3 className="text-2xl font-bold" style={{ color: '#0161FE' }}>−80%</h3>
              </div>

              {/* Floating live status */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-4"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <p className="text-xs text-slate-500 mb-1">Operator Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-semibold text-sm text-slate-800">Active</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Content */}
            <div className="flex flex-col">
              <div className="cx-rev cx-d0 mb-6">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                  Customer Experience
                </span>
              </div>

              <h2 className="cx-rev cx-d1 text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-5">
                Empowering the modern security operator.
              </h2>

              <p className="cx-rev cx-d2 text-[1.05rem] text-slate-500 leading-[1.75] font-normal max-w-[480px] mb-8">
                SecureAI provides an intuitive, distraction-free environment so your security team can focus on what matters most — responding to critical events instantly and accurately.
              </p>

              {/* Testimonial */}
              <div className="cx-rev cx-d3 cx-quote rounded-[22px] bg-slate-50 border border-slate-200 p-7 relative"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                <div className="absolute top-6 right-6 text-3xl text-slate-900 opacity-10 select-none leading-none">"</div>
                <p className="text-[0.95rem] text-slate-600 leading-relaxed italic mb-6 font-medium">
                  "Since deploying SecureAI, our response times have dropped by 80%. The platform practically runs itself, allowing our team to manage ten times the cameras with ease."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-200 shrink-0">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="David Chen" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-800">David Chen</p>
                    <p className="text-[12px] text-slate-500">Director of Security, Global Logistics Inc.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
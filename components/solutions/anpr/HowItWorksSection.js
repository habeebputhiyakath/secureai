'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Capture',
    desc: 'High-resolution ANPR cameras capture every vehicle across multiple lanes, in day, night, and adverse weather conditions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Recognize',
    desc: 'Edge AI algorithms detect and read license plates in real time — supporting 60+ international plate formats at 98.7% accuracy.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 17v2M17 17v2" /><path d="M7 11h6" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Match & Alert',
    desc: 'Recognized plates are instantly checked against blacklist and whitelist records, triggering real-time alerts on any match.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Manage & Analyze',
    desc: 'Events, analytics, and footage unify into a single dashboard for search, reporting, and integration with parking, VMS, and access control.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
];

export default function SiproHowItWorksSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('shw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.shw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .shw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .shw-rev.shw-vis { opacity:1; transform:none; }
        .shw-d0{transition-delay:0s} .shw-d1{transition-delay:.08s}
        .shw-frame {
          position: relative; border-radius: 26px; overflow: hidden;
          box-shadow: 0 24px 60px -18px rgba(15,23,42,.28), 0 4px 16px rgba(1,97,254,.08);
          border: 1px solid #e2e8f0;
        }
        .shw-frame img { display:block; width:100%; height:100%; object-fit:cover; }
        .shw-tag {
          position:absolute; bottom:16px; left:16px; right:16px;
          background:rgba(15,23,42,.78); backdrop-filter: blur(6px);
          border-radius: 12px; padding: 10px 14px;
          color:#fff; font-size:.75rem; font-weight:600;
          border:1px solid rgba(255,255,255,.12);
        }
        .shw-step {
          display: flex; gap: 18px; padding: 20px 4px;
          border-bottom: 1px solid #e2e8f0;
          transition: background 0.2s;
        }
        .shw-step:last-child { border-bottom: none; }
        .shw-step:hover { background: rgba(1,97,254,.03); }
        .shw-num {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
          background: rgba(1,97,254,.08); color:#0161FE; border:1px solid rgba(1,97,254,.18);
        }
      `}</style>
      <section ref={ref} id="how-it-works" className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="shw-rev shw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              How It Works
            </div>
            <h2 className="shw-rev shw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              From Vehicle to <span style={{ color:'#0161FE' }}>Actionable Intelligence</span>
            </h2>
            <p className="shw-rev shw-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              A single, streamlined pipeline that turns every passing vehicle into structured, searchable, and actionable data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

            {/* Left: sticky operations image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <div className="shw-frame aspect-[4/3]">
                <img src="/products/overview/anpr.png" alt="City traffic engineer monitoring live ANPR operations from a control van" />
                <div className="shw-tag">City Traffic Management — ANPR Operations, live monitoring in the field</div>
              </div>
            </motion.div>

            {/* Right: steps list */}
            <div>
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="shw-step"
                >
                  <div className="shw-num">{s.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[0.68rem] font-bold text-slate-300">{s.step}</span>
                      <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

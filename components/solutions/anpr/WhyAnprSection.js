'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { title: 'Increasing Traffic Volumes', desc: 'Growing vehicle numbers require intelligent systems capable of processing information automatically.', icon: '🚗' },
  { title: 'Manual Operations', desc: 'Conventional processes increase labor costs and reduce efficiency.', icon: '✍️' },
  { title: 'Limited Visibility', desc: 'Organizations lack actionable information about vehicle movement and behavior.', icon: '👁️‍🗨️' },
  { title: 'Security Challenges', desc: 'Unauthorized vehicles and suspicious activities require immediate attention.', icon: '🚨' },
  { title: 'Investigation Difficulties', desc: 'Manual searches consume time and delay incident response.', icon: '🔍' },
];

const benefits = [
  { title: 'Accurate Recognition', desc: 'Identify vehicles reliably using advanced AI.' },
  { title: 'Real-Time Monitoring', desc: 'Track movement and receive immediate event notifications.' },
  { title: 'Improved Security', desc: 'Detect unauthorized or blacklisted vehicles automatically.' },
  { title: 'Reduced Operating Costs', desc: 'Minimize manual monitoring and automate operations.' },
  { title: 'Faster Investigations', desc: 'Search historical vehicle records within seconds.' },
  { title: 'Centralized Management', desc: 'Manage multiple locations from a unified platform.' },
];

export default function SiproWhyAnprSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.spw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spw-rev.spw-vis { opacity:1; transform:none; }
        .spw-d0{transition-delay:0s} .spw-d1{transition-delay:.08s} .spw-d2{transition-delay:.16s}
        .spw-card { transition: box-shadow 0.3s, transform 0.3s; }
        .spw-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.06) !important; transform: translateY(-4px); }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Challenges */}
            <div>
              <div className="spw-rev spw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h2 className="spw-rev spw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Why Modern Organizations Need ANPR
              </h2>
              <p className="spw-rev spw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                Traditional vehicle monitoring methods are often inefficient, labor-intensive, and unable to provide real-time insights.
              </p>
              
              <div className="space-y-4">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="text-2xl mt-1">{c.icon}</div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: The Benefits */}
            <div>
               <div className="spw-rev spw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(2,132,199,.08)',color:'#0284c7',border:'1px solid rgba(2,132,199,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Solution
              </div>
              <h2 className="spw-rev spw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                One Platform. <span className="text-sky-600">Complete Intelligence.</span>
              </h2>
              <p className="spw-rev spw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                SecureAAi ANPR addresses these challenges through AI-powered automation and intelligent analytics.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="spw-card p-5 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mb-3 border border-sky-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{b.title}</h4>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

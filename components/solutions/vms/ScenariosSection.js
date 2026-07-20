'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scenarios = [
  {
    title: 'Enterprise Security Operations',
    desc: 'Centralized surveillance across multiple buildings and facilities.',
    icon: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h1M8 11h1M8 15h1M15 7h1M15 11h1M15 15h1" /></>,
  },
  {
    title: 'Smart City Monitoring',
    desc: 'Integrated city-wide video management and public safety.',
    icon: <><path d="M3 21h18" /><path d="M5 21V7l5-4 5 4v14" /><path d="M15 21V11l4-2 2 2v10" /><path d="M9 9h1M9 13h1M9 17h1" /></>,
  },
  {
    title: 'Transportation Infrastructure',
    desc: 'Monitor airports, railways, and traffic networks.',
    icon: <><rect x="3" y="6" width="15" height="10" rx="2" /><path d="M18 10h2l1.5 2.5V16H18" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="16.5" cy="18" r="1.5" /></>,
  },
  {
    title: 'Critical Infrastructure Protection',
    desc: 'Secure power plants, industrial facilities, and sensitive environments.',
    icon: <><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z" /><path d="M12 8v5" /><circle cx="12" cy="16.2" r="0.6" fill="currentColor" /></>,
  },
];

export default function VmsScenariosSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vs-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vs-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vs-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vs-rev.vs-vis { opacity:1; transform:none; }
        .vs-d0{transition-delay:0s} .vs-d1{transition-delay:.08s}
        .vs-card { transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; }
        .vs-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(1,97,254,.10); border-color: rgba(1,97,254,.3); }
        .vs-frame {
          position: relative; border-radius: 26px; overflow: hidden;
          box-shadow: 0 24px 60px -18px rgba(15,23,42,.28), 0 4px 16px rgba(1,97,254,.08);
          border: 1px solid #e2e8f0;
        }
        .vs-frame img { display:block; width:100%; height:100%; object-fit:cover; }
      `}</style>
      <section ref={ref} id="scenarios" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="vs-rev vs-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Application Scenarios
              </div>
              <h2 className="vs-rev vs-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                4 Core <span style={{ color:'#0161FE' }}>Application Scenarios</span>
              </h2>
              <p className="vs-rev vs-d1 text-slate-500 text-lg leading-relaxed">
                From a single building to an entire connected city, SecureAAi VMS scales to match the deployment.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="vs-frame aspect-[16/10]"
            >
              <img src="/smart-city-illustration.png" alt="Connected smart city with integrated surveillance, transportation, and infrastructure monitoring" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((sc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="vs-card flex flex-col p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{sc.icon}</svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{sc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{sc.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

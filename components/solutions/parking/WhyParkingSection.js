'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { title: 'Long Search Times', desc: 'Drivers spend valuable time searching for vacant spaces.', icon: '🕒' },
  { title: 'Congestion', desc: 'Traffic bottlenecks negatively impact customer experiences.', icon: '🚗' },
  { title: 'High Operational Costs', desc: 'Manual monitoring increases labor expenses.', icon: '💸' },
  { title: 'Limited Visibility', desc: 'Operators lack real-time parking occupancy information.', icon: '🙈' },
  { title: 'Revenue Loss', desc: 'Underutilized parking spaces affect profitability.', icon: '📉' },
];

const benefits = [
  { title: 'ANPR Technology', desc: 'Ticketless access and automated billing.' },
  { title: 'Occupancy Detection', desc: 'Real-time monitoring of available spaces.' },
  { title: 'Parking Guidance', desc: 'Navigate drivers directly to empty bays.' },
  { title: 'Vehicle Attribute Recognition', desc: 'Advanced tracking and security profiling.' },
  { title: 'Enforcement Analytics', desc: 'Detect overstays and illegal parking.' },
  { title: 'Centralized Management', desc: 'Multi-site visibility and real-time reporting.' },
];

export default function ParkingWhySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pw-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.pw-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pw-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pw-rev.pw-vis { opacity:1; transform:none; }
        .pw-d0{transition-delay:0s} .pw-d1{transition-delay:.08s} .pw-d2{transition-delay:.16s}
        .pw-card { transition: box-shadow 0.3s, transform 0.3s; }
        .pw-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.06) !important; transform: translateY(-4px); }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Challenges */}
            <div>
              <div className="pw-rev pw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h2 className="pw-rev pw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Parking Challenges in Modern Facilities
              </h2>
              <p className="pw-rev pw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                Managing parking operations has become increasingly complex due to rising vehicle volumes, inefficient space utilization, traffic congestion, and growing customer expectations.
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
               <div className="pw-rev pw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(16,185,129,.08)',color:'#059669',border:'1px solid rgba(16,185,129,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The SecureAAi Advantage
              </div>
              <h2 className="pw-rev pw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                One Platform. <span className="text-emerald-600">Complete Visibility.</span>
              </h2>
              <p className="pw-rev pw-d2 text-slate-600 text-lg mb-8 leading-relaxed">
                SecureAAi combines multiple smart technologies to create a complete intelligent parking ecosystem.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="pw-card p-5 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 border border-emerald-100">
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

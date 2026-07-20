'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Icon({ path }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}

const challenges = [
  {
    title: 'Paper Tickets & Manual Processes',
    desc: 'Traditional systems rely on paper tickets and manual handling that slow down operations.',
    icon: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 7h8M8 11h8M8 15h4" /></>,
  },
  {
    title: 'Manual Cash Collection',
    desc: 'Cash-based collection increases handling costs, errors, and security risks.',
    icon: <><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M6 6v12M18 6v12" /></>,
  },
  {
    title: 'Disconnected Payment Systems',
    desc: 'Standalone payment systems fail to share data, creating inefficiencies across sites.',
    icon: <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.6" y1="10.6" x2="15.4" y2="7.4" /><line x1="8.6" y1="13.4" x2="15.4" y2="16.6" /></>,
  },
  {
    title: 'Long Queues at Peak Hours',
    desc: 'Manual processing at entry and exit creates congestion during high-traffic periods.',
    icon: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></>,
  },
];

const combines = [
  'Parking Payment Platform',
  'Digital Payment Integration',
  'ANPR-Based Ticketless Parking',
  'Payment Gateway Integration',
  'Mobile Payment Solutions',
  'QR Code Payment',
  'Subscription Management',
  'Revenue Reporting',
  'Parking Billing Automation',
  'Financial Analytics',
  'API Integration',
  'Cloud Management',
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

        .pw-panel { border-radius: 28px; padding: 36px 32px; height: 100%; }
        .pw-panel-challenge { background: #fff; border: 1px solid #f1e2cf; }
        .pw-panel-solution { background: #fff; border: 1px solid rgba(1,97,254,.16); box-shadow: 0 20px 50px -24px rgba(1,97,254,.35); }

        .pw-card { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .pw-card-challenge:hover { box-shadow: 0 12px 28px rgba(217,119,6,0.10) !important; transform: translateY(-3px); border-color: rgba(217,119,6,.28) !important; }

        .pw-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
        }
      `}</style>
      <section ref={ref} id="why" className="relative bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'radial-gradient(circle,#e2e8f0 1px,transparent 1px)',backgroundSize:'28px 28px',opacity:0.6 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="pw-rev pw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Why It Matters
            </div>
            <h2 className="pw-rev pw-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              A Complete <span style={{ color:'#0161FE' }}>Digital Parking Payment Solution</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left: The Challenges */}
            <div className="pw-panel pw-panel-challenge">
              <div className="pw-rev pw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(217,119,6,.08)',color:'#b45309',border:'1px solid rgba(217,119,6,.22)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Challenge
              </div>
              <h3 className="pw-rev pw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                Outdated Payment Methods Slow Everyone Down
              </h3>
              <p className="pw-rev pw-d2 text-slate-500 mb-7 leading-relaxed">
                Traditional parking facilities often rely on paper tickets, manual cash collection, and standalone payment systems that increase operational costs and create long queues during peak hours.
              </p>

              <div className="space-y-3">
                {challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="pw-card pw-card-challenge flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white"
                  >
                    <div className="pw-icon-wrap" style={{ background:'rgba(217,119,6,.08)', color:'#b45309' }}>
                      <Icon path={c.icon} />
                    </div>
                    <div>
                      <h4 className="text-[0.92rem] font-bold text-slate-900">{c.title}</h4>
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: The Solution */}
            <div className="pw-panel pw-panel-solution">
              <div className="pw-rev pw-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                The Solution
              </div>
              <h3 className="pw-rev pw-d1 text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                What SecureAAi <span style={{ color:'#0161FE' }}>Provides</span>
              </h3>
              <p className="pw-rev pw-d2 text-slate-500 mb-6 leading-relaxed">
                SecureAAi delivers a complete SmartPay solution including:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {combines.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{c}</span>
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

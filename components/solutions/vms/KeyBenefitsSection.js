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

const benefits = [
  {
    title: 'Centralized Security Management',
    desc: 'Manage thousands of cameras and multiple facilities from one platform.',
    icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  },
  {
    title: 'Real-Time Situational Awareness',
    desc: 'Monitor events and receive instant notifications for critical incidents.',
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  },
  {
    title: 'Faster Investigations',
    desc: 'Retrieve video footage quickly using intelligent search capabilities.',
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.4" y2="16.4" /><path d="M12.5 3.5 13 2M20 12.5l1.5.5" /></>,
  },
  {
    title: 'Improved Operational Efficiency',
    desc: 'Reduce complexity and simplify day-to-day security operations.',
    icon: <><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></>,
  },
  {
    title: 'Enterprise Scalability',
    desc: 'Support projects ranging from small businesses to city-wide deployments.',
    icon: <><path d="M3 20h18" /><path d="M5 20V11l4 3v-3l4 3v-3l4 3v6" /><path d="M18 8V5l-3 2" /></>,
  },
  {
    title: 'Future-Ready Architecture',
    desc: 'Integrate with AI analytics, cloud platforms, and third-party systems.',
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>,
  },
];

export default function VmsKeyBenefitsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vkb-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.vkb-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vkb-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .vkb-rev.vkb-vis { opacity:1; transform:none; }
        .vkb-d0{transition-delay:0s} .vkb-d1{transition-delay:.08s}
        .vkb-card { transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .vkb-card:hover { box-shadow: 0 12px 32px rgba(1,97,254,0.10); transform: translateY(-4px); border-color: rgba(1,97,254,.3); }
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="vkb-rev vkb-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              Key Benefits
            </div>
            <h2 className="vkb-rev vkb-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Teams Choose <span style={{ color:'#0161FE' }}>SecureAAi VMS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="vkb-card p-6 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:'rgba(1,97,254,.08)', color:'#0161FE' }}>
                  <Icon path={b.icon} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

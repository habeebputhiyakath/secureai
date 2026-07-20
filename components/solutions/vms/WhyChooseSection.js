'use client';
import { motion } from 'framer-motion';

const reasons = [
  'Centralized Management',
  'Enterprise Scalability',
  'Real-Time Monitoring',
  'AI Analytics Integration',
  'Open Platform Architecture',
  'Multi-Site Management',
  'Advanced Search Tools',
  'Cloud Connectivity',
  'Future-Ready Design',
  '24/7 Technical Support',
];

export default function VmsWhyChooseSection() {
  return (
    <>
      <style>{`
        .vwc-item { transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s; }
        .vwc-item:hover { border-color: rgba(1,97,254,.35); box-shadow: 0 8px 22px rgba(1,97,254,.08); transform: translateY(-2px); }
        .vwc-banner {
          border-radius: 24px; overflow: hidden; height: 160px;
          box-shadow: 0 20px 50px -20px rgba(1,97,254,.3);
        }
        .vwc-banner img { display:block; width:100%; height:100%; object-fit:cover; }
      `}</style>
      <section className="relative py-24 lg:py-32 border-t border-slate-100"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)' }}>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="vwc-banner mb-12"
          >
            <img src="/products/overview/cta.png" alt="Connected smart buildings with IoT monitoring" />
          </motion.div>

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              The SecureAAi Advantage
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Choose <span style={{ color:'#0161FE' }}>SecureAAi Video Management System?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="vwc-item flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background:'rgba(1,97,254,.1)', color:'#0161FE' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">{r}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

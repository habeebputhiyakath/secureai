'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { label: 'REST API', icon: '🔗' },
  { label: 'FASTag',   icon: '🏷️' },
  { label: 'UPI / QR', icon: '📲' },
  { label: 'ERP / SAP',icon: '🏢' },
  { label: 'CCTV VMS', icon: '📹' },
  { label: 'Stripe',   icon: '💳' },
  { label: 'WhatsApp', icon: '💬' },
  { label: 'IoT Sensors',icon:'📡' },
];

const benefits = [
  { title: 'Open REST APIs', desc: 'Connect to any third-party system, ERP, or CRM using well-documented RESTful endpoints.' },
  { title: 'Legacy Hardware Ready', desc: 'Works with your existing barriers, cameras, and payment kiosks — no rip-and-replace.' },
  { title: 'Cloud & On-Prem', desc: 'Deploy on our managed cloud or host on-premise in your own data centre.' },
  { title: 'White-label Option', desc: 'Full rebranding support for SIs and operators who want ParkSi under their own name.' },
];

export default function IntegrationSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ig-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.ig-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ig-rev {
          opacity:0; transform:translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .ig-rev.ig-vis { opacity:1; transform:none; }
        .ig-d0{transition-delay:0s} .ig-d1{transition-delay:0.08s}
        .ig-d2{transition-delay:0.16s} .ig-d3{transition-delay:0.24s}
        .ig-chip:hover {
          border-color:#a3c4fe !important;
          box-shadow:0 4px 18px rgba(1,97,254,0.12);
          transform:translateY(-2px);
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.45,
          }} />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <div>
              <div
                className="ig-rev ig-d0 mb-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                  border: '1px solid rgba(1,97,254,0.18)',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                Open Ecosystem
              </div>
              <h2 className="ig-rev ig-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-5">
                Plugs Into<br />
                <span style={{ color: '#0161FE' }}>Your Stack</span>
              </h2>
              <p className="ig-rev ig-d2 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
                ParkSi is integration-first. Connect payment gateways, legacy barriers, ERP systems, and smart-city platforms without a single line of custom glue code.
              </p>

              <div className="ig-rev ig-d3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ background: 'rgba(1,97,254,0.1)', color: '#0161FE' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-0.5">{b.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — integration chips */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50"
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.05)' }}
              >
                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-6">Compatible With</p>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="ig-chip inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 transition-all duration-200 cursor-default"
                    >
                      <span>{t.icon}</span> {t.label}
                    </motion.div>
                  ))}
                </div>

                {/* Mini API snippet */}
                <div className="mt-8 rounded-xl bg-slate-900 p-4 overflow-x-auto">
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Sample API</p>
                  <pre className="text-xs text-green-400 leading-relaxed" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
{`GET /api/v1/slots?zone=B&status=free
Authorization: Bearer <token>

→ 200 OK
{ "available": 14, "zone": "B" }`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
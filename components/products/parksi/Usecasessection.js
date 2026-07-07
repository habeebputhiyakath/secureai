'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'Commercial',
    title: 'Shopping Malls & Retail Complexes',
    desc: 'Maximize revenue with dynamic pricing, reduce congestion at peak hours, and give shoppers real-time slot guidance via app or LED signage.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/4a/73/5e/caption.jpg?w=500&h=500&s=1',
    stat: '35% revenue uplift',
  },
  {
    tag: 'Corporate',
    title: 'Office Parks & Business Hubs',
    desc: 'Monthly permit management, EV charging allocation, visitor pre-booking, and tailgate-prevention barriers — all managed from one dashboard.',
    img: 'https://sajaydevelopers.com/wp-content/uploads/2022/07/revisedfrontviewAndheri-Final-scaled.jpg',
    stat: '60% faster entry',
  },
  {
    tag: 'Hospitality',
    title: 'Hotels & Resorts',
    desc: 'Valet-assist mode, automated guest recognition on repeat visits, and seamless billing integration with your PMS or POS system.',
    img: 'https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg',
    stat: '4.8★ guest satisfaction',
  },
  {
    tag: 'amusement park',
    title: 'amusement park',
    desc: 'control, violation detection, enforcement dashboards, and open data APIs for smart-city integration.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/70/21/f5/a9da3cb7-106b-43cd-8b48.jpg?w=500&h=500&s=1',
    stat: '40% fewer violations',
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('uc-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.uc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .uc-rev {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .uc-rev.uc-vis { opacity: 1; transform: none; }
        .uc-d0{transition-delay:0s} .uc-d1{transition-delay:0.08s} .uc-d2{transition-delay:0.16s}
        .uc-card { position:relative; overflow:hidden; }
        .uc-card img { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
        .uc-card:hover img { transform: scale(1.04); }
        .uc-tag {
          font-size:0.62rem; font-weight:700; letter-spacing:0.1em;
          text-transform:uppercase; color:#0161FE;
          background:rgba(1,97,254,0.08);
          border:1px solid rgba(1,97,254,0.18);
          border-radius:9999px; padding:4px 12px;
        }
        .uc-stat {
          font-family:'JetBrains Mono',monospace;
          font-size:0.72rem; font-weight:600; color:#0161FE;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-100"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px', opacity: 0.3,
          }} />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 60% 60%, #dbeafe, transparent 70%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div
              className="uc-rev uc-d0 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(1,97,254,0.07)', color: '#0161FE',
                border: '1px solid rgba(1,97,254,0.18)',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Industry Applications
            </div>
            <h2 className="uc-rev uc-d1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              Built for Every<br />
              <span style={{ color: '#0161FE' }}>Parking Environment</span>
            </h2>
            <p className="uc-rev uc-d2 text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you manage 50 bays or 5,000, ParkSi scales to fit the operation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="uc-card bg-white rounded-2xl border border-slate-200 overflow-hidden group"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                {/* Image */}
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  {/* Overlay stat badge */}
                  <div
                    className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-1.5"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                  >
                    <span className="uc-stat">{c.stat}</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6">
                  <span className="uc-tag mb-3 inline-block">{c.tag}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  { name: 'Smart City', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop', link: '/industries/smart-city', tags: ['Traffic', 'Surveillance'] },
  { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop', link: '/industries/healthcare', tags: ['Access Control', 'AI Analytics'] },
  { name: 'Airport', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop', link: '/industries/airport', tags: ['Perimeter', 'ANPR'] },
  { name: 'Industrial', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', link: '/industries/industrial', tags: ['Safety', 'VMS'] },
  { name: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop', link: '/industries/retail', tags: ['POS', 'Heat Maps'] },
  { name: 'Logistics', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', link: '/industries/logistics', tags: ['Fleet', 'Tracking'] },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Industries() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ind-vis'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.ind-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ind-rev { opacity: 0; transform: translateY(26px); transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .ind-rev.ind-vis { opacity: 1; transform: none; }
        .ind-d0 { transition-delay: 0.00s; }
        .ind-d1 { transition-delay: 0.08s; }
        .ind-d2 { transition-delay: 0.16s; }
      `}</style>

      <section ref={ref} className="relative overflow-hidden bg-white py-20 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-10">
            <div>
              <div className="ind-rev ind-d0 mb-5">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                  Use Cases
                </span>
              </div>
              <h2 className="ind-rev ind-d1 text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
                Built for Every{' '}
                <span style={{ color: '#0161FE' }}>Environment</span>
              </h2>
            </div>
            <div className="ind-rev ind-d2 shrink-0 self-start sm:self-auto">
              <Link href="/industries" className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0161FE] border-[1.5px] border-[#0161FE] rounded-full px-6 py-3 transition-all duration-200 hover:bg-[#0161FE] hover:text-white">
                All Industries <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* Large 2-up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            {industries.slice(0, 2).map((ind, i) => (
              <Link key={ind.name} href={ind.link}>
                <motion.div
                  initial={{ scale: 1.06, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="group relative rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[380px] flex flex-col justify-end cursor-pointer no-underline"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url(${ind.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                  <div className="absolute top-5 right-5 z-10 w-[34px] h-[34px] rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                    <ArrowIcon />
                  </div>
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {ind.tags.map(tag => (
                        <span key={tag} className="text-[10.5px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug tracking-tight">{ind.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* List rows */}
          <div className="border-t border-slate-200">
            {industries.slice(2).map((ind, i) => (
              <Link key={ind.name} href={ind.link} className="group flex items-center gap-5 border-b border-slate-200 py-5 rounded-lg hover:bg-slate-50 transition-colors duration-150 no-underline cursor-pointer">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="w-[110px] h-[68px] rounded-xl overflow-hidden shrink-0 bg-slate-100"
                >
                  <img src={ind.img} alt={ind.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    {ind.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full border-[1.5px] border-slate-200 text-slate-500">{tag}</span>
                    ))}
                  </div>
                  <p className="text-[13.5px] font-semibold text-slate-700 leading-snug tracking-tight transition-colors duration-200 group-hover:text-slate-950">{ind.name}</p>
                </div>
                <div className="hidden sm:flex w-8 h-8 rounded-full border-[1.5px] border-slate-200 items-center justify-center text-slate-400 shrink-0 group-hover:translate-x-[2px] transition-all duration-200">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
